import {createRouter, createWebHistory} from "vue-router";
import Home from "@views/Home.vue";

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Home
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@views/Home.vue'),
    },
    {
        path: '/liquidity',
        name: 'Liquidity',
        component: () => import('@views/Liquidity.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@views/About.vue') // @/views设置的别名
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
