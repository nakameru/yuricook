import { createRouter, createWebHistory } from 'vue-router'

import  Home  from '../views/Home.vue'

// ルート定義（URL とコンポーネントの対応）
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
