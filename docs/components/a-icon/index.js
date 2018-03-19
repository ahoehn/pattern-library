var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var r=t.value;if(n?r=t.getAttribute(n):n=t.name,r&&n!==r){if(e.test(r))try{r=JSON.parse(r)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",r)}}else r=!0;return r}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,r=/[-_]+/g;function o(e,t){return 0==+e||r.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var i=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,r=void 0!==n&&n,o=t.cancelable,i=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,l=document.createEvent("CustomEvent");l.initCustomEvent(e,r,i,s);var u=l.preventDefault;return l.preventDefault=function(){u.call(l);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},l}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function h(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new i(t,u({},r,{detail:n}));e.dispatchEvent(o)}var v=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}();function m(e,t){var n,r;return(n=t,new RegExp("^"+n+"$|^"+n+"\\s|\\s"+n+"\\s|\\s"+n+"$",r)).test(e.className)}var y=/\s+/,g={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),r=n.length,o=void 0,i=0;i<r;++i)if(void 0!==e[o=n[i]])return t[o];return""}()};function b(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=o.capture,s=void 0!==i&&i,l=o.passive,u=void 0===l||l;if(g[t]&&(t=g[t]),!e||!t)return null;var c=void 0===n?"undefined":a(n),f=n&&"string"===c;if("function"===c){if(r){var p=r;s=p.capture,u=p.passive}r=n}for(var d=v?{capture:s,passive:u}:s,h=f?function(t){var o=t.target;for(;!m(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return r(t,o)}:r,b=t.split(y),x=b.length,w=0;w<x;++w)e.addEventListener(b[w],h,d);return function t(){for(var n=0;n<x;++n)e.removeEventListener(b[n],h,d);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),r=n.length,o=0;o<r;++o){var i=n[o];if(e[i]===t)return delete e[i]}}(this,t)}}var x={};function w(e,t){var n=b(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);x[e]||(x[e]={count:0});var r,o=x[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.leading,o=void 0!==r&&r,i=n.trailing,a=void 0===i||i,s=n.maxWait,l=void 0!==s&&s,u=void 0,c=void 0,f=void 0,p=void 0,h=!1,v=t!==l,m=!1!==l;function y(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return u=r,v&&(c&&clearTimeout(c),c=setTimeout(g,t)),m&&!f&&(f=setTimeout(b,l)),o&&!h&&(h=!0,p=e.apply(void 0,d(u))),p}return y.flush=function(){return(c||f)&&(p=e.apply(void 0,d(u))),w(),p},y.cancel=w,y;function g(){f&&clearTimeout(f),x()}function b(){c&&clearTimeout(c),x()}function x(){a&&(p=e.apply(void 0,d(u))),c=null,f=null,h=!1}function w(){c&&(clearTimeout(c),c=null),f&&(clearTimeout(f),f=null),u=void 0,h=!1}}((r=e,function(){h(document,"pubsub/onsubscribe",r),h(document,"pubsub/onsubscribe/"+r,r),x[r]&&delete x[r].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete x[e]}}function C(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}b(document,"pubsub/onsubscribe",function(e){var t=e.detail;x[t]||(x[t]={count:0});var n=x[t],r=n.queue;Array.isArray(r)&&(r.forEach(function(e){var t=p(e,3),n=t[0],r=t[1],o=t[2];h(o,n,r)}),delete n.queue)}),Object.setPrototypeOf(C.prototype,HTMLElement.prototype),Object.setPrototypeOf(C,HTMLElement);var _={},k="throwed",E=function(e){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,r);var n=f(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return c(r,C),l(r,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var r=this._template;if(r)try{for(var i=document.createDocumentFragment();this.firstChild;)i.appendChild(this.firstChild);var a=r(function(e){if(!e.hasAttributes)return null;for(var r,i={},a=e.attributes,s=a.length,l=0;l<s;++l){var u=a[l],c=u.name;i[(r=c,r.replace(n,o))]=t(u)}return i}(this),i);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var s=new Error(k);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}this.appendChild(a)}this._hasRendered=!0}catch(s){s.message!==k&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;x[e]||(x[e]={count:0,queue:[]});var r=x[e].queue;Array.isArray(r)?r.push([e,t,n]):h(n,e,t)}("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=w("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),r}(),O=(function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}c(t,E),l(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,E),l(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.uuidv4();if(e&&!_[e]){var n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),_[e]=!0}}}]),t}()),A=".a-icon {\n  width: 50px;\n  height: 50px; }\n\n.a-icon--small {\n  width: 25px;\n  height: 25px; }\n";var S=function(e){return function(t,n,r){for(var o in n)o in T&&(n[T[o]]=n[o],delete n[o]);return e(t,n,r)}},T={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var L=1,N=2,j=3,P=4,M=5,F=6,R=7,D=8,G=9,z=10,$=11,q=12,V=13;var W=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var B,I,H,Z,J,U,K=/\n[\s]+$/,Q=/^\n[\s]+/,X=/[\s]+$/,Y=/^[\s]+/,ee=/[\n\s]+/g,te=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre"],re=function e(t,n){if(Array.isArray(n))for(var r,o,i=t.nodeName.toLowerCase(),a=!1,s=0,l=n.length;s<l;s++){var u=n[s];if(Array.isArray(u))e(t,u);else{("number"==typeof u||"boolean"==typeof u||"function"==typeof u||u instanceof Date||u instanceof RegExp)&&(u=u.toString());var c=t.childNodes[t.childNodes.length-1];if("string"==typeof u)a=!0,c&&"#text"===c.nodeName?c.nodeValue+=u:(u=document.createTextNode(u),t.appendChild(u),c=u),s===l-1&&(a=!1,-1===te.indexOf(i)&&-1===ne.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(X,"").replace(K,"").replace(ee," "))?t.removeChild(c):c.nodeValue=r:-1===ne.indexOf(i)&&(o=0===s?"":" ",r=c.nodeValue.replace(Q,o).replace(Y," ").replace(X,"").replace(K,"").replace(ee," "),c.nodeValue=r));else if(u&&u.nodeType){a&&(a=!1,-1===te.indexOf(i)&&-1===ne.indexOf(i)?""===(r=c.nodeValue.replace(Q,"").replace(K,"").replace(ee," "))?t.removeChild(c):c.nodeValue=r:-1===ne.indexOf(i)&&(r=c.nodeValue.replace(Y," ").replace(Q,"").replace(K,"").replace(ee," "),c.nodeValue=r));var f=u.nodeName;f&&(i=f.toLowerCase()),t.appendChild(u)}}}},oe=(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",r=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",i=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,a,s){var l;-1!==i.indexOf(e)&&(a.namespace=t);var u=!1;if(a.namespace&&(u=a.namespace,delete a.namespace),u)l=document.createElementNS(u,e);else{if(e===o)return document.createComment(a.comment);l=document.createElement(e)}for(var c in a)if(a.hasOwnProperty(c)){var f=c.toLowerCase(),p=a[c];if("classname"===f&&(f="class",c="class"),"htmlFor"===c&&(c="for"),-1!==r.indexOf(f))if("true"===p)p=f;else if("false"===p)continue;"on"===f.slice(0,2)?l[c]=p:u?"xlink:href"===c?l.setAttributeNS(n,c,p):/^xmlns($|:)/i.test(c)||l.setAttributeNS(null,c,p):l.setAttribute(c,p)}return re(l,s),l}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=S(e)),function(o){for(var i=L,s="",l=arguments.length,u=[],c=0;c<o.length;c++)if(c<l-1){var f=arguments[c+1],p=k(o[c]),d=i;d===z&&(d=D),d===G&&(d=D),d===R&&(d=D),d===P&&(d=M),p.push([0,d,f]),u.push.apply(u,p)}else u.push.apply(u,k(o[c]));var h,v=[null,{},[]],m=[[v,-1]];for(c=0;c<u.length;c++){var y=m[m.length-1][0],g=(p=u[c])[0];if(g===N&&/^\//.test(p[1])){var b=m[m.length-1][1];m.length>1&&(m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0))}else if(g===N){var x=[p[1],{},[]];y[2].push(x),m.push([x,y[2].length-1])}else if(g===M||0===g&&p[1]===M){for(var w,C="";c<u.length;c++)if(u[c][0]===M)C=n(C,u[c][1]);else{if(0!==u[c][0]||u[c][1]!==M)break;if("object"!==a(u[c][2])||C)C=n(C,u[c][2]);else for(w in u[c][2])u[c][2].hasOwnProperty(w)&&!y[1][w]&&(y[1][w]=u[c][2][w])}u[c][0]===$&&c++;for(var _=c;c<u.length;c++)if(u[c][0]===D||u[c][0]===M)y[1][C]?""===u[c][1]||(y[1][C]=n(y[1][C],u[c][1])):y[1][C]=r(u[c][1]);else{if(0!==u[c][0]||u[c][1]!==D&&u[c][1]!==M){!C.length||y[1][C]||c!==_||u[c][0]!==j&&u[c][0]!==q||(y[1][C]=C.toLowerCase()),u[c][0]===j&&c--;break}y[1][C]?""===u[c][2]||(y[1][C]=n(y[1][C],u[c][2])):y[1][C]=r(u[c][2])}}else if(g===M)y[1][p[1]]=!0;else if(0===g&&p[1]===M)y[1][p[2]]=!0;else if(g===j)h=y[0],W.test(h)&&m.length&&(b=m[m.length-1][1],m.pop(),m[m.length-1][0][2][b]=e(y[0],y[1],y[2].length?y[2]:void 0));else if(0===g&&p[1]===L)void 0===p[2]||null===p[2]?p[2]="":p[2]||(p[2]=n("",p[2])),Array.isArray(p[2][0])?y[2].push.apply(y[2],p[2]):y[2].push(p[2]);else if(g===L)y[2].push(p[1]);else if(g!==$&&g!==q)throw new Error("unhandled: "+g)}if(v[2].length>1&&/^\s*$/.test(v[2][0])&&v[2].shift(),v[2].length>2||2===v[2].length&&/\S/.test(v[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(v[2][0])&&"string"==typeof v[2][0][0]&&Array.isArray(v[2][0][2])&&(v[2][0]=e(v[2][0][0],v[2][0][1],v[2][0][2])),v[2][0];function k(e){var n,r=[];i===R&&(i=P);for(var o=0;o<e.length;o++){var a=e.charAt(o);i===L&&"<"===a?(s.length&&r.push([L,s]),s="",i=N):">"===a&&(n=i)!==G&&n!==z&&i!==V?(i===N?r.push([N,s]):i===M?r.push([M,s]):i===D&&s.length&&r.push([D,s]),r.push([j]),s="",i=L):i===V&&/-$/.test(s)&&"-"===a?(t.comments&&r.push([D,s.substr(0,s.length-1)],[j]),s="",i=L):i===N&&/^!--$/.test(s)?(t.comments&&r.push([N,s],[M,"comment"],[$]),s=a,i=V):i===L||i===V?s+=a:i===N&&/\s/.test(a)?(r.push([N,s]),s="",i=P):i===N?s+=a:i===P&&/[^\s"'=/]/.test(a)?(i=M,s=a):i===P&&/\s/.test(a)?(s.length&&r.push([M,s]),r.push([q])):i===M&&/\s/.test(a)?(r.push([M,s]),s="",i=F):i===M&&"="===a?(r.push([M,s],[$]),s="",i=R):i===M?s+=a:i!==F&&i!==P||"="!==a?i!==F&&i!==P||/\s/.test(a)?i===R&&'"'===a?i=z:i===R&&"'"===a?i=G:i===z&&'"'===a?(r.push([D,s],[q]),s="",i=P):i===G&&"'"===a?(r.push([D,s],[q]),s="",i=P):i!==R||/\s/.test(a)?i===D&&/\s/.test(a)?(r.push([D,s],[q]),s="",i=P):i!==D&&i!==G&&i!==z||(s+=a):(i=D,o--):(r.push([q]),/[\w-]/.test(a)?(s+=a,i=M):i=P):(r.push([$]),i=R)}return i===L&&s.length?(r.push([L,s]),s=""):i===D&&s.length?(r.push([D,s]),s=""):i===z&&s.length?(r.push([D,s]),s=""):i===G&&s.length?(r.push([D,s]),s=""):i===M&&(r.push([M,s]),s=""),r}};function r(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}(B={exports:{}},B.exports),B.exports),ie=(oe.createElement,I=['\n  <svg class="','">\n    <use xlink:href="#src--assets--icons--','" />\n  </svg>\n'],H=['\n  <svg class="','">\n    <use xlink:href="#src--assets--icons--','" />\n  </svg>\n'],Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(H)}}))),ae=function(e){var t=e.id,n=e.classes;return oe(ie,n,t)},se=function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,A,ae))}return c(t,O),t}();return Z=function(){window.customElements.define("axa-icon",se)},J=0,U=function(){if(0===J)try{Z.apply(void 0,arguments),J+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",U,!1),document.addEventListener("WebComponentsReady",U,!1),se}();
