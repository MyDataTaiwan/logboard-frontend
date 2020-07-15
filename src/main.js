import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store' //引入狀態管理 store
import Axios from 'axios'
// Vue.prototype.$http = 'http://172.105.199.206:5566'
Vue.prototype.axios = Axios
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import VCalendar from 'v-calendar'; // 引入日曆插件
// import 'v-calendar/lib/v-calendar.min.css'

Vue.use(
  ElementUI,
  VCalendar, {
  componentPrefix: 'vc',
});
import { setupCalendar} from 'v-calendar'

setupCalendar({
  componentPrefix: 'vc',
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
