import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import("../views/Index.vue")
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: () => import("../views/Detail.vue")
    },
    {
        path: '/add',
        name: 'add',
        component: () => import("../views/Add.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;