var StyleGuideWebComponent=function(){"use strict";var e=".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-mobile .m-header-top-content-bar {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-mobile .m-header-top-content-bar__button {\n    margin-top: 10px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n",t=/\n[\s]+$/,n=/^\n[\s]+/,r=/[\s]+$/,o=/^[\s]+/,i=/[\n\s]+/g,a=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],c=["code","pre","textarea"],l=function e(l,u){if(Array.isArray(u))for(var s,d,p=l.nodeName.toLowerCase(),f=!1,h=0,v=u.length;h<v;h++){var b=u[h];if(Array.isArray(b))e(l,b);else{("number"==typeof b||"boolean"==typeof b||"function"==typeof b||b instanceof Date||b instanceof RegExp)&&(b=b.toString());var m=l.childNodes[l.childNodes.length-1];if("string"==typeof b)f=!0,m&&"#text"===m.nodeName?m.nodeValue+=b:(b=document.createTextNode(b),l.appendChild(b),m=b),h===v-1&&(f=!1,-1===a.indexOf(p)&&-1===c.indexOf(p)?""===(s=m.nodeValue.replace(n,"").replace(r,"").replace(t,"").replace(i," "))?l.removeChild(m):m.nodeValue=s:-1===c.indexOf(p)&&(d=0===h?"":" ",s=m.nodeValue.replace(n,d).replace(o," ").replace(r,"").replace(t,"").replace(i," "),m.nodeValue=s));else if(b&&b.nodeType){f&&(f=!1,-1===a.indexOf(p)&&-1===c.indexOf(p)?""===(s=m.nodeValue.replace(n,"").replace(t,"").replace(i," "))?l.removeChild(m):m.nodeValue=s:-1===c.indexOf(p)&&(s=m.nodeValue.replace(o," ").replace(n,"").replace(t,"").replace(i," "),m.nodeValue=s));var y=b.nodeName;y&&(p=y.toLowerCase()),l.appendChild(b)}}}};function u(e,t){var n;return(n=document.createElement("div")).setAttribute("class","m-header-top-content-bar__box"),l(n,[t]),n}var s={},d=function(e){return e in s||(s[e]=0),++s[e]},p=function(){try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,c=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,c);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},y=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},_=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},g=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},x=function e(t,n,r,o){var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var a=Object.getPrototypeOf(t);null!==a&&e(a,n,r,o)}else if("value"in i&&i.writable)i.value=r;else{var c=i.set;void 0!==c&&c.call(o,r)}return r},O=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function w(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new p(t,b({},r,{detail:n}));return e.dispatchEvent(o)}var k=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function A(e){for(var t=e.className,n=!1,r=!0,o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=i.map(function(e){var o=(i=e,new RegExp("^"+i+"$|^"+i+"\\s|\\s"+i+"\\s|\\s"+i+"$",a)).test(t);var i,a;o?n=!0:r=!1;return{className:e,hasClass:o}});return!(!r&&!n)&&c}var N=/\s+/,E={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function P(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,a=void 0!==i&&i,c=o.passive,l=void 0===c||c;if(E[t]&&(t=E[t]),!e||!t)return null;var u=void 0===n?"undefined":f(n),s=n&&"string"===u;if("function"===u){if(r){var d=r;a=d.capture,l=d.passive}r=n}for(var p=k?{capture:a,passive:l}:a,h=s?function(t){var o=t.target;for(;!A(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,v=t.split(N),b=v.length,m=0;m<b;++m)e.addEventListener(v[m],h,p);return function t(){for(var n=0;n<b;++n)e.removeEventListener(v[n],h,p);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,c=n.maxWait,l=void 0!==c&&c,u=void 0,s=void 0,d=void 0,p=void 0,f=!1,h=t!==l,v=!1!==l;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,h&&(s&&clearTimeout(s),s=setTimeout(m,t)),v&&!d&&(d=setTimeout(y,l)),o&&!f&&(f=!0,p=e.apply(void 0,C(u))),p}return b.flush=function(){(s||d)&&(p=e.apply(void 0,C(u)));return g(),p},b.cancel=g,b;function m(){d&&clearTimeout(d),_()}function y(){s&&clearTimeout(s),_()}function _(){a&&(p=e.apply(void 0,C(u))),s=null,d=null,f=!1}function g(){s&&(clearTimeout(s),s=null),d&&(clearTimeout(d),d=null),u=void 0,f=!1}}window.__subscriptions=window.__subscriptions||{};var T=window.__subscriptions;function S(e,t){var n=P(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);T[e]||(T[e]={count:0});var r,o=T[e];return o.count++,o.onsubscribe||(o.onsubscribe=j((r=e,function(){w(document,"pubsub/onsubscribe",r),w(document,"pubsub/onsubscribe/"+r,r),T[r]&&delete T[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete T[e]}}P(document,"pubsub/onsubscribe",function(e){var t=e.detail;T[t]||(T[t]={count:0});var n=T[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=O(e,3),n=t[0],r=t[1],o=t[2];w(o,n,r)}),delete n.queue)});var R,M=function(e,t){return e===t},L=((R=function(){var e;return(e=console).log.apply(e,arguments)},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return function(){return e.apply(void 0,[].concat(n,r))?R.apply(void 0,arguments):void 0}}}})()(!0),function(e){function t(e,n){var r;h(this,t);for(var o="\n    Native Property >>>"+e+"<<< exists already at "+n.nodeName+"#"+n._id+" and evaluates to -> "+n[e]+".\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties",i=arguments.length,a=Array(i>2?i-2:0),c=2;c<i;c++)a[c-2]=arguments[c];var l=g(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this,o].concat(a)));return Error.captureStackTrace&&Error.captureStackTrace(l,t),l.name="PropertyExistsException",l}return y(t,e),t}(Error)),D=/[A-Z]/g;function V(e,t,n){var r=e.toLowerCase(),o=n.charAt(t+1);return 0===t||o.toUpperCase()===o?r:"-"+r}var U=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\s])*[\]}])\s*$/;function I(e,t){var n=e;if(e&&t!==e){if(U.test(e))try{n=JSON.parse(e)}catch(n){console.error("Attribute "+t+" has an error:\n"+n+"\n",e)}}else n=!0;return n}var F=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,H=/[-_]+/g;function z(e){return e.replace(F,W)}function W(e,t){return 0==+e||H.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var q=["title","checked","disabled"],$=[];var K=1,G=3,B=8;function Z(e,t){var n=e.nodeType,r=e.nodeName;n===K&&function(e,t){for(var n=t.attributes,r=e.attributes,o=null,i=null,a=null,c=null,l=r.length-1;l>=0;--l)if(c=r[l],a=c.name,o=c.namespaceURI,i=c.value,o){var u=c.localName;t.getAttributeNS(o,u||a)!==i&&t.setAttributeNS(o,a,i)}else t.hasAttribute(a)?t.getAttribute(a)!==i&&("null"===i||"undefined"===i?t.removeAttribute(a):t.setAttribute(a,i)):t.setAttribute(a,i);for(var s=n.length-1;s>=0;--s)!1!==(c=n[s]).specified&&(a=c.name,(o=c.namespaceURI)?(a=c.localName||a,e.hasAttributeNS(o,a)||t.removeAttributeNS(o,a)):e.hasAttributeNS(null,a)||t.removeAttribute(a))}(e,t),n!==G&&n!==B||t.nodeValue===e.nodeValue||(t.nodeValue=e.nodeValue),"INPUT"===r?function(e,t){var n=e.value,r=t.value;J(e,t,"checked"),J(e,t,"disabled"),n!==r&&(t.setAttribute("value",n),t.value=n);"null"===n&&(t.value="",t.removeAttribute("value"));e.hasAttributeNS(null,"value")?"range"===t.type&&(t.value=n):t.removeAttribute("value")}(e,t):"OPTION"===r?J(e,t,"selected"):"TEXTAREA"===r&&function(e,t){var n=e.value;n!==t.value&&(t.value=n);if(t.firstChild&&t.firstChild.nodeValue!==n){if(""===n&&t.firstChild.nodeValue===t.placeholder)return;t.firstChild.nodeValue=n}}(e,t)}function J(e,t,n){e[n]!==t[n]&&(t[n]=e[n],e[n]?t.setAttribute(n,""):t.removeAttribute(n))}var X=3;function Q(e,t){return t?e?e.isSameNode&&e.isSameNode(t)?t:e.tagName!==t.tagName?e:(Z(e,t),t.skipChildren&&t.skipChildren()||function(e,t){for(var n=void 0,r=void 0,o=void 0,i=void 0,a=0,c=0;n=t.childNodes[c],r=e.childNodes[c-a],n||r;c++)if(r)if(n)if(Y(r,n))(o=Q(r,n))!==n&&(t.replaceChild(o,n),a++);else{i=null;for(var l=c;l<t.childNodes.length;l++)if(Y(t.childNodes[l],r)){i=t.childNodes[l];break}i?((o=Q(r,i))!==i&&a++,t.insertBefore(o,n)):r.id||n.id?(t.insertBefore(r,n),a++):(o=Q(r,n))!==n&&(t.replaceChild(o,n),a++)}else t.appendChild(r),a++;else t.removeChild(n),c--}(e,t),t):null:e}function Y(e,t){return e.id?e.id===t.id:e.isSameNode?e.isSameNode(t):e.tagName===t.tagName&&(e.type===X&&e.nodeValue===t.nodeValue)}var ee=function(e){function t(e){var n;h(this,t);for(var r="\n    Web Component "+e.nodeName+"%c#"+e._id+" does not accept string as a return from a template. Maybe use bel?}",o=arguments.length,i=Array(o>1?o-1:0),a=1;a<o;a++)i[a-1]=arguments[a];var c=g(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this,r].concat(i)));return Error.captureStackTrace&&Error.captureStackTrace(c,t),c.name="TemplateNoStringReturnException",c}return y(t,e),t}(Error),te=!!document.createDocumentFragment().children;function ne(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(ne.prototype,HTMLElement.prototype),Object.setPrototypeOf(ne,HTMLElement);var re=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}}(function(e){return function(t){function n(){var e,t,r;h(this,n);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return t=r=g(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r._makeContextReady=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;r.contextNode&&(clearTimeout(r.timeoutId),r.timeoutId=setTimeout(function(){r.contextCallback(r.contextNode,e)},10)),r.unContextEnabled&&r.unContextEnabled(),r.unContextEnabled=S("context/available",r._makeContextReady)},g(r,t)}return y(n,e),v(n,[{key:"connectedCallback",value:function(){m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this)&&m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.unContextEnabled&&this.unContextEnabled()}},{key:"provideContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;T[e]||(T[e]={count:0,queue:[]});var r=T[e].queue;Array.isArray(r)?r.push([e,t,n]):w(n,e,t)}("context/available",e)}},{key:"consumeContext",value:function(e){this.__consumedContext=e&&e.toLowerCase()}},{key:"contextNode",get:function(){for(var e=this.__consumedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}]),n}()},function(e){return function(t){function n(){return h(this,n),g(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return y(n,e),v(n,[{key:"appendChild",value:function(e){!this._isMorphing&&this._hasTemplate&&this._hasRendered?(this._lightDOMRefs.push(e),this.render()):m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,e)}},{key:"innerText",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else x(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerText",e,this)}},{key:"textContent",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createTextNode(e);this._lightDOMRefs=[t],this.render()}else x(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"textContent",e,this)}},{key:"innerHTML",set:function(e){if(this._hasTemplate&&this._hasRendered){var t=document.createElement("div");t.innerHTML=e,this._lightDOMRefs=Array.from(t.children),this.render()}else x(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"innerHTML",e,this)}}]),n}()},function(e){return function(t){function n(e){h(this,n);var t=g(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t._reduceProps=function(e,r){var o=e.props,i=e.shouldUpdate,a=t._hasKeys[r];if(-1===q.indexOf(r)&&a)throw new L(r,t);var c="_"+r,l=o[r],u=t[c];return i||t.shouldUpdateCallback(l,u)?(t[c]=l,t._props[r]=l,a&&x(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,l,t),{props:o,shouldUpdate:!0}):{props:o,shouldUpdate:!1}},t._isConnected=!1,t._props={},t._hasKeys={},t.updatedDebounced=j(function(){return t.updated&&t.updated()},50);var r=t.constructor.observedAttributes;return Array.isArray(r)&&r.forEach(function(e){var n,r=z(e),o=r in t;if(-1===q.indexOf(r)&&o)throw new L(r,t);t._hasKeys[r]=o,Object.defineProperty(t,r,n={get:function(){return this._props[r]},set:function(e){this.shouldUpdateCallback(this._props[r],e)&&(this._props[r]=e,o&&x(n.__proto__||Object.getPrototypeOf(n),r,e,this),this._isConnected&&this._hasRendered&&this.updatedDebounced())}})}),t}return y(n,e),v(n,[{key:"connectedCallback",value:function(){var e=this;if(m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),!this._isConnected){this._isConnected=!0;var t=this.constructor.observedAttributes;this.initialClassName=this.className,Array.isArray(t)&&t.forEach(function(t){var r=z(t);if(e.hasAttribute(t)){var o=function(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;return t?n=e.getAttribute(t):t=e.name,n=I(n,t)}(e,t),i=e._hasKeys[r];e._props[r]=o,i&&x(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),r,o,e)}})}this.updated&&this.updated()}},{key:"attributeChangedCallback",value:function(e,t,n){if(this.shouldUpdateCallback(n,t)){var r=z(e);this.hasAttribute(e)?this[r]=I(n):this[r]=null}}},{key:"setProps",value:function(e){var t=this.constructor.observedAttributes,n=void 0===t?[]:t;Object.keys(e).filter(function(e){return n.indexOf(e.replace(D,V))>-1}).reduce(this._reduceProps,{props:e,shouldUpdate:!1}).shouldUpdate&&this._isConnected&&this._hasRendered&&this.updated&&this.updated()}},{key:"shouldUpdateCallback",value:function(e,t){return e!==t}},{key:"disconnectedCallback",value:function(){this._isConnected=!1}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.template,r=_(e,["template"]);h(this,n);var o=g(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,r));return o._template=t,o._hasTemplate=!!t,o._hasRendered=!1,o.updated=o.render,o}return y(n,e),v(n,[{key:"render",value:function(){var e=this,t=!this._hasRendered;if(this.willRenderCallback(t),this._hasTemplate){var r=this._template;try{if(t){for(var o=document.createDocumentFragment(),i=[];this.firstChild;)i.push(this.firstChild),o.appendChild(this.firstChild);this._lightDOMRefs=i,this.childrenFragment=o}else this._lightDOMRefs.forEach(function(t){var n=t.cloneNode(!0);e.childrenFragment.appendChild(n)});te||(this.childrenFragment.children=Array.from(this.childrenFragment.childNodes).filter(function(e){return 1===e.nodeType}));var a=r(this._props,this.childrenFragment),c=document.createDocumentFragment();if(Array.isArray(a))a.forEach(function(e){c.appendChild(e)});else if(a){if("string"==typeof a)throw new ee(this);c.appendChild(a)}if(t)m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"appendChild",this).call(this,c);else{var l=this.cloneNode(!1);l._isMorphing=!0,l.appendChild(c),this._isMorphing=!0,function(e,t){if("object"!==(void 0===e?"undefined":f(e)))throw new Error("componentMorph: oldTree should be an object");if("object"!==(void 0===t?"undefined":f(t)))throw new Error("componentMorph: newTree should be an object");Q(t,e)}(this,l),function(){for(var e=void 0;e=$.pop();)delete e.isSameNode;$=[]}(),this._isMorphing=!1}}catch(e){console.error(e)}}this._hasRendered=!0,this.didRenderCallback(t)}},{key:"skipChildren",value:function(){return!this._isMorphing}},{key:"willRenderCallback",value:function(e){}},{key:"didRenderCallback",value:function(e){}}]),n}()},function(e){return function(t){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.styles,r=void 0===t?"":t,o=_(e,["styles"]);h(this,n);var i=g(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,o));return i._styles=r,i}return y(n,e),v(n,[{key:"connectedCallback",value:function(){m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this)&&m(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this),this._appendStyles()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}}]),n}()})(function(e){function t(e){h(this,t);var n=g(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._id=d(n.nodeName),n}return y(t,ne),v(t,null,[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}()),oe={},ie=function(e){function t(){var e,n,r;h(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=g(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r._appendStyles=function(){t.appendGlobalStyles(r._styles,r.nodeName)},g(r,n)}return y(t,re),v(t,null,[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:re.uuidv4();if(e&&!oe[t]){var n=document.createElement("style"),r=document.createTextNode(e);oe[t]=!0,n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.head.appendChild(n)}}}]),t}();var ae,ce,le=function(t){function n(){return h(this,n),g(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,{styles:e,template:u}))}return y(n,ie),v(n,null,[{key:"observedAttributes",get:function(){return["type"]}}]),v(n,[{key:"willRenderCallback",value:function(){var e=this.type;this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),n}();return le.tagName="axa-header-top-content-bar",ae=le.tagName,ce=le,customElements.get(ae)||customElements.define(ae,ce),le}();
