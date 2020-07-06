import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' //引入狀態管理 store

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
