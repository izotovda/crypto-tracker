(function(e){function t(t){for(var s,r,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var s={},i={app:0},a=[];function r(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"926a64c5"}[e]+".js"}function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=i[e]=[t,s]}));t.push(n[2]=s);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=i[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",u.name="ChunkLoadError",u.type=s,u.request=a,n[1](u)}i[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=s,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(n,s,function(t){return e[t]}.bind(null,s));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"06c4":function(e,t,n){},"0b57":function(e,t,n){"use strict";n("7ee8")},"435c":function(e,t,n){"use strict";n("fd3d")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=a,e.exports=i,i.id="4678"},4734:function(e,t,n){"use strict";n("aed2")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[e.isCoinListLoaded?e._e():n("div",{staticClass:"backdrop"},[e._v(" Loading... ")]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:{name:"Home",params:{coinList:e.coinList}}}},[e._v(" Home ")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view",{attrs:{coinList:e.coinList}})],1)},a=[],r=n("1da1"),o=n("5530"),c=(n("96cf"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("d81d"),n("4fad"),n("a15b"),n("159b"),"893bab5ecbccecb436271b0f965e0efac90f674f38d5d0c4955dd78a9877e235"),u=new Map,l=new URL("https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD");l.searchParams.set("api_key",c);var d,f,p=function(){return fetch("https://min-api.cryptocompare.com/data/all/coinlist").then((function(e){return e.json()})).then((function(e){for(var t in e.Data){var n=e.Data[t],s=n.CoinName,i=n.Description,a=n.FullName,r=n.Name,c="https://www.cryptocompare.com"+e.Data[t].ImageUrl;e.Data[t]=Object(o["a"])({},{coinName:s,description:i,fullName:a,imageUrl:c,name:r})}return e.Data})).catch((function(e){return console.log(e)}))},h=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,s,i,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=new URL("https://min-api.cryptocompare.com/data/v2/histohour?tsym=USD&limit=24"),s.searchParams.set("fsym",t),e.next=5,fetch(s);case 5:return i=e.sent,e.next=8,i.json();case 8:return a=e.sent,r=null!==(n=Object.entries(a.Data.Data).map((function(e){return e[1]})))&&void 0!==n?n:[],e.abrupt("return",r);case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),m=function(e){e.length&&(l.searchParams.set("fsyms",e.join()),fetch(l).then((function(e){return e.json()})).then((function(e){u.forEach((function(t,n){e[n]&&t(e[n].USD)}))})).catch((function(e){return console.log(e)})))},b=function(e,t){u.set(e,t)},g=function(e){u.delete(e)},j={data:function(){return{isCoinListLoaded:!1,coinList:null}},created:function(){var e=this;p().then((function(t){e.coinList=t,e.isCoinListLoaded=!0}))}},k=j,v=(n("034f"),n("2877")),y=Object(v["a"])(k,i,a,!1,null,null,null),_=y.exports,w=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"search__container"},[n("autocomplete-search",{staticClass:"searh__autocomplete",attrs:{suggestions:e.suggestions,placeholder:"Enter coin name",autofocus:!0},on:{submit:e.handleSubmit,input:e.updateTickerToAdd}}),n("div",{staticClass:"searh__errors-container"},[e.isTickerNameInvalid?n("span",[e._v("Invalid token name")]):e._e(),e.isTickerAlreadyAdded?n("span",[e._v("Token is already added")]):e._e()])],1),n("ul",{staticClass:"tickers__list"},e._l(e.trackedTickers,(function(t,s){return n("li",{key:s,staticClass:"tickers__item"},[n("currency-ticker",{attrs:{ticker:t,positionInList:s+1},on:{"remove-request":function(n){return e.removeTicker(t)},"info-request":function(n){return e.openCoinPage(n,t.name)}}})],1)})),0)])},T=[],L=n("b85c"),S=n("2909"),D=(n("b0c0"),n("498a"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autocomplete-search__container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputValue,expression:"inputValue"}],staticClass:"autocomplete-search__input",attrs:{autofocus:!0===e.autofocus,placeholder:e.placeholder},domProps:{value:e.inputValue},on:{focus:e.showSuggestions,blur:e.hideSuggestions,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.selectNextSuggestion.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.selectPreviousSuggestion.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitValue.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"escape",void 0,t.key,void 0)?null:e.blur.apply(null,arguments)}],mouseover:function(t){e.selectedSuggestion=null},click:function(t){e.selectedSuggestion=null},input:[function(t){t.target.composing||(e.inputValue=t.target.value)},e.handleInput]}}),e.isSuggestionListShown?n("div",{ref:"suggestionsList",staticClass:"autocomplete-search__suggestions-list"},e._l(e.suggestionsList,(function(t,s){return n("div",{key:s,staticClass:"autocomplete-search__suggestion",class:{"autocomplete-search__suggestion_selected":t===e.selectedSuggestion},on:{mouseover:function(n){e.selectedSuggestion=t},click:e.submitValue,mousedown:function(e){e.preventDefault()}}},[e._v(" "+e._s(t)+" ")])})),0):e._e()])}),x=[],O={props:{suggestions:{type:Array},autofocus:{type:Boolean,default:!1},placeholder:{type:String}},data:function(){return{inputValue:"",suggestionsList:[],isSuggestionListShown:!1,selectedSuggestion:null}},watch:{suggestions:function(){this.suggestionsList=Object(S["a"])(this.suggestions)}},methods:{showSuggestions:function(){this.isSuggestionListShown=!0},hideSuggestions:function(){this.isSuggestionListShown=!1,this.selectedSuggestion=null},selectNextSuggestion:function(){var e=this.suggestionsList.length,t=this.suggestionsList.indexOf(this.selectedSuggestion);e&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[0]:t>=e-1?null:this.suggestionsList[t+1],this.scrollSuggestionsList())},selectPreviousSuggestion:function(){var e=this.suggestionsList.length,t=this.suggestionsList.indexOf(this.selectedSuggestion);e&&(this.selectedSuggestion=null===this.selectedSuggestion?this.suggestionsList[e-1]:0===t?null:this.suggestionsList[t-1],this.scrollSuggestionsList())},scrollSuggestionsList:function(){var e=this;this.$nextTick((function(){if(null!==e.selectedSuggestion){var t=e.$refs.suggestionsList,n=t.querySelector(".autocomplete-search__suggestion_selected"),s=n.getBoundingClientRect(),i=t.getBoundingClientRect();s.bottom>i.bottom?n.scrollIntoView(!1):s.top<i.top&&n.scrollIntoView(!0)}}))},handleInput:function(){this.$emit("input",this.inputValue),this.resetSuggestionList()},submitValue:function(){if(this.inputValue.length){var e=null===this.selectedSuggestion?this.inputValue:this.selectedSuggestion;this.$emit("submit",e),this.resetInputValue(),this.resetSuggestionList()}},resetInputValue:function(){this.inputValue=""},resetSuggestionList:function(){this.suggestionsList=[]},blur:function(e){e.target.blur()}}},A=O,N=(n("0b57"),Object(v["a"])(A,D,x,!1,null,"55e21648",null)),z=N.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"ticker__container"},[n("div",{staticClass:"ticker__number"},[e._v(" "+e._s(e.positionInList)+" ")]),n("div",{staticClass:"ticker__coin-info",on:{click:e.handleCoinClick,mouseup:function(t){return"button"in t&&1!==t.button?null:e.handleCoinClick.apply(null,arguments)},contextmenu:function(t){return e.handleCoinClick.apply(null,arguments)}}},[n("img",{staticClass:"ticker__image",attrs:{src:e.ticker.imageUrl,alt:e.ticker.name+" logo"}}),n("p",{staticClass:"ticker__full-name"},[e._v(" "+e._s(e.ticker.coinName)+" ")]),n("p",{staticClass:"ticker__short-name"},[e._v(" "+e._s(e.ticker.name)+" ")])]),n("p",{staticClass:"ticker__price"},[n("span",{staticClass:"ticker__price-wrapper"},[e._v(" "+e._s(e.formatedPrice)+" ")])]),n("div",{staticClass:"ticker__button-container"},[e.isRemovable?n("remove-button",{staticClass:"ticker__remove-button",nativeOn:{click:function(t){return e.handleRemoveButtonClick.apply(null,arguments)}}}):e._e()],1)])},P=[],U=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"close-button"})}),E=[],$=(n("435c"),{}),V=Object(v["a"])($,U,E,!1,null,"39145b8f",null),R=V.exports,H={components:{RemoveButton:R},props:{isRemovable:{type:Boolean,default:!0},positionInList:{type:Number},ticker:{type:Object,default:null}},computed:{formatedPrice:function(){return"-"===this.ticker.price?this.ticker.price:"$ "+this.ticker.price}},methods:{handleRemoveButtonClick:function(){this.$emit("remove-request")},handleCoinClick:function(e){this.$emit("info-request",e)}}},q=H,M=(n("8e42"),Object(v["a"])(q,I,P,!1,null,"7f317cdc",null)),W=M.exports,B={components:{AutocompleteSearch:z,CurrencyTicker:W},props:{coinList:{default:null}},data:function(){return{tickerToAdd:"",suggestions:[],trackedTickers:[],isTickerNameInvalid:!1,isTickerAlreadyAdded:!1}},created:function(){var e=this,t=localStorage.getItem("tickers");t&&(this.trackedTickers=Object(S["a"])(JSON.parse(t)),this.trackedTickers.forEach((function(t){t.price="-",b(t.name,(function(n){return e.updateTickerPrice(t.name,n)}))})));var n=2e3;this.$options.intervalId=setInterval((function(){return m(e.trackedTickers.map((function(e){return e.name})))}),n)},beforeDestroy:function(){clearInterval(this.$options.intervalId)},watch:{trackedTickers:function(){localStorage.setItem("tickers",JSON.stringify(this.trackedTickers))},tickerToAdd:function(){if(this.resetErrorMessages(),this.tickerToAdd.trim().length&&!/\\/.test(this.tickerToAdd)){var e=this.coinList;for(var t in this.suggestions=[],e){var n=new RegExp("^".concat(this.tickerToAdd),"gi");(e[t].fullName.match(n)||e[t].name.match(n))&&this.suggestions.push(e[t].fullName)}}}},methods:{updateTickerToAdd:function(e){this.tickerToAdd=e},handleSubmit:function(e){this.addTicker(e),this.tickerToAdd=""},addTicker:function(e){var t=this,n=this.getTickerData(e);n?(this.checkIfAlreadyAdded(n.name),this.isTickerAlreadyAdded||(this.trackedTickers.push(n),b(n.name,(function(e){return t.updateTickerPrice(n.name,e)})))):this.isTickerNameInvalid=!0},removeTicker:function(e){this.trackedTickers=this.trackedTickers.filter((function(t){return t!=e})),g(e.name)},updateTickerPrice:function(e,t){this.trackedTickers.forEach((function(n){n.name===e&&(n.price=t)}));var n=this.trackedTickers.filter((function(t){return t.name===e})).map((function(e){return e[0]}));n.price=t},getTickerData:function(e){var t=this.coinList;for(var n in t)if(e.toUpperCase()===t[n].fullName.toUpperCase()||e.toUpperCase()===t[n].coinName.toUpperCase()||e.toUpperCase()===t[n].name.toUpperCase())return{name:t[n].name,coinName:t[n].coinName,price:"-",imageUrl:t[n].imageUrl}},checkIfAlreadyAdded:function(e){var t,n=!1,s=Object(L["a"])(this.trackedTickers);try{for(s.s();!(t=s.n()).done;){var i=t.value;i.name===e&&(n=!0)}}catch(a){s.e(a)}finally{s.f()}this.isTickerAlreadyAdded=n},resetErrorMessages:function(){this.isTickerAlreadyAdded=!1,this.isTickerNameInvalid=!1},openCoinPage:function(e,t){var n={name:"Coins",params:{coin:t,coinList:this.coinList}};if(1===e.which&&this.$router.push(n),2===e.which){var s=this.$router.resolve(n);window.open(s.href)}}}},F=B,J=(n("4734"),Object(v["a"])(F,C,T,!1,null,"5b2839d8",null)),G=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("img",{attrs:{src:e.coinData.imageUrl,alt:"Token icon"}}),n("h1",[e._v(e._s(e.coinData.fullName))]),n("a",{staticClass:"coin-info__button",class:{"coin-info__button_active":"description"===e.activeWindow},attrs:{tabindex:"0"},on:{click:e.switchToDescription,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.switchToDescription.apply(null,arguments)}}},[e._v("Description ")]),e._v(" | "),n("a",{staticClass:"coin-info__button",class:{"coin-info__button_active":"hourlyChart"===e.activeWindow},attrs:{tabindex:"0"},on:{click:e.switchToHourlyChart,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.switchToHourlyChart.apply(null,arguments)}}},[e._v("Hourly Data ")]),n("div",{staticClass:"coin-info__container"},["description"===e.activeWindow?[n("p",{staticClass:"coin-info__content"},[e._v(e._s(e.coinData.description))])]:e._e(),"hourlyChart"===e.activeWindow?[n("div",[e.isDataNotFound?n("p",[e._v("Data not found")]):e._e(),e.isLoaded&&!e.isDataNotFound?n("line-chart",{attrs:{label:"Price, $",chartData:e.chartData}}):e._e()],1)]:e._e()],2)])},Q=[],X=n("1fca"),Y={extends:X["a"],props:{label:{type:String},chartData:{type:Array},options:{type:Object,default:function(){return{layout:{padding:5},legend:{display:!1},responsive:!0,maintainAspectRatio:!1}}}},mounted:function(){var e=this.chartData.map((function(e){return e.x})),t=this.chartData.map((function(e){return e.y}));this.renderChart({labels:e,datasets:[{label:this.label,data:t,borderColor:"#49A078",backgroundColor:"rgba(73, 160, 120, 0.2)",borderWidth:1.5}]},this.options)}},Z=Y,ee=Object(v["a"])(Z,d,f,!1,null,null,null),te=ee.exports,ne={components:{LineChart:te},props:{coin:{type:String,required:!0},coinList:{default:null}},data:function(){return{activeWindow:"description",hourlyData:[],isLoaded:!1}},computed:{coinData:function(){var e;return(null===(e=this.coinList)||void 0===e?void 0:e[this.coin.toUpperCase()])||{}},chartData:function(){return this.hourlyData?this.hourlyData.map((function(e){var t=1e3*e.time,n=new Date(t),s=n.getHours()+":00";return{x:s,y:e.open}})):[{x:0,y:0}]},isDataNotFound:function(){return!this.hourlyData}},methods:{switchToHourlyChart:function(){this.activeWindow="hourlyChart",this.getHourlyData()},switchToDescription:function(){this.activeWindow="description"},getHourlyData:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h(e.coinData.name);case 2:e.hourlyData=t.sent,e.isLoaded=!0;case 4:case"end":return t.stop()}}),t)})))()}}},se=ne,ie=(n("7bc8"),Object(v["a"])(se,K,Q,!1,null,"a2631e88",null)),ae=ie.exports;s["a"].use(w["a"]);var re=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/coins/:coin",name:"Coins",component:ae,props:!0}],oe=new w["a"]({base:"",routes:re}),ce=oe;s["a"].config.productionTip=!1,new s["a"]({router:ce,render:function(e){return e(_)}}).$mount("#app")},"7bc8":function(e,t,n){"use strict";n("06c4")},"7ee8":function(e,t,n){},"85ec":function(e,t,n){},"8c1b":function(e,t,n){},"8e42":function(e,t,n){"use strict";n("8c1b")},aed2:function(e,t,n){},fd3d:function(e,t,n){}});
//# sourceMappingURL=app.0df204a4.js.map