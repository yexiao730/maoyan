(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-boxoffice-boxoffice"],{2167:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{boxInfo:{}}},onLoad:function(){this.getBoxInfo()},methods:{getBoxInfo:function(){var e=this;uni.showLoading({title:"正在加载数据"});var t="https://www.softeem.xin/maoyanApi/box/promovie/api/box/second.json";uni.request({url:t,success:function(t){e.boxInfo=t.data.data},complete:function(){uni.hideLoading()}})}},onPullDownRefresh:function(){this.getBoxInfo(),uni.stopPullDownRefresh()}};t.default=n},2389:function(e,t,i){"use strict";i.r(t);var n=i("bbbf"),o=i("7284");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("a8e7");var s=i("2877"),l=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,"7ab0838e",null);t["default"]=l.exports},7284:function(e,t,i){"use strict";i.r(t);var n=i("2167"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a},a8e7:function(e,t,i){"use strict";var n=i("c83b"),o=i.n(n);o.a},bbbf:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"boxOffice"},[i("v-uni-view",{staticClass:"topInfo"},[i("v-uni-view",{staticClass:"queryData"},[e._v(e._s(e.boxInfo.queryDate)+" 今天大盘："),i("v-uni-text",[e._v(e._s(e.boxInfo.splitTotalBox)+e._s(e.boxInfo.totalBoxUnitInfo))])],1),i("v-uni-view",{staticClass:"refreshTips"},[e._v("每30分钟更新一次，可下拉手动刷新")])],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"listTitle listItem"},[i("v-uni-view",{staticClass:"nmTitle"},[e._v("片名")]),i("v-uni-view",{staticClass:"nowBoxMoney"},[i("v-uni-text",[e._v("实时票房")]),i("v-uni-text",[e._v("(万元)")])],1),i("v-uni-view",[e._v("票房占比")]),i("v-uni-view",[e._v("排片占比")]),i("v-uni-view",[e._v("上座率")])],1),e._l(e.boxInfo.list,function(t,n){return i("v-uni-view",{key:n,staticClass:"listItem",style:{backgroundColor:n%2==0?"#f2f2f2":"white"}},[i("v-uni-view",{staticClass:"nmTitle"},[i("v-uni-view",{staticClass:"nm"},[e._v(e._s(t.movieName))]),i("v-uni-view",{staticClass:"showInfo"},[e._v(e._s(t.releaseInfo)+" "+e._s(t.splitSumBoxInfo))])],1),i("v-uni-view",{staticStyle:{color:"red"}},[e._v(e._s(t.boxInfo))]),i("v-uni-view",[e._v(e._s(t.splitBoxRate))]),i("v-uni-view",[e._v(e._s(t.showRate))]),i("v-uni-view",[e._v(e._s(t.avgSeatView))])],1)})],2)],1)},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},c83b:function(e,t,i){var n=i("e3c4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("874ba172",n,!0,{sourceMap:!1,shadowMode:!1})},e3c4:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".topInfo[data-v-7ab0838e]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%}.topInfo .queryData[data-v-7ab0838e]{font-size:%?32?%}.topInfo .queryData uni-text[data-v-7ab0838e]{color:red}.topInfo .refreshTips[data-v-7ab0838e]{margin-top:%?10?%;color:grey;font-size:%?24?%}.listTitle[data-v-7ab0838e]{background-color:rgba(255,0,0,.6);color:#fff}.listItem[data-v-7ab0838e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?24?%;padding:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.listItem>uni-view[data-v-7ab0838e]:not(.nmTitle){-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.listItem .nmTitle[data-v-7ab0838e]{width:%?200?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:center}.listItem .nmTitle .nm[data-v-7ab0838e]{font-weight:700}.listItem .nowBoxMoney[data-v-7ab0838e]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}",""])}}]);