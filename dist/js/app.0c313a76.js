(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],l=0,f=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},a=[];function o(t){return r.p+"js/"+({NotFound:"NotFound",about:"about"}[t]||t)+"."+{NotFound:"38dfcd93",about:"acf0c06d"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,n[1](u)}s[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05d9":function(t,e,n){"use strict";n("6fed")},"435c":function(t,e,n){"use strict";n("fd3d")},4678:function(t,e,n){var i={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=a(t);return n(e)}function a(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}s.keys=function(){return Object.keys(i)},s.resolve=a,t.exports=s,s.id="4678"},"53df":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[t.isCoinListLoaded?t._e():n("div",{staticClass:"backdrop"},[t._v(" Loading... ")]),n("c-header"),n("div",{staticClass:"content"},[t.isCoinListLoaded?n("router-view"):t._e()],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[t.isMenuActive?n("div",{staticClass:"header__backdrop",on:{click:t.toggleMenu}}):t._e(),n("div",{staticClass:"header__body"},[n("div",{staticClass:"header__container"},[n("autocomplete-search",{staticClass:"header__autocomplete",attrs:{suggestions:t.suggestions,placeholder:"Search coin"},on:{"input-change":t.updateInputValue,submit:t.openCoinPage}}),n("nav",{staticClass:"header__menu menu"},[n("menu-button",{staticClass:"menu__button",attrs:{isMenuActive:t.isMenuActive},on:{toggle:t.toggleMenu}}),n("ul",{staticClass:"menu__list",class:{"menu__list-hidden":!t.isMenuActive}},t._l(t.routes,(function(e,i){return n("li",{key:i,staticClass:"menu__item"},[n("router-link",{staticClass:"menu__link",attrs:{to:e},nativeOn:{click:function(e){t.isMenuActive=!1}}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)],1)],1)])])},r=[],c=n("1da1"),u=(n("96cf"),n("498a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"autocomplete"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"autocomplete__input",attrs:{autofocus:!0===t.autofocus,placeholder:t.placeholder},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value)},t.handleInput],focus:t.showSuggestions,blur:t.hideSuggestions,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.selectNextSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.selectPreviousSuggestion.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitValue.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"escape",void 0,e.key,void 0)?null:t.blur.apply(null,arguments)}],mouseover:function(e){t.selectedSuggestion=null},click:function(e){t.selectedSuggestion=null}}}),t.isSuggestionListShown?n("div",{ref:"suggestionsList",staticClass:"autocomplete__suggestions-list"},t._l(t.suggestionsList,(function(e,i){return n("div",{key:i,staticClass:"autocomplete__suggestion",class:{autocomplete__suggestion_selected:e===t.selectedSuggestion},on:{mouseover:function(n){t.selectedSuggestion=e},click:t.submitValue,mousedown:function(t){t.preventDefault()}}},[t._v(" "+t._s(e)+" ")])})),0):t._e()])}),l=[],d=n("2909"),f={props:{suggestions:{type:Array},autofocus:{type:Boolean,default:!1},placeholder:{type:String}},data:function(){return{inputValue:"",suggestionsList:[],isSuggestionListShown:!1,selectedSuggestion:null}},watch:{suggestions:function(){this.suggestionsList=Object(d["a"])(this.suggestions)}},methods:{showSuggestions:function(){this.isSuggestionListShown=!0},hideSuggestions:function(){this.isSuggestionListShown=!1,this.selectedSuggestion=null},selectNextSuggestion:function(){var t=this.suggestionsList.length,e=this.suggestionsList.indexOf(this.selectedSuggestion);t&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[0]:e>=t-1?null:this.suggestionsList[e+1],this.scrollSuggestionsList())},selectPreviousSuggestion:function(){var t=this.suggestionsList.length,e=this.suggestionsList.indexOf(this.selectedSuggestion);t&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[t-1]:0===e?null:this.suggestionsList[e-1],this.scrollSuggestionsList())},scrollSuggestionsList:function(){var t=this;this.$nextTick((function(){if(null!==t.selectedSuggestion){var e=t.$refs.suggestionsList,n=e.querySelector(".autocomplete__suggestion_selected"),i=n.getBoundingClientRect(),s=e.getBoundingClientRect();i.bottom>s.bottom?n.scrollIntoView(!1):i.top<s.top&&n.scrollIntoView(!0)}}))},handleInput:function(){this.$emit("input-change",this.inputValue),this.resetSuggestionList()},submitValue:function(){if(this.inputValue.length){var t=null===this.selectedSuggestion?this.inputValue:this.selectedSuggestion;this.resetInputValue(),this.resetSuggestionList(),this.$emit("submit",t)}},resetInputValue:function(){this.inputValue="",this.$emit("input-change",this.inputValue)},resetSuggestionList:function(){this.suggestionsList=[]},blur:function(t){t.target.blur()}}},h=f,p=(n("9de4"),n("2877")),m=Object(p["a"])(h,u,l,!1,null,"456a70a7",null),g=m.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"button",on:{click:t.toggle}},[i("svg",{staticClass:"button__icon"},[t.isMenuActive?t._e():i("use",{attrs:{href:n("8a78")+"#menu"}}),t.isMenuActive?i("use",{attrs:{href:n("8a78")+"#cross"}}):t._e()])])},v=[],j={props:{isMenuActive:{type:Boolean,default:!1,required:!0}},methods:{toggle:function(){this.$emit("toggle")}}},k=j,_=(n("9bb4"),Object(p["a"])(k,b,v,!1,null,"0e2818c9",null)),y=_.exports;function C(t,e){var n;return function(){var i=arguments,s=this,a=function(){n=null,t.apply(s,i)};clearTimeout(n),n=setTimeout(a,e)}}var w=n("d4ec"),L=n("bee2"),T=(n("4fad"),n("b0c0"),n("a4d3"),n("e01a"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5530")),S=(n("4de4"),n("7db0"),n("2f62"));i["a"].use(S["a"]);var D=new S["a"].Store({state:{customTickerList:[],coinList:null},mutations:{SET_TICKER_LIST:function(t,e){t.customTickerList=e},ADD_TICKER:function(t,e){t.customTickerList.push(e)},REMOVE_TICKER:function(t,e){t.customTickerList=t.customTickerList.filter((function(t){return t!==e}))},SET_TICKER_PRICE:function(t,e){var n=e.ticker,i=e.newPrice,s=t.customTickerList.find((function(t){return t===n}));s.price=i},FILL_COIN_LIST:function(t,e){t.coinList=Object(T["a"])({},e)}},actions:{setCustomList:function(t,e){var n=t.commit;n("SET_TICKER_LIST",e)},addTickerToCustomList:function(t,e){var n=t.commit;n("ADD_TICKER",e)},removeTickerFromCustomList:function(t,e){var n=t.commit;n("REMOVE_TICKER",e)},setTickerPrice:function(t,e){var n=t.commit,i=e.ticker,s=e.newPrice;n("SET_TICKER_PRICE",{ticker:i,newPrice:s})},fillCoinList:function(t,e){var n=t.commit;n("FILL_COIN_LIST",e)}}}),O=D,x=function(){function t(){Object(w["a"])(this,t)}return Object(L["a"])(t,null,[{key:"set",value:function(t){O.dispatch("fillCoinList",t)}},{key:"get",value:function(){return O.state.coinList}},{key:"getCoinData",value:function(t){if(O.state.coinList)for(var e=0,n=Object.entries(O.state.coinList);e<n.length;e++){var i=n[e],s=i[1];if(t.toUpperCase()===s.coinName.toUpperCase()||t.toUpperCase()===s.fullName.toUpperCase()||t.toUpperCase()===s.name.toUpperCase())return{name:s.name,coinName:s.coinName,price:"-",imageUrl:s.imageUrl,description:s.description}}}},{key:"findAllMatches",value:function(t){for(var e=[],n=0,i=Object.entries(O.state.coinList);n<i.length;n++){var s=i[n],a=s[1],o=new RegExp("^".concat(t),"gi");(a.fullName.match(o)||a.name.match(o))&&e.push(a.fullName)}return e}}]),t}(),A={components:{AutocompleteSearch:g,MenuButton:y},data:function(){return{isMenuActive:!1,searchInputValue:"",suggestions:[],currentWindowWidth:document.documentElement.clientWidth,routes:[{name:"Custom list"},{name:"Top list"},{name:"About"}]}},watch:{searchInputValue:function(){this.searchInputValue.trim().length&&!/\\/.test(this.searchInputValue)&&(this.suggestions=x.findAllMatches(this.searchInputValue))},currentWindowWidth:function(){var t=500;this.currentWindowWidth>t&&(this.isMenuActive=!1)}},created:function(){this.updateWidth=C(this.updateWidth,150),window.addEventListener("resize",this.updateWidth)},destroyed:function(){window.removeEventListener("resize",this.updateWidth)},methods:{toggleMenu:function(){this.isMenuActive=!this.isMenuActive},updateInputValue:function(t){this.searchInputValue=t},openCoinPage:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:i={name:"Coins",params:{coin:t}},e.$router.push(i,(function(){}));case 2:case"end":return n.stop()}}),n)})))()},updateWidth:function(t){this.currentWindowWidth=t.target.innerWidth}}},I=A,E=(n("9037"),Object(p["a"])(I,o,r,!1,null,"03750ba0",null)),N=E.exports,P=(n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("a15b"),n("159b"),n("d81d"),"893bab5ecbccecb436271b0f965e0efac90f674f38d5d0c4955dd78a9877e235"),R=new Map,M=new URL("https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD");M.searchParams.set("api_key",P);var V,$,z=function(t){t.length&&(M.searchParams.set("fsyms",t.join()),fetch(M).then((function(t){return t.json()})).then((function(t){R.forEach((function(e,n){t[n]&&e(t[n].USD)}))})).catch((function(t){return console.log(t)})))},U=function(t,e){R.set(t,e)},W=function(t){R.delete(t)},F=function(){return fetch("https://min-api.cryptocompare.com/data/all/coinlist").then((function(t){return t.json()})).then((function(t){for(var e in t.Data){var n=t.Data[e],i=n.CoinName,s=n.Description,a=n.FullName,o=n.Name,r="https://www.cryptocompare.com"+t.Data[e].ImageUrl;t.Data[e]=Object(T["a"])({},{coinName:i,description:s,fullName:a,imageUrl:r,name:o})}return t.Data})).catch((function(t){return console.log(t)}))},q=function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,i,s,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i=new URL("https://min-api.cryptocompare.com/data/v2/histohour?tsym=USD&limit=24"),i.searchParams.set("fsym",e),t.next=5,fetch(i);case 5:return s=t.sent,t.next=8,s.json();case 8:return a=t.sent,o=null!==(n=Object.entries(a.Data.Data).map((function(t){return t[1]})))&&void 0!==n?n:[],t.abrupt("return",o);case 13:t.prev=13,t.t0=t["catch"](0),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),B={components:{CHeader:N},data:function(){return{isCoinListLoaded:!1}},created:function(){var t=this;F().then((function(e){x.set(e),t.isCoinListLoaded=!0}))}},H=B,K=(n("034f"),Object(p["a"])(H,s,a,!1,null,null,null)),J=K.exports,Y=n("8c4f"),G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Custom coin list")]),n("p",[t._v("Enter coin name below to start tracking it. You can see additional information by clicking on coin name or logo.")]),n("div",{staticClass:"search"},[n("autocomplete-search",{staticClass:"search__autocomplete",attrs:{suggestions:t.suggestions,placeholder:"Enter coin name",autofocus:!0},on:{submit:t.addTicker,"input-change":t.updateTickerToAdd}}),n("div",{staticClass:"search__errors-container"},[t.isTickerNameInvalid?n("span",[t._v("Invalid token name")]):t._e(),t.isTickerAlreadyAdded?n("span",[t._v("Token is already added")]):t._e()])],1),n("ul",{staticClass:"tickers-list"},t._l(t.CustomTickerList,(function(e,i){return n("li",{key:i,staticClass:"tickers-list__item"},[n("currency-ticker",{attrs:{ticker:e,positionInList:i+1},on:{"remove-request":function(n){return t.removeTicker(e)},"info-request":function(n){return t.openCoinPage(n,e.name)}}})],1)})),0)])},Q=[],X=n("b85c"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ticker"},[n("div",{staticClass:"ticker__number-container"},[t._v(" "+t._s(t.positionInList)+" ")]),n("div",{staticClass:"ticker__info-container",on:{click:t.handleCoinClick,mouseup:function(e){return"button"in e&&1!==e.button?null:t.handleCoinClick.apply(null,arguments)},contextmenu:function(e){return t.handleCoinClick.apply(null,arguments)}}},[n("img",{staticClass:"ticker__logo",attrs:{src:t.ticker.imageUrl,alt:t.ticker.name+" logo"}}),n("p",{staticClass:"ticker__full-name"},[t._v(" "+t._s(t.ticker.coinName)+" ")]),n("p",{staticClass:"ticker__short-name"},[t._v(" "+t._s(t.ticker.name)+" ")])]),n("p",{staticClass:"ticker__price-container"},[n("span",{staticClass:"ticker__price-wrapper"},[t._v(" "+t._s(t.formatedPrice)+" ")])]),n("div",{staticClass:"ticker__button-container"},[t.isRemovable?n("remove-button",{staticClass:"ticker__button",nativeOn:{click:function(e){return t.handleRemoveButtonClick.apply(null,arguments)}}}):t._e()],1)])},tt=[],et=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"close-button"})}),nt=[],it=(n("435c"),{}),st=Object(p["a"])(it,et,nt,!1,null,"39145b8f",null),at=st.exports,ot={components:{RemoveButton:at},props:{isRemovable:{type:Boolean,default:!0},positionInList:{type:Number},ticker:{type:Object,default:null}},computed:{formatedPrice:function(){return"-"===this.ticker.price?this.ticker.price:"$ "+this.ticker.price}},methods:{handleRemoveButtonClick:function(){this.$emit("remove-request")},handleCoinClick:function(t){this.$emit("info-request",t)}}},rt=ot,ct=(n("d839"),Object(p["a"])(rt,Z,tt,!1,null,"727dff7a",null)),ut=ct.exports,lt=function(){function t(){Object(w["a"])(this,t)}return Object(L["a"])(t,null,[{key:"get",value:function(){return O.state.customTickerList}},{key:"set",value:function(t){O.dispatch("setCustomList",t)}},{key:"add",value:function(t){O.dispatch("addTickerToCustomList",t)}},{key:"remove",value:function(t){O.dispatch("removeTickerFromCustomList",t)}},{key:"setPrice",value:function(t,e){O.dispatch("setTickerPrice",{ticker:t,newPrice:e})}}]),t}(),dt={components:{AutocompleteSearch:g,CurrencyTicker:ut},data:function(){return{tickerToAdd:"",suggestions:[],isTickerNameInvalid:!1,isTickerAlreadyAdded:!1}},computed:{CustomTickerList:function(){return lt.get()}},created:function(){var t=localStorage.getItem("tickers");t&&(lt.set(JSON.parse(t)),this.CustomTickerList.forEach((function(t){t.price="-",U(t.name,(function(e){return lt.setPrice(t,e)}))})));var e=2e3;this.$options.intervalId=setInterval((function(){return z(lt.get().map((function(t){return t.name})))}),e)},beforeDestroy:function(){clearInterval(this.$options.intervalId)},watch:{CustomTickerList:function(){localStorage.setItem("tickers",JSON.stringify(this.CustomTickerList))},tickerToAdd:function(){this.tickerToAdd.trim().length&&!/\\/.test(this.tickerToAdd)&&(this.suggestions=x.findAllMatches(this.tickerToAdd))}},methods:{updateTickerToAdd:function(t){this.tickerToAdd=t,this.resetErrorMessages()},addTicker:function(t){var e=x.getCoinData(t);e?(this.checkIfAlreadyAdded(e.name),this.isTickerAlreadyAdded||(lt.add(e),U(e.name,(function(t){return lt.setPrice(e,t)})))):this.isTickerNameInvalid=!0},removeTicker:function(t){lt.remove(t),W(t.name)},checkIfAlreadyAdded:function(t){var e,n=Object(X["a"])(this.CustomTickerList);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(i.name===t)return void(this.isTickerAlreadyAdded=!0)}}catch(s){n.e(s)}finally{n.f()}},resetErrorMessages:function(){this.isTickerAlreadyAdded=!1,this.isTickerNameInvalid=!1},openCoinPage:function(t,e){var n={name:"Coins",params:{coin:e}};if(1===t.which&&this.$router.push(n),2===t.which){var i=this.$router.resolve(n);window.open(i.href)}}}},ft=dt,ht=(n("cb6f"),Object(p["a"])(ft,G,Q,!1,null,"ae52a5c6",null)),pt=ht.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("Page is not developed yet.")])},gt=[],bt={},vt=Object(p["a"])(bt,mt,gt,!1,null,null,null),jt=vt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:t.coinData.imageUrl,alt:"Token icon"}}),n("h1",[t._v(t._s(t.coinData.coinName)+" ("+t._s(t.coinData.name)+")")]),n("a",{staticClass:"coin-info__button",class:{"coin-info__button_active":"description"===t.activeWindow},attrs:{tabindex:"0"},on:{click:t.switchToDescription,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchToDescription.apply(null,arguments)}}},[t._v("Description ")]),t._v(" | "),n("a",{staticClass:"coin-info__button",class:{"coin-info__button_active":"hourlyChart"===t.activeWindow},attrs:{tabindex:"0"},on:{click:t.switchToHourlyChart,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.switchToHourlyChart.apply(null,arguments)}}},[t._v("Hourly Data ")]),n("div",{staticClass:"coin-info__container"},["description"===t.activeWindow?[n("p",{staticClass:"coin-info__content"},[t._v(t._s(t.coinData.description))])]:t._e(),"hourlyChart"===t.activeWindow?[n("div",[t.isDataNotFound?n("p",[t._v("Data not found")]):t._e(),t.isChartDataLoaded&&!t.isDataNotFound?n("line-chart",{attrs:{label:"Price, $",chartData:t.chartData}}):t._e()],1)]:t._e()],2)])},_t=[],yt=n("1fca"),Ct={extends:yt["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object,default:function(){return{layout:{padding:5},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}}},mounted:function(){this.renderLineChart()},methods:{renderLineChart:function(){var t=this.chartData.map((function(t){return t.x})),e=this.chartData.map((function(t){return t.y}));this.renderChart({labels:t,datasets:[{label:this.label,data:e,borderColor:"#49A078",backgroundColor:"rgba(73, 160, 120, 0.2)",borderWidth:1.5}]},this.options)}}},wt=Ct,Lt=Object(p["a"])(wt,V,$,!1,null,null,null),Tt=Lt.exports,St={components:{LineChart:Tt},props:{coin:{type:String,required:!0}},created:function(){this.coinData.name||this.$router.push({name:"NotFound"})},beforeRouteUpdate:function(t,e,n){var i=this,s=x.getCoinData(t.params.coin.toUpperCase());s?(n(),this.isChartDataLoaded=!1,this.getHourlyData(s.name).then((function(){return i.isChartDataLoaded=!0}))):this.$router.push({name:"NotFound"})},data:function(){return{activeWindow:"description",hourlyData:[],isChartDataLoaded:!1}},computed:{coinData:function(){return x.getCoinData(this.coin.toUpperCase())||{}},chartData:function(){return this.hourlyData?this.hourlyData.map((function(t){var e=1e3*t.time,n=new Date(e),i=n.getHours()+":00";return{x:i,y:t.open}})):[{x:0,y:0}]},isDataNotFound:function(){return!this.hourlyData}},methods:{switchToHourlyChart:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.activeWindow="hourlyChart",e.next=3,t.getHourlyData(t.coinData.name);case 3:t.isChartDataLoaded=!0;case 4:case"end":return e.stop()}}),e)})))()},switchToDescription:function(){this.activeWindow="description",this.isChartDataLoaded=!1},getHourlyData:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,q(t);case 2:e.hourlyData=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}},Dt=St,Ot=(n("05d9"),Object(p["a"])(Dt,kt,_t,!1,null,"499e7e36",null)),xt=Ot.exports;i["a"].use(Y["a"]);var At=[{path:"/",redirect:"/custom-list"},{path:"/custom-list",name:"Custom list",component:pt},{path:"/top-list",name:"Top list",component:jt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/coins/:coin",name:"Coins",component:xt,props:!0},{path:"/404",alias:"*",name:"NotFound",component:function(){return n.e("NotFound").then(n.bind(null,"9703"))}}],It=new Y["a"]({base:"",routes:At}),Et=It;i["a"].config.productionTip=!1,new i["a"]({router:Et,store:O,render:function(t){return t(J)}}).$mount("#app")},"6fed":function(t,e,n){},"73f7":function(t,e,n){},"85ec":function(t,e,n){},"8a78":function(t,e,n){t.exports=n.p+"img/sprite.cd59ef2b.svg"},9037:function(t,e,n){"use strict";n("cd31")},"9bb4":function(t,e,n){"use strict";n("ef83")},"9de4":function(t,e,n){"use strict";n("cddc")},cb6f:function(t,e,n){"use strict";n("53df")},cd31:function(t,e,n){},cddc:function(t,e,n){},d839:function(t,e,n){"use strict";n("73f7")},ef83:function(t,e,n){},fd3d:function(t,e,n){}});
//# sourceMappingURL=app.0c313a76.js.map