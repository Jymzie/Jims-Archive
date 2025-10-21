"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_React_Create_Project_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe& ***!
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
                [_c("h1", [_vm._v("Create React+Express+Tailwind")])]
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
            _vm._v("INSTALL REACT"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Open CMD and go to Apache htdocs folder\n                    "
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
                        "\n                        cd C:\\Apache24\\htdocs\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Create a project folder and go to the project folder path\n                    "
                ),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Apache24\\htdocs>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        mkdir ProjectName\n                        cd ProjectName\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Install create_react_app. If its already installed to your OS, skip this\n                    "
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
                        "\n                        npm install -g create-react-app@latest\n                    "
                      ),
                    ]),
                  ]
                ),
                _vm._v(
                  "\n                    Create React and go to the client folder \n                    "
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
                        "\n                        npx create-react-app client --template cra-template\n                    "
                      ),
                    ]),
                  ]
                ),
                _vm._v("\n                    If this "),
                _c("b", [_vm._v("error")]),
                _vm._v(" shows ("),
                _c("i", [
                  _vm._v(
                    "You are running `create-react-app` x.x.x, which is behind the latest release (x.x.x)."
                  ),
                ]),
                _vm._v("). "),
                _c("b", [_vm._v("Uninstall")]),
                _vm._v(
                  " create_react_app and install the latest release. Proceed to create React again\n                    "
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
                        "\n                        npm uninstall -g create-react-app\n                    "
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
            _vm._v("INSTALL EXPRESS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Create a project folder and go to the project folder path\n                    "
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
                        "\n                        mkdir server\n                        cd server\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Create "),
                _c("b", [_vm._v("package.json")]),
                _vm._v(" "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt":
                        "C:\\Apache24\\htdocs\\ProjectName\\server>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        npm init\n                    "
                      ),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c("i", [
                  _c("b", [_vm._v("NOTE:")]),
                  _vm._v(" You can "),
                  _c("b", [_vm._v("skip")]),
                  _vm._v(" the details by pressing "),
                  _c("b", [_vm._v("ENTER")]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Install Express and Cors\n                    "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt":
                        "C:\\Apache24\\htdocs\\ProjectName\\server>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        npm install express cors\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go back to the root folder and open it to VSCode\n                    "
                ),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: {
                      "data-prompt":
                        "C:\\Apache24\\htdocs\\ProjectName\\server>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        cd ..\n                    "
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
                      _vm._v(
                        "\n                        code .\n                    "
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
                _c("b", [_vm._v("server")]),
                _vm._v(" folder and create "),
                _c("b", [_vm._v("index.js")]),
                _vm._v(" file and put the following:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        const express = require('express');\n                        const app = express();\n                        const cors = require('cors');\n\n                        app.use(cors())\n                        \n                        app.get('/', (req, res) => {\n                            res.send('Hello from our server!')\n                        })\n\n                        app.listen(8080, () => {\n                            console.log('server listening on port 8080')\n                        })\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Open the VSCode Terminal at the upper-left corner. Click "
                ),
                _c("b", [_vm._v("New Terminal")]),
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
                      _vm._v(
                        "\n                        cd server\n                    "
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
                      "data-prompt":
                        "C:\\Apache24\\htdocs\\ProjectName\\server>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        node index.js\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Open another Terminal for the "),
                _c("b", [_vm._v("client")]),
                _vm._v(" and install axios\n                    "),
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
                        "\n                        cd client\n                    "
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
                      "data-prompt":
                        "C:\\Apache24\\htdocs\\ProjectName\\client>",
                    },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        npm install axios\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("client/src/App.js")]),
                _vm._v(
                  " and replace the code with this:\n             \n                    "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import axios from 'axios';\n                        import './App.css';\n\n                        //data will be the string we send from our server\n                        const apiCall = () => {\n                            axios.get('http://localhost:8080').then((data) => {\n                                //this console.log will be in our frontend console\n                                console.log(data)\n                            })\n                        }\n\n                        function App() {\n                            return (\n                                //put html code here\n                            );\n                        }\n\n                        export default App;\n                    \n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                        //App.js html code\n                        <div className="App">\n                            <header className="App-header">\n                                <button onClick={apiCall}>Make API Call</button>\n                            </header>\n                        </div>\n                    '
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
                _vm._v("Go to "),
                _c("b", [_vm._v("Terminal of the server")]),
                _vm._v(" and use this command to run the "),
                _c("b", [_vm._v("Express (back-end)")]),
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
                      _vm._v(
                        "\n                        node index.js\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("Terminal of the client")]),
                _vm._v(" and use this command to run the "),
                _c("b", [_vm._v("React (front-end)")]),
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
                      _vm._v(
                        "\n                        npm run start\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Check the result\n                    "),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/artisanserve.webp" } }),
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
            _vm._v("TAILWIND"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Open CMD and go to Project client folder\n                    "
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
                        "\n                        cd C:\\Apache24\\htdocs\\ProjectName\\client\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Install Tailwind\n                    "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Users\\Jim>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        npm install -D tailwindcss@3 postcss autoprefixer\n                        npx tailwindcss init -p \n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("client/tailwind.config.js")]),
                _vm._v(
                  "  and replace it with this for responsive configuration:\n                    "
                ),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        /** @type {import('tailwindcss').Config} */\n                        module.exports = {\n                            content: [\n                                \"./src/**/*.{js,jsx,ts,tsx}\",\n                            ],\n                            theme: {\n                                screens: {\n                                     sm: '640px',\n                                    // => @media (min-width: 640px) { ... }\n\n                                    md: '768px',\n                                    // => @media (min-width: 768px) { ... }\n\n                                    lg: '1024px',\n                                    // => @media (min-width: 1024px) { ... }\n\n                                    xl: '1280px',\n                                    // => @media (min-width: 1280px) { ... }\n\n                                    '2xl': '1536px',\n                                    // => @media (min-width: 1536px) { ... }\n                                },\n                            },\n                            variants: {},\n                            plugins: [],\n                        }\n\n                    \n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("client/src/index.css")]),
                _vm._v(" and replace it with:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-css" }, [
                    _vm._v(
                      "\n                        @tailwind base;\n                        @tailwind components;\n                        @tailwind utilities;\n                        @layer base {\n                            li {\n                                @apply p-4\n                            }\n\n                            button {\n                                @apply text-white border bg-blue-600 border-blue-600\n                                hover:bg-transparent hover:text-blue-600 rounded-md\n                            }\n                        }          \n                    "
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
            _vm._v("MAKE COMPONENTS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("client/src")]),
                _vm._v(" and create a folder, name it as "),
                _c("b", [_vm._v("components")]),
                _vm._v(". Create a file "),
                _c("b", [_vm._v("Navigation.js")]),
                _vm._v(" inside the "),
                _c("b", [_vm._v("components")]),
                _vm._v(" folder and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import React, {useState} from 'react'\n\n                        import { MenuIcon, XIcon } from '@heroicons/react/outline';\n                        import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';\n\n                        function Navigation() {\n                            const [nav, setNav] = useState(false)\n\n                            const handleClick = () => setNav(!nav)\n\n                            const handleClose = () => {\n                            setNav(false);\n                            };\n\n                            return (\n                                //put htlm code here\n\n                            )\n                        }\n\n                        export default Navigation\n\n                    \n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      "\n                        //Navigation.js html code\n                        <div className='w-screen bg-gray-100 h-[70px] z-10 fixed drop-shadow-lg'>\n\n                            <div className='px-2 flex justify-between items-center w-full h-full'>\n                            <div className='flex items-center'>\n                            <h1> className='text-3xl font-bold text-black mr-4 sm:text-4xl'>Websites.</h1>\n                            <ul className='hidden text-black md:flex'>\n                                <li> className='cursor-pointer hover:bg-white hover:text-green-600 hover:rounded-lg'>\n                                    Home\n                                </li>\n                                <li> className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>\n                                    About Us\n                                </li>\n                                <li> className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>\n                                    Contact Us\n                                </li>\n                                <li> className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>\n                                    Services\n                                </li>\n                            </ul>\n                            </div>\n                            <div className='hidden md:flex pr-4'>\n\n                                <a\n                                className=\"flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600\"\n                                type=\"submit\"\n                                >\n                                <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />\n                                <span> className=\"text-sm font-medium\">\n                                Login\n                                </span>\n                                </a>\n\n                                <a\n                                className=\"block cursor-pointer shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600\"\n                            >\n                                <span> className=\"sr-only\">Account</span>\n                                <FaUserAlt className='lg:w-5 lg:h-5' />\n                            </a>\n\n                            </div>\n\n                            <div className='md:hidden mr-4' onClick={handleClick}>\n                                {!nav ? <MenuIcon className='w-5 text-black' /> : <div className='flex'>\n\n                                <a\n                                className=\"flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600\"\n                                type=\"submit\"\n                                >\n                                <FaSignInAlt className='lg:w-5 lg:h-5 mx-2' />\n                                <span> className=\"text-sm font-medium\">\n                                Login\n                                </span>\n                                </a>\n\n                                <a\n                                className=\"block cursor-pointer shrink-0 rounded-lg bg-white mr-4 p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600\"\n                            >\n                                <span> className=\"sr-only\">Account</span>\n                                <FaUserAlt className='lg:w-5 lg:h-5' />\n                            </a>\n                                    <XIcon className='w-5 text-black' />\n                                </div>}\n\n                            </div>\n\n                            </div>\n\n                            {/* Navigation on small screens */}\n                            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>\n                                <li> onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>\n                                Home\n                                </li>\n\n                                <li> onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>\n                                About Us\n                                </li>\n\n                                <li> onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>\n                                Contact Us\n                                </li>\n\n                                <li> onClick={handleClose} className='border-b-2 border-zinc-300 w-full'>\n                                Services\n                                </li>\n                            </ul>\n\n                        </div>\n\n                    \n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("client/src/App.js")]),
                _vm._v(" and replace its code with:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      '\n                        import React from "react";\n                        import Navigation from "./components/Navigation";\n\n                        function App() {\n                            return (\n\n                                //put html code here\n\n                            );\n                        }\n\n                        export default App;\n\n                    \n                    '
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      "\n                        //App.js html code\n                        <div>\n                            < Navigation />\n                        </div>\n\n                    \n                    "
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        title: 'Apache24'
      }, {
        title: 'Composer',
        link: 'https://getcomposer.org/'
      }, {
        title: 'Node.js',
        link: 'https://nodejs.org/en'
      }, {
        title: 'PHP 7 or above'
      }, {
        title: 'Visual Studio Code'
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

/***/ "./resources/js/components/React_Create_Project.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/React_Create_Project.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React_Create_Project.vue?vue&type=template&id=115710fe& */ "./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe&");
/* harmony import */ var _React_Create_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React_Create_Project.vue?vue&type=script&lang=js& */ "./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _React_Create_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__.render,
  _React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/React_Create_Project.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Create_Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_vue_vue_type_template_id_115710fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Create_Project.vue?vue&type=template&id=115710fe& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project.vue?vue&type=template&id=115710fe&");


/***/ })

}]);