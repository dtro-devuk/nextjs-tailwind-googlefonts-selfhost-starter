(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var s=o.key.slice(o.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var u=d[c];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var f=o.props[u],p=r[u]||new Set;"name"===u&&i||!p.has(f)?(p.add(f),r[u]=p):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),f=function(e){i(n,e);var t=l(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rQ2n:function(e,t,n){"use strict";var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),a=n.n(o),i=function(e){var t=e.title,n=e.description;return Object(r.jsxs)(a.a,{children:[Object(r.jsx)("meta",{charSet:"UTF-8"}),Object(r.jsx)("title",{children:t||""}),Object(r.jsx)("meta",{name:"description",content:n||""}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1 shrink-to-fit=no, user-scalable=0"})]})},s=function(e){var t=e.caption,n=e.author,o=e.description,a=e.licenseInfo;return Object(r.jsxs)("header",{id:"header",role:"banner",className:"sticky-header\r flex flex-col items-center text-center\r bg-gray-800",children:[Object(r.jsx)("div",{className:"p-3 font-black font-Oswald-VariableFont\r text-lg md:text-3xl lg:text-4xl\r text-white",children:t||""}),Object(r.jsxs)("div",{className:"p-3 font-bold italic\r font-Grandstander-VariableFont\r text-2xl md:text-3xl lg:text-4xl\r text-blue-400",children:["@",n||""]}),Object(r.jsxs)("div",{className:"bg-gray-500 w-full",children:[Object(r.jsx)("section",{"aria-label":"Demo description",children:Object(r.jsx)("h1",{className:"p-3 mb-3 font-normal text-white italic font-serif text-center",children:o})}),Object(r.jsx)("section",{"aria-label":"Google Font License Information",children:Object(r.jsxs)("div",{className:"bg-gray-300 w-full font-sans font-normal text-center p-3",children:[Object(r.jsx)("h2",{className:"font-bold text-gray-700 text-center uppercase leading-loose p-3",children:"Google Font Licensing"}),Object(r.jsx)("p",{className:" text-gray-800 font-serif font-bold p-3",children:a}),Object(r.jsx)("p",{className:"text-gray-800 font-serif text-center",children:"An `OFL.txt` file detailing the license should be stored alongside the fonts, when self-hosted and in your GitHub Repo"})]})})]})]})},c=function(e){var t=e.caption,n=e.licenseInfo;return Object(r.jsx)("footer",{id:"main-footer",role:"contentinfo","aria-label":"main footer content info",className:"w-full p-3\r flex flex-col items-center text-center \r bg-gray-800 ",children:Object(r.jsxs)("div",{className:"text-white font-Oswald-VariableFont",children:[Object(r.jsx)("div",{className:"bg-gray-300 w-full font-sans font-normal text-center p-3",children:Object(r.jsx)("p",{className:" text-gray-800",children:n})}),Object(r.jsx)("p",{className:" text-xl md:text-2xl lg:text-3xl p-3",children:t})]})})},l="Next.js, Tailwind CSS and Google Fonts Self-Hosting Demo",u="A simple demo to show how to use self-hosted Google fonts in Next.js, whilst using Tailwind CSS. The use of font-dispay attribute is used to stop FOUT and FOIT. Try refreshing the page, there is no signs of either of these.",f="It is important to always read the license for every font that you use. All of the Google fonts used here use the SIL Open Font License, v1.1. Some fonts use the Apache 2 license. The Ubuntu fonts use the Ubuntu Font License v1.0.";t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{id:"container",className:"bg-gray-300",children:[Object(r.jsx)(i,{title:l,description:u}),Object(r.jsx)(s,{caption:l,author:"dtro-devuk",description:u,licenseInfo:f}),Object(r.jsx)("main",{id:"main-content",role:"main","aria-label":"main content area for the page",className:"flex-1 p-3 overflow-y-hidden justify-center\r mx-2 sm:my-12 sm:text-sm\r md:mx-8 \r leading-relaxed\r bg-white",children:t}),Object(r.jsx)(c,{caption:l,licenseInfo:f})]})}}}]);