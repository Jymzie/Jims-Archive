import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'

Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./components/Home'),
        },
        {
            path: '/L_SPA_Create_Project',
            name: 'L_SPA_Create_Project',
            component: () => import('./components/L_SPA_Create_Project'),
        },
        {
            path: '/L_SPA_Deploy',
            name: 'L_SPA_Deploy',
            component: () => import('./components/L_SPA_Deploy'),
        },
        {
            path: '/L_SPA_RestfulAPI',
            name: 'L_SPA_RestfulAPI',
            component: () => import('./components/L_SPA_RestfulAPI'),
        },
        {
            path: '/L_SPA_Database',
            name: 'L_SPA_Database',
            component: () => import('./components/L_SPA_Database'),
        },
        {
            path: '/L_SPA_Error_Handling',
            name: 'L_SPA_Error_Handling',
            component: () => import('./components/L_SPA_Error_Handling'),
        },
        {
            path: '/Apache_PHP',
            name: 'Apache_PHP',
            component: () => import('./components/Apache_PHP'),
        },
        {
            path: '/VSCode_Extensions',
            name: 'VSCode_Extensions',
            component: () => import('./components/VSCode_Extensions'),
        },
        {
            path: '/React_Create_Project',
            name: 'React_Create_Project',
            component: () => import('./components/React_Create_Project'),
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => import('./components/Hello'),
        },

    ],
});

router.beforeEach((to, from, next) =>{
    if(to.name == null){
        next({name: 'Home'})
    }
    else{
      next()  
    }
})


export default router