import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name:'Main',
        component: () => import('../components/Main.vue')
    },
    {
        path: '/login',
        name:'Login',
        component: () => import('../components/Login.vue')
    },
    {
        path: '/random/list',
        name:'RandomList',
        component: () => import('../components/random/RandomList.vue')
    },
    {
        path: '/mypage',
        name:'Mypage',
        component: () => import('../components/user/Mypage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;