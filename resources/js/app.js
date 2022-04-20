/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
Vue.use(VueRouter);
//Vue.component('landing-component', require('./components/Landing/LandingPageComponent.vue').default);
//Vue.component('Register-component', require('./components/Landing/LandingPageComponent.vue'));


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const routes =[
    {path: '/', component: require('./components/Landing/LandingPageComponent.vue').default},
    {path: '/registro', component: require('./components/Session/RegisterPageComponent.vue').default},
    {path: '/busqueda', component: require('./components/VistaInicial/PromocionalPageComponent.vue').default},
    {path: '/Main', component: require('./components/Main/MainPageComponent.vue').default}
]

const router = new VueRouter({
    routes: routes,
    mode:"history"
})

const app = new Vue({
    router
    //,el: '#app'
}).$mount('#app')

