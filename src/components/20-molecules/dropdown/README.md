# AXA Dropdown

This component represents a styled, enhanced replacement for native HTML &lt;select&gt;. The component is responsive, falling back to native look-and-feel under mobile viewports. Keyboard operation is supported.

[Controlled-Component](https://reactjs.org/docs/forms.html#the-select-tag) behaviour is supported.

## Properties

### defaultTitle

The String-valued attribute `defaultTitle` sets the initial title of the closed dropdown (default: first selected item).

Its intended use is primarily for native-HTML situations where server-generated `items` describe the choices proper,
and a separate title like `defaulttitle="Please select"` prompts the user to make a choice.

### value

The String-valued attribute `value` sets the selected dropdown option to the one with matching value.
When reading `value`, it returns the currently selected value.

### native

When true, the Boolean attribute `native` enforces native &lt;select&gt; UI look-and-feel for open dropdowns irrespective of
window widths.

### checkMark

When true, the Boolean attribute `checkmark` shows an animated checkmark to the right of the dropdown.

### invalid

The boolean attribute `invalid` serves to indicate the validity of the element (default: `false`). If `true`, it sets the element into a visual error state.

### error

The string-valued `error` provides error text as HTML. It sets the element into a visual error state, if `invalid` is true.

### disabled

The Boolean attribute `disabled` disables the underlying element, both visually and functionally.

Note that a disabled dropdown will not participate in form submission.

### maxHeight

When set to empty string (or used as boolean attribute), the String attribute `maxHeight` limits the height of an active dropdown to a sensible default and allows scrolling through its options.

When a number is given, the maxheight of the options will be limited to that value.

If you do not set this attribute, all the options will be displayed without any scrolling mechanism.

This property is most useful in space-constrained scenarios or with many options, e.g. in a country selector.

### items

Is an array of objects to set the options of the dropdown. The objects must have a `name` and `value` set. See an example at the top of this Readme.

| item     | Details                                                          |
| -------- | ---------------------------------------------------------------- |
| name     | The text that is displayed                                       |
| value    | The value that is submitted via form submit                      |
| selected | boolean: just set true to one of the options to preselect option |

### cropText

This removes the ellipsis dots when the value becomes too long to fully display on the dropdown element. It also reduces the paddings within the dropdown, for a more minified look.

Example: `+41 Switzer...` => `+41 Switzerla`

### showValue

Display the `value` instead of the `name` (from the `items` array) as selected value in the dropdown.

## Callback Properties

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks. The callback is invoked whenever
the selected dropdown option changes. Its sole parameter `item` has the Typescript signature `{ value: string, name: string, label: string, index: number }`.

| target | Details                                             |
| ------ | --------------------------------------------------- |
| value  | The currently selected value                        |
| name   | The name of the element you set via property `name` |
| label  | Visible text corresponding to `value`               |
| index  | 0-based index of currently selected option          |

If a defaultTitle is set, the first element has index 1, because the title gets index 0.

_Important_: This attribute can also be used natively. However, in this case the event parameter passed conforms to the **change** event described below.

### onFocus, onBlur

The function-valued attributes `onFocus, onBlur` can be used as a callback prop for React and other frameworks. The respective callback is invoked when the element receives or loses focus, respectively. Its only parameter is the original native event.

## Events

### axa-change, change

If not in controlled-component mode, two custom events `axa-change` and `change` are fired on &lt;axa-dropdown&gt; itself whenever the `onChange` callback from above gets invoked.

`axa-change`'s event `detail` is the currently selected value (a string).

`change`'s event `detail` is an object that is described above at `onChange`.

Both events do _not_ bubble up through the DOM.
