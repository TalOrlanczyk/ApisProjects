(this.webpackJsonpapisaou=this.webpackJsonpapisaou||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),o=(a(83),a(84),a(85),a(86),function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("span",{className:"Span-color"},"myApiProject "))}),s=(a(87),a(21)),u=function(){return c.a.createElement("div",{className:"Logo"},c.a.createElement(s.b,{to:"/"},"header"))},i=(a(93),a(12)),m=(a(94),a(54)),d=a.n(m),f=a(58),b=a.n(f),E=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===a?c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var a="; expires="+t.toUTCString();document.cookie="theme=darkmode"+a+";";var n=document.getElementById("API");n.classList.add("darkmode"),n.classList.remove("lightmode"),r("darkmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon"}))):c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=document.getElementById("API"),a=new Date;a.setDate(a.getDate()+1);var n="; expires="+a.toUTCString();document.cookie="theme=lightmode"+n+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(b.a,{className:"ThemeFunc-icon"}))))},v=function(){return console.log("func"),c.a.createElement("div",{className:"funcBar-grid"},c.a.createElement(E,null))},p=function(){return c.a.createElement("div",{className:"Header-grid"},c.a.createElement(u,null),c.a.createElement(o,null),c.a.createElement(v,null))},h=a(11),j=(a(96),a(43)),O=(a(97),a(98),a(59)),g=a.n(O),N=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},y=function(e){var t=e.currencyOptions,a=e.selectedCurrency,r=e.onChangeCurrency,l=e.onChangeAmount,o=e.amount,s=e.compereCurreny,u=Object(n.useState)(!1),m=Object(i.a)(u,2),d=m[0],f=m[1],b=Object(n.useState)(""),E=Object(i.a)(b,1)[0],v=Object(n.useRef)(null);return N(v,(function(){!0===d&&f(!1)})),c.a.createElement("div",{className:"Currecy"},c.a.createElement("div",{className:!0===d?"color-picker open":"color-picker",onClick:function(e){f(!d)}},c.a.createElement("input",{id:"color-input",type:"hidden",name:"coloris_panneau",value:E}),c.a.createElement("div",{className:"color-value list-item"},a,c.a.createElement(g.a,{className:!0===d?"arrowdown upside":"arrowdown"})),c.a.createElement("ul",{className:"list",ref:!0===d?v:null},t.filter((function(e){return e!==s})).map((function(e){return c.a.createElement("li",{key:e,className:a===e?"list-item picked":"list-item",onClick:function(t){return r(e)}},c.a.createElement("span",null,e))})))),c.a.createElement("input",{type:"number",className:"money-conver",value:o,onChange:l}))},k=(a(99),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("span",null,"Loading"))}),C="https://api.exchangeratesapi.io/latest",w=function(){var e,t,a=Object(n.useState)([]),r=Object(i.a)(a,2),l=r[0],o=r[1],s=Object(n.useState)(),u=Object(i.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(),b=Object(i.a)(f,2),E=b[0],v=b[1],p=Object(n.useState)(),h=Object(i.a)(p,2),O=h[0],g=h[1],N=Object(n.useState)(1),w=Object(i.a)(N,2),S=w[0],x=w[1],L=Object(n.useState)(!0),I=Object(i.a)(L,2),D=I[0],F=I[1];D?(t=S,e=S*O):(e=S,t=S/O),Object(n.useEffect)((function(){fetch(C).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];o([e.base].concat(Object(j.a)(Object.keys(e.rates)))),d(e.base),v(t),g(e.rates[t])}))}),[]),Object(n.useEffect)((function(){null!=m&&null!=E&&fetch("".concat(C,"?base=").concat(m,"&symbols=").concat(E)).then((function(e){return e.json()})).then((function(e){return g(e.rates[E])}))}),[m,E]);var M=Object(n.useCallback)((function(e){x(e.target.value),F(!0)}),[]),P=Object(n.useCallback)((function(e){x(e.target.value),F(!1)}),[]);return null==m||null==E||null==l||null==t||null==O?c.a.createElement(k,null):c.a.createElement("div",{className:"coverter-main"},c.a.createElement(y,{currencyOptions:l,selectedCurrency:m,onChangeCurrency:function(e){return d(e)},onChangeAmount:function(e){return M(e)},amount:t,compereCurreny:E}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(y,{currencyOptions:l,selectedCurrency:E,onChangeCurrency:function(e){return v(e)},onChangeAmount:function(e){return P(e)},amount:e,compereCurreny:m}))},S=a(28),x=a.n(S),L=a(23),I=a(44),D=(a(101),a(61)),F=a.n(D),M=a(62),P=a(15),A=a(133),B=a(60),T=a.n(B),H="https://api.exchangeratesapi.io/",Y={classes:{underline:"date-border-color",input:"date-input-color"}},_={classes:{root:"date-label-color"}},J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({}),o=Object(i.a)(l,2),s=o[0],u=o[1],m=Object(n.useState)({}),d=Object(i.a)(m,2),f=d[0],b=d[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),p=v[0],h=v[1],O=Object(n.useState)(new Date),g=Object(i.a)(O,2),N=g[0],y=g[1];Object(n.useEffect)((function(){fetch("".concat(H,"latest")).then((function(e){return e.json()})).then((function(e){var t=e.date,a=new Date(t),n=e.rates;n[e.base]="",h(Object.keys(n).length),r([e.base].concat(Object(j.a)(Object.keys(e.rates)))),Object.keys(n).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"latest?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=s;a[t]=Object.entries(e.rates)[0][1],u(Object(L.a)(Object(L.a)({},s),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c,l=a.getFullYear()+"-"+(((c=a.getMonth()+1)>=10?c:"0"+c)+"-")+(a.getDate()-1);Object.keys(n).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H).concat(l,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=f;a[t]=Object.entries(e.rates)[0][1],b(Object(L.a)(Object(L.a)({},f),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]);var C=function(e){var t=100-e[1]/f[e[0]]*100,a=t.toString().split(".")[0],n=t.toString().split(".")[1];return void 0!=n&&(n=n.substring(0,3)),2===n.length?n+="0":1===n.length&&(n+="00"),a+"."+n},w=function(e){return e>0?"positive":e<0?"negative":"same"};return p!==Object.keys(f).length||Object.keys(s).length!==p||Object.keys(s).length!==Object.keys(f).length?c.a.createElement(k,null):c.a.createElement("div",{className:"date-table"},c.a.createElement("div",{className:"date"},c.a.createElement(P.a,{utils:M.a},c.a.createElement(A.a,{disableFuture:!0,InputLabelProps:_,InputProps:Y,label:"Responsive",views:["year","month","date"],value:N,onChange:function(e){return y(e)},format:"dd/MM/yyyy"})),c.a.createElement(T.a,{className:"date-search",onClick:function(e){return function(e){var t=new Date(N),n=function(e){return e>=10?e:"0"+e},c=t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+(t.getDate()-1),r=t.getFullYear()+"-"+n(t.getMonth()+1)+"-"+t.getDate();a.filter((function(e){return"ILS"!==e})).map(function(){var e=Object(I.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H).concat(r,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=s;a[t]=Object.entries(e.rates)[0][1],u(Object(L.a)(Object(L.a)({},s),a[t]))}));case 2:return e.next=4,fetch("".concat(H).concat(c,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=f;a[t]=Object.entries(e.rates)[0][1],b(Object(L.a)(Object(L.a)({},f),a[t]))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}()}})),c.a.createElement("div",{className:"table"},c.a.createElement("table",{className:"tableCovertor"},c.a.createElement("thead",{className:"tableHeader"},c.a.createElement("tr",null,c.a.createElement("td",null,"type"),c.a.createElement("td",null,"rate"),c.a.createElement("td",null,"daily change"),c.a.createElement("td",null,"graph"))),c.a.createElement("tbody",{className:"tableBody"},Object.entries(s).filter((function(e){return"ILS"!==e[0]})).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",{className:"text-color"},e[0]),c.a.createElement("td",{className:"text-color"},e[1]),c.a.createElement("td",{className:w(C(e))},Math.abs(C(e))+"%"),c.a.createElement("td",null,c.a.createElement(F.a,{className:"icon-color"})))}))))))},R=function(){return c.a.createElement("div",{className:"converter-warrper"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"Converter-Header"},"Convert")),c.a.createElement(w,null),c.a.createElement(J,null))},U=(a(102),a(103),function(){return c.a.createElement("div",{className:"convertor"},c.a.createElement("div",{className:"coin-flip"},c.a.createElement("div",{className:"coin-flip-inner"},c.a.createElement("div",{className:"front-coin"}),c.a.createElement("div",{className:"back-coin"}))),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"converter-link"},"Convertor")))}),W=(a(104),function(){return c.a.createElement("div",{className:"poxedex"},c.a.createElement("div",{className:"pokeball"},c.a.createElement("div",{className:"pokeball__button"})),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(s.b,{to:"/Converter",className:"poxedex-link"},"Poxedec")))}),q=function(){return c.a.createElement("div",{className:"MainPage"},c.a.createElement(U,null),c.a.createElement(U,null),c.a.createElement(U,null),c.a.createElement(W,null),c.a.createElement(U,null))},$=(a(105),function(){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{id:"letter-object",className:"text-flicker-in-glow anim-object",onClick:function(e){return console.log("d")}},"404"))}),z=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(p,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/",component:q}),c.a.createElement(h.a,{exact:!0,path:"/Converter/",component:R}),c.a.createElement(h.a,{component:$})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},78:function(e,t,a){e.exports=a(106)},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.99f7efa9.chunk.js.map