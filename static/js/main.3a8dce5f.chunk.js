(this.webpackJsonpapisaou=this.webpackJsonpapisaou||[]).push([[0],{120:function(e,t,a){e.exports=a(247)},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),o=(a(125),a(6)),s=(a(126),a(127),a(128),function(){return c.a.createElement("div",{className:"Title"},c.a.createElement("span",{className:"Span-color"},"myApiProject "))}),i=(a(129),a(18)),u=function(){return c.a.createElement("div",{className:"Logo"},c.a.createElement(i.b,{to:"/"},"header"))},m=(a(134),a(135),a(55)),d=a.n(m),f=a(58),b=a.n(f),h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===a?c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var a="; expires="+t.toUTCString();document.cookie="theme=darkmode"+a+";";var n=document.getElementById("API");n.classList.add("darkmode"),n.classList.remove("lightmode"),r("darkmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon"}))):c.a.createElement("button",{className:"fab-class",onClick:function(e){return function(e){var t=document.getElementById("API"),a=new Date;a.setDate(a.getDate()+1);var n="; expires="+a.toUTCString();document.cookie="theme=lightmode"+n+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}},c.a.createElement("span",{className:"middle"},c.a.createElement(b.a,{className:"ThemeFunc-icon"}))))},v=function(){return console.log("func"),c.a.createElement("div",{className:"funcBar-grid"},c.a.createElement(h,null))},E=function(){return c.a.createElement("div",{className:"Header-grid"},c.a.createElement(u,null),c.a.createElement(s,null),c.a.createElement(v,null))},p=a(12),g=(a(137),a(138),a(139),a(96)),j=a.n(g),O=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(n.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))},N=function(e){var t=e.currencyOptions,a=e.selectedCurrency,r=e.onChangeCurrency,l=e.onChangeAmount,s=e.amount,i=e.compereCurreny,u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],f=m[1],b=Object(n.useState)(""),h=Object(o.a)(b,1)[0],v=Object(n.useRef)(null);return O(v,(function(){!0===d&&f(!1)})),c.a.createElement("div",{className:"Currecy"},c.a.createElement("div",{className:!0===d?"color-picker open":"color-picker",onClick:function(e){f(!d)}},c.a.createElement("input",{id:"color-input",type:"hidden",name:"coloris_panneau",value:h}),c.a.createElement("div",{className:"color-value list-item"},a,c.a.createElement(j.a,{className:!0===d?"arrowdown upside":"arrowdown"})),c.a.createElement("ul",{className:"list",ref:!0===d?v:null},t.filter((function(e){return e!==i})).map((function(e){return c.a.createElement("li",{key:e,className:a===e?"list-item picked":"list-item",onClick:function(t){return r(e)}},c.a.createElement("span",null,e))})))),c.a.createElement("input",{type:"number",className:"money-conver",value:s,onChange:l}))},k=(a(140),function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"circle"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("div",{className:"shadow"}),c.a.createElement("span",null,"Loading"))}),y="https://api.exchangeratesapi.io/latest",C=function(e){var t,a,r=e.currencyOptions,l=Object(n.useState)(r[0]),s=Object(o.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(r[1]),d=Object(o.a)(m,2),f=d[0],b=d[1],h=Object(n.useState)(),v=Object(o.a)(h,2),E=v[0],p=v[1],g=Object(n.useState)(1),j=Object(o.a)(g,2),O=j[0],C=j[1],S=Object(n.useState)(!0),w=Object(o.a)(S,2),x=w[0],D=w[1];x?(a=O,t=O*E):(t=O,a=O/E),Object(n.useEffect)((function(){fetch(y).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];p(e.rates[t])}))}),[]),Object(n.useEffect)((function(){null!=i&&null!=f&&fetch("".concat(y,"?base=").concat(i,"&symbols=").concat(f)).then((function(e){return e.json()})).then((function(e){return p(e.rates[f])}))}),[i,f]);var I=Object(n.useCallback)((function(e){C(e.target.value),D(!0)}),[]),L=Object(n.useCallback)((function(e){C(e.target.value),D(!1)}),[]);return null==i||null==f||null==r||null==a||null==E?c.a.createElement(k,null):c.a.createElement("div",{className:"coverter-main"},c.a.createElement(N,{currencyOptions:r,selectedCurrency:i,onChangeCurrency:function(e){return u(e)},onChangeAmount:function(e){return I(e)},amount:a,compereCurreny:f}),c.a.createElement("div",{className:"equals"},"="),c.a.createElement(N,{currencyOptions:r,selectedCurrency:f,onChangeCurrency:function(e){return b(e)},onChangeAmount:function(e){return L(e)},amount:t,compereCurreny:i}))},S=a(45),w=a.n(S),x=a(17),D=a(72),I=(a(142),a(105)),L=a(15),A=a(275),B=a(99),P=a.n(B),F=(a(143),a(97)),T=a.n(F),R=function(e){var t=e.text;return c.a.createElement("div",{className:"error-cant-search-limit"},c.a.createElement(T.a,null),c.a.createElement("div",{className:"error-text"},t))},M=a(98),H=a.n(M),G=a(274),z=(a(144),{classes:{underline:"date-border-color",input:"date-input-color"},endAdornment:c.a.createElement(G.a,{position:"end"},c.a.createElement(H.a,{className:"event-color"}))}),W={classes:{root:"date-label-color"}},Y=function(e){var t=e.handleStuff,a=Object(n.useState)(new Date),r=Object(o.a)(a,2),l=r[0],s=r[1],i=function(){return l.getFullYear()>=2011&&l.getMonth()>=0&&l.getDate()>3};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"date"},c.a.createElement(L.a,{utils:I.a},c.a.createElement(A.a,{disableFuture:!0,InputLabelProps:W,InputProps:z,label:"Responsive",views:["year","month","date"],value:l,onChange:function(e){return s(e)},format:"dd/MM/yyyy"})),c.a.createElement("button",{className:"button-class",disabled:!i(),onClick:function(e){return t(e,l)}},c.a.createElement(P.a,{className:!1===i()?"disabled":"date-search"}))),!1===i()?c.a.createElement(R,{text:"cant search data earlier then 04/01/2011"}):null)},_=(a(145),a(59)),U=a(102),J=a.n(U),q=(a(146),a(100)),V={labels:"",datasets:[{label:"\u05e2\u05e8\u05da \u05d4\u05de\u05d8\u05d1\u05e2",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#007c9a",pointBackgroundColor:"#fff",pointBorderWidth:3,pointHoverRadius:6,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:3,pointRadius:1,pointHitRadius:10,data:""}]},$=function(e){var t=e.latestDate,a=(e.openGraph,e.pickData),r=e.closeGraph,l=Object(n.useState)(V),s=Object(o.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(!1),d=Object(o.a)(m,2),f=d[0],b=d[1];Object(n.useEffect)((function(){document.getElementById("test").scrollIntoView({behavior:"smooth"})}),[]),Object(n.useEffect)((function(){var e,n=new Date(t),c=n.getFullYear()+"-"+(((e=n.getMonth()+1)>=10?e:"0"+e)+"-")+(n.getDate()-7);fetch("".concat("https://api.exchangeratesapi.io/","history?start_at=").concat(c,"&end_at=").concat(t,"&symbols=ILS&base=").concat(a)).then((function(e){return e.json()})).then((function(e){console.table(e);var t=Object(_.a)(i.datasets)[0],a=[];t.data=Object.values(e.rates);for(var n=0;n<Object.values(e.rates).length;n++)a.push(Object.values(e.rates)[n].ILS);t.data=a,u(Object(x.a)(Object(x.a)({},i),{},{datasets:[t]})),u(Object(x.a)(Object(x.a)({},i),{},{labels:Object.keys(e.rates)}))}))}),[a]);return c.a.createElement("div",{className:"coinGraph-container"},c.a.createElement("div",{id:"test",className:!1===f?"scale-in-center":"roll-out-left"},a,c.a.createElement("button",{className:"left-exit",onClick:function(e){return b(!0),void setTimeout((function(){r()}),1e3)}},c.a.createElement(J.a,null)),i.labels.length>0?c.a.createElement("div",{className:"chartline",style:{width:"80vw",height:"40vh"}},c.a.createElement(q.a,{data:i,options:{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"".concat(a," \u05e2\u05e8\u05da \u05d4\u05de\u05d8\u05d1\u05e2 "),fontSize:10},legend:{display:!0,position:"top",labels:{fontSize:17,fontColor:"black"}},scales:{yAxes:[{ticks:{fontColor:"black",fontSize:14,stepSize:.5}}],xAxes:[{ticks:{fontColor:"black",fontSize:14,stepSize:1}}]}}})):null))},K=(a(239),function(){return c.a.createElement("thead",{className:"tableHeader"},c.a.createElement("tr",null,c.a.createElement("td",null,"type"),c.a.createElement("td",null,"rate"),c.a.createElement("td",null,"daily change"),c.a.createElement("td",null,"graph")))}),Q=a(103),X=a.n(Q),Z=(a(240),function(e){var t=e.latestRate,a=e.dailyChange,n=e.PickDataToGraph,r=function(e){return e>0?"positive":e<0?"negative":"same"};return c.a.createElement("tbody",{className:"tableBody"},Object.entries(t).filter((function(e){return"ILS"!==e[0]})).map((function(e){return c.a.createElement("tr",{key:e[0]},c.a.createElement("td",{className:"text-color"},e[0]),c.a.createElement("td",{className:"text-color"},e[1]),c.a.createElement("td",{className:r(a(e))},Math.abs(a(e))+"%"),c.a.createElement("td",null,c.a.createElement(X.a,{className:"icon-color",onClick:function(t){n(t,e[0])}})))})))}),ee=function(e){var t=e.latestRate,a=e.yesterdayRate,r=e.latestDate,l=Object(n.useState)(!1),s=Object(o.a)(l,2),i=s[0],u=s[1],m=Object(n.useState)(""),d=Object(o.a)(m,2),f=d[0],b=d[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"table"},c.a.createElement("table",{className:"tableCovertor"},c.a.createElement(K,null),c.a.createElement(Z,{latestRate:t,dailyChange:function(e){return function(e){var t=100-e[1]/a[e[0]]*100,n=t.toString().split(".")[0],c=t.toString().split(".")[1];return void 0!=c?2===(c=c.substring(0,3)).length?c+="0":1===c.length&&(c+="00"):c="0",n+"."+c}(e)},PickDataToGraph:function(e,t){return function(e,t){b(t),u(!0)}(0,t)}}))),!0===i?c.a.createElement($,{latestDate:r,openGraph:i,pickData:f,closeGraph:function(e){return u(!1)}}):null)},te="https://api.exchangeratesapi.io/",ae={},ne=function(e){var t=e.currencyOptions,a=Object(n.useState)(""),r=Object(o.a)(a,2),l=r[0],s=r[1],i=Object(n.useState)({}),u=Object(o.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)({}),b=Object(o.a)(f,2),h=b[0],v=b[1],E=Object(n.useState)(t.length),p=Object(o.a)(E,1)[0];Object(n.useEffect)((function(){fetch("".concat(te,"latest")).then((function(e){return e.json()})).then((function(e){var t=e.date,a=new Date(t),n=e.rates;n[e.base]="",s(e.date),Object.keys(n).map(function(){var e=Object(D.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te,"latest?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=m;a[t]=Object.entries(e.rates)[0][1],d(Object(x.a)(Object(x.a)({},m),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var c,r=a.getFullYear()+"-"+(((c=a.getMonth()+1)>=10?c:"0"+c)+"-")+(a.getDate()-1);Object.keys(n).map(function(){var e=Object(D.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te).concat(r,"?symbols=ILS&base=").concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=h;a[t]=Object.entries(e.rates)[0][1],v(Object(x.a)(Object(x.a)({},h),a[t]))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}),[]);var g=function(e,a){var n=new Date(a),c=function(e){return e>=10?e:"0"+e},r=n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+(n.getDate()-1),l=n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+n.getDate();v(Object(x.a)({},ae)),d(Object(x.a)({},ae)),t.filter((function(e){return"ILS"!==e})).map((function(e){fetch("".concat(te).concat(l,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=m;a[t]=Object.entries(e.rates)[0][1],d(Object(x.a)(Object(x.a)({},m),a[t]))})),fetch("".concat(te).concat(r,"?symbols=ILS&base=").concat(e)).then((function(e){return e.json()})).then((function(e){var t=e.base,a=h;a[t]=Object.entries(e.rates)[0][1],v(Object(x.a)(Object(x.a)({},h),a[t]))}))}))};return p!==Object.keys(h).length||Object.keys(m).length!==p?c.a.createElement(k,null):c.a.createElement("div",{className:"date-table slide-in-bck-center-table"},c.a.createElement(Y,{handleStuff:function(e,t){return g(0,t)}}),c.a.createElement(ee,{latestRate:m,yesterdayRate:h,latestDate:l}))},ce=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),l=Object(o.a)(r,2),s=(l[0],l[1],Object(n.useState)()),i=Object(o.a)(s,2),u=(i[0],i[1],Object(n.useState)()),m=Object(o.a)(u,2);m[0],m[1];return Object(n.useEffect)((function(){fetch("https://api.exchangeratesapi.io/latest").then((function(e){return e.json()})).then((function(e){Object.keys(e.rates)[0];c([e.base].concat(Object(_.a)(Object.keys(e.rates))))}))}),[]),[a]},re=function(){var e=ce(),t=Object(o.a)(e,1)[0],a=ce("exchangeRate");Object(o.a)(a,1)[0];return 0===t.length?c.a.createElement(k,null):c.a.createElement("div",{className:"converter-warrper"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",{className:"Converter-Header"},"Convert")),c.a.createElement(C,{currencyOptions:t}),c.a.createElement(ne,{currencyOptions:t}))},le=(a(241),a(242),function(){return c.a.createElement("div",{className:"convertor"},c.a.createElement("div",{className:"coin-flip"},c.a.createElement("div",{className:"coin-flip-inner"},c.a.createElement("div",{className:"front-coin"}),c.a.createElement("div",{className:"back-coin"}))),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(i.b,{to:"/Converter",className:"converter-link"},"Convertor")))}),oe=(a(243),function(){return c.a.createElement("div",{className:"poxedex"},c.a.createElement("div",{className:"pokeball"},c.a.createElement("div",{className:"pokeball__button"})),c.a.createElement("div",{className:"converter-link-padd"},c.a.createElement(i.b,{to:"/poke",className:"poxedex-link"},"Poxedec")))}),se=function(){return c.a.createElement("div",{className:"MainPage"},c.a.createElement(le,null),c.a.createElement(le,null),c.a.createElement(le,null),c.a.createElement(oe,null),c.a.createElement(le,null))},ie=(a(244),function(e){return c.a.createElement("div",{className:"NotFound"},c.a.createElement("div",{id:"letter-object",className:"text-flicker-in-glow anim-object",onClick:function(e){return console.log("d")}},"404"),c.a.createElement("button",{onClick:function(t){return e.history.goBack()}},"Back toprevious page"),c.a.createElement(i.b,{to:"/"},"Back to Home"))}),ue=a(104),me=a.n(ue),de=(a(245),a(246),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){var e=document.cookie.split(";");e=e[0].split("=");var t=document.getElementById("API");"theme"===e[0]?(t.classList.add(e[1]),r(e[1])):(t.classList.add("lightmode"),r("lightmode"))}),[]);return c.a.createElement("div",{className:"ThemeFunc-flex"},"lightmode"===a?c.a.createElement("span",{className:"middle"},c.a.createElement(d.a,{className:"ThemeFunc-icon",onClick:function(e){return function(e){var t=new Date;t.setDate(t.getDate()+1);var a="; expires="+t.toUTCString();document.cookie="theme=darkmode"+a+";";var n=document.getElementById("API");n.classList.add("darkmode"),n.classList.remove("lightmode"),r("darkmode")}()}})):c.a.createElement("span",{className:"middle"},c.a.createElement(b.a,{className:"ThemeFunc-icon",onClick:function(e){return function(e){var t=document.getElementById("API"),a=new Date;a.setDate(a.getDate()+1);var n="; expires="+a.toUTCString();document.cookie="theme=lightmode"+n+";",t.classList.add("lightmode"),t.classList.remove("darkmode"),r("lightmode")}()}})))}),fe=function(){return c.a.createElement("div",{className:"NavigatorMobile-warrper"},c.a.createElement(i.b,{className:"home-link",to:"/"},c.a.createElement("div",{className:"icon-warrper"},c.a.createElement(me.a,{className:"home-link-icon"}))),c.a.createElement(de,null))},be=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))&&r(!0)}),[]),c.a.createElement("div",{className:"app"},c.a.createElement(E,null),c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:se}),c.a.createElement(p.a,{exact:!0,path:"/Converter/",component:re}),c.a.createElement(p.a,{component:ie})),!0===a?c.a.createElement(fe,null):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.3a8dce5f.chunk.js.map