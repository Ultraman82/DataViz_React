(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(33)},24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),c=(n(24),n(25),n(2)),u=n(1);function s(){var e=Object(c.a)(["\n    padding: 40px;\n"]);return s=function(){return e},e}var l=u.b.div(s()),f=n(16),m=n(7),v=n.n(m),p=n(10),d=n(11),g=n(12),b=n(14),h=n(13),E=n(17),O=n(32),j=a.a.createContext(),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){n.fetchCoins()},n.fetchCoins=Object(p.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.coinList();case 2:t=e.sent.Data,n.setState({coinList:t}),console.log(t);case 5:case"end":return e.stop()}},e)})),n.confirmFavorites=function(){n.setState({firstVisit:!1,page:"dashboard"}),localStorage.setItem("cryptoDash",JSON.stringify({test:"hello"}))},n.setPage=function(e){return n.setState({page:e})},n.state=Object(f.a)({page:"dashboard"},n.savedSettings(),{setPage:n.setPage,confirmFavorites:n.confirmFavorites}),n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"savedSettings",value:function(){return JSON.parse(localStorage.getItem("cryptoDash"))?{}:{page:"settings",firstVisit:!0}}},{key:"render",value:function(){return a.a.createElement(j.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component);function x(){var e=Object(c.a)(["\n        text-shadow: 0px 0px 60px #03ff03;\n    "]);return x=function(){return e},e}function y(){var e=Object(c.a)(["\n    cursor: pointer;\n    ","\n"]);return y=function(){return e},e}function C(){var e=Object(c.a)(["\n    display: grid;\n    margin-bottom: 40px\n    grid-template-columns: 180px auto 100px 180px;\n"]);return C=function(){return e},e}function k(){var e=Object(c.a)(["\n    font-size: 1.5em;\n"]);return k=function(){return e},e}var S=u.b.div(k()),D=u.b.div(C()),F=u.b.div(y(),function(e){return e.active&&Object(u.a)(x())});function P(e){var t=e.name;return a.a.createElement(j.Consumer,null,function(e){var n,r=e.page,o=e.setPage;return a.a.createElement(F,{active:r===t,onClick:function(){return o(t)}},(n=t).charAt(0).toUpperCase()+n.substr(1))})}var J=function(){return a.a.createElement(D,null,a.a.createElement(S,null," CryptoDash "),a.a.createElement("div",null),a.a.createElement(P,{active:!0,name:"dashboard"}),a.a.createElement(P,{name:"setting"}))},V=function(e){e.firstVisit;return a.a.createElement(j.Consumer,null,function(e){return e.firstVisit?a.a.createElement("div",null,"Welcome to CryptoDash, please select your favorite coins to bdgin."," "):null})};function I(){var e=Object(c.a)(["\n    display: grid;\n    justify-counter: center;\n"]);return I=function(){return e},e}function W(){var e=Object(c.a)(["\n    margin: 20px;\n    color: green;\n    cursor: pointer;\n"]);return W=function(){return e},e}var B=u.b.div(W()),L=(u.b.div(I()),function(){return a.a.createElement(j.Consumer,null,function(e){var t=e.confirmFavorites;return a.a.createElement(B,{onClick:t},"Confirm confirmFavorites")})}),N=function(){return a.a.createElement("div",null,a.a.createElement(V,null),a.a.createElement(L,null))};var z=function(){return a.a.createElement(l,null,a.a.createElement(w,null,a.a.createElement(J,null),a.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.bad47ddc.chunk.js.map