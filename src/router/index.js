import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from '../views/Parent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'parent',
    component: Parent
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
