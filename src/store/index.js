
import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex

import axios from 'axios'
Vue.use(Vuex);

const $http = "http://localhost:5566";
//http://localhost:5566
export default new Vuex.Store({
	state: {
		// 初始化狀態
		message:"",
		DB: {},
		userList: [],
		Issue_com_List: [],
		Issue_edu_List: [],
		calendar: [],
		about: [],
		AD: [],
		count: 0,
		selectDate: [],
		selectDateformat: []


	},
	mutations: {
		increment(state) {
			state.count++
		},
		updateMessage(state, payload) {
			state.count++
      state.message = payload.message+state.count;
		},
		updateDateformat(state, payload) {
			state.selectDateformat = payload;
		},
		setSelectDate(state, payload) {
			state.selectDate = payload
			// state.selectDateformat[0] = new Date(payload[0]).getFullYear() + "-" + new Date(payload[0]).getMonth() + "-" + new Date(payload[0]).getDate()
			// state.selectDateformat[1] = new Date(payload[1]).getFullYear() + "-" + new Date(payload[1]).getMonth() + "-" + new Date(payload[1]).getDate()
		},
		//loading效果(目前前台效果還沒做)
		setLoading(state, payload) {
			Vue.set(state, 'loading', payload)
		},
		//載入最新消息DB
		setDB(state, payload) {
			state.DB = payload;
		},
		//新增後回傳的訊息
		updateDB(state, payload) {
			Vue.set(state, 'message', payload);
		}
	},
	getters: {

	},
	actions: {
		//讀取 api
		fetchApi({
			commit,
			dispatch
		}, payload) {
			commit('setLoading', true);
			return axios.get(`${$http}/${payload}/`).then(response => {
				if (response.data.state === "success") {
					commit('setDB', response.data.DB);
					dispatch('removeLoading');
				}
			})
		},
		//新增 api
		updateApi({
			commit,
			dispatch
		}, payload) {
			commit('setLoading', true);
			return axios.post(`${$http}/${payload.name}/`, payload.obj).then(response => {
				if (response.data.state === "success") {
					commit('updateDB', response.data.msg);
					dispatch('removeLoading');
				}
			})
		},
		//移除loading效果(目前前台效果還沒做)
		removeLoading({
			commit
		}) {
			commit('setLoading', false);
		}

	}
})



// const store = new Vuex.Store({
// 	state: {
// 		count: 0
// 	},
// 	mutations: {
// 		increment (state) {
// 			state.count++
// 		}
// 	}
// })