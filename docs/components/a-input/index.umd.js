!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}})()&&Object.assign;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function e(t,n,o){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,o)}if("value"in i)return i.value;var a=i.get;return void 0!==a?a.call(o):void 0},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},d=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},f=function e(t,n,o,i){var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,o,i)}else if("value"in r&&r.writable)r.value=o;else{var s=r.set;void 0!==s&&s.call(i,o)}return o},h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{!o&&s.return&&s.return()}finally{if(i)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function y(){}var _=0;function b(e,t){var n=e[t];return"function"==typeof n&&(e[t]=function(e){function t(){return e.apply(void 0,arguments)}return 0===_&&(_++,Object.keys(e).map(function(n){return t[n]=e[n],n}).reduce(b,t),_--),t}(n)),e}var g=e(function(e){e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=y,n.PropTypes=n,n}()});Object.keys(g).reduce(b,g);var m,O,C,k,x=g.oneOf(["left","center","right"]),w=g.oneOf(["left","right"]),T=(g.oneOf(["top","bottom"]),g.oneOf(["up","down"])),A=g.oneOf(["ok","pending","error","unknown"]),E=g.oneOf(["row","col","rowgroup","colgroup","auto"]),j=g.oneOfType([g.string,g.number]),N={text:j,value:g.any,rowspan:j,colspan:j,scope:E,align:x,dense:g.bool},P={float:w,strong:g.bool,bold:g.bool},S=g.oneOfType([g.string,g.number]),R=g.oneOfType([S,g.shape(u({},N,{sort:T,sortActive:g.bool}))]),L=g.oneOfType([S,g.shape(u({},N,P,{action:g.bool,state:A}))]),I=g.oneOfType([S,g.shape(u({},N,P))]),D=g.oneOfType([g.arrayOf(R),g.shape({cells:g.arrayOf(R)})]),U=g.oneOfType([g.arrayOf(L),g.shape({cells:g.arrayOf(L),action:g.bool})]),M=g.oneOfType([g.arrayOf(I),g.shape({cells:g.arrayOf(I)})]),V=(g.oneOfType([D,g.arrayOf(D)]),g.oneOfType([U,g.arrayOf(U)]),g.oneOfType([M,g.arrayOf(M)]),e(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":r(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(n.apply(null,i));else if("object"===a)for(var s in i)t.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),q=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},B={},F=(m=Object,O=m.getPrototypeOf||function(e){return e.__proto__},C=m.setPrototypeOf||function(e,t){return e.__proto__=t,e},k="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),C(new o,n.prototype)},function(e){var t=O(e);return C(e,C(function(){return k(t,arguments,O(this).constructor)},t))}),K=function(e){return F(function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),s(n,[{key:"init",value:function(){var e;this._id=((e=this.nodeName)in B||(B[e]=0),++B[e]),this._initialised=!0}},{key:"connectedCallback",value:function(){this._initialised||this.init()}},{key:"attributeChangedCallback",value:function(){this._initialised||this.init()}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}())},H={},z=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,i=t.cancelable,r=void 0!==i&&i,a=t.detail,s=void 0===a?void 0:a,u=document.createEvent("CustomEvent");u.initCustomEvent(e,o,r,s);var l=u.preventDefault;return u.preventDefault=function(){l.call(u);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},u}}();function W(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new z(t,u({},o,{detail:n}));return e.dispatchEvent(i)}var $=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function G(e){for(var t=e.className,n=!1,o=!0,i=arguments.length,r=Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];var s=r.map(function(e){var i=(r=e,new RegExp("^"+r+"$|^"+r+"\\s|\\s"+r+"\\s|\\s"+r+"$",a)).test(t);var r,a;i?n=!0:o=!1;return{className:e,hasClass:i}});return!(!o&&!n)&&s}var J=/\s+/,Y={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,i=void 0,r=0;r<o;++r)if(void 0!==e[i=n[r]])return t[i];return""}()};function Z(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,u=i.passive,l=void 0===u||u;if(Y[t]&&(t=Y[t]),!e||!t)return null;var c=void 0===n?"undefined":r(n),p=n&&"string"===c;if("function"===c){if(o){var d=o;s=d.capture,l=d.passive}o=n}for(var f=$?{capture:s,passive:l}:s,h=p?function(t){var i=t.target;for(;!G(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,v=t.split(J),y=v.length,_=0;_<y;++_)e.addEventListener(v[_],h,f);return function t(){for(var n=0;n<y;++n)e.removeEventListener(v[n],h,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,i=0;i<o;++i){var r=n[i];if(e[r]===t)return delete e[r]}}(this,t)}}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,i=void 0!==o&&o,r=n.trailing,a=void 0===r||r,s=n.maxWait,u=void 0!==s&&s,l=void 0,c=void 0,p=void 0,d=void 0,f=!1,h=t!==u,y=!1!==u;function _(){for(var n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];return l=o,h&&(c&&clearTimeout(c),c=setTimeout(b,t)),y&&!p&&(p=setTimeout(g,u)),i&&!f&&(f=!0,d=e.apply(void 0,v(l))),d}return _.flush=function(){(c||p)&&(d=e.apply(void 0,v(l)));return O(),d},_.cancel=O,_;function b(){p&&clearTimeout(p),m()}function g(){c&&clearTimeout(c),m()}function m(){a&&(d=e.apply(void 0,v(l))),c=null,p=null,f=!1}function O(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),l=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var Q=window.__subscriptions;function ee(e,t){var n=Z(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);Q[e]||(Q[e]={count:0});var o,i=Q[e];return i.count++,i.onsubscribe||(i.onsubscribe=X((o=e,function(){W(document,"pubsub/onsubscribe",o),W(document,"pubsub/onsubscribe/"+o,o),Q[o]&&delete Q[o].unsubscribe}),100)),i.onsubscribe(),function(){i.count--,n.call(this),i.count<=0&&delete Q[e]}}Z(document,"pubsub/onsubscribe",function(e){var t=e.detail;Q[t]||(Q[t]={count:0});var n=Q[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=h(e,3),n=t[0],o=t[1],i=t[2];W(i,n,o)}),delete n.queue)});var te,ne=function(e,t){return e===t},oe=((te=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne;return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(){return e.apply(void 0,[].concat(n,o))?te.apply(void 0,arguments):void 0}}}})()(!0),[]);var ie=1,re=3,ae=8;function se(e,t){var n=e.nodeType,o=e.nodeName;n===ie&&function(e,t){for(var n=t.skipChildren&&t.skipChildren(),o=t.constructor.observedAttributes,i=o&&Array.isArray(o)&&o.length,r=function(e){return n&&i&&-1===o.indexOf(e)},a=t.attributes,s=e.attributes,u=null,l=null,c=null,p=null,d=s.length-1;d>=0;--d)if(p=s[d],c=p.name,u=p.namespaceURI,l=p.value,!r(c))if(u){var f=p.localName;t.getAttributeNS(u,f||c)!==l&&t.setAttributeNS(u,c,l)}else t.hasAttribute(c)?t.getAttribute(c)!==l&&("null"===l||"undefined"===l?t.removeAttribute(c):t.setAttribute(c,l)):t.setAttribute(c,l);for(var h=a.length-1;h>=0;--h)if(!1!==(p=a[h]).specified){if(c=p.name,u=p.namespaceURI,r(c))continue;u?(c=p.localName||c,e.hasAttributeNS(u,c)||t.removeAttributeNS(u,c)):e.hasAttributeNS(null,c)||t.removeAttribute(c)}}(e,t),n!==re&&n!==ae||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===o?function(e,t){var n=e.value,o=t.value;ue(e,t,"checked"),ue(e,t,"disabled"),n!==o&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===o?ue(e,t,"selected"):"TEXTAREA"===o&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function ue(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var le=3;function ce(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(se(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,o=void 0,i=void 0,r=void 0,a=0,s=0;n=t.childNodes[s],o=e.childNodes[s-a],n||o;s++)if(o)if(n)if(pe(o,n))(i=ce(o,n))!==n&&(t.replaceChild(i,n),a++);else{r=null;for(var u=s;u<t.childNodes.length;u++)if(pe(t.childNodes[u],o)){r=t.childNodes[u];break}r?((i=ce(o,r))!==r&&a++,t.insertBefore(i,n)):o.id||n.id?(t.insertBefore(o,n),a++):(i=ce(o,n))!==n&&(t.replaceChild(i,n),a++)}else t.appendChild(o),a++;else t.removeChild(n),s--}(e,t),t):null:e}function pe(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===le&&e.nodeValue===t.nodeValue)}var de,fe,he,ve,ye=(de=Object,fe=de.getPrototypeOf||function(e){return e.__proto__},he=de.setPrototypeOf||function(e,t){return e.__proto__=t,e},ve="object"===("undefined"==typeof Reflect?"undefined":r(Reflect))?Reflect.construct:function(e,t,n){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),he(new o,n.prototype)},function(e){var t=fe(e);return he(e,he(function(){return ve(t,arguments,fe(this).constructor)},t))})(function(e){function t(e){var n;a(this,t);for(var o="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,r=Array(i>1?i-1:0),s=1;s<i;s++)r[s-1]=arguments[s];var u=d(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,o].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(u,t),u.name="TemplateNoStringReturnException",u}return c(t,e),t}(Error)),_e=!!document.createDocumentFragment().children,be=/[A-Z]/g;function ge(e){return e.replace(be,me)}function me(e,t,n){var o=e.toLowerCase(),i=n.charAt(t+1);return 0===t||i.toUpperCase()===i?o:"-"+o}var Oe=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function Ce(e,t,n){var o=e;if(n)return function(e,t,n){var o=e;switch(n){case g.string:case g.string.isRequired:return e;case g.bool:case g.bool.isRequired:if(!e||t===e)return!0;case g.number:case g.number.isRequired:case g.object:case g.object.isRequired:case g.array:case g.array.isRequired:default:if(Oe.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}return o}(e,t,n);if(e&&t!==e){if(Oe.test(e))try{o=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else o=!0;return o}var ke=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,xe=/[-_]+/g;function we(e){return e.replace(ke,Te)}function Te(e,t){return 0==+e||xe.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}function Ae(e,t,n){var o=1===e.nodeType,i=e.constructor.propTypes,r=n;!n&&o&&(r=(void 0===i?{}:i)[we(t)]);if(o&&!e.hasAttribute(t))return r!==g.bool&&r!==g.bool.isRequired&&void 0;var a=e.value;return t?a=e.getAttribute(t):t=e.name,a=Ce(a,t,r)}var Ee=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function je(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=o.capture,r=void 0===i||i,a=o.passive,s=void 0===a||a,u=e.ownerDocument.documentElement,l=Z(u,t,function(t){var o=t.target;if(!e.contains(o)&&e!==o)return n(t)},{capture:r,passive:s});return Ee&&(u.style.cursor="pointer"),l}var Ne=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var o=t.length,i={},r=0;r<o;++r){var a=t[r];i[a.toUpperCase()]=a}return i}("click","change","keyup","enter","move","leave","Escape","Esc","touchstart","touchmove","touchend","input","resize"),Pe="axa-click",Se="axa-load",Re="axa-change",Le="data-prevent-default";((function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(this,e),this._handleClick=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var o=!n._lastToggleNode,i=t!==n._lastToggleNode,r=!o&&!i;o?(n._notify(Ne.ENTER,t),n._onInteractive()):i&&n._notify(Ne.MOVE,t,n._lastToggleNode),n._lastToggleNode=t,r&&n._options.sameClickClose&&n._close()},this._handleClose=function(e,t){n.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),n._close()},this._handleKeyUp=function(e){(e.key===Ne.ESCAPE||e.key===Ne.ESC||27===e.keyCode)&&(e.preventDefault(),n._close())},this._init(t,o)}return s(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=u({},e.DEFAULTS,n));var o=this._options.containerClass;this._container=o?this._wcNode.querySelector(o):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=Z(this._container,Ne.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive();var e=this._container,t=this._options,n=t.closeClass,o=t.outerClose,i=t.escapeClose,r=t.preventDefault;n&&(this._unCloseClick=Z(e,Ne.CLICK,n,this._handleClose,{passive:!r})),o&&(this._unOuterClick=je(e,Ne.CLICK,this._handleClose,{passive:!r})),i&&(this._unCloseEscape=Z(e.ownerDocument,Ne.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(Le)?Ae(e,Le):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),this.deleteLastToggleNode()}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(Ne.LEAVE,this._lastToggleNode),this._offInteractive(),this.deleteLastToggleNode())}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}},{key:"deleteLastToggleNode",value:function(){delete this._lastToggleNode}},{key:"lastToggleNode",get:function(){return this._lastToggleNode}}]),e})()).DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var Ie=q(function(e){var t,n;return n=t=function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),n}(),t.version="2.0.1-beta.232",n},function(e){return function(t){function n(){var e,t,o;a(this,n);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),o._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;o.contextNode&&(clearTimeout(o.timeoutId),o.timeoutId=setTimeout(function(){o.contextCallback(o.contextNode,e)},10)),o.unContextEnabled&&o.unContextEnabled(),o.unContextEnabled=ee("context/available",o._makeContextReady)},d(o,t)}return c(n,e),s(n,[{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Q[e]||(Q[e]={count:0,queue:[]});var o=Q[e].queue;Array.isArray(o)?o.push([e,t,n]):W(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),s(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else f(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(){var e,t,o;a(this,n);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),o._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,r="_"+t,a=n[t],s=o[r];return i||o.shouldUpdateCallback(a,s)?(o.props[t]=a,{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},d(o,t)}return c(n,e),s(n,[{key:"init",value:function(e){var t=this;l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,e),this._isConnected=!1,this.props={},this.updatedDebounced=X(function(){return t.updated&&t.updated()},50);var o=this.constructor.observedAttributes;Array.isArray(o)&&o.forEach(function(e){we(e)})}},{key:"connectedCallback",value:function(){var e=this;if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;if(this.initialClassName=this.className,Array.isArray(t)){var o=this.constructor.propTypes;t.forEach(function(t){var n=we(t);if(e.hasAttribute(t)){var i=Ae(e,t,o[n]);e.props[n]=i}}),this.checkPropTypes()}}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,o){if(l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"attributeChangedCallback",this).call(this,e,t,o),this.shouldUpdateCallback(o,t)){var i=we(e);if(this.hasAttribute(e)){var r=this.constructor.propTypes;this.props[i]=Ce(o,e,r[i])}else this.props[i]=null;this.checkPropTypes(),"value"===e&&null!==o&&W(this,Re,o,{bubbles:!0,cancelable:!0,composed:!0}),this.updatedDebounced()}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t,o=Object.keys(e).filter(function(e){return n.indexOf(ge(e))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate;this.checkPropTypes(),o&&this._isConnected&&this.updated&&this.updated()}},{key:"checkPropTypes",value:function(){var e=this.constructor,t=e.propTypes,n=e.tagName;t&&g.checkPropTypes(t,this.props,"prop",n)}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}],[{key:"observedAttributes",get:function(){var e=this.propTypes;return e&&Object.keys(e).map(ge)}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,o=p(e,["template"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,o),this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this.updated=this.render}},{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});_e||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this.props,this.childrenFragment,this),u=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){u.appendChild(e)});else if(s){if("string"==typeof s)throw new ye(this);u.appendChild(s)}if(t)l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,u);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(u),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":r(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":r(t)))throw new Error("componentMorph: newTree should be an object");ce(t,e)}(this,c),function(){for(var e=void 0;e=oe.pop();)delete e.isSameNode;oe=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){return a(this,n),d(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,e),s(n,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,o=void 0===t?"":t,i=p(e,["styles"]);l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this,i),this._styles=o}},{key:"connectedCallback",value:function(){l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&l(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()}),De=q(Ie,K),Ue=q(Ie,function(e){return function(t){function n(){var e,t,o;a(this,n);for(var i=arguments.length,r=Array(i),s=0;s<i;s++)r[s]=arguments[s];return t=o=d(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(r))),o._appendStyles=function(){n.appendGlobalStyles(o._styles,o.nodeName)},d(o,t)}return c(n,e),s(n,null,[{key:"appendGlobalStyles",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.uuidv4();if(t&&!H[n]){var o=document.createElement("style"),i=document.createTextNode(t);H[n]=!0,o.appendChild(i),o.setAttribute("data-c-name",n.toLowerCase()),document.head.appendChild(o)}}}]),n}()},K)(HTMLElement);var Me=/\n[\s]+$/,Ve=/^\n[\s]+/,qe=/[\s]+$/,Be=/^[\s]+/,Fe=/[\n\s]+/g,Ke=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],He=["code","pre","textarea"],ze=function e(t,n){if(Array.isArray(n))for(var o,i,r=t.nodeName.toLowerCase(),a=!1,s=0,u=n.length;s<u;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),c=l),s===u-1&&(a=!1,-1===Ke.indexOf(r)&&-1===He.indexOf(r)?""===(o=c.nodeValue.replace(Ve,"").replace(qe,"").replace(Me,"").replace(Fe," "))?t.removeChild(c):c.nodeValue=o:-1===He.indexOf(r)&&(i=0===s?"":" ",o=c.nodeValue.replace(Ve,i).replace(Be," ").replace(qe,"").replace(Me,"").replace(Fe," "),c.nodeValue=o));else if(l&&l.nodeType){a&&(a=!1,-1===Ke.indexOf(r)&&-1===He.indexOf(r)?""===(o=c.nodeValue.replace(Ve,"").replace(Me,"").replace(Fe," "))?t.removeChild(c):c.nodeValue=o:-1===He.indexOf(r)&&(o=c.nodeValue.replace(Be," ").replace(Ve,"").replace(Me,"").replace(Fe," "),c.nodeValue=o));var p=l.nodeName;p&&(r=p.toLowerCase()),t.appendChild(l)}}}},We=De(HTMLElement);function $e(e){var t,n,o,i,r,a=e.inputId,s=void 0===a?We.uuidv4():a,u=e.type,l=void 0===u?"text":u,c=e.placeholder,p=void 0===c?"":c,d=e.value,f=void 0===d?"":d,h=e.name,v=e.disabled,y=void 0!==v&&v,_=e.icon;return(o=document.createElement("div")).setAttribute("class","a-input__wrapper"),ze(o,["\n      ",(t=document.createElement("input"),t.setAttribute("id",""+String(s)),t.setAttribute("name",""+String(h)),t.setAttribute("type",""+String(l)),t.setAttribute("placeholder",""+String(p)),t.setAttribute("value",""+String(f)),y&&t.setAttribute("disabled","disabled"),t.setAttribute("class","a-input__input js-input__input"),t),"\n          ",(n=document.createElement("span"),n.setAttribute("class","a-input__valid-icon"),n),"\n          ",_?(r=document.createElement("button"),r.setAttribute("type","button"),r.setAttribute("class","a-input__icon__button js-input__icon__button"),ze(r,["\n            ",(i=document.createElement("axa-icon"),i.setAttribute("classes","a-input__icon"),i.setAttribute("icon",""+String(_)),i),"\n          "]),r):"","\n    "]),o}var Ge,Je,Ye,Ze=function(){function e(t){a(this,e),this.wcNode=t}return s(e,[{key:"init",value:function(){this.iconButton=this.wcNode.querySelector(".js-input__icon__button"),this.inputfield=this.wcNode.querySelector(".js-input__input"),this.listenToButtons(),this.listenToInputChange(),W(this.inputfield,Se,this.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})}},{key:"listenToButtons",value:function(){var e=this;this.offListenToButtons(),this.unIconButtonListenerEnd=Z(this.iconButton,Ne.CLICK,function(){W(e.iconButton,Pe,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToButtons",value:function(){this.unIconButtonListenerEnd&&this.unIconButtonListenerEnd()}},{key:"listenToInputChange",value:function(){var e=this;this.offListenToInputChange(),this.unInputListenerEnd=Z(this.inputfield,Ne.INPUT,function(){W(e.inputfield,Re,e.inputfield.value,{bubbles:!0,cancelable:!0,composed:!0})})}},{key:"offListenToInputChange",value:function(){this.unInputListenerEnd&&this.unInputListenerEnd()}},{key:"destroy",value:function(){this.offListenToInputChange(),this.offListenToButtons()}}]),e}(),Xe=function(e){function t(){return a(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,Ue),s(t,[{key:"init",value:function(){l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"init",this).call(this,{styles:'.a-input {\n  display: block;\n  width: 100%; }\n  .a-input:not(:first-child) {\n    margin-top: 5px; }\n    @media (min-width: 768px) {\n      .a-input:not(:first-child) {\n        margin-top: 10px; } }\n\n.a-input__wrapper {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n.a-input__input {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 40px;\n  padding: 0 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #333;\n  background: #fff;\n  outline: none;\n  border: 1px solid #ccc;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n  @media (min-width: 576px) {\n    .a-input__input {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-input__input::-webkit-input-placeholder {\n    color: #999; }\n  .a-input__input:-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::-ms-input-placeholder {\n    color: #999; }\n  .a-input__input::placeholder {\n    color: #999; }\n  .a-input__input:hover:not(:disabled):not(.a-input--error), .a-input__input:active:not(:disabled):not(.a-input--error), .a-input__input:focus:not(:disabled):not(.a-input--error) {\n    border-color: #00008f; }\n  .a-input__input:disabled {\n    background-color: #f5f5f5; }\n\n.a-input--error .a-input__input {\n  border-color: #c91432; }\n\n.a-input--valid .a-input__valid-icon {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.a-input--inline {\n  display: inline-block;\n  width: auto;\n  vertical-align: middle; }\n  .a-input--inline + .a-input--inline {\n    margin-left: 10px; }\n    @media (min-width: 768px) {\n      .a-input--inline + .a-input--inline {\n        margin-left: 15px; } }\n  .a-input--inline .a-input__wrapper {\n    position: relative;\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n\n.a-input__valid-icon {\n  display: none;\n  width: 48px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0; }\n  .a-input__valid-icon::before {\n    display: block;\n    width: 8px;\n    height: 16px;\n    content: "";\n    border: solid #1cc54e;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n\n.a-input__icon__button {\n  position: absolute;\n  right: 5px;\n  top: 5px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  outline: none; }\n\n.a-input__icon__button:hover {\n  cursor: pointer; }\n\n.a-input__icon {\n  height: 16px;\n  width: 14px;\n  fill: #00008f; }\n',template:$e}),this.input=new Ze(this)}},{key:"willRenderCallback",value:function(){var e=this.props,t=e.valid,n=e.inline,o=e.error,i=e.disabled;this.className=V("a-input",this.initialClassName,{"a-input--valid":t,"a-input--inline":n,"a-input--error":o,"a-input--disabled":i})}},{key:"didRenderCallback",value:function(){this.input.init()}},{key:"disconnectedCallback",value:function(){this.input.destroy()}}]),t}();return Xe.tagName="axa-input",Xe.propTypes={valid:g.bool,inline:g.bool,error:g.string,disabled:g.bool,inputId:g.string,type:g.string,placeholder:g.string,value:g.string,name:g.string,icon:g.string},Ge=Xe.tagName,Je=Xe,customElements.get(Ge)||customElements.define(Ge,Je,Ye),Xe});
