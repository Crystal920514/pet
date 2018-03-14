import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home/home.vue'
import sort from '../pages/sort/sort.vue'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import userCenter from '../pages/userCenter/userCenter.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:home,
    },
    {
      path:'/sort',
      component:sort,
    },
    {
      path:'/shoppingCart',
      component:shoppingCart,
    },
    {
      path:'/userCenter',
      component:userCenter,
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
