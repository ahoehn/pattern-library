!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.StyleGuideWebComponent=n()}(this,function(){"use strict";var e="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: none;\n  color: #00008f; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    cursor: pointer;\n    text-decoration: underline; }\n  .m-link:hover, .m-link:focus, .m-link:active {\n    color: #00005b; }\n\n.m-link--deco {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  text-decoration: underline; }\n  .m-link--deco:hover, .m-link--deco:focus, .m-link--deco:active {\n    cursor: pointer;\n    text-decoration: none; }\n\n.m-link--red {\n  color: #f07662; }\n  .m-link--red:hover, .m-link--red:focus, .m-link--red:active {\n    color: #ec4d33; }\n\n.m-link--white {\n  color: #fff; }\n  .m-link--white:hover, .m-link--white:focus, .m-link--white:active {\n    color: #f5f5f5; }\n\n.m-link--icon,\n.m-link--arrow,\n.m-link--listed {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: bold !important; }\n  @media (min-width: 576px) {\n    .m-link--icon,\n    .m-link--arrow,\n    .m-link--listed {\n      font-size: 14px;\n      line-height: 1.21; } }\n  .m-link--icon:hover, .m-link--icon:active, .m-link--icon:focus,\n  .m-link--arrow:hover,\n  .m-link--arrow:active,\n  .m-link--arrow:focus,\n  .m-link--listed:hover,\n  .m-link--listed:active,\n  .m-link--listed:focus {\n    text-decoration: none; }\n\n.m-link--email {\n  text-transform: none; }\n\n.m-link--arrow {\n  padding-right: 23px; }\n\n.m-link--icon,\n.m-link--listed {\n  padding-left: 23px; }\n\n.m-link__icon,\n.m-link__arrow,\n.m-link__listed {\n  width: 13px;\n  height: 13px;\n  display: block;\n  fill: currentColor;\n  position: absolute; }\n\n.m-link__icon,\n.m-link__listed {\n  left: 0; }\n\n.m-link__icon {\n  top: 0;\n  margin-top: 0; }\n\n.m-link__arrow {\n  top: 50%;\n  margin-top: -6.5px;\n  right: 0; }\n\n.m-link__listed {\n  top: 50%;\n  margin-top: -6.5px; }\n\n.m-link--motion:hover .m-link__arrow,\n.m-link--motion:hover .m-link__listed, .m-link--motion:active .m-link__arrow,\n.m-link--motion:active .m-link__listed, .m-link--motion:focus .m-link__arrow,\n.m-link--motion:focus .m-link__listed {\n  -webkit-animation-duration: 0.6s;\n          animation-duration: 0.6s;\n  -webkit-animation-timing-function: ease;\n          animation-timing-function: ease;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-name: fadeOutRightInLeft;\n          animation-name: fadeOutRightInLeft; }\n";function n(e,n){return e(n={exports:{}},n.exports),n.exports}var t=function(e){return function(n,t,o){for(var i in t)i in r&&(t[r[i]]=t[i],delete t[i]);return e(n,t,o)}},r={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},a=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),l=function(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e},s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},u=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},f=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},p=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},h=1,m=2,v=3,y=4,b=5,g=6,k=7,x=8,w=9,_=10,C=11,O=12,E=13;var A=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var L=/\n[\s]+$/,T=/^\n[\s]+/,S=/[\s]+$/,N=/^[\s]+/,j=/[\n\s]+/g,P=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],R=["code","pre"],M=function e(n,t){if(Array.isArray(t))for(var r,o,i=n.nodeName.toLowerCase(),a=!1,l=0,s=t.length;l<s;l++){var c=t[l];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),l===s-1&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(S,"").replace(L,"").replace(j," "))?n.removeChild(u):u.nodeValue=r:-1===R.indexOf(i)&&(o=0===l?"":" ",r=u.nodeValue.replace(T,o).replace(N," ").replace(S,"").replace(L,"").replace(j," "),u.nodeValue=r));else if(c&&c.nodeType){a&&(a=!1,-1===P.indexOf(i)&&-1===R.indexOf(i)?""===(r=u.nodeValue.replace(T,"").replace(L,"").replace(j," "))?n.removeChild(u):u.nodeValue=r:-1===R.indexOf(i)&&(r=u.nodeValue.replace(N," ").replace(T,"").replace(L,"").replace(j," "),u.nodeValue=r));var f=c.nodeName;f&&(i=f.toLowerCase()),n.appendChild(c)}}}},F=n(function(e){var n="http://www.w3.org/2000/svg",r="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],a="!--",l=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,t,o){var s;-1!==l.indexOf(e)&&(t.namespace=n);var c=!1;if(t.namespace&&(c=t.namespace,delete t.namespace),c)s=document.createElementNS(c,e);else{if(e===a)return document.createComment(t.comment);s=document.createElement(e)}for(var u in t)if(t.hasOwnProperty(u)){var f=u.toLowerCase(),d=t[u];if("classname"===f&&(f="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(f))if("true"===d)d=f;else if("false"===d)continue;"on"===f.slice(0,2)?s[u]=d:c?"xlink:href"===u?s.setAttributeNS(r,u,d):/^xmlns($|:)/i.test(u)||s.setAttributeNS(null,u,d):s.setAttribute(u,d)}return M(s,o),s}e.exports=function(e,n){n||(n={});var r=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=t(e)),function(t){for(var a=h,l="",s=arguments.length,c=[],u=0;u<t.length;u++)if(u<s-1){var f=arguments[u+1],d=z(t[u]),p=a;p===_&&(p=x),p===w&&(p=x),p===k&&(p=x),p===y&&(p=b),d.push([0,p,f]),c.push.apply(c,d)}else c.push.apply(c,z(t[u]));var L,T=[null,{},[]],S=[[T,-1]];for(u=0;u<c.length;u++){var N=S[S.length-1][0],j=(d=c[u])[0];if(j===m&&/^\//.test(d[1])){var P=S[S.length-1][1];S.length>1&&(S.pop(),S[S.length-1][0][2][P]=e(N[0],N[1],N[2].length?N[2]:void 0))}else if(j===m){var R=[d[1],{},[]];N[2].push(R),S.push([R,N[2].length-1])}else if(j===b||0===j&&d[1]===b){for(var M,F="";u<c.length;u++)if(c[u][0]===b)F=r(F,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==b)break;if("object"!==o(c[u][2])||F)F=r(F,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!N[1][M]&&(N[1][M]=c[u][2][M])}c[u][0]===C&&u++;for(var D=u;u<c.length;u++)if(c[u][0]===x||c[u][0]===b)N[1][F]?""===c[u][1]||(N[1][F]=r(N[1][F],c[u][1])):N[1][F]=i(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==x&&c[u][1]!==b){!F.length||N[1][F]||u!==D||c[u][0]!==v&&c[u][0]!==O||(N[1][F]=F.toLowerCase()),c[u][0]===v&&u--;break}N[1][F]?""===c[u][2]||(N[1][F]=r(N[1][F],c[u][2])):N[1][F]=i(c[u][2])}}else if(j===b)N[1][d[1]]=!0;else if(0===j&&d[1]===b)N[1][d[2]]=!0;else if(j===v)L=N[0],A.test(L)&&S.length&&(P=S[S.length-1][1],S.pop(),S[S.length-1][0][2][P]=e(N[0],N[1],N[2].length?N[2]:void 0));else if(0===j&&d[1]===h)void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?N[2].push.apply(N[2],d[2]):N[2].push(d[2]);else if(j===h)N[2].push(d[1]);else if(j!==C&&j!==O)throw new Error("unhandled: "+j)}if(T[2].length>1&&/^\s*$/.test(T[2][0])&&T[2].shift(),T[2].length>2||2===T[2].length&&/\S/.test(T[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(T[2][0])&&"string"==typeof T[2][0][0]&&Array.isArray(T[2][0][2])&&(T[2][0]=e(T[2][0][0],T[2][0][1],T[2][0][2])),T[2][0];function z(e){var t,r=[];a===k&&(a=y);for(var o=0;o<e.length;o++){var i=e.charAt(o);a===h&&"<"===i?(l.length&&r.push([h,l]),l="",a=m):">"===i&&(t=a)!==w&&t!==_&&a!==E?(a===m?r.push([m,l]):a===b?r.push([b,l]):a===x&&l.length&&r.push([x,l]),r.push([v]),l="",a=h):a===E&&/-$/.test(l)&&"-"===i?(n.comments&&r.push([x,l.substr(0,l.length-1)],[v]),l="",a=h):a===m&&/^!--$/.test(l)?(n.comments&&r.push([m,l],[b,"comment"],[C]),l=i,a=E):a===h||a===E?l+=i:a===m&&/\s/.test(i)?(r.push([m,l]),l="",a=y):a===m?l+=i:a===y&&/[^\s"'=/]/.test(i)?(a=b,l=i):a===y&&/\s/.test(i)?(l.length&&r.push([b,l]),r.push([O])):a===b&&/\s/.test(i)?(r.push([b,l]),l="",a=g):a===b&&"="===i?(r.push([b,l],[C]),l="",a=k):a===b?l+=i:a!==g&&a!==y||"="!==i?a!==g&&a!==y||/\s/.test(i)?a===k&&'"'===i?a=_:a===k&&"'"===i?a=w:a===_&&'"'===i?(r.push([x,l],[O]),l="",a=y):a===w&&"'"===i?(r.push([x,l],[O]),l="",a=y):a!==k||/\s/.test(i)?a===x&&/\s/.test(i)?(r.push([x,l],[O]),l="",a=y):a!==x&&a!==w&&a!==_||(l+=i):(a=x,o--):(r.push([O]),/[\w-]/.test(i)?(l+=i,a=b):a=y):(r.push([C]),a=k)}return a===h&&l.length?(r.push([h,l]),l=""):a===x&&l.length?(r.push([x,l]),l=""):a===_&&l.length?(r.push([x,l]),l=""):a===w&&l.length?(r.push([x,l]),l=""):a===b&&(r.push([b,l]),l=""),r}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":o(e))?e:r("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),D=(F.createElement,n(function(e){!function(){var n={}.hasOwnProperty;function t(){for(var e=[],r=0;r<arguments.length;r++){var i=arguments[r];if(i){var a=void 0===i?"undefined":o(i);if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i))e.push(t.apply(null,i));else if("object"===a)for(var l in i)n.call(i,l)&&i[l]&&e.push(l)}}return e.join(" ")}e.exports?e.exports=t:window.classNames=t}()})),z=d(['<a href="','" class="','">\n      ',"\n      ","\n      ","\n      ","\n    </a>"],['<a href="','" class="','">\n      ',"\n      ","\n      ","\n      ","\n    </a>"]),G=d(['<axa-icon id="','" classes="m-link__icon"></axa-icon>'],['<axa-icon id="','" classes="m-link__icon"></axa-icon>']),I=d(['<axa-icon id="arrow" classes="m-link__listed"></axa-icon>'],['<axa-icon id="arrow" classes="m-link__listed"></axa-icon>']),$=d(['<axa-icon id="arrow" classes="m-link__arrow"></axa-icon>'],['<axa-icon id="arrow" classes="m-link__arrow"></axa-icon>']);function q(e,n){var t,r=e.color,o=e.size,i=e.motion,a=e.arrow,s=e.href,c=void 0===s?"#":s,u=e.listed,f=e.icon,d=e.deco,p=D("m-link",(l(t={},"m-link--"+r,r),l(t,"m-link--"+o,o),l(t,"m-link--motion",i),l(t,"m-link--arrow",a),l(t,"m-link--listed",u),l(t,"m-link--icon",f),l(t,"m-link--deco",d),t));return F(z,c,p,f&&F(G,f),u&&F(I),n,a&&F($))}var V=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function B(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(V.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}var W=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,H=/[-_]+/g;function Z(e,n){return 0==+e||H.test(e)?"":0===n?e.toLowerCase():e.toUpperCase()}var J=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,r=void 0!==t&&t,o=n.cancelable,i=void 0!==o&&o,a=n.detail,l=void 0===a?void 0:a,s=document.createEvent("CustomEvent");s.initCustomEvent(e,r,i,l);var c=s.preventDefault;return s.preventDefault=function(){c.call(s);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},s}}();function U(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new J(n,s({},r,{detail:t}));e.dispatchEvent(o)}var K=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var n=Object.defineProperty({},"passive",{get:function(){e=!0}}),t=function(){};window.addEventListener("testPassiveEventSupport",t,n),window.removeEventListener("testPassiveEventSupport",t,n)}return e}();function Q(e,n){var t,r;return(t=n,new RegExp("^"+t+"$|^"+t+"\\s|\\s"+t+"\\s|\\s"+t+"$",r)).test(e.className)}var X=/\s+/,Y={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),r=t.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=t[i]])return n[o];return""}()};function ee(e,n,t,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=i.capture,l=void 0!==a&&a,s=i.passive,c=void 0===s||s;if(Y[n]&&(n=Y[n]),!e||!n)return null;var u=void 0===t?"undefined":o(t),f=t&&"string"===u;if("function"===u){if(r){var d=r;l=d.capture,c=d.passive}r=t}for(var p=K?{capture:l,passive:c}:l,h=f?function(n){var o=n.target;for(;!Q(o,t)&&o!==e;)o=o.parentNode;if(o!==e)return r(n,o)}:r,m=n.split(X),v=m.length,y=0;y<v;++y)e.addEventListener(m[y],h,p);return function n(){for(var t=0;t<v;++t)e.removeEventListener(m[t],h,p);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),r=t.length,o=0;o<r;++o){var i=t[o];if(e[i]===n)return delete e[i]}}(this,n)}}var ne={};function te(e,n){var t=ee(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);ne[e]||(ne[e]={count:0});var r,o=ne[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.leading,o=void 0!==r&&r,i=t.trailing,a=void 0===i||i,l=t.maxWait,s=void 0!==l&&l,c=void 0,u=void 0,f=void 0,d=void 0,h=!1,m=n!==s,v=!1!==s;function y(){for(var t=arguments.length,r=Array(t),i=0;i<t;i++)r[i]=arguments[i];return c=r,m&&(u&&clearTimeout(u),u=setTimeout(b,n)),v&&!f&&(f=setTimeout(g,s)),o&&!h&&(h=!0,d=e.apply(void 0,p(c))),d}return y.flush=function(){return(u||f)&&(d=e.apply(void 0,p(c))),x(),d},y.cancel=x,y;function b(){f&&clearTimeout(f),k()}function g(){u&&clearTimeout(u),k()}function k(){a&&(d=e.apply(void 0,p(c))),u=null,f=null,h=!1}function x(){u&&(clearTimeout(u),u=null),f&&(clearTimeout(f),f=null),c=void 0,h=!1}}((r=e,function(){U(document,"pubsub/onsubscribe",r),U(document,"pubsub/onsubscribe/"+r,r),ne[r]&&delete ne[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,t.call(this),o.count<=0&&delete ne[e]}}function re(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}ee(document,"pubsub/onsubscribe",function(e){var n=e.detail;ne[n]||(ne[n]={count:0});var t=ne[n],r=t.queue;Array.isArray(r)&&(r.forEach(function(e){var n=f(e,3),t=n[0],r=n[1],o=n[2];U(o,t,r)}),delete t.queue)}),Object.setPrototypeOf(re.prototype,HTMLElement.prototype),Object.setPrototypeOf(re,HTMLElement);var oe,ie,ae,le={},se="throwed",ce=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];i(this,n);var r=u(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return r._makeContextReady=r._makeContextReady.bind(r),r._initialise(e,t),r}return c(n,re),a(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var r=n(function(e){if(!e.hasAttributes)return null;for(var n,t={},r=e.attributes,o=r.length,i=0;i<o;++i){var a=r[i],l=a.name;t[(n=l,n.replace(W,Z))]=B(a)}return t}(this),t);if(Array.isArray(r))r.forEach(function(n){e.appendChild(n)});else if(r){if("string"==typeof r){var o=new Error(se);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),o}this.appendChild(r)}this._hasRendered=!0}catch(o){o.message!==se&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+o+"\n\nStack Trace: "+o.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;ne[e]||(ne[e]={count:0,queue:[]});var r=ne[e].queue;Array.isArray(r)?r.push([e,n,t]):U(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=te("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ue=(function(e){function n(){return i(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}c(n,ce),a(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return i(this,n),u(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return c(n,ce),a(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce.uuidv4();if(e&&!le[e]){var t=document.createElement("style"),r=document.createTextNode(e);t.appendChild(r),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),le[e]=!0}}}]),n}()),fe=function(n){function t(){return i(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,q))}return c(t,ue),t}();return oe=function(){window.customElements.define("axa-link",fe),ue.appendGlobalStyles(e)},ie=0,ae=function(){if(0===ie)try{oe.apply(void 0,arguments),ie+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ae,!1),document.addEventListener("WebComponentsReady",ae,!1),fe});
