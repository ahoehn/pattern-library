var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},l=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(o.apply(null,i));else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}(e={exports:{}},e.exports),e.exports),d={},h=function(e){return e in d||(d[e]=0),++d[e]},v=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function _(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new v(t,r({},o,{detail:n}));return e.dispatchEvent(i)}var m=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),y=/^\s+|\s{2,}|\s+$/g;function g(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function b(e,t){var n=t.className;return t.hasClass||e.push(n),e}function C(e){for(var t=e.className,n=!1,o=!0,r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var s=i.map(function(e){var r=g(e).test(t);r?n=!0:o=!1;return{className:e,hasClass:r}});return!(!o&&!n)&&s}function x(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function w(e,t){var n=g(t,"g");return e.replace(n," ").replace(y," ")}var k=/\s+/,O={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function A(e,n,o,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,c=void 0===l||l;if(O[n]&&(n=O[n]),!e||!n)return null;var u=void 0===o?"undefined":t(o),p=o&&"string"===u;if("function"===u){if(r){var f=r;s=f.capture,c=f.passive}r=o}for(var d=m?{capture:s,passive:c}:s,h=p?function(t){var n=t.target;for(;!C(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return r(t,n)}:r,v=n.split(k),_=v.length,y=0;y<_;++y)e.addEventListener(v[y],h,d);return function t(){for(var n=0;n<_;++n)e.removeEventListener(v[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,f=void 0,d=void 0,h=!1,v=t!==l,_=!1!==l;function m(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return c=o,v&&(u&&clearTimeout(u),u=setTimeout(y,t)),_&&!f&&(f=setTimeout(g,l)),r&&!h&&(h=!0,d=e.apply(void 0,p(c))),d}return m.flush=function(){(u||f)&&(d=e.apply(void 0,p(c)));return C(),d},m.cancel=C,m;function y(){f&&clearTimeout(f),b()}function g(){u&&clearTimeout(u),b()}function b(){a&&(d=e.apply(void 0,p(c))),u=null,f=null,h=!1}function C(){u&&(clearTimeout(u),u=null),f&&(clearTimeout(f),f=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var N=window.__subscriptions;function T(e,t){var n=A(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);N[e]||(N[e]={count:0});var o,r=N[e];return r.count++,r.onsubscribe||(r.onsubscribe=E((o=e,function(){_(document,"pubsub/onsubscribe",o),_(document,"pubsub/onsubscribe/"+o,o),N[o]&&delete N[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete N[e]}}A(document,"pubsub/onsubscribe",function(e){var t=e.detail;N[t]||(N[t]={count:0});var n=N[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=u(e,3),n=t[0],o=t[1],r=t[2];_(r,n,o)}),delete n.queue)});var j,P=function(e,t){return e===t},S=((j=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return function(){return e.apply(void 0,[].concat(n,o))?j.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,o){var r;n(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+o.nodeName+"#"+o._id+" and evaluates to -> "+o[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,s=Array(a>2?a-2:0),c=2;c<a;c++)s[c-2]=arguments[c];var u=l(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,i].concat(s)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="PropertyExistsException",u}return a(t,e),t}(Error)),R=/[A-Z]/g;function D(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var L=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function M(e,t){var n=e;if(e&&t!==e){if(L.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var I=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,U=/[-_]+/g;function V(e){return e.replace(I,F)}function F(e,t){return 0==+e||U.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function q(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=M(n,t)}var z=["title","checked","disabled"],K=[];var H=1,W=3,$=8;function G(e,t){var n=e.nodeType,o=e.nodeName;n===H&&function(e,t){for(var n=t.attributes,o=e.attributes,r=null,i=null,a=null,s=null,l=o.length-1;l>=0;--l)if(s=o[l],a=s.name,r=s.namespaceURI,i=s.value,r){var c=s.localName;t.getAttributeNS(r,c||a)!==i&&t.setAttributeNS(r,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=n.length-1;u>=0;--u)!1!==(s=n[u]).specified&&(a=s.name,(r=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(r,a)||t.removeAttributeNS(r,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==W&&n!==$||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;B(e,t,"checked"),B(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?B(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function B(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Z=3;function J(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(G(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(X(o,n))(r=J(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(X(t.childNodes[l],o)){i=t.childNodes[l];break}i?((r=J(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=J(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function X(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Z&&e.nodeValue===t.nodeValue)}var Y=function(e){function t(e){var o;n(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),s=1;s<i;s++)a[s-1]=arguments[s];var c=l(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,r].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return a(t,e),t}(Error),Q=!!document.createDocumentFragment().children;function ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(ee,HTMLElement);var te=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function r(){var e,t,o;n(this,r);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=o=l(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=T("context/available",o._makeContextReady)},l(o,t)}return a(r,e),o(r,[{key:"connectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;N[e]||(N[e]={count:0,queue:[]});var o=N[e].queue;Array.isArray(o)?o.push([e,t,n]):_(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),r}()},function(e){return function(t){function r(){return n(this,r),l(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return a(r,e),o(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(e){return function(t){function r(e){n(this,r);var t=l(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===z.indexOf(n)&&a)throw new S(n,t);var s="_"+n,l=o[n],u=t[s];return i||t.shouldUpdateCallback(l,u)?(t[s]=l,t._props[n]=l,a&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=E(function(){return t.updated&&t.updated()},50);var o=t.constructor.observedAttributes;return Array.isArray(o)&&o.forEach(function(e){var n,o=V(e),r=o in t;if(-1===z.indexOf(o)&&r)throw new S(o,t);t._hasKeys[o]=r,Object.defineProperty(t,o,n={get:function(){return this._props[o]},set:function(e){this.shouldUpdateCallback(this._props[o],e)&&(this._props[o]=e,r&&c(n.__proto__||Object.getPrototypeOf(n),o,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return a(r,e),o(r,[{key:"connectedCallback",value:function(){var e=this;if(i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=V(t);if(e.hasAttribute(t)){var o=q(e,t),i=e._hasKeys[n];e._props[n]=o,i&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=V(e);this.hasAttribute(e)?this[o]=M(n):this[o]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(R,D))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),r}()},function(e){return function(r){function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=s(e,["template"]);n(this,c);var r=l(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,o));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return a(c,e),o(c,[{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var o=this._template;try{if(n){for(var r=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});Q||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new Y(this);l.appendChild(s)}if(n)i(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");J(n,e)}(this,u),function(){for(var e=void 0;e=K.pop();)delete e.isSameNode;K=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=s(e,["styles"]);n(this,r);var a=l(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return a._styles=o,a}return a(r,e),o(r,[{key:"connectedCallback",value:function(){i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&i(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function t(e){n(this,t);var o=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o._id=h(o.nodeName),o}return a(t,ee),o(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),ne={},oe=function(e){function t(){var e,o,r;n(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},l(r,o)}return a(t,te),o(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[t]){var n=document.createElement("style"),o=document.createTextNode(e);ne[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var re=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ie(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.capture,i=void 0===r||r,a=o.passive,s=void 0===a||a,l=e.ownerDocument.documentElement,c=A(l,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:i,passive:s});return re&&(l.style.cursor="pointer"),c}var ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","keyup","enter","move","leave","Escape","Esc"),se="data-prevent-default",le=function(){function e(t){var o=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,e),this._handleClick=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!o._lastToggleNode,r=t!==o._lastToggleNode,i=!n&&!r;n?(o._notify(ae.ENTER,t),o._onInteractive()):r&&o._notify(ae.MOVE,t,o._lastToggleNode),o._lastToggleNode=t,i&&o._options.sameClickClose&&o._close()},this._handleClose=function(e,t){o.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),o._close()},this._handleKeyUp=function(e){(e.key===ae.ESCAPE||e.key===ae.ESC||27===e.keyCode)&&(e.preventDefault(),o._close())},this._init(t,r)}return o(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=r({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=A(this._container,ae.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=A(this._container,ae.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ie(this._container,ae.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=A(this._container.ownerDocument,ae.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(se)?q(e,se):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ae.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e}();le.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ce,ue=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,pe=function(){var e=window.requestAnimationFrame||window[ue+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),o=Math.max(0,16-(n-t)),r=setTimeout(function(){e(n+o)},o);return t=n+o,r}}return e}(),fe=(ce=(ce=window.cancelAnimationFrame||window[ue+"CancelAnimationFrame"]||window[ue+"CancelRequestAnimationFrame"])?ce.bind(window):function(e){clearTimeout(e)},function(e){function t(e,o){n(this,t),o=r({},t.DEFAULTS,o);var i=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return i.toggleState=function(){i.isOpen?i.close():i.open()},i.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",i.offInteractive())},i.handleToggleClick=function(){i.toggleState()},i.isOpen=!1,i.options=o,i.wcNode=e,i.init(),i}return a(t,le),o(t,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.info=this.wcNode.querySelector(this.options.info),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=A(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=A(this.info,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=C.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(b,[])),i&&(e.className+=" "+i.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),pe(function(){n.style.height=o+"px",pe(function(){!function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=C.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(x,[])),i){var a=e.className;e.className=i.reduce(w,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"destroy",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),delete this.wcNode,delete this.options}}]),t}());fe.DEFAULTS={containerClass:!1,toggle:".js-form-group-info__toggle",info:".js-form-group__info",labelIconWrapper:".js-form-group__label-icon-wrapper",isOpen:"is-form-group-info-open"};var de=".m-form-group {\n  display: block; }\n  .m-form-group:not(:first-child) {\n    margin-top: 15px; }\n    @media (min-width: 768px) {\n      .m-form-group:not(:first-child) {\n        margin-top: 20px; } }\n\n.m-form-group__wrapper {\n  display: block; }\n\n.m-form-group--info .m-form-group__label {\n  margin-right: 8px; }\n\n.m-form-group--info .m-form-group__info-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.m-form-group--error .m-form-group__error {\n  display: block; }\n\n.m-form-group__label-icon-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.m-form-group__error {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin: 4px 0;\n  display: none;\n  color: #c91432; }\n  @media (min-width: 576px) {\n    .m-form-group__error {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-form-group__label {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  @media (min-width: 576px) {\n    .m-form-group__label {\n      font-size: 16px; } }\n\n.m-form-group__info-button {\n  background: transparent;\n  border: none;\n  display: none;\n  margin: 0;\n  margin-right: -1px;\n  padding: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  cursor: pointer; }\n  .m-form-group__info-button:hover, .m-form-group__info-button:active, .m-form-group__info-button:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-form-group__icon {\n  display: block;\n  height: 16px;\n  width: 16px;\n  fill: #00008f; }\n\n.m-form-group__icon--open {\n  display: block; }\n\n.m-form-group__icon--close {\n  display: none; }\n\n.m-form-group__info {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-form-group__info-content {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding: 20px;\n  color: #fff;\n  background-color: #2425aa;\n  -webkit-box-shadow: inset 0 0 15px #00008f;\n          box-shadow: inset 0 0 15px #00008f; }\n  @media (min-width: 576px) {\n    .m-form-group__info-content {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.is-form-group-info-open .m-form-group__info {\n  height: auto; }\n\n.is-form-group-info-open .m-form-group__icon--close {\n  display: block; }\n\n.is-form-group-info-open .m-form-group__icon--open {\n  display: none; }\n",he=/\n[\s]+$/,ve=/^\n[\s]+/,_e=/[\s]+$/,me=/^[\s]+/,ye=/[\n\s]+/g,ge=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],be=["code","pre","textarea"],Ce=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===ge.indexOf(i)&&-1===be.indexOf(i)?""===(o=u.nodeValue.replace(ve,"").replace(_e,"").replace(he,"").replace(ye," "))?t.removeChild(u):u.nodeValue=o:-1===be.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(ve,r).replace(me," ").replace(_e,"").replace(he,"").replace(ye," "),u.nodeValue=o));else if(c&&c.nodeType){a&&(a=!1,-1===ge.indexOf(i)&&-1===be.indexOf(i)?""===(o=u.nodeValue.replace(ve,"").replace(he,"").replace(ye," "))?t.removeChild(u):u.nodeValue=o:-1===be.indexOf(i)&&(o=u.nodeValue.replace(me," ").replace(ve,"").replace(he,"").replace(ye," "),u.nodeValue=o));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}};var xe=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)};function we(e,t){var n,o,r,i,a,s,l,c=e.label,u=void 0===c?"":c,p=e.info,f=void 0===p?"":p,d=e.error,h=void 0===d?"":d,v=xe('<axa-icon icon="info-open" classes="m-form-group__icon m-form-group__icon--open"></axa-icon>'),_=xe('<axa-icon icon="info-close" classes="m-form-group__icon m-form-group__icon--close"></axa-icon>');return[(a=document.createElement("label"),a.setAttribute("class","m-form-group__wrapper js-form-group__wrapper"),Ce(a,[" \n        ",(r=document.createElement("span"),r.setAttribute("class","m-form-group__label-icon-wrapper js-form-group__label-icon-wrapper"),Ce(r,["\n          ",(n=document.createElement("span"),n.setAttribute("class","m-form-group__label"),Ce(n,["\n            ",u,"\n          "]),n),"\n          ",(o=document.createElement("a"),o.setAttribute("tabindex","0"),o.setAttribute("role","button"),o.setAttribute("class","m-form-group__info-button js-form-group-info__toggle"),Ce(o,["\n          ",_,"\n          ",v,"\n          "]),o),"\n        "]),r),"\n        \n        ",t,"\n        ",(i=document.createElement("span"),i.setAttribute("class","m-form-group__error"),Ce(i,[h]),i),"\n      "]),a),(l=document.createElement("div"),l.setAttribute("class","m-form-group__info js-form-group__info"),Ce(l,["\n          ",(s=document.createElement("div"),s.setAttribute("class","m-form-group__info-content"),Ce(s,[f]),s),"\n      "]),l)]}var ke,Oe,Ae=function(e){function t(){return n(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:de,template:we}))}return a(t,oe),o(t,null,[{key:"observedAttributes",get:function(){return["label","info","error"]}}]),o(t,[{key:"willRenderCallback",value:function(){var e=this.info,t=this.error;this.className=f(this.initialClassName,"m-form-group",{"m-form-group--info":e,"m-form-group--error":t})}},{key:"didRenderCallback",value:function(){this.interaction&&this.interaction.destroy(),this.interaction=new fe(this)}},{key:"disconnectedCallback",value:function(){i(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),t}();return Ae.tagName="axa-form-group",ke=Ae.tagName,Oe=Ae,customElements.get(ke)||customElements.define(ke,Oe),Ae}();
