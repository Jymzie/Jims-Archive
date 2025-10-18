"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_VSCode_Extensions_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                [_c("h1", [_vm._v("My VSCode Extensions")])]
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
                return _c(
                  "li",
                  {
                    key: i,
                    on: {
                      click: function ($event) {
                        item.link == "vscode" ? _vm.mDownload() : ""
                      },
                    },
                  },
                  [
                    item.link != "vscode"
                      ? _c(
                          "a",
                          { attrs: { href: item.link, target: "_blank" } },
                          [_vm._v(_vm._s(item.title))]
                        )
                      : _c("a", [_c("u", [_vm._v(_vm._s(item.title))])]),
                  ]
                )
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
            _vm._v("EXTENSIONS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "ol",
              [
                _c(
                  "v-row",
                  { staticClass: "my-2" },
                  _vm._l(_vm.extensions, function (item, i) {
                    return _c(
                      "v-col",
                      {
                        key: i,
                        staticClass: "mb-n2",
                        attrs: {
                          cols: "12",
                          xl: "2",
                          lg: "3",
                          md: "4",
                          sm: "5",
                        },
                      },
                      [_c("li", [_vm._v(_vm._s(item))])]
                    )
                  }),
                  1
                ),
              ],
              1
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
            _vm._v("EXPORT EXTENSIONS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Open "),
                _c("b", [_vm._v("Visual Studio Code")]),
                _vm._v(" and click "),
                _c("b", [_vm._v("Terminal")]),
                _vm._v(" at the upper-left corner"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Use this code to export your downloaded extension into txt file\n                "
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
                        "\n                  code --list-extensions > vscode-extensions.txt\n                "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [_vm._v("vscode-extensions.txt")]),
                _vm._v(" will be generated at the "),
                _c("b", [_vm._v("current path of your Terminal")]),
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
            _vm._v("IMPORT EXTENSIONS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Open "),
                _c("b", [_vm._v("Visual Studio Code")]),
                _vm._v(" and click "),
                _c("b", [_vm._v("Terminal")]),
                _vm._v(" at the upper-left corner"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Make sure the "),
                _c("b", [_vm._v("vscode-extensions.txt")]),
                _vm._v(" is located from the "),
                _c("b", [_vm._v("Terminal path")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Use this code to import the extensions to your VSCode\n              "
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
                        "\n                Get-Content vscode-extensions.txt | ForEach-Object {code --install-extension $_}\n              "
                      ),
                    ]),
                  ]
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      download: [{
        title: 'Visual Studio Code',
        link: 'https://code.visualstudio.com/'
      }, {
        title: 'My Extensions',
        link: 'vscode'
      }],
      extensions: ['Auto Close Tag', 'Auto Complete Tag', 'Auto Rename Tag', 'Comment Anchors', 'CSS Formatter', 'ES7+React/Redux/React-Native snippets', 'json', 'Laravel Blade Snippets', 'Laravel Snippets', 'Material Design Icon Intellisense', 'Material Icon Theme', 'MongoDB for VS Code', 'npm', 'Path Intellisense', 'PHP Debug', 'PHP Getters & Setters', 'PHP Intelephense', 'PHP IntelliSense', 'PHP Namespace Resolver', 'Prettier - Code formatter', 'Tailwind CSS IntelliSense', 'TypeScript Vue Plugin (Volar)', 'Vetur', 'Vue (Official)', 'Vue Peek', 'vue-format', 'vuetify-vscode']
    };
  },
  mounted: function mounted() {
    // Prevent automatic highlighting
    window.Prism = window.Prism || {};
    window.Prism.manual = true;

    // Highlight manually when needed
    Prism.highlightAll();
  },
  methods: {
    mDownload: function mDownload() {
      var link = document.createElement("a");
      link.href = '/downloads/vscode-extensions.txt';
      link.setAttribute("download", 'vscode-extensions.txt');
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }
});

/***/ }),

/***/ "./resources/js/components/VSCode_Extensions.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/VSCode_Extensions.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSCode_Extensions.vue?vue&type=template&id=7c43d60e& */ "./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e&");
/* harmony import */ var _VSCode_Extensions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VSCode_Extensions.vue?vue&type=script&lang=js& */ "./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VSCode_Extensions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__.render,
  _VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/VSCode_Extensions.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSCode_Extensions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VSCode_Extensions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VSCode_Extensions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VSCode_Extensions_vue_vue_type_template_id_7c43d60e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VSCode_Extensions.vue?vue&type=template&id=7c43d60e& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/VSCode_Extensions.vue?vue&type=template&id=7c43d60e&");


/***/ })

}]);