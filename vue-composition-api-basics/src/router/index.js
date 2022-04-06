import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalsView from '../views/ModalsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: ModalsView
    }
  ]
})

export default router
