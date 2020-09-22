import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Help.vue')
  },
  {
    path: '/transport',
    name: 'Transport',
    component: () => import(/* webpackChunkName: "about" */ '../views/Transport.vue')
  },
  {
    path: '/food',
    name: 'Food',
    component: () => import(/* webpackChunkName: "about" */ '../views/Food.vue')
  },
  {
    path: '/attractions',
    name: 'Attractions',
    component: () => import(/* webpackChunkName: "about" */ '../views/Attractions.vue')
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "about" */ '../views/Summary.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
