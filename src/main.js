import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

Vue.config.productionTip = false


import * as services from "./services";
Vue.prototype.$api = services.default;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
