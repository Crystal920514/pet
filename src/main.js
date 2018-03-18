import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './mock/mockServer'
import Distpicker from 'v-distpicker'
import VueLazyload from 'vue-lazyload'
import loading from './common/image/loading.png'
Vue.component('v-distpicker', Distpicker)
Vue.use(MintUI)
Vue.use(VueLazyload,{
  loading
})
new Vue({
  el: '#app',
  router,
  render:h =>h (App),
  store
})
