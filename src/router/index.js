import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: require('../views/Home.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: require('../views/News.vue')
    }
  ]
})