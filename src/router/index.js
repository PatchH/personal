import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Product from '@/components/pages/Product'
import Honor from '@/components/pages/Honor'
import Connect from '@/components/pages/Connect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/honor',
      name: 'Honor',
      component: Honor
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    }
  ]
})
