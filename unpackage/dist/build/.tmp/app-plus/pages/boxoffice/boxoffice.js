(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/boxoffice/boxoffice"],{"016b":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"boxOffice"},[o("view",{staticClass:"topInfo"},[o("view",{staticClass:"queryData"},[t._v(t._s(t.boxInfo.queryDate)+" 今天大盘："),o("text",[t._v(t._s(t.boxInfo.splitTotalBox)+t._s(t.boxInfo.totalBoxUnitInfo))])]),o("view",{staticClass:"refreshTips"},[t._v("每30分钟更新一次，可下拉手动刷新")])]),o("view",{staticClass:"list"},[t._m(0),t._l(t.boxInfo.list,function(e,n){return o("view",{key:n,staticClass:"listItem",style:{backgroundColor:n%2==0?"#f2f2f2":"white"}},[o("view",{staticClass:"nmTitle"},[o("view",{staticClass:"nm"},[t._v(t._s(e.movieName))]),o("view",{staticClass:"showInfo"},[t._v(t._s(e.releaseInfo)+" "+t._s(e.splitSumBoxInfo))])]),o("view",{staticStyle:{color:"red"}},[t._v(t._s(e.boxInfo))]),o("view",[t._v(t._s(e.splitBoxRate))]),o("view",[t._v(t._s(e.showRate))]),o("view",[t._v(t._s(e.avgSeatView))])])})],2)])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"listTitle listItem"},[o("view",{staticClass:"nmTitle"},[t._v("片名")]),o("view",{staticClass:"nowBoxMoney"},[o("text",[t._v("实时票房")]),o("text",[t._v("(万元)")])]),o("view",[t._v("票房占比")]),o("view",[t._v("排片占比")]),o("view",[t._v("上座率")])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},2389:function(t,e,o){"use strict";o.r(e);var n=o("016b"),s=o("7284");for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);o("aafe");var a=o("2877"),f=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,"e204b9de",null);e["default"]=f.exports},"4f74":function(t,e,o){"use strict";o("78c4");var n=i(o("b0ce")),s=i(o("2389"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},7284:function(t,e,o){"use strict";o.r(e);var n=o("e021"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},aafe:function(t,e,o){"use strict";var n=o("dce4"),s=o.n(n);s.a},dce4:function(t,e,o){},e021:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{boxInfo:{}}},onLoad:function(){this.getBoxInfo()},methods:{getBoxInfo:function(){var e=this;t.showLoading({title:"正在加载数据"});var o="https://www.softeem.xin/maoyanApi/box/promovie/api/box/second.json";t.request({url:o,success:function(t){e.boxInfo=t.data.data},complete:function(){t.hideLoading()}})}},onPullDownRefresh:function(){this.getBoxInfo(),t.stopPullDownRefresh()}};e.default=o}).call(this,o("6e42")["default"])}},[["4f74","common/runtime","common/vendor"]]]);