import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ← ここがポイント！
  routes
})

export default router
