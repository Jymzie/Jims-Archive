"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_L_SPA_Database_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
                [_c("h1", [_vm._v("DATABASE SETUP")])]
              ),
            ]
          ),
          _vm._v(" "),
          _c("v-col", [
            _c("h3", [_vm._v("REQUIREMENTS:")]),
            _vm._v(" "),
            _c(
              "ol",
              _vm._l(_vm.requirements, function (item, i) {
                return _c("li", { key: i }, [
                  item.link == undefined
                    ? _c("span", [_vm._v(_vm._s(item.title))])
                    : _c(
                        "a",
                        { attrs: { href: item.link, target: "_blank" } },
                        [_vm._v(_vm._s(item.title))]
                      ),
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
            _vm._v("CREATE DATABASE"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "After installation and setting up the MySQL and phpMyAdmin, go to your "
                ),
                _c("b", [_vm._v("localhost phpmyadmin")]),
                _vm._v(" and login"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("From phpmyadmin sidebar, click "),
                _c("b", [_vm._v("New")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Set Database name to "),
                _c("b", [_vm._v("sample")]),
                _vm._v(" and set Collation to "),
                _c("b", [_vm._v("utf8mb4_unicode_ci")]),
                _vm._v(" and click create"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Set table name to "),
                _c("b", [_vm._v("sample_table")]),
                _vm._v(" and number of columns to 2 and click Go"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Set the first row name to "),
                _c("b", [_vm._v("ID")]),
                _vm._v(" and check "),
                _c("b", [_vm._v("A_I (auto increment)")]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Set the second row name to "),
                _c("b", [_vm._v("Name")]),
                _vm._v(", type to "),
                _c("b", [_vm._v("Varchar")]),
                _vm._v(" and length/values to "),
                _c("b", [_vm._v("255")]),
                _vm._v(" then click save"),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("insert")]),
                _vm._v(" tab and set name value to "),
                _c("b", [_vm._v("John Doe")]),
                _vm._v(" and click Go"),
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
                _c("b", [_vm._v(".env")]),
                _vm._v(" and edit the "),
                _c("b", [_vm._v("DB_")]),
                _vm._v(
                  " variables. Put your own phpmyadmin username and password:\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-ini" }, [
                    _vm._v(
                      "\n                DB_CONNECTION=mysql\n                DB_HOST=localhost\n                DB_PORT=\n                DB_DATABASE=Sample\n                DB_USERNAME=phpmyadmin_username\n                DB_PASSWORD=phpmyadmin_password\n              "
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
                _vm._v(" and replace its code with:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                <template>\n                  <v-card>\n                      <v-card-text>\n                          <v-simple-table>\n                              <thead>\n                                  <tr>\n                                      <td v-for="(header, h) in TableHeader" :key="h">' +
                        _vm._s(_vm.header) +
                        '</td>\n                                  </tr>\n                              </thead>\n                              <tbody>\n                                  <tr v-for="(item, i) in TableContent" :key="i">\n                                      <td>' +
                        _vm._s(_vm.itemID) +
                        "</td>\n                                      <td>" +
                        _vm._s(_vm.itemName) +
                        "</td>\n                                  </tr>\n                              </tbody>\n                          </v-simple-table>\n                      </v-card-text>\n                  </v-card>\n                </template>\n                <script>\n                  //put script here\n                </script>\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                //Home.vue script\n                export default {\n                  data:() => ({\n                      TableHeader:[],\n                      TableContent:[]\n                  }),\n                  created(){\n                      this.mTable()\n                  },\n                  methods:{\n                      mTable(){\n                          axios.get(`api/sample`)\n                          .then(res => {\n                              this.TableContent = res.data\n                              this.TableHeader = Object.keys(res.data[0])\n                          })\n                      }\n                  }\n                }\n\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("app/Http/Controllers/SampleController.php")]),
                _vm._v(" and put this code under use "),
                _c("b", [_vm._v("Illuminate\\Http\\Request;")]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                use Illuminate\\Support\\Facades\\DB;\n              "
                    ),
                  ]),
                ]),
                _vm._v("\n              And replace the code from "),
                _c("b", [_vm._v("public function index")]),
                _vm._v(" with:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                public function index(Request $req){\n                  return DB::connection('mysql')\n                  ->select(\"SELECT * FROM sample_table\");\n                }\n              "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Run your local website and check the result\n              "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/databasesamp.webp" } }),
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
            _vm._v("EXTRAS: CREATE MULTIPLE DB_CONNECTION"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("If you need multiple database connection, go to "),
                _c("b", [_vm._v("config/database.php")]),
                _vm._v(". In the "),
                _c("b", [_vm._v("connections")]),
                _vm._v(
                  " array are the list of available database format. We currently using the existing format of mysql for our Sample DB so we need to create another mysql DB through copy/paste:\n              "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/databasemulti1.webp" } }),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("After pasting it, edit the "),
                _c("b", [_vm._v("connection name")]),
                _vm._v(" and its "),
                _c("b", [_vm._v("DB_")]),
                _vm._v(" variables to make it unique:\n              "),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/databasemulti2.webp" } }),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v(".env")]),
                _vm._v(", copy/paste the existing "),
                _c("b", [_vm._v("DB_")]),
                _vm._v(" variables and edit it.\n              "),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/databasemulti3.webp" } }),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Try your new database. Go to "),
                _c("b", [_vm._v("app/Http/Controllers/SampleController.php")]),
                _vm._v(
                  " and replace the code from public function index with your query:\n              "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                public function index(Request $req){\n                  return DB::connection('newconnection')\n                  →select(\"--query\");\n                }\n              "
                    ),
                  ]),
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
                _c("b", [
                  _vm._v("USING OTHER SQL STATEMENTS IN DB::CONNECTION"),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      '\n                DB::connection(\'connection_name\')\n                  →select("--for select query");\n                  →insert("--for insert query");\n                  →update("--for update query");\n                  →delete("--for delete query");\n              '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _c("b", [
                  _vm._v("MULTIPLE CONNECTIONS WITHIN A DB::CONNECTION."),
                ]),
                _vm._v(" Sometimes we need to use "),
                _c("b", [_vm._v("JOIN")]),
                _vm._v(" function for 2 or more tables, but located in "),
                _c("b", [_vm._v("different databases or servers")]),
                _vm._v(". Here's how it done:\n              "),
                _c("pre", [
                  _c("code", { staticClass: "language-php" }, [
                    _vm._v(
                      "\n                DB::connection('mysql')\n                  ->select(\"SELECT * FROM sample_table A\n                  INNER JOIN DatabaseName.dbo.TableName B\n                  ON A.ID = B.ID\n                  INNER JOIN ServerName.DatabaseName.dbo.TableName C\n                  ON A.Name = C.Name\");\n              "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("i", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(
                    " We don't need to put the ServerName if the joining table uses the server of the connection declared"
                  ),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      requirements: [{
        title: 'phpMyAdmin',
        link: 'https://www.phpmyadmin.net/'
      }, {
        title: 'MySQL',
        link: 'https://dev.mysql.com/downloads/'
      }, {
        title: 'RESTful API',
        link: 'L_SPA_RestfulAPI'
      }],
      itemID: '{{item.ID}}',
      itemName: '{{item.Name}}',
      header: '{{ header }}'
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

/***/ "./resources/js/components/L_SPA_Database.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/L_SPA_Database.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./L_SPA_Database.vue?vue&type=template&id=04722194& */ "./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194&");
/* harmony import */ var _L_SPA_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./L_SPA_Database.vue?vue&type=script&lang=js& */ "./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _L_SPA_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__.render,
  _L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/L_SPA_Database.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Database.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_L_SPA_Database_vue_vue_type_template_id_04722194___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./L_SPA_Database.vue?vue&type=template&id=04722194& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/L_SPA_Database.vue?vue&type=template&id=04722194&");


/***/ })

}]);