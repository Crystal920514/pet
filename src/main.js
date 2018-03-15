import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'

import './mock/mockServer'

new Vue({
  el: '#app',
  router,
  render:h =>h (App),
  store
})
