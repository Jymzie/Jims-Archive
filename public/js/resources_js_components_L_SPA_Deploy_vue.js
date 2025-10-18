"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_L_SPA_Deploy_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ma-4" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5" },
        [
          _c("v-card-title", { staticClass: "blue white--text" }, [
            _vm._v("MODIFICATIONS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Open File Explorer and go to "),
                _c("b", [_vm._v("C:/Apache24/conf")]),
                _vm._v(
                  ". Open httpd.conf using any text editor app and put these at the bottom part. Don't forget to change the "
                ),
                _c("b", [_vm._v("projectalias")]),
                _vm._v(" and "),
                _c("b", [_vm._v("projectname")]),
                _vm._v(" then save\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      '\n                Alias /projectalias C:\\Apache24\\htdocs\\projectname/public/\n                <Directory "C:\\Apache24\\htdocs\\projectname/public/">\n                  AllowOverride All\n                  Options Indexes FollowSymLinks\n                  Require all granted\n                </Directory>\n              '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Open CMD and use this code to open your Project folder to VSCode\n                "
                ),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Users\\Jim>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                  cd C:\\Apache24\\htdocs\\ProjectName\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v("\n                  code .\n                "),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("public/.htaccess")]),
                _vm._v(
                  " then replace its code with these then save\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      "\n                <IfModule mod_rewrite.c>\n                    <IfModule mod_negotiation.c>\n                        Options -MultiViews -Indexes\n                    </IfModule>\n\n                    RewriteEngine On\n                    #RewriteBase /\n                    # Handle Authorization Header\n                    RewriteCond %{HTTP:Authorization} .\n                    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]\n\n                    # Redirect Trailing Slashes If Not A Folder...\n                    RewriteCond %{REQUEST_FILENAME} !-d\n                    RewriteCond %{REQUEST_URI} (.+)/$\n                    #RewriteRule ^ %1 [L,R=301]\n                    #RewriteRule ^(.*)/$ //$1 [L,R=301]\n                        RewriteBase /projectalias/\n                        RewriteRule ^(.*)/$ /projectalias/$1 [L,R=301]\n\n                    # Handle Front Controller...\n                    RewriteCond %{REQUEST_FILENAME} !-d\n                    RewriteCond %{REQUEST_FILENAME} !-f\n                    RewriteRule ^ index.php [L]\n                </IfModule>\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("resources/js/router.js")]),
                _vm._v(" and put \n              "),
                _c("code", { staticClass: "language-js" }, [
                  _vm._v("base: '/projectalias/',"),
                ]),
                _vm._v(" under "),
                _c("b", [_vm._v("mode: 'history',")]),
                _vm._v(" then save\n            "),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("webpack.mix.js")]),
                _vm._v(
                  ", add this object at the bottom then save\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                mix.webpackConfig({\n                    output: {\n                    publicPath: '/projectalias/',\n                        chunkFilename: 'js/chunks/[name].js',\n                    },\n                });\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("i", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(" Don't forget to change the "),
                  _c("b", [_vm._v("projectalias")]),
                  _vm._v(" and "),
                  _c("b", [_vm._v("projectname")]),
                ]),
              ]),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5" },
        [
          _c("v-card-title", { staticClass: "blue white--text" }, [
            _vm._v("DEPLOYMENT"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Go back to CMD, clear the Project cache and run the Project in production mode\n                "
                ),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt": "C:\\Apache24\\htdocs\\ProjectName>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                  composer dump-autoload\n                  php artisan optimize:clear\n                  npm run prod\n                "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go to services and restart Apache24 services for httpd.conf changes to load"
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to url: "),
                _c("a", [_vm._v("localhost/projectalias")]),
                _vm._v(" to check the project"),
              ]),
            ]),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex align-center", staticStyle: { height: "100%" } },
      [_c("h1", [_vm._v("Local Server Deployment for Laravel+Vue")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mounted: function mounted() {
    // Prevent automatic highlighting
    window.Prism = window.Prism || {};
    window.Prism.manual = true;

    // Highlight manually when needed
    Prism.highlightAll();
  }
});

/***/ }),

/***/ "./resources/js/components/L_SPA_Deploy.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/L_SPA_Deploy.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./L_SPA_Deploy.vue?vue&type=template&id=60129180& */ "./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180&");
/* harmony import */ var _L_SPA_Deploy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./L_SPA_Deploy.vue?vue&type=script&lang=js& */ "./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _L_SPA_Deploy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__.render,
  _L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/L_SPA_Deploy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Deploy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Deploy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Deploy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Deploy_vue_vue_type_template_id_60129180___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Deploy.vue?vue&type=template&id=60129180& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Deploy.vue?vue&type=template&id=60129180&");


/***/ })

}]);