!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.StyleGuideWebComponent=e()}(this,function(){"use strict";var t,e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},s=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},l=function t(e,n,r,o){var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var a=Object.getPrototypeOf(e);null!==a&&t(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var u=i.set;void 0!==u&&u.call(o,r)}return r},c=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},p=(function(t){!function(){var n={}.hasOwnProperty;function r(){for(var t=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":e(i);if("string"===a||"number"===a)t.push(i);else if(Array.isArray(i))t.push(r.apply(null,i));else if("object"===a)for(var u in i)n.call(i,u)&&i[u]&&t.push(u)}}return t.join(" ")}t.exports?t.exports=r:window.classNames=r}()}(t={exports:{}},t.exports),t.exports),f={},h=function(t){return t in f||(f[t]=0),++f[t]},v=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,r=void 0!==n&&n,o=e.cancelable,i=void 0!==o&&o,a=e.detail,u=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(t,r,i,u);var l=s.preventDefault;return s.preventDefault=function(){l.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},s}}();function y(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new v(e,o({},r,{detail:n}));return t.dispatchEvent(i)}var _=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}();function b(t){for(var e=t.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var u=i.map(function(t){var o=(i=t,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(e);var i,a;o?n=!0:r=!1;return{className:t,hasClass:o}});return!(!r&&!n)&&u}var m=/\s+/,g={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==t[o=n[i]])return e[o];return""}()};function O(t,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,u=void 0!==a&&a,s=i.passive,l=void 0===s||s;if(g[n]&&(n=g[n]),!t||!n)return null;var c=void 0===r?"undefined":e(r),d=r&&"string"===c;if("function"===c){if(o){var p=o;u=p.capture,l=p.passive}o=r}for(var f=_?{capture:u,passive:l}:u,h=d?function(e){var n=e.target;for(;!b(n,r)&&n!==t;)n=n.parentNode;if(n!==t)return o(e,n)}:o,v=n.split(m),y=v.length,O=0;O<y;++O)t.addEventListener(v[O],h,f);return function e(){for(var n=0;n<y;++n)t.removeEventListener(v[n],h,f);!function(t,e){if(!t)return!1;for(var n=Object.keys(t),r=n.length,o=0;o<r;++o){var i=n[o];if(t[i]===e)return delete t[i]}}(this,e)}}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,u=n.maxWait,s=void 0!==u&&u,l=void 0,c=void 0,p=void 0,f=void 0,h=!1,v=e!==s,y=!1!==s;function _(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return l=r,v&&(c&&clearTimeout(c),c=setTimeout(b,e)),y&&!p&&(p=setTimeout(m,s)),o&&!h&&(h=!0,f=t.apply(void 0,d(l))),f}return _.flush=function(){(c||p)&&(f=t.apply(void 0,d(l)));return O(),f},_.cancel=O,_;function b(){p&&clearTimeout(p),g()}function m(){c&&clearTimeout(c),g()}function g(){a&&(f=t.apply(void 0,d(l))),c=null,p=null,h=!1}function O(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),l=void 0,h=!1}}window.__subscriptions=window.__subscriptions||{};var C=window.__subscriptions;function w(t,e){var n=O(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,t,e);C[t]||(C[t]={count:0});var r,o=C[t];return o.count++,o.onsubscribe||(o.onsubscribe=x((r=t,function(){y(document,"pubsub/onsubscribe",r),y(document,"pubsub/onsubscribe/"+r,r),C[r]&&delete C[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete C[t]}}O(document,"pubsub/onsubscribe",function(t){var e=t.detail;C[e]||(C[e]={count:0});var n=C[e],r=n.queue;Array.isArray(r)&&(r.forEach(function(t){var e=c(t,3),n=e[0],r=e[1],o=e[2];y(o,n,r)}),delete n.queue)});var k,A=function(t,e){return t===e},N=((k=function(){var t;return(t=console).log.apply(t,arguments)},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return function(){return t.apply(void 0,[].concat(n,r))?k.apply(void 0,arguments):void 0}}}})()(!0),function(t){function e(t,r){var o;n(this,e);for(var i="\n    Native Property >>>"+t+"<<< exists already at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[t]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",a=arguments.length,u=Array(a>2?a-2:0),l=2;l<a;l++)u[l-2]=arguments[l];var c=s(this,(o=e.__proto__||Object.getPrototypeOf(e)).call.apply(o,[this,i].concat(u)));return Error.captureStackTrace&&Error.captureStackTrace(c,e),c.name="PropertyExistsException",c}return a(e,t),e}(Error)),P=/[A-Z]/g;function E(t,e,n){var r=t.toLowerCase(),o=n.charAt(e+1);return 0===e||o.toUpperCase()===o?r:"-"+r}var j=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function T(t,e){var n=t;if(t&&e!==t){if(j.test(t))try{n=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else n=!0;return n}var S=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,R=/[-_]+/g;function M(t){return t.replace(S,D)}function D(t,e){return 0==+t||R.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var L=["title","checked","disabled"],U=[];var I=1,F=3,V=8;function H(t,e){var n=t.nodeType,r=t.nodeName;n===I&&function(t,e){for(var n=e.attributes,r=t.attributes,o=null,i=null,a=null,u=null,s=r.length-1;s>=0;--s)if(u=r[s],a=u.name,o=u.namespaceURI,i=u.value,o){var l=u.localName;e.getAttributeNS(o,l||a)!==i&&e.setAttributeNS(o,a,i)}else e.hasAttribute(a)?e.getAttribute(a)!==i&&("null"===i||"undefined"===i?e.removeAttribute(a):e.setAttribute(a,i)):e.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(u=n[c]).specified&&(a=u.name,(o=u.namespaceURI)?(a=u.localName||a,t.hasAttributeNS(o,a)||e.removeAttributeNS(o,a)):t.hasAttributeNS(null,a)||e.removeAttribute(a))}(t,e),n!==F&&n!==V||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===r?function(t,e){var n=t.value,r=e.value;W(t,e,"checked"),W(t,e,"disabled"),n!==r&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===r?W(t,e,"selected"):"TEXTAREA"===r&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function W(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var q=3;function G(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(H(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,u=0;n=e.childNodes[u],r=t.childNodes[u-a],n||r;u++)if(r)if(n)if(K(r,n))(o=G(r,n))!==n&&(e.replaceChild(o,n),a++);else{i=null;for(var s=u;s<e.childNodes.length;s++)if(K(e.childNodes[s],r)){i=e.childNodes[s];break}i?((o=G(r,i))!==i&&a++,e.insertBefore(o,n)):r.id||n.id?(e.insertBefore(r,n),a++):(o=G(r,n))!==n&&(e.replaceChild(o,n),a++)}else e.appendChild(r),a++;else e.removeChild(n),u--}(t,e),e):null:t}function K(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===q&&t.nodeValue===e.nodeValue)}var z=function(t){function e(t){var r;n(this,e);for(var o="\n    Web Component "+t.nodeName+"%c#"+t._id+" does not accept string as a return from a template. Maybe use bel?}",i=arguments.length,a=Array(i>1?i-1:0),u=1;u<i;u++)a[u-1]=arguments[u];var l=s(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,e),l.name="TemplateNoStringReturnException",l}return a(e,t),e}(Error),$=!!document.createDocumentFragment().children;function B(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(B.prototype,HTMLElement.prototype),Object.setPrototypeOf(B,HTMLElement);var Z=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduceRight(function(t,e){return e(t)},t)}}(function(t){return function(e){function o(){var t,e,r;n(this,o);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return e=r=s(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(a))),r._makeContextReady=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,t)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=w("context/available",r._makeContextReady)},s(r,e)}return a(o,t),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=t,function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;C[t]||(C[t]={count:0,queue:[]});var r=C[t].queue;Array.isArray(r)?r.push([t,e,n]):y(n,t,e)}("context/available",t)}},{key:"consumeContext",value:function(t){this.__consumedContext=t&&t.toLowerCase()}},{key:"contextNode",get:function(){for(var t=this.__consumedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}]),o}()},function(t){return function(e){function o(){return n(this,o),s(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return a(o,t),r(o,[{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,t)}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",t,this)}}]),o}()},function(t){return function(e){function o(t){n(this,o);var e=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t));e._reduceProps=function(t,n){var r=t.props,i=t.shouldUpdate,a=e._hasKeys[n];if(-1===L.indexOf(n)&&a)throw new N(n,e);var u="_"+n,s=r[n],c=e[u];return i||e.shouldUpdateCallback(s,c)?(e[u]=s,e._props[n]=s,a&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,s,e),{props:r,shouldUpdate:!0}):{props:r,shouldUpdate:!1}},e._isConnected=!1,e._props={},e._hasKeys={},e.updatedDebounced=x(function(){return e.updated&&e.updated()},50);var r=e.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(t){var n,r=M(t),o=r in e;if(-1===L.indexOf(r)&&o)throw new N(r,e);e._hasKeys[r]=o,Object.defineProperty(e,r,n={get:function(){return this._props[r]},set:function(t){this.shouldUpdateCallback(this._props[r],t)&&(this._props[r]=t,o&&l(n.__proto__||Object.getPrototypeOf(n),r,t,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),e}return a(o,t),r(o,[{key:"connectedCallback",value:function(){var t=this;if(i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var e=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(e)&&e.forEach(function(e){var n=M(e);if(t.hasAttribute(e)){var r=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=T(n,e)}(t,e),i=t._hasKeys[n];t._props[n]=r,i&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,t)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(t,e,n){if(this.shouldUpdateCallback(n,e)){var r=M(t);this.hasAttribute(t)?this[r]=T(n):this[r]=null}}},{key:"setProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return n.indexOf(t.replace(P,E))>-1}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),o}()},function(t){return function(o){function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.template,r=u(t,["template"]);n(this,l);var o=s(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,r));return o._template=e,o._hasTemplate=!!e,o._hasRendered=!1,o.updated=o.render,o}return a(l,t),r(l,[{key:"render",value:function(){var t=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var o=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(e){var n=e.cloneNode(!0);t.childrenFragment.appendChild(n)});$||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(t){return 1===t.nodeType}));var u=r(this._props,this.childrenFragment),s=document.createDocumentFragment();if(Array.isArray(u))u.forEach(function(t){s.appendChild(t)});else if(u){if("string"==typeof u)throw new z(this);s.appendChild(u)}if(n)i(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,s);else{var c=this.cloneNode(!1);c._isMorphing=!0,c.appendChild(s),this._isMorphing=!0,function(t,n){if("object"!==(void 0===t?"undefined":e(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":e(n)))throw new Error("componentMorph: newTree should be an object");G(n,t)}(this,c),function(){for(var t=void 0;t=U.pop();)delete t.isSameNode;U=[]}(),this._isMorphing=!1}}catch(t){console.error(t)}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}}]),l}()},function(t){return function(e){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.styles,r=void 0===e?"":e,i=u(t,["styles"]);n(this,o);var a=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,i));return a._styles=r,a}return a(o,t),r(o,[{key:"connectedCallback",value:function(){i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this)&&i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),o}()})(function(t){function e(t){n(this,e);var r=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r._id=h(r.nodeName),r}return a(e,B),r(e,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),e}()),J={},X=function(t){function e(){var t,r,o;n(this,e);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return r=o=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),o._appendStyles=function(){e.appendGlobalStyles(o._styles,o.nodeName)},s(o,r)}return a(e,Z),r(e,null,[{key:"appendGlobalStyles",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Z.uuidv4();if(t&&!J[e]){var n=document.createElement("style"),r=document.createTextNode(t);J[e]=!0,n.appendChild(r),n.setAttribute("data-c-name",e.toLowerCase()),document.head.appendChild(n)}}}]),e}();var Q,Y,tt='.u-row {\n  margin-right: -15px;\n  margin-left: -15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.u-no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n  .u-no-gutters > .u-col,\n  .u-no-gutters > [class*="u-col"] {\n    padding-right: 0;\n    padding-left: 0; }\n',et=function(t){function e(){return n(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{styles:tt}))}return a(e,X),r(e,null,[{key:"observedAttributes",get:function(){return["classes","no-gutters"]}}]),r(e,[{key:"willRenderCallback",value:function(){var t=this.noGutters,e=this.classes;this.className=p("m-row","u-row",e,{"u-no-gutters":t})}}]),e}();return et.tagName="axa-row",Q=et.tagName,Y=et,customElements.get(Q)||customElements.define(Q,Y),et});
