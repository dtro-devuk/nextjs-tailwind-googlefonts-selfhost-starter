_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{A0Lk:function(e,t,n){!function(){function t(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function a(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function s(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function o(e,n){function a(){var e=o;s(e)&&e.a.parentNode&&n(e.g)}var o=e;t(e.b,a),t(e.c,a),s(e)}function r(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}var i=null,c=null,l=null,d=null;function f(){return null===d&&(d=!!document.fonts),d}function h(){if(null===l){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(t){}l=""!==e.style.font}return l}function u(e,t){return[e.style,e.weight,h()?e.stretch:"","100px",t].join(" ")}r.prototype.load=function(e,t){var s=this,r=e||"BESbswy",l=0,d=t||3e3,h=(new Date).getTime();return new Promise((function(e,t){if(f()&&!function(){if(null===c)if(f()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);c=!!e&&603>parseInt(e[1],10)}else c=!1;return c}()){var b=new Promise((function(e,t){!function n(){(new Date).getTime()-h>=d?t(Error(d+"ms timeout exceeded")):document.fonts.load(u(s,'"'+s.family+'"'),r).then((function(t){1<=t.length?e():setTimeout(n,25)}),t)}()})),p=new Promise((function(e,t){l=setTimeout((function(){t(Error(d+"ms timeout exceeded"))}),d)}));Promise.race([p,b]).then((function(){clearTimeout(l),e(s)}),t)}else!function(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t),e()})):document.attachEvent("onreadystatechange",(function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())}))}((function(){function c(){var t;(t=-1!=m&&-1!=x||-1!=m&&-1!=j||-1!=x&&-1!=j)&&((t=m!=x&&m!=j&&x!=j)||(null===i&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),i=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=i&&(m==O&&x==O&&j==O||m==w&&x==w&&j==w||m==y&&x==y&&j==y)),t=!t),t&&(v.parentNode&&v.parentNode.removeChild(v),clearTimeout(l),e(s))}var f=new n(r),b=new n(r),p=new n(r),m=-1,x=-1,j=-1,O=-1,w=-1,y=-1,v=document.createElement("div");v.dir="ltr",a(f,u(s,"sans-serif")),a(b,u(s,"serif")),a(p,u(s,"monospace")),v.appendChild(f.a),v.appendChild(b.a),v.appendChild(p.a),document.body.appendChild(v),O=f.a.offsetWidth,w=b.a.offsetWidth,y=p.a.offsetWidth,function e(){if((new Date).getTime()-h>=d)v.parentNode&&v.parentNode.removeChild(v),t(Error(d+"ms timeout exceeded"));else{var n=document.hidden;!0!==n&&void 0!==n||(m=f.a.offsetWidth,x=b.a.offsetWidth,j=p.a.offsetWidth,c()),l=setTimeout(e,50)}}(),o(f,(function(e){m=e,c()})),a(f,u(s,'"'+s.family+'",sans-serif')),o(b,(function(e){x=e,c()})),a(b,u(s,'"'+s.family+'",serif')),o(p,(function(e){j=e,c()})),a(p,u(s,'"'+s.family+'",monospace'))}))}))},e.exports=r}()},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RNiq:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),s=n("rQ2n"),o=n("q1tI"),r=n("A0Lk");t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return t&&function(){var e=!1,t="/nextjs-tailwind-googlefonts-selfhost-starter/static/fonts/fonts.css";console.log(e),console.log(t);var n=document.createElement("link");n.href=t,n.rel="stylesheet",document.head.appendChild(n),new r("Grandstander Variable").load().then((function(){console.log("Font has loaded."),document.documentElement.classList.add("Grandstander Variable")})).catch((function(){console.log("Font Sans failed to load.")}))}(),Object(o.useEffect)((function(){n(!0)}),[]),Object(a.jsx)(s.a,{children:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{role:"heading","aria-level":"1",className:" p-3 text-center text-red-900 font-black text-xl",children:"The Sample Fonts follow..."}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{role:"heading","aria-level":"2",className:" p-3 text-center text-blue-900 font-bold",children:"Sans Examples"}),Object(a.jsx)("p",{className:"font-sans font-normal p-3 text-center text-gray-900",children:"Font Sans Serif - Oswald (400)"}),Object(a.jsx)("p",{className:"font-sans font-bold p-3 text-center text-gray-900",children:"Font Sans Serif - Oswald (700)"}),Object(a.jsx)("p",{className:"font-serif font-normal p-3 text-center text-gray-900",children:"Font Sans - Merriweather Regular (400)"}),Object(a.jsx)("p",{className:"font-serif font-bold p-3 text-center text-gray-900",children:"Font Sans - Merriweather Bold (700)"}),Object(a.jsx)("hr",{}),Object(a.jsx)("h2",{role:"heading","aria-level":"2",className:"font-sans p-3 text-center text-blue-900 text-xl",children:"Variable Fonts"}),Object(a.jsx)("h3",{role:"heading","aria-level":"3",className:"italic font-Grandstander-VariableFont p-3 text-center text-blue-900 font-bold",children:"Grandstander Fonts 100-900"}),Object(a.jsxs)("div",{className:"text-center",children:[Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-thin",children:"Grandstander V 100"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-extra light",children:"Grandstander V 200"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-light",children:"Grandstander V 300"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-normal",children:"Grandstander V 400"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-medium",children:"Grandstander V 500"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-semibold",children:"Grandstander V 600"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-bold",children:"Grandstander V 700"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-extrabold",children:"Grandstander V 800"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-Grandstander-VariableFont font-black",children:"Grandstander V 900"}),Object(a.jsx)("br",{}),Object(a.jsx)("h3",{role:"heading","aria-level":"3",className:"font-Oswald-VariableFont_wght p-3 text-center text-blue-900 font-bold",children:"Oswald Fonts 100-900"}),Object(a.jsx)("p",{className:"font-sans font-thin",children:"Oswald V 100"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-extra light",children:"Oswald V 200"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-light",children:"Oswald V 300"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-normal",children:"Oswald V 400"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-medium",children:"Oswald V 500"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-semibold",children:"Oswald V 600"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-bold",children:"Oswald V 700"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-extrabold",children:"Oswald V 800"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{className:"font-sans font-black",children:"Oswald V 900"}),Object(a.jsx)("br",{})]})]})})}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,3]]]);