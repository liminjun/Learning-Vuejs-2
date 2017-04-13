import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Nav from '@/components/Nav'

import Login from '@/components/Login'

import Main from '@/components/Main'

import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      components: {
        default: Nav,
        main: Main
      },
      children: [
        {
          path: "",
          name:'dashboard',
          componet:Dashboard,
          children:[
            {
              path:"",component:Hello
            }
          ]
        },
        {
          path:"login",
          name:'login',
          component:Login
        }
      ]
    }
  ]
})
