import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
