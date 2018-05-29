var StyleGuideWebComponent=function(){"use strict";var e,t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},a=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},l=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var s=i.set;void 0!==s&&s.call(o,r)}return r},u=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=(function(e){!function(){var n={}.hasOwnProperty;function r(){for(var e=[],o=0;o<arguments.length;o++){var i=arguments[o];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(r.apply(null,i));else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=r:window.classNames=r}()}(e={exports:{}},e.exports),e.exports),f=1,p=3,h=8;function v(e,t){var n=e.nodeType,r=e.nodeName;n===f&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,s=null,l=r.length-1;l>=0;--l)if(s=r[l],a=s.name,o=s.namespaceURI,i=s.value,o){var u=s.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var c=n.length-1;c>=0;--c)!1!==(s=n[c]).specified&&(a=s.name,(o=s.namespaceURI)?(a=s.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==p&&n!==h||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;m(e,t,"checked"),m(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?m(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function m(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var g=3;function b(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(v(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,s=0;n=t.childNodes[s],r=e.childNodes[s-a],n||r;s++)if(r)if(n)if(y(r,n))(o=b(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=s;l<t.childNodes.length;l++)if(y(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=b(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=b(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),s--}(e,t),t):null:e}function y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===g&&e.nodeValue===t.nodeValue)}var _=[];var x=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function w(e,t){var n=e;if(e&&t!==e){if(x.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var C=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function k(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new C(t,o({},r,{detail:n}));return e.dispatchEvent(i)}var O=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function A(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var s=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&s}var N=/\s+/,E={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function T(e,n,r,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,u=void 0===l||l;if(E[n]&&(n=E[n]),!e||!n)return null;var c=void 0===r?"undefined":t(r),d=r&&"string"===c;if("function"===c){if(o){var f=o;s=f.capture,u=f.passive}o=r}for(var p=O?{capture:s,passive:u}:s,h=d?function(t){var n=t.target;for(;!A(n,r)&&n!==e;)n=n.parentNode;if(n!==e)return o(t,n)}:o,v=n.split(N),m=v.length,g=0;g<m;++g)e.addEventListener(v[g],h,p);return function t(){for(var n=0;n<m;++n)e.removeEventListener(v[n],h,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,d=void 0,f=void 0,p=void 0,h=!1,v=t!==l,m=!1!==l;function g(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,v&&(d&&clearTimeout(d),d=setTimeout(b,t)),m&&!f&&(f=setTimeout(y,l)),o&&!h&&(h=!0,p=e.apply(void 0,c(u))),p}return g.flush=function(){(d||f)&&(p=e.apply(void 0,c(u)));return x(),p},g.cancel=x,g;function b(){f&&clearTimeout(f),_()}function y(){d&&clearTimeout(d),_()}function _(){a&&(p=e.apply(void 0,c(u))),d=null,f=null,h=!1}function x(){d&&(clearTimeout(d),d=null),f&&(clearTimeout(f),f=null),u=void 0,h=!1}}var P={};function S(e,t){var n=T(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);P[e]||(P[e]={count:0});var r,o=P[e];return o.count++,o.onsubscribe||(o.onsubscribe=j((r=e,function(){k(document,"pubsub/onsubscribe",r),k(document,"pubsub/onsubscribe/"+r,r),P[r]&&delete P[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete P[e]}}T(document,"pubsub/onsubscribe",function(e){var t=e.detail;P[t]||(P[t]={count:0});var n=P[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=u(e,3),n=t[0],r=t[1],o=t[2];k(o,n,r)}),delete n.queue)});var R=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,L=/[-_]+/g;function M(e){return e.replace(R,V)}function V(e,t){return 0==+e||L.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var D=/[A-Z]/g;function z(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=function(e,t){return e===t},F=function(e){function t(e,r){var o;n(this,t);for(var i="Property >>>"+e+"<<< exists at "+r.nodeName+"#"+r._id+" and evaluates to -> "+r[e],a=arguments.length,l=Array(a>2?a-2:0),u=2;u<a;u++)l[u-2]=arguments[u];var c=s(this,(o=t.__proto__||Object.getPrototypeOf(t)).call.apply(o,[this,i].concat(l)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="PropertyExistsException",c}return a(t,e),t}(Error);function I(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(I.prototype,HTMLElement.prototype),Object.setPrototypeOf(I,HTMLElement);var W,q="throwed",H=["title","checked","disabled"],$={},K=function(e){return e in $||($[e]=0),++$[e]},B=((W=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?W.apply(void 0,arguments):void 0}}}})()(!0),function(e){function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];n(this,o);var r=s(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));r._reduceProps=function(e,t){var n=e.props,i=e.shouldUpdate,a=r._hasKeys[t];if(-1===H.indexOf(t)&&a)throw new F(t,r);var s="_"+t,u=n[t],c=r[s];return i||r.shouldUpdateCallback(u,c)?(r[s]=u,r._props[t]=u,a&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),t,u,r),{props:n,shouldUpdate:!0}):{props:n,shouldUpdate:!1}},r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=S("context/enabled",r._makeContextReady)},r._initialise(e,t),r._id=K(r.nodeName),r._props={},r._hasKeys={},r.reRender=j(function(){return r.render()},50);var i=r.constructor.observedAttributes;return Array.isArray(i)&&i.forEach(function(e){var t,n=M(e),o=n in r;if(-1===H.indexOf(n)&&o)throw new F(n,r);r._hasKeys[n]=o,Object.defineProperty(r,n,t={get:function(){return this["_"+n]},set:function(e){var r="_"+n;this.shouldUpdateCallback(this[r],e)&&(this[r]=e,this._props[n]=e,o&&l(t.__proto__||Object.getPrototypeOf(t),n,e,this),this._isConnected&&this._hasRendered&&this.reRender())}})}),r}return a(o,I),r(o,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._styles=e,this._template=t,this._hasTemplate=!!t,this._hasRendered=!1,this._isConnected=!1}},{key:"connectedCallback",value:function(){var e=this;if(!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var n=M(t);if(e.hasAttribute(t)){var r=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=w(n,t)}(e,t),i=e._hasKeys[n];e["_"+n]=r,e._props[n]=r,i&&l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),n,r,e)}})}this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"attributeChangedCallback",value:function(e,t,n){this.shouldUpdateCallback(n,t)&&(this[M(e)]=w(n))}},{key:"batchProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(D,z))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.render()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled(),this._isConnected=!1}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this,n=!this._hasRendered;if(this.willRenderCallback(n),this._hasTemplate){var r=this._template;try{if(n){for(var a=document.createDocumentFragment(),s=[];this.firstChild;)s.push(this.firstChild),a.appendChild(this.firstChild);this._lightDOMRefs=s,this.childrenFragment=a}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});var l=r(this._props,this.childrenFragment),u=document.createDocumentFragment();if(Array.isArray(l))l.forEach(function(e){u.appendChild(e)});else if(l){if("string"==typeof l){var c=new Error(q);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),c}u.appendChild(l)}if(n)i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,u);else{var d=this.cloneNode(!1);d._isMorphing=!0,d.appendChild(u),this._isMorphing=!0,function(e,n){if("object"!==(void 0===e?"undefined":t(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===n?"undefined":t(n)))throw new Error("componentMorph: newTree should be an object");b(n,e)}(this,d),function(){for(var e=void 0;e=_.pop();)delete e.isSameNode;_=[]}(),this._isMorphing=!1}}catch(c){c.message!==q&&console.error("\n%cWeb Component %c"+this.nodeName+"%c#"+this._id+" has an error while loading its template:\n"+c+"\n\nStack Trace: "+c.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}this._hasRendered=!0,this.didRenderCallback(n)}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}},{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):i(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"appendChild",this).call(this,e)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;P[e]||(P[e]={count:0,queue:[]});var r=P[e].queue;Array.isArray(r)?r.push([e,t,n]):k(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else l(o.prototype.__proto__||Object.getPrototypeOf(o.prototype),"innerHTML",e,this)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),o}()),G={},Z=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,B),r(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:B.uuidv4();if(e&&!G[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),G[e]=!0}}}]),t}(),J=".m-footer-languages {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-languages {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n\n.m-footer-languages__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-languages__title {\n      display: none !important; } }\n\n.m-footer-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-right: -10px;\n  margin-left: -10px; }\n  .m-footer-languages__list::before, .m-footer-languages__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-languages__list::after {\n    clear: both; }\n\n.m-footer-languages__list-item {\n  position: relative;\n  display: block;\n  float: left; }\n  .m-footer-languages__list-item::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-languages__list-item:first-child::after {\n    display: none; }\n\n.m-footer-languages__link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 16px 10px 17px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-footer-languages__link:hover, .m-footer-languages__link:active, .m-footer-languages__link.is-footer-languages-active {\n    color: #fff;\n    text-decoration: none; }\n\n.m-footer-languages--inline {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-languages--inline .m-footer-languages__box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-footer-languages--inline .m-footer-languages__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    display: block;\n    margin-right: 20px; }\n    @media (min-width: 576px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n    .m-footer-languages--inline .m-footer-languages__title::after {\n      content: ':'; }\n",X=/\n[\s]+$/,Q=/^\n[\s]+/,Y=/[\s]+$/,ee=/^[\s]+/,te=/[\n\s]+/g,ne=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],re=["code","pre","textarea"],oe=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(Y,"").replace(X,"").replace(te," "))?t.removeChild(c):c.nodeValue=r:-1===re.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(Q,o).replace(ee," ").replace(Y,"").replace(X,"").replace(te," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===ne.indexOf(i)&&-1===re.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(X,"").replace(te," "))?t.removeChild(c):c.nodeValue=r:-1===re.indexOf(i)&&(r=c.nodeValue.replace(ee," ").replace(Q,"").replace(X,"").replace(te," "),c.nodeValue=r));var d=u.nodeName;d&&(i=d.toLowerCase()),t.appendChild(u)}}}};function ie(e){var t,n,r,o=e.title,i=e.items,a=e.short;return(n=document.createElement("aside")).setAttribute("class","m-footer-languages__box"),oe(n,["\n    ",o&&(r=document.createElement("strong"),r.setAttribute("class","m-footer-languages__title"),oe(r,[o]),r),"\n\n    ",(t=document.createElement("ul"),t.setAttribute("class","m-footer-languages__list"),oe(t,["\n      ",Array.isArray(i)&&i.map(function(e){var t,n,r=e.name,o=e.code,i=void 0===o?"en":o,s=e.url,l=void 0===s?"":s,u=e.isActive;return(n=document.createElement("li")).setAttribute("class","m-footer-languages__list-item"),oe(n,["\n          ",(t=document.createElement("a"),t.setAttribute("href",""+String(l)),t.setAttribute("lang",""+String(i)),t.setAttribute("class",""+String(d("m-footer-languages__link",{"is-footer-languages-active":u}))),oe(t,[a?i:r]),t),"\n        "]),n}),"\n    "]),t),"\n  "]),n}var ae,se,le,ue=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,J,ie))}return a(t,Z),r(t,null,[{key:"observedAttributes",get:function(){return["inline","items","short","title"]}}]),r(t,[{key:"willRenderCallback",value:function(){var e=this.inline;this.className=d(this.initialClassName,"m-footer-languages",{"m-footer-languages--inline":e})}}]),t}();return ue.tagName="axa-footer-languages",ae=function(){window.customElements.define(ue.tagName,ue)},se=0,le=function(){if(0===se)try{ae.apply(void 0,arguments),se+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",le,!1),document.addEventListener("WebComponentsReady",le,!1),ue}();
