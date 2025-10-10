<template>
    <div class="ma-4">
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Create React+Express+Tailwind</h1>
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
                    <li>Create a project folder and go to the project folder path
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs>"><code class="language-bash">
                            mkdir ProjectName
                            cd ProjectName
                        </code></pre>
                    </li>
                    <li>Install create_react_app. If its already installed to your OS, skip this
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install -g create-react-app@latest
                        </code></pre>
                        Create React and go to the client folder 
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npx create-react-app client --template cra-template
                        </code></pre>
                        If this <b>error</b> shows (<i>You are running `create-react-app` x.x.x, which is behind the latest release (x.x.x).</i>). <b>Uninstall</b> create_react_app and install the latest release. Proceed to create React again
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm uninstall -g create-react-app
                        </code></pre>
                    </li>
                    
                </ul>
            </v-card-text>
            
        </v-card>
       
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">INSTALL EXPRESS</v-card-title>
            <v-card-text>
                <ul>
                    <li>Create a project folder and go to the project folder path
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            mkdir server
                            cd server
                        </code></pre>
                    </li>
                    <li>Create <b>package.json</b>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName\server>"><code class="language-bash">
                            npm init
                        </code></pre>
                        <i><b>NOTE:</b> You can <b>skip</b> the details by pressing <b>ENTER</b></i>
                    </li>
                    <li>Install Express and Cors
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName\server>"><code class="language-bash">
                            npm install express cors
                        </code></pre>
                    </li>
                    <li>Go back to the root folder and open it to VSCode
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName\server>"><code class="language-bash">
                            cd ..
                        </code></pre>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            code .
                        </code></pre>
                    </li>
                </ul>
            </v-card-text>
        </v-card>
       
        <v-card class="mt-5">
            <v-card-title class="blue white--text">SETUP</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go to <b>server</b> folder and create <b>index.js</b> file and put the following:
                        <pre><code class="language-js">
                            const express = require('express');
                            const app = express();
                            const cors = require('cors');

                            app.use(cors())
                            
                            app.get('/', (req, res) => {
                                res.send('Hello from our server!')
                            })

                            app.listen(8080, () => {
                                console.log('server listening on port 8080')
                            })
                        </code></pre>
                    </li>
                    <li>Open the VSCode Terminal at the upper-left corner. Click <b>New Terminal</b>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            cd server
                        </code></pre>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName\server>"><code class="language-bash">
                            node index.js
                        </code></pre>
                    </li>
                    <li>Open another Terminal for the <b>client</b> and install axios
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            cd client
                        </code></pre>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName\client>"><code class="language-bash">
                            npm install axios
                        </code></pre>
                    </li>
                    <li>Go to <b>client/src/App.js</b> and replace the code with this:
                 
                        <pre><code class="language-js">
                            import axios from 'axios';
                            import './App.css';

                            //data will be the string we send from our server
                            const apiCall = () => {
                                axios.get('http://localhost:8080').then((data) => {
                                    //this console.log will be in our frontend console
                                    console.log(data)
                                })
                            }

                            function App() {
                                return (
                                    //put html code here
                                );
                            }

                            export default App;
                        
                        </code></pre>
                        <pre><code class="language-html">
                            //App.js html code
                            &lt;div className="App"&gt;
                                &lt;header className="App-header"&gt;
                                    &lt;button onClick={apiCall}&gt;Make API Call&lt;/button&gt;
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
                    <li>Go to <b>Terminal of the server</b> and use this command to run the <b>Express (back-end)</b>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            node index.js
                        </code></pre>
                    </li>
                    
                    <li>Go to <b>Terminal of the client</b> and use this command to run the <b>React (front-end)</b>
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm run start
                        </code></pre>
                    </li>

                    <li>Check the result
                        <div class="centerimg">
                            <img src="images/artisanserve.PNG"/>
                        </div>
                    </li>
                </ul>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-card-title class="blue white--text">TAILWIND</v-card-title>
            <v-card-text>
                <ul>
                    <li>Open CMD and go to Project client folder
                        <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                            cd C:\Apache24\htdocs\ProjectName\client
                        </code></pre>  
                    </li>
                    <li>Install Tailwind
                        <pre class="command-line" data-prompt="C:\Users\Jim>"><code class="language-bash">
                            npm install -D tailwindcss@3 postcss autoprefixer
                            npx tailwindcss init -p 
                        </code></pre>          
                    </li>
                    <li>Go to <b>client/tailwind.config.js</b>  and replace it with this for responsive configuration:
                        <pre><code class="language-js">
                            /** @type {import('tailwindcss').Config} */
                            module.exports = {
                                content: [
                                    "./src/**/*.{js,jsx,ts,tsx}",
                                ],
                                theme: {
                                    screens: {
                                         sm: '640px',
                                        // => @media (min-width: 640px) { ... }

                                        md: '768px',
                                        // => @media (min-width: 768px) { ... }

                                        lg: '1024px',
                                        // => @media (min-width: 1024px) { ... }

                                        xl: '1280px',
                                        // => @media (min-width: 1280px) { ... }

                                        '2xl': '1536px',
                                        // => @media (min-width: 1536px) { ... }
                                    },
                                },
                                variants: {},
                                plugins: [],
                            }

                        
                        </code></pre>
                    </li>

                    <li>Go to <b>client/src/index.css</b> and replace it with:
                        <pre><code class="language-css">
                            @tailwind base;
                            @tailwind components;
                            @tailwind utilities;
                            @layer base {
                                li {
                                    @apply p-4
                                }

                                button {
                                    @apply text-white border bg-blue-600 border-blue-600
                                    hover:bg-transparent hover:text-blue-600 rounded-md
                                }
                            }          
                        </code></pre>
                    </li>
                </ul>
            </v-card-text>
        </v-card>
       
        <v-card class="mt-5">
            <v-card-title class="blue white--text">MAKE COMPONENTS</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go to <b>client/src</b> and create a folder, name it as <b>components</b>. Create a file <b>Navigation.js</b> inside the <b>components</b> folder and put this code:
                        <pre><code class="language-js">
                            import React, {useState} from 'react'

                            import { MenuIcon, XIcon } from '@heroicons/react/outline';
                            import { FaUserAlt, FaSignInAlt } from 'react-icons/fa';

                            function Navigation() {
                                const [nav, setNav] = useState(false)

                                const handleClick = () => setNav(!nav)

                                const handleClose = () => {
                                setNav(false);
                                };

                                return (
                                    //put htlm code here

                                )
                            }

                            export default Navigation

                        
                        </code></pre>

                        <pre><code class="language-html">
                            //Navigation.js html code
                            &lt;div className='w-screen bg-gray-100 h-[70px] z-10 fixed drop-shadow-lg'&gt;

                                &lt;div className='px-2 flex justify-between items-center w-full h-full'&gt;
                                &lt;div className='flex items-center'&gt;
                                &lt;h1&gt; className='text-3xl font-bold text-black mr-4 sm:text-4xl'&gt;Websites.&lt;/h1&gt;
                                &lt;ul className='hidden text-black md:flex'&gt;
                                    &lt;li&gt; className='cursor-pointer hover:bg-white hover:text-green-600 hover:rounded-lg'&gt;
                                        Home
                                    &lt;/li&gt;
                                    &lt;li&gt; className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'&gt;
                                        About Us
                                    &lt;/li&gt;
                                    &lt;li&gt; className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'&gt;
                                        Contact Us
                                    &lt;/li&gt;
                                    &lt;li&gt; className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'&gt;
                                        Services
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                                &lt;/div&gt;
                                &lt;div className='hidden md:flex pr-4'&gt;

                                    &lt;a
                                    className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
                                    type="submit"
                                    &gt;
                                    &lt;FaSignInAlt className='lg:w-5 lg:h-5 mx-2' /&gt;
                                    &lt;span&gt; className="text-sm font-medium"&gt;
                                    Login
                                    &lt;/span&gt;
                                    &lt;/a&gt;

                                    &lt;a
                                    className="block cursor-pointer shrink-0 rounded-lg bg-white p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
                                &gt;
                                    &lt;span&gt; className="sr-only"&gt;Account&lt;/span&gt;
                                    &lt;FaUserAlt className='lg:w-5 lg:h-5' /&gt;
                                &lt;/a&gt;

                                &lt;/div&gt;

                                &lt;div className='md:hidden mr-4' onClick={handleClick}&gt;
                                    {!nav ? &lt;MenuIcon className='w-5 text-black' /&gt; : &lt;div className='flex'&gt;

                                    &lt;a
                                    className="flex text-center cursor-pointer items-center mx-4 text-black hover:text-green-600"
                                    type="submit"
                                    &gt;
                                    &lt;FaSignInAlt className='lg:w-5 lg:h-5 mx-2' /&gt;
                                    &lt;span&gt; className="text-sm font-medium"&gt;
                                    Login
                                    &lt;/span&gt;
                                    &lt;/a&gt;

                                    &lt;a
                                    className="block cursor-pointer shrink-0 rounded-lg bg-white mr-4 p-2.5 border border-gray-100 shadow-sm hover:bg-transparent hover:text-green-600 hover:border hover:border-green-600"
                                &gt;
                                    &lt;span&gt; className="sr-only"&gt;Account&lt;/span&gt;
                                    &lt;FaUserAlt className='lg:w-5 lg:h-5' /&gt;
                                &lt;/a&gt;
                                        &lt;XIcon className='w-5 text-black' /&gt;
                                    &lt;/div&gt;}

                                &lt;/div&gt;

                                &lt;/div&gt;

                                {/* Navigation on small screens */}
                                &lt;ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}&gt;
                                    &lt;li&gt; onClick={handleClose} className='border-b-2 border-zinc-300 w-full'&gt;
                                    Home
                                    &lt;/li&gt;

                                    &lt;li&gt; onClick={handleClose} className='border-b-2 border-zinc-300 w-full'&gt;
                                    About Us
                                    &lt;/li&gt;

                                    &lt;li&gt; onClick={handleClose} className='border-b-2 border-zinc-300 w-full'&gt;
                                    Contact Us
                                    &lt;/li&gt;

                                    &lt;li&gt; onClick={handleClose} className='border-b-2 border-zinc-300 w-full'&gt;
                                    Services
                                    &lt;/li&gt;
                                &lt;/ul&gt;

                            &lt;/div&gt;

                        
                        </code></pre>
                    </li>

                    <li>Go to <b>client/src/App.js</b> and replace its code with:
                        <pre><code class="language-js">
                            import React from "react";
                            import Navigation from "./components/Navigation";

                            function App() {
                                return (

                                    //put html code here

                                );
                            }

                            export default App;

                        
                        </code></pre>

                        <pre><code class="language-html">
                            //App.js html code
                            &lt;div&gt;
                                &lt; Navigation /&gt;
                            &lt;/div&gt;

                        
                        </code></pre>
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
            {title:'Composer',link:'https://getcomposer.org/'},
            {title:'Node.js',link:'https://nodejs.org/en'},
            {title:'PHP 7 or above'},
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