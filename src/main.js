import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' //引入狀態管理 store
import Axios from 'axios'
// Vue.prototype.$http = 'http://172.105.199.206:5566'
Vue.prototype.axios = Axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
