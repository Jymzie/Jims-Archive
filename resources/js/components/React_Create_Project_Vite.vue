<template>
    <div class="ma-4">
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Create React+Tailwind+Express with Vite</h1>
                </div>
                
            </v-col>
            <v-col>
                <h3>REQUIREMENTS:</h3>
                <ol>
                    <li v-for="(item,i) in requirements" :key="i">
                        <span v-if="item.link == undefined">{{item.title}}</span>
                        <a v-else :href="item.link" target="_blank">{{ item.title }}</a> 
                    </li>
                </ol>
            </v-col>
        </v-row>
        
        <v-card class="mt-5">
            <v-card-title class="blue white--text">INSTALL REACT</v-card-title>
            <v-card-text>
                <ul>
                    <li>Open CMD and go to Apache htdocs folder
                        <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                            cd C:\Apache24\htdocs
                        </code></pre>              
                    </li>
                  
                    <li>Use this command to create <b>React Typescipt+SWC</b> and go to the project path
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs>"><code class="language-bash">
                            npm create vite@latest ProjectName
                            cd ProjectName
                        </code></pre>
                     
                    </li>

                    <li>Add this necessary dependencies
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install
                            npm add react-router-dom lucide-react @mantine/hooks
                        </code></pre>
                     
                    </li>
                    
                </ul>
            </v-card-text>
            
        </v-card>

        <v-card class="mt-5">
            <v-card-title class="blue white--text">ADD TAILWIND</v-card-title>
            <v-card-text>
                <ul>
                    <li>Install Tailwind
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install -D tailwindcss@3 postcss autoprefixer
                            npx tailwindcss init -p 
                        </code></pre>          
                    </li>
                    <li>Open the project to VSCode
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            code .
                        </code></pre>
                     
                    </li>
                    <li>Go to <b>tailwind.config.js</b> and change it to typescript <b>tailwind.config.ts</b>. Replace its code with these:
                        <pre><code class="language-js">
                            import type { Config } from 'tailwindcss'
                            const config: Config = {
                            content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
                            theme: {
                                extend: {
                                fontFamily: {
                                    mono: ['var(--montserrat-font)'],
                                    sans: ['var(--inter-font)'],
                                },
                                colors: {
                                    primary: {
                                    DEFAULT: 'var(--primary)',
                                    },
                                    secondary: {
                                    DEFAULT: 'var(--secondary)',
                                    },
                                },
                                },
                            },
                            plugins: [],
                            }
                            export default config

                        
                        </code></pre>
                    </li>

                    <li>Go to <b>src/index.css</b> and replace it with:
                        <pre><code class="language-css">
                            @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
                            @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

                            @tailwind base;
                            @tailwind components;
                            @tailwind utilities;
                            :root {
                            --primary: #242424;
                            --secondary: rgba(255, 255, 255, 0.87);
                            --font-inter: 'Inter', sans-serif;
                            --font-dmsans: 'DM Sans', sans-serif;
                            --navbar-height: 80px;
                            font-family: var(--font-dmsans);
                            line-height: 1.5;
                            font-weight: 400;
                            color: var(--secondary);
                            background-color: var(--primary);
                            font-synthesis: none;
                            text-rendering: optimizeLegibility;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            }       
                        </code></pre>
                    </li>
                    <!-- <li>Go to <b>/src</b> and create a folder <b>lib</b>. Inside it, create a file <b>utils.ts</b> and put this code:
                        <pre><code class="language-js">
                            import { clsx, type ClassValue } from 'clsx'
                            import { twMerge } from 'tailwind-merge'

                            export function cn(...inputs: ClassValue[]) {
                            return twMerge(clsx(inputs))
                            }
                        </code></pre>
                    </li> -->

                </ul>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-card-title class="blue white--text">INSTALL EXPRESS</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go back to CMD and install Express, Axios and Cors
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install express axios cors
                        </code></pre>
                    </li>
                    <li>Create a folder <b>server</b>. Inside the folder, create <b>server.ts</b> and put these code:
                        <pre><code class="language-js">
                            import express from 'express';
                            import cors from 'cors';

                            const app = express();
                            app.use(cors());

                            app.get('/', (req, res) => {
                                res.send('Hello from our server!');
                            });

                            app.listen(8080, () => {
                                console.log('server listening on port 8080');
                            });
                        </code></pre>
                    </li>
                   
                
                </ul>
            </v-card-text>
        </v-card>
       
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">SETUP</v-card-title>
            <v-card-text>
                <ul>
                    
                    <li>Go to <b>src</b> and create a folder <b>components</b>. Inside it, create a file <b>pages.tsx</b> and put this code:
                        <pre><code class="language-js">
                            import Homepage from "./pages/Home";

                            export const Home = () => {
                                return &lt;div&gt;&lt;Homepage/&gt;&lt;/div&gt;
                            }
                            export const About = () => {
                                return &lt;div&gt;About Page&lt;/div&gt;
                            }
                            export const Contact = () => {
                                return &lt;div&gt;Contact Page&lt;/div&gt;
                            }
                            export const Pricing = () => {
                                return &lt;div&gt;Pricing Page&lt;/div&gt;
                            }
                        </code></pre>
                    </li>

                    <li>Inside the <b>components</b> folder, create another folder and name it as <b>pages</b>. Inside it, create a file <b>Home.tsx</b> and put this code:
                        <pre><code class="language-js">
                            import axios from 'axios';

                            const apiCall = () => {
                                axios.get('http://localhost:8080').then((data) => {
                                    //this console.log will be in our frontend console
                                    console.log(data)
                                })
                            }

                            function Home() {
                                return (
                                   //put html code here
                                )
                            }
                            export default Home
                        </code></pre>
                        <pre><code class="language-html">
                            //Home.tsx html code
                            &lt;div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"&gt;

                                &lt;h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"&gt;Home&lt;/h5&gt;

                                &lt;p className="mb-3 font-normal text-gray-500 dark:text-gray-400"&gt;Go to this step by step guideline process on how to make your projects:&lt;/p&gt;
                                &lt;button type='button' onClick={apiCall} className="inline-flex font-medium items-center text-blue-600 hover:underline"&gt;
                                    Click Here
                                &lt;/button&gt;
                            &lt;/div&gt;
                        </code></pre>
                    </li>

                    <li>Go to <b>src</b> and modify <b>App.tsx</b>
                        <pre><code class="language-js">
                            import { BrowserRouter, Routes, Route } from 'react-router-dom'
                            import { About, Contact, Home, Pricing } from './components/pages'
                            import { Navbar } from './components/navbar'

                            function App() {
                                return (
                                   //put html code here
                                )
                            }
                            export default App
                        </code></pre>
                        <pre><code class="language-html">
                            //App.tsx html code
                            &lt;main&gt;
                                &lt;BrowserRouter&gt;
                                    &lt;Navbar/&gt;
                                    &lt;div className='min-h-screen w-full flex items-center justify-center'&gt;
                                    &lt;Routes&gt;
                                        &lt;Route path='/' element={&lt;Home /&gt;} /&gt;
                                        &lt;Route path='/about' element={&lt;About /&gt;} /&gt;
                                        &lt;Route path='/pricing' element={&lt;Pricing /&gt;} /&gt;
                                        &lt;Route path='/contact' element={&lt;Contact /&gt;} /&gt;
                                    &lt;/Routes&gt;
                                    &lt;/div&gt;
                                &lt;/BrowserRouter&gt;
                            &lt;/main&gt;
                        </code></pre>

                    </li>

                    <li>Go to <b>src/components</b> and create a file <b>navbar.tsx</b>
                        <pre><code class="language-js">
                            import { useState } from 'react'
                            import { NavLink } from 'react-router-dom'
                            import { MenuIcon, XIcon } from 'lucide-react'

                            interface NavLinkType {
                                name: string
                                path: string
                                }
                            
                            const navLinks: NavLinkType[] = [
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Pricing', path: '/pricing' },
                            { name: 'Contact', path: '/contact' }
                            ]


                            export const Navbar = () => {
                                // State to manage the navbar's visibility
                                const [nav, setNav] = useState(false);

                                // Toggle function to handle the navbar's display
                                const handleNav = () => {
                                    setNav(!nav);
                                };
                                
                                return (
                                    //put html code her
                                )
                            }
                        </code></pre>
                        <pre><code class="language-html">
                            //navbar.tsx html code
                            &lt;div className='pb-20'&gt;
                                &lt;header className='bg-black fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center'&gt;
                                    {/* Logo */}
                                    &lt;h1 className='w-full text-3xl font-bold text-[#00df9a]'&gt;REACT.&lt;/h1&gt;

                                    {/* Desktop Navigation */}
                                    &lt;ul className='hidden md:flex'&gt;
                                    {navLinks.map((link) =&gt; (
                                        &lt;NavLink key={link.name} to={link.path} className='text-secondary'&gt;
                                        &lt;li 
                                        className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'&gt;
                                            
                                            {link.name}
                                            
                                        &lt;/li&gt;
                                        &lt;/NavLink&gt;
                                        ))}
                                    &lt;/ul&gt;

                                    {/* Mobile Navigation Icon */}
                                    &lt;div onClick={handleNav} className='block md:hidden'&gt;
                                        {nav ? &lt;XIcon className='size-6 text-secondary' /&gt; : &lt;MenuIcon className='size-6 text-secondary' /&gt;}
                                    &lt;/div&gt;

                                    {/* Mobile Navigation Menu */}
                                    &lt;ul
                                        className={
                                        nav
                                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 overflow-y-auto overflow-x-hidden'
                                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                                        }
                                    &gt;
                                        {/* Mobile Logo */}
                                        &lt;h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'&gt;REACT.&lt;/h1&gt;

                                        {/* Mobile Navigation Items */}
                                        {navLinks.map((link) =&gt; (
                                        &lt;NavLink key={link.name} to={link.path} className='text-secondary'&gt;
                                            &lt;li 
                                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                                            &gt;
                                                
                                                {link.name}
                            
                                            &lt;/li&gt;
                                        &lt;/NavLink&gt;
                                        ))}
                                    &lt;/ul&gt;
                                &lt;/header&gt;
                            &lt;/div&gt;
                        </code></pre>
                    </li>
                </ul>
            </v-card-text>
        </v-card>

      
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">DEPLOYMENT</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go to <b>package.json </b> and change the the <b>script dev</b> value with:
                        <pre><code class="language-json">
                            "dev": "concurrently \"npm run dev:react\" \"npm run dev:express\"",
                            "dev:react": "vite",
                            "dev:express": "nodemon server/server.ts",
                        </code></pre>
                    </li>
                    <li>Go back to CMD and install concurrently and nodemon
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install --save-dev concurrently
                            npm install nodemon
                            npm install --save-dev ts-node
                        </code></pre>
                    </li>
                    <li>Deploy the project and run the back-end simultaneously
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm run dev
                        </code></pre>
                    </li>
                   
                    <li>Go to the link provided by the command and check result
                        <div class="centerimg">
                            <img src="images/reactrunres.webp"/>
                        </div>
                    </li>
                
                </ul>
            </v-card-text>
        </v-card>
       
    
    </div>
  
</template>

<script>

export default {
    data:()=>({
        requirements:[
            {title:'Apache24'},
            {title:'Node.js',link:'https://nodejs.org/en'},
            {title:'Visual Studio Code'},
        ],
    }),
    mounted(){
        // Prevent automatic highlighting
        window.Prism = window.Prism || {};
        window.Prism.manual = true;

        // Highlight manually when needed
        Prism.highlightAll();
    },

}
</script>

<style>

</style>