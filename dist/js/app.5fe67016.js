(function(t){function e(e){for(var s,i,r=e[0],c=e[1],u=e[2],l=0,d=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,i=1;i<n.length;i++){var r=n[i];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},i={app:0},a={app:0},o=[];function r(t){return c.p+"js/"+({NotFound:"NotFound",about:"about"}[t]||t)+"."+{NotFound:"363699b3",about:"b4f240db"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={NotFound:1,about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var s="css/"+({NotFound:"NotFound",about:"about"}[t]||t)+"."+{NotFound:"b93e8d3f",about:"9d61b219"}[t]+".css",a=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===a))return e()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===s||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var s=e&&e.target&&e.target.src||a,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete i[t],f.parentNode.removeChild(f),n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[t]=0})));var s=a[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,n){s=a[t]=[e,n]}));e.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",d.name="ChunkLoadError",d.type=s,d.request=i,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"435c":function(t,e,n){"use strict";n("fd3d")},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=a,t.exports=i,i.id="4678"},"4bfb":function(t,e,n){"use strict";n("f8e6")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[t.isCoinListLoaded?t._e():n("div",{staticClass:"backdrop"},[t._v(" Loading... ")]),n("c-header"),t.isCoinListLoaded?n("router-view",{staticClass:"content"}):t._e()],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[t.isMenuActive?s("div",{staticClass:"header__backdrop",on:{click:t.closeMenu}}):t._e(),s("div",{staticClass:"header__body"},[s("div",{staticClass:"header__logo logo",on:{click:t.goToDefaultPage,mouseup:function(e){return"button"in e&&1!==e.button?null:t.openNewDeafaultTab.apply(null,arguments)}}},[s("img",{staticClass:"logo__image",attrs:{src:n("5dab"),alt:"logo"}}),s("p",{staticClass:"logo__title"},[t._v("CryptoTracker")])]),s("autocomplete-search",{staticClass:"header__autocomplete",attrs:{suggestions:t.suggestions,placeholder:"Search coin"},on:{"input-change":t.updateInputValue,submit:t.openCoinPage}}),s("nav",{staticClass:"header__menu menu"},[s("menu-button",{staticClass:"menu__button",attrs:{isMenuActive:t.isMenuActive},on:{toggle:t.toggleMenu}}),s("ul",{staticClass:"menu__list",class:{menu__list_hidden:!t.isMenuActive}},t._l(t.$options.routes,(function(e,n){return s("li",{key:n,staticClass:"menu__item"},[s("router-link",{staticClass:"menu__link",attrs:{to:e},nativeOn:{click:function(e){t.isMenuActive=!1}}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)],1)],1)])},r=[],c=n("1da1"),u=(n("96cf"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autocomplete"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"autocomplete__input",attrs:{placeholder:t.placeholder},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.handleInput],focus:t.showSuggestions,blur:t.hideSuggestions,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.selectNextSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.selectPreviousSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitValue.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)?null:t.blur.apply(null,arguments)}],mouseover:function(e){t.selectedSuggestion=null},click:function(e){t.selectedSuggestion=null}}}),t.isSuggestionListShown?n("div",{ref:"suggestionsList",staticClass:"autocomplete__suggestions-list"},t._l(t.suggestionsList,(function(e,s){return n("div",{key:s,staticClass:"autocomplete__suggestion",class:{autocomplete__suggestion_selected:e===t.selectedSuggestion},on:{mouseover:function(n){t.selectedSuggestion=e},click:t.submitValue,mousedown:function(t){t.preventDefault()}}},[t._v(" "+t._s(e)+" ")])})),0):t._e()])}),l=[],d=n("2909"),f={props:{suggestions:{type:Array},placeholder:{type:String}},data:function(){return{inputValue:"",suggestionsList:[],isSuggestionListShown:!1,selectedSuggestion:null}},watch:{suggestions:function(){this.suggestionsList=Object(d["a"])(this.suggestions)}},methods:{showSuggestions:function(){this.isSuggestionListShown=!0},hideSuggestions:function(){this.isSuggestionListShown=!1,this.selectedSuggestion=null},selectNextSuggestion:function(){var t=this.suggestionsList.length,e=this.suggestionsList.indexOf(this.selectedSuggestion);t&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[0]:e>=t-1?null:this.suggestionsList[e+1],this.scrollSuggestionsList())},selectPreviousSuggestion:function(){var t=this.suggestionsList.length,e=this.suggestionsList.indexOf(this.selectedSuggestion);t&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[t-1]:0===e?null:this.suggestionsList[e-1],this.scrollSuggestionsList())},scrollSuggestionsList:function(){var t=this;this.$nextTick((function(){if(null!==t.selectedSuggestion){var e=t.$refs.suggestionsList,n=e.querySelector(".autocomplete__suggestion_selected"),s=n.getBoundingClientRect(),i=e.getBoundingClientRect();s.bottom>i.bottom?n.scrollIntoView(!1):s.top<i.top&&n.scrollIntoView(!0)}}))},handleInput:function(){this.$emit("input-change",this.inputValue),this.resetSuggestionList()},submitValue:function(){if(this.inputValue.length){var t=null===this.selectedSuggestion?this.inputValue:this.selectedSuggestion;this.resetInputValue(),this.resetSuggestionList(),this.$emit("submit",t)}},resetInputValue:function(){this.inputValue="",this.$emit("input-change",this.inputValue)},resetSuggestionList:function(){this.suggestionsList=[]},blur:function(t){t.target.blur()}}},p=f,h=(n("9d75"),n("2877")),m=Object(h["a"])(p,u,l,!1,null,"37dcf45d",null),g=m.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"button",on:{click:t.toggle}},[s("svg",{staticClass:"button__icon"},[t.isMenuActive?t._e():s("use",{attrs:{href:n("8a78")+"#menu"}}),t.isMenuActive?s("use",{attrs:{href:n("8a78")+"#cross"}}):t._e()])])},v=[],_={props:{isMenuActive:{type:Boolean,default:!1,required:!0}},methods:{toggle:function(){this.$emit("toggle")}}},j=_,k=(n("9bb4"),Object(h["a"])(j,b,v,!1,null,"0e2818c9",null)),y=k.exports;function C(t,e){var n;return function(){var s=arguments,i=this,a=function(){n=null,t.apply(i,s)};clearTimeout(n),n=setTimeout(a,e)}}var w=n("d4ec"),L=n("bee2"),T=(n("4fad"),n("b0c0"),n("a4d3"),n("e01a"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5530")),D=(n("4de4"),n("7db0"),n("2f62"));s["a"].use(D["a"]);var S,O,x=new D["a"].Store({state:{customTickerList:[],coinList:null},mutations:{SET_TICKER_LIST:function(t,e){t.customTickerList=e},ADD_TICKER:function(t,e){t.customTickerList.push(e)},REMOVE_TICKER:function(t,e){t.customTickerList=t.customTickerList.filter((function(t){return t!==e}))},SET_TICKER_PRICE:function(t,e){var n=e.ticker,s=e.newPrice,i=t.customTickerList.find((function(t){return t===n}));i.price=s},FILL_COIN_LIST:function(t,e){t.coinList=Object(T["a"])({},e)}},actions:{setCustomList:function(t,e){var n=t.commit;n("SET_TICKER_LIST",e)},addTickerToCustomList:function(t,e){var n=t.commit;n("ADD_TICKER",e)},removeTickerFromCustomList:function(t,e){var n=t.commit;n("REMOVE_TICKER",e)},setTickerPrice:function(t,e){var n=t.commit,s=e.ticker,i=e.newPrice;n("SET_TICKER_PRICE",{ticker:s,newPrice:i})},fillCoinList:function(t,e){var n=t.commit;n("FILL_COIN_LIST",e)}}}),A=x,I=function(){function t(){Object(w["a"])(this,t)}return Object(L["a"])(t,null,[{key:"set",value:function(t){A.dispatch("fillCoinList",t)}},{key:"get",value:function(){return A.state.coinList}},{key:"getCoinData",value:function(t){if(A.state.coinList)for(var e=0,n=Object.entries(A.state.coinList);e<n.length;e++){var s=n[e],i=s[1];if(t.toUpperCase()===i.coinName.toUpperCase()||t.toUpperCase()===i.fullName.toUpperCase()||t.toUpperCase()===i.name.toUpperCase())return{name:i.name,coinName:i.coinName,price:"-",imageUrl:i.imageUrl,description:i.description}}}},{key:"findAllMatches",value:function(t){for(var e=[],n=0,s=Object.entries(A.state.coinList);n<s.length;n++){var i=s[n],a=i[1],o=new RegExp("^".concat(t),"gi");(a.fullName.match(o)||a.name.match(o))&&e.push(a.fullName)}return e}}]),t}(),E={routes:[{name:"Custom list"},{name:"Top list"},{name:"About"}],components:{AutocompleteSearch:g,MenuButton:y},data:function(){return{searchInputValue:"",suggestions:[],isMenuActive:!1,currentWindowWidth:document.documentElement.clientWidth}},watch:{searchInputValue:function(){this.searchInputValue.trim().length&&!/\\/.test(this.searchInputValue)&&(this.suggestions=I.findAllMatches(this.searchInputValue))},currentWindowWidth:function(){var t=500;this.currentWindowWidth>t&&(this.isMenuActive=!1)}},created:function(){this.updateWidth=C(this.updateWidth,150),window.addEventListener("resize",this.updateWidth)},destroyed:function(){window.removeEventListener("resize",this.updateWidth)},methods:{toggleMenu:function(){this.isMenuActive=!this.isMenuActive},closeMenu:function(){this.isMenuActive=!1},updateInputValue:function(t){this.searchInputValue=t},openCoinPage:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s={name:"Coins",params:{coin:t}},e.$router.push(s,(function(){})),e.closeMenu();case 3:case"end":return n.stop()}}),n)})))()},updateWidth:function(t){this.currentWindowWidth=t.target.innerWidth},goToDefaultPage:function(){this.$router.push({name:"Default"},(function(){}))},openNewDeafaultTab:function(){var t={name:"Default"},e=this.$router.resolve(t);window.open(e.href)}}},N=E,P=(n("de92"),Object(h["a"])(N,o,r,!1,null,"a9dc4bfe",null)),R=P.exports,$=(n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("4ec9"),n("a15b"),n("159b"),n("d81d"),new URL("https://min-api.cryptocompare.com/data/price?tsyms=USD")),M=new URL("https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD"),U=new Map,V=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return $.searchParams.set("fsym",e),t.prev=1,t.next=4,fetch($);case 4:return n=t.sent,t.next=7,n.json();case 7:return s=t.sent,t.abrupt("return",s.USD);case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}(),z=function(t){t.length&&(M.searchParams.set("fsyms",t.join()),fetch(M).then((function(t){return t.json()})).then((function(t){U.forEach((function(e,n){t[n]&&e(t[n].USD)}))})).catch((function(t){return console.log(t)})))},W=function(t,e){U.set(t,e)},F=function(t){U.delete(t)},q=function(){return fetch("https://min-api.cryptocompare.com/data/all/coinlist").then((function(t){return t.json()})).then((function(t){for(var e in t.Data){var n=t.Data[e],s=n.CoinName,i=n.Description,a=n.FullName,o=n.Name,r="https://www.cryptocompare.com"+t.Data[e].ImageUrl;t.Data[e]=Object(T["a"])({},{coinName:s,description:i,fullName:a,imageUrl:r,name:o})}return t.Data})).catch((function(t){return console.log(t)}))},B=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,s,i,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=new URL("https://min-api.cryptocompare.com/data/v2/histohour?tsym=USD&limit=24"),s.searchParams.set("fsym",e),t.next=5,fetch(s);case 5:return i=t.sent,t.next=8,i.json();case 8:return a=t.sent,o=null!==(n=Object.entries(a.Data.Data).map((function(t){return t[1]})))&&void 0!==n?n:[],t.abrupt("return",o);case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),H={components:{CHeader:R},data:function(){return{isCoinListLoaded:!1}},created:function(){var t=this;q().then((function(e){I.set(e),t.isCoinListLoaded=!0}))}},K=H,J=(n("5c0b"),Object(h["a"])(K,i,a,!1,null,null,null)),Y=J.exports,G=n("8c4f"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"custom-list"},[n("h1",{staticClass:"custom-list__caption"},[t._v("Custom coin list")]),n("p",{staticClass:"custom-list__user-guide"},[t._v("Enter coin name below to start tracking it. You can see additional information such as coin description or historical data by clicking on coin name or logo.")]),n("div",{staticClass:"search"},[n("autocomplete-search",{staticClass:"search__autocomplete",attrs:{suggestions:t.suggestions,placeholder:"Enter coin name"},on:{submit:t.addTicker,"input-change":t.updateTickerToAdd}}),n("div",{staticClass:"search__errors-container"},[t.isTickerNameInvalid?n("span",[t._v("Invalid token name")]):t._e(),t.isTickerAlreadyAdded?n("span",[t._v("Token is already added")]):t._e()])],1),n("ul",{staticClass:"tickers-list"},t._l(t.CustomTickerList,(function(e,s){return n("li",{key:s,staticClass:"tickers-list__item"},[n("currency-ticker",{attrs:{ticker:e,positionInList:s+1},on:{"remove-request":function(n){return t.removeTicker(e)},"info-request":function(n){return t.openCoinPage(n,e.name)}}})],1)})),0)])},X=[],Z=n("b85c"),tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ticker"},[n("div",{staticClass:"ticker__number-container"},[t._v(" "+t._s(t.positionInList)+" ")]),n("div",{staticClass:"ticker__info-container",on:{click:t.handleCoinClick,mouseup:function(e){return"button"in e&&1!==e.button?null:t.handleCoinClick.apply(null,arguments)},contextmenu:function(e){return t.handleCoinClick.apply(null,arguments)}}},[n("img",{staticClass:"ticker__logo",attrs:{src:t.ticker.imageUrl,alt:t.ticker.name+" logo"}}),n("p",{staticClass:"ticker__full-name"},[t._v(" "+t._s(t.ticker.coinName)+" ")]),n("p",{staticClass:"ticker__short-name"},[t._v(" "+t._s(t.ticker.name)+" ")])]),n("p",{staticClass:"ticker__price-container"},[n("span",{staticClass:"ticker__price-wrapper"},[t._v(" "+t._s(t.formatedPrice)+" ")])]),n("div",{staticClass:"ticker__button-container"},[n("remove-button",{staticClass:"ticker__button",nativeOn:{click:function(e){return t.handleRemoveButtonClick.apply(null,arguments)}}})],1)])},et=[],nt=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close-button"})}),st=[],it=(n("435c"),{}),at=Object(h["a"])(it,nt,st,!1,null,"39145b8f",null),ot=at.exports,rt={components:{RemoveButton:ot},props:{positionInList:{type:Number},ticker:{type:Object,default:null}},computed:{formatedPrice:function(){return"-"===this.ticker.price?this.ticker.price:"$ "+this.ticker.price}},methods:{handleRemoveButtonClick:function(){this.$emit("remove-request")},handleCoinClick:function(t){this.$emit("info-request",t)}}},ct=rt,ut=(n("5dab4"),Object(h["a"])(ct,tt,et,!1,null,"03b47851",null)),lt=ut.exports,dt=function(){function t(){Object(w["a"])(this,t)}return Object(L["a"])(t,null,[{key:"get",value:function(){return A.state.customTickerList}},{key:"set",value:function(t){A.dispatch("setCustomList",t)}},{key:"add",value:function(t){A.dispatch("addTickerToCustomList",t)}},{key:"remove",value:function(t){A.dispatch("removeTickerFromCustomList",t)}},{key:"setPrice",value:function(t,e){A.dispatch("setTickerPrice",{ticker:t,newPrice:e})}}]),t}(),ft={components:{AutocompleteSearch:g,CurrencyTicker:lt},data:function(){return{tickerToAdd:"",suggestions:[],isTickerNameInvalid:!1,isTickerAlreadyAdded:!1}},computed:{CustomTickerList:function(){return dt.get()}},created:function(){var t=localStorage.getItem("tickers");t&&(dt.set(JSON.parse(t)),this.CustomTickerList.forEach((function(t){t.price="-",W(t.name,(function(e){return dt.setPrice(t,e)}))})));var e=2e3;this.$options.intervalId=setInterval((function(){return z(dt.get().map((function(t){return t.name})))}),e)},beforeDestroy:function(){clearInterval(this.$options.intervalId)},watch:{CustomTickerList:function(){localStorage.setItem("tickers",JSON.stringify(this.CustomTickerList))},tickerToAdd:function(){this.tickerToAdd.trim().length&&!/\\/.test(this.tickerToAdd)&&(this.suggestions=I.findAllMatches(this.tickerToAdd))}},methods:{updateTickerToAdd:function(t){this.tickerToAdd=t,this.resetErrorMessages()},addTicker:function(t){var e=I.getCoinData(t);e?(this.checkIfAlreadyAdded(e.name),this.isTickerAlreadyAdded||(dt.add(e),W(e.name,(function(t){return dt.setPrice(e,t)})))):this.isTickerNameInvalid=!0},removeTicker:function(t){dt.remove(t),F(t.name)},checkIfAlreadyAdded:function(t){var e,n=Object(Z["a"])(this.CustomTickerList);try{for(n.s();!(e=n.n()).done;){var s=e.value;if(s.name===t)return void(this.isTickerAlreadyAdded=!0)}}catch(i){n.e(i)}finally{n.f()}},resetErrorMessages:function(){this.isTickerAlreadyAdded=!1,this.isTickerNameInvalid=!1},openCoinPage:function(t,e){var n={name:"Coins",params:{coin:e}};if(1===t.which&&this.$router.push(n),2===t.which){var s=this.$router.resolve(n);window.open(s.href)}}}},pt=ft,ht=(n("4bfb"),Object(h["a"])(pt,Q,X,!1,null,"b8505074",null)),mt=ht.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-list"},[n("h1",{staticClass:"top-list__caption"},[t._v("Top coins")]),n("p",{staticClass:"top-list__paragraph"},[t._v("Page is not developed yet.")])])}],vt=(n("f5c7"),{}),_t=Object(h["a"])(vt,gt,bt,!1,null,"20a2e4ae",null),jt=_t.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"coin-page"},[n("h1",{staticClass:"coin-page__caption"},[t._v(t._s(t.coinData.coinName)+" ("+t._s(t.coinData.name)+")")]),n("div",{staticClass:"coin-page__content-container"},[n("div",{staticClass:"coin-card"},[n("img",{staticClass:"coin-card__logo",attrs:{src:t.coinData.imageUrl,alt:"Coin logo"}}),n("div",{staticClass:"coin-card__price"},[t._v(t._s(t.formatedPrice))]),n("button",{staticClass:"coin-card__button"},[t._v("Start tracking")])]),n("div",{staticClass:"main-content"},[n("div",{staticClass:"main-content__buttons-container"},[n("a",{staticClass:"main-content__button",class:{"main-content__button_active":"description"===t.activeWindow},attrs:{tabindex:"0"},on:{click:t.switchToDescription,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchToDescription.apply(null,arguments)}}},[t._v("Description")]),t._v(" | "),n("a",{staticClass:"main-content__button",class:{"main-content__button_active":"hourlyChart"===t.activeWindow},attrs:{tabindex:"0"},on:{click:t.switchToHourlyChart,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchToHourlyChart.apply(null,arguments)}}},[t._v("Historical Data")])]),n("div",{staticClass:"main-content__data-container"},["description"===t.activeWindow?[n("p",{staticClass:"main-content__text"},[t._v(t._s(t.coinData.description))])]:t._e(),"hourlyChart"===t.activeWindow?[t.isDataNotFound?n("p",[t._v("Data not found")]):t._e(),t.isChartDataLoaded&&!t.isDataNotFound?n("line-chart",{staticClass:"main-content__line-chart",attrs:{label:"Price, $",chartData:t.chartData}}):t._e()]:t._e()],2)])])])},yt=[],Ct=n("1fca"),wt={extends:Ct["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object,default:function(){return{layout:{padding:5},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}}},mounted:function(){this.renderLineChart()},methods:{renderLineChart:function(){var t=this.chartData.map((function(t){return t.x})),e=this.chartData.map((function(t){return t.y}));this.renderChart({labels:t,datasets:[{label:this.label,data:e,borderColor:"#49A078",backgroundColor:"rgba(73, 160, 120, 0.2)",borderWidth:1.5}]},this.options)}}},Lt=wt,Tt=(n("ca7b"),Object(h["a"])(Lt,S,O,!1,null,"9b0e7f5a",null)),Dt=Tt.exports,St={components:{LineChart:Dt},props:{coin:{type:String,required:!0}},data:function(){return{price:null,activeWindow:"description",hourlyData:[],isChartDataLoaded:!1}},computed:{coinData:function(){return I.getCoinData(this.coin.toUpperCase())||{}},formatedPrice:function(){return this.price?"$ "+this.price:"-"},chartData:function(){return this.hourlyData?this.hourlyData.map((function(t){var e=1e3*t.time,n=new Date(e),s=n.getHours()+":00";return{x:s,y:t.open}})):[{x:0,y:0}]},isDataNotFound:function(){return!this.hourlyData}},watch:{coinData:function(){this.updatePrice()}},created:function(){this.coinData.name||this.$router.push({name:"NotFound"}),this.updatePrice();var t=1e4;this.$options.intervalId=setInterval(this.updatePrice,t)},beforeDestroy:function(){clearInterval(this.$options.intervalId)},beforeRouteUpdate:function(t,e,n){var s=this,i=I.getCoinData(t.params.coin.toUpperCase());i?(n(),this.isChartDataLoaded=!1,this.getHourlyData(i.name).then((function(){return s.isChartDataLoaded=!0}))):this.$router.push({name:"NotFound"})},methods:{switchToHourlyChart:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.activeWindow="hourlyChart",e.next=3,t.getHourlyData(t.coinData.name);case 3:t.isChartDataLoaded=!0;case 4:case"end":return e.stop()}}),e)})))()},switchToDescription:function(){this.activeWindow="description",this.isChartDataLoaded=!1},getHourlyData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,B(t);case 2:e.hourlyData=n.sent;case 3:case"end":return n.stop()}}),n)})))()},updatePrice:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t.coinData.name);case 2:t.price=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},Ot=St,xt=(n("92637"),Object(h["a"])(Ot,kt,yt,!1,null,"6783aba6",null)),At=xt.exports;s["a"].use(G["a"]);var It=[{path:"/",name:"Default",redirect:"/custom-list"},{path:"/custom-list",name:"Custom list",component:mt},{path:"/top-list",name:"Top list",component:jt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/coins/:coin",name:"Coins",component:At,props:!0},{path:"/404",alias:"*",name:"NotFound",component:function(){return n.e("NotFound").then(n.bind(null,"9703"))}}],Et=new G["a"]({base:"",routes:It}),Nt=Et;s["a"].config.productionTip=!1,new s["a"]({router:Nt,store:A,render:function(t){return t(Y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"5dab":function(t,e,n){t.exports=n.p+"img/header-logo.6d64067d.png"},"5dab4":function(t,e,n){"use strict";n("7887")},7887:function(t,e,n){},8247:function(t,e,n){},"8a78":function(t,e,n){t.exports=n.p+"img/sprite.cd59ef2b.svg"},92637:function(t,e,n){"use strict";n("c4b0")},"99fc":function(t,e,n){},"9bb4":function(t,e,n){"use strict";n("ef83")},"9c0c":function(t,e,n){},"9d75":function(t,e,n){"use strict";n("99fc")},b969:function(t,e,n){},ba1d:function(t,e,n){},c4b0:function(t,e,n){},ca7b:function(t,e,n){"use strict";n("ba1d")},de92:function(t,e,n){"use strict";n("8247")},ef83:function(t,e,n){},f5c7:function(t,e,n){"use strict";n("b969")},f8e6:function(t,e,n){},fd3d:function(t,e,n){}});
//# sourceMappingURL=app.5fe67016.js.map