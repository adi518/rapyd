(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e){e.exports={name:"react-gallery",version:"1.0.0",description:"",keywords:[],license:"MIT",author:"Adi Sahar",main:"src/index.jsx",homepage:"https://adi518.github.io/react-gallery",dependencies:{"@material-ui/core":"^4.9.0",classnames:"^2.2.6","cross-fetch":"3.0.4",lodash:"^4.17.15",react:"16.8.4","react-dom":"16.8.4","react-modal":"^3.11.1","react-redux":"7.1.3","react-scripts":"2.1.3","react-use":"^13.22.3",redux:"4.0.5","redux-actions":"2.6.5","redux-devtools-extension":"2.13.8","redux-thunk":"^2.3.0"},devDependencies:{"gh-pages":"^2.2.0"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject",predeploy:"yarn build",deploy:"node ./gh-pages"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},27:function(e,t,n){e.exports=n.p+"static/media/pusheencat.50dbdbc4.png"},28:function(e,t,n){e.exports=n.p+"static/media/GitHub_Logo_White.064ace47.png"},35:function(e,t,n){e.exports=n(73)},47:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n(9),s=n(6),l=(n(44),n(26)),i=n(10),u=n(86),m=n(2),d=n.n(m),p=n(5),b=n(14),f=n.n(b),h="Set Albums";function v(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).limit;return function(){var t=Object(p.a)(d.a.mark(function t(n,a){var r,c;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("https://jsonplaceholder.typicode.com/albums");case 2:return r=t.sent,t.next=5,r.json();case 5:return t.t0=e,c=t.sent.slice(0,t.t0),t.abrupt("return",n({type:h,payload:c}));case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}var E=[],j=Object(u.a)(Object(i.a)({},h,function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).payload}),E),g="Set Photos";var O={},y=Object(u.a)(Object(i.a)({},g,function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).payload.reduce(function(e,t){return e[t.albumId]=e[t.albumId]||[],e[t.albumId].push(t),e},{})}),O),P=Object(s.combineReducers)({albums:j,photos:y});var k=n(11),x=n(27),N=n.n(x),w=(n(47),function(){return r.a.createElement("a",{href:k.homepage,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"Octocat",src:N.a,alt:"Octocat"}))}),A=n(28),C=n.n(A),I=function(){return a.createElement("footer",{className:"Footer"},a.createElement("span",{className:"Footer-credits"},"Made by\xa0",a.createElement("a",{href:"https://github.com/adi518"},k.author),"\xa0\u2014\xa0",(new Date).getFullYear(),"\xa0\u2014\xa0",k.version),a.createElement("a",{className:"Footer-github",href:k.homepage},a.createElement("img",{src:C.a,alt:"GitHub"})))},S=n(4),z=n(7),L=n(84),M=n(20),B=void 0,F=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.cleanup,c=void 0===r?function(){}:r,o=n.deps,s=void 0===o?void 0:o,l=!1;Object(a.useEffect)(function(){return l=!0,Object(p.a)(d.a.mark(function n(){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:l&&t();case 3:case"end":return n.stop()}},n)}))(),function(){l=!1,c()}},s)},G=function(){var e={},t=new Promise(function(t,n){e.resolve=t,e.reject=n});return Object(M.a)({},e,{promise:t})},_=function(){var e=Object(p.a)(d.a.mark(function e(t){var n,a,r,c,o,s,l,i,u=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},a=n.delay,r=void 0===a?1e3:a,c=new Image,o=new Promise(function(e){return setTimeout(e,r)}),s=G(),l=s.resolve,i=s.promise,c.onload=function(){return l()},c.src=t,e.abrupt("return",Promise.all([o,i]));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),T=n(32),U=n(85),D=(n(50),function(e){var t=e.color,n=void 0===t?"inherit":t,a=Object(T.a)(e,["color"]);return r.a.createElement("div",{className:"Loader"},r.a.createElement(U.a,Object.assign({color:n},a)))}),H=function(){return r.a.createElement(D,{size:20})},J=function(){return r.a.createElement(D,{size:60})},R=(n(52),r.a.memo(function(e){var t=e.albums,n=e.albumId,a=e.allPhotos,c=e.setPhotos,o=e.setAlbumId,s=Boolean(Object(z.size)(t)),l=Boolean(Object(z.size)(a));return r.a.createElement("section",{className:"Albums"},r.a.createElement("h2",null,"Albums"),s&&l?r.a.createElement("div",{className:"grid"},t.map(function(e){return r.a.createElement("div",{key:e.id,title:e.title,className:"Albums-album grid-item",onClick:function(){e.id===n?(o(null),c([])):(o(e.id),c(a[e.id].slice(0,30)))}},r.a.createElement("span",{className:"Albums-album-id"},e.id),r.a.createElement("span",{className:"Albums-album-title line-clamp"},e.title),l&&r.a.createElement("div",{className:"Albums-album-photos"},"(",Object(z.size)(a[e.id]),"\xa0Photos)"))})):r.a.createElement(H,null))})),q=n(30),W=n.n(q),Y=(n(54),r.a.memo(function(e){var t=e.photo,n=e.photos,c=e.setPhotos,o=e.onClick,s=Object(a.useState)(!1),l=Object(S.a)(s,2),i=l[0],u=l[1];return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=Object(M.a)({},t[2],{deps:[]});F.call.apply(F,[B].concat(t,[a]))}(function(){return _(t.thumbnailUrl)},function(){return u(!0)}),r.a.createElement("div",{title:t.title,className:"Photo grid-item",onClick:function(){return o(t.id)}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.thumbnailUrl,")")},className:W()("Photo-image",{"Photo-image-is-loaded":i})}),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Photo-title line-clamp"},t.title),r.a.createElement("div",{className:"Photo-dismiss",onClick:function(e){e.stopPropagation(),c(n.filter(function(e){return e.id!==t.id}))}})):r.a.createElement(H,null))})),K=(n(56),r.a.memo(function(e){var t=e.isLoading,n=e.photos,a=e.setPhotos,c=e.onPhotoClick;return r.a.createElement("section",{className:"Photos"},r.a.createElement("h2",null,"Photos"),t?r.a.createElement(H,null):Object(z.size)(n)?r.a.createElement("div",{className:"grid"},n.map(function(e){return r.a.createElement(Y,Object.assign({key:e.id},{photo:e,photos:n,setPhotos:a,onClick:c}))})):r.a.createElement("div",{className:"Photos-placeholder"},r.a.createElement("span",{className:"Photos-placeholder-text"},"SELECT ALBUM")))})),Q=n(31),V=n.n(Q),X=(n(66),{content:{display:"flex",border:"none",background:"rgba(23, 20, 29, 0.95)"},overlay:{zIndex:4,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),Z=r.a.memo(function(e){var t=e.photo,n=e.isOpen,c=e.close,o=Object(a.useState)(!1),s=Object(S.a)(o,2),l=s[0],i=s[1];return F(Object(p.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t&&_(t.url,{delay:1e3}));case 1:case"end":return e.stop()}},e)})),function(){return t&&i(!0)},{deps:[t]}),r.a.createElement(V.a,{isOpen:n,style:X,contentLabel:"Photo Modal",onRequestClose:function(){c(),i(!1)},appElement:document.getElementById("root")},r.a.createElement("div",{className:"Modal-dismiss",onClick:c}),r.a.createElement("div",{className:"Modal-photo"},l?r.a.createElement("img",{src:t.url,alt:t.title}):r.a.createElement(J,null)))}),$=(n(68),r.a.memo(function(){var e,t=function(e,t){return Object.entries(t).reduce(function(t,n){var r=Object(S.a)(n,2),c=r[0],o=r[1];return t[c]=Object(a.useCallback)(function(){return e(o)},[e]),t},{})}(Object(o.c)(),{listAlbums:v({limit:30}),listPhotos:function(){var e=Object(p.a)(d.a.mark(function e(t,n){var a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://jsonplaceholder.typicode.com/photos");case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",t({type:g,payload:r}));case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()}),n=t.listAlbums,c=t.listPhotos,s=Object(a.useCallback)(function(){return C(!0)}),l=Object(a.useCallback)(function(){return C(!1)}),i=Object(a.useState)(null),u=Object(S.a)(i,2),m=u[0],b=u[1],h=Object(a.useState)([]),E=Object(S.a)(h,2),j=E[0],O=E[1],y=Object(a.useState)(null),P=Object(S.a)(y,2),k=P[0],x=P[1],N=Object(a.useState)(!1),w=Object(S.a)(N,2),A=w[0],C=w[1],I=(e=function(e){return{albums:e.albums,photos:e.photos}},Object(o.d)(e,o.b)),M=I.albums,B=I.photos;return Object(L.a)(function(){n(),c()}),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Gallery"},r.a.createElement("div",{className:"Gallery-grid"},r.a.createElement(R,{albums:M,albumId:k,allPhotos:B,setAlbumId:x,setPhotos:O}),r.a.createElement(K,{photos:j,setPhotos:O,isLoading:0===Object(z.size)(M),onPhotoClick:function(e){var t=B[k].find(function(t){return t.id===e});b(t),s()}}))),r.a.createElement(Z,{photo:m,isOpen:A,close:l}))})),ee=(n(70),function(e){var t=Object(s.applyMiddleware)(l.a);return Object(s.createStore)(P,e,t)}()),te=function(e){var t=e.children;return r.a.createElement("main",{className:"Body"},t)};var ne=document.getElementById("root");Object(c.render)(r.a.createElement(function(){return r.a.createElement(o.a,{store:ee},r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(te,null,r.a.createElement($,null)),r.a.createElement(I,null)))},null),ne)}},[[35,2,1]]]);
//# sourceMappingURL=main.f7ca96f2.chunk.js.map