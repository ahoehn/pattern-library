var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),g=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},p=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},r=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function f(){}var y=e(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=f,n.PropTypes=n}()}),v=0;function m(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(t){function n(){return t.apply(void 0,arguments)}return 0===v&&(v++,Object.keys(t).map(function(e){return n[e]=t[e],e}).reduce(m,n),v--),n}(n)),e}var b=y;Object.keys(b).reduce(m,b);var C,k,w,x,T=b.oneOf(["left","center","right"]),A=b.oneOf(["left","right"]),N=(b.oneOf(["top","bottom"]),b.oneOf(["up","down"])),E=b.oneOf(["ok","pending","error","unknown"]),j=b.oneOf(["row","col","rowgroup","colgroup","auto"]),P=b.oneOfType([b.string,b.number]),S={text:P,value:b.any,rowspan:P,colspan:P,scope:j,align:T,dense:b.bool},R={float:A,strong:b.bool,bold:b.bool},D=b.oneOfType([b.string,b.number]),L=b.oneOfType([D,b.shape(i({},S,{sort:N,sortActive:b.bool}))]),I=b.oneOfType([D,b.shape(i({},S,R,{action:b.bool,state:E}))]),U=b.oneOfType([D,b.shape(i({},S,R))]),M=b.oneOfType([b.arrayOf(L),b.shape({cells:b.arrayOf(L)})]),V=b.oneOfType([b.arrayOf(I),b.shape({cells:b.arrayOf(I),action:b.bool})]),q=b.oneOfType([b.arrayOf(U),b.shape({cells:b.arrayOf(U)})]),F=(b.oneOfType([M,b.arrayOf(M)]),b.oneOfType([V,b.arrayOf(V)]),b.oneOfType([q,b.arrayOf(q)]),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}),z={},H=(C=Object,k=C.getPrototypeOf||function(e){return e.__proto__},w=C.setPrototypeOf||function(e,t){return e.__proto__=t,e},x="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),w(new o,n.prototype)},function(e){var t=k(e);return w(e,w(function(){return x(t,arguments,k(this).constructor)},t))}),K=function(n){return H(function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),u(t,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in z||(z[e]=0),++z[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}())},W={},$=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function B(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new $(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var G=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),J=/^\s+|\s{2,}|\s+$/g;function Y(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function Z(e,t){var n=t.className;return t.hasClass||e.push(n),e}function X(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=Y(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function Q(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function ee(e,t){var n=Y(t,"g");return e.replace(n," ").replace(J," ")}var te=/\s+/,ne={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function oe(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if(ne[e]&&(e=ne[e]),!n||!e)return null;var l=void 0===o?"undefined":_(o),u=o&&"string"===l;if("function"===l){if(r){var d=r;a=d.capture,c=d.passive}r=o}for(var p=G?{capture:a,passive:c}:a,h=u?function(e){var t=e.target;for(;!X(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,f=e.split(te),y=f.length,v=0;v<y;++v)n.addEventListener(f[v],h,p);return function e(){for(var t=0;t<y;++t)n.removeEventListener(f[t],h,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function re(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,f=r!==c,y=!1!==c;function v(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return l=t,f&&(u&&clearTimeout(u),u=setTimeout(_,r)),y&&!d&&(d=setTimeout(m,c)),i&&!h&&(h=!0,p=o.apply(void 0,O(l))),p}return v.flush=function(){(u||d)&&(p=o.apply(void 0,O(l)));return g(),p},v.cancel=g,v;function _(){d&&clearTimeout(d),b()}function m(){u&&clearTimeout(u),b()}function b(){a&&(p=o.apply(void 0,O(l))),d=u=null,h=!1}function g(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var ie=window.__subscriptions;function ae(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;ie[e]||(ie[e]={count:0,queue:[]});var o=ie[e].queue;Array.isArray(o)?o.push([e,t,n]):B(n,e,t)}function se(e,t){var n=oe(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);ie[e]||(ie[e]={count:0});var o,r=ie[e];return r.count++,r.onsubscribe||(r.onsubscribe=re((o=e,function(){B(document,"pubsub/onsubscribe",o),B(document,"pubsub/onsubscribe/"+o,o),ie[o]&&delete ie[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete ie[e]}}oe(document,"pubsub/onsubscribe",function(e){var t=e.detail;ie[t]||(ie[t]={count:0});var n=ie[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];B(r,n,o)}),delete n.queue)});var ce,le=function(e,t){return e===t},ue=((ce=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:le;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ce.apply(void 0,arguments):void 0}}}})()(!0),[]);var de=1,pe=3,he=8;function fe(e,t){var n=e.nodeType,o=e.nodeName;n===de&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,l=null,u=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],u=d.name,c=d.namespaceURI,l=d.value,!i(u))if(c){var h=d.localName;t.getAttributeNS(c,h||u)!==l&&t.setAttributeNS(c,u,l)}else t.hasAttribute(u)?t.getAttribute(u)!==l&&("null"===l||"undefined"===l?t.removeAttribute(u):t.setAttribute(u,l)):t.setAttribute(u,l);for(var f=a.length-1;0<=f;--f)if(!1!==(d=a[f]).specified){if(u=d.name,c=d.namespaceURI,i(u))continue;c?(u=d.localName||u,e.hasAttributeNS(c,u)||t.removeAttributeNS(c,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==pe&&n!==he||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ye(e,t,"checked"),ye(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ye(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ye(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ve=3;function _e(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(fe(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(me(o,n))(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(me(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=_e(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=_e(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function me(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ve&&e.nodeValue===t.nodeValue)}var be,ge,Oe,Ce,ke=(be=Object,ge=be.getPrototypeOf||function(e){return e.__proto__},Oe=be.setPrototypeOf||function(e,t){return e.__proto__=t,e},Ce="object"===("undefined"==typeof Reflect?"undefined":_(Reflect))?Reflect.construct:function(e,t,n){var o,r=[null];return r.push.apply(r,t),o=e.bind.apply(e,r),Oe(new o,n.prototype)},function(e){var t=ge(e);return Oe(e,Oe(function(){return Ce(t,arguments,ge(this).constructor)},t))})(function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return p(s,e),s}(Error)),we=!!document.createDocumentFragment().children,xe=/[A-Z]/g;function Te(e){return e.replace(xe,Ae)}function Ae(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var Ne=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ee(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(Ne.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var je=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,Pe=/[-_]+/g;function Se(e){return e.replace(je,Re)}function Re(e,t){return 0==+e||Pe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function De(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[Se(t)]);if(o&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ee(a,t,i)}var Le=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function Ie(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,l=n.ownerDocument.documentElement,u=oe(l,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=l,Le&&(t.style.cursor="pointer"),u}var Ue=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Me="axa-change",Ve="data-prevent-default",qe=function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(Ue.ENTER,t),i._onInteractive()):o&&i._notify(Ue.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===Ue.ESCAPE||e.key===Ue.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return u(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=oe(this._container,Ue.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=oe(this._container,Ue.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=Ie(this._container,Ue.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=oe(this._container.ownerDocument,Ue.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Ve)?De(e,Ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ue.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}();qe.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Fe=F(function(n){var e,t;return t=e=function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n),t}(),e.version="2.0.1-beta.226",t},function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=se("context/available",n._makeContextReady)},h(n,t)}return p(a,t),u(a,[{key:"connectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&d(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,ae("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return p(n,t),u(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):d(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else r(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function i(){var e,t,s;l(this,i);for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=s=h(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))))._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r="_"+t,i=n[t],a=s[r];return o||s.shouldUpdateCallback(i,a)?(s.props[t]=i,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},h(s,t)}return p(i,t),u(i,[{key:"init",value:function(e){var t=this;d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=re(function(){return t.updated&&t.updated()},50);var n=this.constructor.observedAttributes;Array.isArray(n)&&n.forEach(function(e){Se(e)})}},{key:"connectedCallback",value:function(){var o=this;if(d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var r=this.constructor.propTypes;e.forEach(function(e){var t=Se(e);if(o.hasAttribute(e)){var n=De(o,e,r[t]);o.props[t]=n}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this)&&d(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"attributeChangedCallback",this).call(this,e,t,n),this.shouldUpdateCallback(n,t)){var o=Se(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[o]=Ee(n,e,r[o])}else this.props[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&B(this,Me,n,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(Te(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(Te)}}]),i}()},function(t){return function(e){function c(){return l(this,c),h(this,(c.__proto__||Object.getPrototypeOf(c)).apply(this,arguments))}return p(c,t),u(c,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"init",this).call(this,n),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});we||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this.props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new ke(this);a.appendChild(i)}if(e)d(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");_e(t,e)}(this,s),function(){for(var e=void 0;e=ue.pop();)delete e.isSameNode;ue=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function r(){return l(this,r),h(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return p(r,t),u(r,[{key:"init",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"init",this).call(this,o),this._styles=n}},{key:"connectedCallback",value:function(){d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()}),ze=(F(Fe,K),F(Fe,function(r){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return p(a,r),u(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:r.uuidv4();if(e&&!W[t]){var n=document.createElement("style"),o=document.createTextNode(e);W[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}()},K)(HTMLElement));var He,Ke=/\n[\s]+$/,We=/^\n[\s]+/,$e=/[\s]+$/,Be=/^[\s]+/,Ge=/[\n\s]+/g,Je=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Ye=["code","pre","textarea"],Ze=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===Je.indexOf(i)&&-1===Ye.indexOf(i)?""===(o=u.nodeValue.replace(We,"").replace($e,"").replace(Ke,"").replace(Ge," "))?t.removeChild(u):u.nodeValue=o:-1===Ye.indexOf(i)&&(r=0===s?"":" ",o=u.nodeValue.replace(We,r).replace(Be," ").replace($e,"").replace(Ke,"").replace(Ge," "),u.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Je.indexOf(i)&&-1===Ye.indexOf(i)?""===(o=u.nodeValue.replace(We,"").replace(Ke,"").replace(Ge," "))?t.removeChild(u):u.nodeValue=o:-1===Ye.indexOf(i)&&(o=u.nodeValue.replace(Be," ").replace(We,"").replace(Ke,"").replace(Ge," "),u.nodeValue=o));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}},Xe=e(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()}),Qe=function(e,t){var n,o,r,i,a,s,c,l,u,d=e.header,p=e.headerSecondary,h=e.headerColor,f=e.icon,y=void 0===f?"":f,v=Xe("m-accordion-item__heading","m-accordion-item__heading--primary",(g(n={},"m-accordion-item__heading--"+h,h),g(n,"m-accordion-item__heading--with-secondary",p),n)),_=Xe("m-accordion-item__header","js-accordion-item__toggle",{"m-accordion-item__header--with-icon":y}),m=((o=document.createElement("axa-icon")).setAttribute("icon",""+String(y)),o.setAttribute("classes","m-accordion-item__icon"),o),b=((r=document.createElement("axa-icon")).setAttribute("icon","chevron-down"),r.setAttribute("classes","m-accordion-item__chevron"),r);return[(s=document.createElement("div"),s.setAttribute("class",""+String(_)),Ze(s,["\n          ",y&&m,"\n          ",(a=document.createElement("div"),a.setAttribute("class","m-accordion-item__heading-wrapper"),Ze(a,["\n            ",(i=document.createElement("span"),i.setAttribute("class",""+String(v)),Ze(i,[d]),i)," \n            ",p&&(c=document.createElement("span"),c.setAttribute("class","m-accordion-item__heading m-accordion-item__heading--secondary"),Ze(c,["\n                      ",p,"\n                "]),c),"\n          "]),a),"\n          ",b,"\n        "]),s),(u=document.createElement("div"),u.setAttribute("class","m-accordion-item__body js-accordion-item__body"),Ze(u,["\n          ",(l=document.createElement("div"),l.setAttribute("class","m-accordion-item__content"),Ze(l,["\n          ",t,"\n          "]),l),"\n        "]),u)]},et=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,tt=function(){var e=window.requestAnimationFrame||window[et+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),nt=(He=(He=window.cancelAnimationFrame||window[et+"CancelAnimationFrame"]||window[et+"CancelRequestAnimationFrame"])?He.bind(window):function(e){clearTimeout(e)},function(e){function o(e,t){l(this,o),t=i({},o.DEFAULTS,t);var n=h(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,e,t));return n.toggleState=function(e){var t=e.detail;n.wcNode===t?n.isOpen?n.close():n.open():n.isOpen&&n.close()},n.handleTransitionEnd=function(e){"height"===e.propertyName&&(e.target.style.height="",n.offInteractive())},n.handleToggleClick=function(){ae("accordion-item/toggle",n.wcNode,n._contextNode)},n.isOpen=!1,n.options=t,n.wcNode=e,n.init(),n}return p(o,qe),u(o,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.body=this.wcNode.querySelector(this.options.body),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=oe(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=oe(this.body,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=n+"px",function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=X.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(Z,[])),i&&(e.className+=" "+i.join(" "))}}(e,this.options.isOpen)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,o=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),tt(function(){n.style.height=o+"px",tt(function(){!function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=X.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(Q,[])),i){var a=e.className;e.className=i.reduce(ee,a)}}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeToggle=se("accordion-item/toggle",this.toggleState,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeToggle&&this.unSubscribeToggle()}},{key:"destroy",value:function(){d(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),this.offContextEnabled(),delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),o}());nt.DEFAULTS={containerClass:!1,toggle:".js-accordion-item__toggle",body:".js-accordion-item__body",isOpen:"is-accordion-item-open"};var ot,rt,it,at=function(e){function t(){return l(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,ze),u(t,[{key:"init",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:".m-accordion-item {\n  display: block;\n  text-align: left; }\n\n.m-accordion-item__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 18px 60px 18px 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0 solid #ccc;\n  border-top-width: 1px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n.m-accordion-item__header--with-icon .m-accordion-item__heading-wrapper {\n  margin-left: 20px; }\n\n.m-accordion-item__header--with-icon ~ .m-accordion-item__body {\n  padding-left: 32px; }\n  .m-accordion-item__header--with-icon ~ .m-accordion-item__body .m-accordion-item__content {\n    padding: 2px 60px 18px 10px; }\n\n.m-accordion-item__heading-wrapper {\n  margin-left: 8px; }\n\n.m-accordion-item__heading {\n  display: block; }\n\n.m-accordion-item__heading--primary {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--primary {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-accordion-item__heading--with-secondary {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--with-secondary {\n      font-size: 16px; } }\n\n.m-accordion-item__heading--blue {\n  color: #00008f; }\n\n.m-accordion-item__heading--secondary {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--secondary {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-accordion-item__chevron {\n  position: absolute;\n  top: calc(50% - (16px / 2));\n  right: 18px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  color: #00008f;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.m-accordion-item__icon {\n  display: block;\n  height: 30px;\n  width: 30px;\n  color: #00008f; }\n\n.m-accordion-item__body {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-accordion-item__content {\n  margin-left: 18px;\n  padding: 2px 60px 18px 0; }\n\n.is-accordion-item-open .m-accordion-item__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.is-accordion-item-open .m-accordion-item__body {\n  height: auto; }\n",template:Qe}),this.consumeContext("axa-accordion")}},{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-accordion-item",this.interaction=new nt(this)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}}]),t}();return at.tagName="axa-accordion-item",at.propTypes={icon:b.string,header:b.string,headerSecondary:b.string,headerColor:b.oneOf(["blue"]),multiple:b.bool},ot=at.tagName,rt=at,customElements.get(ot)||customElements.define(ot,rt,it),at}();
