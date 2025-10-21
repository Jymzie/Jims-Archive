<template>
   <v-app style="position: relative;">
       <v-navigation-drawer
           v-model="drawer"
           app
           clipped
       >
           <v-list dense>
               <v-subheader>LIST COMPONENTS:</v-subheader>
                <v-list-group
                    :value="true"
                    prepend-icon="mdi-school"
                >
                    <template v-slot:activator>
                    <v-list-item-title>Tutorials</v-list-item-title>
                    </template>

                    <v-list-group
                        v-for="(item, i) in items"
                        :key="i"
                        :value="true"
                        no-action
                        sub-group
                    >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>{{item.title}}</v-list-item-title>
                        </v-list-item-content>
                    </template>

                    <v-list-item
                        v-for="(sub, i) in item.sub"
                        :key="i"
                        :to="sub.to"
                    >
                        <v-list-item-title>{{ sub.text }}</v-list-item-title>

                        <v-list-item-icon>
                        <v-icon>{{ sub.icon }}</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                    </v-list-group>
                </v-list-group>
                  
           </v-list>
       </v-navigation-drawer>

       <v-app-bar clipped-left app class="blue white--text">
       <v-app-bar-nav-icon v-if="drawer == false" @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
       <v-icon v-else @click="drawer = !drawer"  class="mr-3 white--text">mdi-arrow-collapse-left</v-icon>
       <img src="images/jlogo.webp" style="border-radius: 10px;height: 50px;cursor: pointer;" @click="$router.push('/')"/>
       <v-toolbar-title @click="$router.push('/')" style="position: absolute; left:83px; display: inline-block;font-style: italic;text-shadow: 0px 0px 4px #FFFFFF;width: 210px; cursor: pointer;">'s Archive</v-toolbar-title>
       </v-app-bar>

       <v-main style="background-image: url('images/tiles.webp');background-repeat: repeat;">
       <router-view class="ma-2" @open="drawer = true"></router-view>
       </v-main>
   </v-app>
</template>
<script>
	export default {
	    data: () => ({
	        drawer: false,
	        items:[
                {title:'Install..', sub:[
                    {text:'Apache+PHP', icon:'mdi-server', to:'Apache_PHP'},
                    {text:'VSCode Extensions', icon:'mdi-puzzle', to:'VSCode_Extensions'}
                ]},
                {title:'Laravel+Vue SPA', sub:[
                    {text:'Create Project', icon:'mdi-xml', to:'L_SPA_Create_Project'},
                    {text:'Local Deployment', icon:'mdi-server-network', to:'L_SPA_Deploy'},
                    {text:'RESTful API', icon:'mdi-api', to:'L_SPA_RestfulAPI'},
                    {text:'Database Setup', icon:'mdi-database-cog', to:'L_SPA_Database'},
                    {text:'Error Handling', icon:'mdi-alert-circle', to:'L_SPA_Error_Handling'},
                ]},
                {title:'MERN Stack', sub:[
                    {text:'Create with Vite', icon:'mdi-package-down', to:'React_Create_Project_Vite'},
                    {text:'Database Setup', icon:'mdi-database', to:'React_Database'},
                    {text:'API Setup', icon:'mdi-api', to:'React_API'},
                ]},
               
	            
	        ]
	    }),
	}
</script>