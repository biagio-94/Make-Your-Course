import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue"
Vue.use(VueRouter)

const routes=[
    {
        path:"/", component:Home, name:"home.index"
    }
]

const router= new VueRouter({
    routes,
    mode:"history"
})
export default router