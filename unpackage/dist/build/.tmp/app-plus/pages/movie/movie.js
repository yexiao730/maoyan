(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/movie"],{"00d4":function(t,e,i){},"01d4":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(i("46ab")),a=u(i("3b23")),c=u(i("6720")),o=u(i("cbbe")),s=u(i("66f2")),r=i("2f62");function u(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){f(t,e,i[e])})}return t}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={data:function(){return{pageType:0,showComing:!1,cityIndex:-1,showCityListView:!1}},computed:l({},(0,r.mapState)(["cityName","showDownloadMask","hasDownload"])),onLoad:function(t){var e=this,i=new s.default.BMapWX({ak:"f8nCGsELLDD60lnZiZmiI4ByPrtW9Cp0"});i.weather({fail:function(t){console.log(t),e.setCityName("武汉"),e.cityIndex=o.default.findIndex(function(t){return t.nm==e.cityName})},success:function(t){var i=t.originalData.results[0].currentCity.replace("市","");e.setCityName(i),e.cityIndex=o.default.findIndex(function(t){return t.nm==e.cityName})}})},onHide:function(){this.showCityListView=!1},methods:l({},(0,r.mapActions)(["setCityName"]),{movieSwiperChange:function(t){this.pageType=t.detail.current},toQuery:function(){t.navigateTo({url:"/pages/query/query"})},chooseCityName:function(t){var e=this;this.setCityName(t.nm),this.cityIndex=o.default.findIndex(function(t){return t.nm==e.cityName}),this.showCityListView=!1}}),components:{hot:n.default,coming:a.default,cityListView:c.default}};e.default=d}).call(this,i("6e42")["default"])},"01df":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"border-bottom":"1px solid #ececec"},attrs:{eventid:"d100dab4-2"},on:{tap:function(e){t.getDetail(t.item)}}},[i("view",{staticClass:"comingTitle"},[t._t("default",null,{mpcomid:"d100dab4-0"})],2),i("view",{staticClass:"m-item",attrs:{eventid:"d100dab4-1"},on:{longpress:t.showActionSheet}},[i("view",{staticClass:"left"},[i("image",{staticClass:"m-img",attrs:{src:t.item.img,mode:"widthFix",eventid:"d100dab4-0"},on:{tap:function(e){e.stopPropagation(),t.preViewImg(t.item.preViewSrc)}}})]),i("view",{staticClass:"center"},[i("view",{staticClass:"m-title"},[t._v(t._s(t.item.nm))]),1==t.item.globalReleased?i("view",{staticClass:"m-sc"},[t._v("评分："),i("text",[t._v(t._s(t.item.sc))])]):i("view",{staticClass:"m-sc"},[i("text",[t._v(t._s(t.item.wish))]),t._v("想看")]),i("view",[t._v("主演: "+t._s(t.item.star))]),i("view",[t._v(t._s(t.item.showInfo))])]),i("view",{staticClass:"right"},[1==t.item.globalReleased?i("button",{staticClass:"btnBuy"},[t._v("购票")]):i("button",{staticClass:"btnPre"},[t._v("预售")])],1)])])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"086f":function(t,e,i){"use strict";var n=i("915f"),a=i.n(n);a.a},1023:function(t,e,i){},"17de":function(t,e,i){},"2ad3":function(t,e,i){"use strict";i("78c4");var n=c(i("b0ce")),a=c(i("aa1e"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},3078:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"hot"},t._l(t.hotList,function(e,n){return i("movie-item",{key:n,attrs:{item:e,eventid:"be4f720c-0-"+n,mpcomid:"be4f720c-0-"+n},on:{preViewImg:t.preViewImg}})}))},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"336a":function(t,e,i){"use strict";i.r(e);var n=i("6157"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},"37d7":function(t,e,i){"use strict";i.r(e);var n=i("f4a0"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},"3b23":function(t,e,i){"use strict";i.r(e);var n=i("f6b9"),a=i("37d7");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("086f");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"190180c3",null);e["default"]=s.exports},"3ccd":function(t,e,i){"use strict";i.r(e);var n=i("01d4"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},"46ab":function(t,e,i){"use strict";i.r(e);var n=i("3078"),a=i("cf68");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("6ace");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"0acff552",null);e["default"]=s.exports},4904:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"movie"},[t.showDownloadMask?i("view",{staticClass:"mast"},[i("progress",{staticClass:"downloadProgress",attrs:{"show-info":!0,percent:t.hasDownload}})],1):t._e(),i("view",{staticClass:"topNav"},[i("view",{staticClass:"location",attrs:{eventid:"100b335e-0"},on:{click:function(e){t.showCityListView=!0}}},[t._v(t._s(t.cityName)),i("text",[t._v("")])]),i("view",{staticClass:"topNavItem",class:{active:0==t.pageType},attrs:{eventid:"100b335e-1"},on:{click:function(e){t.pageType=0}}},[t._v("正在热映")]),i("view",{staticClass:"topNavItem",class:{active:1==t.pageType},attrs:{eventid:"100b335e-2"},on:{click:function(e){t.pageType=1}}},[t._v("即将上映")]),i("view",{staticClass:"search",attrs:{eventid:"100b335e-3"},on:{click:function(e){t.toQuery()}}},[i("text",[t._v("")])])]),i("view",{staticClass:"border-bottom"},[i("view",{staticClass:"border-bottom-bar",class:{active:1==t.pageType}})]),i("view",{staticClass:"swiperContent"},[i("swiper",{staticStyle:{height:"100%"},attrs:{current:t.pageType,eventid:"100b335e-4"},on:{change:t.movieSwiperChange}},[i("swiper-item",{attrs:{mpcomid:"100b335e-1"}},[i("scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":""}},[i("hot",{attrs:{mpcomid:"100b335e-0"}})],1)],1),i("swiper-item",{attrs:{mpcomid:"100b335e-3"}},[i("scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":""}},[i("coming",{attrs:{mpcomid:"100b335e-2"}})],1)],1)],1)],1),t.showCityListView?i("city-list-view",{attrs:{cityName:t.cityName,eventid:"100b335e-5",mpcomid:"100b335e-4"},on:{chooseCityName:t.chooseCityName}}):t._e()],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},"4c6c":function(t,e,i){"use strict";var n=i("1023"),a=i.n(n);a.a},"4cce":function(t,e,i){},"504a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={baseUrl:"https://www.softeem.xin/maoyanApi"},a=n;e.default=a},6157:function(t,e,i){"use strict";(function(t){function i(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),a.forEach(function(e){n(t,e,i[e])})}return t}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"movieItem",props:["item"],methods:{preViewImg:function(t){this.$emit("preViewImg",t)},showActionSheet:function(){var e=this;t.showActionSheet({itemList:["添加收藏","查看详细"],success:function(n){if(0==n.tapIndex){var a=t.getStorageSync("saveCollection")||[],c=a.map(function(t){return t.id}).indexOf(e.item.id),o=-1!=c;o?t.showToast({title:"您已经收藏过啦",icon:"none"}):(a.push(i({},e.item,{s_time:(new Date).toLocaleString()})),t.setStorageSync("saveCollection",a),t.showToast({title:"收藏成功"}))}else 1==n.tapIndex&&t.navigateTo({url:"/pages/movieDetail/movieDetail?id=".concat(e.item.id)})}})},getDetail:function(e){t.navigateTo({url:"/pages/movieDetail/movieDetail?id=".concat(e.id)})}}};e.default=a}).call(this,i("6e42")["default"])},"6ace":function(t,e,i){"use strict";var n=i("00d4"),a=i.n(n);a.a},"915f":function(t,e,i){},"94ef":function(t,e,i){"use strict";var n=i("17de"),a=i.n(n);a.a},aa1e:function(t,e,i){"use strict";i.r(e);var n=i("4904"),a=i("3ccd");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("4c6c"),i("94ef");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"7a057f8a",null);e["default"]=s.exports},aba8:function(t,e,i){"use strict";i.r(e);var n=i("01df"),a=i("336a");for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);i("f9cc");var o=i("2877"),s=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"1701c76c",null);e["default"]=s.exports},b360:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),a=o(i("aba8")),c=o(i("504a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,n,a,c,o){try{var s=t[c](o),r=s.value}catch(u){return void i(u)}s.done?e(r):Promise.resolve(r).then(n,a)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var c=t.apply(e,i);function o(t){s(c,n,a,o,r,"next",t)}function r(t){s(c,n,a,o,r,"throw",t)}o(void 0)})}}var u={data:function(){return{hotList:[],hotImageList:[]}},created:function(){var e=r(n.default.mark(function e(){var i,a,c,o=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"正在加载"}),e.prev=1,e.next=4,this.getHotList();case 4:i=e.sent,a=t.getSystemInfoSync().windowWidth,c=a/128*180,this.hotList=i.movieList.map(function(t){return t.img=t.img.replace("w.h","128.180"),o.hotImageList.push(t.img.replace("128.180",a+"."+c)),t.preViewSrc=t.img.replace("128.180",a+"."+c),t}),t.hideLoading(),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](1),console.log(e.t0),t.hideLoading();case 15:case"end":return e.stop()}},e,this,[[1,11]])}));function i(){return e.apply(this,arguments)}return i}(),methods:{getHotList:function(){return new Promise(function(e,i){t.request({url:"".concat(c.default.baseUrl,"/ajax/movieOnInfoList"),success:function(t){e(t.data)},fail:function(t){i(t)}})})},preViewImg:function(e){t.previewImage({urls:this.hotImageList,current:e})}},components:{movieItem:a.default}};e.default=u}).call(this,i("6e42")["default"])},cf68:function(t,e,i){"use strict";i.r(e);var n=i("b360"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=a.a},f4a0:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("a34a")),a=o(i("aba8")),c=o(i("504a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,i,n,a,c,o){try{var s=t[c](o),r=s.value}catch(u){return void i(u)}s.done?e(r):Promise.resolve(r).then(n,a)}function r(t){return function(){var e=this,i=arguments;return new Promise(function(n,a){var c=t.apply(e,i);function o(t){s(c,n,a,o,r,"next",t)}function r(t){s(c,n,a,o,r,"throw",t)}o(void 0)})}}var u={data:function(){return{comingList:[],MostExpectedList:[],comingImageList:[]}},created:function(){var e=r(n.default.mark(function e(){var i,a,c,o,s=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.showLoading({title:"正在加载"}),e.prev=1,e.next=4,this.getComingList();case 4:return i=e.sent,a=t.getSystemInfoSync().windowWidth,c=a/128*180,this.comingList=i.coming.map(function(t){return t.img=t.img.replace("w.h","128.180"),s.comingImageList.push(t.img.replace("128.180",a+"."+c)),t.preViewSrc=t.img.replace("128.180",a+"."+c),t}),e.next=10,this.getMostExpectedList();case 10:o=e.sent,this.MostExpectedList=o.coming.map(function(t){return t.img=t.img.replace("w.h","128.180"),t}),t.hideLoading(),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),console.log(e.t0),t.hideLoading();case 19:case"end":return e.stop()}},e,this,[[1,15]])}));function i(){return e.apply(this,arguments)}return i}(),methods:{getComingList:function(){return new Promise(function(e,i){t.request({url:"".concat(c.default.baseUrl,"/ajax/comingList?ci=57&token=&limit=10"),success:function(t){e(t.data)},fail:function(t){i(t)}})})},preViewImg:function(e){t.previewImage({urls:this.comingImageList,current:e})},getMostExpectedList:function(){return new Promise(function(e,i){t.request({url:"".concat(c.default.baseUrl,"/ajax/mostExpected?ci=57&limit=10&offset=0&token="),success:function(t){e(t.data)},fail:function(t){i(t)}})})}},components:{movieItem:a.default}};e.default=u}).call(this,i("6e42")["default"])},f6b9:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"most-expected"},[i("view",{staticClass:"most-expected-title"},[t._v("最近受期待")]),i("scroll-view",{staticClass:"most-expected-scroll-view",staticStyle:{width:"100%"},attrs:{"scroll-x":""}},[i("view",{staticClass:"most-expected-list",style:{width:88*t.MostExpectedList.length+"px"}},t._l(t.MostExpectedList,function(e,n){return i("view",{key:n,staticClass:"item"},[i("view",{staticClass:"imgBox"},[i("image",{attrs:{src:e.img,mode:"widthFix"}})]),i("view",{staticClass:"nm"},[t._v(t._s(e.nm))]),i("view",{staticClass:"date"},[t._v(t._s(e.comingTitle))])])}))])],1),i("view",{staticClass:"coming",staticStyle:{"margin-top":"10rpx"}},t._l(t.comingList,function(e,n){return i("movie-item",{key:n,attrs:{item:e,eventid:"fd10d404-0-"+n,mpcomid:"fd10d404-0-"+n},on:{preViewImg:t.preViewImg}},[t._v(t._s(e.comingTitle))])}))])},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},f9cc:function(t,e,i){"use strict";var n=i("4cce"),a=i.n(n);a.a}},[["2ad3","common/runtime","common/vendor"]]]);