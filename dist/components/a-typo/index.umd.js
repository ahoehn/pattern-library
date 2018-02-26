!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.StyleGuideWebComponent=t()}(this,function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var i=t.value;if(n?i=t.getAttribute(n):n=t.name,i&&n!==i){if(e.test(i))try{i=JSON.parse(i)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",i)}}else i=!0;return i}var n=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,a=void 0!==o&&o,l=t.detail,r=void 0===l?void 0:l,s=document.createEvent("CustomEvent");s.initCustomEvent(e,i,a,r);var p=s.preventDefault;return s.preventDefault=function(){p.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}(),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,a=void 0;try{for(var l,r=e[Symbol.iterator]();!(i=(l=r.next()).done)&&(n.push(l.value),!t||n.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{!i&&r.return&&r.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function c(e,t,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new n(t,l({},o,{detail:i}));e.dispatchEvent(a)}function h(e,t){var n,i;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",i)).test(e.className)}var u=/\s+/,d={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,a=0;a<i;++a)if(void 0!==e[o=n[a]])return t[o];return""}()};function m(e,t,n,o){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(d[t]&&(t=d[t]),!e||!t)return null;var l=void 0===n?"undefined":i(n);"function"===l&&(a=!!o,o=n);for(var r=n&&"string"===l?function(t){var i=t.target;for(;!h(i,n)&&i!==e;)i=i.parentNode;if(i!==e)return o(t,i)}:o,s=t.split(u),p=s.length,f=0;f<p;++f)e.addEventListener(s[f],r,a);return function t(){for(var n=0;n<p;++n)e.removeEventListener(s[n],r,a);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var a=n[o];if(e[a]===t)return delete e[a]}}(this,t)}}var g={};function y(e,t){var n=m(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);g[e]||(g[e]={count:0});var i,o=g[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,a=n.trailing,l=void 0===a||a,r=n.maxWait,s=void 0!==r&&r,p=void 0,c=void 0,h=void 0,u=void 0,d=!1,m=t!==s,g=!1!==s;function y(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return p=i,m&&(c&&clearTimeout(c),c=setTimeout(_,t)),g&&!h&&(h=setTimeout(x,s)),o&&!d&&(d=!0,u=e.apply(void 0,f(p))),u}return y.flush=function(){return(c||h)&&(u=e.apply(void 0,f(p))),v(),u},y.cancel=v,y;function _(){h&&clearTimeout(h),b()}function x(){c&&clearTimeout(c),b()}function b(){l&&(u=e.apply(void 0,f(p))),c=null,h=null,d=!1}function v(){c&&(clearTimeout(c),c=null),h&&(clearTimeout(h),h=null),p=void 0,d=!1}}((i=e,function(){c(document,"pubsub/onsubscribe",i),c(document,"pubsub/onsubscribe/"+i,i),g[i]&&delete g[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete g[e]}}function _(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}m(document,"pubsub/onsubscribe",function(e){var t=e.detail;g[t]||(g[t]={count:0});var n=g[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=p(e,3),n=t[0],i=t[1],o=t[2];c(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(_.prototype,HTMLElement.prototype),Object.setPrototypeOf(_,HTMLElement);var x={},b="throwed",v=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var i=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,t),i}return r(n,_),a(n,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var o=n(function(e){if(!e.hasAttributes)return null;for(var n={},i=e.attributes,o=i.length,a=0;a<o;++a){var l=i[a];n[l.name]=t(l)}return n}(this),i);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var a=new Error(b);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(o)}this._hasRendered=!0}catch(a){a.message!==b&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;g[e]||(g[e]={count:0,queue:[]});var i=g[e].queue;Array.isArray(i)?i.push([e,t,n]):c(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=y("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),n}(),w=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}r(t,v),a(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,v),a(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.uuidv4();if(e&&!x[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),x[e]=!0}}}]),t}()),z='.a-typo {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: block; }\n  @media (min-width: 576px) {\n    .a-typo {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .a-typo {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .a-typo {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .a-typo {\n      max-width: 1140px; } }\n\n.a-typo__main-title--publico {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__main-title--publico {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title--publico {\n      font-size: 78px; } }\n  .a-typo__main-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title--publico {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__page-title--publico {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title--publico {\n      font-size: 62px; } }\n  .a-typo__page-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title--publico {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title--publico {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title--publico {\n      font-size: 48px; } }\n  .a-typo__slice-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title--publico {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.015em;\n  font-family: "Publico Headline", Georgia, serif; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title--publico {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title--publico {\n      font-size: 36px; } }\n  .a-typo__small-module-title--publico::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__main-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__main-title {\n      font-size: 60px;\n      line-height: 1.05; } }\n  @media (min-width: 992px) {\n    .a-typo__main-title {\n      font-size: 78px; } }\n  .a-typo__main-title::after {\n    margin-left: 0.5em;\n    content: "[typo-78]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__page-title {\n  font-size: 30px;\n  font-weight: 700;\n  line-height: 1.13;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__page-title {\n      font-size: 50px;\n      line-height: 1.16; } }\n  @media (min-width: 992px) {\n    .a-typo__page-title {\n      font-size: 62px; } }\n  .a-typo__page-title::after {\n    margin-left: 0.5em;\n    content: "[typo-62]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__slice-title {\n  font-size: 24px;\n  font-weight: 700;\n  line-height: 1.17;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__slice-title {\n      font-size: 36px;\n      line-height: 1.13; } }\n  @media (min-width: 992px) {\n    .a-typo__slice-title {\n      font-size: 48px; } }\n  .a-typo__slice-title::after {\n    margin-left: 0.5em;\n    content: "[typo-48]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__small-module-title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__small-module-title {\n      font-size: 30px;\n      line-height: 1.17; } }\n  @media (min-width: 992px) {\n    .a-typo__small-module-title {\n      font-size: 36px; } }\n  .a-typo__small-module-title::after {\n    margin-left: 0.5em;\n    content: "[typo-36]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__title--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__title--semibold {\n      font-size: 28px;\n      line-height: 1.14; } }\n  .a-typo__title--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-28]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--semibold {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--semibold {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__item-highlight--regular {\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .a-typo__item-highlight--regular {\n      font-size: 24px;\n      line-height: 1.2; } }\n  .a-typo__item-highlight--regular::after {\n    margin-left: 0.5em;\n    content: "[typo-24]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text {\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text {\n      font-size: 20px; } }\n  .a-typo__text::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--semibold {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--semibold {\n      font-size: 20px; } }\n  .a-typo__text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text--bold {\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text--bold {\n      font-size: 20px; } }\n  .a-typo__text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-20]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer {\n      font-size: 18px; } }\n  .a-typo__text-longer::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__text-longer--bold {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .a-typo__text-longer--bold {\n      font-size: 18px; } }\n  .a-typo__text-longer--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-18]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text {\n      font-size: 16px; } }\n  .a-typo__secondary-text::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--semibold {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--semibold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__secondary-text--bold {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__secondary-text--bold {\n      font-size: 16px; } }\n  .a-typo__secondary-text--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-16]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--semibold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__tag--bold {\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__tag--bold {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .a-typo__tag--bold::after {\n    margin-left: 0.5em;\n    content: "[typo-14]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n\n.a-typo__legals--semibold {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .a-typo__legals--semibold {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .a-typo__legals--semibold::after {\n    margin-left: 0.5em;\n    content: "[typo-13]";\n    color: #7f7f7f;\n    font-size: smaller;\n    vertical-align: super; }\n';var T=function(e){return function(t,n,i){for(var o in n)o in C&&(n[C[o]]=n[o],delete n[o]);return e(t,n,i)}},C={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var S=1,k=2,O=3,E=4,A=5,L=6,P=7,N=8,j=9,M=10,F=11,R=12,G=13;var D=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var B,H,I,$,q,V,W=/\n[\s]+$/,J=/^\n[\s]+/,Z=/[\s]+$/,K=/^[\s]+/,Q=/[\n\s]+/g,U=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],X=["code","pre"],Y=function e(t,n){if(Array.isArray(n))for(var i,o,a=t.nodeName.toLowerCase(),l=!1,r=0,s=n.length;r<s;r++){var p=n[r];if(Array.isArray(p))e(t,p);else{("number"==typeof p||"boolean"==typeof p||"function"==typeof p||p instanceof Date||p instanceof RegExp)&&(p=p.toString());var f=t.childNodes[t.childNodes.length-1];if("string"==typeof p)l=!0,f&&"#text"===f.nodeName?f.nodeValue+=p:(p=document.createTextNode(p),t.appendChild(p),f=p),r===s-1&&(l=!1,-1===U.indexOf(a)&&-1===X.indexOf(a)?""===(i=f.nodeValue.replace(J,"").replace(Z,"").replace(W,"").replace(Q," "))?t.removeChild(f):f.nodeValue=i:-1===X.indexOf(a)&&(o=0===r?"":" ",i=f.nodeValue.replace(J,o).replace(K," ").replace(Z,"").replace(W,"").replace(Q," "),f.nodeValue=i));else if(p&&p.nodeType){l&&(l=!1,-1===U.indexOf(a)&&-1===X.indexOf(a)?""===(i=f.nodeValue.replace(J,"").replace(W,"").replace(Q," "))?t.removeChild(f):f.nodeValue=i:-1===X.indexOf(a)&&(i=f.nodeValue.replace(K," ").replace(J,"").replace(W,"").replace(Q," "),f.nodeValue=i));var c=p.nodeName;c&&(a=c.toLowerCase()),t.appendChild(p)}}}},ee=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",o=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function r(e,i,r){var s;-1!==l.indexOf(e)&&(i.namespace=t);var p=!1;if(i.namespace&&(p=i.namespace,delete i.namespace),p)s=document.createElementNS(p,e);else{if(e===a)return document.createComment(i.comment);s=document.createElement(e)}for(var f in i)if(i.hasOwnProperty(f)){var c=f.toLowerCase(),h=i[f];if("classname"===c&&(c="class",f="class"),"htmlFor"===f&&(f="for"),-1!==o.indexOf(c))if("true"===h)h=c;else if("false"===h)continue;"on"===c.slice(0,2)?s[f]=h:p?"xlink:href"===f?s.setAttributeNS(n,f,h):/^xmlns($|:)/i.test(f)||s.setAttributeNS(null,f,h):s.setAttribute(f,h)}return Y(s,r),s}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=T(e)),function(a){for(var l=S,r="",s=arguments.length,p=[],f=0;f<a.length;f++)if(f<s-1){var c=arguments[f+1],h=T(a[f]),u=l;u===M&&(u=N),u===j&&(u=N),u===P&&(u=N),u===E&&(u=A),h.push([0,u,c]),p.push.apply(p,h)}else p.push.apply(p,T(a[f]));var d,m=[null,{},[]],g=[[m,-1]];for(f=0;f<p.length;f++){var y=g[g.length-1][0],_=(h=p[f])[0];if(_===k&&/^\//.test(h[1])){var x=g[g.length-1][1];g.length>1&&(g.pop(),g[g.length-1][0][2][x]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(_===k){var b=[h[1],{},[]];y[2].push(b),g.push([b,y[2].length-1])}else if(_===A||0===_&&h[1]===A){for(var v,w="";f<p.length;f++)if(p[f][0]===A)w=n(w,p[f][1]);else{if(0!==p[f][0]||p[f][1]!==A)break;if("object"!==i(p[f][2])||w)w=n(w,p[f][2]);else for(v in p[f][2])p[f][2].hasOwnProperty(v)&&!y[1][v]&&(y[1][v]=p[f][2][v])}p[f][0]===F&&f++;for(var z=f;f<p.length;f++)if(p[f][0]===N||p[f][0]===A)y[1][w]?""===p[f][1]||(y[1][w]=n(y[1][w],p[f][1])):y[1][w]=o(p[f][1]);else{if(0!==p[f][0]||p[f][1]!==N&&p[f][1]!==A){!w.length||y[1][w]||f!==z||p[f][0]!==O&&p[f][0]!==R||(y[1][w]=w.toLowerCase()),p[f][0]===O&&f--;break}y[1][w]?""===p[f][2]||(y[1][w]=n(y[1][w],p[f][2])):y[1][w]=o(p[f][2])}}else if(_===A)y[1][h[1]]=!0;else if(0===_&&h[1]===A)y[1][h[2]]=!0;else if(_===O)d=y[0],D.test(d)&&g.length&&(x=g[g.length-1][1],g.pop(),g[g.length-1][0][2][x]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===_&&h[1]===S)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=n("",h[2])),Array.isArray(h[2][0])?y[2].push.apply(y[2],h[2]):y[2].push(h[2]);else if(_===S)y[2].push(h[1]);else if(_!==F&&_!==R)throw new Error("unhandled: "+_)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function T(e){var n,i=[];l===P&&(l=E);for(var o=0;o<e.length;o++){var a=e.charAt(o);l===S&&"<"===a?(r.length&&i.push([S,r]),r="",l=k):">"===a&&(n=l)!==j&&n!==M&&l!==G?(l===k?i.push([k,r]):l===A?i.push([A,r]):l===N&&r.length&&i.push([N,r]),i.push([O]),r="",l=S):l===G&&/-$/.test(r)&&"-"===a?(t.comments&&i.push([N,r.substr(0,r.length-1)],[O]),r="",l=S):l===k&&/^!--$/.test(r)?(t.comments&&i.push([k,r],[A,"comment"],[F]),r=a,l=G):l===S||l===G?r+=a:l===k&&"/"===a&&r.length||(l===k&&/\s/.test(a)?(i.push([k,r]),r="",l=E):l===k?r+=a:l===E&&/[^\s"'=/]/.test(a)?(l=A,r=a):l===E&&/\s/.test(a)?(r.length&&i.push([A,r]),i.push([R])):l===A&&/\s/.test(a)?(i.push([A,r]),r="",l=L):l===A&&"="===a?(i.push([A,r],[F]),r="",l=P):l===A?r+=a:l!==L&&l!==E||"="!==a?l!==L&&l!==E||/\s/.test(a)?l===P&&'"'===a?l=M:l===P&&"'"===a?l=j:l===M&&'"'===a?(i.push([N,r],[R]),r="",l=E):l===j&&"'"===a?(i.push([N,r],[R]),r="",l=E):l!==P||/\s/.test(a)?l===N&&/\s/.test(a)?(i.push([N,r],[R]),r="",l=E):l!==N&&l!==j&&l!==M||(r+=a):(l=N,o--):(i.push([R]),/[\w-]/.test(a)?(r+=a,l=A):l=E):(i.push([F]),l=P))}return l===S&&r.length?(i.push([S,r]),r=""):l===N&&r.length?(i.push([N,r]),r=""):l===M&&r.length?(i.push([N,r]),r=""):l===j&&r.length?(i.push([N,r]),r=""):l===A&&(i.push([A,r]),r=""),i}};function o(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":i(e))?e:n("",e)}}(r,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=r}(B={exports:{}},B.exports),B.exports),te=(ee.createElement,H=['\n  <article>\n    <h1 class="a-typo__main-title--publico">Main Title</h1>\n    <h2 class="a-typo__page-title--publico">Page Title</h2>\n    <h3 class="a-typo__slice-title--publico">Slice Title</h3>\n    <h4 class="a-typo__small-module-title--publico">Small Module Title</h4>\n\n    <h1 class="a-typo__main-title">Main Title</h1>\n    <h2 class="a-typo__page-title">Page Title</h2>\n    <h3 class="a-typo__slice-title">Slice Title</h3>\n    <h4 class="a-typo__small-module-title">Small Module Title</h4>\n    <h5 class="a-typo__title">Title</h5>\n    <h5 class="a-typo__title--semibold">Title (Semibold)</h5>\n\n    <p>\n      <span class="a-typo__item-highlight">Item Highlight</span>\n      <br>\n      <span class="a-typo__item-highlight--semibold">Item Highlight (Semibold)</span>\n      <br>\n      <span class="a-typo__item-highlight--regular">Item Highlight (Regular)</span>\n    </p>\n\n    <p class="a-typo__text">Text</p>\n    <p class="a-typo__text--semibold">Text (Semibold)</p>\n    <p class="a-typo__text--bold">Text (Bold)</p>\n    <p class="a-typo__text-longer">Text Longer</p>\n    <p class="a-typo__text-longer--bold">Text Longer (Bold)</p>\n    <p class="a-typo__secondary-text">Secondary Text</p>\n    <p class="a-typo__secondary-text--semibold">Secondary Text (Semibold)</p>\n    <p class="a-typo__secondary-text--bold">Secondary Text (Bold)</p>\n\n    <p>\n      <span class="a-typo__tag">Tag</span>\n      <br>\n      <span class="a-typo__tag--semibold">Tag (Semibold)</span>\n      <br>\n      <span class="a-typo__tag--bold">Tag (Bold)</span>\n    </p>\n\n    <p>\n      <span class="a-typo__legals">Legals</span>\n      <br>\n      <span class="a-typo__legals--semibold">Legals (Semibold)</span>\n    </p>\n  </article>\n'],I=['\n  <article>\n    <h1 class="a-typo__main-title--publico">Main Title</h1>\n    <h2 class="a-typo__page-title--publico">Page Title</h2>\n    <h3 class="a-typo__slice-title--publico">Slice Title</h3>\n    <h4 class="a-typo__small-module-title--publico">Small Module Title</h4>\n\n    <h1 class="a-typo__main-title">Main Title</h1>\n    <h2 class="a-typo__page-title">Page Title</h2>\n    <h3 class="a-typo__slice-title">Slice Title</h3>\n    <h4 class="a-typo__small-module-title">Small Module Title</h4>\n    <h5 class="a-typo__title">Title</h5>\n    <h5 class="a-typo__title--semibold">Title (Semibold)</h5>\n\n    <p>\n      <span class="a-typo__item-highlight">Item Highlight</span>\n      <br>\n      <span class="a-typo__item-highlight--semibold">Item Highlight (Semibold)</span>\n      <br>\n      <span class="a-typo__item-highlight--regular">Item Highlight (Regular)</span>\n    </p>\n\n    <p class="a-typo__text">Text</p>\n    <p class="a-typo__text--semibold">Text (Semibold)</p>\n    <p class="a-typo__text--bold">Text (Bold)</p>\n    <p class="a-typo__text-longer">Text Longer</p>\n    <p class="a-typo__text-longer--bold">Text Longer (Bold)</p>\n    <p class="a-typo__secondary-text">Secondary Text</p>\n    <p class="a-typo__secondary-text--semibold">Secondary Text (Semibold)</p>\n    <p class="a-typo__secondary-text--bold">Secondary Text (Bold)</p>\n\n    <p>\n      <span class="a-typo__tag">Tag</span>\n      <br>\n      <span class="a-typo__tag--semibold">Tag (Semibold)</span>\n      <br>\n      <span class="a-typo__tag--bold">Tag (Bold)</span>\n    </p>\n\n    <p>\n      <span class="a-typo__legals">Legals</span>\n      <br>\n      <span class="a-typo__legals--semibold">Legals (Semibold)</span>\n    </p>\n  </article>\n'],Object.freeze(Object.defineProperties(H,{raw:{value:Object.freeze(I)}}))),ne=function(){return ee(te)},ie=function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,z,ne))}return r(t,w),a(t,[{key:"connectedCallback",value:function(){(function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,n,i)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(i):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" a-typo"}}]),t}();return $=function(){window.customElements.define("axa-typo",ie)},q=0,V=function(){if(0===q)try{$.apply(void 0,arguments),q+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",V,!1),document.addEventListener("WebComponentsReady",V,!1),ie});
