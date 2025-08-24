import { createRouter, createWebHistory } from 'vue-router'

import { Routes } from '@/shared'

const routes = [
  {
    name: Routes.landing.name,
    path: Routes.landing.path,
    component: () => import('@/pages/landing-page/LandingPage.vue'),
  },
  {
    name: Routes.home.name,
    path: Routes.home.path,
    component: () => import('@/pages/landing-page/LandingPage.vue'),
  },
  {
    name: Routes.shop.name,
    path: Routes.shop.path,
    component: () => import('@/pages/shop-page/ShopPage.vue'),
  },
  {
    name: Routes.category.name,
    path: Routes.category.path,
    component: () => import('@/pages/style-category-page/StyleCategoryPage.vue'),
    props: true,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
