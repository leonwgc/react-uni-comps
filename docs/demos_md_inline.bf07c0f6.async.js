(self["webpackChunkreact_uni_comps"]=self["webpackChunkreact_uni_comps"]||[]).push([[6822],{46502:function(){},79235:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r,i=n(15948),o=n(67294),u=n(85805),c=n.n(u),a=n(87190),l=n(2923),s=(n(46502),a.ZP.div(r||(r=(0,i.Z)(["\n  background-color: #fff;\n  display: flex;\n  height: 100vh;\n  width: 100%;\n  padding-top: 160px;\n  justify-content: center;\n  font-size: 40px;\n  color: #005cff;\n  text-align: center;\n\n  .desc {\n    font-size: 20px;\n    color: #666;\n  }\n"]))));function f(){var e=(0,o.useRef)();return(0,l.Z)((()=>{c()(e.current).line("<span class='title'>&#9834; react-uni-comps</span>").cursor(!1).line("<span class='desc'>\u5728\u7ebf\u6587\u6863</span>")})),o.createElement(s,null,o.createElement("div",{ref:e}))}},2923:function(e,t,n){"use strict";var r=n(67294),i=e=>{var t=(0,r.useRef)(!1);(0,r.useLayoutEffect)((()=>{t.current||(t.current=!0,null===e||void 0===e||e())}),[])};t["Z"]=i},23270:function(e){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),u=Object.keys(t);if(o.length!==u.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),a=0;a<o.length;a++){var l=o[a];if(!c(l))return!1;var s=e[l],f=t[l];if(i=n?n.call(r,s,f,l):void 0,!1===i||void 0===i&&s!==f)return!1}return!0}},85805:function(e,t,n){var r,i;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(o,c){"object"===u(t)?e.exports=c():(r=c,i="function"===typeof r?r.call(t,n,t,e):r,void 0===i||(e.exports=i))}(0,(function(){"use strict";var e=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)},t=["typer","cursor-block","cursor-soft","cursor-hard","no-cursor"],n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@$^*()";return function(r,i){var u=[],c=document.body,a={},l=0;if("String"===d(r)&&(r=document.querySelector(r)),r.getAttribute("data-typer"))throw new Error("You've already called Typer on this element.");i=p(i),u.speedSet=!0,u.voids=["AREA","BASE","BR","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"],u.classNames=t,u.id=e(),r.setAttribute("data-typer",u.id);var s={cursor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(u.cursorRan)return this;if(u.cursorRan=!0,!1===e)return u.cursor="no-cursor",this;var t=e.color,n=e.blink,r=e.block,i=[];return t&&y('[data-typer="'.concat(u.id,'"] .typer::after'),"background-color:".concat(t)),i.push("hard"===n?"cursor-hard":"cursor-soft"),!0===r&&i.push("cursor-block"),u.cursor=i.join(" "),this},line:function(e,t){return g("line",e,t),u.typing||(u.typing=!0,b()),this},continue:function(e,t){return g("continue",e,t),this},military:function(e,t){return g("military",e,t),u.typing||(u.typing=!0,b()),this},pause:function(e){return u.push({pause:+e||500}),this},emit:function(e,t){return t?"String"===d(t)&&(t=document.querySelector(t)):t=c,u.push({emit:e,el:t}),this},listen:function(e,t){return t?"String"===d(t)&&(t=document.querySelector(t)):t=c,u.push({listen:e,el:t}),this},back:function(e,t){return u.push({back:e,speed:t}),this},empty:function(){return u.push({empty:!0}),this},run:function(e){return u.push({run:e}),this},end:function(e,t){return u.push({end:!0}),u.cb=function(){return h(e,t)},N("end")},halt:function(){if(!u.typing)return this;u.halt=!0},resume:function(){if(!u.typing)return this;u.complete||(u.halt=!1,u.resume(),u.resume=null)},repeat:function(e,t){return u.push({repeat:!0,num:e,shouldEmpty:t,id:l++}),this},kill:k};function f(e){return{}.toString.call(e).slice(8,-1)}function d(e){var t=f(e);if("html"!==t.slice(0,4).toLowerCase()&&"String"!==t)throw"You need to provide a string selector, such as '.some-class', or an html element.";return t}function p(e){var t=f(e);if(void 0===e)return u.speedSet?i:70;if("Number"===t&&!isNaN(e))return e;if("Object"===t){var n=e.hasOwnProperty("min"),r=e.hasOwnProperty("max"),o=e.hasOwnProperty("speed");if(o&&!isNaN(e.speed))return e.speed;if(n&&r&&e.min<e.max)return e;if(!Object.keys(e).length&&u.speedSet)return i;if(!n&&!r&&!o)return i}throw new Error("You have provided an invalid value for speed.")}function v(e){if(!e)return null;if(+e)return{speed:+e,chars:3};if("Object"===f(e))return{speed:+e.speed||50,chars:+e.chars||3};throw new Error("You have provided an invalid value for military.")}function h(e,t){u.style&&u.style.remove(),u.newDiv&&m(),r.removeAttribute("data-typer"),c.removeEventListener("killTyper",k),u.newDiv&&u.newDiv.classList.add("white-space"),u.newDiv="","function"==typeof e?e(r):"function"==typeof t&&t(r),!0!==e&&!0!==t||c.dispatchEvent(new Event("typerFinished"))}function m(){t.forEach((function(e){return u.newDiv.classList.remove(e)}))}function y(e,t){u.style=document.createElement("style"),u.style.appendChild(document.createTextNode("")),document.head.appendChild(u.style);var n=document.styleSheets[document.styleSheets.length-1];"insertRule"in n?n.insertRule("".concat(e,"{").concat(t,"}"),0):n.addRule(e,t)}function g(e,t,n){var r="line"===e,i="continue"===e;if(t||n)if("Object"===f(t))(r||i&&t.container)&&u.push(a(t));else if(isNaN(n))u.push(a(n,t));else{var c;u.push((o(c={},e,t),o(c,"speed",p(n)),o(c,"html",!0),c))}else r&&u.push({line:1});function a(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,u=n.container,c=n.totalTime,a=n.military,l=!i&&("String"===f(u)?document.querySelector(u).textContent:u.textContent);return o(t={},e,i||l),o(t,"speed",p(n)),o(t,"html",!1!==n.html),o(t,"element",r?n.element:null),o(t,"military",v(a)),o(t,"totalTime",c),t}}function b(){if(u.item>=0||(u.item=0),u.item===u.length)return u.complete=!0,c.removeEventListener("killTyper",k);u.ks||(u.ks=!0,c.addEventListener("killTyper",k)),u.cursor||(u.cursor="cursor-soft"),u.type=setInterval((function(){if(!u.length)return clearInterval(u.type);var e,t=u[u.item];t.line?w(t):t["continue"]?function(e){clearInterval(u.type),E(e)}(t):t.pause?function(e){clearInterval(u.type),u.pause=setTimeout((function(){u.pause=null,u.item++,b()}),e.pause)}(t):t.emit?function(e){clearInterval(u.type),e.el.dispatchEvent(new Event(e.emit)),u.item++,b()}(t):t.listen?function(e){var t=e.el,n=e.listen;function r(e){u.listening=!1,t.removeEventListener(e.type,r),u.killed||(u.item++,b())}clearInterval(u.type),u.listening=!0,t.addEventListener(n,r),a={el:t,type:n,fxn:r}}(t):t.back?function(e){var t=e.back,n=e.speed;if(clearInterval(u.type),!u.newDiv||!u.newDiv.textContent)return u.item++,b();var r=function e(t){var n=0;return Array.from(t.childNodes).forEach((function(t){u.voids.includes(t.nodeName)&&n++,t.childNodes.length&&(n+=e(t))})),n}(u.newDiv),o=u.newDiv.textContent.length;if("empty"===t){if(!n||n>=o)u.newDiv.innerHTML="";else{var c=u.newDiv.cloneNode(!0),a=s(c);n<0&&(n+=o);for(var l=0;l<n;l++)a();d(c),u.newDiv.innerHTML=c.innerHTML}return u.item++,b()}function s(e){var r=0,o=f(e||u.newDiv).reverse();return function c(){if(u.halt)return u.resume=function(){return u.goBack=setInterval(c,n||i)},clearInterval(u.goBack);var a=o[0];u.voids.includes(a.nodeName)?(a.remove(),o.shift()):(a.textContent=a.textContent.slice(0,-1),a.length||o.shift()),e||++r===t&&(clearInterval(u.goBack),d(u.newDiv),u.item++,b())}}function f(e){var t=[],n=Array.from(e.childNodes);return n.length?(n.forEach((function(e){e.childNodes.length?t=t.concat(f(e)):t.push(e)})),t):t}function d(e){Array.from(e.childNodes).forEach((function(e){u.voids.includes(e.nodeName)||(e.childNodes.length&&d(e),"#text"===e.nodeName||e.innerHTML.length||e.remove(),"#text"!==e.nodeName||e.length||e.remove())}))}t>o+r&&(t="all"),"all"===t&&(t=o+r),t<0&&(t=o+r- -1*t),u.goBack=setInterval(s(),n||i)}(t):t.empty?(r.innerHTML="",w({line:1})):t.run?(e=t.run,clearInterval(u.type),e(r),u.item++,b()):t.repeat?function(e){if(clearInterval(u.type),e.shouldEmpty&&(r.innerHTML=""),e.num){e.num--;var t=u.findIndex((function(t){var n=t.repeat,r=t.id;return n&&r===e.id-1}))+1;u.item=t}else u.item++;b()}(t):t.end&&(clearInterval(u.type),u.cb())}),0)}function w(e){clearInterval(u.type),u.newDiv&&(m(),u.newDiv.classList.add("white-space"),u.newDiv.innerHTML||(u.newDiv.innerHTML=" "));var t=document.createElement(e.element||"div");if(t.setAttribute("data-typer-child",u.id),t.className="".concat(u.cursor," typer white-space"),r.appendChild(t),u.newDiv=t,1===e.line)return u.item++,b();E(e)}function T(e,t){var n,r,i="Object"===f(e)?(n=e.min,r=e.max,Math.floor(Math.random()*(r-n+1)+n)):e;u.halt?u.resume=function(){return u.iterator=setTimeout(t,i)}:u.iterator=setTimeout(t,i)}function E(e){var t,r,i=e.line||e["continue"],o=document.createElement("div");if(Array.isArray(i))return t=0,void T(r=e.totalTime?e.totalTime/i.length:e.speed,(function n(){var c=i[t++];o.textContent=c,u.newDiv.innerHTML+=e.html?c:o.innerHTML,t===i.length?s():T(r,n)}));function c(e,t){var n=[];e=Array.from(e);for(var r=0;r<e.length;r++){var i=e[r],o=i.nodeName;"#text"===o?n.push({parent:t,content:i.textContent}):i.childNodes.length?function(){var e=document.createElement(o);Array.from(i.attributes).forEach((function(t){e.setAttribute(t.name,t.value)})),n.push({parent:t,newNode:e}),n=n.concat(c(i.childNodes,e))}():u.voids.includes(o)&&n.push({parent:t,voidNode:i})}return n}function a(){return n[Math.floor(Math.random()*n.length)]}function l(t,n,r){var i=0,o=e.military,c=o.speed,l=o.chars;t.innerHTML+=a(),u.military=setInterval((function(){if(i===l)return t.innerHTML=t.innerHTML.slice(0,-1)+n,clearInterval(u.military),r();t.innerHTML=t.innerHTML.slice(0,-1)+a(),i++}),c)}function s(){return clearInterval(u.iterator),u.item++,b()}o.innerHTML=i,e.html?function(){var t=c(o.childNodes,u.newDiv),n=0,r=0,i=t[n++],a=e.totalTime?e.totalTime/i.content.length:e.speed;T(a,(function o(){if(i.content&&r===i.content.length&&(r=0,i=t[n++]),!i)return s();if(i.content){if(e.military)return l(i.parent,i.content[r++],(function(){T(a,o)}));i.parent.innerHTML+=i.content[r++]}else i.parent.appendChild(i.voidNode||i.newNode),i=t[n++];T(a,o)}))}():function(){var t=0,n=e.totalTime?e.totalTime/i.length:e.speed;T(n,(function r(){if(t===i.length)return s();var c=i[t];if(e.military)return l(u.newDiv,c,(function(){t++,T(n,r)}));"String"!==f(i)&&(o.textContent=c,c=o.innerHTML),u.newDiv.innerHTML+=c,t++,T(n,r)}))}()}function k(){return u.typing?(a.el&&a.el.removeEventListener(a.type,a.fxn),clearInterval(u.type),clearInterval(u.iterator),clearInterval(u.goBack),clearInterval(u.military),clearTimeout(u.pause),h(),N("kill")):s}function N(e){var t=function(){return s};return Object.keys(s).forEach((function(n){"end"===e&&"kill"===n||(s[n]=t)})),"kill"===e&&(u.killed=!0),s}return s}}))}}]);