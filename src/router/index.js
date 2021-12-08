import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Missing from '../views/Missing.vue'
import Overview from '../views/Overview.vue'
import Company from '../views/Company.vue'
import LandingPage from '../views/LandingPage.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path:'/',
    name: 'LandingPage',
    component: LandingPage
  },
  //TODO Add page about me?
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  // },
  {
    path: '*',
    name: "DNE",
    component: Missing
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
