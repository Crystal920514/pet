import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer'

Vue.use(MintUI)

new Vue({
  el: '#app',
  router,
  render:h =>h (App),
  store
})
