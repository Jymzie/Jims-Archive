"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_L_SPA_RestfulAPI_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            { attrs: { cols: "12", xl: "5", lg: "5", md: "5", sm: "12" } },
            [
              _c(
                "div",
                {
                  staticClass: "d-flex align-center",
                  staticStyle: { height: "100%" },
                },
                [_c("h1", [_vm._v("Laravel RESTful API")])]
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c(
                    "tr",
                    _vm._l(_vm.header, function (header, h) {
                      return _c("th", { key: h }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(header) +
                            "\n              "
                        ),
                      ])
                    }),
                    0
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.content, function (item, i) {
                    return _c("tr", { key: i }, [
                      _c("td", [_vm._v(_vm._s(item.verb))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.path))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.action))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.route))]),
                    ])
                  }),
                  0
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5" },
        [
          _c("v-card-title", { staticClass: "blue white--text" }, [
            _vm._v("CREATE A CONTROLLER"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Open CMD and locate your Project folder path\n              "
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
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Make a Controller and open your Project folder to VSCode\n              "
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
                        "\n                php artisan make:controller SampleController --resource\n                code .\n              "
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
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "mt-5" },
        [
          _c("v-card-title", { staticClass: "blue white--text" }, [
            _vm._v("SETUP"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("resources/js/components/Home.vue")]),
                _vm._v(" and replace its code with these:\n                "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                  <template>\n                    <v-card>\n                      <v-card-text>\n                        <v-btn @click="mGreetings(\'Hello\')">Click Here</v-btn>\n                        <span style="font-size: 25px;" class="mx-4">' +
                        _vm._s(_vm.result) +
                        "</span>\n                      </v-card-text>\n                    </v-card>\n                  </template>\n\n                  <script>\n                    //put script here\n                  </script>\n                "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                  //Home.vue script\n                  export default {\n                    data:() => ({\n                      result: null\n                    }),\n                    methods:{\n                      mGreetings(val){\n                        axios.get(`api/sample?data=${val}`)\n                        .then(res => {\n                            this.result = res.data\n                        })\n                      }\n                    }\n                  }\n                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("routes/api.php")]),
                _vm._v(" and put this code:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                use App\\Http\\Controllers\\SampleController;\n\n                Route::resource('sample', SampleController::class);\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("app/Http/Controllers/SampleController.php")]),
                _vm._v(" and edit "),
                _c("b", [_vm._v("public function index")]),
                _vm._v(":\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                public function index(Request $req){\n                    return $req->data;\n                }\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go to your local website and check the result\n              "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/restapires.webp" } }),
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
            _vm._v("EXTRAS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("GET index with passing 2 $request\n                "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                  axios.get(`api/api_name?Data=${data}&Data2=example`)\n                  .then(res => {\n                    //condition\n                  }).catch(({response}) =>{\n                    //condition if fails\n                  }).finally(() =>{\n                    //condition triggers after .then and .catch\n                  })\n                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("POST store with passing $request\n                "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                  axios.post(`api/api_name`, data)\n                  .then(res => {\n                    console.log(res.data)\n                  })\n                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "If using window.location for accurate api correction. Go to "
                ),
                _c("b", [_vm._v("resources/js/app.js")]),
                _vm._v(
                  " and put this after import files, use project alias if necessary\n                "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                  Vue.prototype.$url = window.location.origin+'/projectalias'\n                "
                    ),
                  ]),
                ]),
                _vm._v("\n                Example:\n                "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                  axios.post(`${this.$url}/api/api_name`, data)\n                  .then(res => {\n                    console.log(res.data)\n                  })\n                "
                    ),
                  ]),
                ]),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      header: ['Verb', 'Path', 'Action', 'Route Name'],
      content: [{
        verb: 'GET',
        path: '/apiname',
        action: 'index',
        route: 'apiname.index'
      }, {
        verb: 'GET',
        path: '/apiname/create',
        action: 'create',
        route: 'apiname.create'
      }, {
        verb: 'POST',
        path: '/apiname',
        action: 'store',
        route: 'apiname.store'
      }, {
        verb: 'GET',
        path: '/apiname/:id',
        action: 'show',
        route: 'apiname.show'
      }, {
        verb: 'GET',
        path: '/apiname/:id/edit',
        action: 'edit',
        route: 'apiname.edit'
      }, {
        verb: 'PUT|PATCH',
        path: '/apiname/:id',
        action: 'update',
        route: 'apiname.update'
      }, {
        verb: 'DELETE',
        path: '/apiname/:id',
        action: 'destroy',
        route: 'apiname.destroy'
      }],
      result: '{{ result }}'
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

/***/ "./resources/js/components/L_SPA_RestfulAPI.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/L_SPA_RestfulAPI.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a& */ "./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a&");
/* harmony import */ var _L_SPA_RestfulAPI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./L_SPA_RestfulAPI.vue?vue&type=script&lang=js& */ "./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _L_SPA_RestfulAPI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__.render,
  _L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/L_SPA_RestfulAPI.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_RestfulAPI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_RestfulAPI.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_RestfulAPI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_RestfulAPI_vue_vue_type_template_id_2045590a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_RestfulAPI.vue?vue&type=template&id=2045590a&");


/***/ })

}]);