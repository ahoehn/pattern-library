var StyleGuideWebComponent=function(){"use strict";function e(e,t){return e(t={exports:{}},t.exports),t.exports}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&s.return&&s.return()}finally{if(r)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},f=e(function(e){!function(){var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":t(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(o.apply(null,i));else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=o:window.classNames=o}()}),c=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function p(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(c.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var d=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,h=/[-_]+/g;function g(e,t){return 0==+e||h.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var m=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,o=void 0!==n&&n,r=t.cancelable,i=void 0!==r&&r,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,o,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function v(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new m(t,r({},o,{detail:n}));e.dispatchEvent(i)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function b(e,t){var n,o;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",o)).test(e.className)}var x=/\s+/,_={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),o=n.length,r=void 0,i=0;i<o;++i)if(void 0!==e[r=n[i]])return t[r];return""}()};function w(e,n,o,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,s=void 0!==a&&a,l=i.passive,u=void 0===l||l;if(_[n]&&(n=_[n]),!e||!n)return null;var f=void 0===o?"undefined":t(o),c=o&&"string"===f;if("function"===f){if(r){var p=r;s=p.capture,u=p.passive}r=o}for(var d=y?{capture:s,passive:u}:s,h=c?function(t){var n=t.target;for(;!b(n,o)&&n!==e;)n=n.parentNode;if(n!==e)return r(t,n)}:r,g=n.split(x),m=g.length,v=0;v<m;++v)e.addEventListener(g[v],h,d);return function t(){for(var n=0;n<m;++n)e.removeEventListener(g[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),o=n.length,r=0;r<o;++r){var i=n[r];if(e[i]===t)return delete e[i]}}(this,t)}}var k={};function C(e,t){var n=w(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);k[e]||(k[e]={count:0});var o,r=k[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.leading,r=void 0!==o&&o,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,f=void 0,c=void 0,p=void 0,d=void 0,h=!1,g=t!==l,m=!1!==l;function v(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return f=o,g&&(c&&clearTimeout(c),c=setTimeout(y,t)),m&&!p&&(p=setTimeout(b,l)),r&&!h&&(h=!0,d=e.apply(void 0,u(f))),d}return v.flush=function(){return(c||p)&&(d=e.apply(void 0,u(f))),_(),d},v.cancel=_,v;function y(){p&&clearTimeout(p),x()}function b(){c&&clearTimeout(c),x()}function x(){a&&(d=e.apply(void 0,u(f))),c=null,p=null,h=!1}function _(){c&&(clearTimeout(c),c=null),p&&(clearTimeout(p),p=null),f=void 0,h=!1}}((o=e,function(){v(document,"pubsub/onsubscribe",o),v(document,"pubsub/onsubscribe/"+o,o),k[o]&&delete k[o].unsubscribe}),100)),r.onsubscribe(),function(){r.count--,n.call(this),r.count<=0&&delete k[e]}}function O(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}w(document,"pubsub/onsubscribe",function(e){var t=e.detail;k[t]||(k[t]={count:0});var n=k[t],o=n.queue;Array.isArray(o)&&(o.forEach(function(e){var t=s(e,3),n=t[0],o=t[1],r=t[2];v(r,n,o)}),delete n.queue)}),Object.setPrototypeOf(O.prototype,HTMLElement.prototype),Object.setPrototypeOf(O,HTMLElement);var E={},A="throwed",T=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments[1];n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,o),r}return i(t,O),o(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var o=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},o=e.attributes,r=o.length,i=0;i<r;++i){var a=o[i],s=a.name;n[(t=s,t.replace(d,g))]=p(a)}return n}(this),n);if(Array.isArray(o))o.forEach(function(t){e.appendChild(t)});else if(o){if("string"==typeof o){var r=new Error(A);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),r}this.appendChild(o)}this._hasRendered=!0}catch(r){r.message!==A&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+r+"\n\nStack Trace: "+r.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;k[e]||(k[e]={count:0,queue:[]});var o=k[e].queue;Array.isArray(o)?o.push([e,t,n]):v(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=C("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),N=(function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}i(t,T),o(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,T),o(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T.uuidv4();if(e&&!E[e]){var n=document.createElement("style"),o=document.createTextNode(e);n.appendChild(o),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),E[e]=!0}}}]),t}()),S=".m-footer-languages {\n  padding-right: 15px;\n  padding-left: 15px;\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  max-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  display: block; }\n  @media (max-width: 991px) {\n    .m-footer-languages {\n      position: static;\n      width: auto;\n      max-width: none;\n      -webkit-box-flex: 1;\n          -ms-flex: auto;\n              flex: auto; } }\n\n.m-footer-languages__title {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #fff;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__title {\n      font-size: 16px; } }\n  @media (max-width: 991px) {\n    .m-footer-languages__title {\n      display: none !important; } }\n\n.m-footer-languages__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  *zoom: 1;\n  margin-right: -10px;\n  margin-left: -10px; }\n  .m-footer-languages__list::before, .m-footer-languages__list::after {\n    display: table;\n    content: \" \"; }\n  .m-footer-languages__list::after {\n    clear: both; }\n\n.m-footer-languages__list-item {\n  position: relative;\n  display: block;\n  float: left; }\n  .m-footer-languages__list-item::after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    display: block;\n    width: 1px;\n    height: 14px;\n    margin-top: -7px;\n    content: '';\n    background: rgba(255, 255, 255, 0.65); }\n  .m-footer-languages__list-item:first-child::after {\n    display: none; }\n\n.m-footer-languages__link {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  display: block;\n  padding: 16px 10px 17px;\n  color: rgba(255, 255, 255, 0.65);\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-footer-languages__link {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-footer-languages__link:hover, .m-footer-languages__link:active, .m-footer-languages__link.is-footer-languages-active {\n    color: #fff;\n    text-decoration: none; }\n\n.m-footer-languages--inline {\n  position: static;\n  width: auto;\n  max-width: none;\n  -webkit-box-flex: 1;\n      -ms-flex: auto;\n          flex: auto; }\n  .m-footer-languages--inline .m-footer-languages__box {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-footer-languages--inline .m-footer-languages__title {\n    font-size: 12px;\n    font-weight: 700;\n    line-height: 1.5;\n    letter-spacing: 0.02em;\n    display: block;\n    margin-right: 20px; }\n    @media (min-width: 576px) {\n      .m-footer-languages--inline .m-footer-languages__title {\n        font-size: 14px;\n        line-height: 1.21; } }\n    .m-footer-languages--inline .m-footer-languages__title::after {\n      content: ':'; }\n",j=function(e){return function(t,n,o){for(var r in n)r in L&&(n[L[r]]=n[r],delete n[r]);return e(t,n,o)}},L={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var P=1,F=2,M=3,R=4,z=5,D=6,G=7,$=8,q=9,V=10,B=11,W=12,I=13;var H=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var Z=/\n[\s]+$/,J=/^\n[\s]+/,U=/[\s]+$/,K=/^[\s]+/,Q=/[\n\s]+/g,X=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],Y=["code","pre"],ee=function e(t,n){if(Array.isArray(n))for(var o,r,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var f=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,f&&"#text"===f.nodeName?f.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),f=u),s===l-1&&(a=!1,-1===X.indexOf(i)&&-1===Y.indexOf(i)?""===(o=f.nodeValue.replace(J,"").replace(U,"").replace(Z,"").replace(Q," "))?t.removeChild(f):f.nodeValue=o:-1===Y.indexOf(i)&&(r=0===s?"":" ",o=f.nodeValue.replace(J,r).replace(K," ").replace(U,"").replace(Z,"").replace(Q," "),f.nodeValue=o));else if(u&&u.nodeType){a&&(a=!1,-1===X.indexOf(i)&&-1===Y.indexOf(i)?""===(o=f.nodeValue.replace(J,"").replace(Z,"").replace(Q," "))?t.removeChild(f):f.nodeValue=o:-1===Y.indexOf(i)&&(o=f.nodeValue.replace(K," ").replace(J,"").replace(Z,"").replace(Q," "),f.nodeValue=o));var c=u.nodeName;c&&(i=c.toLowerCase()),t.appendChild(u)}}}},te=e(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],i="!--",a=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,s){var l;-1!==a.indexOf(e)&&(t.namespace=n);var u=!1;if(t.namespace&&(u=t.namespace,delete t.namespace),u)l=document.createElementNS(u,e);else{if(e===i)return document.createComment(t.comment);l=document.createElement(e)}for(var f in t)if(t.hasOwnProperty(f)){var c=f.toLowerCase(),p=t[f];if("classname"===c&&(c="class",f="class"),"htmlFor"===f&&(f="for"),-1!==r.indexOf(c))if("true"===p)p=c;else if("false"===p)continue;"on"===c.slice(0,2)?l[f]=p:u?"xlink:href"===f?l.setAttributeNS(o,f,p):/^xmlns($|:)/i.test(f)||l.setAttributeNS(null,f,p):l.setAttribute(f,p)}return ee(l,s),l}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=j(e)),function(i){for(var a=P,s="",l=arguments.length,u=[],f=0;f<i.length;f++)if(f<l-1){var c=arguments[f+1],p=C(i[f]),d=a;d===V&&(d=$),d===q&&(d=$),d===G&&(d=$),d===R&&(d=z),p.push([0,d,c]),u.push.apply(u,p)}else u.push.apply(u,C(i[f]));var h,g=[null,{},[]],m=[[g,-1]];for(f=0;f<u.length;f++){var v=m[m.length-1][0],y=(p=u[f])[0];if(y===F&&/^\//.test(p[1])){var b=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][b]=e(v[0],v[1],v[2].length?v[2]:void 0))}else if(y===F){var x=[p[1],{},[]];v[2].push(x),m.push([x,v[2].length-1])}else if(y===z||0===y&&p[1]===z){for(var _,w="";f<u.length;f++)if(u[f][0]===z)w=o(w,u[f][1]);else{if(0!==u[f][0]||u[f][1]!==z)break;if("object"!==t(u[f][2])||w)w=o(w,u[f][2]);else for(_ in u[f][2])u[f][2].hasOwnProperty(_)&&!v[1][_]&&(v[1][_]=u[f][2][_])}u[f][0]===B&&f++;for(var k=f;f<u.length;f++)if(u[f][0]===$||u[f][0]===z)v[1][w]?""===u[f][1]||(v[1][w]=o(v[1][w],u[f][1])):v[1][w]=r(u[f][1]);else{if(0!==u[f][0]||u[f][1]!==$&&u[f][1]!==z){!w.length||v[1][w]||f!==k||u[f][0]!==M&&u[f][0]!==W||(v[1][w]=w.toLowerCase()),u[f][0]===M&&f--;break}v[1][w]?""===u[f][2]||(v[1][w]=o(v[1][w],u[f][2])):v[1][w]=r(u[f][2])}}else if(y===z)v[1][p[1]]=!0;else if(0===y&&p[1]===z)v[1][p[2]]=!0;else if(y===M)h=v[0],H.test(h)&&m.length&&(b=m[m.length-1][1],m.pop(),m[m.length-1][0][2][b]=e(v[0],v[1],v[2].length?v[2]:void 0));else if(0===y&&p[1]===P)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=o("",p[2])),Array.isArray(p[2][0])?v[2].push.apply(v[2],p[2]):v[2].push(p[2]);else if(y===P)v[2].push(p[1]);else if(y!==B&&y!==W)throw new Error("unhandled: "+y)}if(g[2].length>1&&/^\s*$/.test(g[2][0])&&g[2].shift(),g[2].length>2||2===g[2].length&&/\S/.test(g[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(g[2][0])&&"string"==typeof g[2][0][0]&&Array.isArray(g[2][0][2])&&(g[2][0]=e(g[2][0][0],g[2][0][1],g[2][0][2])),g[2][0];function C(e){var t,o=[];a===G&&(a=R);for(var r=0;r<e.length;r++){var i=e.charAt(r);a===P&&"<"===i?(s.length&&o.push([P,s]),s="",a=F):">"===i&&(t=a)!==q&&t!==V&&a!==I?(a===F?o.push([F,s]):a===z?o.push([z,s]):a===$&&s.length&&o.push([$,s]),o.push([M]),s="",a=P):a===I&&/-$/.test(s)&&"-"===i?(n.comments&&o.push([$,s.substr(0,s.length-1)],[M]),s="",a=P):a===F&&/^!--$/.test(s)?(n.comments&&o.push([F,s],[z,"comment"],[B]),s=i,a=I):a===P||a===I?s+=i:a===F&&/\s/.test(i)?(o.push([F,s]),s="",a=R):a===F?s+=i:a===R&&/[^\s"'=/]/.test(i)?(a=z,s=i):a===R&&/\s/.test(i)?(s.length&&o.push([z,s]),o.push([W])):a===z&&/\s/.test(i)?(o.push([z,s]),s="",a=D):a===z&&"="===i?(o.push([z,s],[B]),s="",a=G):a===z?s+=i:a!==D&&a!==R||"="!==i?a!==D&&a!==R||/\s/.test(i)?a===G&&'"'===i?a=V:a===G&&"'"===i?a=q:a===V&&'"'===i?(o.push([$,s],[W]),s="",a=R):a===q&&"'"===i?(o.push([$,s],[W]),s="",a=R):a!==G||/\s/.test(i)?a===$&&/\s/.test(i)?(o.push([$,s],[W]),s="",a=R):a!==$&&a!==q&&a!==V||(s+=i):(a=$,r--):(o.push([W]),/[\w-]/.test(i)?(s+=i,a=z):a=R):(o.push([B]),a=G)}return a===P&&s.length?(o.push([P,s]),s=""):a===$&&s.length?(o.push([$,s]),s=""):a===V&&s.length?(o.push([$,s]),s=""):a===q&&s.length?(o.push([$,s]),s=""):a===z&&(o.push([z,s]),s=""),o}};function r(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":t(e))?e:o("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),ne=(te.createElement,l(['<aside class="m-footer-languages__box">\n    ','\n\n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"],['<aside class="m-footer-languages__box">\n    ','\n\n    <ul class="m-footer-languages__list">\n      ',"\n    </ul>\n  </aside>\n"])),oe=l(['<strong class="m-footer-languages__title">',"</strong>"],['<strong class="m-footer-languages__title">',"</strong>"]),re=l(['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link ','" href="','" lang="','">',"</a>\n        </li>\n      "],['\n        <li class="m-footer-languages__list-item">\n          <a class="m-footer-languages__link ','" href="','" lang="','">',"</a>\n        </li>\n      "]);function ie(e){var t=e.title,n=e.items,o=e.short;return te(ne,t&&te(oe,t),n.map(function(e){var t=e.name,n=e.code,r=e.url,i=e.isActive;return te(re,i?"is-footer-languages-active":"",r,n,o?n:t)}))}var ae,se,le,ue=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,S,ie))}return i(t,N),o(t,[{key:"connectedCallback",value:function(){(function e(t,n,o){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this);var e=p(this,"inline");this.className=f(this.initialClassName,"m-footer-languages",{"m-footer-languages--inline":e})}}]),t}();return ae=function(){window.customElements.define("axa-footer-languages",ue)},se=0,le=function(){if(0===se)try{ae.apply(void 0,arguments),se+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",le,!1),document.addEventListener("WebComponentsReady",le,!1),ue}();
