import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
 new Vue({

    el:document.getElementById("app"),
    router,
    render:creatElement => creatElement(App)
 })