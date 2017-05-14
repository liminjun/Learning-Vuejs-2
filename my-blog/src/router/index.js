import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BogList from '@/components/BogList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blogList',
      component: BogList
    }
  ]
})
