(this.webpackJsonpretkiohjelma=this.webpackJsonpretkiohjelma||[]).push([[0],{278:function(t,a,e){"use strict";e.r(a);var n=e(0),r=e(54),c=e.n(r),i=e(16),u=e.n(i),s=e(21),b=e(11),o=e(8),p=e(6),j=e(27),l=e(28),k=e(59),O=e.p+"static/media/red_pin.0b3d60a0.png",f=(e(89),e(53)),d=e.n(f),h=e(113),v=e(7);d.a.workerClass=h.a;var m=function(t){var a,e=Object(n.useState)({latitude:62.952544,longitude:26.040375,zoom:5,transitionDuration:500}),r=Object(p.a)(e,2),c=r[0],i=r[1],u=Object(n.useState)(t.rajatutPaikat),s=Object(p.a)(u,2),b=s[0],o=s[1],f=Object(n.useState)(),d=Object(p.a)(f,2),h=d[0],m=d[1],y=Object(n.useState)(),g=Object(p.a)(y,2),x=g[0],w=g[1],S=Object(n.useState)(),N=Object(p.a)(S,2),L=N[0],M=N[1],C=Object(j.useTransition)(b[0],{from:{opacity:0},enter:{opacity:1},delay:500});return Object(n.useEffect)((function(){o(t.rajatutPaikat),m(null)}),[t.rajatutPaikat]),Object(n.useEffect)((function(){(t.newLat||t.newLong)&&(m(null),i({latitude:parseFloat(t.newLat),longitude:parseFloat(t.newLong),zoom:5,transitionDuration:500}))}),[t.newLat,t.newLong]),Object(v.jsxs)(k.c,Object(l.a)(Object(l.a)({className:"map"},c),{},{mapboxApiAccessToken:"pk.eyJ1Ijoic2F1bGlrIiwiYSI6ImNrcWM4NXJoYzAwdzkybm56djVka2VzZW0ifQ.QmYDZh6DNEwu5ITY9lQ6Ag",mapStyle:"mapbox://styles/mapbox/streets-v11",height:715,width:800,onViewportChange:function(t){i(t)},children:[b.length>0&&C.length>0&&C((function(t,a){var e=a.koordinaatti.split(",");return Object(v.jsx)(j.animated.div,{style:t,children:Object(v.jsx)(k.a,{className:"markers",latitude:parseFloat(e[0]),longitude:parseFloat(e[1]),offsetLeft:-12.5,offsetTop:-12.5,onClick:function(){m(a);var t=a.koordinaatti.split(",");w(parseFloat(t[0])),M(parseFloat(t[1]))},children:Object(v.jsx)("img",{className:"marker-images",src:O,alt:"no image"})})},a.nimi)})),h&&x&&L&&Object(v.jsx)(k.b,{latitude:x,longitude:L,anchor:"bottom",offsetTop:-12.5,onClose:function(){return m(null)},children:(a=h,Object(v.jsxs)("div",{className:"popup",children:[Object(v.jsx)("h3",{children:a.nimi}),Object(v.jsxs)("p",{children:["Tyyppi: ",a.tyyppi]}),Object(v.jsxs)("p",{children:["Maakunta: ",a.maakunta]}),Object(v.jsxs)("p",{children:["Koordinaatit: ",a.koordinaatti]})]}))})]}))},y=e(56);var g=function(t){var a=Object(n.useState)(t.tyypit),e=Object(p.a)(a,2),r=e[0],c=e[1],i=Object(n.useState)([]),j=Object(p.a)(i,2),l=j[0],k=j[1];Object(n.useEffect)((function(){f()}),[t.paikatMaakunnassa]),Object(n.useEffect)((function(){c(O(t.tyypit))}),[t.tyypit]);var O=function(t){return t.shift(),t},f=function(){var a=0,e=0,n=0,r=0,c=0,i=0,o=0,p=0,j=0,l=0,O=0,f=0,d=0;function h(){return(h=Object(s.a)(u.a.mark((function s(){var k,h,v;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:k=Object(b.a)(t.paikatMaakunnassa[0]),u.prev=1,k.s();case 3:if((h=k.n()).done){u.next=37;break}v=h.value,u.t0=v.tyyppi,u.next="Laavu"===u.t0?8:"Kota"===u.t0?10:"P\xe4iv\xe4tupa"===u.t0?12:"Nuotiopaikka"===u.t0?14:"Luola"===u.t0?16:"Autiotupa"===u.t0?18:"Ruokailukatos"===u.t0?20:"N\xe4ht\xe4vyys"===u.t0?22:"Lintutorni"===u.t0?24:"Varaustupa"===u.t0?26:"Kammi"===u.t0?28:"Porok\xe4mpp\xe4"===u.t0?30:"L\xe4hde"===u.t0?32:34;break;case 8:return a++,u.abrupt("break",35);case 10:return e++,u.abrupt("break",35);case 12:return n++,u.abrupt("break",35);case 14:return r++,u.abrupt("break",35);case 16:return c++,u.abrupt("break",35);case 18:return i++,u.abrupt("break",35);case 20:return o++,u.abrupt("break",35);case 22:return p++,u.abrupt("break",35);case 24:return j++,u.abrupt("break",35);case 26:return l++,u.abrupt("break",35);case 28:return O++,u.abrupt("break",35);case 30:return f++,u.abrupt("break",35);case 32:return d++,u.abrupt("break",35);case 34:return u.abrupt("break",35);case 35:u.next=3;break;case 37:u.next=42;break;case 39:u.prev=39,u.t1=u.catch(1),k.e(u.t1);case 42:return u.prev=42,k.f(),u.finish(42);case 45:case"end":return u.stop()}}),s,null,[[1,39,42,45]])})))).apply(this,arguments)}(function(){return h.apply(this,arguments)})().then((function(){k([a,e,n,r,c,i,o,p,j,l,O,f,d])}))};return Object(v.jsx)("div",{className:"charts-wrapper",children:Object(v.jsx)("div",{className:"barchart-wrapper",children:Object(v.jsx)(y.a,{data:{labels:Object(o.a)(r),datasets:[{label:"Paikkoja yhteens\xe4",data:Object(o.a)(l),backgroundColor:["rgba(255, 0, 0, 0.8)","rgba(255, 50, 0, 0.8)","rgba(255, 100, 0, 0.8)","rgba(255, 150, 0, 0.8)","rgba(255, 200, 0, 0.8)","rgba(255, 250, 0, 0.8)","rgba(200, 255, 0, 0.8)","rgba(150, 255, 0, 0.8)","rgba(100, 255, 0, 0.8)","rgba(50, 255, 0, 0.8)","rgba(0, 255, 0, 0.8)","rgba(0, 255, 50, 0.8)","rgba(0, 255, 100, 0.8)"]}]},options:{animation:{duration:0}}})})})};var x=function(t){var a=Object(n.useState)(t.paikat),e=Object(p.a)(a,2),r=e[0],c=e[1],i=Object(n.useState)([]),j=Object(p.a)(i,2),l=j[0],k=j[1],O=Object(n.useState)(!1),f=Object(p.a)(O,2),d=f[0],h=f[1];Object(n.useEffect)((function(){c(g(t.paikat)),m(),h(!0)}),[t.paikatMaakunnassa]);var m=function(){var a=0,e=0,n=0,r=0,c=0,i=0,o=0,p=0,j=0,l=0,k=0,O=0,f=0;function d(){return(d=Object(s.a)(u.a.mark((function s(){var d,h,v;return u.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:d=Object(b.a)(t.paikatMaakunnassa[0]),u.prev=1,d.s();case 3:if((h=d.n()).done){u.next=37;break}v=h.value,u.t0=v.tyyppi,u.next="Laavu"===u.t0?8:"Kota"===u.t0?10:"P\xe4iv\xe4tupa"===u.t0?12:"Nuotiopaikka"===u.t0?14:"Luola"===u.t0?16:"Autiotupa"===u.t0?18:"Ruokailukatos"===u.t0?20:"N\xe4ht\xe4vyys"===u.t0?22:"Lintutorni"===u.t0?24:"Varaustupa"===u.t0?26:"Kammi"===u.t0?28:"Porok\xe4mpp\xe4"===u.t0?30:"L\xe4hde"===u.t0?32:34;break;case 8:return a++,u.abrupt("break",35);case 10:return e++,u.abrupt("break",35);case 12:return n++,u.abrupt("break",35);case 14:return r++,u.abrupt("break",35);case 16:return c++,u.abrupt("break",35);case 18:return i++,u.abrupt("break",35);case 20:return o++,u.abrupt("break",35);case 22:return p++,u.abrupt("break",35);case 24:return j++,u.abrupt("break",35);case 26:return l++,u.abrupt("break",35);case 28:return k++,u.abrupt("break",35);case 30:return O++,u.abrupt("break",35);case 32:return f++,u.abrupt("break",35);case 34:return u.abrupt("break",35);case 35:u.next=3;break;case 37:u.next=42;break;case 39:u.prev=39,u.t1=u.catch(1),d.e(u.t1);case 42:return u.prev=42,d.f(),u.finish(42);case 45:case"end":return u.stop()}}),s,null,[[1,39,42,45]])})))).apply(this,arguments)}(function(){return d.apply(this,arguments)})().then((function(){x([a,e,n,r,c,i,o,p,j,l,k,O,f])}))},g=function(t){return t.shift(),t},x=function(a){var e=t.paikatMaakunnassa[0].length,n=[];function r(){return(r=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.map((function(t){return(t/e*100).toFixed()}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return r.apply(this,arguments)})().then((function(){var t,e=!1,r=Object(b.a)(a);try{for(r.s();!(t=r.n()).done;){t.value>0&&(e=!0)}}catch(c){r.e(c)}finally{r.f()}k(e?n:[100])}))};return d&&Object(v.jsxs)("div",{className:"piechart-wrapper",children:[Object(v.jsx)("h2",{children:"Prosenttia paikoista"}),Object(v.jsx)(y.b,{data:{labels:Object(o.a)(r),datasets:[{label:"Prosenttia paikoista",data:Object(o.a)(l),backgroundColor:["rgba(255, 0, 0, 0.8)","rgba(255, 100, 0, 0.8)","rgba(255, 200, 0, 0.8)","rgba(200, 255, 0, 0.8)","rgba(100, 255, 0, 0.8)","rgba(0, 255, 0, 0.8)","rgba(0, 255, 100, 0.8)","rgba(0, 255, 200, 0.8)","rgba(0, 200, 255, 0.8)","rgba(0, 100, 255, 0.8)","rgba(0, 0, 255, 0.8)","rgba(100, 0, 255, 0.8)","rgba(100, 150, 255, 0.8)"]}]},options:{animation:{duration:0}}})]})},w=e(116);var S=function(){var t=Object(n.useState)([]),a=Object(p.a)(t,2),e=a[0],r=a[1],c=Object(n.useState)([]),i=Object(p.a)(c,2),l=i[0],k=i[1],O=Object(n.useState)([]),f=Object(p.a)(O,2),d=f[0],h=f[1],y=Object(n.useState)(""),S=Object(p.a)(y,2),N=S[0],L=S[1],M=Object(n.useState)(""),C=Object(p.a)(M,2),P=C[0],T=C[1],E=Object(n.useState)([]),A=Object(p.a)(E,2),F=A[0],I=A[1],z=Object(n.useState)([]),V=Object(p.a)(z,2),K=V[0],B=V[1],D=Object(n.useState)(),H=Object(p.a)(D,2),J=H[0],Y=H[1],Q=Object(n.useState)(),R=Object(p.a)(Q,2),W=R[0],Z=R[1],G=Object(n.useState)(!1),X=Object(p.a)(G,2),_=X[0],q=X[1],U=Object(n.useState)(!1),$=Object(p.a)(U,2),tt=$[0],at=$[1],et=Object(n.useState)([]),nt=Object(p.a)(et,2),rt=nt[0],ct=nt[1],it=Object(n.useState)(!0),ut=Object(p.a)(it,2),st=ut[0],bt=ut[1],ot=Object(j.useSpring)({position:"absolute",border:_?1:0,height:_?100:0,width:200}),pt=Object(j.useSpring)({position:"absolute",border:tt?1:0,height:tt?100:0,width:200});Object(n.useEffect)((function(){fetch("https://tulikartta.fi/api-json2.php",{"Content-Type":"application/json",Accept:"application/json"}).then((function(t){return console.log(t),t.json()})).then((function(t){var a=Object(o.a)(t),e=[],n=[];n.push("N\xe4yt\xe4 kaikki");var c,i=Object(b.a)(a);try{for(i.s();!(c=i.n()).done;){var u=c.value;e.push(u.maakunta),n.push(u.tyyppi)}}catch(j){i.e(j)}finally{i.f()}var s=Object(o.a)(new Set(e)),p=Object(o.a)(new Set(n));r(Object(o.a)(t)),k(Object(o.a)(s)),h(Object(o.a)(p)),bt(!1)}))}),[]),Object(n.useEffect)((function(){return lt(),jt(),function(){}}),[N]),Object(n.useEffect)((function(){kt()}),[P]);var jt=function(){var t=e.filter((function(t){return t.maakunta==N}));ct([t])},lt=function(){var t=[];if("N\xe4yt\xe4 kaikki"==P||""==P?(t=e.filter((function(t){return t.maakunta==N})),ct([t])):t=e.filter((function(t){return t.maakunta==N&&t.tyyppi==P})),B([t]),I([t]),""!=N&&t[0]){var a=t[0].koordinaatti.split(",");Y(a[0]),Z(a[1])}},kt=function(){if(""!=N&&"N\xe4yt\xe4 kaikki"!=P){var t=function(){var t=Object(s.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.filter((function(t){return t.maakunta==N&&t.tyyppi==P}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=[];t().then((function(){return I([a])}))}else"N\xe4yt\xe4 kaikki"==P&&lt()};return Object(v.jsx)("div",{className:"app-container",children:st?Object(v.jsxs)("div",{style:{position:"relative",top:300,color:"white",fontSize:"30px",textAlign:"center"},children:[Object(v.jsx)(w.BeatLoader,{size:50,color:"white",loading:!0}),Object(v.jsx)("br",{}),"Loading..."]}):Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{id:"inputMaakunnat",type:"text",value:N,onClick:function(){q(!_)},placeholder:"Valitse maakunta",readOnly:!0}),function(){var t=document.getElementById("inputMaakunnat"),a=Object.values(l).map((function(a,e){return Object(v.jsx)("p",{className:"valinnat",onClick:function(a){t.value=a.target.innerHTML,L(a.target.innerHTML),t.focus(),q(!1)},children:a},e)}));return Object(v.jsx)(j.animated.div,{style:ot,id:"maakunnatContainer",className:"options",children:a})}(),Object(v.jsx)("input",{id:"inputTyypit",inputMode:"text",value:P,onClick:function(){at(!tt)},placeholder:"Valitse tyyppi",readOnly:!0}),function(){var t=document.getElementById("inputTyypit"),a=Object.values(d).map((function(a,e){return Object(v.jsx)("p",{className:"valinnat",onClick:function(a){t.value=a.target.innerHTML,T(a.target.innerHTML),t.focus(),at(!1)},children:a},e)}));return Object(v.jsx)(j.animated.div,{style:pt,id:"tyypitContainer",className:"options",children:a})}(),l.length>0&&d.length>0&&e&&F&&Object(v.jsxs)("div",{className:"map-chart-wrapper",children:[Object(v.jsx)(m,{className:"map",maakunta:N,tyyppi:P,kaikkiPaikat:Object(o.a)(K),rajatutPaikat:Object(o.a)(F),newLat:J,newLong:W}),Object(v.jsxs)("div",{className:"chart-wrapper",children:[Object(v.jsx)(g,{tyypit:Object(o.a)(d),paikatMaakunnassa:rt,rajatutPaikat:F}),Object(v.jsx)(x,{paikat:Object(o.a)(d),paikatMaakunnassa:rt})]})]})]})})};e(276),e(277);c.a.render(Object(v.jsx)(S,{}),document.getElementById("root"))},89:function(t,a,e){}},[[278,1,2]]]);
//# sourceMappingURL=main.43b4eb7b.chunk.js.map