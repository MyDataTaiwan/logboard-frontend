import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store' //引入狀態管理 store
import Axios from 'axios'
import 'typeface-montserrat'

// Vue.prototype.$http = 'http://172.105.199.206:5566'
Vue.prototype.axios = Axios
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vuex)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


