var StyleGuideWebComponent=function(){"use strict";function e(e,n){return n={exports:{}},e(n,n.exports),n.exports}function n(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function t(e,n,t){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new J(n,Z({},i,{detail:t}));e.dispatchEvent(a)}function i(e,n,t,i){function a(){for(var n=0;n<u;++n)e.removeEventListener(l[n],s,o);!function(e,n){if(!e)return!1;for(var t=Object.keys(e),i=t.length,a=0;a<i;++a){var o=t[a];if(e[o]===n)return delete e[o]}}(this,a)}var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(U[n]&&(n=U[n]),!e||!n)return null;var r=void 0===t?"undefined":K(t);"function"===r&&(o=!!i,i=t);for(var s=t&&"string"===r?function(n){for(var a=n.target;!function(e,n){return function(e,n){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",n)}(n).test(e.className)}(a,t)&&a!==e;)a=a.parentNode;if(a!==e)return i(n,a)}:i,l=n.split(Q),u=l.length,d=0;d<u;++d)e.addEventListener(l[d],s,o);return a}function a(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function s(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function l(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=e(function(e){!function(){function n(){for(var e=[],i=0;i<arguments.length;i++){var a=arguments[i];if(a){var o=void 0===a?"undefined":u(a);if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a))e.push(n.apply(null,a));else if("object"===o)for(var r in a)t.call(a,r)&&a[r]&&e.push(r)}}return e.join(" ")}var t={}.hasOwnProperty;e.exports?e.exports=n:window.classNames=n}()}),c=".m-header-sub-navigation {\n  display: none;\n  background: #fff;\n  border-bottom: 2px solid #ccc;\n  -webkit-box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 3px 10px -2px rgba(0, 0, 0, 0.3); }\n  .is-header-sub-navigation-open .m-header-sub-navigation {\n    display: block; }\n\n.m-header-sub-navigation--flyout {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1050;\n  width: 100%;\n  margin-top: 2px; }\n\n.m-header-sub-navigation__index {\n  background: #fafafa; }\n\n.m-header-sub-navigation__index-box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 60px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__index-box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__index-link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__index-link:hover, .m-header-sub-navigation__index-link:active, .m-header-sub-navigation__index-link:focus {\n    text-decoration: none;\n    font-weight: 600; }\n\n.m-header-sub-navigation__index-close {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  position: relative;\n  padding-right: 44px;\n  margin-left: auto;\n  text-transform: uppercase;\n  border: none;\n  background: transparent;\n  color: #00008f; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__index-close {\n      font-size: 13px;\n      line-height: 1.38; } }\n  .m-header-sub-navigation__index-close:hover, .m-header-sub-navigation__index-close:active, .m-header-sub-navigation__index-close:focus {\n    color: #00005b;\n    cursor: pointer;\n    outline: none; }\n\n.m-header-sub-navigation__index-close__icon {\n  width: 23px;\n  height: 23px;\n  display: block;\n  fill: currentColor;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  margin-top: -11.5px; }\n\n.m-header-sub-navigation__box {\n  padding-right: 15px;\n  padding-left: 15px;\n  width: 100%;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: auto;\n  padding-top: 30px;\n  padding-bottom: 40px; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__box {\n      max-width: 540px; } }\n  @media (min-width: 768px) {\n    .m-header-sub-navigation__box {\n      max-width: 720px; } }\n  @media (min-width: 992px) {\n    .m-header-sub-navigation__box {\n      max-width: 960px; } }\n  @media (min-width: 1200px) {\n    .m-header-sub-navigation__box {\n      max-width: 1140px; } }\n\n.m-header-sub-navigation__row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -30px;\n  margin-left: -30px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n  .m-header-sub-navigation__row + .m-header-sub-navigation__row > .m-header-sub-navigation__block {\n    padding-top: 30px; }\n\n.m-header-sub-navigation__row--col-2 {\n  margin-right: -45px;\n  margin-left: -45px; }\n\n.m-header-sub-navigation__row--col-3 {\n  margin-right: -65px;\n  margin-left: -65px; }\n\n.m-header-sub-navigation__block {\n  max-width: 25%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  padding: 0 30px;\n  border-left: 1px solid #ccc; }\n  .m-header-sub-navigation__block:first-child {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(2n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-2 .m-header-sub-navigation__block:nth-child(n + 3) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(3n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-3 .m-header-sub-navigation__block:nth-child(n + 4) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(4n + 1) {\n    border: none; }\n  .m-header-sub-navigation__row--col-4 .m-header-sub-navigation__block:nth-child(n + 5) {\n    padding-top: 30px; }\n  .m-header-sub-navigation__block:nth-last-child(1):first-child,\n  .m-header-sub-navigation__block:nth-last-child(1):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%; }\n  .m-header-sub-navigation__block:nth-last-child(2):first-child,\n  .m-header-sub-navigation__block:nth-last-child(2):first-child ~ * {\n    max-width: 25%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    padding-right: 45px;\n    padding-left: 45px; }\n  .m-header-sub-navigation__block:nth-last-child(3n):first-child,\n  .m-header-sub-navigation__block:nth-last-child(3n):first-child ~ * {\n    max-width: 33.33333%;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333%;\n            flex: 0 0 33.33333%;\n    padding-right: 65px;\n    padding-left: 65px; }\n\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child,\n.m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * {\n  max-width: 50%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child .m-header-sub-navigation__list,\n  .m-header-sub-navigation__block--wide:nth-last-child(2):first-child ~ * .m-header-sub-navigation__list {\n    -webkit-column-count: 2;\n            column-count: 2; }\n\n.m-header-sub-navigation__category {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0;\n  color: #00008f;\n  text-transform: uppercase; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__category {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-header-sub-navigation__list {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n  margin-top: 15px; }\n\n.m-header-sub-navigation__list-item {\n  display: block; }\n\n.m-header-sub-navigation__link {\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -webkit-hyphens: auto;\n      -ms-hyphens: auto;\n          hyphens: auto;\n  /* These are technically the same, but use both */\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.01em;\n  display: inline-block;\n  width: 100%;\n  padding: 4px 0;\n  line-height: 1.3 !important; }\n  @media (min-width: 576px) {\n    .m-header-sub-navigation__link {\n      font-size: 18px; } }\n  .m-header-sub-navigation__link.is-header-sub-navigation-active, .m-header-sub-navigation__link:hover, .m-header-sub-navigation__link:active, .m-header-sub-navigation__link:focus {\n    color: #00005b;\n    text-decoration: none;\n    font-weight: 600;\n    letter-spacing: -0.005em; }\n",h=function(e){return function(n,t,i){for(var a in t)a in f&&(t[f[a]]=t[a],delete t[a]);return e(n,t,i)}},f={class:"className",for:"htmlFor","http-equiv":"httpEquiv"},p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=1,b=2,v=3,g=4,x=5,_=6,y=7,w=8,k=9,C=10,O=11,A=12,E=13,S=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$"),j=/\n[\s]+$/,T=/^\n[\s]+/,N=/[\s]+$/,L=/^[\s]+/,P=/[\n\s]+/g,M=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],F=["code","pre"],z=function e(n,t){if(Array.isArray(t))for(var i,a,o=n.nodeName.toLowerCase(),r=!1,s=0,l=t.length;s<l;s++){var u=t[s];if(Array.isArray(u))e(n,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var d=n.childNodes[n.childNodes.length-1];if("string"==typeof u)r=!0,d&&"#text"===d.nodeName?d.nodeValue+=u:(u=document.createTextNode(u),n.appendChild(u),d=u),s===l-1&&(r=!1,-1===M.indexOf(o)&&-1===F.indexOf(o)?""===(i=d.nodeValue.replace(T,"").replace(N,"").replace(j,"").replace(P," "))?n.removeChild(d):d.nodeValue=i:-1===F.indexOf(o)&&(a=0===s?"":" ",i=d.nodeValue.replace(T,a).replace(L," ").replace(N,"").replace(j,"").replace(P," "),d.nodeValue=i));else if(u&&u.nodeType){r&&(r=!1,-1===M.indexOf(o)&&-1===F.indexOf(o)?""===(i=d.nodeValue.replace(T,"").replace(j,"").replace(P," "))?n.removeChild(d):d.nodeValue=i:-1===F.indexOf(o)&&(i=d.nodeValue.replace(L," ").replace(T,"").replace(j,"").replace(P," "),d.nodeValue=i));var c=u.nodeName;c&&(o=c.toLowerCase()),n.appendChild(u)}}}},R=e(function(e){function n(e,n,s){var l;-1!==r.indexOf(e)&&(n.namespace=t);var u=!1;if(n.namespace&&(u=n.namespace,delete n.namespace),u)l=document.createElementNS(u,e);else{if(e===o)return document.createComment(n.comment);l=document.createElement(e)}for(var d in n)if(n.hasOwnProperty(d)){var c=d.toLowerCase(),h=n[d];if("classname"===c&&(c="class",d="class"),"htmlFor"===d&&(d="for"),-1!==a.indexOf(c))if("true"===h)h=c;else if("false"===h)continue;"on"===c.slice(0,2)?l[d]=h:u?"xlink:href"===d?l.setAttributeNS(i,d,h):/^xmlns($|:)/i.test(d)||l.setAttributeNS(null,d,h):l.setAttribute(d,h)}return z(l,s),l}var t="http://www.w3.org/2000/svg",i="http://www.w3.org/1999/xlink",a=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];e.exports=function(e,n){function t(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":p(e))?e:i("",e)}n||(n={});var i=n.concat||function(e,n){return String(e)+String(n)};return!1!==n.attrToProp&&(e=h(e)),function(a){function o(e){var t=[];r===y&&(r=g);for(var i=0;i<e.length;i++){var a=e.charAt(i);r===m&&"<"===a?(s.length&&t.push([m,s]),s="",r=b):">"!==a||function(e){return e===k||e===C}(r)||r===E?r===E&&/-$/.test(s)&&"-"===a?(n.comments&&t.push([w,s.substr(0,s.length-1)],[v]),s="",r=m):r===b&&/^!--$/.test(s)?(n.comments&&t.push([b,s],[x,"comment"],[O]),s=a,r=E):r===m||r===E?s+=a:r===b&&/\s/.test(a)?(t.push([b,s]),s="",r=g):r===b?s+=a:r===g&&/[^\s"'=/]/.test(a)?(r=x,s=a):r===g&&/\s/.test(a)?(s.length&&t.push([x,s]),t.push([A])):r===x&&/\s/.test(a)?(t.push([x,s]),s="",r=_):r===x&&"="===a?(t.push([x,s],[O]),s="",r=y):r===x?s+=a:r!==_&&r!==g||"="!==a?r!==_&&r!==g||/\s/.test(a)?r===y&&'"'===a?r=C:r===y&&"'"===a?r=k:r===C&&'"'===a?(t.push([w,s],[A]),s="",r=g):r===k&&"'"===a?(t.push([w,s],[A]),s="",r=g):r!==y||/\s/.test(a)?r===w&&/\s/.test(a)?(t.push([w,s],[A]),s="",r=g):r!==w&&r!==k&&r!==C||(s+=a):(r=w,i--):(t.push([A]),/[\w-]/.test(a)?(s+=a,r=x):r=g):(t.push([O]),r=y):(r===b?t.push([b,s]):r===x?t.push([x,s]):r===w&&s.length&&t.push([w,s]),t.push([v]),s="",r=m)}return r===m&&s.length?(t.push([m,s]),s=""):r===w&&s.length?(t.push([w,s]),s=""):r===C&&s.length?(t.push([w,s]),s=""):r===k&&s.length?(t.push([w,s]),s=""):r===x&&(t.push([x,s]),s=""),t}for(var r=m,s="",l=arguments.length,u=[],d=0;d<a.length;d++)if(d<l-1){var c=arguments[d+1],h=o(a[d]),f=r;f===C&&(f=w),f===k&&(f=w),f===y&&(f=w),f===g&&(f=x),h.push([0,f,c]),u.push.apply(u,h)}else u.push.apply(u,o(a[d]));for(var j=[null,{},[]],T=[[j,-1]],d=0;d<u.length;d++){var N=T[T.length-1][0],L=(h=u[d])[0];if(L===b&&/^\//.test(h[1]))R=T[T.length-1][1],T.length>1&&(T.pop(),T[T.length-1][0][2][R]=e(N[0],N[1],N[2].length?N[2]:void 0));else if(L===b){var P=[h[1],{},[]];N[2].push(P),T.push([P,N[2].length-1])}else if(L===x||0===L&&h[1]===x){for(var M,F="";d<u.length;d++)if(u[d][0]===x)F=i(F,u[d][1]);else{if(0!==u[d][0]||u[d][1]!==x)break;if("object"!==p(u[d][2])||F)F=i(F,u[d][2]);else for(M in u[d][2])u[d][2].hasOwnProperty(M)&&!N[1][M]&&(N[1][M]=u[d][2][M])}u[d][0]===O&&d++;for(var z=d;d<u.length;d++)if(u[d][0]===w||u[d][0]===x)N[1][F]?""===u[d][1]||(N[1][F]=i(N[1][F],u[d][1])):N[1][F]=t(u[d][1]);else{if(0!==u[d][0]||u[d][1]!==w&&u[d][1]!==x){!F.length||N[1][F]||d!==z||u[d][0]!==v&&u[d][0]!==A||(N[1][F]=F.toLowerCase()),u[d][0]===v&&d--;break}N[1][F]?""===u[d][2]||(N[1][F]=i(N[1][F],u[d][2])):N[1][F]=t(u[d][2])}}else if(L===x)N[1][h[1]]=!0;else if(0===L&&h[1]===x)N[1][h[2]]=!0;else if(L===v){if(function(e){return S.test(e)}(N[0])&&T.length){var R=T[T.length-1][1];T.pop(),T[T.length-1][0][2][R]=e(N[0],N[1],N[2].length?N[2]:void 0)}}else if(0===L&&h[1]===m)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=i("",h[2])),Array.isArray(h[2][0])?N[2].push.apply(N[2],h[2]):N[2].push(h[2]);else if(L===m)N[2].push(h[1]);else if(L!==O&&L!==A)throw new Error("unhandled: "+L)}if(j[2].length>1&&/^\s*$/.test(j[2][0])&&j[2].shift(),j[2].length>2||2===j[2].length&&/\S/.test(j[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(j[2][0])&&"string"==typeof j[2][0][0]&&Array.isArray(j[2][0][2])&&(j[2][0]=e(j[2][0][0],j[2][0][1],j[2][0][2])),j[2][0]}}(n,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=n}),D=function(e){return"undefined"!=typeof window?function(){var n=document.createElement("div");return n.innerHTML=e,function(e){return Array.isArray(e)?e:[].slice.call(e)}(n.childNodes)}():function(){var n=new String(e);return n.__encoded=!0,n}()},G=n(['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link js-header-navigation-close ','" href="','">',"</a>\n  </li>\n"],['\n  <li class="m-header-sub-navigation__list-item">\n    <a class="m-header-sub-navigation__link js-header-navigation-close ','" href="','">',"</a>\n  </li>\n"]),B=n(['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"],['\n  <div class="m-header-sub-navigation__row m-header-sub-navigation__row--col-','">\n\n  ',"\n  </div>\n"]),$=n(['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "],['\n    <div class="m-header-sub-navigation__block ','">\n      <strong class="m-header-sub-navigation__category">\n        ','\n      </strong>\n\n      <ul class="m-header-sub-navigation__list">\n        ',"\n      </ul>\n    </div>\n  "]),q=n(['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"],['<a class="m-header-sub-navigation__category__link" href="','">',"</a>"]),V=n(['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>'],['\n        <div class="m-header-sub-navigation__index">\n          <div class="m-header-sub-navigation__index-box">\n            <a class="m-header-sub-navigation__index-link js-header-navigation-close" href="','">','</a>\n            <button type="button" class="m-header-sub-navigation__index-close js-header-navigation-close">\n              Close\n              <axa-icon id="cross-gap" classes="m-header-sub-navigation__index-close__icon"></axa-icon>\n            </button>\n          </div>\n        </div>']),W=n(['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "],['\n      <div class="m-header-sub-navigation__box">\n        ',"\n      </div>\n    "]),I=function(e){var n=e.items,t=e.indexurl,i=e.indextitle,a=[];return Array.isArray(n)&&(i&&t&&a.push(R(V,t,i)),a.push(R(W,n&&n.map(function(e){var n=e.columns,t=e.col,i=e.isWide;return R(B,t||function(e){var t=n.length;return 2===t?t:t%3==0&&t%4!=0?3:4}(),n&&n.map(function(e){var n=e.links,t=e.title,a=e.url;return R($,i?"m-header-sub-navigation__block--wide":"",a?R(q,a,t):t,n&&n.map(function(e){var n=e.url,t=e.name,i=e.isActive;return R(G,i?"is-header-sub-navigation-active":"",n,D(t))}))}))})))),a},H=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/,J=function(){function e(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.bubbles,i=void 0!==t&&t,a=n.cancelable,o=void 0!==a&&a,r=n.detail,s=void 0===r?void 0:r,l=document.createEvent("CustomEvent");l.initCustomEvent(e,i,o,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}try{var n=new window.CustomEvent("test");if(n.preventDefault(),!0!==n.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return e}(),Z=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=/\s+/,U={transitionend:function(){for(var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},t=Object.keys(n),i=t.length,a=void 0,o=0;o<i;++o)if(a=t[o],void 0!==e[a])return n[a];return null}()},X=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],i=!0,a=!1,o=void 0;try{for(var r,s=e[Symbol.iterator]();!(i=(r=s.next()).done)&&(t.push(r.value),!n||t.length!==n);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&s.return&&s.return()}finally{if(a)throw o}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y={};i(document,"pubsub/onsubscribe",function(e){var n=e.detail;Y[n]||(Y[n]={count:0});var i=Y[n],a=i.queue;Array.isArray(a)&&(a.forEach(function(e){var n=X(e,3),i=n[0],a=n[1];t(n[2],i,a)}),delete i.queue)});var ee=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();Object.setPrototypeOf(l.prototype,HTMLElement.prototype),Object.setPrototypeOf(l,HTMLElement);var ne={},te=function(e){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];o(this,n);var i=r(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return i._makeContextReady=i._makeContextReady.bind(i),i._initialise(e,t),i}return s(n,l),ee(n,[{key:"_initialise",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=n}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var n=document.createElement("style"),t=document.createTextNode(this._styles);n.appendChild(t),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",n):e.appendChild(n)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var n=this._template;if(n)try{for(var t=document.createDocumentFragment();this.firstChild;)t.appendChild(this.firstChild);var i=n(function(e){if(!e.hasAttributes)return null;for(var n={},t=e.attributes,i=t.length,a=0;a<i;++a){var o=t[a];n[o.name]=function(e,n){if("function"==typeof e.hasAttribute&&!e.hasAttribute(n))return!1;var t=e.value;if(n?t=e.getAttribute(n):n=e.name,t&&n!==t){if(H.test(t))try{t=JSON.parse(t)}catch(n){console.error("Attribute "+e+" has an error:\n"+n+"\n",t)}}else t=!0;return t}(o)}return n}(this),t);if(Array.isArray(i))i.forEach(function(n){e.appendChild(n)});else if(i){if("string"==typeof i){var a=new Error("throwed");throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),a}this.appendChild(i)}this._hasRendered=!0}catch(a){"throwed"!==a.message&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+a+"\n\nStack Trace: "+a.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;Y[e]||(Y[e]={count:0,queue:[]});var a=Y[e].queue;Array.isArray(a)?a.push([e,n,i]):t(i,e,n)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,n=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,n)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=function(e,n){var o=i(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,n);Y[e]||(Y[e]={count:0});var r=Y[e];return r.count++,r.onsubscribe||(r.onsubscribe=function(e){function n(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return f=i,g&&(p&&clearTimeout(p),p=setTimeout(function(){m&&clearTimeout(m),t()},o)),x&&!m&&(m=setTimeout(function(){p&&clearTimeout(p),t()},h)),l&&!v&&(v=!0,b=e.apply(void 0,a(f))),b}function t(){d&&(b=e.apply(void 0,a(f))),p=null,m=null,v=!1}function i(){p&&(clearTimeout(p),p=null),m&&(clearTimeout(m),m=null),f=void 0,v=!1}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=r.leading,l=void 0!==s&&s,u=r.trailing,d=void 0===u||u,c=r.maxWait,h=void 0!==c&&c,f=void 0,p=void 0,m=void 0,b=void 0,v=!1,g=o!==h,x=!1!==h;return n.flush=function(){return(p||m)&&(b=e.apply(void 0,a(f))),i(),b},n.cancel=i,n}(function(e){return function(){t(document,"pubsub/onsubscribe",e),t(document,"pubsub/onsubscribe/"+e,e),Y[e]&&delete Y[e].unsubscribe}}(e),100)),r.onsubscribe(),function(){r.count--,o.call(this),r.count<=0&&delete Y[e]}}("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,n=this.parentNode;n&&(!n.__isContext||e&&e!==n.__contextName);)n=n.parentNode;return!(!n||!n.__isContext)&&n}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var n=16*Math.random()|0;return("x"==e?n:3&n|8).toString(16)})}}]),n}(),ie=(function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}s(n,te),ee(n,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",n=this.attachShadow({mode:e});this._appendStyles(n),this.render()}}])}(),function(e){function n(){return o(this,n),r(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return s(n,te),ee(n,[{key:"_appendStyles",value:function(){n.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:te.uuidv4();if(e&&!ne[e]){var t=document.createElement("style"),i=document.createTextNode(e);t.appendChild(i),t.setAttribute("data-c-name",n.toLowerCase()),document.querySelector("head").appendChild(t),ne[e]=!0}}}]),n}()),ae=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),oe=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,c,I))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,ie),ae(n,[{key:"render",value:function(){(function e(n,t,i){null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,t);if(void 0===a){var o=Object.getPrototypeOf(n);return null===o?void 0:e(o,t,i)}if("value"in a)return a.value;var r=a.get;if(void 0!==r)return r.call(i)})(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this);var e=this.hasAttribute("flyout"),t=d(this.initialClassName,"m-header-sub-navigation",{"m-header-sub-navigation--flyout":e});this.className=t}}]),n}();return function(e){var n=0,t=function(){if(0===n)try{e.apply(void 0,arguments),n+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}};document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("WebComponentsReady",t,!1)}(function(){window.customElements.define("axa-header-sub-navigation",oe)}),oe}();
