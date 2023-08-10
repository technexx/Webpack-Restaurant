(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(937),t.b),u=i()(o()),l=d()(s);u.push([e.id,`:root {\n    --dark-red: #7f1d1d;\n    --red-orange: #f87171\n}\n\n*{\n    box-sizing: border-box;\n    font-family: "Roboto";\n    margin: 0px;\n    padding: 0px;\n}\n\n.content {\n    overflow: auto;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    padding: 2rem 1rem;\n    background-color: #fee2e2;\n    border: 1rem solid var(--red-orange);\n    border-image: repeating-linear-gradient(45deg, transparent, transparent 5px, var(--red-orange) 6px, var(--red-orange) 15px, transparent 16px, transparent 20px) 20/1rem;\n}\n\n/*Seems unconstrained to top*/\n.nav {\n    display: flex;\n    justify-content: center;\n    column-gap: 60px;\n    font-size: 20px;\n    margin-top: 10px;\n\n    background: #fff;\n    font-family: Montserrat, sans-serif;;\n    font-size: 24px;\n    line-height: 30px;\n    font-weight: bold;\n    color: #991b1b;\n    padding: 40px;\n    box-shadow:\n      inset #450a0a 0 0 0 5px, \n      inset #7f1d1d 0 0 0 1px, \n      inset #991b1b 0 0 0 10px, \n      inset #b91c1c 0 0 0 11px, \n      inset #dc2626 0 0 0 16px, \n      inset #ef4444 0 0 0 17px, \n      inset #f87171 0 0 0 21px, \n      inset #fca5a5 0 0 0 22px;\n    text-shadow: 3px 3px 1px #fecaca;\n}\n\n.nav p:hover {\n    cursor: pointer;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    font-size: 50px;\n    font-weight: bold;\n    color: #450a0a;\n    border: 3px solid blue;\n    margin-top: 25px;\n}\n\n.intro {\n    font-size: 20px;\n    border: 3px solid black;\n    margin-top: 40px;\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\n.intro p {\n    margin-bottom: 20px;\n}\n\n.hours {\n    text-align: center;\n    font-size: 20px;\n    margin-top: 20px;\n}\n\n.hours #hours-header {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.address {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    margin-top: 40px;\n    font-size: 20px;\n}\n\n.address #address-header {\n    font-weight: bold;\n    margin-bottom: 10px;\n}\n\n.menu {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, minmax(250px, 350px));\n}\n\n.menu-item {\n    border: solid 2px black;\n    font-size: 33px;\n}\n\n@font-face {\n    font-family: "Roboto";\n    src: url(${l}) format("woff2");\n}`,""]);const p=u},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],u=a[s]||0,l="".concat(s," ").concat(u);a[s]=u+1;var p=t(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var d=r(e,o),s=0;s<a.length;s++){var u=t(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},937:(e,n,t)=>{e.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),u=t.n(s),l=t(589),p=t.n(l),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=document.querySelector(".main-body");function y(){h.innerHTML=""}function x(){!function(){const e=document.createElement("div");e.classList.add("header"),h.appendChild(e),document.querySelector(".header").innerText="Cantibal's Feed Boat and Slurry House"}(),function(){const e=document.createElement("div");e.classList.add("intro"),h.append(e);const n=document.createElement("p"),t=document.createElement("p"),r=document.createElement("p"),o=document.querySelector(".intro");o.appendChild(n),o.appendChild(t),o.appendChild(r),n.innerText="There are a lot of misconceptions about cannibals - they're prone to sensory overload, they're too kinesthetically inclined, they wreck the basic moral fabric of civilized society. In our golden age of humanitarianism, this slander is woefully anachronistic yet stubbornly persistant, which is why we seek to change the narrative!",t.innerText="At Cantibal's Feed Boat and Slurry House, we offer human-friendly alternatives for all you intra-species loving gourmands. Our menu is chock full of the dishes you grew up with (or came to know later, as the cravings overtook reason). We have cereb au gratin, tongue pâté, liver tartare, and even eyeball chowder - all sourced from local, home-grown vat people. These laboratory abominations of nature are 100% certified human-free, meeting the United Nations' definition of \"Non-Human Humanoid\". Best of all, they are entirely indistinguishable from real people!",r.innerText="So come on down and try a chomp or two! We are located at the intersection of Wyatt and Herp, just off the 115 West, right where the old Arby's used to be."}(),function(){const e=document.createElement("div");e.classList.add("hours"),h.append(e);const n=document.querySelector(".hours"),t=document.createElement("p");t.setAttribute("id","hours-header"),n.appendChild(t),t.innerText="Hours";for(let e=0;e<7;e++){const t=document.createElement("p");t.setAttribute("id","day-"+(e+1)+"-hours"),n.appendChild(t)}const r=document.querySelectorAll(".hours > p");r[1].innerText="Monday: 10:00 p.m. - 2:30 a.m.",r[2].innerText="Tuesday: 10:00 p.m. - 2:30 a.m.",r[3].innerText="Wednesday: 6:00 p.m. - 5:00 a.m.",r[4].innerText="Thursday: 11:00 p.m. - 1:00 a.m.",r[5].innerText="Friday: 12:00 a.m. - 12:30 a.m.",r[6].innerText="Saturday: 12:15 a.m. - 12:20 a.m.",r[7].innerText="Sunday: 5:00 a.m. - 5:00 p.m."}(),function(){const e=document.createElement("div");e.classList.add("address"),h.append(e);const n=document.querySelector(".address"),t=document.createElement("p"),r=document.createElement("p"),o=document.createElement("p");n.appendChild(t),n.appendChild(r),n.appendChild(o),t.setAttribute("id","address-header"),r.setAttribute("id","address-body-one"),o.setAttribute("id","address-body-two"),t.innerText="Address:",r.innerText="505 Herp Drive",o.innerText="Magnum County, EZT 97134-029-82142-92X"}()}const b=document.querySelector(".main-body"),v=(e,n,t)=>({item:e,price:n,description:t}),g=document.querySelector(".main-body");!function(){const e=document.querySelector(".nav"),n=document.createElement("p"),t=document.createElement("p"),r=document.createElement("p");n.setAttribute("id","home-tab"),t.setAttribute("id","menu-tab"),r.setAttribute("id","contact-tab"),n.innerText="Home",t.innerText="Menu",r.innerText="Contact",e.appendChild(n),e.appendChild(t),e.appendChild(r)}(),x();const w=document.querySelector("#home-tab"),T=document.querySelector("#menu-tab"),E=document.querySelector("#contact-tab");w.addEventListener("click",(()=>{y(),x()})),T.addEventListener("click",(()=>{y(),function(){const e=document.createElement("div");e.classList.add("menu"),b.appendChild(e);const n=document.querySelector(".menu"),t=document.createElement("p");t.setAttribute("id","menu-header"),t.innerText="Menu";const r=document.createElement("div");r.classList.add("menu-items"),n.appendChild(t),n.appendChild(r);const o=v("Cerebrum Au Gratin","$32.69","The juiciest, most executive part of the brain, slowly marinated and topped with Dahmer Chedder and eyecrust breadcrumbs."),a=v("Tongue Pâté","$26.92","Vat-organic certified, gluten-free tongue minced with vegetables, marinated with our signature house Slurry Sauce, and served with Dutch bread."),i=v("Liver tartare","54.99","Tender liver, finely minced and mixed with our Mystery Mayhem Mix, served on a bed of pre-digested greens"),c=v("Eyeball Chowder","$28.50","20/30 minimum pre-expiration vision eyeballs served in original ocular cavity with mixed vegetables"),d=document.querySelector(".menu-items"),s=[o,a,i,c];for(let e=0;e<s.length;e++){document.createElement("div").classList.add("menu-item");const n=document.createElement("p"),t=document.createElement("p"),r=document.createElement("p");n.innerText=s[e].item,t.innerText=s[e].description,r.innerText=s[e].price,d.appendChild(n),d.appendChild(t),d.appendChild(r)}}()})),E.addEventListener("click",(()=>{y(),function(){const e=document.createElement("div");e.classList.add("contact"),g.appendChild(e),document.querySelector(".contact").innerText="Contact Page"}()}))})()})();