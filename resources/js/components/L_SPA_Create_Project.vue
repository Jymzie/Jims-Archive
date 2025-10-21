<template>
    <div class="ma-4">
        <v-row>
            <v-col cols="12" xl="10" lg="9" md="9" sm="8">
                <div class="d-flex align-center" style="height: 100%;">
                    <h1>Create Laravel+Vue SPA Project</h1>
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
            <v-card-title class="blue white--text">INSTALL LARAVEL</v-card-title>
            <v-card-text>
                <ul>
                    <li>Open CMD and go to Apache htdocs folder
                        <pre class="command-line" data-prompt="C:\Users\Jim>"
                            ><code class="language-bash">cd C:\Apache24\htdocs</code></pre>
                    </li>
                    <li>Create Laravel and go to the Project folder
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs>"><code class="language-bash">
                            composer create-project --prefer-dist laravel/laravel <span color="primary">ProjectName</span> 8.*
                            cd ProjectName
                        </code></pre>
                    </li>
                </ul>
            </v-card-text>
        </v-card>
       
      
        <v-card class="mt-5">
            <v-card-title class="blue white--text">INSTALL VUE</v-card-title>
            <v-card-text>
                <ul>
                    <li>Install Vue and open it using code . command
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm install vue@2.6.14 vuetify@2.6.2 vuex@3.6.2 vue-router@3.5.3 vuex-persistedstate@4.1.0 vue-loader@15.9.8 vue-template-compiler@2.6.14 @mdi/font@6.4.95
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
                    <li>Open <b>webpack.mix.js</b> and put <code class="language-js"
                        >.vue()</code> under <b>mix.js('resources/js/app.js', 'public/js')</b>
                    </li>
                    <li>Go to <b>resources/css/app.css</b> and put this code:
                        <pre class="line-numbers"><code class="language-css">
                            @import '~vuetify/dist/vuetify.min.css';
                            @import '~@mdi/font/css/materialdesignicons.css';
                        </code></pre>
                    </li>
                    <li>Setup for front-end rendering of vue. Go to <b>resources/js/app.js</b> and put this code under <b>require('./bootstrap');</b>
                        <pre><code class="language-js">
                            import Vue from 'vue'
                            import Vuetify from 'vuetify'
                            import Router from './router'
                            import store from './store'
                            import App from './template/App';
                            Vue.use(Vuetify)

                            const app = new Vue({
                                el: '#app',
                                store,
                                router:Router,
                                vuetify: new Vuetify(),
                                render: h=>h(App)
                            });
                        </code></pre>
                    </li>
                    <li>Create a folder in <b>resources/js</b>, name it as <b>template</b>. Create a file <b>App.vue</b> inside the <b>template</b> folder and put this code:
                        <pre><code class="language-html">
                            &lt;template&gt;
                                &lt;v-app&gt;
                                    &lt;v-navigation-drawer
                                        v-model="drawer"
                                        app
                                    &gt;
                                        &lt;v-list dense&gt;
                                            &lt;v-subheader&gt;LIST COMPONENTS:&lt;/v-subheader&gt;
                                                &lt;v-list-item
                                                    v-for="(item, i) in items"
                                                    :key="i"
                                                    :to="item.to"
                                                &gt;
                                                    &lt;v-list-item-icon&gt;
                                                        &lt;v-icon&gt;{{itemicon}}&lt;/v-icon&gt;
                                                    &lt;/v-list-item-icon&gt;
                                                    &lt;v-list-item-content&gt;
                                                        &lt;v-list-item-title&gt;{{itemtext}}&lt;/v-list-item-title&gt;
                                                    &lt;/v-list-item-content&gt;
                                                &lt;/v-list-item&gt;
                                        &lt;/v-list&gt;
                                    &lt;/v-navigation-drawer&gt;
                            
                                    &lt;v-app-bar app&gt;
                                    &lt;v-app-bar-nav-icon @click="drawer = !drawer"&gt;&lt;/v-app-bar-nav-icon&gt;
                                    &lt;v-toolbar-title&gt;SPA Demo App&lt;/v-toolbar-title&gt;
                                    &lt;/v-app-bar&gt;
                            
                                    &lt;v-main class="ma-2"&gt;
                                    &lt;router-view&gt;&lt;/router-view&gt;
                                    &lt;/v-main&gt;
                                &lt;/v-app&gt;
                            &lt;/template&gt;
                            &lt;script&gt;
                                //put the script here
                            &lt;/script&gt;
                        </code></pre>
                    
                        <pre><code class="language-js">
                            //script for App.vue
                            export default {
                                data: () => ({
                                    drawer: null,
                                    items:[
                                        {text:'Home', icon:'mdi-home', to:'home'},
                                        {text:'Hello', icon:'mdi-hand-wave', to:'hello'}
                                    ]
                                }),
                            }
                        
                        </code></pre>

                        <!-- It's best practice to replace v-text="" with an interpolation
                        <pre><code class="language-html">
                            {{example1}}
                        </code></pre> -->
                    </li>

                    <li>Create <b>store.js</b> in <b>resources/js</b> and put this code:
                        <pre><code class="language-js">
                            import Vue from 'vue';
                            import Vuex from 'vuex';
                            import createPersistedState from 'vuex-persistedstate';

                            Vue.use(Vuex)
                            export default new Vuex.Store({
                                state:{},
                                actions:{},
                                mutations:{},
                                getters:{},
                                plugins: [createPersistedState()]
                            });
                        </code></pre>
                    </li>

                    <li>Create <b>router.js</b> in <b>resources/js</b> and put this code:
                        <pre><code class="language-js">
                            import Vue from 'vue'
                            import VueRouter from 'vue-router'
                            import store from './store'

                            Vue.use(VueRouter)

                            export default new VueRouter({
                                mode: 'history',
                                routes: [
                                    {
                                        path: '/home',
                                        name: 'home',
                                        component: () => import('./components/Home'),
                                    },
                                    {
                                        path: '/hello',
                                        name: 'hello',
                                        component: () => import('./components/Hello'),
                                    },
                                
                                ],
                            });
                        </code></pre>
                    </li>

                    <li>Create a folder in <b>resources/js</b> and name it as <b>components</b>. Create a file <b>Home.vue</b> and <b>Hello.vue</b> inside the <b>components</b> folder and put this code:
                        <pre><code class="language-html">
                            &lt;template&gt;
                                &lt;v-card&gt;
                                    &lt;v-card-title style="background-color:#B2DFDB"&gt;Home&lt;/v-card-title&gt;
                                    &lt;v-card-text&gt;
                                        &lt;p&gt;some transcations & logics here....&lt;/p&gt;
                                    &lt;/v-card-text&gt;
                                &lt;/v-card&gt;
                            &lt;/template&gt;

                            &lt;script&gt;
                            export default {

                            }
                            &lt;/script&gt;
                        </code></pre>
                    </li>

                    <li>Setup for Laravel Rendering Engine. Create a folder in <b>resources/views</b> and name it as <b>layouts</b>. Create <b>app.blade.php</b> inside the <b>layouts</b> folder and put this code:
                        <pre><code class="language-html">
                            &lt;!DOCTYPE html&gt;
                            &lt;html lang="en"&gt;
                            &lt;head&gt;
                                &lt;meta charset="UTF-8"&gt;
                                &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
                                &lt;link rel="stylesheet" href="{{assetcss}}"&gt;
                                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                                &lt;title&gt;Laravel SPA&lt;/title&gt;
                            &lt;/head&gt;
                            &lt;body&gt;
                                &lt;div id="app"&gt;&lt;/div&gt;
                                    &lt;script src="{{assetjs}}"&gt;&lt;/script&gt;
                                &lt;/body&gt;
                            &lt;/html&gt;
                        </code></pre>
                    </li>

                    <li>Creating SPA Controller. Go back to cmd and use this command:
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            php artisan make:controller SpaController
                        </code></pre>
                    </li>

                    <li>Go to <b>app/Http/Controllers/SpaController.php</b> and put this code inside the class
                        <pre><code class="language-php">
                            public function index(){
                                return view('layouts.app');
                            }
                        </code></pre>
                    </li>

                    <li>Changing of route from Laravel Homepage to SPA Controller. Go to <b>routes/web.php</b> and comment the first <b>Route::</b> then put this code:
                        <pre><code class="language-php">
                            use App\Http\Controllers\SpaController;

                            Route::get('/{any?} ', [SpaController::class, 'index'])->where('any', '.*');
                        </code></pre>

                    </li>
                    <li>Go to <b>.env</b> and set <code class="language-ini"
                        >LOG_CHANNEL = daily</code>
                    </li>
                    <li>Go to <b>config/app.php</b> and set your <b>timezone</b>
                        <br><b>Example:</b> <code class="language-php"
                        >'timezone' => 'Asia/Manila',</code>
                    </li>
                </ul>
            </v-card-text>
        </v-card>

        <v-card class="mt-5">
            <v-card-title class="blue white--text">DEPLOYMENT</v-card-title>
            <v-card-text>
                <ul>
                    <li>Go to CMD and refresh/update the code using the following commands
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm run dev
                        </code></pre>
                        For continous refresh/update when there are changes in the code, use this instead:
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            npm run watch
                        </code></pre>
                    </li>
                    
                    <li>Deploy the project
                        <pre class="command-line" data-prompt="C:\Apache24\htdocs\ProjectName>"><code class="language-bash">
                            php artisan serve
                        </code></pre>
                    </li>

                    <li>Go to the url generated by the php artisan serve command
                        <div class="centerimg">
                            <img src="images/artisanserve.webp"/>
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
            {title:'Composer',link:'https://getcomposer.org/'},
            {title:'Node.js',link:'https://nodejs.org/en'},
            {title:'PHP 7 or above'},
            {title:'Visual Studio Code'},
        ],
        itemicon:'{{item.icon}}',
        itemtext:'{{item.text}}',
        example1:'<!-- Example --> <v-icon v-text="item.icon"></v-icon> <!-- change it into --> <v-icon>{{item.icon}}</v-icon>',
        assetcss:"{{asset('css/app.css')}}",
        assetjs:"{{asset('js/app.js')}}"
    }),
    mounted(){
        // Prevent automatic highlighting
        window.Prism = window.Prism || {};
        window.Prism.manual = true;

        // Highlight manually when needed
        Prism.highlightAll();
    },
    methods:{
        copyCode(id){
            const codeElement = document.getElementById(id);
            const codeToCopy = codeElement.innerText;

            navigator.clipboard.writeText(codeToCopy)
                .then(() => {
                alert("Code copied to clipboard!");
                })
                .catch(err => {
                console.error("Failed to copy code: ", err);
                });
        }
    }
}
</script>

<style>

</style>