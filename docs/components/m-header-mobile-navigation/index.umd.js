!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.StyleGuideWebComponent=n()}(this,function(){"use strict";function e(e,n){return e(n={exports:{}},n.exports),n.exports}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o=function e(n,t,i){null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,t);if(void 0===a){var o=Object.getPrototypeOf(n);return null===o?void 0:e(o,t,i)}if("value"in a)return a.value;var r=a.get;return void 0!==r?r.call(i):void 0},r=function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)},s=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n},l=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))},u=function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)},d=e(function(e){!function(){var t={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var r=void 0===o?"undefined":n(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(i.apply(null,o));else if("object"===r)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=i:window.classNames=i}()}),h="@-webkit-keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n@keyframes fadeOutRightInLeft {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0); }\n  51% {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0); }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none; } }\n\n.m-header-mobile-navigation {\n  display: block; }\n  .m-header-mobile-navigation:first-child {\n    margin-top: -20px; }\n\n.m-header-mobile-navigation--relative {\n  position: relative;\n  overflow: hidden; }\n\n.m-header-mobile-navigation__nav {\n  display: block;\n  background: #fff; }\n  .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    z-index: 1050;\n    min-height: 100%;\n    -webkit-transform: translate3d(110%, 0, 0);\n            transform: translate3d(110%, 0, 0);\n    -webkit-transition: -webkit-transform 0.2s ease;\n    transition: -webkit-transform 0.2s ease;\n    transition: transform 0.2s ease;\n    transition: transform 0.2s ease, -webkit-transform 0.2s ease; }\n    @media (min-width: 576px) {\n      .m-header-mobile-navigation__nav .m-header-mobile-navigation__nav {\n        left: 10px;\n        -webkit-box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3);\n                box-shadow: -5px 0 10px -5px rgba(0, 0, 0, 0.3); } }\n  .is-header-mobile-navigation-nav-open > .m-header-mobile-navigation__nav {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0); }\n\n.m-header-mobile-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none; }\n\n.m-header-mobile-navigation__list-item {\n  display: block;\n  border-bottom: 1px solid #ccc; }\n  .m-header-mobile-navigation__list-item:first-child {\n    border-top: 1px solid #ccc; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back,\n.m-header-mobile-navigation__list-link {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  color: #00008f;\n  cursor: pointer;\n  position: relative;\n  display: block;\n  padding-left: 60px;\n  padding-right: 40px;\n  text-transform: uppercase; }\n  .m-header-mobile-navigation__category.is-header-mobile-navigation-active, .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus,\n  .m-header-mobile-navigation__list-link.is-header-mobile-navigation-active,\n  .m-header-mobile-navigation__list-link:hover,\n  .m-header-mobile-navigation__list-link:active,\n  .m-header-mobile-navigation__list-link:focus {\n    color: #00005b; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__back {\n  background: transparent;\n  border: none;\n  background: transparent;\n  text-align: left; }\n  .m-header-mobile-navigation__category:hover, .m-header-mobile-navigation__category:active, .m-header-mobile-navigation__category:focus,\n  .m-header-mobile-navigation__back:hover,\n  .m-header-mobile-navigation__back:active,\n  .m-header-mobile-navigation__back:focus {\n    outline: none;\n    cursor: pointer; }\n\n.m-header-mobile-navigation__category,\n.m-header-mobile-navigation__list-link {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__category,\n    .m-header-mobile-navigation__list-link {\n      font-size: 16px; } }\n\n.m-header-mobile-navigation__category {\n  padding-right: 70px; }\n\n.m-header-mobile-navigation__back {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 105px; }\n  @media (min-width: 576px) {\n    .m-header-mobile-navigation__back {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-mobile-navigation__icon-next,\n.m-header-mobile-navigation__icon-back {\n  width: 15px;\n  height: 15px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  margin-top: -7.5px;\n  pointer-events: none; }\n\n.m-header-mobile-navigation__icon-next {\n  right: 40px;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.m-header-mobile-navigation__icon-back {\n  left: 60px;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg); }\n",f=function(e){return function(n,t,i){for(var a in t)a in p&&(t[p[a]]=t[a],delete t[a]);return e(n,t,i)}},p={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var m=1,v=2,b=3,g=4,y=5,_=6,x=7,k=8,w=9,C=10,O=11,E=12,N=13;var S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var j=/\n[\s]+$/,A=/^\n[\s]+/,T=/[\s]+$/,L=/^[\s]+/,P=/[\n\s]+/g,F=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],M=["code","pre"],D=function e(n,t){if(Array.isArray(t))for(var i,a,o=n.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var c=t[s];if(Array.isArray(c))e(n,c);else{("number"==typeof c||"boolean"==typeof c||"function"==typeof c||c instanceof Date||c instanceof RegExp)&&(c=c.toString());var u=n.childNodes[n.childNodes.length-1];if("string"==typeof c)r=!0,u&&"#text"===u.nodeName?u.nodeValue+=c:(c=document.createTextNode(c),n.appendChild(c),u=c),s===l-1&&(r=!1,-1===F.indexOf(o)&&-1===M.indexOf(o)?""===(i=u.nodeValue.replace(A,"").replace(T,"").replace(j,"").replace(P," "))?n.removeChild(u):u.nodeValue=i:-1===M.indexOf(o)&&(a=0===s?"":" ",i=u.nodeValue.replace(A,a).replace(L," ").replace(T,"").replace(j,"").replace(P," "),u.nodeValue=i));else if(c&&c.nodeType){r&&(r=!1,-1===F.indexOf(o)&&-1===M.indexOf(o)?""===(i=u.nodeValue.replace(A,"").replace(j,"").replace(P," "))?n.removeChild(u):u.nodeValue=i:-1===M.indexOf(o)&&(i=u.nodeValue.replace(L," ").replace(A,"").replace(j,"").replace(P," "),u.nodeValue=i));var d=c.nodeName;d&&(o=d.toLowerCase()),n.appendChild(c)}}}},R=e(function(e){var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",a=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,n,s){var l;-1!==r.indexOf(e)&&(n.namespace=t);var c=!1;if(n.namespace&&(c=n.namespace,delete n.namespace),c)l=document.createElementNS(c,e);else{if(e===o)return document.createComment(n.comment);l=document.createElement(e)}for(var u in n)if(n.hasOwnProperty(u)){var d=u.toLowerCase(),h=n[u];if("classname"===d&&(d="class",u="class"),"htmlFor"===u&&(u="for"),-1!==a.indexOf(d))if("true"===h)h=d;else if("false"===h)continue;"on"===d.slice(0,2)?l[u]=h:c?"xlink:href"===u?l.setAttributeNS(i,u,h):/^xmlns($|:)/i.test(u)||l.setAttributeNS(null,u,h):l.setAttribute(u,h)}return D(l,s),l}e.exports=function(e,t){t||(t={});var i=t.concat||function(e,n){return String(e)+String(n)};return!1!==t.attrToProp&&(e=f(e)),function(o){for(var r=m,s="",l=arguments.length,c=[],u=0;u<o.length;u++)if(u<l-1){var d=arguments[u+1],h=z(o[u]),f=r;f===C&&(f=k),f===w&&(f=k),f===x&&(f=k),f===g&&(f=y),h.push([0,f,d]),c.push.apply(c,h)}else c.push.apply(c,z(o[u]));var p,j=[null,{},[]],A=[[j,-1]];for(u=0;u<c.length;u++){var T=A[A.length-1][0],L=(h=c[u])[0];if(L===v&&/^\//.test(h[1])){var P=A[A.length-1][1];A.length>1&&(A.pop(),A[A.length-1][0][2][P]=e(T[0],T[1],T[2].length?T[2]:void 0))}else if(L===v){var F=[h[1],{},[]];T[2].push(F),A.push([F,T[2].length-1])}else if(L===y||0===L&&h[1]===y){for(var M,D="";u<c.length;u++)if(c[u][0]===y)D=i(D,c[u][1]);else{if(0!==c[u][0]||c[u][1]!==y)break;if("object"!==n(c[u][2])||D)D=i(D,c[u][2]);else for(M in c[u][2])c[u][2].hasOwnProperty(M)&&!T[1][M]&&(T[1][M]=c[u][2][M])}c[u][0]===O&&u++;for(var R=u;u<c.length;u++)if(c[u][0]===k||c[u][0]===y)T[1][D]?""===c[u][1]||(T[1][D]=i(T[1][D],c[u][1])):T[1][D]=a(c[u][1]);else{if(0!==c[u][0]||c[u][1]!==k&&c[u][1]!==y){!D.length||T[1][D]||u!==R||c[u][0]!==b&&c[u][0]!==E||(T[1][D]=D.toLowerCase()),c[u][0]===b&&u--;break}T[1][D]?""===c[u][2]||(T[1][D]=i(T[1][D],c[u][2])):T[1][D]=a(c[u][2])}}else if(L===y)T[1][h[1]]=!0;else if(0===L&&h[1]===y)T[1][h[2]]=!0;else if(L===b)p=T[0],S.test(p)&&A.length&&(P=A[A.length-1][1],A.pop(),A[A.length-1][0][2][P]=e(T[0],T[1],T[2].length?T[2]:void 0));else if(0===L&&h[1]===m)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?T[2].push.apply(T[2],h[2]):T[2].push(h[2]);else if(L===m)T[2].push(h[1]);else if(L!==O&&L!==E)throw new Error("unhandled: "+L)}if(j[2].length>1&&/^\s*$/.test(j[2][0])&&j[2].shift(),j[2].length>2||2===j[2].length&&/\S/.test(j[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(j[2][0])&&"string"==typeof j[2][0][0]&&Array.isArray(j[2][0][2])&&(j[2][0]=e(j[2][0][0],j[2][0][1],j[2][0][2])),j[2][0];function z(e){var n,i=[];r===x&&(r=g);for(var a=0;a<e.length;a++){var o=e.charAt(a);r===m&&"<"===o?(s.length&&i.push([m,s]),s="",r=v):">"===o&&(n=r)!==w&&n!==C&&r!==N?(r===v?i.push([v,s]):r===y?i.push([y,s]):r===k&&s.length&&i.push([k,s]),i.push([b]),s="",r=m):r===N&&/-$/.test(s)&&"-"===o?(t.comments&&i.push([k,s.substr(0,s.length-1)],[b]),s="",r=m):r===v&&/^!--$/.test(s)?(t.comments&&i.push([v,s],[y,"comment"],[O]),s=o,r=N):r===m||r===N?s+=o:r===v&&/\s/.test(o)?(i.push([v,s]),s="",r=g):r===v?s+=o:r===g&&/[^\s"'=/]/.test(o)?(r=y,s=o):r===g&&/\s/.test(o)?(s.length&&i.push([y,s]),i.push([E])):r===y&&/\s/.test(o)?(i.push([y,s]),s="",r=_):r===y&&"="===o?(i.push([y,s],[O]),s="",r=x):r===y?s+=o:r!==_&&r!==g||"="!==o?r!==_&&r!==g||/\s/.test(o)?r===x&&'"'===o?r=C:r===x&&"'"===o?r=w:r===C&&'"'===o?(i.push([k,s],[E]),s="",r=g):r===w&&"'"===o?(i.push([k,s],[E]),s="",r=g):r!==x||/\s/.test(o)?r===k&&/\s/.test(o)?(i.push([k,s],[E]),s="",r=g):r!==k&&r!==w&&r!==C||(s+=o):(r=k,a--):(i.push([E]),/[\w-]/.test(o)?(s+=o,r=y):r=g):(i.push([O]),r=x)}return r===m&&s.length?(i.push([m,s]),s=""):r===k&&s.length?(i.push([k,s]),s=""):r===C&&s.length?(i.push([k,s]),s=""):r===w&&s.length?(i.push([k,s]),s=""):r===y&&(i.push([y,s]),s=""),i}};function a(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":n(e))?e:i("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),z=(R.createElement,c(['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "],['\n    <li class="m-header-mobile-navigation__list-item">\n      ',"\n    </li>\n  "])),B=c(['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        '],['<button type="button" class="m-header-mobile-navigation__category js-header-mobile-navigation__category ','">\n          ','\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-next"></axa-icon>\n        </button>\n        ']),G=c(['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link js-header-mobile-close ','"\n           href="','">',"</a>\n      "],['\n        <a class="m-header-mobile-navigation__list-link js-header-mobile-navigation__list-link js-header-mobile-close ','"\n           href="','">',"</a>\n      "]),$=c(['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-mobile-navigation__nav ','">\n      ','\n      <ul class="m-header-mobile-navigation__list">\n        ',"\n        ","\n      </ul>\n    </div>\n  "]),q=c(['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "],['\n        <button type="button" class="m-header-mobile-navigation__back js-header-mobile-navigation__back">\n          <axa-icon id="angle-bracket-down" classes="m-header-mobile-navigation__icon-back"></axa-icon>\n          ',"\n        </button>\n      "]);function V(e){var n=e.name,t=e.url,i=e.isActive,a=e.items,o=i?"is-header-mobile-navigation-active":"";return R(z,!!a?[R(B,o,n),I(a,e)]:R(G,o,t,n))}function I(e,n){return R($,!n&&"js-header-mobile-navigation__nav",n&&R(q,n.name),n&&V(a({},n,{name:"index page",items:null})),e.map(V))}var W=function(e){return I(e.items)},H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function U(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(H.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}var Z=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,J=/[-_]+/g;function K(e,n){return 0==+e||J.test(e)?"":0===n?e.toLowerCase():e.toUpperCase()}var Q=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return n;function n(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,a=n.cancelable,o=void 0!==a&&a,r=n.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,o,s);var c=l.preventDefault;return l.preventDefault=function(){c.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}();function X(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new Q(n,a({},i,{detail:t}));e.dispatchEvent(o)}var Y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var n=Object.defineProperty({},"passive",{get:function(){e=!0}}),t=function(){};window.addEventListener("testPassiveEventSupport",t,n),window.removeEventListener("testPassiveEventSupport",t,n)}return e}(),ee=/^\s+|\s{2,}|\s+$/g;function ne(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}function te(e,n){return ne(n).test(e.className)}function ie(e,n){if(te(e,n)){var t=ne(n,"g");e.className=e.className.replace(t," ").replace(ee," ")}}var ae=/\s+/,oe={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,a=void 0,o=0;o<i;++o)if(void 0!==e[a=t[o]])return n[a];return""}()};function re(e,t,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=o.capture,s=void 0!==r&&r,l=o.passive,c=void 0===l||l;if(oe[t]&&(t=oe[t]),!e||!t)return null;var u=void 0===i?"undefined":n(i),d=i&&"string"===u;if("function"===u){if(a){var h=a;s=h.capture,c=h.passive}a=i}for(var f=Y?{capture:s,passive:c}:s,p=d?function(n){var t=n.target;for(;!te(t,i)&&t!==e;)t=t.parentNode;if(t!==e)return a(n,t)}:a,m=t.split(ae),v=m.length,b=0;b<v;++b)e.addEventListener(m[b],p,f);return function n(){for(var t=0;t<v;++t)e.removeEventListener(m[t],p,f);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,a=0;a<i;++a){var o=t[a];if(e[o]===n)return delete e[o]}}(this,n)}}var se={};function le(e,n){var t=re(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);se[e]||(se[e]={count:0});var i,a=se[e];return a.count++,a.onsubscribe||(a.onsubscribe=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.leading,a=void 0!==i&&i,o=t.trailing,r=void 0===o||o,s=t.maxWait,l=void 0!==s&&s,c=void 0,d=void 0,h=void 0,f=void 0,p=!1,m=n!==l,v=!1!==l;function b(){for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return c=i,m&&(d&&clearTimeout(d),d=setTimeout(g,n)),v&&!h&&(h=setTimeout(y,l)),a&&!p&&(p=!0,f=e.apply(void 0,u(c))),f}return b.flush=function(){return(d||h)&&(f=e.apply(void 0,u(c))),x(),f},b.cancel=x,b;function g(){h&&clearTimeout(h),_()}function y(){d&&clearTimeout(d),_()}function _(){r&&(f=e.apply(void 0,u(c))),d=null,h=null,p=!1}function x(){d&&(clearTimeout(d),d=null),h&&(clearTimeout(h),h=null),c=void 0,p=!1}}((i=e,function(){X(document,"pubsub/onsubscribe",i),X(document,"pubsub/onsubscribe/"+i,i),se[i]&&delete se[i].unsubscribe}),100)),a.onsubscribe(),function(){a.count--,t.call(this),a.count<=0&&delete se[e]}}function ce(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}re(document,"pubsub/onsubscribe",function(e){var n=e.detail;se[n]||(se[n]={count:0});var t=se[n],i=t.queue;Array.isArray(i)&&(i.forEach(function(e){var n=l(e,3),t=n[0],i=n[1],a=n[2];X(a,t,i)}),delete t.queue)}),Object.setPrototypeOf(ce.prototype,HTMLElement.prototype),Object.setPrototypeOf(ce,HTMLElement);var ue={},de="throwed",he=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];t(this,n);var a=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return a._makeContextReady=a._makeContextReady.bind(a),a._initialise(e,i),a}return r(n,ce),i(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n,t={},i=e.attributes,a=i.length,o=0;o<a;++o){var r=i[o],s=r.name;t[(n=s,n.replace(Z,K))]=U(r)}return t}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var a=new Error(de);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(i)}this._hasRendered=!0}catch(a){a.message!==de&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;se[e]||(se[e]={count:0,queue:[]});var i=se[e].queue;Array.isArray(i)?i.push([e,n,t]):X(t,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=le("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),fe=(function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}r(n,he),i(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return t(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return r(n,he),i(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.uuidv4();if(e&&!ue[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ue[e]=!0}}}]),n}()),pe=function(){function e(n,i){t(this,e),this.wcNode=n,this.options=a({},e.DEFAULTS,i),this.isOpen=!1,this.opened=[],this.handleCategoryClick=this.handleCategoryClick.bind(this),this.handleBackClick=this.handleBackClick.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this),this.fadeFinish=this.fadeFinish.bind(this),this.init()}return i(e,[{key:"init",value:function(){this.nav=this.wcNode.querySelector(this.options.nav),this.on()}},{key:"on",value:function(){this.off(),this.unCategoryClick=re(this.nav,"click",this.options.category,this.handleCategoryClick,{passive:!1}),this.unBackClick=re(this.nav,"click",this.options.back,this.handleBackClick,{passive:!1})}},{key:"off",value:function(){this.unCategoryClick&&this.unCategoryClick(),this.unBackClick&&this.unBackClick(),this.offContextEnabled()}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeOpen=le("header-mobile/open",this.open,this._contextNode),this.unSubscribeClose=le("header-mobile/close",this.close,this._contextNode),this.unSubscribeFadeFinish=le("header-mobile/fade-finish",this.fadeFinish,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeOpen&&this.unSubscribeOpen(),this.unSubscribeClose&&this.unSubscribeClose()}},{key:"open",value:function(){this.isOpen=!0}},{key:"close",value:function(){this.isOpen=!1}},{key:"fadeFinish",value:function(){if(!this.isOpen)for(var e=this.opened.pop();e;){ie(e.parentNode,this.options.isSubMenuOpenClass),e=this.opened.pop()}}},{key:"handleCategoryClick",value:function(e,n){this.options.preventDefault||e.preventDefault();var t,i,a=n.parentNode;if(a.lastChild!==n){var o=this.wcNode.parentNode.parentNode,r=o.scrollTop;t=a,i=this.options.isSubMenuOpenClass,te(t,i)||(t.className+=" "+i),o.scrollTop=0,this.opened.push({parentNode:a,scrollTop:r})}}},{key:"handleBackClick",value:function(e){this.options.preventDefault||e.preventDefault();var n=this.opened.pop(),t=n.parentNode,i=n.scrollTop,a=this.wcNode.parentNode.parentNode;ie(t,this.options.isSubMenuOpenClass),a.scrollTop=i}},{key:"destroy",value:function(){this.off(),delete this.wcNode,delete this.nav,delete this._contextNode,delete this.opened}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),e}();pe.DEFAULTS={nav:".js-header-mobile-navigation__nav",category:"js-header-mobile-navigation__category",back:"js-header-mobile-navigation__back",isSubMenuOpenClass:"is-header-mobile-navigation-nav-open"};var me,ve,be,ge=function(e){function n(){t(this,n);var e=s(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,h,W));return e.selectContext("axa-header"),e}return r(n,fe),i(n,[{key:"connectedCallback",value:function(){o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"connectedCallback",this).call(this);var e=U(this,"relative");this.className=d(this.initialClassName,"m-header-mobile-navigation",{"m-header-mobile-navigation--relative":e}),this.interaction=new pe(this)}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}},{key:"disconnectedCallback",value:function(){o(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}}]),n}();return me=function(){window.customElements.define("axa-header-mobile-navigation",ge)},ve=0,be=function(){if(0===ve)try{me.apply(void 0,arguments),ve+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",be,!1),document.addEventListener("WebComponentsReady",be,!1),ge});
