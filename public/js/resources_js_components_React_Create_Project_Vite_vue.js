"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_React_Create_Project_Vite_vue"],{

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
                [_c("h1", [_vm._v("Create React+Tailwind+Express with Vite")])]
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
                _vm._v("Use this command to create "),
                _c("b", [_vm._v("React Typescipt+SWC")]),
                _vm._v(" and go to the project path\n                    "),
                _c(
                  "pre",
                  {
                    staticClass: "command-line",
                    attrs: { "data-prompt": "C:\\Apache24\\htdocs>" },
                  },
                  [
                    _c("code", { staticClass: "language-bash" }, [
                      _vm._v(
                        "\n                        npm create vite@latest ProjectName\n                        cd ProjectName\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Add this necessary dependencies\n                    "),
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
                        "\n                        npm install\n                        npm add react-router-dom lucide-react @mantine/hooks\n                    "
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
            _vm._v("ADD TAILWIND"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Install Tailwind\n                    "),
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
                        "\n                        npm install -D tailwindcss@3 postcss autoprefixer\n                        npx tailwindcss init -p \n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Open the project to VSCode\n                    "),
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
                _vm._v("Go to "),
                _c("b", [_vm._v("tailwind.config.js")]),
                _vm._v(" and change it to typescript "),
                _c("b", [_vm._v("tailwind.config.ts")]),
                _vm._v(". Replace its code with these:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import type { Config } from 'tailwindcss'\n                        const config: Config = {\n                        content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],\n                        theme: {\n                            extend: {\n                            fontFamily: {\n                                mono: ['var(--montserrat-font)'],\n                                sans: ['var(--inter-font)'],\n                            },\n                            colors: {\n                                primary: {\n                                DEFAULT: 'var(--primary)',\n                                },\n                                secondary: {\n                                DEFAULT: 'var(--secondary)',\n                                },\n                            },\n                            },\n                        },\n                        plugins: [],\n                        }\n                        export default config\n\n                    \n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("src/index.css")]),
                _vm._v(" and replace it with:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-css" }, [
                    _vm._v(
                      "\n                        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n                        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');\n\n                        @tailwind base;\n                        @tailwind components;\n                        @tailwind utilities;\n                        :root {\n                        --primary: #242424;\n                        --secondary: rgba(255, 255, 255, 0.87);\n                        --font-inter: 'Inter', sans-serif;\n                        --font-dmsans: 'DM Sans', sans-serif;\n                        --navbar-height: 80px;\n                        font-family: var(--font-dmsans);\n                        line-height: 1.5;\n                        font-weight: 400;\n                        color: var(--secondary);\n                        background-color: var(--primary);\n                        font-synthesis: none;\n                        text-rendering: optimizeLegibility;\n                        -webkit-font-smoothing: antialiased;\n                        -moz-osx-font-smoothing: grayscale;\n                        }       \n                    "
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
            _vm._v("INSTALL EXPRESS"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v(
                  "Go back to CMD and install Express, Axios and Cors\n                    "
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
                        "\n                        npm install express axios cors\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Create a folder "),
                _c("b", [_vm._v("server")]),
                _vm._v(". Inside the folder, create "),
                _c("b", [_vm._v("server.ts")]),
                _vm._v(" and put these code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import express from 'express';\n                        import cors from 'cors';\n\n                        const app = express();\n                        app.use(cors());\n\n                        app.get('/', (req, res) => {\n                            res.send('Hello from our server!');\n                        });\n\n                        app.listen(8080, () => {\n                            console.log('server listening on port 8080');\n                        });\n                    "
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
            _vm._v("SETUP"),
          ]),
          _vm._v(" "),
          _c("v-card-text", [
            _c("ul", [
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("src")]),
                _vm._v(" and create a folder "),
                _c("b", [_vm._v("components")]),
                _vm._v(". Inside it, create a file "),
                _c("b", [_vm._v("pages.tsx")]),
                _vm._v(" and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      '\n                        import Homepage from "./pages/Home";\n\n                        export const Home = () => {\n                            return <div><Homepage/></div>\n                        }\n                        export const About = () => {\n                            return <div>About Page</div>\n                        }\n                        export const Contact = () => {\n                            return <div>Contact Page</div>\n                        }\n                        export const Pricing = () => {\n                            return <div>Pricing Page</div>\n                        }\n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Inside the "),
                _c("b", [_vm._v("components")]),
                _vm._v(" folder, create another folder and name it as "),
                _c("b", [_vm._v("pages")]),
                _vm._v(". Inside it, create a file "),
                _c("b", [_vm._v("Home.tsx")]),
                _vm._v(" and put this code:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import axios from 'axios';\n\n                        const apiCall = () => {\n                            axios.get('http://localhost:8080').then((data) => {\n                                //this console.log will be in our frontend console\n                                console.log(data)\n                            })\n                        }\n\n                        function Home() {\n                            return (\n                               //put html code here\n                            )\n                        }\n                        export default Home\n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      '\n                        //Home.tsx html code\n                        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">\n\n                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Home</h5>\n\n                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to make your projects:</p>\n                            <button type=\'button\' onClick={apiCall} className="inline-flex font-medium items-center text-blue-600 hover:underline">\n                                Click Here\n                            </button>\n                        </div>\n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("src")]),
                _vm._v(" and modify "),
                _c("b", [_vm._v("App.tsx")]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import { BrowserRouter, Routes, Route } from 'react-router-dom'\n                        import { About, Contact, Home, Pricing } from './components/pages'\n                        import { Navbar } from './components/navbar'\n\n                        function App() {\n                            return (\n                               //put html code here\n                            )\n                        }\n                        export default App\n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      "\n                        //App.tsx html code\n                        <main>\n                            <BrowserRouter>\n                                <Navbar/>\n                                <div className='min-h-screen w-full flex items-center justify-center'>\n                                <Routes>\n                                    <Route path='/' element={<Home />} />\n                                    <Route path='/about' element={<About />} />\n                                    <Route path='/pricing' element={<Pricing />} />\n                                    <Route path='/contact' element={<Contact />} />\n                                </Routes>\n                                </div>\n                            </BrowserRouter>\n                        </main>\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v("Go to "),
                _c("b", [_vm._v("src/components")]),
                _vm._v(" and create a file "),
                _c("b", [_vm._v("navbar.tsx")]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-js" }, [
                    _vm._v(
                      "\n                        import { useState } from 'react'\n                        import { NavLink } from 'react-router-dom'\n                        import { MenuIcon, XIcon } from 'lucide-react'\n\n                        interface NavLinkType {\n                            name: string\n                            path: string\n                            }\n                        \n                        const navLinks: NavLinkType[] = [\n                        { name: 'Home', path: '/' },\n                        { name: 'About', path: '/about' },\n                        { name: 'Pricing', path: '/pricing' },\n                        { name: 'Contact', path: '/contact' }\n                        ]\n\n\n                        export const Navbar = () => {\n                            // State to manage the navbar's visibility\n                            const [nav, setNav] = useState(false);\n\n                            // Toggle function to handle the navbar's display\n                            const handleNav = () => {\n                                setNav(!nav);\n                            };\n                            \n                            return (\n                                //put html code her\n                            )\n                        }\n                    "
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _c("pre", [
                  _c("code", { staticClass: "language-html" }, [
                    _vm._v(
                      "\n                        //navbar.tsx html code\n                        <div className='pb-20'>\n                            <header className='bg-black fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center'>\n                                {/* Logo */}\n                                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>\n\n                                {/* Desktop Navigation */}\n                                <ul className='hidden md:flex'>\n                                {navLinks.map((link) => (\n                                    <NavLink key={link.name} to={link.path} className='text-secondary'>\n                                    <li \n                                    className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>\n                                        \n                                        {link.name}\n                                        \n                                    </li>\n                                    </NavLink>\n                                    ))}\n                                </ul>\n\n                                {/* Mobile Navigation Icon */}\n                                <div onClick={handleNav} className='block md:hidden'>\n                                    {nav ? <XIcon className='size-6 text-secondary' /> : <MenuIcon className='size-6 text-secondary' />}\n                                </div>\n\n                                {/* Mobile Navigation Menu */}\n                                <ul\n                                    className={\n                                    nav\n                                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 overflow-y-auto overflow-x-hidden'\n                                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'\n                                    }\n                                >\n                                    {/* Mobile Logo */}\n                                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>\n\n                                    {/* Mobile Navigation Items */}\n                                    {navLinks.map((link) => (\n                                    <NavLink key={link.name} to={link.path} className='text-secondary'>\n                                        <li \n                                        className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'\n                                        >\n                                            \n                                            {link.name}\n                        \n                                        </li>\n                                    </NavLink>\n                                    ))}\n                                </ul>\n                            </header>\n                        </div>\n                    "
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
                _c("b", [_vm._v("package.json ")]),
                _vm._v(" and change the the "),
                _c("b", [_vm._v("script dev")]),
                _vm._v(" value with:\n                    "),
                _c("pre", [
                  _c("code", { staticClass: "language-json" }, [
                    _vm._v(
                      '\n                        "dev": "concurrently \\"npm run dev:react\\" \\"npm run dev:express\\"",\n                        "dev:react": "vite",\n                        "dev:express": "nodemon server/server.ts",\n                    '
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Go back to CMD and install concurrently and nodemon\n                    "
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
                        "\n                        npm install --save-dev concurrently\n                        npm install nodemon\n                        npm install --save-dev ts-node\n                    "
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("li", [
                _vm._v(
                  "Deploy the project and run the back-end simultaneously\n                    "
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
                  "Go to the link provided by the command and check result\n                    "
                ),
                _c("div", { staticClass: "centerimg" }, [
                  _c("img", { attrs: { src: "images/reactrunres.webp" } }),
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      requirements: [{
        title: 'Apache24'
      }, {
        title: 'Node.js',
        link: 'https://nodejs.org/en'
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

/***/ "./resources/js/components/React_Create_Project_Vite.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/React_Create_Project_Vite.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./React_Create_Project_Vite.vue?vue&type=template&id=73669732& */ "./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732&");
/* harmony import */ var _React_Create_Project_Vite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./React_Create_Project_Vite.vue?vue&type=script&lang=js& */ "./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _React_Create_Project_Vite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__.render,
  _React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "resources/js/components/React_Create_Project_Vite.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_Vite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Create_Project_Vite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_Vite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_React_Create_Project_Vite_vue_vue_type_template_id_73669732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./React_Create_Project_Vite.vue?vue&type=template&id=73669732& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/React_Create_Project_Vite.vue?vue&type=template&id=73669732&");


/***/ })

}]);