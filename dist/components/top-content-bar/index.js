!function(){"use strict";function t(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}var e=".o-top-content-bar {\n  display: block;\n  color: #fff; }\n\n.o-top-content-bar,\n.o-top-content-bar--corporate {\n  background: #027180; }\n\n.o-top-content-bar--commercial {\n  background: #00005b; }\n\n.o-top-content-bar--warning {\n  background: #c91432; }\n\n.o-top-content-bar__box {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  @media (min-width: 767px) {\n    .o-top-content-bar__box {\n      width: 720px; } }\n  @media (min-width: 991px) {\n    .o-top-content-bar__box {\n      width: 960px; } }\n  @media (min-width: 1199px) {\n    .o-top-content-bar__box {\n      width: 1140px; } }\n  @media (min-width: 575px) {\n    .o-top-content-bar__box {\n      flex-direction: row;\n      justify-content: center; } }\n\n.o-top-content-bar__text {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: 0.02em; }\n  @media (min-width: 767px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 991px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n  @media (min-width: 1199px) {\n    .o-top-content-bar__text {\n      font-size: 13px;\n      font-weight: 400;\n      line-height: 1.38;\n      letter-spacing: 0.02em; } }\n",n=(function(){function t(t){this.value=t}function e(e){function n(r,i){try{var c=e[r](i),a=c.value;a instanceof t?Promise.resolve(a.value).then(function(t){n("next",t)},function(t){n("throw",t)}):o(c.done?"return":"normal",c.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":r.resolve({value:e,done:!0});break;case"throw":r.reject(e);break;default:r.resolve({value:e,done:!1})}(r=r.next)?n(r.key,r.arg):i=null}var r,i;this._invoke=function(t,e){return new Promise(function(o,c){var a={key:t,arg:e,resolve:o,reject:c,next:null};i?i=i.next=a:(r=i=a,n(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=function t(e,n,o){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,n);if(void 0===r){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,o)}if("value"in r)return r.value;var c=r.get;if(void 0!==c)return c.call(o)},i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};Object.setPrototypeOf(t.prototype,HTMLElement.prototype),Object.setPrototypeOf(t,HTMLElement);var a=(document._currentScript||document.currentScript).ownerDocument,l={},p=function(e){function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(this,r);var e=c(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e._styles=t,e.template=a.querySelector("template"),e.template&&(e.clone=document.importNode(e.template.content,!0)),e}return i(r,t),o(r,[{key:"connectedCallback",value:function(){this._appendStyles(),this.clone&&this.appendChild(this.clone)}},{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){var e=document.createElement("style"),n=document.createTextNode(this._styles);e.appendChild(n),t.insertAdjacentElement?t.insertAdjacentElement("afterbegin",e):t.appendChild(e)}}}]),r}(),s=(function(t){function e(){return n(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}i(e,p),o(e,[{key:"connectedCallback",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"open",e=this.attachShadow({mode:t});this._appendStyles(e),this.clone&&e.appendChild(this.clone)}}])}(),function(t){function e(){return n(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return i(e,p),o(e,[{key:"_appendStyles",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this;if(this._styles){if(!l[this._styles]){var n=document.createElement("style"),o=document.createTextNode(this._styles);n.appendChild(o),n.setAttribute("data-c-name",this.nodeName.toLowerCase()),document.querySelector("head").appendChild(n),l[this._styles]=!0}this._styles="// Style threated as global",r(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_appendStyles",this).call(this,t)}}}]),e}()),u=function(t){function a(){return n(this,a),c(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return i(a,s),o(a,[{key:"connectedCallback",value:function(){r(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"connectedCallback",this).call(this);var t=this.getAttribute("type"),e=document.createElement("div");for(e.className="o-top-content-bar__box";this.childNodes.length;)e.appendChild(this.firstChild);this.className="o-top-content-bar o-top-content-bar--"+t,this.appendChild(e)}}]),a}();window.customElements.define("axa-top-content-bar",u)}();
