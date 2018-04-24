import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'

import PackingSlipYard from '@/components/PackingSlip/PackingSlipYard'
import ScaleTicketYard from '@/components/ScaleTicket/ScaleTicketYard'
import MainPage from '@/components/Admin/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/admin-main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/scaleticket',
      name: 'ScaleTicket-1',
      component: ScaleTicketYard
    },
    {
      path: '/packingslip',
      name: 'PackingSlip-1',
      component: PackingSlipYard
    }
  ],
  mode: 'history'
})
