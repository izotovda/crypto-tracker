import Vue from 'vue'
import Router from 'vue-router'
import CustomList from '../views/CustomList.vue'
import TopList from '../views/TopList.vue'
import Coins from '../views/Coins.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/custom-list'
  },

  {
    path: '/custom-list',
    name: 'Custom list',
    component: CustomList
  },

  {
    path: '/top-list',
    name: 'Top list',
    component: TopList
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
    props: true,
  },

  {
    path: '/404',
    alias: "*",
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue')
  }
]

const router = new Router({
  // disabled since history mode doenst work properly with github pages and production build.
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
