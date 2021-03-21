import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SharePost from "../views/SharePost.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post',
    name: 'SharePost',
    component: SharePost
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
