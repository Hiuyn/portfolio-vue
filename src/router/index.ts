import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Default from '@/layouts/default.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Public',
      component: Default,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        }
      ]
    }
  ]
})

export default router
