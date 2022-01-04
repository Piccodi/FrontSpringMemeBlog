import Vue from 'vue'
import VueRouter from "vue-router";
import ImagesList from "@/components/ImagesList";
import LoginForm from "@/components/LoginForm";
import Home from "@/components/Home";
import FavouritesList from "@/components/FavouritesList";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
      path: '/images',
      component: ImagesList
    },
    {
        path: '/favs',
        component: FavouritesList
    },
    {
        path: '/login',
        component: LoginForm
    }

]

const router = new VueRouter({
    routes
})

export default router