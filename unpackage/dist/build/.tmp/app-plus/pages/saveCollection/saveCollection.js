(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/saveCollection/saveCollection"],{"041f":function(t,e,n){"use strict";var o=n("0f93"),i=n.n(o);i.a},"0f93":function(t,e,n){},"196a":function(t,e,n){},1999:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"saveCollectionItem",data:function(){return{startX:"",leftStyle:"0px"}},props:["item"],methods:{getDetail:function(e){t.navigateTo({url:"/pages/mvoieDetail/movieDetail?id=".concat(e)})},showActionSheet:function(e){var n=this;t.showActionSheet({itemList:["删除记录","全部清空"],success:function(o){0==o.tapIndex?n.$emit("deleteSaveCollection",e):1==o.tapIndex&&t.showModal({title:"提示",content:"确定要清空记录吗",success:function(t){t.confirm&&n.$emit("removeAllSaveCollection")}})}})},touchS:function(t){1==t.touches.length&&(this.startX=t.touches[0].clientX)},touchM:function(t){if(1==t.touches.length){var e=t.touches[0].clientX,n=this.startX-e;n<=0?this.leftStyle="0px":n>0&&(this.leftStyle=-1*n+"px",n>=180&&(this.leftStyle="-90px"))}},touchE:function(t){if(1==t.mp.changedTouches.length){var e=t.mp.changedTouches[0].clientX,n=this.startX-e;this.leftStyle=n>45?"-90px":"0px"}}}};e.default=n}).call(this,n("6e42")["default"])},"37d1":function(t,e,n){"use strict";n.r(e);var o=n("4a3b"),i=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e["default"]=i.a},"4a3b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("5e1e"));function i(t){return t&&t.__esModule?t:{default:t}}var l={data:function(){return{saveCollection:[]}},onLoad:function(){this.saveCollection=t.getStorageSync("saveCollection")||[]},onPullDownRefresh:function(){console.log("下拉刷新"),this.saveCollection=t.getStorageSync("saveCollection")||[],t.showToast({title:"刷新完成",success:function(){t.stopPullDownRefresh()}})},methods:{deleteSaveCollection:function(e){var n=this.saveCollection.findIndex(function(t){return t.id=e});this.saveCollection.splice(n,1),t.setStorageSync("saveCollection",this.saveCollection),t.showToast({title:"删除成功"})},removeAllSaveCollection:function(){this.saveCollection.splice(0),t.setStorageSync("saveCollection",this.saveCollection),t.showToast({title:"清空成功"})}},components:{saveCollectionItem:o.default}};e.default=l}).call(this,n("6e42")["default"])},"5d0d":function(t,e,n){"use strict";n("78c4");var o=l(n("b0ce")),i=l(n("d8af"));function l(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},"5e1e":function(t,e,n){"use strict";n.r(e);var o=n("75ac"),i=n("c308");for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);n("041f");var c=n("2877"),a=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"309d9978",null);e["default"]=a.exports},"75ac":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"view-item-out",attrs:{eventid:"b7dc6a44-1"},on:{touchstart:t.touchS,touchmove:t.touchM,touchend:t.touchE,tap:function(e){t.getDetail(t.item.id)},longpress:function(e){t.showActionSheet(t.item.id)}}},[n("view",{staticClass:"view-item",style:{left:t.leftStyle}},[n("view",{staticClass:"left"},[n("image",{attrs:{src:t.item.img}})]),n("view",{staticClass:"right"},[n("view",{staticClass:"m_title"},[t._v(t._s(t.item.nm))]),n("view",{staticClass:"s_time"},[t._v(t._s(t.item.s_time))])])]),n("view",{staticClass:"delButton",attrs:{eventid:"b7dc6a44-0"},on:{tap:function(e){e.stopPropagation(),t.$emit("deleteSaveCollection",t.item.id)}}},[t._v("删除")])])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},aa6e:function(t,e,n){"use strict";var o=n("196a"),i=n.n(o);i.a},c308:function(t,e,n){"use strict";n.r(e);var o=n("1999"),i=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e["default"]=i.a},ce90:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[0==t.saveCollection.length?n("view",{staticClass:"tips"},[t._v("暂无收藏记录")]):t._e(),t.saveCollection.length>0?n("view",{staticClass:"view-item-list"},t._l(t.saveCollection,function(e,o){return n("save-collection-item",{key:o,attrs:{item:e,eventid:"107d471c-0-"+o,mpcomid:"107d471c-0-"+o},on:{deleteSaveCollection:t.deleteSaveCollection,removeAllSaveCollection:t.removeAllSaveCollection}})})):t._e()])},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},d8af:function(t,e,n){"use strict";n.r(e);var o=n("ce90"),i=n("37d1");for(var l in i)"default"!==l&&function(t){n.d(e,t,function(){return i[t]})}(l);n("aa6e");var c=n("2877"),a=Object(c["a"])(i["default"],o["a"],o["b"],!1,null,"2b45c425",null);e["default"]=a.exports}},[["5d0d","common/runtime","common/vendor"]]]);