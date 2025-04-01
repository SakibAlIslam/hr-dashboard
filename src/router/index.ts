import NotFound from '@/pages/NotFound.vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// Lazy-loaded layouts
const DefaultLayout = () => import('@/layouts/DefaultLayout.vue')
// const AuthLayout = () => import('@/layouts/AuthLayout.vue')

// Lazy-loaded pages
const Dashboard = () => import('@/pages/dashboard/index.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
