var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function l(){}function v(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(v,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var y=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=l,n.PropTypes=n}()});Object.keys(y).reduce(v,y);var _=y.oneOf(["left","center","right"]),m=y.oneOfType([y.string,y.number]),g=y.oneOfType([y.arrayOf(A),y.shape({cells:y.arrayOf(A)})]),C=y.oneOfType([y.arrayOf(j),y.shape({cells:y.arrayOf(j),action:y.bool})]),O=y.oneOfType([y.arrayOf(P),y.shape({cells:y.arrayOf(P)})]),x=(y.oneOf(["row","col","rowgroup","colgroup","auto"]),y.oneOfType([y.arrayOf(A),y.arrayOf(g)]),y.oneOfType([y.arrayOf(j),y.arrayOf(C)]),y.oneOfType([y.arrayOf(P),y.arrayOf(O)]),y.oneOf(["up","down"])),w=y.oneOf(["left","right"]),T=y.oneOf(["ok","pending","error","unknown"]),N={text:m,value:y.any,rowspan:y.number,colspan:y.number,scope:null,align:_,dense:y.bool},E=y.oneOfType([y.string,y.number,y.shape(N)]),A=y.oneOfType([E,y.shape(i({},N,{sort:x,sortActive:y.bool}))]),j=y.oneOfType([E,y.shape(i({},N,{float:w,action:y.bool,strong:y.bool,bold:y.bool,state:T}))]),P=y.oneOfType([E,y.shape(i({},N,{float:w}))]),S=(y.oneOf(["top","bottom"]),{}),R=function(e){return e in S||(S[e]=0),++S[e]},D=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function L(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new D(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var M=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),U=/^\s+|\s{2,}|\s+$/g;function I(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function V(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=B.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(F,[])),i&&(e.className+=" "+i.join(" "))}}function F(e,t){var n=t.className;return t.hasClass||e.push(n),e}function B(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=I(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function q(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=B.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(H,[])),i){var a=e.className;e.className=i.reduce(z,a)}}}function H(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function z(e,t){var n=I(t,"g");return e.replace(n," ").replace(U," ")}var K=/\s+/,W={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function $(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(W[e]&&(e=W[e]),!n||!e)return null;var l=void 0===o?"undefined":b(o),u=o&&"string"===l;if("function"===l){if(r){var d=r;a=d.capture,c=d.passive}r=o}for(var p=M?{capture:a,passive:c}:a,f=u?function(e){var t=e.target;for(;!B(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(K),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function X(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,f=!1,h=r!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,h&&(u&&clearTimeout(u),u=setTimeout(b,r)),v&&!d&&(d=setTimeout(_,c)),i&&!f&&(f=!0,p=o.apply(void 0,k(l))),p}return y.flush=function(){(u||d)&&(p=o.apply(void 0,k(l)));return g(),p},y.cancel=g,y;function b(){d&&clearTimeout(d),m()}function _(){u&&clearTimeout(u),m()}function m(){a&&(p=o.apply(void 0,k(l))),d=u=null,f=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var G=window.__subscriptions;function J(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;G[e]||(G[e]={count:0,queue:[]});var o=G[e].queue;Array.isArray(o)?o.push([e,t,n]):L(n,e,t)}function Y(e,t){var n=$(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);G[e]||(G[e]={count:0});var o,r=G[e];return r.count++,r.onsubscribe||(r.onsubscribe=X((o=e,function(){L(document,"pubsub/onsubscribe",o),L(document,"pubsub/onsubscribe/"+o,o),G[o]&&delete G[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete G[e]}}$(document,"pubsub/onsubscribe",function(e){var t=e.detail;G[t]||(G[t]={count:0});var n=G[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];L(r,n,o)}),delete n.queue)});var Z,Q=function(e,t){return e===t},ee=((Z=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Q;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?Z.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(e,t){var n;u(this,c);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=f(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,c),s.name="PropertyExistsException",s}return p(c,e),c}(Error)),te=/[A-Z]/g;function ne(e){return e.replace(te,oe)}function oe(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var re=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ie(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case y.string:case y.string.isRequired:return t;case y.bool:case y.bool.isRequired:if(!t||n===t)return!0;case y.number:case y.number.isRequired:case y.object:case y.object.isRequired:case y.array:case y.array.isRequired:default:if(re.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(re.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var ae=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,se=/[-_]+/g;function ce(e){return e.replace(ae,le)}function le(e,t){return 0==+e||se.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ue(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[ce(t)]);if(o&&!e.hasAttribute(t))return i!==y.bool&&i!==y.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ie(a,t,i)}var de=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function pe(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=$(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,de&&(t.style.cursor="pointer"),u}var fe=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),he="axa-change",ve="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(fe.ENTER,t),i._onInteractive()):o&&i._notify(fe.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===fe.ESCAPE||e.key===fe.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return r(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=$(this._container,fe.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=$(this._container,fe.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=pe(this._container,fe.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=$(this._container.ownerDocument,fe.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ve)?ue(e,ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(fe.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ye=["title","checked","disabled"],be=[];var _e=1,me=3,ge=8;function ke(e,t){var n=e.nodeType,o=e.nodeName;n===_e&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,c=d.namespaceURI,l=d.value,!i(u))if(c){var f=d.localName;t.getAttributeNS(c,f||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var h=a.length-1;0<=h;--h)if(!1!==(d=a[h]).specified){if(u=d.name,c=d.namespaceURI,i(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==me&&n!==ge||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;Ce(e,t,"checked"),Ce(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?Ce(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Ce(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Oe=3;function xe(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(ke(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(we(o,n))(r=xe(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(we(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=xe(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=xe(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function we(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Oe&&e.nodeValue===t.nodeValue)}var Te=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=f(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error),Ne=!!document.createDocumentFragment().children;function Ee(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Ee.prototype,HTMLElement.prototype),Object.setPrototypeOf(Ee,HTMLElement);var Ae=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=Y("context/available",n._makeContextReady)},f(n,t)}return p(a,t),r(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,J("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),f(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),r(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function l(e){u(this,l);var c=f(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));c._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=c._hasKeys[t];if(-1===ye.indexOf(t)&&r)throw new ee(t,c);var i="_"+t,a=n[t],s=c[i];return o||c.shouldUpdateCallback(a,s)?(c[i]=a,c._props[t]=a,r&&h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=X(function(){return c.updated&&c.updated()},50);var t=c.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=ce(e),o=n in c;if(-1===ye.indexOf(n)&&o)throw new ee(n,c);c._hasKeys[n]=o,Object.defineProperty(c,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),c}return p(l,t),r(l,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ne)}}]),r(l,[{key:"connectedCallback",value:function(){var r=this;if(d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this)&&d(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=ce(e);if(r.hasAttribute(e)){var n=ue(r,e,i[t]),o=r._hasKeys[t];r._props[t]=n,o&&h(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),t,n,r)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=ce(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this[o]=ie(n,e,r[o])}else this[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&L(this,he,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(ne(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&y.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),l}()},function(t){return function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,c);var o=f(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return p(c,t),r(c,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});Ne||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Te(this);a.appendChild(i)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: newTree should be an object");xe(t,e)}(this,s),function(){for(var e=void 0;e=be.pop();)delete e.isSameNode;be=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);u(this,i);var r=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return p(i,t),r(i,[{key:"connectedCallback",value:function(){d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=f(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=R(t.nodeName),t}return p(n,Ee),r(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),je={},Pe=function(e){function a(){var e,t,n;u(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=f(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},f(n,t)}return p(a,Ae),r(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Ae.uuidv4();if(e&&!je[t]){var n=document.createElement("style"),o=document.createTextNode(e);je[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Se=".m-header-mobile {\n  display: block; }\n\n.m-header-mobile__backdrop {\n  position: fixed;\n  top: -200%;\n  left: -200%;\n  z-index: 1040;\n  display: block;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  opacity: 0;\n  cursor: pointer;\n  overscroll-behavior: contain;\n  -webkit-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__backdrop {\n    top: 0;\n    left: 0;\n    opacity: 1; }\n  .m-header-mobile__backdrop.is-mobile-backdrop-fading {\n    top: 0;\n    left: 0; }\n\n.m-header-mobile__canvas {\n  position: relative;\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  background: #fff; }\n  @media (min-width: 576px) {\n    .m-header-mobile__canvas {\n      width: 370px; } }\n\n.m-header-mobile__canvas--off-canvas {\n  position: fixed;\n  top: 75px;\n  right: 0;\n  bottom: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overscroll-behavior: contain;\n  -webkit-overflow-scrolling: touch;\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.05);\n          box-shadow: 0 0 1px rgba(255, 255, 255, 0.05);\n  -webkit-transform: translateX(110%);\n          transform: translateX(110%);\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n  .is-mobile-menu-open > .m-header-mobile__canvas--off-canvas {\n    -webkit-transform: translateX(0);\n            transform: translateX(0); }\n  @media (min-width: 992px) {\n    .m-header-mobile__canvas--off-canvas {\n      display: none; } }\n\n.m-header-mobile__box {\n  position: relative;\n  padding-top: 20px;\n  background: #fff; }\n  .m-header-mobile__box > .m-button {\n    display: block;\n    margin: 20px 40px 0 60px;\n    text-align: center; }\n    .m-header-mobile__box > .m-button:first-child {\n      margin-top: 0; }\n    .m-header-mobile__box > .m-button + * {\n      margin-top: 20px; }\n  .m-header-mobile__box .m-header-top-content-bar__box {\n    padding-left: 60px;\n    padding-right: 40px; }\n\nbody.is-body-frozen {\n  overflow: hidden; }\n",Re=/\n[\s]+$/,De=/^\n[\s]+/,Le=/[\s]+$/,Me=/^[\s]+/,Ue=/[\n\s]+/g,Ie=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ve=["code","pre","textarea"],Fe=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Ie.indexOf(i)&&-1===Ve.indexOf(i)?""===(o=u.nodeValue.replace(De,"").replace(Le,"").replace(Re,"").replace(Ue," "))?t.removeChild(u):u.nodeValue=o:-1===Ve.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(De,r).replace(Me," ").replace(Le,"").replace(Re,"").replace(Ue," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ie.indexOf(i)&&-1===Ve.indexOf(i)?""===(o=u.nodeValue.replace(De,"").replace(Re,"").replace(Ue," "))?t.removeChild(u):u.nodeValue=o:-1===Ve.indexOf(i)&&(o=u.nodeValue.replace(Me," ").replace(De,"").replace(Re,"").replace(Ue," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}},Be=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":b(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),qe=function(){var e,t,n,o=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).offcanvas,r=arguments[1];return[(e=document.createElement("div"),e.setAttribute("class","m-header-mobile__backdrop js-header-mobile__backdrop"),e),(n=document.createElement("div"),n.setAttribute("class","m-header-mobile__canvas js-header-mobile__canvas "+String(Be({"m-header-mobile__canvas--off-canvas":!o}))),Fe(n,["\n    ",(t=document.createElement("div"),t.setAttribute("class","m-header-mobile__box"),Fe(t,["\n      ",r,"\n    "]),t),"\n  "]),n)]};function He(e){e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation()}var ze=function(){function o(e,t){var n=this;u(this,o),this.open=function(){V(document.body,n.options.isBodyFrozen),V(n.wcNode,n.options.isMenuOpenClass),n.on()},this.close=function(){n.off(),n.unTransitionEndBackdrop&&n.unTransitionEndBackdrop(),n.unTransitionEndBackdrop=$(n.backdrop,"transitionend",function(e){"opacity"===e.propertyName&&(n.unTransitionEndBackdrop(),q(n.backdrop,n.options.isBackdropFading),n.canvas.scrollTop=0,J("header-mobile/fade-finish",null,n._contextNode))}),V(n.backdrop,n.options.isBackdropFading),q(n.wcNode,n.options.isMenuOpenClass),q(document.body,n.options.isBodyFrozen)},this.handleCloseClick=function(){J("header-mobile/close",null,n._contextNode)},this.wcNode=e,this.options=i({},o.DEFAULTS,t),this.opened=[],this.init()}return r(o,[{key:"init",value:function(){this.canvas=this.wcNode.querySelector(this.options.canvas),this.backdrop=this.wcNode.querySelector(this.options.backdrop)}},{key:"on",value:function(){this.off(),this.offOverscroll=function(o){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.body,t=$(o,"touchstart",function(){l(),a=$(o,"touchmove",c),s=$(o,"touchend",l),u()},{passive:!1}),n=$(o,"scroll",function(){o.scrollLeft=0,i()}),r=$(e,"touchmove",function(e){e._isScroller||e.preventDefault()},{passive:!1}),i=X(u,100),a=void 0,s=void 0;return u(),function(){t(),n(),r(),l()};function c(e){o.offsetHeight<o.scrollHeight&&(e._isScroller=!0),o.scrollLeft=0}function l(){a&&(a(),a=null),s&&(s(),s=null),u()}function u(){var e=o.scrollTop,t=o.scrollHeight,n=e+o.offsetHeight;0===e?o.scrollTop=1:n===t&&(o.scrollTop=e-1)}}(this.canvas),this.unBackdropClick=$(this.backdrop,"click",this.handleCloseClick),this.unBackdropOverscroll=$(this.backdrop,"scroll touchmove",He,{passive:!1}),this.unClose=$(this.canvas,"click",this.options.close,this.handleCloseClick)}},{key:"off",value:function(){this.offOverscroll&&this.offOverscroll(),this.unBackdropClick&&this.unBackdropClick(),this.unBackdropOverscroll&&this.unBackdropOverscroll(),this.unClose&&this.unClose()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=Y("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=Y("header-mobile/close",this.close,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"destroy",value:function(){this.off(),this.offContextEnabled(),delete this.wcNode,delete this.canvas,delete this.backdrop,delete this._contextNode}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),o}();ze.DEFAULTS={canvas:".js-header-mobile__canvas",backdrop:".js-header-mobile__backdrop",close:"js-header-mobile-close",isMenuOpenClass:"is-mobile-menu-open",isBackdropFading:"is-mobile-backdrop-fading",isBodyFrozen:"is-body-frozen"};var Ke,We,$e=function(e){function t(){u(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Se,template:qe}));return e.consumeContext("axa-header"),e}return p(t,Pe),r(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-mobile"}},{key:"contextCallback",value:function(e){this.interaction&&(this.interaction.contextNode=e)}},{key:"didRenderCallback",value:function(){this.interaction&&this.interaction.destroy(),this.interaction=new ze(this);var e=this.contextNode;e&&this.contextCallback(e)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction&&(this.interaction.destroy(),delete this.interaction)}}]),t}();return $e.tagName="axa-header-mobile",$e.propTypes={offcanvas:y.bool},Ke=$e.tagName,We=$e,customElements.get(Ke)||customElements.define(Ke,We),$e}();
