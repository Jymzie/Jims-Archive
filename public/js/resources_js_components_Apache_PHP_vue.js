"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Apache_PHP_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "12", xl: "10", lg: "9", md: "9", sm: "8" } },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex align-center",
                  staticStyle: { height: "100%" },
                },
                [_c("h1", [_vm._v("Apache24+PHP Installation")])]
              ),
            ]
          ),
          _vm._v(" "),
          _c("v-col", [
            _c("h3", [_vm._v("DOWNLOADS:")]),
            _vm._v(" "),
            _c(
              "ol",
              _vm._l(_vm.download, function (item, i) {
                return _c("li", { key: i }, [
                  _c("a", { attrs: { href: item.link, target: "_blank" } }, [
                    _vm._v(_vm._s(item.title)),
                  ]),
                ])
              }),
              0
            ),
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
            _vm._v("APACHE24 CONFIG"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Install "),
                _c("b", [_vm._v("vc_redist.x64/86.exe")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Extract "),
                _c("b", [_vm._v("Apache24 zip file")]),
                _vm._v(". Preferred to be extracted at the main disk or "),
                _c("b", [_vm._v("C:\\")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Open "),
                _c("b", [_vm._v("Apache24 folder")]),
                _vm._v(", create a folder and name it as "),
                _c("b", [_vm._v("php")]),
                _vm._v(" and extract "),
                _c("b", [_vm._v("PHP zip file")]),
                _vm._v(" inside the php folder"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("Apache24/conf")]),
                _vm._v(" and make another copy of "),
                _c("b", [_vm._v("httpd.conf")]),
                _vm._v(
                  " for backup then edit it using any text editor app. Put this at the bottom:\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      '\n                AddHandler application/x-httpd-php .php \n                # configure the path to php.ini \n                PHPIniDir "C:/Apache24/php" \n              '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Find this loadmodule and uncomment it by removing ("),
                _c("b", [_vm._v("#")]),
                _vm._v(
                  "). If its not exist, copy and paste it\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      "\n                LoadModule php7_module C:\\Apache24\\php\\php7apache2_4.dll\n              "
                    ),
                  ]),
                ]),
                _vm._v("\n              For PHP 8+:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      "\n                LoadModule php_module C:\\Apache24\\php\\php8apache2_4.dll\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Find DirectoryIndex and put index.php\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-apacheconf" }, [
                    _vm._v(
                      "\n                <IfModule dir_module>\n                    DirectoryIndex index.html index.php\n                </IfModule>\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Open CMD, go to the Apache24 bin path and check httpd syntax\n              "
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
                        "\n                  cd C:\\Apache24\\bin\n                "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Apache24\\bin>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v("\n                  httpd -t\n              "),
                    ]),
                  ]
                ),
                _vm._v("\n              If you see "),
                _c("b", [_vm._v("Syntax OK")]),
                _vm._v(", install Apache24\n              "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Apache24\\bin>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        '\n                  httpd -k install -n "Apache24"\n              '
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("C:\\Apache24\\php")]),
                _vm._v(", copy and paste the "),
                _c("b", [_vm._v("php.ini-development")]),
                _vm._v(" file and rename it as "),
                _c("b", [_vm._v("php.ini")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Edit "),
                _c("b", [_vm._v("php.ini")]),
                _vm._v(
                  " to any text editor app and uncomment the following extensions by removing ("
                ),
                _c("b", [_vm._v(";")]),
                _vm._v(")\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-ini" }, [
                    _vm._v(
                      "\n                extension=curl\n                extension=fileinfo\n                extension=gd2/gd\n                extension=intl\n                extension=mbstring\n                extension=exif \n                extension=mysqli\n                extension=odbc\n                extension=openssl\n                extension=pdo_mysql\n                extension=pdo_odbc\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Click "),
                _c("b", [_vm._v("window start button")]),
                _vm._v("  and search "),
                _c("b", [_vm._v("services")]),
                _vm._v(" or type "),
                _c("b", [_vm._v("windows logo+R ")]),
                _vm._v("and type "),
                _c("b", [_vm._v("services.msc")]),
                _vm._v(". Find "),
                _c("b", [_vm._v("Apache24")]),
                _vm._v(", right-click and choose "),
                _c("b", [_vm._v("Start")]),
                _vm._v(". If its already started "),
                _c("b", [_vm._v("Restart")]),
                _vm._v(" it"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("For some testing, go to "),
                _c("b", [_vm._v("C:\\Apache24\\htdocs")]),
                _vm._v(" and change the extension of "),
                _c("b", [_vm._v("index.html")]),
                _vm._v(" to "),
                _c("b", [_vm._v("index.php")]),
                _vm._v(
                  ". Edit the file to any text editor app and replace its code with these:\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                <?php\n                  phpinfo();\n                ?>\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "To check if its working and every php extensions are enabled, open your browser and use this url: "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "http://localhost/index.php",
                      target: "_blank",
                    },
                  },
                  [_vm._v("localhost/index.php")]
                ),
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      download: [{
        title: 'Apache24.zip',
        link: 'https://www.apachelounge.com/download/'
      }, {
        title: 'PHP 8.1',
        link: 'https://drive.usercontent.google.com/download?id=1CFIiE9015ZKLMnujJ4gYN1mH-f3dqJ1e&export=download'
      }, {
        title: 'vc_redist',
        link: 'https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170'
      }]
    };
  },
  mounted: function mounted() {
    // Prevent automatic highlighting
    window.Prism = window.Prism || {};
    window.Prism.manual = true;

    // Highlight manually when needed
    Prism.highlightAll();
  }
});

/***/ }),

/***/ "./resources/js/components/Apache_PHP.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Apache_PHP.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Apache_PHP.vue?vue&type=template&id=4982e412& */ "./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412&");
/* harmony import */ var _Apache_PHP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Apache_PHP.vue?vue&type=script&lang=js& */ "./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Apache_PHP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__.render,
  _Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/Apache_PHP.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Apache_PHP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Apache_PHP.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Apache_PHP_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Apache_PHP_vue_vue_type_template_id_4982e412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Apache_PHP.vue?vue&type=template&id=4982e412& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Apache_PHP.vue?vue&type=template&id=4982e412&");


/***/ })

}]);