(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/movieDetail/movieDetail"],{

/***/ "../../../../DemoProject/maoyan1109/main.js?{\"page\":\"pages%2FmovieDetail%2FmovieDetail\"}":
/*!**************************************************************************************!*\
  !*** D:/DemoProject/maoyan1109/main.js?{"page":"pages%2FmovieDetail%2FmovieDetail"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../DemoProject/maoyan1109/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _movieDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/movieDetail/movieDetail.vue */ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_movieDetail.default));

/***/ }),

/***/ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue":
/*!*******************************************************************!*\
  !*** D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieDetail.vue?vue&type=template&id=97336c58&scoped=true& */ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true&");
/* harmony import */ var _movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieDetail.vue?vue&type=script&lang=js& */ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true& */ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "97336c58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movieDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--8-oneOf-1-2!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true&");
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_style_index_0_id_97336c58_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../Program Files/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./movieDetail.vue?vue&type=template&id=97336c58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Program_Files_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_movieDetail_vue_vue_type_template_id_97336c58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =


















































{
  name: "mmovieDetail",
  data: function data() {
    return {
      id: "",
      isReady: false,
      isShowVideo: false,
      isShowCoverView: true,
      detailMovie: {},
      isRequestPermission: false, //是否询问已授权非wifi播放视频
      slideHide: true //是否展开最下面部分
    };
  },
  onLoad: function onLoad(options) {
    this.id = options.id;
    //http://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=42964
    this.getDetail(this.id);
  },
  onBackPress: function onBackPress() {
    if (this.isShowVideo) {
      this.isShowVideo = false;
      return true;
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getDetail(this.detailMovie.id);
    uni.showToast({
      title: "刷新完成",
      success: function success() {
        uni.stopPullDownRefresh();
      } });

  },
  methods: {
    getDetail: function getDetail(id) {var _this = this;
      this.isReady = false;
      uni.showLoading({
        title: '正在加载' });

      uni.request({
        method: 'get',
        url: "https://www.softeem.xin/maoyanApi/ajax/detailmovie?movieId=".concat(id),
        success: function success(res) {
          res.data.detailMovie.img = res.data.detailMovie.img.replace("w.h", "128.180");
          _this.detailMovie = res.data.detailMovie;
          uni.setNavigationBarTitle({
            title: _this.detailMovie.nm });

          _this.isReady = true;
        },
        complete: function complete() {
          uni.hideLoading();
        } });

    },
    //显示背景遮罩
    showPlayVideo: function showPlayVideo() {
      this.isShowVideo = true;
    },
    //停止音乐
    stopVideo: function stopVideo() {
      uni.createVideoContext("vd", this).pause();
      this.isShowVideo = false;
    },
    //点击播放音乐的按钮标
    playVideo: function playVideo(event) {
      uni.createVideoContext("vd", this).play();
    },
    //音乐正在播放
    playingVideo: function playingVideo() {var _this2 = this;
      uni.getNetworkType({
        success: function success(res) {
          if (res.networkType != "wifi") {
            //非WIFI环境 查看是否有授权
            if (_this2.isRequestPermission == false) {
              //没有授权
              uni.createVideoContext("vd", _this2).pause();

              uni.showModal({
                title: "提示",
                content: "当前设备未连接wifi，是否继续播放",
                confirmText: "我是土豪",
                cancelText: "算了",
                success: function success(res) {
                  if (res.confirm) {
                    _this2.isRequestPermission = true; //授权播放，记录状态，下次不再询问
                    _this2.isShowCoverView = false;
                    uni.createVideoContext("vd", _this2).play();
                  }

                } });

            } else {
              //已经授权 直接播放视频
              _this2.isShowCoverView = false;
              uni.createVideoContext("vd", _this2).play();
            }
          } else {
            //WIFI环境，直接播放视频 
            uni.createVideoContext("vd", _this2).play();
          }
        } });

    },
    toBuyTicket: function toBuyTicket(id) {
      uni.navigateTo({
        url: "/pages/buyTicket/buyTicket?id=".concat(id) });

    } },

  onNavigationBarButtonTap: function onNavigationBarButtonTap(event) {
    if (event.index == 0) {
      //收藏
      var saveCollection = uni.getStorageSync("saveCollection") || [];
      var index = saveCollection.map(function (s_item) {return s_item.id;}).indexOf(this.id);
      var isExists = index == -1 ? false : true;
      if (!isExists) {
        //说明之前的不存在
        saveCollection.push(_objectSpread({}, this.detailMovie, { s_time: new Date().toLocaleString() }));
      } else
      {
        //说明已经存在了
        //saveCollection[index]={...this.detailMovie,s_time:new Date().toLocaleString()};
        uni.showToast({
          title: "您已经收藏过啦",
          icon: "none" });

      }
      uni.setStorageSync("saveCollection", saveCollection);
      uni.showToast({
        title: "收藏成功" });

    }
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/vue-loader/lib??vue-loader-options!D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=style&index=0&id=97336c58&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!D:/DemoProject/maoyan1109/pages/movieDetail/movieDetail.vue?vue&type=template&id=97336c58&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isReady
    ? _c("view", { staticClass: "movieDetail" }, [
        _c("view", { staticClass: "detailBox" }, [
          _c("image", {
            staticClass: "maskImage",
            attrs: { src: _vm.detailMovie.img }
          }),
          _c("view", { staticClass: "left" }, [
            _c("image", {
              staticClass: "movieImg",
              attrs: { src: _vm.detailMovie.img, mode: "widthFix" }
            }),
            _c("image", {
              staticClass: "playVideoImage",
              attrs: {
                src: "../../static/play.png",
                mode: "widthFix",
                eventid: "356afa80-0"
              },
              on: { click: _vm.showPlayVideo }
            })
          ]),
          _c("view", { staticClass: "center" }, [
            _c("view", { staticClass: "m_title" }, [
              _vm._v(_vm._s(_vm.detailMovie.nm))
            ]),
            _c("view", { staticClass: "m_sc" }, [
              _vm.detailMovie.sc != 0
                ? _c("text", [_vm._v(_vm._s(_vm.detailMovie.sc))])
                : _vm._e(),
              _vm._v("(" + _vm._s(_vm.detailMovie.wish) + "想看)")
            ]),
            _c("view", {}, [_vm._v(_vm._s(_vm.detailMovie.cat))]),
            _c("view", {}, [
              _vm._v(
                _vm._s(_vm.detailMovie.fra) +
                  "/" +
                  _vm._s(_vm.detailMovie.dur) +
                  "分钟"
              )
            ]),
            _c("view", {}, [_vm._v(_vm._s(_vm.detailMovie.pubDesc))])
          ]),
          _vm._m(0)
        ]),
        _c("view", { staticClass: "buy-view" }, [
          _c(
            "view",
            {
              staticClass: "buy-view-btn",
              attrs: { eventid: "356afa80-1" },
              on: {
                click: function($event) {
                  _vm.toBuyTicket(_vm.detailMovie.id)
                }
              }
            },
            [_vm._v("特惠购票")]
          )
        ]),
        _c(
          "view",
          { staticClass: "dra", class: { slideHide: _vm.slideHide } },
          [_vm._v(_vm._s(_vm.detailMovie.dra))]
        ),
        _c(
          "view",
          {
            staticClass: "slideUpDown",
            attrs: { eventid: "356afa80-2" },
            on: {
              click: function($event) {
                _vm.slideHide = !_vm.slideHide
              }
            }
          },
          [
            _vm.slideHide == true
              ? _c("image", {
                  attrs: { src: "../../static/down.png", mode: "widthFix" }
                })
              : _vm._e(),
            _vm.slideHide == false
              ? _c("image", {
                  attrs: { src: "../../static/up.png", mode: "widthFix" }
                })
              : _vm._e()
          ]
        ),
        _vm.isShowVideo
          ? _c(
              "view",
              {
                staticClass: "view-video",
                attrs: { eventid: "356afa80-6" },
                on: { tap: _vm.stopVideo }
              },
              [
                _c(
                  "video",
                  {
                    staticStyle: { width: "100%" },
                    attrs: {
                      id: "vd",
                      src: _vm.detailMovie.videourl,
                      "show-center-play-btn": false,
                      eventid: "356afa80-4"
                    },
                    on: {
                      play: _vm.playingVideo,
                      pause: function($event) {
                        _vm.isShowCoverView = true
                      },
                      ended: function($event) {
                        _vm.isShowCoverView = true
                      },
                      tap: function($event) {
                        $event.stopPropagation()
                      }
                    }
                  },
                  [
                    _vm.isShowCoverView
                      ? _c(
                          "cover-view",
                          {
                            staticStyle: {
                              width: "100%",
                              height: "100%",
                              display: "flex",
                              "justify-content": "center",
                              "align-items": "center"
                            },
                            attrs: { mpcomid: "356afa80-2" }
                          },
                          [
                            _c("cover-image", {
                              staticClass: "playVideoImg",
                              attrs: {
                                id: "playVideoImg",
                                src: "../../static/play.png",
                                eventid: "356afa80-3",
                                mpcomid: "356afa80-0"
                              },
                              on: {
                                tap: function($event) {
                                  $event.stopPropagation()
                                  _vm.playVideo($event)
                                }
                              }
                            }),
                            _c("cover-image", {
                              staticClass: "playVideoImg",
                              attrs: {
                                id: "shareWeChat",
                                src: "../../static/wechat.png",
                                mpcomid: "356afa80-1"
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                ),
                _c("video", {
                  staticStyle: { width: "100%" },
                  attrs: {
                    id: "vd",
                    src: _vm.detailMovie.videourl,
                    eventid: "356afa80-5"
                  },
                  on: {
                    play: _vm.playingVideo,
                    tap: function($event) {
                      $event.stopPropagation()
                    }
                  }
                })
              ]
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "right" }, [
      _c("image", {
        attrs: { src: "../../static/right.png", mode: "widthFix" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../DemoProject/maoyan1109/main.js?{\"page\":\"pages%2FmovieDetail%2FmovieDetail\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/movieDetail/movieDetail.js.map