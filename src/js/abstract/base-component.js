import nanomorph from './component-morph';
import { isSameNodeOnce, clearIsSameNode } from './is-same-node-once';
import getAttribute from '../get-attribute';
import toProp from '../to-prop';
import { publish, subscribe } from '../pubsub';
import debounce from '../debounce';
import camelize from '../camelize';
import dasherize from '../dasherize';
import maybe from '../maybe';
import PropertyExistsException from './property-exists-exception';

const THROWED_ERROR = 'throwed';
const PROPERTY_WHITELIST = ['title', 'checked', 'disabled'];
const ids = {};
const getId = (nodeName) => {
  if (!(nodeName in ids)) {
    ids[nodeName] = 0;
  }

  return ++ids[nodeName]; // eslint-disable-line no-plusplus
};
const lifecycleLogger = maybe((...args) => console.log(...args))()(true);

/**
 * Base class {BaseComponent}. This class checks if a template is set in the custom element
 * and if yes appends it. It also appends custom styles to the top of the dom tree.
 *
 * **Light DOM**
 * The light DOM are the provided children from the users of your component (light meaning easy to digest).
 *
 * ```html
 * <axa-example>
 *   <div>This is some light DOM for axa-example</div>
 * </axa-example>
 * ```
 *
 * **Local DOM**
 * The local DOM is the DOM tree rendered by the component itself (in our case provided by `template`).
 *
 * ```js
 * export default function(props, childrenFragment) {
 *   return nanohtml`<article>
 *     ${childrenFragment} <!-- light DOM injection point -->
 *   </article>`;
 * }
 * ```
 *
 * **Flattened DOM**
 * The flattened DOM is the final product where the user's light DOM is injected into the Components local DOM.
 *
 * ```html
 * <axa-example>
 *   <article>
 *     <div>This is some light DOM for axa-example</div> <!-- light DOM injection point -->
 *   </article>
 * </axa-example>
 * ```
 */
export default class BaseComponent extends HTMLElement {
  constructor(styles = '', template) {
    super();

    this._initialise(styles, template);
    this._id = getId(this.nodeName);
    this._props = {};
    this._hasKeys = {};
    this.reRender = debounce(() => this.render(), 50);

    const { constructor: { observedAttributes } } = this;

    // add DOM property getters/setters for related attributes
    if (Array.isArray(observedAttributes)) {
      observedAttributes.forEach((attr) => {
        const key = camelize(attr);
        const hasKey = key in this;

        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`\n<-> apply getter/setter for ${key} by _${attr}`);
        }

        if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
          throw new PropertyExistsException(key, this);
        }

        this._hasKeys[key] = hasKey;

        // @todo: may we should allow deletion by setting configurable: true
        Object.defineProperty(this, key, {
          get() {
            return this[`_${key}`];
          },
          set(value) {
            const name = `_${key}`;

            // only update the value if it has actually changed
            // and only re-render if it has changed
            if (!this.shouldUpdateCallback(this[name], value)) {
              return;
            }

            this[name] = value;
            this._props[key] = value;

            if (hasKey) {
              super[key] = value;
            }

            if (this._isConnected && this._hasRendered) {
              if (ENV !== PROD) {
                lifecycleLogger(this.logLifecycle)(`\n---> setter for ${key} by _${key}`);
              }

              this.reRender();
            }
          },
        });
      });
    }
  }

  /**
   * _initialise - description
   *
   * @param  {type} styles description
   * @param  {type} template description
   * @return {type}        description
   */
  _initialise(styles, template = null) {
    this._styles = styles;
    this._template = template;
    this._hasTemplate = !!template;
    this._hasRendered = false;
    this._isConnected = false;
  }

  /**
   * connectedCallback - description
   *
   * @return {type}  description
   */
  connectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`\n^^^ connectedCallback -> ${this.nodeName}#${this._id}`);
    }

    if (!this._isConnected) {
      this._isConnected = true;

      const { constructor: { observedAttributes } } = this;

      this.initialClassName = this.className;

      if (Array.isArray(observedAttributes)) {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`\n!!! observedAttributes start -> ${this.nodeName}#${this._id}`);
        }

        observedAttributes.forEach((attr) => {
          const key = camelize(attr);

          if (this.hasAttribute(attr)) {
            const value = getAttribute(this, attr);
            const hasKey = this._hasKeys[key];
            const name = `_${key}`;

            this[name] = value;
            this._props[key] = value;

            if (hasKey) {
              super[key] = value;
            }
          }
        });

        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`\n??? observedAttributes end -> ${this.nodeName}#${this._id}`);
        }
      }
    }

    this._appendStyles();
    this.render();

    if (this.contextCallback) {
      this._makeContextReady();
    }
  }

  /**
   * Default behaviour is to re-render on attribute addition, change or removal.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`+++ attributeChangedCallback -> ${this.nodeName}#${this._id} | ${name} from ${oldValue} to ${newValue}\n`);
    }

    // only update the value if it has actually changed
    // and only re-render if it has changed
    if (!this.shouldUpdateCallback(newValue, oldValue)) {
      return;
    }

    const key = camelize(name);

    this[key] = toProp(newValue);
  }

  /**
   * A fast and simpler way to update multiple props in one go.
   * Especially useful for integrations and to prevent multiple re-renders.
   *
   * @param {{}} props - DOM properties to be updated.
   */
  batchProps(props) {
    const { constructor: { observedAttributes = [] } } = this;
    const propsKeys = Object.keys(props);
    const filter = key => observedAttributes.indexOf(dasherize(key)) > -1;
    const { shouldUpdate } = propsKeys.filter(filter).reduce(this._reduceProps, { props, shouldUpdate: false });

    if (shouldUpdate && this._isConnected && this._hasRendered) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`\n---> batchProps for ${propsKeys.join(', ')}`);
      }

      this.render();
    }
  }

  /**
   * Props reducer for batch processing.
   *
   * @param {{}} props - The properties to be batch processed.
   * @param {Boolean} shouldUpdate - Is re-render necessary?
   * @param {String} key - the current property's key.
   * @returns {{props: {}, shouldUpdate: boolean}} - For the next accumulator iteration.
   */
  _reduceProps = ({ props, shouldUpdate }, key) => {
    const hasKey = this._hasKeys[key];

    if (PROPERTY_WHITELIST.indexOf(key) === -1 && hasKey) {
      throw new PropertyExistsException(key, this);
    }

    const name = `_${key}`;
    const value = props[key];
    const oldValue = this[name];

    if (!shouldUpdate && !this.shouldUpdateCallback(value, oldValue)) {
      return {
        props,
        shouldUpdate: false,
      };
    }

    this[name] = value;
    this._props[key] = value;

    if (hasKey) {
      super[key] = value;
    }

    return {
      props,
      shouldUpdate: true,
    };
  }

  /**
   * Check if a re-render is really necessary.
   * Basic check does a shallow comparison.
   *
   * @param {*} newValue - the new value of an attribute.
   * @param {*} oldValue - the existing value of an attribute.
   * @returns {Boolean} - Returns `true` if attributes have changed, else `false`.
   */
  // eslint-disable-next-line class-methods-use-this
  shouldUpdateCallback(newValue, oldValue) {
    return newValue !== oldValue;
  }

  /**
   * disconnectedCallback - description
   *
   * @return {type}  description
   */
  disconnectedCallback() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`$$$ disconnectedCallback -> ${this.nodeName}#${this._id}\n`);
    }

    if (this.unContextEnabled) {
      this.unContextEnabled();
    }

    this._isConnected = false;
  }
  /**
   * _appendStyles - description
   *
   * @return {type}  description
   */
  _appendStyles(el = this) {
    if (this._styles) {
      const styleNode = document.createElement('style');
      const styleText = document.createTextNode(this._styles);
      styleNode.appendChild(styleText);
      if (el.insertAdjacentElement) {
        el.insertAdjacentElement('afterbegin', styleNode);
      } else {
        el.appendChild(styleNode);
      }
    }
  }

  /**
   * render - method can be overwritten and is called right after the component is connected
   * @TODO how to deal with re-renders, e.g. triggered by `attributeChangedCallback` or observed DOM
   *
   * @return {type}  description
   */
  render() { // eslint-disable-line
    const initial = !this._hasRendered;

    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`willRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
    }

    this.willRenderCallback(initial);

    if (this._hasTemplate) {
      if (ENV !== PROD) {
        lifecycleLogger(this.logLifecycle)(`render -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
      }

      const { _template: template } = this;

      try {
        // At initial rendering -> collect the light DOM first
        if (initial) {
          const childrenFragment = document.createDocumentFragment();
          const lightDOMRefs = [];

          while (this.firstChild) {
            lightDOMRefs.push(this.firstChild);
            childrenFragment.appendChild(this.firstChild);
          }

          this._lightDOMRefs = lightDOMRefs;
          this.childrenFragment = childrenFragment;
        } else { // Reuse the light DOM for subsequent rendering
          this._lightDOMRefs.forEach((ref) => {
            // Important: Once the light DOM is live it shouldn't be moved out
            // instead make sure to clone it for incremental updates
            const refClone = ref.cloneNode(false);

            // Another piece of code is managing that part of the DOM tree.
            isSameNodeOnce(ref);
            isSameNodeOnce(refClone);

            // Note: DocumentFragments always get emptied after being appended to another document (they get moved)
            // so we can always reuse this
            this.childrenFragment.appendChild(refClone);
          });
        }

        const items = template(this._props, this.childrenFragment);
        const renderFragment = document.createDocumentFragment();

        if (Array.isArray(items)) {
          items.forEach((item) => {
            renderFragment.appendChild(item);
          });
        } else if (items) {
          if (typeof items === 'string') {
            const err = new Error(THROWED_ERROR);
            // @TODO: implement log system
            console.error( // eslint-disable-line
              `\n%cWeb Component %c${this.nodeName}%c#${this._id} does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: ${err.stack}\n`, // eslint-disable-line
              'color: #580000; font-size: 14px; line-height:16px;',
              'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
              'color: #580000; font-size: 14px; line-height:16px;',
            );
            throw err;
          }
          renderFragment.appendChild(items);
        }

        if (initial) {
          super.appendChild(renderFragment);
        } else {
          const wcClone = this.cloneNode(false);

          if (ENV !== PROD) {
            lifecycleLogger(this.logLifecycle)(`+++ incremental update -> ${this.nodeName}#${this._id}\n`);
          }

          wcClone._isMorphing = true;
          wcClone.appendChild(renderFragment);

          this._isMorphing = true;
          nanomorph(this, wcClone);
          clearIsSameNode();
          this._isMorphing = false;
        }
      } catch (err) {
        if (err.message !== THROWED_ERROR) {
          console.error( // eslint-disable-line
            `\n%cWeb Component %c${this.nodeName}%c#${this._id} has an error while loading its template:\n${err}\n\nStack Trace: ${err.stack}\n`,
            'color: #580000; font-size: 14px; line-height:16px;',
            'background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;',
            'color: #580000; font-size: 14px; line-height:16px;',
          );
        }
      }
    }

    this._hasRendered = true;

    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`didRenderCallback -> ${this.nodeName}#${this._id} <- initial: ${initial}`);
    }

    this.didRenderCallback(initial);
  }

  /**
   * Optionally overwrite this public method, it get's triggered as soon as your component will render.
   * Here you will cleanup your lost DOM references or their associated events or stuff like that.
   *
   * @param [Boolean] initial - Whether or not this was the first render of this component.
   */
  willRenderCallback(initial) {} // eslint-disable-line

  /**
   * Optionally overwrite this public method, it get's triggered as soon as your component did render.
   * Here you will reattach your lost DOM references and events or stuff like that.
   *
   * @param [Boolean] initial - Whether or not this was the first render of this component.
   */
  didRenderCallback(initial) {} // eslint-disable-line

  /**
   * Monkey patch `innerText` API to re-rendering.
   *
   * @param {String} text
   */
  set innerText(text) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.innerText = text;
      return;
    }

    const textNode = document.createTextNode(text);

    this._lightDOMRefs = [textNode];

    this.render();
  }

  /**
   * Monkey patch `textContent` API to re-rendering.
   *
   * @param {String} text
   */
  set textContent(text) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.textContent = text;
      return;
    }

    const textNode = document.createTextNode(text);

    this._lightDOMRefs = [textNode];

    this.render();
  }

  /**
   * Monkey patch `innerHTML` API to re-rendering.
   *
   * @param {String} html
   */
  set innerHTML(html) {
    if (!this._hasTemplate || !this._hasRendered) {
      super.innerHTML = html;
      return;
    }

    const div = document.createElement('div');

    div.innerHTML = html;

    this._lightDOMRefs = Array.from(div.children);

    this.render();
  }

  /**
   * Monkey patch `appendChild` API to re-rendering.
   *
   * @param {Element} node
   */
  appendChild(node) {
    if (this._isMorphing || !this._hasTemplate || !this._hasRendered) {
      super.appendChild(node);
      return;
    }

    this._lightDOMRefs.push(node);

    this.render();
  }

  /**
   * Only morph children of current custom element, not any other custom element.
   *
   * @returns {boolean}
   */
  skipChildren() {
    return !this._isMorphing;
  }

  // @TODO: atm no data can be shared by enabling context, though this could be necessary
  /**
   * Provides an opt-in contextual scope for hierarchy-agnostic child components.
   */
  enableContext() {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`enableContext -> ${this.nodeName}#${this._id}`);
    }

    const contextName = this.nodeName.toLowerCase();

    this.__isContext = true;
    this.__contextName = contextName;

    // publish context/enabled with contextual node name
    publish('context/enabled', contextName);
  }

  /**
   * Opt-in to select a specific context by component name.
   *
   * @param name
   */
  selectContext(name) {
    if (ENV !== PROD) {
      lifecycleLogger(this.logLifecycle)(`selectContext -> ${this.nodeName}#${this._id} <- context: ${name}`);
    }

    this.__selectedContext = name && name.toLowerCase();
  }

  _makeContextReady = ({ detail: contextName } = {}) => {
    if (this.contextNode) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        if (ENV !== PROD) {
          lifecycleLogger(this.logLifecycle)(`contextCallback -> ${this.nodeName}#${this._id} <- context: ${contextName}`);
        }

        this.contextCallback(this.contextNode, contextName);
      }, 10);
    }

    if (this.unContextEnabled) {
      this.unContextEnabled();
    }

    this.unContextEnabled = subscribe('context/enabled', this._makeContextReady);
  }

  /**
   * Returns contextual scope, if defined by any parent component.
   *
   * @returns {ContextNode|Boolean} - Returns an associated context node if found, else `false`.
   */
  get contextNode() {
    const { __selectedContext } = this;
    let { parentNode } = this;

    while (parentNode && (!parentNode.__isContext || (__selectedContext && __selectedContext !== parentNode.__contextName))) {
      // eslint-disable-next-line prefer-destructuring
      parentNode = parentNode.parentNode;
    }

    return (parentNode && parentNode.__isContext) ? parentNode : false;
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); // eslint-disable-line
      return v.toString(16);
    });
  }
}
