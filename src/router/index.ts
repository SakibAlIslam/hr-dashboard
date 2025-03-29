import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
