(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movieDetail/movieDetail"],{"13f6":function(e,t,i){"use strict";(function(e){function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},o=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.forEach(function(t){a(e,t,i[t])})}return e}function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={name:"mmovieDetail",data:function(){return{id:"",isReady:!1,isShowVideo:!1,isShowCoverView:!0,detailMovie:{},isRequestPermission:!1,slideHide:!0}},onLoad:function(e){this.id=e.id,this.getDetail(this.id)},onBackPress:function(){if(this.isShowVideo)return this.isShowVideo=!1,!0},onPullDownRefresh:function(){this.getDetail(this.detailMovie.id),e.showToast({title:"刷新完成",success:function(){e.stopPullDownRefresh()}})},methods:{getDetail:function(t){var i=this;this.isReady=!1,e.showLoading({title:"正在加载"}),e.request({method:"get",url:"https://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=".concat(t),success:function(t){t.data.detailMovie.img=t.data.detailMovie.img.replace("w.h","128.180"),i.detailMovie=t.data.detailMovie,e.setNavigationBarTitle({title:i.detailMovie.nm}),i.isReady=!0},complete:function(){e.hideLoading()}})},showPlayVideo:function(){this.isShowVideo=!0},stopVideo:function(){e.createVideoContext("vd",this).pause(),this.isShowVideo=!1},playVideo:function(t){e.createVideoContext("vd",this).play()},playingVideo:function(){var t=this;e.getNetworkType({success:function(i){"wifi"!=i.networkType?0==t.isRequestPermission?(e.createVideoContext("vd",t).pause(),e.showModal({title:"提示",content:"当前设备未连接wifi，是否继续播放",confirmText:"我是土豪",cancelText:"算了",success:function(i){i.confirm&&(t.isRequestPermission=!0,t.isShowCoverView=!1,e.createVideoContext("vd",t).play())}})):(t.isShowCoverView=!1,e.createVideoContext("vd",t).play()):e.createVideoContext("vd",t).play()}})},toBuyTicket:function(t){e.navigateTo({url:"/pages/buyTicket/buyTicket?id=".concat(t)})}},onNavigationBarButtonTap:function(t){if(0==t.index){var a=e.getStorageSync("saveCollection")||[],o=a.map(function(e){return e.id}).indexOf(this.id),s=-1!=o;s?e.showToast({title:"您已经收藏过啦",icon:"none"}):a.push(i({},this.detailMovie,{s_time:(new Date).toLocaleString()})),e.setStorageSync("saveCollection",a),e.showToast({title:"收藏成功"})}}};t.default=o}).call(this,i("6e42")["default"])},"2fd9":function(e,t,i){"use strict";i.r(t);var a=i("13f6"),o=i.n(a);for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);t["default"]=o.a},"2ff4":function(e,t,i){},5398:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isReady?i("view",{staticClass:"movieDetail"},[i("view",{staticClass:"detailBox"},[i("image",{staticClass:"maskImage",attrs:{src:e.detailMovie.img}}),i("view",{staticClass:"left"},[i("image",{staticClass:"movieImg",attrs:{src:e.detailMovie.img,mode:"widthFix"}}),i("image",{staticClass:"playVideoImage",attrs:{src:"../../static/play.png",mode:"widthFix",eventid:"356afa80-0"},on:{click:e.showPlayVideo}})]),i("view",{staticClass:"center"},[i("view",{staticClass:"m_title"},[e._v(e._s(e.detailMovie.nm))]),i("view",{staticClass:"m_sc"},[0!=e.detailMovie.sc?i("text",[e._v(e._s(e.detailMovie.sc))]):e._e(),e._v("("+e._s(e.detailMovie.wish)+"想看)")]),i("view",{},[e._v(e._s(e.detailMovie.cat))]),i("view",{},[e._v(e._s(e.detailMovie.fra)+"/"+e._s(e.detailMovie.dur)+"分钟")]),i("view",{},[e._v(e._s(e.detailMovie.pubDesc))])]),e._m(0)]),i("view",{staticClass:"buy-view"},[i("view",{staticClass:"buy-view-btn",attrs:{eventid:"356afa80-1"},on:{click:function(t){e.toBuyTicket(e.detailMovie.id)}}},[e._v("特惠购票")])]),i("view",{staticClass:"dra",class:{slideHide:e.slideHide}},[e._v(e._s(e.detailMovie.dra))]),i("view",{staticClass:"slideUpDown",attrs:{eventid:"356afa80-2"},on:{click:function(t){e.slideHide=!e.slideHide}}},[1==e.slideHide?i("image",{attrs:{src:"../../static/down.png",mode:"widthFix"}}):e._e(),0==e.slideHide?i("image",{attrs:{src:"../../static/up.png",mode:"widthFix"}}):e._e()]),e.isShowVideo?i("view",{staticClass:"view-video",attrs:{eventid:"356afa80-3"},on:{tap:e.stopVideo}}):e._e()]):e._e()},o=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"right"},[i("image",{attrs:{src:"../../static/right.png",mode:"widthFix"}})])}];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return o})},5816:function(e,t,i){"use strict";var a=i("2ff4"),o=i.n(a);o.a},c91e:function(e,t,i){"use strict";i("78c4");var a=s(i("b0ce")),o=s(i("f55e"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(o.default))},f55e:function(e,t,i){"use strict";i.r(t);var a=i("5398"),o=i("2fd9");for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);i("5816");var n=i("2877"),c=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"489028e2",null);t["default"]=c.exports}},[["c91e","common/runtime","common/vendor"]]]);