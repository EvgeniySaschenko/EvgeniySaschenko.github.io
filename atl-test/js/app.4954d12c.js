(function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-20bef795":"86f5f516","chunk-b9c84dc0":"fe247e9b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-20bef795":1,"chunk-b9c84dc0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-20bef795":"98f1442a","chunk-b9c84dc0":"572b2683"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/atl-test/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a78":function(e,t,n){},3820:function(e,t,n){"use strict";n("2a78")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"container"};function a(e,t){var n=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["f"])("div",o,[Object(r["i"])(n)])}n("3820");var i=n("6b0d"),s=n.n(i);const u={},c=s()(u,[["render",a]]);var l=c,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),f=[{path:"/product/:id",name:"product",component:function(){return n.e("chunk-b9c84dc0").then(n.bind(null,"e6e2"))}},{path:"/",name:"catalog",component:function(){return n.e("chunk-20bef795").then(n.bind(null,"260b"))}}],p=Object(d["a"])({history:Object(d["b"])("/atl-test/"),routes:f}),m=p,h=n("5502"),b=n("5530"),v=(n("a434"),{namespaced:!0,state:function(){return{items:[],itemsMap:{},lastId:1}},mutations:{addProduct:function(e,t){var n=e.lastId++;e.items.push({id:n,fields:Object(b["a"])({},t),fieldsCustom:{}}),e.itemsMap[n]=e.items.length-1},deleteProduct:function(e,t){var n=e.items,r=e.itemsMap[t];delete e.itemsMap[t],e.items.splice(r,1);for(var o=0;n.length>o;o++)e.itemsMap[n[o].id]=o},addCustomField:function(e,t){var n=t.productId,r=t.field,o=e.itemsMap[n];Object.assign(e.items[o].fieldsCustom,Object(b["a"])({},r))},deleteCustomField:function(e,t){var n=t.productId,r=t.fieldKey,o=e.itemsMap[n];delete e.items[o].fieldsCustom[r]},saveChangesFields:function(e,t){var n=t.productId,r=t.fieldsAll,o=e.itemsMap[n],a=e.items[o].fields,i={},s={};for(var u in r)a[u]?s[u]=r[u]:i[u]=r[u];e.items[o].fields=s,e.items[o].fieldsCustom=i}},actions:{},getters:{}}),g={namespaced:!0,state:function(){return{isDisplayTilesCatalogList:!0}},mutations:{changeDisplayCatalogList:function(e,t){e.isDisplayTilesCatalogList=t}},actions:{},getters:{}},y=Object(h["a"])({modules:{products:v,catalogList:g}});Object(r["c"])(l).use(y).use(m).mount("#app")}});
//# sourceMappingURL=app.4954d12c.js.map