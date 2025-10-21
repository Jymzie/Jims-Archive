"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_React_API_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=template&id=06efac5f&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=template&id=06efac5f& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                [_c("h1", [_vm._v("Setup MERN API")])]
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
            _vm._v("SETUP"),
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
                _vm._v("Open the Project to VSCode\n                    "),
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
                        "\n                        code .\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Edit "),
                _c("b", [_vm._v("server/server.ts")]),
                _vm._v(" with this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import express from 'express';\n                        import cors from 'cors';\n                        import routes from \"./routes.ts\";\n                        import dotenv from 'dotenv';\n\n                        dotenv.config();\n                        const app = express();\n\n                        app.use(cors());\n                        app.use(express.json());\n\n                        const PORT = process.env.PORT || 8080;\n\n                        app.use((req, res, next) => {\n                            console.log(`Request received: ${req.method} ${req.url}`);\n                            next(); // Passes control to the next middleware or route handler\n                        });\n\n                        app.use(\"/api\", routes);\n\n                        app.listen(PORT, () => {\n                            console.log(`Server is running on port ${PORT}`);\n                        });\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Inside the "),
                _c("b", [_vm._v("server")]),
                _vm._v(" folder, create "),
                _c("b", [_vm._v("routes.ts")]),
                _vm._v(" and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      '\n                        import express from \'express\';\n\n                        const router = express.Router();\n                        import sampleControllers from "./controllers/sampleController.ts";\n\n                        router.get("/sample", sampleControllers.get_table);\n                        router.post("/sample/res", sampleControllers.insert_data);\n\n                        export default router;\n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("i", [
                _c("b", [_vm._v("NOTE:")]),
                _vm._v(
                  " The following steps has a ready-to-use and installed "
                ),
                _c("b", [_vm._v("MongoDB")]),
                _vm._v(" database, see documentation "),
                _c(
                  "a",
                  {
                    attrs: {
                      href: this.$url + "/React_Database",
                      target: "_blank",
                    },
                  },
                  [_vm._v("here")]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Edit "),
                _c("b", [_vm._v(".env MONGO_URI")]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-ini" }, [
                    _vm._v(
                      "\n                        MONGO_URI=mongodb://localhost:27017\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("server")]),
                _vm._v(" folder, create "),
                _c("b", [_vm._v("connection.ts")]),
                _vm._v(" and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      '\n                        import { MongoClient, ServerApiVersion } from "mongodb";\n                        import dotenv from \'dotenv\';\n\n                        dotenv.config();\n                        const uri = process.env.MONGO_URI || "";\n                        const client = new MongoClient(uri, {\n                            serverApi: {\n                                version: ServerApiVersion.v1,\n                                strict: true,\n                                deprecationErrors: true,\n                            },\n                        });\n\n                        try {\n                            // Connect the client to the server\n                            await client.connect();\n                            // Send a ping to confirm a successful connection\n                            await client.db("admin").command({ ping: 1 });\n                            console.log(\n                            "Pinged your deployment. You successfully connected to MongoDB!"\n                            );\n                        } catch(err) {\n                            console.error(err);\n                        }\n\n                        let sample_db = client.db("sample_db");\n\n                        export default {sample_db};\n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Inside the "),
                _c("b", [_vm._v("server")]),
                _vm._v(" folder, create "),
                _c("b", [_vm._v("controllers")]),
                _vm._v(" folder. Inside it, create "),
                _c("b", [_vm._v("sampleController.ts")]),
                _vm._v(" and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      '\n                        import db from "../connection.ts"\n\n                        const get_table = async (req, res) => {\n                            try {\n                                let result = await db.sample_db.collection("user").find().toArray();\n                                res.send(result);\n                            } catch (err) {\n                                return res.status(400).json({ error: err.message });\n                            }\n                        };\n\n                        const insert_data = async (req, res) => {\n                            try {\n                                let params = req.body\n                                await db.sample_db.collection("user").insertOne({name:params.name, age:params.age});\n                                res.send(\'successful\');\n\n                            } catch (err) {\n                                return res.status(400).json({ error: err.message });\n                            }\n                        };\n\n                        export default {get_table, insert_data}; \n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Edit "),
                _c("b", [_vm._v("src/components/pages/Home.tsx")]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import { useState, useEffect } from 'react';\n                        import axios from 'axios';\n\n\n                        function Home() {\n                            let [name, setName] = useState('')\n                            let [age, setAge] = useState('')\n                            let [content, setContent] = useState([])\n\n                            const mGetTable = () => {\n                                axios.get('http://localhost:8080/api/sample')\n                                .then((res) => {\n                                    setContent(res.data)\n                                })\n                            }\n\n                            const mInsertData = () => {\n                                let req = {name:name,age:age}\n                                axios.post('http://localhost:8080/api/sample/res',req)\n                                .then(() => {\n                                    mGetTable()\n                                })\n                            }\n\n                            useEffect(() => {\n                                mGetTable();\n                            }, []);\n\n                            return (\n                                //put html code here\n                            )\n                        }\n                        export default Home\n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                        \n                            //Home.tsx html code \n                            <div className=\'grid grid-cols-2 gap-2\'>\n                                <div className="w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">  \n                                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />\n                                    <input type="number" value={age} onChange={(event) => setAge(event.target.value)} className="mb-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Age" required />\n                                    <button type=\'button\' onClick={mInsertData} className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">\n                                        Insert\n                                    </button>\n                                </div>\n                                <div className="w-72 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">\n                                    <table className=\'w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400\'>\n                                        <thead className=\'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400\'>\n                                            <tr>\n                                                <th>name</th>\n                                                <th>age</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            {content.map((items,i) => (\n                                            <tr key={i} className=\'bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200\'> \n                                                <td>{items.name}</td>\n                                                <td>{items.age}</td>\n                                            </tr>\n                                            ))}\n                                        \n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                    '
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
                  "Go to the link provided by the command. Try inserting a new data by filling the required textfields and clicking the insert button:\n                    "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/reactapi.webp" } }),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      requirements: [{
        title: 'MongoDB database',
        link: 'React_Database'
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

/***/ "./resources/js/components/React_API.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/React_API.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React_API.vue?vue&type=template&id=06efac5f& */ "./resources/js/components/React_API.vue?vue&type=template&id=06efac5f&");
/* harmony import */ var _React_API_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React_API.vue?vue&type=script&lang=js& */ "./resources/js/components/React_API.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _React_API_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__.render,
  _React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/React_API.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/React_API.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/React_API.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_API_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_API.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_API_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/React_API.vue?vue&type=template&id=06efac5f&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/React_API.vue?vue&type=template&id=06efac5f& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_API_vue_vue_type_template_id_06efac5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_API.vue?vue&type=template&id=06efac5f& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_API.vue?vue&type=template&id=06efac5f&");


/***/ })

}]);