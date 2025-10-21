"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_React_Database_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4& ***!
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
                [_c("h1", [_vm._v("Database Setup with MongoDB")])]
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
            _vm._v("MAKE DATABASE"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "After installing the required software/extensions. Open "
                ),
                _c("b", [_vm._v("mongoshdb shell")]),
                _vm._v(" and initialize it\n                    "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt":
                        "Please enter a MongoDB connection string (Default: mongodb://localhost/):",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        mongosh\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Use the following command to make a "),
                _c("b", [_vm._v("db")]),
                _vm._v(
                  ". If the db name already created, it will use the existing one instead of creating a new one.\n                    "
                ),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "mongosh>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        use sample_db\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Insert a data from "),
                _c("b", [_vm._v("user")]),
                _vm._v(
                  " table. Just like db, it will a make a new one if the table is not yet existing. "
                ),
                _c("b", [_vm._v("db.table_name.insertOne()")]),
                _vm._v(" "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "sample_db>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        '\n                        db.user.insertOne({name:"Jim", age:25})\n                    '
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
            _vm._v("ADD MONGODB"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Open CMD and go to Project folder\n                    "
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
                        "\n                        cd C:\\Apache24\\htdocs\\ProjectName\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Install MongoDB and .env dependencies\n                    "
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
                        "\n                        npm install mongoose dotenv\n                    "
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
                _vm._v("Create "),
                _c("b", [_vm._v(".env")]),
                _vm._v(
                  " to the root folder and put this code:\n                    "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-ini" }, [
                    _vm._v(
                      "\n                        MONGO_URI=mongodb://localhost:27017/sample_db\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Edit "),
                _c("b", [_vm._v("server/server.ts")]),
                _vm._v(" with this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import express from 'express';\n                        import cors from 'cors';\n                        import mongoose from \"mongoose\";\n                        import dotenv from 'dotenv';\n                        \n                        dotenv.config();\n                        const app = express();\n\n                        app.use(cors());\n                        app.use(express.json());\n\n                        const PORT = process.env.PORT || 8080;\n\n                        // Connect to MongoDB\n                        const uri: string =\n                            process.env.MONGO_URI || 'mongodb://localhost:27017/db_name';\n\n                        let db;\n                        (async () => {\n                            try {\n                                let conn = await mongoose.connect(uri);\n                                db = conn.connection.db\n                                console.log(uri);\n                            } catch(error) {\n                                console.error(error);\n                            }\n                        })();\n\n\n                        app.get('/', async (req, res) => {\n                            let r = await db.collection(\"user\").find().toArray();;\n                            res.send(r);\n                        });\n\n                        app.listen(PORT, () => {\n                            console.log(`Server is running on port ${PORT}`);\n                        });\n                    "
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
            _vm._v("DEPLOYMENT"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Go back to CMD and deploy the project\n                    "
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
                        "\n                        npm run dev\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go to the link provided by the command. Click the label "
                ),
                _c("b", [_vm._v("Click Here")]),
                _vm._v(
                  " and inspect element to see the get data.\n                    "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/reactdatabase.webp" } }),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      requirements: [{
        title: 'MongoDB',
        link: 'https://www.mongodb.com/try/download/community'
      }, {
        title: 'MongoshDB Shell',
        link: 'https://www.mongodb.com/docs/mongodb-shell/'
      }, {
        title: 'MongoDB php extension',
        link: 'https://pecl.php.net/package/mongodb'
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

/***/ "./resources/js/components/React_Database.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/React_Database.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React_Database.vue?vue&type=template&id=f76a5bf4& */ "./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4&");
/* harmony import */ var _React_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React_Database.vue?vue&type=script&lang=js& */ "./resources/js/components/React_Database.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _React_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__.render,
  _React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/React_Database.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/React_Database.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/React_Database.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Database.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Database_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Database_vue_vue_type_template_id_f76a5bf4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Database.vue?vue&type=template&id=f76a5bf4& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Database.vue?vue&type=template&id=f76a5bf4&");


/***/ })

}]);