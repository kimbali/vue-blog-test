import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/post/:id',
      name: 'SinglePost',
      component: () => import('@/views/SinglePostView.vue'),
      props: true
    },
    {
      path: '/user/:id',
      name: 'UserProfile',
      component: () => import('@/views/UserProfileView.vue'),
      props: true
    }
  ]
})

export default router
