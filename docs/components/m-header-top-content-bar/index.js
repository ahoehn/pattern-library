var StyleGuideWebComponent=function(){"use strict";var e=".m-header-top-content-bar {\n  display: block;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff; }\n  .m-header-mobile .m-header-top-content-bar {\n    padding-top: 20px !important;\n    padding-bottom: 20px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar {\n      padding-top: 5px;\n      padding-bottom: 5px; } }\n\n.m-header-top-content-bar,\n.m-header-top-content-bar--corporate {\n  background: #027180; }\n\n.m-header-top-content-bar--commercial {\n  background: #00005b; }\n\n.m-header-top-content-bar--warning {\n  background: #c91432; }\n\n.m-header-top-content-bar__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-top-content-bar__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-top-content-bar__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-top-content-bar__box {\n      max-width: 1140px; } }\n  .m-header-mobile .m-header-top-content-bar__box {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important;\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__box {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; } }\n\n.m-header-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  margin-right: 24px; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__text {\n      font-size: 13px;\n      line-height: 1.38; } }\n\n.m-header-top-content-bar__button {\n  margin-top: 10px; }\n  .m-header-mobile .m-header-top-content-bar__button {\n    margin-top: 10px !important; }\n  @media (min-width: 576px) {\n    .m-header-top-content-bar__button {\n      margin-top: 0; } }\n";var t=function(e){return function(t,r,o){for(var i in r)i in n&&(r[n[i]]=r[i],delete r[i]);return e(t,r,o)}},n={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},c=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},p=1,f=2,d=3,h=4,m=5,v=6,b=7,g=8,x=9,y=10,w=11,_=12,k=13;var C=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var O,E,A,S=/\n[\s]+$/,T=/^\n[\s]+/,L=/[\s]+$/,N=/^[\s]+/,j=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],M=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,l=0,s=n.length;l<s;l++){var c=n[l];if(Array.isArray(c))e(t,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),t.appendChild(c),u=c),l===s-1&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(L,"").replace(S,"").replace(j," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(T,o).replace(N," ").replace(L,"").replace(S,"").replace(j," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===F.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(S,"").replace(j," "))?t.removeChild(u):u.nodeValue=r:-1===F.indexOf(i)&&(r=u.nodeValue.replace(N," ").replace(T,"").replace(S,"").replace(j," "),u.nodeValue=r));var p=c.nodeName;p&&(i=p.toLowerCase()),t.appendChild(c)}}}},R=(function(e){var n="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,r){var s;-1!==l.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var p=u.toLowerCase(),f=t[u];if("classname"===p&&(p="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(p))if("true"===f)f=p;else if("false"===f)continue;"on"===p.slice(0,2)?s[u]=f:c?"xlink:href"===u?s.setAttributeNS(o,u,f):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,f):s.setAttribute(u,f)}return M(s,r),s}e.exports=function(e,n){n||(n={});var o=n.concat||function(e,t){return String(e)+String(t)};return!1!==n.attrToProp&&(e=t(e)),function(t){for(var a=p,l="",s=arguments.length,c=[],u=0;u<t.length;u++)if(u<s-1){var O=arguments[u+1],E=z(t[u]),A=a;A===y&&(A=g),A===x&&(A=g),A===b&&(A=g),A===h&&(A=m),E.push([0,A,O]),c.push.apply(c,E)}else c.push.apply(c,z(t[u]));var S,T=[null,{},[]],L=[[T,-1]];for(u=0;u<c.length;u++){var N=L[L.length-1][0],j=(E=c[u])[0];if(j===f&&/^\//.test(E[1])){var P=L[L.length-1][1];L.length>1&&(L.pop(),L[L.length-1][0][2][P]=e(N[0],N[1],N[2].length?N[2]:void 0))}else if(j===f){var F=[E[1],{},[]];N[2].push(F),L.push([F,N[2].length-1])}else if(j===m||0===j&&E[1]===m){for(var M,R="";u<c.length;u++)if(c[u][0]===m)R=o(R,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==m)break;if("object"!==r(c[u][2])||R)R=o(R,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!N[1][M]&&(N[1][M]=c[u][2][M])}c[u][0]===w&&u++;for(var D=u;u<c.length;u++)if(c[u][0]===g||c[u][0]===m)N[1][R]?""===c[u][1]||(N[1][R]=o(N[1][R],c[u][1])):N[1][R]=i(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==g&&c[u][1]!==m){!R.length||N[1][R]||u!==D||c[u][0]!==d&&c[u][0]!==_||(N[1][R]=R.toLowerCase()),c[u][0]===d&&u--;break}N[1][R]?""===c[u][2]||(N[1][R]=o(N[1][R],c[u][2])):N[1][R]=i(c[u][2])}}else if(j===m)N[1][E[1]]=!0;else if(0===j&&E[1]===m)N[1][E[2]]=!0;else if(j===d)S=N[0],C.test(S)&&L.length&&(P=L[L.length-1][1],L.pop(),L[L.length-1][0][2][P]=e(N[0],N[1],N[2].length?N[2]:void 0));else if(0===j&&E[1]===p)void 0===E[2]||null===E[2]?E[2]="":E[2]||(E[2]=o("",E[2])),Array.isArray(E[2][0])?N[2].push.apply(N[2],E[2]):N[2].push(E[2]);else if(j===p)N[2].push(E[1]);else if(j!==w&&j!==_)throw new Error("unhandled: "+j)}if(T[2].length>1&&/^\s*$/.test(T[2][0])&&T[2].shift(),T[2].length>2||2===T[2].length&&/\S/.test(T[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(T[2][0])&&"string"==typeof T[2][0][0]&&Array.isArray(T[2][0][2])&&(T[2][0]=e(T[2][0][0],T[2][0][1],T[2][0][2])),T[2][0];function z(e){var t,r=[];a===b&&(a=h);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===p&&"<"===i?(l.length&&r.push([p,l]),l="",a=f):">"===i&&(t=a)!==x&&t!==y&&a!==k?(a===f?r.push([f,l]):a===m?r.push([m,l]):a===g&&l.length&&r.push([g,l]),r.push([d]),l="",a=p):a===k&&/-$/.test(l)&&"-"===i?(n.comments&&r.push([g,l.substr(0,l.length-1)],[d]),l="",a=p):a===f&&/^!--$/.test(l)?(n.comments&&r.push([f,l],[m,"comment"],[w]),l=i,a=k):a===p||a===k?l+=i:a===f&&/\s/.test(i)?(r.push([f,l]),l="",a=h):a===f?l+=i:a===h&&/[^\s"'=/]/.test(i)?(a=m,l=i):a===h&&/\s/.test(i)?(l.length&&r.push([m,l]),r.push([_])):a===m&&/\s/.test(i)?(r.push([m,l]),l="",a=v):a===m&&"="===i?(r.push([m,l],[w]),l="",a=b):a===m?l+=i:a!==v&&a!==h||"="!==i?a!==v&&a!==h||/\s/.test(i)?a===b&&'"'===i?a=y:a===b&&"'"===i?a=x:a===y&&'"'===i?(r.push([g,l],[_]),l="",a=h):a===x&&"'"===i?(r.push([g,l],[_]),l="",a=h):a!==b||/\s/.test(i)?a===g&&/\s/.test(i)?(r.push([g,l],[_]),l="",a=h):a!==g&&a!==x&&a!==y||(l+=i):(a=g,o--):(r.push([_]),/[\w-]/.test(i)?(l+=i,a=m):a=h):(r.push([w]),a=b)}return a===p&&l.length?(r.push([p,l]),l=""):a===g&&l.length?(r.push([g,l]),l=""):a===y&&l.length?(r.push([g,l]),l=""):a===x&&l.length?(r.push([g,l]),l=""):a===m&&(r.push([m,l]),l=""),r}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":r(e))?e:o("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(O={exports:{}},O.exports),O.exports),D=(R.createElement,E=['<div class="m-header-top-content-bar__box">',"</div>"],A=['<div class="m-header-top-content-bar__box">',"</div>"],Object.freeze(Object.defineProperties(E,{raw:{value:Object.freeze(A)}})));function z(e,t){return R(D,t)}var G=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function $(e,t){if("function"==typeof e.hasAttribute&&!e.hasAttribute(t))return!1;var n=e.value;if(t?n=e.getAttribute(t):t=e.name,n&&t!==n){if(G.test(n))try{n=JSON.parse(n)}catch(t){console.error("Attribute "+e+" has an error:\n"+t+"\n",n)}}else n=!0;return n}var q=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,V=/[-_]+/g;function W(e,t){return 0==+e||V.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var B=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function I(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new B(t,a({},r,{detail:n}));e.dispatchEvent(o)}var H=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function Z(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var J=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function K(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,s=i.passive,c=void 0===s||s;if(U[t]&&(t=U[t]),!e||!t)return null;var u=void 0===n?"undefined":r(n),p=n&&"string"===u;if("function"===u){if(o){var f=o;l=f.capture,c=f.passive}o=n}for(var d=H?{capture:l,passive:c}:l,h=p?function(t){var r=t.target;for(;!Z(r,n)&&r!==e;)r=r.parentNode;if(r!==e)return o(t,r)}:o,m=t.split(J),v=m.length,b=0;b<v;++b)e.addEventListener(m[b],h,d);return function t(){for(var n=0;n<v;++n)e.removeEventListener(m[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var Q={};function X(e,t){var n=K(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);Q[e]||(Q[e]={count:0});var r,o=Q[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,l=n.maxWait,s=void 0!==l&&l,c=void 0,p=void 0,f=void 0,d=void 0,h=!1,m=t!==s,v=!1!==s;function b(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return c=r,m&&(p&&clearTimeout(p),p=setTimeout(g,t)),v&&!f&&(f=setTimeout(x,s)),o&&!h&&(h=!0,d=e.apply(void 0,u(c))),d}return b.flush=function(){return(p||f)&&(d=e.apply(void 0,u(c))),w(),d},b.cancel=w,b;function g(){f&&clearTimeout(f),y()}function x(){p&&clearTimeout(p),y()}function y(){a&&(d=e.apply(void 0,u(c))),p=null,f=null,h=!1}function w(){p&&(clearTimeout(p),p=null),f&&(clearTimeout(f),f=null),c=void 0,h=!1}}((r=e,function(){I(document,"pubsub/onsubscribe",r),I(document,"pubsub/onsubscribe/"+r,r),Q[r]&&delete Q[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete Q[e]}}function Y(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}K(document,"pubsub/onsubscribe",function(e){var t=e.detail;Q[t]||(Q[t]={count:0});var n=Q[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=c(e,3),n=t[0],r=t[1],o=t[2];I(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(Y.prototype,HTMLElement.prototype),Object.setPrototypeOf(Y,HTMLElement);var ee,te,ne,re={},oe="throwed",ie=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];o(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,n),r}return l(t,Y),i(t,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var t=this._template;if(t)try{for(var n=document.createDocumentFragment();this.firstChild;)n.appendChild(this.firstChild);var r=t(function(e){if(!e.hasAttributes)return null;for(var t,n={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i],l=a.name;n[(t=l,t.replace(q,W))]=$(a)}return n}(this),n);if(Array.isArray(r))r.forEach(function(t){e.appendChild(t)});else if(r){if("string"==typeof r){var o=new Error(oe);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==oe&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Q[e]||(Q[e]={count:0,queue:[]});var r=Q[e].queue;Array.isArray(r)?r.push([e,t,n]):I(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=X("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),t}(),ae=(function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}l(t,ie),i(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return o(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,ie),i(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ie.uuidv4();if(e&&!re[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),re[e]=!0}}}]),t}()),le=function(t){function n(){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e,z))}return l(n,ae),i(n,[{key:"connectedCallback",value:function(){(function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=this.getAttribute("type");this.className=this.initialClassName+" m-header-top-content-bar m-header-top-content-bar--"+e}}]),n}();return ee=function(){window.customElements.define("axa-header-top-content-bar",le)},te=0,ne=function(){if(0===te)try{ee.apply(void 0,arguments),te+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ne,!1),document.addEventListener("WebComponentsReady",ne,!1),le}();
