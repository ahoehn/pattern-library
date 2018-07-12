var StyleGuideWebComponent=function(){"use strict";var e={},t=function(t){return t in e||(e[t]=0),++e[t]},r=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.bubbles,n=void 0!==r&&r,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,n,i,c);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},s=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},l=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},u=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},d=function e(t,r,n,o){var i=Object.getOwnPropertyDescriptor(t,r);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,r,n,o)}else if("value"in i&&i.writable)i.value=n;else{var c=i.set;void 0!==c&&c.call(o,n)}return n},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)};function h(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new r(t,a({},o,{detail:n}));return e.dispatchEvent(i)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),r=function(){};window.addEventListener("testPassiveEventSupport",r,t),window.removeEventListener("testPassiveEventSupport",r,t)}return e}();function y(e){for(var t=e.className,r=!1,n=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?r=!0:n=!1;return{className:e,hasClass:o}});return!(!n&&!r)&&c}var _=/\s+/,b={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},r=Object.keys(t),n=r.length,o=void 0,i=0;i<n;++i)if(void 0!==e[o=r[i]])return t[o];return""}()};function m(e,t,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,c=void 0!==a&&a,s=i.passive,l=void 0===s||s;if(b[t]&&(t=b[t]),!e||!t)return null;var u=void 0===r?"undefined":n(r),d=r&&"string"===u;if("function"===u){if(o){var p=o;c=p.capture,l=p.passive}o=r}for(var f=v?{capture:c,passive:l}:c,h=d?function(t){var n=t.target;for(;!y(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,m=t.split(_),g=m.length,O=0;O<g;++O)e.addEventListener(m[O],h,f);return function t(){for(var r=0;r<g;++r)e.removeEventListener(m[r],h,f);!function(e,t){if(!e)return!1;for(var r=Object.keys(e),n=r.length,o=0;o<n;++o){var i=r[o];if(e[i]===t)return delete e[i]}}(this,t)}}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.leading,o=void 0!==n&&n,i=r.trailing,a=void 0===i||i,c=r.maxWait,s=void 0!==c&&c,l=void 0,u=void 0,d=void 0,p=void 0,h=!1,v=t!==s,y=!1!==s;function _(){for(var r=arguments.length,n=Array(r),i=0;i<r;i++)n[i]=arguments[i];return l=n,v&&(u&&clearTimeout(u),u=setTimeout(b,t)),y&&!d&&(d=setTimeout(m,s)),o&&!h&&(h=!0,p=e.apply(void 0,f(l))),p}return _.flush=function(){(u||d)&&(p=e.apply(void 0,f(l)));return O(),p},_.cancel=O,_;function b(){d&&clearTimeout(d),g()}function m(){u&&clearTimeout(u),g()}function g(){a&&(p=e.apply(void 0,f(l))),u=null,d=null,h=!1}function O(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var O=window.__subscriptions;function x(e,t){var r=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);O[e]||(O[e]={count:0});var n,o=O[e];return o.count++,o.onsubscribe||(o.onsubscribe=g((n=e,function(){h(document,"pubsub/onsubscribe",n),h(document,"pubsub/onsubscribe/"+n,n),O[n]&&delete O[n].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,r.call(this),o.count<=0&&delete O[e]}}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;O[t]||(O[t]={count:0});var r=O[t],n=r.queue;Array.isArray(n)&&(n.forEach(function(e){var t=p(e,3),r=t[0],n=t[1],o=t[2];h(o,r,n)}),delete r.queue)});var C,A=function(e,t){return e===t},k=((C=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return function(){return e.apply(void 0,[].concat(r,n))?C.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,r){var n;o(this,t);for(var i="\n    Native Property >>>"+e+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,c=Array(a>2?a-2:0),s=2;s<a;s++)c[s-2]=arguments[s];var l=u(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,i].concat(c)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return s(t,e),t}(Error)),w=/[A-Z]/g;function N(e,t,r){var n=e.toLowerCase(),o=r.charAt(t+1);return 0===t||o.toUpperCase()===o?n:"-"+n}var E=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function P(e,t){var r=e;if(e&&t!==e){if(E.test(e))try{r=JSON.parse(e)}catch(r){console.error("Attribute "+t+" has an error:\n"+r+"\n",e)}}else r=!0;return r}var j=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,T=/[-_]+/g;function S(e){return e.replace(j,R)}function R(e,t){return 0==+e||T.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var M=["title","checked","disabled"],L=[];var D=1,V=3,U=8;function I(e,t){var r=e.nodeType,n=e.nodeName;r===D&&function(e,t){for(var r=t.attributes,n=e.attributes,o=null,i=null,a=null,c=null,s=n.length-1;s>=0;--s)if(c=n[s],a=c.name,o=c.namespaceURI,i=c.value,o){var l=c.localName;t.getAttributeNS(o,l||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var u=r.length-1;u>=0;--u)!1!==(c=r[u]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),r!==V&&r!==U||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===n?function(e,t){var r=e.value,n=t.value;F(e,t,"checked"),F(e,t,"disabled"),r!==n&&(t.setAttribute("value",r),t.value=r);"null"===r&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=r):t.removeAttribute("value")}(e,t):"OPTION"===n?F(e,t,"selected"):"TEXTAREA"===n&&function(e,t){var r=e.value;r!==t.value&&(t.value=r);if(t.firstChild&&t.firstChild.nodeValue!==r){if(""===r&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=r}}(e,t)}function F(e,t,r){e[r]!==t[r]&&(t[r]=e[r],e[r]?t.setAttribute(r,""):t.removeAttribute(r))}var H=3;function W(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(I(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var r=void 0,n=void 0,o=void 0,i=void 0,a=0,c=0;r=t.childNodes[c],n=e.childNodes[c-a],r||n;c++)if(n)if(r)if(q(n,r))(o=W(n,r))!==r&&(t.replaceChild(o,r),a++);else{i=null;for(var s=c;s<t.childNodes.length;s++)if(q(t.childNodes[s],n)){i=t.childNodes[s];break}i?((o=W(n,i))!==i&&a++,t.insertBefore(o,r)):n.id||r.id?(t.insertBefore(n,r),a++):(o=W(n,r))!==r&&(t.replaceChild(o,r),a++)}else t.appendChild(n),a++;else t.removeChild(r),c--}(e,t),t):null:e}function q(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===H&&e.nodeValue===t.nodeValue)}var $=function(e){function t(e){var r;o(this,t);for(var n="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];var s=u(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,n].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(s,t),s.name="TemplateNoStringReturnException",s}return s(t,e),t}(Error),K=!!document.createDocumentFragment().children;function z(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(z.prototype,HTMLElement.prototype),Object.setPrototypeOf(z,HTMLElement);var G=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function r(){var e,t,n;o(this,r);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return t=n=u(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(a))),n._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;n.contextNode&&(clearTimeout(n.timeoutId),n.timeoutId=setTimeout(function(){n.contextCallback(n.contextNode,e)},10)),n.unContextEnabled&&n.unContextEnabled(),n.unContextEnabled=x("context/available",n._makeContextReady)},u(n,t)}return s(r,e),i(r,[{key:"connectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;O[e]||(O[e]={count:0,queue:[]});var n=O[e].queue;Array.isArray(n)?n.push([e,t,r]):h(r,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),r}()},function(e){return function(t){function r(){return o(this,r),u(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return s(r,e),i(r,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"innerHTML",e,this)}}]),r}()},function(e){return function(t){function r(e){o(this,r);var t=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));t._reduceProps=function(e,n){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[n];if(-1===M.indexOf(n)&&a)throw new k(n,t);var c="_"+n,s=o[n],l=t[c];return i||t.shouldUpdateCallback(s,l)?(t[c]=s,t._props[n]=s,a&&d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,s,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=g(function(){return t.updated&&t.updated()},50);var n=t.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(e){var r,n=S(e),o=n in t;if(-1===M.indexOf(n)&&o)throw new k(n,t);t._hasKeys[n]=o,Object.defineProperty(t,n,r={get:function(){return this._props[n]},set:function(e){this.shouldUpdateCallback(this._props[n],e)&&(this._props[n]=e,o&&d(r.__proto__||Object.getPrototypeOf(r),n,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return s(r,e),i(r,[{key:"connectedCallback",value:function(){var e=this;if(c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=S(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var r=e.value;return t?r=e.getAttribute(t):t=e.name,r=P(r,t)}(e,t),i=e._hasKeys[n];e._props[n]=o,i&&d(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),n,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,r){if(this.shouldUpdateCallback(r,t)){var n=S(e);this.hasAttribute(e)?this[n]=P(r):this[n]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,r=void 0===t?[]:t;Object.keys(e).filter(function(e){return r.indexOf(e.replace(w,N))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),r}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,n=l(e,["template"]);o(this,r);var i=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,n));return i._template=t,i._hasTemplate=!!t,i._hasRendered=!1,i.updated=i.render,i}return s(r,e),i(r,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var o=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var r=t.cloneNode(!0);e.childrenFragment.appendChild(r)});K||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var s=o(this._props,this.childrenFragment),l=document.createDocumentFragment();if(Array.isArray(s))s.forEach(function(e){l.appendChild(e)});else if(s){if("string"==typeof s)throw new $(this);l.appendChild(s)}if(t)c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"appendChild",this).call(this,l);else{var u=this.cloneNode(!1);u._isMorphing=!0,u.appendChild(l),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":n(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":n(t)))throw new Error("componentMorph: newTree should be an object");W(t,e)}(this,u),function(){for(var e=void 0;e=L.pop();)delete e.isSameNode;L=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),r}()},function(e){return function(t){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,n=void 0===t?"":t,i=l(e,["styles"]);o(this,r);var a=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,i));return a._styles=n,a}return s(r,e),i(r,[{key:"connectedCallback",value:function(){c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this)&&c(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),r=document.createTextNode(this._styles);t.appendChild(r),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),r}()})(function(e){function r(e){o(this,r);var n=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return n._id=t(n.nodeName),n}return s(r,z),i(r,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}()),B={},Z=function(e){function t(){var e,r,n;o(this,t);for(var i=arguments.length,a=Array(i),c=0;c<i;c++)a[c]=arguments[c];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n._appendStyles=function(){t.appendGlobalStyles(n._styles,n.nodeName)},u(n,r)}return s(t,G),i(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:G.uuidv4();if(e&&!B[t]){var r=document.createElement("style"),n=document.createTextNode(e);B[t]=!0,r.appendChild(n),r.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(r)}}}]),t}();var J=".m-header-search {\n  display: block; }\n  @media (max-width: 991px) {\n    .m-header-search {\n      margin-left: auto; } }\n\n.m-header-search__form {\n  display: block;\n  padding: 6px 0 6px 20px;\n  margin-left: 20px;\n  border-left: 1px solid #ccc; }\n  @media (max-width: 991px) {\n    .m-header-search__form {\n      padding-left: 0;\n      padding-right: 20px;\n      border-left: none;\n      border-right: 1px solid #ccc; } }\n\n.m-header-search__input {\n  display: none; }\n\n.m-header-search__icon {\n  width: 25px;\n  height: 25px;\n  display: block;\n  fill: currentColor;\n  color: #7f7f7f; }\n",X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,re=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre","textarea"],oe=function e(t,r){if(Array.isArray(r))for(var n,o,i=t.nodeName.toLowerCase(),a=!1,c=0,s=r.length;c<s;c++){var l=r[c];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),c===s-1&&(a=!1,-1===re.indexOf(i)&&-1===ne.indexOf(i)?""===(n=u.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=n:-1===ne.indexOf(i)&&(o=0===c?"":" ",n=u.nodeValue.replace(Q,o).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),u.nodeValue=n));else if(l&&l.nodeType){a&&(a=!1,-1===re.indexOf(i)&&-1===ne.indexOf(i)?""===(n=u.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(u):u.nodeValue=n:-1===ne.indexOf(i)&&(n=u.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),u.nodeValue=n));var d=l.nodeName;d&&(i=d.toLowerCase()),t.appendChild(l)}}}};var ie,ae,ce=function(e){var t,r=document.createElement("div");return r.innerHTML=e,t=r.childNodes,Array.isArray(t)?t:[].slice.call(t)},se=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=n.action,i=n.href,a=n.method,c=void 0===a?"POST":a;return(r=document.createElement("form")).setAttribute("action",""+String(o)),r.setAttribute("method",""+String(c)),r.setAttribute("class","m-header-search__form"),oe(r,["\n    ",(e=document.createElement("a"),e.setAttribute("href",""+String(i)),e.setAttribute("class","m-header-search__page-link"),oe(e,["\n      ",ce('<axa-icon icon="search-left" classes="m-header-search__icon"></axa-icon>'),"\n    "]),e),"\n\n    ",(t=document.createElement("input"),t.setAttribute("type","text"),t.setAttribute("placeholder","search..."),t.setAttribute("class","m-header-search__input"),t),"\n  "]),r},le=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{styles:J,template:se}))}return s(t,Z),i(t,null,[{key:"observedAttributes",get:function(){return["action","href","method"]}}]),i(t,[{key:"connectedCallback",value:function(){c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-header-search"}}]),t}();return le.tagName="axa-header-search",ie=le.tagName,ae=le,customElements.get(ie)||customElements.define(ie,ae),le}();
