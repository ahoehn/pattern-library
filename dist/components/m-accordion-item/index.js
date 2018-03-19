var StyleGuideWebComponent=function(){"use strict";var e=/^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;function t(t,n){if("function"==typeof t.hasAttribute&&!t.hasAttribute(n))return!1;var i=t.value;if(n?i=t.getAttribute(n):n=t.name,i&&n!==i){if(e.test(i))try{i=JSON.parse(i)}catch(e){console.error("Attribute "+t+" has an error:\n"+e+"\n",i)}}else i=!0;return i}var n=/(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g,i=/[-_]+/g;function o(e,t){return 0==+e||i.test(e)?"":0===t?e.toLowerCase():e.toUpperCase()}var r=function(){try{var e=new window.CustomEvent("test");if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default");return window.CustomEvent}catch(e){}return t;function t(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.bubbles,i=void 0!==n&&n,o=t.cancelable,r=void 0!==o&&o,a=t.detail,s=void 0===a?void 0:a,c=document.createEvent("CustomEvent");c.initCustomEvent(e,i,r,s);var l=c.preventDefault;return c.preventDefault=function(){l.call(c);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},c}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=function e(t,n,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,n,i)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(i):void 0},h=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},f=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},p=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},v=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};function g(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new r(t,u({},i,{detail:n}));e.dispatchEvent(o)}var y=function(){var e=!1;if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}return e}(),_=/^\s+|\s{2,}|\s+$/g;function b(e,t){return new RegExp("^"+e+"$|^"+e+"\\s|\\s"+e+"\\s|\\s"+e+"$",t)}function x(e,t){return b(t).test(e.className)}var w=/\s+/,C={transitionend:function(){for(var e=document.createElement("div").style,t={transition:"transitionend",OTransition:"oTransitionEnd otransitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},n=Object.keys(t),i=n.length,o=void 0,r=0;r<i;++r)if(void 0!==e[o=n[r]])return t[o];return""}()};function k(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=o.capture,s=void 0!==r&&r,c=o.passive,l=void 0===c||c;if(C[t]&&(t=C[t]),!e||!t)return null;var u=void 0===n?"undefined":a(n),d=n&&"string"===u;if("function"===u){if(i){var h=i;s=h.capture,l=h.passive}i=n}for(var f=y?{capture:s,passive:l}:s,p=d?function(t){var o=t.target;for(;!x(o,n)&&o!==e;)o=o.parentNode;if(o!==e)return i(t,o)}:i,m=t.split(w),v=m.length,g=0;g<v;++g)e.addEventListener(m[g],p,f);return function t(){for(var n=0;n<v;++n)e.removeEventListener(m[n],p,f);!function(e,t){if(!e)return!1;for(var n=Object.keys(e),i=n.length,o=0;o<i;++o){var r=n[o];if(e[r]===t)return delete e[r]}}(this,t)}}var E={};function O(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;E[e]||(E[e]={count:0,queue:[]});var i=E[e].queue;Array.isArray(i)?i.push([e,t,n]):g(n,e,t)}function T(e,t){var n=k(arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,e,t);E[e]||(E[e]={count:0});var i,o=E[e];return o.count++,o.onsubscribe||(o.onsubscribe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=n.leading,o=void 0!==i&&i,r=n.trailing,a=void 0===r||r,s=n.maxWait,c=void 0!==s&&s,l=void 0,u=void 0,d=void 0,h=void 0,f=!1,p=t!==c,m=!1!==c;function g(){for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];return l=i,p&&(u&&clearTimeout(u),u=setTimeout(y,t)),m&&!d&&(d=setTimeout(_,c)),o&&!f&&(f=!0,h=e.apply(void 0,v(l))),h}return g.flush=function(){return(u||d)&&(h=e.apply(void 0,v(l))),x(),h},g.cancel=x,g;function y(){d&&clearTimeout(d),b()}function _(){u&&clearTimeout(u),b()}function b(){a&&(h=e.apply(void 0,v(l))),u=null,d=null,f=!1}function x(){u&&(clearTimeout(u),u=null),d&&(clearTimeout(d),d=null),l=void 0,f=!1}}((i=e,function(){g(document,"pubsub/onsubscribe",i),g(document,"pubsub/onsubscribe/"+i,i),E[i]&&delete E[i].unsubscribe}),100)),o.onsubscribe(),function(){o.count--,n.call(this),o.count<=0&&delete E[e]}}function N(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}k(document,"pubsub/onsubscribe",function(e){var t=e.detail;E[t]||(E[t]={count:0});var n=E[t],i=n.queue;Array.isArray(i)&&(i.forEach(function(e){var t=p(e,3),n=t[0],i=t[1],o=t[2];g(o,n,i)}),delete n.queue)}),Object.setPrototypeOf(N.prototype,HTMLElement.prototype),Object.setPrototypeOf(N,HTMLElement);var A={},S="throwed",j=function(e){function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];s(this,i);var n=f(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return n._makeContextReady=n._makeContextReady.bind(n),n._initialise(e,t),n}return h(i,N),c(i,[{key:"_initialise",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.initialClassName=this.className,this._styles=e,this._template=t}},{key:"connectedCallback",value:function(){this._appendStyles(),this.render(),this.contextCallback&&this._makeContextReady()}},{key:"disconnectedCallback",value:function(){this.unContextEnabled&&this.unContextEnabled()}},{key:"_appendStyles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var t=document.createElement("style"),n=document.createTextNode(this._styles);t.appendChild(n),e.insertAdjacentElement?e.insertAdjacentElement("afterbegin",t):e.appendChild(t)}}},{key:"render",value:function(){var e=this;if(!this._hasRendered){var i=this._template;if(i)try{for(var r=document.createDocumentFragment();this.firstChild;)r.appendChild(this.firstChild);var a=i(function(e){if(!e.hasAttributes)return null;for(var i,r={},a=e.attributes,s=a.length,c=0;c<s;++c){var l=a[c],u=l.name;r[(i=u,i.replace(n,o))]=t(l)}return r}(this),r);if(Array.isArray(a))a.forEach(function(t){e.appendChild(t)});else if(a){if("string"==typeof a){var s=new Error(S);throw console.error("\n%cWeb Component %c"+this.nodeName+"%c does not accept string as a return from a template. Maybe use bel?\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;"),s}this.appendChild(a)}this._hasRendered=!0}catch(s){s.message!==S&&console.error("\n%cWeb Component %c"+this.nodeName+"%c has an error while loading its template:\n"+s+"\n\nStack Trace: "+s.stack+"\n","color: #580000; font-size: 14px; line-height:16px;","background: #8b0000; color: #FFF; font-size: 14px; line-height:16px;","color: #580000; font-size: 14px; line-height:16px;")}}}},{key:"enableContext",value:function(){var e=this.nodeName.toLowerCase();this.__isContext=!0,this.__contextName=e,O("context/enabled",e)}},{key:"selectContext",value:function(e){this.__selectedContext=e&&e.toLowerCase()}},{key:"_makeContextReady",value:function(){var e=this,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail;this.contextNode&&(clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){e.contextCallback(e.contextNode,t)},10)),this.unContextEnabled&&this.unContextEnabled(),this.unContextEnabled=T("context/enabled",this._makeContextReady)}},{key:"contextNode",get:function(){for(var e=this.__selectedContext,t=this.parentNode;t&&(!t.__isContext||e&&e!==t.__contextName);)t=t.parentNode;return!(!t||!t.__isContext)&&t}}],[{key:"uuidv4",value:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})}}]),i}(),L=(function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,j),c(t,[{key:"connectedCallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",t=this.attachShadow({mode:e});this._appendStyles(t),this.render()}}])}(),function(e){function t(){return s(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return h(t,j),c(t,[{key:"_appendStyles",value:function(){t.appendGlobalStyles(this._styles,this.nodeName)}}],[{key:"appendGlobalStyles",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.uuidv4();if(e&&!A[e]){var n=document.createElement("style"),i=document.createTextNode(e);n.appendChild(i),n.setAttribute("data-c-name",t.toLowerCase()),document.querySelector("head").appendChild(n),A[e]=!0}}}]),t}());function P(e,t){return e(t={exports:{}},t.exports),t.exports}var D=function(e){return function(t,n,i){for(var o in n)o in F&&(n[F[o]]=n[o],delete n[o]);return e(t,n,i)}},F={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};var M=1,I=2,R=3,z=4,q=5,U=6,G=7,V=8,$=9,K=10,W=11,B=12,H=13;var Z=RegExp("^("+["area","base","basefont","bgsound","br","col","command","embed","frame","hr","img","input","isindex","keygen","link","meta","param","source","track","wbr","!--","animate","animateTransform","circle","cursor","desc","ellipse","feBlend","feColorMatrix","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","font-face-format","font-face-name","font-face-uri","glyph","glyphRef","hkern","image","line","missing-glyph","mpath","path","polygon","polyline","rect","set","stop","tref","use","view","vkern"].join("|")+")(?:[.#][a-zA-Z0-9-￿_:-]+)*$");var J=/\n[\s]+$/,Y=/^\n[\s]+/,Q=/[\s]+$/,X=/^[\s]+/,ee=/[\n\s]+/g,te=["a","abbr","b","bdi","bdo","br","cite","data","dfn","em","i","kbd","mark","q","rp","rt","rtc","ruby","s","amp","small","span","strong","sub","sup","time","u","var","wbr"],ne=["code","pre"],ie=function e(t,n){if(Array.isArray(n))for(var i,o,r=t.nodeName.toLowerCase(),a=!1,s=0,c=n.length;s<c;s++){var l=n[s];if(Array.isArray(l))e(t,l);else{("number"==typeof l||"boolean"==typeof l||"function"==typeof l||l instanceof Date||l instanceof RegExp)&&(l=l.toString());var u=t.childNodes[t.childNodes.length-1];if("string"==typeof l)a=!0,u&&"#text"===u.nodeName?u.nodeValue+=l:(l=document.createTextNode(l),t.appendChild(l),u=l),s===c-1&&(a=!1,-1===te.indexOf(r)&&-1===ne.indexOf(r)?""===(i=u.nodeValue.replace(Y,"").replace(Q,"").replace(J,"").replace(ee," "))?t.removeChild(u):u.nodeValue=i:-1===ne.indexOf(r)&&(o=0===s?"":" ",i=u.nodeValue.replace(Y,o).replace(X," ").replace(Q,"").replace(J,"").replace(ee," "),u.nodeValue=i));else if(l&&l.nodeType){a&&(a=!1,-1===te.indexOf(r)&&-1===ne.indexOf(r)?""===(i=u.nodeValue.replace(Y,"").replace(J,"").replace(ee," "))?t.removeChild(u):u.nodeValue=i:-1===ne.indexOf(r)&&(i=u.nodeValue.replace(X," ").replace(Y,"").replace(J,"").replace(ee," "),u.nodeValue=i));var d=l.nodeName;d&&(r=d.toLowerCase()),t.appendChild(l)}}}},oe=P(function(e){var t="http://www.w3.org/2000/svg",n="http://www.w3.org/1999/xlink",i=["autofocus","checked","defaultchecked","disabled","formnovalidate","indeterminate","readonly","required","selected","willvalidate"],o="!--",r=["svg","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"];function s(e,a,s){var c;-1!==r.indexOf(e)&&(a.namespace=t);var l=!1;if(a.namespace&&(l=a.namespace,delete a.namespace),l)c=document.createElementNS(l,e);else{if(e===o)return document.createComment(a.comment);c=document.createElement(e)}for(var u in a)if(a.hasOwnProperty(u)){var d=u.toLowerCase(),h=a[u];if("classname"===d&&(d="class",u="class"),"htmlFor"===u&&(u="for"),-1!==i.indexOf(d))if("true"===h)h=d;else if("false"===h)continue;"on"===d.slice(0,2)?c[u]=h:l?"xlink:href"===u?c.setAttributeNS(n,u,h):/^xmlns($|:)/i.test(u)||c.setAttributeNS(null,u,h):c.setAttribute(u,h)}return ie(c,s),c}e.exports=function(e,t){t||(t={});var n=t.concat||function(e,t){return String(e)+String(t)};return!1!==t.attrToProp&&(e=D(e)),function(o){for(var r=M,s="",c=arguments.length,l=[],u=0;u<o.length;u++)if(u<c-1){var d=arguments[u+1],h=k(o[u]),f=r;f===K&&(f=V),f===$&&(f=V),f===G&&(f=V),f===z&&(f=q),h.push([0,f,d]),l.push.apply(l,h)}else l.push.apply(l,k(o[u]));var p,m=[null,{},[]],v=[[m,-1]];for(u=0;u<l.length;u++){var g=v[v.length-1][0],y=(h=l[u])[0];if(y===I&&/^\//.test(h[1])){var _=v[v.length-1][1];v.length>1&&(v.pop(),v[v.length-1][0][2][_]=e(g[0],g[1],g[2].length?g[2]:void 0))}else if(y===I){var b=[h[1],{},[]];g[2].push(b),v.push([b,g[2].length-1])}else if(y===q||0===y&&h[1]===q){for(var x,w="";u<l.length;u++)if(l[u][0]===q)w=n(w,l[u][1]);else{if(0!==l[u][0]||l[u][1]!==q)break;if("object"!==a(l[u][2])||w)w=n(w,l[u][2]);else for(x in l[u][2])l[u][2].hasOwnProperty(x)&&!g[1][x]&&(g[1][x]=l[u][2][x])}l[u][0]===W&&u++;for(var C=u;u<l.length;u++)if(l[u][0]===V||l[u][0]===q)g[1][w]?""===l[u][1]||(g[1][w]=n(g[1][w],l[u][1])):g[1][w]=i(l[u][1]);else{if(0!==l[u][0]||l[u][1]!==V&&l[u][1]!==q){!w.length||g[1][w]||u!==C||l[u][0]!==R&&l[u][0]!==B||(g[1][w]=w.toLowerCase()),l[u][0]===R&&u--;break}g[1][w]?""===l[u][2]||(g[1][w]=n(g[1][w],l[u][2])):g[1][w]=i(l[u][2])}}else if(y===q)g[1][h[1]]=!0;else if(0===y&&h[1]===q)g[1][h[2]]=!0;else if(y===R)p=g[0],Z.test(p)&&v.length&&(_=v[v.length-1][1],v.pop(),v[v.length-1][0][2][_]=e(g[0],g[1],g[2].length?g[2]:void 0));else if(0===y&&h[1]===M)void 0===h[2]||null===h[2]?h[2]="":h[2]||(h[2]=n("",h[2])),Array.isArray(h[2][0])?g[2].push.apply(g[2],h[2]):g[2].push(h[2]);else if(y===M)g[2].push(h[1]);else if(y!==W&&y!==B)throw new Error("unhandled: "+y)}if(m[2].length>1&&/^\s*$/.test(m[2][0])&&m[2].shift(),m[2].length>2||2===m[2].length&&/\S/.test(m[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(m[2][0])&&"string"==typeof m[2][0][0]&&Array.isArray(m[2][0][2])&&(m[2][0]=e(m[2][0][0],m[2][0][1],m[2][0][2])),m[2][0];function k(e){var n,i=[];r===G&&(r=z);for(var o=0;o<e.length;o++){var a=e.charAt(o);r===M&&"<"===a?(s.length&&i.push([M,s]),s="",r=I):">"===a&&(n=r)!==$&&n!==K&&r!==H?(r===I?i.push([I,s]):r===q?i.push([q,s]):r===V&&s.length&&i.push([V,s]),i.push([R]),s="",r=M):r===H&&/-$/.test(s)&&"-"===a?(t.comments&&i.push([V,s.substr(0,s.length-1)],[R]),s="",r=M):r===I&&/^!--$/.test(s)?(t.comments&&i.push([I,s],[q,"comment"],[W]),s=a,r=H):r===M||r===H?s+=a:r===I&&/\s/.test(a)?(i.push([I,s]),s="",r=z):r===I?s+=a:r===z&&/[^\s"'=/]/.test(a)?(r=q,s=a):r===z&&/\s/.test(a)?(s.length&&i.push([q,s]),i.push([B])):r===q&&/\s/.test(a)?(i.push([q,s]),s="",r=U):r===q&&"="===a?(i.push([q,s],[W]),s="",r=G):r===q?s+=a:r!==U&&r!==z||"="!==a?r!==U&&r!==z||/\s/.test(a)?r===G&&'"'===a?r=K:r===G&&"'"===a?r=$:r===K&&'"'===a?(i.push([V,s],[B]),s="",r=z):r===$&&"'"===a?(i.push([V,s],[B]),s="",r=z):r!==G||/\s/.test(a)?r===V&&/\s/.test(a)?(i.push([V,s],[B]),s="",r=z):r!==V&&r!==$&&r!==K||(s+=a):(r=V,o--):(i.push([B]),/[\w-]/.test(a)?(s+=a,r=q):r=z):(i.push([W]),r=G)}return r===M&&s.length?(i.push([M,s]),s=""):r===V&&s.length?(i.push([V,s]),s=""):r===K&&s.length?(i.push([V,s]),s=""):r===$&&s.length?(i.push([V,s]),s=""):r===q&&(i.push([q,s]),s=""),i}};function i(e){return"function"==typeof e?e:"string"==typeof e?e:e&&"object"===(void 0===e?"undefined":a(e))?e:n("",e)}}(s,{comments:!0}),e.exports.default=e.exports,e.exports.createElement=s}),re=(oe.createElement,P(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var r=void 0===o?"undefined":a(o);if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o))e.push(n.apply(null,o));else if("object"===r)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?e.exports=n:window.classNames=n}()})),ae=m(['<axa-icon id="','" classes="m-accordion-item__icon"></axa-icon>'],['<axa-icon id="','" classes="m-accordion-item__icon"></axa-icon>']),se=m(['<axa-icon id="chevron-down" classes="m-accordion-item__chevron"></axa-icon>'],['<axa-icon id="chevron-down" classes="m-accordion-item__chevron"></axa-icon>']),ce=m(['<div class="','">\n          ','\n          <div class="m-accordion-item__heading-wrapper">\n            <span class="','">',"</span> \n            ","\n          </div>\n          ","\n        </div>"],['<div class="','">\n          ','\n          <div class="m-accordion-item__heading-wrapper">\n            <span class="','">',"</span> \n            ","\n          </div>\n          ","\n        </div>"]),le=m(['<span class="m-accordion-item__heading m-accordion-item__heading--secondary">\n                      ',"\n                </span>"],['<span class="m-accordion-item__heading m-accordion-item__heading--secondary">\n                      ',"\n                </span>"]),ue=m(['<div class="m-accordion-item__body js-accordion-item__body">\n          <div class="m-accordion-item__content">\n          ',"\n          </div>\n        </div>"],['<div class="m-accordion-item__body js-accordion-item__body">\n          <div class="m-accordion-item__content">\n          ',"\n          </div>\n        </div>"]),de=function(e,t){var n,i=e.header,o=e.headerSecondary,r=e.headerColor,a=e.icon,s=re("m-accordion-item__heading","m-accordion-item__heading--primary",(l(n={},"m-accordion-item__heading--"+r,r),l(n,"m-accordion-item__heading--with-secondary",o),n)),c=re("m-accordion-item__header","js-accordion-item__toggle",{"m-accordion-item__header--with-icon":a}),u=oe(ae,a),d=oe(se);return[oe(ce,c,a&&u,s,i,o&&oe(le,o),d),oe(ue,t)]},he=".m-accordion-item {\n  display: block; }\n\n.m-accordion-item__header {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0;\n  padding: 18px 60px 18px 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 0 solid #ccc;\n  border-top-width: 1px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer; }\n\n.m-accordion-item__header--with-icon .m-accordion-item__heading-wrapper {\n  margin-left: 20px; }\n\n.m-accordion-item__header--with-icon ~ .m-accordion-item__body {\n  padding-left: 32px; }\n  .m-accordion-item__header--with-icon ~ .m-accordion-item__body .m-accordion-item__content {\n    padding: 2px 60px 18px 10px; }\n\n.m-accordion-item__heading-wrapper {\n  margin-left: 8px; }\n\n.m-accordion-item__heading {\n  display: block; }\n\n.m-accordion-item__heading--primary {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--primary {\n      font-size: 24px;\n      line-height: 1.2; } }\n\n.m-accordion-item__heading--with-secondary {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--with-secondary {\n      font-size: 16px; } }\n\n.m-accordion-item__heading--blue {\n  color: #00008f; }\n\n.m-accordion-item__heading--secondary {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em;\n  color: #7f7f7f; }\n  @media (min-width: 576px) {\n    .m-accordion-item__heading--secondary {\n      font-size: 14px;\n      line-height: 1.21; } }\n\n.m-accordion-item__chevron {\n  position: absolute;\n  top: calc(50% - (16px / 2));\n  right: 18px;\n  display: block;\n  height: 16px;\n  width: 16px;\n  color: #00008f;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease; }\n\n.m-accordion-item__icon {\n  display: block;\n  height: 30px;\n  width: 30px;\n  color: #00008f; }\n\n.m-accordion-item__body {\n  height: 0;\n  min-width: 100%;\n  overflow: hidden;\n  -webkit-transition: height 0.3s ease;\n  transition: height 0.3s ease; }\n\n.m-accordion-item__content {\n  margin-left: 18px;\n  padding: 2px 60px 18px 0; }\n\n.is-accordion-item-open .m-accordion-item__chevron {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg); }\n\n.is-accordion-item-open .m-accordion-item__body {\n  height: auto; }\n";var fe=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;function pe(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=i.capture,r=void 0===o||o,a=i.passive,s=void 0===a||a,c=e.ownerDocument.documentElement,l=k(c,t,function(t){var i=t.target;if(!e.contains(i)&&e!==i)return n(t)},{capture:r,passive:s});return fe&&(c.style.cursor="pointer"),l}var me=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var i=t.length,o={},r=0;r<i;++r){var a=t[r];o[a.toUpperCase()]=a}return o}("click","keyup","enter","move","leave","Escape","Esc"),ve="data-prevent-default",ge=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,e),this._handleClick=this._handleClick.bind(this),this._handleClose=this._handleClose.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._init(t,n)}return c(e,[{key:"_init",value:function(t,n){t&&(this._wcNode=t),n&&(this._options=u({},e.DEFAULTS,n));var i=this._options.containerClass;this._container=i?this._wcNode.querySelector(i):this._wcNode,this._on()}},{key:"_on",value:function(){this._off(),this._unClick=k(this._container,me.CLICK,this._options.toggleClass,this._handleClick,{passive:!this._options.preventDefault})}},{key:"_off",value:function(){this._unClick&&this._unClick(),this._offInteractive()}},{key:"_onInteractive",value:function(){this._offInteractive(),this._options.closeClass&&(this._unCloseClick=k(this._container,me.CLICK,this._options.closeClass,this._handleClose,{passive:!this._options.preventDefault})),this._options.outerClose&&(this._unOuterClick=pe(this._container,me.CLICK,this._handleClose,{passive:!this._options.preventDefault})),this._options.escapeClose&&(this._unCloseEscape=k(this._container.ownerDocument,me.KEYUP,this._handleKeyUp,{passive:!1}))}},{key:"shouldPreventDefault",value:function(e){return e.hasAttribute(ve)?t(e,ve):this._options.preventDefault}},{key:"_offInteractive",value:function(){this._unOuterClick&&this._unOuterClick(),this._unCloseClick&&this._unCloseClick(),this._unCloseEscape&&this._unCloseEscape(),delete this._lastToggleNode}},{key:"_handleClick",value:function(e,t){this.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault();var n=!this._lastToggleNode,i=t!==this._lastToggleNode,o=!n&&!i;n?(this._notify(me.ENTER,t),this._onInteractive()):i&&this._notify(me.MOVE,t,this._lastToggleNode),this._lastToggleNode=t,o&&this._options.sameClickClose&&this._close()}},{key:"_handleClose",value:function(e,t){this.shouldPreventDefault(t||e.currentTarget)&&e.preventDefault(),this._close()}},{key:"_handleKeyUp",value:function(e){(e.key===me.ESCAPE||e.key===me.ESC||27===e.keyCode)&&(e.preventDefault(),this._close())}},{key:"_close",value:function(){this._lastToggleNode&&(this._notify(me.LEAVE,this._lastToggleNode),this._offInteractive(),delete this._lastToggleNode)}},{key:"_notify",value:function(e,t,n){e in this&&"function"==typeof this[e]&&this[e](t,n)}},{key:"enter",value:function(e){throw new Error("UiEvent.enter method not overwritten")}},{key:"move",value:function(e,t){}},{key:"leave",value:function(e){throw new Error("UiEvent.leave method not overwritten")}},{key:"destroy",value:function(){this._off(),delete this._wcNode,delete this._options}}]),e}();ge.DEFAULTS={containerClass:".js-ui-container",toggleClass:"js-ui-toggle",closeClass:"js-ui-close",escapeClose:!0,outerClose:!0,sameClickClose:!0,preventDefault:!0};var ye,_e=function(){if(!window.getComputedStyle)return null;var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1],lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.slice(1)}}().lowercase,be=function(){var e=window.requestAnimationFrame||window[_e+"RequestAnimationFrame"];if(e)e=e.bind(window);else{var t=0;e=function(e){var n=Date.now(),i=Math.max(0,16-(n-t)),o=setTimeout(function(){e(n+i)},i);return t=n+i,o}}return e}(),xe=(ye=(ye=window.cancelAnimationFrame||window[_e+"CancelAnimationFrame"]||window[_e+"CancelRequestAnimationFrame"])?ye.bind(window):function(e){clearTimeout(e)},function(e){function t(e,n){s(this,t),n=u({},t.DEFAULTS,n);var i=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOpen=!1,i.options=n,i.wcNode=e,i.handleTransitionEnd=i.handleTransitionEnd.bind(i),i.handleToggleClick=i.handleToggleClick.bind(i),i.toggleState=i.toggleState.bind(i),i.init(),i}return h(t,ge),c(t,[{key:"init",value:function(){this.toggle=this.wcNode.querySelector(this.options.toggle),this.body=this.wcNode.querySelector(this.options.body),this.on()}},{key:"on",value:function(){this.off(),this.offToggleClicked=k(this.toggle,"click",this.handleToggleClick)}},{key:"off",value:function(){this.offToggleClicked&&this.offToggleClicked()}},{key:"onInteractive",value:function(){this.offInteractive(),this.unTransitionEnd=k(this.body,"transitionend",this.handleTransitionEnd)}},{key:"offInteractive",value:function(){this.unTransitionEnd&&this.unTransitionEnd()}},{key:"toggleState",value:function(e){var t=e.detail;this.wcNode===t?this.isOpen?this.close():this.open():this.isOpen&&this.close()}},{key:"open",value:function(){var e=this.wcNode,t=e.lastElementChild;if(!this.isOpen){this.isOpen=!0,t.style.overflow="scroll";var n,i,o=t.scrollHeight;t.style.overflow="",this.onInteractive(),t.style.height=o+"px",n=e,i=this.options.isOpen,x(n,i)||(n.className+=" "+i)}}},{key:"close",value:function(){var e=this,t=this.wcNode,n=t.lastElementChild,i=n.scrollHeight;this.isOpen&&(this.isOpen=!1,this.offInteractive(),be(function(){n.style.height=i+"px",be(function(){!function(e,t){if(x(e,t)){var n=b(t,"g");e.className=e.className.replace(n," ").replace(_," ")}}(t,e.options.isOpen),n.style.height=0})}))}},{key:"handleTransitionEnd",value:function(e){"height"===e.propertyName&&(e.target.style.height="",this.offInteractive())}},{key:"onContextEnabled",value:function(){this._contextNode&&(this.offContextEnabled(),this.unSubscribeToggle=T("accordion-item/toggle",this.toggleState,this._contextNode))}},{key:"offContextEnabled",value:function(){this.unSubscribeToggle&&this.unSubscribeToggle()}},{key:"handleToggleClick",value:function(){O("accordion-item/toggle",this.wcNode,this._contextNode)}},{key:"destroy",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this),this.off(),this.offInteractive(),this.offContextEnabled(),delete this.wcNode,delete this.options}},{key:"contextNode",set:function(e){this._contextNode=e,this.onContextEnabled()}}]),t}());xe.DEFAULTS={containerClass:!1,toggle:".js-accordion-item__toggle",body:".js-accordion-item__body",isOpen:"is-accordion-item-open"};var we,Ce,ke,Ee=function(e){function t(){s(this,t);var e=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,he,de));return e.selectContext("axa-accordion"),e}return h(t,L),c(t,[{key:"connectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"connectedCallback",this).call(this),this.className=this.initialClassName+" m-accordion-item",this.interaction=new xe(this)}},{key:"disconnectedCallback",value:function(){d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"disconnectedCallback",this).call(this),this.interaction.destroy(),delete this.interaction}},{key:"contextCallback",value:function(e){this.interaction.contextNode=e}}]),t}();return we=function(){window.customElements.define("axa-accordion-item",Ee)},Ce=0,ke=function(){if(0===Ce)try{we.apply(void 0,arguments),Ce+=1,document.removeEventListener("DOMContentLoaded"),document.removeEventListener("WebComponentsReady")}catch(e){}},document.addEventListener("DOMContentLoaded",ke,!1),document.addEventListener("WebComponentsReady",ke,!1),Ee}();
