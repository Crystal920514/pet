import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home/home.vue'
import sort from '../pages/sort/sort.vue'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import userCenter from '../pages/userCenter/userCenter.vue'
import tab1 from '../components/tab1/tab1.vue'
import tab2 from '../components/tab2/tab2.vue'

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
      children:[
        {
          path:'tab1',
          component:tab1,
        },
        {
          path:'tab2',
          component:tab2,
        },
        {
          path:'',
          redirect:'tab1'
        },
      ]
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
