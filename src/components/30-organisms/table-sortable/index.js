import { LitElement, css, unsafeCSS, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@axa-ch/table';
import defineOnce from '../../../utils/define-once';
import fireCustomEvent from '../../../utils/custom-event';
import { applyDefaults } from '../../../utils/with-react';
import tableCss from './index.scss';

const ASC = 'ascending';
const DESC = 'descending';
const TABLE_BODY = 'tbody';
const TABLE_FOOT = 'tfoot';
// codes that are used to simulate click on row via keyboard
const KEY_CODES = [13, 32];
// key names that are used to simulate click on row via keyboard
const KEY_NAMES = ['Space', 'Enter'];

const mapAsc = {
  [ASC]: 'ASC',
  [DESC]: 'DESC',
};

class AXATableSortable extends LitElement {
  constructor() {
    super();
    this.defaultModel = {
      thead: [],
      tbody: [[]],
      tfoot: [[]],
    };
    applyDefaults(this);
    this.firstRender = true;
    this.numCollator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    this.strCollator = new Intl.Collator(undefined, {
      sensitivity: 'variant',
    });
    this.lastIndex = -1;
  }

  static get tagName() {
    return 'axa-table-sortable';
  }

  static get styles() {
    return css`
      ${unsafeCSS(tableCss)}
    `;
  }

  static get properties() {
    return {
      model: { type: Object, defaultValue: { ...this.defaultModel } },
      innerscroll: { type: Number },
      maxheight: { type: Number },
      onClick: { type: Function, attribute: false },
    };
  }

  areValuesEqualOrZero(a, b) {
    if (a === b) {
      return true;
    }
    if (a === 0 || b === 0) {
      return true;
    }
    return false;
  }

  areLengthValuesConsistent(bodyLength = 0, headLength = 0, footLength = 0) {
    // all levels equal
    if (headLength === bodyLength && bodyLength === footLength) {
      return true;
    }

    // special behaviour
    // body is mandatory if another level has elements
    if (bodyLength === 0 && (headLength > 0 || footLength > 0)) {
      return false;
    }

    // all levels are valid html
    if (headLength === 0) {
      return this.areValuesEqualOrZero(bodyLength, footLength);
    }

    if (bodyLength === 0) {
      return this.areValuesEqualOrZero(headLength, footLength);
    }

    if (footLength === 0) {
      return this.areValuesEqualOrZero(headLength, bodyLength);
    }

    return false;
  }

  validateModel() {
    const {
      thead: { length: theadL },
      tbody: {
        0: { length: tbodyL },
      },
      tfoot,
    } = this.model;
    let tfootL = 0;
    if (tfoot && tfoot[0]) {
      tfootL = tfoot[0].length;
    }
    return this.areLengthValuesConsistent(tbodyL, theadL, tfootL);
  }

  getSortingAria(config) {
    if (!config.sort) {
      return 'none';
    }
    if (config.sort === 'DESC') {
      return DESC;
    }
    return ASC;
  }

  sortByIndex(index, actualSortAs) {
    const sortAs = actualSortAs === ASC ? DESC : ASC; // TODO why? in my opinion aria is set to early
    const tmpModel = { ...this.model };
    const { tbody, tfoot } = this.model;
    const hasCustomSortingAlgo = !!tmpModel.thead[index].custom;

    tmpModel.tbody = this.sort(tbody, index, sortAs, hasCustomSortingAlgo);

    if (tfoot && tfoot[0]) {
      tmpModel.tfoot = this.sort(tfoot, index, sortAs, hasCustomSortingAlgo);
    } else {
      tmpModel.tfoot = [[]];
    }

    tmpModel.thead[index].sort = mapAsc[sortAs];

    this.lastIndex = index;
    this.model = tmpModel;
  }

  // V8 engine uses QuickSort algorythm for Array.prototype.sort
  // with elements less then 10. for more then 10, it uses the InsertionSort
  // algorythm. As result, for arrays containing 10 or fewer elements,
  // time complexity of .sort is O(n^2), and space complexity is O(1).
  // For longer arrays time complexity is Θ(n log(n)) (average case),
  // and space complexity is O(log(n))
  sort(arr, index, sortAs, hasCustomSortingAlgo) {
    return arr.sort((rowLx, rowRx) => {
      const {
        [index]: { html: cellRx },
      } = rowRx;
      const {
        [index]: { html: cellLx },
      } = rowLx;
      const cleanCellRx = cellRx.replace(/<[^>]*>/g, '').trim();
      const cleanCellLx = cellLx.replace(/<[^>]*>/g, '').trim();
      let result;

      if (hasCustomSortingAlgo) {
        // TODO call function in thead from object
        result = blabla(cleanCellLx, cleanCellRx);
      } else {
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(parseInt(cleanCellLx.charAt(0), 10))) {
          result = this.numCollator.compare(cleanCellLx, cleanCellRx);
          console.log(result);
        } else {
          result = this.strCollator.compare(cleanCellLx, cleanCellRx);
          console.log(result);
        }
      }

      return sortAs === ASC ? result : ~result + 1;
    });
    // TODO remove this function
    function blabla(a, b) {
      const dateA = convertDate(a);
      const dateB = convertDate(b);

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }

      return 0;

      function convertDate(d) {
        const parts = d.split('.');
        return +(parts[2] + parts[1] + parts[0]);
      }
    }
  }

  shouldUpdate(...args) {
    if (this.firstRender) {
      this.firstRender = false;
      this.model = { ...this.defaultModel, ...this.model };
    }
    if (!this.validateModel()) {
      throw new Error('Invalid model provided');
    }
    return super.shouldUpdate(...args);
  }

  handleOnClick = (ev, index, type) => {
    ev.preventDefault();
    ev.stopPropagation();
    const { currentTarget } = ev;
    const trimmedRow = currentTarget.textContent.replace(/\s+/g, ' ').trim();
    const details = {
      type,
      index,
      domElement: currentTarget,
      textArray: trimmedRow.split(' '),
    };
    this.onClick(details);
    fireCustomEvent('click', details, this, { bubbles: false });
  };

  // if is focused, let the row be pressed via keyboard
  onKeyPress = (...args) => {
    const {
      0: { charCode, code },
    } = args;
    if (KEY_CODES.indexOf(charCode) > -1 || KEY_NAMES.indexOf(code) > -1) {
      this.handleOnClick(...args);
    }
  };

  render() {
    const { thead, tbody, tfoot } = this.model;

    return html`
      <axa-table
        class="o-table-sortable"
        maxheight="${this.maxheight}"
        innerscroll="${this.innerscroll}"
      >
        <table>
          <thead>
            <tr>
              ${thead &&
                thead.map(
                  (config, index) => html`
                    <th
                      class="${this.lastIndex === index
                        ? 'o-table-sortable__th--selected'
                        : ''}"
                      @click="${() => {
                        const sortingAria = this.getSortingAria(config);
                        if (sortingAria !== 'none') {
                          this.sortByIndex(index, sortingAria);
                        }
                      }}"
                      aria-sort="${this.getSortingAria(config)}"
                    >
                      <div class="o-table-sortable__th__flexcontainer">
                        <span>${config.html}</span>
                        <div class="o-table-sortable__th__arrow-wrapper">
                          <div
                            class="o-table-sortable__th__arrow o-table-sortable__th__arrowup"
                          ></div>
                          <div
                            class="o-table-sortable__th__arrow o-table-sortable__th__arrowdown"
                          ></div>
                        </div>
                      </div>
                    </th>
                  `
                )}
            </tr>
          </thead>
          <tbody>
            ${tbody &&
              tbody.map(
                (cells, index) => html`
                  <tr
                    tabindex="0"
                    @click=${ev => {
                      this.handleOnClick(ev, index, TABLE_BODY);
                    }}
                    @keypress=${ev => {
                      this.onKeyPress(ev, index, TABLE_BODY);
                    }}
                  >
                    ${cells &&
                      cells.map(
                        cell => html`
                          <td>${unsafeHTML(cell.html)}</td>
                        `
                      )}
                  </tr>
                `
              )}
          </tbody>
          ${tfoot
            ? html`
                <tfoot>
                  ${tbody &&
                    tfoot.map(
                      (cells, index) => html`
                        <tr
                          tabindex="0"
                          @click=${ev => {
                            this.handleOnClick(ev, index, TABLE_FOOT);
                          }}
                          @keypress=${ev => {
                            this.onKeyPress(ev, index, TABLE_FOOT);
                          }}
                        >
                          ${cells &&
                            cells.map(
                              cell => html`
                                <td>${unsafeHTML(cell.html)}</td>
                              `
                            )}
                        </tr>
                      `
                    )}
                </tfoot>
              `
            : ''}
        </table>
      </axa-table>
    `;
  }
}

defineOnce(AXATableSortable.tagName, AXATableSortable);

export default AXATableSortable;
