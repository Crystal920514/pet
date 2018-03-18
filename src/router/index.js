import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../pages/home/home.vue'
import sort from '../pages/sort/sort.vue'
import shoppingCart from '../pages/shoppingCart/shoppingCart.vue'
import userCenter from '../pages/userCenter/userCenter.vue'
import tab1 from '../components/tab1/tab1.vue'
import tab2 from '../components/tab2/tab2.vue'
import dog from '../components/dog/dog.vue'
import all from '../components/all/all.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:home,
      meta: {
        showFooter: true // 需要显示底部组件
      }
    },
    {
      path:'/sort',
      component:sort,
      children:[
        {
          path:'tab1',
          component:tab1,
          meta: {
            showFooter: true // 需要显示底部组件
          },
        },
        {
          path:'tab2',
          component:tab2,
          meta: {
            showFooter: true // 需要显示底部组件
          },
        },
        {
          path:'',
          redirect:'tab1'
        },
      ],

    },
    {
      path:'/shoppingCart',
      component:shoppingCart,
      meta: {
        showFooter: false // 需要显示底部组件
      }
    },
    {
      path:'/userCenter',
      component:userCenter,
      meta: {
        showFooter: false // 需要显示底部组件
      }
    },
    {
      path:'/dog',
      component:dog
    },
    {
      path:'/all',
      component:all
    },
    {
      path:'/',
      redirect:'/home'
    },
  ]
})
