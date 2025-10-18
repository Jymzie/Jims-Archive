"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_L_SPA_Error_Handling_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
            _vm._v("SETUP"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Open CMD, locate your project path and open it to VSCode\n              "
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
                      _vm._v("\n                  code .\n              "),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("resources/js/template")]),
                _vm._v(" and create a file "),
                _c("b", [_vm._v("Error.vue")]),
                _vm._v(" and put this code:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                <template>\n                  <div>\n                    <div class="background">\n                      <div class="font1 text-center" style="font-size: 80px;">' +
                        _vm._s(_vm.status_code) +
                        '</div>\n                      <div class="text-center">\n                      <v-btn class=" red white--text" small @click="GoBack">Go Back</v-btn>\n                      </div>\n                    </div>\n                    <div style="text-align: center;" class="font2 mb-5">\n                      OOPS! SOMETHING WENT WRONG\n                    </div>\n\n                    <div style="font-size: 13px;text-align: center;">\n                      SORRY FOR THE INCONVINIENCE, WE\'RE WORKING ON IT<br />\n                      TRY <strong style="font-size: 15px" class="red--text"\n                        >REFRESHING</strong > THE PAGE OR \n                      <strong style="font-size: 15px" class="red--text"\n                        >CONTACT US</strong >  IF THE PROBLEM PERSIST<br/>\n\n                        <v-icon color="red">mdi-email</v-icon> sample@gmail.com\n                        <v-icon color="red" class="ml-5">mdi-alert-circle</v-icon> ' +
                        _vm._s(_vm.status_namecode) +
                        "\n                    </div>\n                    \n                  </div>\n                \n                </template>\n                <script>\n                  //put script here\n                </script>\n                <style scoped>\n                  /* put style here */\n                </style>\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                //Error.vue script\n                export default {\n                  data: () => ({\n                    status_code: null,\n                    status_name:{\n                      '400':'Bad Request',\n                      '401':'Unauthorized',\n                      '402':'Payment Required',\n                      '403':'Forbidden',\n                      '404':'Not Found', \n                      '405':'Method Not Allowed',\n                      '406':'Not Acceptable',\n                      '407':'Proxy Authentication Required',\n                      '408':'Request Timeout',\n                      '409':'Conflict',\n                      '410':'Gone', \n                      '411':'Length Required',\n                      '412':'Precondition Failed',\n                      '413':'Payload Too Large', \n                      '414':'URI Too Long',\n                      '415':'Unsupported Media Type',\n                      '416':'Range Not Satisfiable', \n                      '417':'Expectation Failed',\n                      '418':'Im a Teapot',\n                      '419':'Page Expired',\n                      '421':'Misdirected Requested', \n                      '422':'Unprocessable Entity',\n                      '423':'Locked',\n                      '424':'Failed Dependency',\n                      '425':'Too Early',\n                      '426':'Upgrade Required',\n                      '428':'Precondition Required',\n                      '429':'Too Many Requests',\n                      '431':'Request Header Fields Too Large',\n                      '451':'Unavailable For Legal Reasons',\n                      '500':'Internal Server Error',\n                      '501':'Not Implemented',\n                      '502':'Bad Gateway',\n                      '503':'Service Unavailable',\n                      '504':'Gateway Timeout',\n                      '505':'HTTP Version Not Supported',\n                      '506':'Variant Also Negotiates',\n                      '507':'Insufficient Storage',\n                      '508':'Loop Detected',\n                      '510':'Not Extended',\n                      '511':'Network Authentication Required'\n                    }\n                  }),\n\n                  created(){  \n                    this.status_code = this.$route.params.status_code     \n                  },\n                  destroyed(){\n                    this.$store.dispatch('setStatusCode', null)\n                  },\n                  methods:{\n                    GoBack(){\n                      window.history.go(-1)\n                      this.$store.dispatch('setStatusCode', null)  \n                    }\n                  }\n                };\n                window.onload = onLoadWindow\n                  function onLoadWindow () {\n                      window.history.go(-1)    \n                  }\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-css" }, [
                    _vm._v(
                      "\n                /* Error.vue style */\n                .font1{\n                  font-family: RubikMaps;\n                  font-size: 50px;\n                  padding-top: 80px;\n                  color: white;\n                }\n                .font2{\n                  font-family: TitanOne;\n                  font-size: 30px;\n                  color: white;\n                  text-shadow:1px 1px 7px black;\n                }\n                .background{\n                  background-image: url('http://localhost/Sample/images/error.gif');\n                  background-position: center center;\n                  height: 250px;\n                  background-size: contain;\n                }\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("app/Exceptions")]),
                _vm._v(" and create a file "),
                _c("b", [_vm._v("CommonException.php")]),
                _vm._v(" and put this code:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                <?php\n\n                  namespace App\\Exceptions;\n\n                  use Exception;\n                  use Illuminate\\Support\\Facades\\Log;\n\n                  //ANCHOR for catching of errors logs\n                  //NOTE logs located at storage/logs\n                  class CommonException extends Exception\n                  {\n                      protected $e, $err_data, $status_code;\n                      public function __construct($e, $err_data, $status_code){\n                          $this->e = $e;\n                          $this->err_data = $err_data;\n                          $this->status_code = $status_code;\n                      }\n                      public function report(){\n                          Log::error(json_encode(array(\n                              // 'UserID' => $_COOKIE['UserCode'],\n                              // 'UserName' => $_COOKIE['UserName'],\n                              'Called Method' => $this->err_data['Functions'],\n                              'Message' => mb_convert_encoding($this->e->getMessage(),'UTF-8'),\n                              'Passed Parameter' => $this->err_data['Parameters'],\n                              'Filename' => $this->e->getFile(),\n                              'Line Number' => $this->e->getLine(),\n                              'Trace' => $this->e->getTraceAsString()\n                          ),JSON_UNESCAPED_UNICODE));\n                      }\n                      public function render(){\n                          return response()->json(\n                              [\n                                  'message' => $this->e->getMessage(),\n                                  'status_code' => $this->status_code\n                              ],\n                          $this->status_code);\n                      }\n                  }\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("resources/js")]),
                _vm._v(" and open "),
                _c("b", [_vm._v("store.js")]),
                _vm._v(
                  " and add this code inside the state object:\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v("\n                status: null,\n              "),
                  ]),
                ]),
                _vm._v("\n              Add this code inside the "),
                _c("b", [_vm._v("actions")]),
                _vm._v(" object:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                setStatusCode(mutate, params){\n                    mutate.commit('setStatusCode',params)\n                },\n              "
                    ),
                  ]),
                ]),
                _vm._v("\n              Add this code inside the "),
                _c("b", [_vm._v("mutations")]),
                _vm._v(" object:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                setStatusCode(state, params){\n                    state.status = params\n                }\n              "
                    ),
                  ]),
                ]),
                _vm._v("\n              Add this code above:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                import store from './store'\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("i", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(" The following steps has a ready-to-use "),
                  _c("b", [_vm._v("RESTful API Controller")]),
                  _vm._v(", see documentation "),
                  _c(
                    "a",
                    {
                      attrs: {
                        href: this.$url + "/L_SPA_RestfulAPI",
                        target: "_blank",
                      },
                    },
                    [_vm._v("here")]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("resources/js/components/Home.vue")]),
                _vm._v(" and replace its code with these:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                <template>\n                  <v-card>\n                      <v-card-text>\n                          <v-btn @click="mGreetings(\'Hello\')">Click Here</v-btn>\n                          <span style="font-size: 25px;" class="mx-4">' +
                        _vm._s(_vm.result) +
                        "</span>\n                      </v-card-text>\n                  </v-card>     \n                </template>\n                <script>\n                  //put script here\n                </script>\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                //Home.vue script\n                export default {\n                      data:() => ({\n                          result: null\n                      }),\n                      methods:{\n                          mGreetings(val){\n                            \n                              axios.get(`api/sample?data=${val}`)\n                              .then(res => {\n                                  this.result = res.data\n                              })\n                              .catch(err => {\n                                  let errorval = 500;\n                                  if(err.response != null){\n                                      errorval = err.response.status\n                                  }\n                                  this.$store.dispatch('setStatusCode', errorval)\n                                  this.$router.push('/error/' + errorval)\n                              })\n                          }\n                      }\n                  }\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("app/Http/Controllers/SampleController.php")]),
                _vm._v(" and edit the code inside "),
                _c("b", [_vm._v("public function index")]),
                _vm._v(":\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                public function index(Request $req){\n                    try{\n                        return response()->json('generated sample error', 400);\n                    }\n                    catch (\\Exception $e) {\n                        $err_data = ['Parameters' => $req->all(), 'Functions' => __FUNCTION__];\n                        throw new CommonException($e, $err_data, 500);\n                    } \n                }\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("i", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(" Self-made errors like this won't be recorded to "),
                  _c("b", [_vm._v("storage/logs")]),
                  _vm._v(" and only the "),
                  _c("b", [_vm._v("catch")]),
                  _vm._v(" from \t"),
                  _c("b", [_vm._v("Home.vue")]),
                  _vm._v(
                    " will trigger because the SampleController successfully fulfill the request and will \tsend the status code 400 to the Home.vue which is treated as an error for Bad Request"
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go to your local website and click the Click Here button. An error page will appear.\n              "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/errorsamp.png" } }),
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
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex align-center", staticStyle: { height: "100%" } },
      [_c("h1", [_vm._v("Error Handling")])]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      requirements: ['phpMyAdmin', 'MySQL', 'Implementation of RESTful API'],
      status_code: '{{status_code}}',
      status_namecode: '{{status_name[status_code]}}',
      result: '{{result}}'
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

/***/ "./resources/js/components/L_SPA_Error_Handling.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/L_SPA_Error_Handling.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./L_SPA_Error_Handling.vue?vue&type=template&id=26846035& */ "./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035&");
/* harmony import */ var _L_SPA_Error_Handling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./L_SPA_Error_Handling.vue?vue&type=script&lang=js& */ "./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _L_SPA_Error_Handling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__.render,
  _L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/L_SPA_Error_Handling.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Error_Handling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Error_Handling.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Error_Handling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Error_Handling_vue_vue_type_template_id_26846035___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Error_Handling.vue?vue&type=template&id=26846035& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Error_Handling.vue?vue&type=template&id=26846035&");


/***/ })

}]);