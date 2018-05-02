!function(){"use strict";var x=function(){var t=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e)}return t}(),b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},n=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c=function t(e,n,i){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,n);if(void 0===a){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(i):void 0},i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},m=function t(e,n,i,a){var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);null!==r&&t(r,n,i,a)}else if("value"in o&&o.writable)o.value=i;else{var d=o.set;void 0!==d&&d.call(a,i)}return i},r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],i=!0,a=!1,o=void 0;try{for(var r,d=t[Symbol.iterator]();!(i=(r=d.next()).done)&&(n.push(r.value),!e||n.length!==e);i=!0);}catch(t){a=!0,o=t}finally{try{!i&&d.return&&d.return()}finally{if(a)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},k=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)};function d(t,e){var n=e.className;return e.hasClass||t.push(n),t}function w(t){for(var a=t.className,o=!1,r=!0,e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var d=n.map(function(t){var e=(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(a);var n,i;e?o=!0:r=!1;return{className:t,hasClass:e}});return!(!r&&!o)&&d}var y=/\s+/,_={transitionend:function(){for(var t=document.createElement("div").style,e={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(e),i=n.length,a=void 0,o=0;o<i;++o)if(void 0!==t[a=n[o]])return e[a];return""}()};function p(n,t,i,a){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},o=e.capture,r=void 0!==o&&o,d=e.passive,p=void 0===d||d;if(_[t]&&(t=_[t]),!n||!t)return null;var l=void 0===i?"undefined":b(i),s=i&&"string"===l;if("function"===l){if(a){var c=a;r=c.capture,p=c.passive}a=i}for(var u=x?{capture:r,passive:p}:r,m=s?function(t){var e=t.target;for(;!w(e,i)&&e!==n;)e=e.parentNode;if(e!==n)return a(t,e)}:a,h=t.split(y),v=h.length,f=0;f<v;++f)n.addEventListener(h[f],m,u);return function t(){for(var e=0;e<v;++e)n.removeEventListener(h[e],m,u);!function(t,e){if(!t)return;for(var n=Object.keys(t),i=n.length,a=0;a<i;++a){var o=n[a];if(t[o]===e)return delete t[o]}}(this,t)}}function a(t){var e=t.ownerDocument;return e.defaultView||e.parentWindow}function h(i){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=t.leading,o=void 0!==e&&e,n=t.trailing,r=void 0===n||n,d=t.maxWait,p=void 0!==d&&d,l=void 0,s=void 0,c=void 0,u=void 0,m=!1,h=a!==p,v=!1!==p;function f(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return l=e,h&&(s&&clearTimeout(s),s=setTimeout(x,a)),v&&!c&&(c=setTimeout(b,p)),o&&!m&&(m=!0,u=i.apply(void 0,k(l))),u}return f.flush=function(){(s||c)&&(u=i.apply(void 0,k(l)));return y(),u},f.cancel=y,f;function x(){c&&clearTimeout(c),w()}function b(){s&&clearTimeout(s),w()}function w(){r&&(u=i.apply(void 0,k(l))),c=s=null,m=!1}function y(){s&&(clearTimeout(s),s=null),c&&(clearTimeout(c),c=null),l=void 0,m=!1}}var l=function(){try{var t=new window.CustomEvent("test",{cancelable:!0});if(t.preventDefault(),!0!==t.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(t){}return e;function e(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.bubbles,i=void 0!==n&&n,a=e.cancelable,o=void 0!==a&&a,r=e.detail,d=void 0===r?void 0:r,p=document.createEvent("CustomEvent");p.initCustomEvent(t,i,o,d);var l=p.preventDefault;return p.preventDefault=function(){l.call(p);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(t){this.defaultPrevented=!0}},p}}();function v(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},a=new l(e,o({},i,{detail:n}));return t.dispatchEvent(a)}var f={};function g(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document;f[t]||(f[t]={count:0,queue:[]});var i=f[t].queue;Array.isArray(i)?i.push([t,e,n]):v(n,t,e)}function C(t,e){var n=p(2<arguments.length&&void 0!==arguments[2]?arguments[2]:document,t,e);f[t]||(f[t]={count:0});var i,a=f[t];return a.count++,a.onsubscribe||(a.onsubscribe=h((i=t,function(){v(document,"pubsub/onsubscribe",i),v(document,"pubsub/onsubscribe/"+i,i),f[i]&&delete f[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,n.call(this),a.count<=0&&delete f[t]}}p(document,"pubsub/onsubscribe",function(t){var e=t.detail;f[e]||(f[e]={count:0});var n=f[e],i=n.queue;Array.isArray(i)&&(i.forEach(function(t){var e=r(t,3),n=e[0],i=e[1],a=e[2];v(a,n,i)}),delete n.queue)});var e=".a-device-state",O=/\s/g,A=/^['"]+|['"]+$/g,N=!1,E=!1,T=!0,j=void 0,P=void 0,S=void 0;function R(){if(j||!(j=document.querySelector(e))&&N&&function(t){for(var e=arguments.length,n=Array(1<e?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var a=w.apply(void 0,[t].concat(n));if(!0!==a){var o=[].concat(n);Array.isArray(a)&&(o=a.reduce(d,[])),o&&(t.className+=" "+o.join(" "))}}(j=document.body,e),!P&&j&&(P=a(j)),!j||!P)return!1;var t=P.getComputedStyle(j,":after").getPropertyValue("content")||P.getComputedStyle(j,"::after").getPropertyValue("content");return!!t&&(T=t!==S,(S=t).replace(O,"").replace(A,"").split(",").reduce(M,{}))}function M(t,e){var n=e.split(":"),i=r(n,2),a=i[0],o=i[1];return t[a]=+o||o,t}var L=1,D=3,U=8;function F(t,e){var n=t.nodeType,i=t.nodeName;n===L&&function(t,e){for(var n=e.attributes,i=t.attributes,a=null,o=null,r=null,d=null,p=i.length-1;0<=p;--p)if(d=i[p],r=d.name,a=d.namespaceURI,o=d.value,a){var l=d.localName;e.getAttributeNS(a,l||r)!==o&&e.setAttributeNS(a,r,o)}else e.hasAttribute(r)?e.getAttribute(r)!==o&&("null"===o||"undefined"===o?e.removeAttribute(r):e.setAttribute(r,o)):e.setAttribute(r,o);for(var s=n.length-1;0<=s;--s)!1!==(d=n[s]).specified&&(r=d.name,(a=d.namespaceURI)?(r=d.localName||r,t.hasAttributeNS(a,r)||e.removeAttributeNS(a,r)):t.hasAttributeNS(null,r)||e.removeAttribute(r))}(t,e),n!==D&&n!==U||e.nodeValue===t.nodeValue||(e.nodeValue=t.nodeValue),"INPUT"===i?function(t,e){var n=t.value,i=e.value;V(t,e,"checked"),V(t,e,"disabled"),n!==i&&(e.setAttribute("value",n),e.value=n);"null"===n&&(e.value="",e.removeAttribute("value"));t.hasAttributeNS(null,"value")?"range"===e.type&&(e.value=n):e.removeAttribute("value")}(t,e):"OPTION"===i?V(t,e,"selected"):"TEXTAREA"===i&&function(t,e){var n=t.value;n!==e.value&&(e.value=n);if(e.firstChild&&e.firstChild.nodeValue!==n){if(""===n&&e.firstChild.nodeValue===e.placeholder)return;e.firstChild.nodeValue=n}}(t,e)}function V(t,e,n){t[n]!==e[n]&&(e[n]=t[n],t[n]?e.setAttribute(n,""):e.removeAttribute(n))}var z=3;function I(t,e){return e?t?t.isSameNode&&t.isSameNode(e)?e:t.tagName!==e.tagName?t:(F(t,e),e.skipChildren&&e.skipChildren()||function(t,e){for(var n=void 0,i=void 0,a=void 0,o=void 0,r=0,d=0;n=e.childNodes[d],i=t.childNodes[d-r],n||i;d++)if(i)if(n)if(q(i,n))(a=I(i,n))!==n&&(e.replaceChild(a,n),r++);else{o=null;for(var p=d;p<e.childNodes.length;p++)if(q(e.childNodes[p],i)){o=e.childNodes[p];break}o?((a=I(i,o))!==o&&r++,e.insertBefore(a,n)):i.id||n.id?(e.insertBefore(i,n),r++):(a=I(i,n))!==n&&(e.replaceChild(a,n),r++)}else e.appendChild(i),r++;else e.removeChild(n),d--}(t,e),e):null:t}function q(t,e){return t.id?t.id===e.id:t.isSameNode?t.isSameNode(e):t.tagName===e.tagName&&(t.type===z&&t.nodeValue===e.nodeValue)}var H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function W(e,n){var t=e;if(e&&n!==e){if(H.test(e))try{t=JSON.parse(e)}catch(t){console.error("Attribute "+n+" has an error:\n"+t+"\n",e)}}else t=!0;return t}var K=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,$=/[-_]+/g;function G(t){return t.replace(K,B)}function B(t,e){return 0==+t||$.test(t)?"":0===e?t.toLowerCase():t.toUpperCase()}var Z=/[A-Z]/g;function J(t,e,n){var i=t.toLowerCase(),a=n.charAt(e+1);return 0===e||a.toUpperCase()===a?i:"-"+i}var t=function(t,e){return t===e},X=function(t){function p(t,e){var n;s(this,p);for(var i="Property >>>"+t+"<<< exists at "+e.nodeName+"#"+e._id+" and evaluates to -> "+e[t],a=arguments.length,o=Array(2<a?a-2:0),r=2;r<a;r++)o[r-2]=arguments[r];var d=u(this,(n=p.__proto__||Object.getPrototypeOf(p)).call.apply(n,[this,i].concat(o)));return Error.captureStackTrace&&Error.captureStackTrace(d,p),d.name="PropertyExistsException",d}return i(p,t),p}(Error);function Q(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(Q.prototype,HTMLElement.prototype),Object.setPrototypeOf(Q,HTMLElement);var Y,tt="throwed",et=["title","checked","disabled"],nt={},it=function(t){return t in nt||(nt[t]=0),++nt[t]},at=((Y=function(){var t;return(t=console).log.apply(t,arguments)},function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:t;return function(){for(var t=arguments.length,i=Array(t),e=0;e<t;e++)i[e]=arguments[e];return function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(){return a.apply(void 0,[].concat(i,e))?Y.apply(void 0,arguments):void 0}}}})()(!0),function(t){function l(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=arguments[1];s(this,l);var p=u(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));p._reduceProps=function(t,e){var n=t.props,i=t.shouldUpdate,a=p._hasKeys[e];if(-1===et.indexOf(e)&&a)throw new X(e,p);var o="_"+e,r=n[e],d=p[o];return i||p.shouldUpdateCallback(r,d)?(p[o]=r,p._props[e]=r,a&&m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,r,p),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},p._makeContextReady=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).detail;p.contextNode&&(clearTimeout(p.timeoutId),p.timeoutId=setTimeout(function(){p.contextCallback(p.contextNode,t)},10)),p.unContextEnabled&&p.unContextEnabled(),p.unContextEnabled=C("context/enabled",p._makeContextReady)},p._initialise(t,e),p._id=it(p.nodeName),p._props={},p._hasKeys={},p.reRender=h(function(){return p.render()},50);var n=p.constructor.observedAttributes;return Array.isArray(n)&&n.forEach(function(t){var n,i=G(t),a=i in p;if(-1===et.indexOf(i)&&a)throw new X(i,p);p._hasKeys[i]=a,Object.defineProperty(p,i,n={get:function(){return this["_"+i]},set:function(t){var e="_"+i;this.shouldUpdateCallback(this[e],t)&&(this[e]=t,this._props[i]=t,a&&m(n.__proto__||Object.getPrototypeOf(n),i,t,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),p}return i(l,Q),n(l,[{key:"_initialise",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this._styles=t,this._template=e,this._hasTemplate=!!e,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var a=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var e=G(t);if(a.hasAttribute(t)){var n=function(t,e){if("function"==typeof t.hasAttribute&&!t.hasAttribute(e))return!1;var n=t.value;return e?n=t.getAttribute(e):e=t.name,n=W(n,e)}(a,t),i=a._hasKeys[e];a["_"+e]=n,a._props[e]=n,i&&m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),e,n,a)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(t,e,n){this.shouldUpdateCallback(n,e)&&(this[G(t)]=W(n))}},{key:"batchProps",value:function(t){var e=this.constructor.observedAttributes,n=void 0===e?[]:e;Object.keys(t).filter(function(t){return-1<n.indexOf(t.replace(Z,J))}).reduce(this._reduceProps,{props:t,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(t,e){return t!==e}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}},{key:"render",value:function(){var n=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var e=this._template;try{if(t){for(var i=document.createDocumentFragment(),a=[];this.firstChild;)a.push(this.firstChild),i.appendChild(this.firstChild);this._lightDOMRefs=a,this.childrenFragment=i}else this._lightDOMRefs.forEach(function(t){var e=t.cloneNode(!1);n.childrenFragment.appendChild(e)});var o=e(this._props,this.childrenFragment),r=document.createDocumentFragment();if(Array.isArray(o))o.forEach(function(t){r.appendChild(t)});else if(o){if("string"==typeof o){var d=new Error(tt);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+d.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),d}r.appendChild(o)}if(t)c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,r);else{var p=this.cloneNode(!1);p._isMorphing=!0,p.appendChild(r),this._isMorphing=!0,function(t,e){if("object"!==(void 0===t?"undefined":b(t)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===e?"undefined":b(e)))throw new Error("componentMorph: newTree should be an object");I(e,t)}(this,p),this._isMorphing=!1}}catch(d){d.message!==tt&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+d+"\n\nStack Trace: "+d.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"willRenderCallback",value:function(t){}},{key:"didRenderCallback",value:function(t){}},{key:"appendChild",value:function(t){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(t),this.render()):c(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"appendChild",this).call(this,t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var t=this.nodeName.toLowerCase();this.__isContext=!0,g("context/enabled",this.__contextName=t)}},{key:"selectContext",value:function(t){this.__selectedContext=t&&t.toLowerCase()}},{key:"innerText",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"innerText",t,this)}},{key:"textContent",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createTextNode(t);this._lightDOMRefs=[e],this.render()}else m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"textContent",t,this)}},{key:"innerHTML",set:function(t){if(this._hasTemplate&&this._hasRendered){var e=document.createElement("div");e.innerHTML=t,this._lightDOMRefs=Array.from(e.children),this.render()}else m(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"innerHTML",t,this)}},{key:"contextNode",get:function(){for(var t=this.__selectedContext,e=this.parentNode;e&&(!e.__isContext||t&&t!==e.__contextName);)e=e.parentNode;return!(!e||!e.__isContext)&&e}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}}]),l}()),ot={},rt=function(t){function e(){return s(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,at),n(e,[{key:"_appendStyles",value:function(){e.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:at.uuidv4();if(t&&!ot[t]){var n=document.createElement("style"),i=document.createTextNode(t);n.appendChild(i),n.setAttribute("data-c-name",e.toLowerCase()),document.querySelector("head").appendChild(n),ot[t]=!0}}}]),e}();!function(){var e=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,a=void 0===i||i,o=n.trailing;return h(t,e,{leading:a,maxWait:e,trailing:void 0===o||o})}(n,100);function t(){N=!0,e()}function n(){var t=R();t&&(E||(E=!0,p(a(j),"resize",e),p(a(j),"orientationchange",e)),T&&g("device-state/change",t))}p(document,"DOMContentLoaded",t),p(document,"load",t),C("pubsub/onsubscribe/device-state/change",function(){var t=R();t&&g("device-state/change",t)}),n()}(),rt.appendGlobalStyles('.a-device-state::after {\n  position: absolute;\n  top: -9999px;\n  left: -9999px;\n  display: block;\n  content: \'breakpoint:xl, orientation:landscape, pixel-ratio: 1\'; }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1), (orientation: portrait) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1), (orientation: landscape) and (min-resolution: 96dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 576px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 768px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 992px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 96dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: portrait) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5), (orientation: landscape) and (min-resolution: 144dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 576px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 992px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:1.5"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 144dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:1.5"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2), (orientation: portrait) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2), (orientation: landscape) and (min-resolution: 192dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 576px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 768px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 992px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:2"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 192dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:2"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3), (orientation: portrait) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3), (orientation: landscape) and (min-resolution: 288dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 576px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 768px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 992px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:3"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 288dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:3"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4), (orientation: portrait) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4), (orientation: landscape) and (min-resolution: 384dpi) {\n  .a-device-state::after {\n    content: "breakpoint:xs, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 576px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 576px) {\n  .a-device-state::after {\n    content: "breakpoint:sm, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 768px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 768px) {\n  .a-device-state::after {\n    content: "breakpoint:md, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 992px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 992px) {\n  .a-device-state::after {\n    content: "breakpoint:lg, orientation:landscape, pixel-ratio:4"; } }\n\n@media (orientation: portrait) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: portrait) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:portrait, pixel-ratio:4"; } }\n\n@media (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4) and (min-width: 1200px), (orientation: landscape) and (min-resolution: 384dpi) and (min-width: 1200px) {\n  .a-device-state::after {\n    content: "breakpoint:xl, orientation:landscape, pixel-ratio:4"; } }\n\n.a-device-state--debug::after {\n  position: fixed;\n  top: auto;\n  left: auto;\n  right: 0;\n  bottom: 0;\n  z-index: 1030;\n  display: block;\n  padding: 10px;\n  background: rgba(201, 20, 50, 0.9);\n  color: #fff; }\n')}();
