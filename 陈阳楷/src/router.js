import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import inputPage from './pages/input.vue'
import outputPage from './pages/output.vue'

const router = new VueRouter({

    routes: [{
        name: "input",
        path: "/input",
        component: inputPage
    }, {
        name: "output",
        path: "/output",
        component: outputPage

    },{

        path:"/*",
        redirect:"/input"
    }]
})

export default router;