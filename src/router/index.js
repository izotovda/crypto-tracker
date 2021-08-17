import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Coins from '../views/Coins.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/coins/:coin',
    name: 'Coins',
    component: Coins,
    props: true
  }
]

const router = new VueRouter({
  // disabled since history mode doenst work properly with github pages and production build.
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
