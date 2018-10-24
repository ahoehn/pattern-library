var StyleGuideWebComponent=function(e){"use strict";function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p=function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){var n={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},h=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},v=function e(t,n,o,r){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,r)}else if("value"in i&&i.writable)i.value=o;else{var s=i.set;void 0!==s&&s.call(r,o)}return o},c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function u(){}function y(e,t){return"function"==typeof e[t]&&(e[t]=function(e){return(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])&&Object.keys(e).reduce(y,e),function(){return e.apply(void 0,arguments)}}(e[t],!1)),e}var b=t(function(e){e.exports=function(){function e(e,t,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=u,n.PropTypes=n}()});Object.keys(b).reduce(y,b);var g=b.oneOf(["left","center","right"]),m=b.oneOfType([b.string,b.number]),O=b.oneOfType([b.arrayOf(j),b.shape({cells:b.arrayOf(j)})]),k=b.oneOfType([b.arrayOf(P),b.shape({cells:b.arrayOf(P),action:b.bool})]),w=b.oneOfType([b.arrayOf(S),b.shape({cells:b.arrayOf(S)})]),T=(b.oneOf(["row","col","rowgroup","colgroup","auto"]),b.oneOfType([b.arrayOf(j),b.arrayOf(O)]),b.oneOfType([b.arrayOf(P),b.arrayOf(k)]),b.oneOfType([b.arrayOf(S),b.arrayOf(w)]),b.oneOf(["up","down"])),A=b.oneOf(["left","right"]),E=b.oneOf(["ok","pending","error","unknown"]),N={text:m,value:b.any,rowspan:b.number,colspan:b.number,scope:null,align:g,dense:b.bool},x=b.oneOfType([b.string,b.number,b.shape(N)]),j=b.oneOfType([x,b.shape(i({},N,{sort:T,sortActive:b.bool}))]),P=b.oneOfType([x,b.shape(i({},N,{float:A,action:b.bool,strong:b.bool,bold:b.bool,state:E}))]),S=b.oneOfType([x,b.shape(i({},N,{float:A}))]),D=(b.oneOf(["top","bottom"]),t(function(e){!function(){var i={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=void 0===n?"undefined":_(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var r in n)i.call(n,r)&&n[r]&&e.push(r)}}return e.join(" ")}e.exports?e.exports=a:window.classNames=a}()})),R={},I=function(e){return e in R||(R[e]=0),++R[e]},L=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,o,i,s);var u=c.preventDefault;return c.preventDefault=function(){u.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}();function U(e,t,n){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},r=new L(t,i({},o,{detail:n}));return e.dispatchEvent(r)}var F=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),M=/^\s+|\s{2,}|\s+$/g;function q(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function z(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=K.apply(void 0,[e].concat(n));if(!0!==r){var i=[].concat(n);Array.isArray(r)&&(i=r.reduce(V,[])),i&&(e.className+=" "+i.join(" "))}}function V(e,t){var n=t.className;return t.hasClass||e.push(n),e}function K(e){for(var n=e.className,o=!1,r=!0,t=arguments.length,i=Array(1<t?t-1:0),a=1;a<t;a++)i[a-1]=arguments[a];var s=i.map(function(e){var t=q(e).test(n);t?o=!0:r=!1;return{className:e,hasClass:t}});return!(!r&&!o)&&s}function H(e){for(var t=arguments.length,n=Array(1<t?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=K.apply(void 0,[e].concat(n));if(!1!==r){var i=[].concat(n);if(Array.isArray(r)&&(i=r.reduce(W,[])),i){var a=e.className;e.className=i.reduce(B,a)}}}function W(e,t){var n=t.className;return t.hasClass&&e.push(n),e}function B(e,t){var n=q(t,"g");return e.replace(n," ").replace(M," ")}var Y=/\s+/,$={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function G(n,e,o,r){var t=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},i=t.capture,a=void 0!==i&&i,s=t.passive,c=void 0===s||s;if($[e]&&(e=$[e]),!n||!e)return null;var u=void 0===o?"undefined":_(o),l=o&&"string"===u;if("function"===u){if(r){var d=r;a=d.capture,c=d.passive}r=o}for(var p=F?{capture:a,passive:c}:a,f=l?function(e){var t=e.target;for(;!K(t,o)&&t!==n;)t=t.parentNode;if(t!==n)return r(e,t)}:r,h=e.split(Y),v=h.length,y=0;y<v;++y)n.addEventListener(h[y],f,p);return function e(){for(var t=0;t<v;++t)n.removeEventListener(h[t],f,p);!function(e,t){if(!e)return;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,e)}}function J(o){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},t=e.leading,i=void 0!==t&&t,n=e.trailing,a=void 0===n||n,s=e.maxWait,c=void 0!==s&&s,u=void 0,l=void 0,d=void 0,p=void 0,f=!1,h=r!==c,v=!1!==c;function y(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,h&&(l&&clearTimeout(l),l=setTimeout(_,r)),v&&!d&&(d=setTimeout(b,c)),i&&!f&&(f=!0,p=o.apply(void 0,C(u))),p}return y.flush=function(){(l||d)&&(p=o.apply(void 0,C(u)));return m(),p},y.cancel=m,y;function _(){d&&clearTimeout(d),g()}function b(){l&&clearTimeout(l),g()}function g(){a&&(p=o.apply(void 0,C(u))),d=l=null,f=!1}function m(){l&&(clearTimeout(l),l=null),d&&(clearTimeout(d),d=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var X=window.__subscriptions;function Z(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;X[e]||(X[e]={count:0,queue:[]});var o=X[e].queue;Array.isArray(o)?o.push([e,t,n]):U(n,e,t)}function Q(e,t){var n=G(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,e,t);X[e]||(X[e]={count:0});var o,r=X[e];return r.count++,r.onsubscribe||(r.onsubscribe=J((o=e,function(){U(document,"pubsub/onsubscribe",o),U(document,"pubsub/onsubscribe/"+o,o),X[o]&&delete X[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete X[e]}}G(document,"pubsub/onsubscribe",function(e){var t=e.detail;X[t]||(X[t]={count:0});var n=X[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=c(e,3),n=t[0],o=t[1],r=t[2];U(r,n,o)}),delete n.queue)});var ee,te=function(e,t){return e===t},ne=((ee=function(){var e;return(e=console).log.apply(e,arguments)},function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:te;return function(){for(var e=arguments.length,o=Array(e),t=0;t<e;t++)o[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){return r.apply(void 0,[].concat(o,t))?ee.apply(void 0,arguments):void 0}}}})()(!0),function(e){function c(e,t){var n;l(this,c);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+t.nodeName+"#"+t._id+" and evaluates to -> "+t[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",r=arguments.length,i=Array(2<r?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var s=h(this,(n=c.__proto__||Object.getPrototypeOf(c)).call.apply(n,[this,o].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(s,c),s.name="PropertyExistsException",s}return f(c,e),c}(Error)),oe=/[A-Z]/g;function re(e){return e.replace(oe,ie)}function ie(e,t,n){var o=e.toLowerCase(),r=n.charAt(t+1);return 0===t||r.toUpperCase()===r?o:"-"+o}var ae=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function se(t,n,e){var o=t;if(e)return function(t,n,e){var o=t;switch(e){case b.string:case b.string.isRequired:return t;case b.bool:case b.bool.isRequired:if(!t||n===t)return!0;case b.number:case b.number.isRequired:case b.object:case b.object.isRequired:case b.array:case b.array.isRequired:default:if(ae.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}return o}(t,n,e);if(t&&n!==t){if(ae.test(t))try{o=JSON.parse(t)}catch(e){console.error("Attribute "+n+" has an error:\n"+e+"\n",t)}}else o=!0;return o}var ce=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,ue=/[-_]+/g;function le(e){return e.replace(ce,de)}function de(e,t){return 0==+e||ue.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function pe(e,t,n){var o=1===e.nodeType,r=e.constructor.propTypes,i=n;!n&&o&&(i=(void 0===r?{}:r)[le(t)]);if(o&&!e.hasAttribute(t))return i!==b.bool&&i!==b.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=se(a,t,i)}function fe(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,r={},i=0;i<o;++i){var a=t[i];r[a.toUpperCase()]=a}return r}var he=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function ve(n,e,o){var t,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},i=r.capture,a=void 0===i||i,s=r.passive,c=void 0===s||s,u=n.ownerDocument.documentElement,l=G(u,e,function(e){var t=e.target;if(!n.contains(t)&&n!==t)return o(e)},{capture:a,passive:c});return t=u,he&&(t.style.cursor="pointer"),l}var ye=fe("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),_e="axa-change",be="data-prevent-default";(function(){function o(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};l(this,o),this._handleClick=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!i._lastToggleNode,o=t!==i._lastToggleNode,r=!n&&!o;n?(i._notify(ye.ENTER,t),i._onInteractive()):o&&i._notify(ye.MOVE,t,i._lastToggleNode),i._lastToggleNode=t,r&&i._options.sameClickClose&&i._close()},this._handleClose=function(e,t){i.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),i._close()},this._handleKeyUp=function(e){(e.key===ye.ESCAPE||e.key===ye.ESC||27===e.keyCode)&&(e.preventDefault(),i._close())},this._init(e,t)}return d(o,[{key:"_init",value:function(e,t){e&&(this._wcNode=e),t&&(this._options=i({},o.DEFAULTS,t));var n=this._options.containerClass;this._container=n?this._wcNode.querySelector(n):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=G(this._container,ye.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=G(this._container,ye.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=ve(this._container,ye.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=G(this._container.ownerDocument,ye.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(be)?pe(e,be):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(ye.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),o}()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ge=["title","checked","disabled"],me=[];var Ce=1,Oe=3,ke=8;function we(e,t){var n=e.nodeType,o=e.nodeName;n===Ce&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,r=o&&Array.isArray(o)&&o.length,i=function(e){return n&&r&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,c=null,u=null,l=null,d=null,p=s.length-1;0<=p;--p)if(d=s[p],l=d.name,c=d.namespaceURI,u=d.value,!i(l))if(c){var f=d.localName;t.getAttributeNS(c,f||l)!==u&&t.setAttributeNS(c,l,u)}else t.hasAttribute(l)?t.getAttribute(l)!==u&&("null"===u||"undefined"===u?t.removeAttribute(l):t.setAttribute(l,u)):t.setAttribute(l,u);for(var h=a.length-1;0<=h;--h)if(!1!==(d=a[h]).specified){if(l=d.name,c=d.namespaceURI,i(l))continue;c?(l=d.localName||l,e.hasAttributeNS(c,l)||t.removeAttributeNS(c,l)):e.hasAttributeNS(null,l)||t.removeAttribute(l)}}(e,t),n!==Oe&&n!==ke||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;Te(e,t,"checked"),Te(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?Te(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function Te(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var Ae=3;function Ee(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(we(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,r=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(Ne(o,n))(r=Ee(o,n))!==n&&(t.replaceChild(r,n),a++);else{i=null;for(var c=s;c<t.childNodes.length;c++)if(Ne(t.childNodes[c],o)){i=t.childNodes[c];break}i?((r=Ee(o,i))!==i&&a++,t.insertBefore(r,n)):o.id||n.id?(t.insertBefore(o,n),a++):(r=Ee(o,n))!==n&&(t.replaceChild(r,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function Ne(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===Ae&&e.nodeValue===t.nodeValue)}var xe=function(e){function s(e){var t;l(this,s);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,r=Array(1<o?o-1:0),i=1;i<o;i++)r[i-1]=arguments[i];var a=h(this,(t=s.__proto__||Object.getPrototypeOf(s)).call.apply(t,[this,n].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(a,s),a.name="TemplateNoStringReturnException",a}return f(s,e),s}(Error),je=!!document.createDocumentFragment().children;function Pe(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Pe.prototype,HTMLElement.prototype),Object.setPrototypeOf(Pe,HTMLElement);var Se=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(t){return function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._makeContextReady=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=Q("context/available",n._makeContextReady)},h(n,t)}return f(a,t),d(a,[{key:"connectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this)&&p(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,Z("context/available",this.__contextName=e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),a}()},function(t){return function(e){function n(){return l(this,n),h(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return f(n,t),d(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):p(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else v(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(t){return function(e){function u(e){l(this,u);var c=h(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));c._reduceProps=function(e,t){var n=e.props,o=e.shouldUpdate,r=c._hasKeys[t];if(-1===ge.indexOf(t)&&r)throw new ne(t,c);var i="_"+t,a=n[t],s=c[i];return o||c.shouldUpdateCallback(a,s)?(c[i]=a,c._props[t]=a,r&&v(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,a,c),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},c._isConnected=!1,c._props={},c._hasKeys={},c.updatedDebounced=J(function(){return c.updated&&c.updated()},50);var t=c.constructor.observedAttributes;return Array.isArray(t)&&t.forEach(function(e){var t,n=le(e),o=n in c;if(-1===ge.indexOf(n)&&o)throw new ne(n,c);c._hasKeys[n]=o,Object.defineProperty(c,n,t={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&v(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this.updatedDebounced())}})}),c}return f(u,t),d(u,null,[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(re)}}]),d(u,[{key:"connectedCallback",value:function(){var r=this;if(p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this)&&p(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(e)){var i=this.constructor.propTypes;e.forEach(function(e){var t=le(e);if(r.hasAttribute(e)){var n=pe(r,e,i[t]),o=r._hasKeys[t];r._props[t]=n,o&&v(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),t,n,r)}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var o=le(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this[o]=se(n,e,r[o])}else this[o]=null;this.checkPropTypes(),"value"===e&&null!==n&&U(this,_e,n,{bubbles:!0,cancelable:!0,composed:!0})}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return-1<n.indexOf(re(e))}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&b.checkPropTypes(t,this._props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),u}()},function(t){return function(e){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=a(e,["template"]);l(this,c);var o=h(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,n));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return f(c,t),d(c,[{key:"render",value:function(){var n=this,e=!this._hasRendered;if(this.willRenderCallback(e),this._hasTemplate){var t=this._template;try{if(e){for(var o=document.createDocumentFragment(),r=[];this.firstChild;)r.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=r,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var t=e.cloneNode(!0);n.childrenFragment.appendChild(t)});je||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var i=t(this._props,this.childrenFragment,this),a=document.createDocumentFragment();if(Array.isArray(i))i.forEach(function(e){a.appendChild(e)});else if(i){if("string"==typeof i)throw new xe(this);a.appendChild(i)}if(e)p(c.prototype.__proto__||Object.getPrototypeOf(c.prototype),"appendChild",this).call(this,a);else{var s=this.cloneNode(!1);s._isMorphing=!0,s.appendChild(a),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":_(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":_(t)))throw new Error("componentMorph: newTree should be an object");Ee(t,e)}(this,s),function(){for(var e=void 0;e=me.pop();)delete e.isSameNode;me=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),c}()},function(t){return function(e){function i(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,o=a(e,["styles"]);l(this,i);var r=h(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,o));return r._styles=n,r}return f(i,t),d(i,[{key:"connectedCallback",value:function(){p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this)&&p(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),i}()})(function(e){function n(e){l(this,n);var t=h(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._id=I(t.nodeName),t}return f(n,Pe),d(n,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}()),De={},Re=function(e){function a(){var e,t,n;l(this,a);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=n=h(this,(e=a.__proto__||Object.getPrototypeOf(a)).call.apply(e,[this].concat(r))))._appendStyles=function(){a.appendGlobalStyles(n._styles,n.nodeName)},h(n,t)}return f(a,Se),d(a,null,[{key:"appendGlobalStyles",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Se.uuidv4();if(e&&!De[t]){var n=document.createElement("style"),o=document.createTextNode(e);De[t]=!0,n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),a}();var Ie=".o-sticky-container {\n  position: relative;\n  display: block; }\n\n.o-sticky-container--debug {\n  background: rgba(255, 255, 0, 0.5); }\n  .o-sticky-container--debug::before {\n    content: ''; }\n  .o-sticky-container--debug.is-sticky-container-active {\n    background: green; }\n    .o-sticky-container--debug.is-sticky-container-active::before {\n      content: 'is-active'; }\n  .o-sticky-container--debug.is-sticky-container-idle::before {\n    content: 'is-idle'; }\n",Le="pageYOffset"in window?function(){return window.pageYOffset}:function(){var e=document,t=e.body;return e.documentElement.scrollTop||t.scrollTop||0};var Ue,Fe=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,Me=function(){var e=window.requestAnimationFrame||window[Fe+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var r=0;e=function(e){var t=Date.now(),n=Math.max(0,16-(t-r)),o=setTimeout(function(){e(t+n)},n);return r=t+n,o}}return e}(),qe=(Ue=(Ue=window.cancelAnimationFrame||window[Fe+"CancelAnimationFrame"]||window[Fe+"CancelRequestAnimationFrame"])?Ue.bind(window):function(e){clearTimeout(e)},void 0),ze=0,Ve=["resize","orientationchange"].join(" "),Ke=[Ve,"scroll","touchstart","touchmove","touchend","pageshow","load"].join(" "),He=function(){function e(){var h=this;l(this,e),this._change=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).type;0<=Ve.indexOf(e)&&(h.forceRepaint=!0),h.framePending||Me(function(){for(var e=h.containerNodes,t=h.forceRepaint,n=h.lastScrollTop,o=h.isDirectionFrozen,r=h.lastDirection,i=Le(),a=i-n,s=o?r:0<a?1:a<0?-1:r,c=0,u=e.length;c<u;c++){var l=e[c],d=l.getBoundingClientRect(),p=d.top,f=d.bottom;Z("sticky-container/"+(p<=0&&0<=f?"active":"idle"),{containerTop:p,containerBottom:f,direction:s,forceRepaint:t},l)}h.lastScrollTop=i,h.lastDirection=s,h.framePending=!1,h.forceRepaint=!1})},this._freezeDirection=function(){h.isDirectionFrozen=!0,h.lastDirection=-1},this._thawDirection=function(){h.isDirectionFrozen=!1},this.forceRepaint=!1,this.framePending=!1,this.lastScrollTop=0,this.isDirectionFrozen=!1,this.containerNodes=[],this._on()}return d(e,[{key:"addContainer",value:function(e){this.containerNodes.push(e),this._change()}},{key:"_on",value:function(){this._off(),this._unChange=G(window,Ke,this._change),this._unFreezeDirection=Q("sticky-container/freeze-direction",this._freezeDirection),this._unThawDirection=Q("sticky-container/thaw-direction",this._thawDirection)}},{key:"_off",value:function(){this._unChange&&this._unChange(),this._unFreezeDirection&&this._unFreezeDirection(),this._unThawDirection&&this._unThawDirection()}},{key:"remove",value:function(e){var t,n,o;e&&(t=this.containerNodes,n=e,-1<(o=t.indexOf(n))&&t.splice(o,1)),--ze<=0&&qe&&(this._off(),delete this.containerNodes,qe=null)}}]),e}();var We=fe("IS_IDLE","IS_ACTIVE"),Be=function(){function n(e){var t=this;l(this,n),this._active=function(){t.state!==We.IS_ACTIVE&&(t.state=We.IS_ACTIVE,z(t.roodNode,n.DEFAULTS.isActiveClass),H(t.roodNode,n.DEFAULTS.isIdleClass))},this._idle=function(){t.state!==We.IS_IDLE&&(t.state=We.IS_IDLE,z(t.roodNode,n.DEFAULTS.isIdleClass),H(t.roodNode,n.DEFAULTS.isActiveClass))},this.roodNode=e,this.state=We.IS_IDLE,this.spy=(qe||(qe=new He),ze++,qe),this.spy.addContainer(e),this._on()}return d(n,[{key:"_on",value:function(){this._off(),this._unActive=Q("sticky-container/active",this._active,this.roodNode),this._unIdle=Q("sticky-container/idle",this._idle,this.roodNode)}},{key:"_off",value:function(){this._unActive&&this._unActive(),this._unIdle&&this._unIdle()}},{key:"destroy",value:function(){this._off(),this.spy.remove(this.roodNode),delete this.spy,delete this.roodNode}}]),n}();Be.DEFAULTS={isActiveClass:"is-sticky-container-active",isIdleClass:"is-sticky-container-idle"};var Ye,$e,Ge=function(e){function t(){l(this,t);var e=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:Ie}));return e.provideContext(),e}return f(t,Re),d(t,[{key:"connectedCallback",value:function(){p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=this.debug;this.className=D(this.initialClassName,"o-sticky-container js-sticky-container",{"o-sticky-container--debug":e}),this.stickyContainer=new Be(this)}},{key:"disconnectedCallback",value:function(){this.stickyContainer&&(this.stickyContainer.destroy(),delete this.stickyContainer)}}]),t}();return Ge.tagName="axa-sticky-container",Ge.propTypes={debug:b.bool},Ye=Ge.tagName,$e=Ge,customElements.get(Ye)||customElements.define(Ye,$e),e.AXAStickyContainer=Ge,e.default=Ge,e}({});
