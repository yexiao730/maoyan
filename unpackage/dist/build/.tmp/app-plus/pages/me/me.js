(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"13b3":function(t,e,a){"use strict";a.r(e);var n=a("ba9d"),i=a("a911");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("e772");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"5cd3ae76",null);e["default"]=r.exports},"6fc2":function(t,e,a){},7505:function(t,e,a){"use strict";a("78c4");var n=s(a("b0ce")),i=s(a("13b3"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"7a61":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{saveCollection:[],userInfo:{avatarUrl:"../../static/user_photo.jpg",nickName:"用户昵称"}}},onLoad:function(){},methods:{clearStorage:function(){t.clearStorageSync()},getSysInfo:function(){t.navigateTo({url:"/pages/appVersion/appVersion"})},showSaveCollection:function(){t.navigateTo({url:"/pages/saveCollection/saveCollection"})}}};e.default=a}).call(this,a("6e42")["default"])},a911:function(t,e,a){"use strict";a.r(e);var n=a("7a61"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},ba9d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"userInfoBox"},[a("view",{staticClass:"left"},[a("image",{staticClass:"user_photo",attrs:{src:t.userInfo.avatarUrl,mode:"widthFix"}})]),a("view",{staticClass:"right"},[a("view",{staticClass:"nickName"},[t._v(t._s(t.userInfo.nickName))]),a("view",{staticClass:"addr"},[t._v("China·Hubei·Wuhan")])]),a("image",{staticClass:"bgImg",attrs:{src:t.userInfo.avatarUrl}})]),a("view",{staticClass:"view-item-list"},[a("view",{staticClass:"view-item",attrs:{eventid:"4377dafc-0"},on:{tap:t.showSaveCollection}},[t._v("收藏记录")]),a("view",{staticClass:"view-item",attrs:{eventid:"4377dafc-1"},on:{tap:t.getSysInfo}},[t._v("系统信息")])])])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},e772:function(t,e,a){"use strict";var n=a("6fc2"),i=a.n(n);i.a}},[["7505","common/runtime","common/vendor"]]]);