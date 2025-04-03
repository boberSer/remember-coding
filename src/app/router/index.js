import { createRouter, createWebHistory } from 'vue-router'

import { Routes } from '@/shared'

const routes = [
  {
    name: Routes.landing.name,
    path: Routes.landing.path,
    component: () => import('@/pages/landing-page/LandingPage.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
