import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import History from '@/components/History'

import YoannGoudin from '@/components/prof/YoannGoudin'
import OliverStreiter from '@/components/prof/OliverStreiter'
import YaQingZhan from '@/components/prof/YaQingZhan'
// import Help from '@/components/Help'

// import Register from '@/components/Register'
// import Login from '@/components/Login'
import Sites from '@/components/Sites'
import Site from '@/components/Site'
import Object from '@/components/Object'


Vue.use(VueRouter)

const routes = [
  {
    path: '/drgpa2023',
    name: 'drgpa2023',
    component: Home
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/YoannGoudin',
    name: 'YoannGoudin',
    component: YoannGoudin
  },
  {
    path: '/OliverStreiter',
    name: 'OliverStreiter',
    component: OliverStreiter
  },
  {
    path: '/YaQingZhan',
    name: 'YaQingZhan',
    component: YaQingZhan
  },
  // {
  //   path: '/help',
  //   name: 'help',
  //   component: Help
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },
  {
    path: '/site',
    name: 'sites',
    component: Sites
  },
  {
    path: '/site/:siteId',
    name: 'site',
    component: Site
  },
  {
    path: '/object/:objectId',
    name: 'object',
    component: Object
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
