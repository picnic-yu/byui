import Vue from 'vue'
import App from './App'
import router from './router'
import yuui from './comps/index'

Vue.use(yuui)
Vue.config.productionTip = false
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
