var StyleGuideWebComponent=function(){"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},O=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(){}var f;function v(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(v,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var y=(function(e){e.exports=function(){function e(e,t,n,r,o,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=c,n.PropTypes=n}()}(f={exports:{}},f.exports),f.exports);Object.keys(y).reduce(v,y);var b=y.oneOf(["left","center","right"]),g=y.oneOfType([y.string,y.number]),m=y.oneOfType([y.arrayOf(N),y.shape({cells:y.arrayOf(N)})]),C=y.oneOfType([y.arrayOf(P),y.shape({cells:y.arrayOf(P),action:y.bool})]),k=y.oneOfType([y.arrayOf(j),y.shape({cells:y.arrayOf(j)})]),x=(y.oneOf(["row","col","rowgroup","colgroup","auto"]),y.oneOfType([y.arrayOf(N),y.arrayOf(m)]),y.oneOfType([y.arrayOf(P),y.arrayOf(C)]),y.oneOfType([y.arrayOf(j),y.arrayOf(k)]),y.oneOf(["up","down"])),w=y.oneOf(["left","right"]),T=y.oneOf(["ok","pending","error","unknown"]),A={text:g,value:y.any,rowspan:y.number,colspan:y.number,scope:null,align:b,dense:y.bool},E=y.oneOfType([y.string,y.number,y.shape(A)]),N=y.oneOfType([E,y.shape(i({},A,{sort:x,sortActive:y.bool}))]),P=y.oneOfType([E,y.shape(i({},A,{float:w,action:y.bool,strong:y.bool,bold:y.bool,state:T}))]),j=y.oneOfType([E,y.shape(i({},A,{float:w}))]);function S(r){function e(e,t,n){return null==e[t]?null:r(e,t,n)}return e.isRequired=r,e}var R=/^[a-z]{2,4}(-([A-Z][a-z]{3}|[0-9]{3}))?(-([A-Z]{2}|[0-9]{3}))?$/;S(function(e,t,n){if(!R.test(e[t]))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid locale.")});y.oneOf(["top","bottom"]);var D=S(function(e,t,n){try{new window.URL(e[t],function(){if(document.baseURI)return document.baseURI;var e=document.getElementsByName("base");return e.length&&e[0].href?e[0].href:window.location.href}())}catch(e){return new Error("Invalid prop `"+t+"` supplied to `"+n+"`, expected a valid URL. "+e.message)}return null}),L={},U=function(e){return e in L||(L[e]=0),++L[e]},I=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function M(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=new I(t,i({},r,{detail:n}));return e.dispatchEvent(o)}var V=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function q(e){for(var o=e.className,i=!1,a=!0,t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var s=n.map(function(e){var t=(n=e,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(o);var n,r;t?i=!0:a=!1;return{className:e,hasClass:t}});return!(!a&&!i)&&s}var F=/\s+/,K={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function H(n,e,r,o){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,l=void 0===s||s;if(K[e]&&(e=K[e]),!n||!e)return null;var c=void 0===r?"undefined":_(r),u=r&&"string"===c;if("function"===c){if(o){var p=o;a=p.capture,l=p.passive}o=r}for(var d=V?{capture:a,passive:l}:a,h=u?function(e){var t=e.target;for(;!q(t,r)&&t!==n;)t=t.parentNode;if(t!==n)return o(e,t)}:o,f=e.split(F),v=f.length,y=0;y<v;++y)n.addEventListener(f[y],h,d);return function e(){for(var t=0;t<v;++t)n.removeEventListener(f[t],h,d);!function(e,t){if(!e)return;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,e)}}function W(r){var o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,l=void 0!==s&&s,c=void 0,u=void 0,p=void 0,d=void 0,h=!1,f=o!==l,v=!1!==l;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return c=t,f&&(u&&clearTimeout(u),u=setTimeout(_,o)),v&&!p&&(p=setTimeout(b,l)),i&&!h&&(h=!0,d=r.apply(void 0,O(c))),d}return y.flush=function(){(u||p)&&(d=r.apply(void 0,O(c)));return m(),d},y.cancel=m,y;function _(){p&&clearTimeout(p),g()}function b(){u&&clearTimeout(u),g()}function g(){a&&(d=r.apply(void 0,O(c))),p=u=null,h=!1}function m(){u&&(clearTimeout(u),u=null),p&&(clearTimeout(p),p=null),c=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var z=window.__subscriptions;function $(e,t){var n=H(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);z[e]||(z[e]={count:0});var r,o=z[e];return o.count++,o.onsubscribe||(o.onsubscribe=W((r=e,function(){M(document,"pubsub/onsubscribe",r),M(document,"pubsub/onsubscribe/"+r,r),z[r]&&delete z[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete z[e]}}H(document,"pubsub/onsubscribe",function(e){var t=e.detail;z[t]||(z[t]={count:0});var n=z[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=l(e,3),n=t[0],r=t[1],o=t[2];M(o,n,r)}),delete n.queue)});var B,Z=function(e,t){return e===t},G=((B=function(){var e;return(e=console).log.apply(e,arguments)},function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Z;return function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return o.apply(void 0,[].concat(r,t))?B.apply(void 0,arguments):void 0}}}})()(!0),function(e){function l(e,t){var n;u(this,l);for(var r="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",o=arguments.length,i=Array(2<o?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];var s=d(this,(n=l.__proto__||Object.getPrototypeOf(l)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,l),s.name="PropertyExistsException",s}return r(l,e),l}(Error)),X=/[A-Z]/g;function J(e){return e.replace(X,Y)}function Y(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var Q=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function ee(t,n,e){var r=t;if(e)return function(t,n,e){var r=t;switch(e){case y.string:case y.string.isRequired:return t;case y.bool:case y.bool.isRequired:if(!t||n===t)return!0;case y.number:case y.number.isRequired:case y.object:case y.object.isRequired:case y.array:case y.array.isRequired:default:if(Q.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return r}(t,n,e);if(t&&n!==t){if(Q.test(t))try{r=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else r=!0;return r}var te=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ne=/[-_]+/g;function re(e){return e.replace(te,oe)}function oe(e,t){return 0==+e||ne.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function ie(e,t,n){var r=1===e.nodeType,o=e.constructor.propTypes,i=n;!n&&r&&(i=(void 0===o?{}:o)[re(t)]);if(r&&!e.hasAttribute(t))return i!==y.bool&&i!==y.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=ee(a,t,i)}var ae=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function se(n,e,r){var t,o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,a=void 0===i||i,s=o.passive,l=void 0===s||s,c=n.ownerDocument.documentElement,u=H(c,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return r(e)},{capture:a,passive:l});return t=c,ae&&(t.style.cursor="pointer"),u}var le=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=t.length,o={},i=0;i<r;++i){var a=t[i];o[a.toUpperCase()]=a}return o}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),ce="axa-click",ue="axa-change",pe="data-prevent-default";(function(){function r(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,r),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,r=t!==i._lastToggleNode,o=!n&&!r;n?(i._notify(le.ENTER,t),i._onInteractive()):r&&i._notify(le.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,o&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===le.ESCAPE||e.key===le.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return o(r,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},r.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=H(this._container,le.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=H(this._container,le.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=se(this._container,le.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=H(this._container.ownerDocument,le.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(pe)?ie(e,pe):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(le.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),r}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var de=["title","checked","disabled"],he=[];var fe=1,ve=3,ye=8;function _e(e,t){var n=e.nodeType,r=e.nodeName;n===fe&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),r=t.constructor.observedAttributes,o=r&&Array.isArray(r)&&r.length,i=function(e){return n&&o&&-1===r.indexOf(e)},a=t.attributes,s=e.attributes,l=null,c=null,u=null,p=null,d=s.length-1;0<=d;--d)if(p=s[d],u=p.name,l=p.namespaceURI,c=p.value,!i(u))if(l){var h=p.localName;t.getAttributeNS(l,h||u)!==c&&t.setAttributeNS(l,u,c)}else t.hasAttribute(u)?t.getAttribute(u)!==c&&("null"===c||"undefined"===c?t.removeAttribute(u):t.setAttribute(u,c)):t.setAttribute(u,c);for(var f=a.length-1;0<=f;--f)if(!1!==(p=a[f]).specified){if(u=p.name,l=p.namespaceURI,i(u))continue;l?(u=p.localName||u,e.hasAttributeNS(l,u)||t.removeAttributeNS(l,u)):e.hasAttributeNS(null,u)||t.removeAttribute(u)}}(e,t),n!==ve&&n!==ye||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;be(e,t,"checked"),be(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?be(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function be(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var ge=3;function me(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(_e(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(Oe(r,n))(o=me(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(Oe(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=me(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=me(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Oe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===ge&&e.nodeValue===t.nodeValue)}var Ce=function(e){function s(e){var t;u(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",r=arguments.length,o=Array(1<r?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=d(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return r(s,e),s}(Error),ke=!!document.createDocumentFragment().children;function xe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(xe.prototype,HTMLElement.prototype),Object.setPrototypeOf(xe,HTMLElement);var we=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=$("context/available",n._makeContextReady)},d(n,t)}return r(a,t),o(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;z[e]||(z[e]={count:0,queue:[]});var r=z[e].queue;Array.isArray(r)?r.push([e,t,n]):M(n,e,t)}("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return u(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,t),o(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else h(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function c(e){u(this,c);var l=d(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));l._reduceProps=function(e,t){var n=e.props,r=e.shouldUpdate,o=l._hasKeys[t];if(-1===de.indexOf(t)&&o)throw new G(t,l);var i="_"+t,a=n[t],s=l[i];return r||l.shouldUpdateCallback(a,s)?(l[i]=a,l._props[t]=a,o&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,a,l),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},l._isConnected=!1,l._props={},l._hasKeys={},l.updatedDebounced=W(function(){return l.updated&&l.updated()},50);var t=l.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=re(e),r=n in l;if(-1===de.indexOf(n)&&r)throw new G(n,l);l._hasKeys[n]=r,Object.defineProperty(l,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,r&&h(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),l}return r(c,t),o(c,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(J)}}]),o(c,[{key:"connectedCallback",value:function(){var o=this;if(p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this)&&p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=re(e);if(o.hasAttribute(e)){var n=ie(o,e,i[t]),r=o._hasKeys[t];o._props[t]=n,r&&h(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),t,n,o)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=re(e);if(this.hasAttribute(e)){var o=this.constructor.propTypes;this[r]=ee(n,e,o[r])}else this[r]=null;this.checkPropTypes(),"value"===e&&null!==n&&M(this,ue,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,r=Object.keys(e).filter(function(e){return-1<n.indexOf(J(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),r&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&y.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),c}()},function(t){return function(e){function l(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);u(this,l);var r=d(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,n));return r._template=t,r._hasTemplate=!!t,r._hasRendered=!1,r.updated=r.render,r}return r(l,t),o(l,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var r=document.createDocumentFragment(),o=[];this.firstChild;)o.push(this.firstChild),r.appendChild(this.firstChild);this._lightDOMRefs=o,this.childrenFragment=r}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});ke||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new Ce(this);a.appendChild(i)}if(e)p(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");me(t,e)}(this,s),function(){for(var e=void 0;e=he.pop();)delete e.isSameNode;he=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),l}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,r=a(e,["styles"]);u(this,i);var o=d(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return o._styles=n,o}return r(i,t),o(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){u(this,n);var t=d(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=U(t.nodeName),t}return r(n,xe),o(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),Te={},Ae=function(e){function a(){var e,t,n;u(this,a);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=n=d(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(o))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},d(n,t)}return r(a,we),o(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:we.uuidv4();if(e&&!Te[t]){var n=document.createElement("style"),r=document.createTextNode(e);Te[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ee=".m-header-logo {\n  max-width: 16.66667%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  display: block;\n  -ms-flex-item-align: center;\n      align-self: center; }\n  @media (min-width: 992px) {\n    .m-header-logo {\n      -ms-flex-item-align: start;\n          align-self: flex-start; } }\n\n.m-header-logo__link {\n  display: block; }\n\n.m-header-logo__icon {\n  width: 35px;\n  height: 35px;\n  display: block; }\n  @media (min-width: 576px) {\n    .m-header-logo__icon {\n      width: 43px;\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__icon {\n      width: 53px;\n      height: 53px; } }\n\n.m-header-logo__img {\n  display: block;\n  height: 35px; }\n  @media (min-width: 576px) {\n    .m-header-logo__img {\n      height: 43px; } }\n  @media (min-width: 1200px) {\n    .m-header-logo__img {\n      height: 53px; } }\n",Ne=/\n[\s]+$/,Pe=/^\n[\s]+/,je=/[\s]+$/,Se=/^[\s]+/,Re=/[\n\s]+/g,De=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Le=["code","pre","textarea"];var Ue=function(e){var t,n=document.createElement("div");return n.innerHTML=e,t=n.childNodes,Array.isArray(t)?t:[].slice.call(t)},Ie=function(){var e,t,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},r=n.src,o=n.alt,i=void 0===o?"AXA Logo":o,a=n.href,s=void 0===a?"#":a;return(e=document.createElement("a")).setAttribute("href",""+String(s)),e.setAttribute("class","m-header-logo__link js-header-logo__link"),function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var c=n[s];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),s===l-1&&(a=!1,-1===De.indexOf(i)&&-1===Le.indexOf(i)?""===(r=u.nodeValue.replace(Pe,"").replace(je,"").replace(Ne,"").replace(Re," "))?t.removeChild(u):u.nodeValue=r:-1===Le.indexOf(i)&&(o=0===s?"":" ",r=u.nodeValue.replace(Pe,o).replace(Se," ").replace(je,"").replace(Ne,"").replace(Re," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===De.indexOf(i)&&-1===Le.indexOf(i)?""===(r=u.nodeValue.replace(Pe,"").replace(Ne,"").replace(Re," "))?t.removeChild(u):u.nodeValue=r:-1===Le.indexOf(i)&&(r=u.nodeValue.replace(Se," ").replace(Pe,"").replace(Ne,"").replace(Re," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}}(e,["\n    ",r?(t=document.createElement("img"),t.setAttribute("src",""+String(r)),t.setAttribute("alt",""+String(i)),t.setAttribute("class","m-header-logo__img"),t):Ue('<axa-icon icon="logo-AXA" classes="m-header-logo__icon"></axa-icon>'),"\n  "]),e},Me=function(){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};u(this,n),this.wcNode=e,this.options=i({},n.DEFAULTS,t),this.handleClick=this.handleClick.bind(this),this.init()}return o(n,[{key:"init",value:function(){this.link=this.wcNode.querySelector(this.options.link),this.on()}},{key:"on",value:function(){this.off(),this.unClick=H(this.link,le.CLICK,this.handleClick,{passive:!1})}},{key:"handleClick",value:function(e){M(this.wcNode,ce,null,{bubbles:!0,cancelable:!0,composed:!0})||e.preventDefault()}},{key:"off",value:function(){this.unClick&&this.unClick()}},{key:"destroy",value:function(){this.off(),delete this.link,delete this.wcNode,delete this.options,delete this.handleClick}}]),n}();Me.DEFAULTS={link:".js-header-logo__link"};var Ve,qe,Fe=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ee,template:Ie}))}return r(t,Ae),o(t,[{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-logo"}},{key:"didRenderCallback",value:function(){this.logo&&this.logo.destroy(),this.logo=new Me(this)}},{key:"disconnectedCallback",value:function(){this.logo&&(this.logo.destroy(),delete this.logo)}}]),t}();return Fe.tagName="axa-header-logo",Fe.propTypes={alt:y.string,href:D,src:D},Ve=Fe.tagName,qe=Fe,customElements.get(Ve)||customElements.define(Ve,qe),Fe}();
