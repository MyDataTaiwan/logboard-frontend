
import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex

import axios from 'axios'
Vue.use(Vuex);

const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";
//http://localhost:5566
export default new Vuex.Store({
	state: {
		// 初始化狀態
		message: "",
		DB: {},
		userList: [],
		Issue_com_List: [],
		Issue_edu_List: [],
		calendar: [],
		about: [],
		AD: [],
		count: 0,
		selectDate: [],
		selectDateformat: [],
		storageData: [],
		templateList:["烤鴨"],
	},
	mutations: {
		increment(state) {
			state.count++
		},
		updateMessage(state, payload) {
			state.count++
			state.message = payload.message + state.count;
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
		//暫存MyLog API資料
		saveDB(state, payload) {
			state.storageData = payload;
		},
		//建立症狀選單
		addTemplateList(state, payload) {
			state.templateList.push(payload)
			// console.log("originTemplateList"+state.templateList)
			var result = state.templateList.filter((item, index, arr) => {
				return arr.indexOf(item) === index;
			})
			state.templateList = result;
			// console.log("resultTemplateList"+state.templateList)
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
		// 		(6) [{…}, {…}, {…}, {…}, {…}, {…}]
		// 0:
		// content_hash_verified: "success"
		// content_parsed: "success"
		// fields: (6) [{…}, {…}, {…}, {…}, {…}, {…}]
		// id: 6
		// owner: "947a40df-d548-4dba-bc12-c3b2b006d274"
		// photo: "https://logboard-dev.s3.amazonaws.com/photo.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=nfdmaidUW7cWw4wWkHC4eS86cPw%3D&Expires=1595217147"
		// proof: {location: {…}, timestamp: 1594926156492}
		// raw_content: "{"timestamp":1594926156492,"proof":{"timestamp":15"
		// template_name: "commonCold"
		// timestamp: "2020-07-16T19:02:36Z"
		// transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999"
		// transaction_hash_validated: "success"
		// __proto__: Object
		// 1: {id: 4, raw_content: "{"timestamp":1594926156492,"proof":{"timestamp":15…Txu6VexzTlfQ//9k="}],"templateName":"commonCold"}", transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999", transaction_hash_validated: "success", content_hash_verified: "success", …}
		// 2: {id: 2, raw_content: "{"timestamp":1594926156492,"proof":{"timestamp":15…Txu6VexzTlfQ//9k="}],"templateName":"commonCold"}", transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999", transaction_hash_validated: "success", content_hash_verified: "success", …}
		// 3: {id: 1, raw_content: "{"timestamp":1594926156492,"proof":{"timestamp":15…Txu6VexzTlfQ//9k="}],"templateName":"commonCold"}", transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999", transaction_hash_validated: "success", content_hash_verified: "success", …}
		// 4: {id: 3, raw_content: "{"timestamp":1594926356051,"proof":{"timestamp":15…12R0RwyV5H/2Q=="}],"templateName":"heartFailure"}", transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999", transaction_hash_validated: "success", content_hash_verified: "failure", …}
		// 5: {id: 5, raw_content: "{"timestamp":1594926156492,"proof":{"timestamp":{}…Txu6VexzTlfQ//9k="}],"templateName":"commonCold"}", transaction_hash: "M9TSJGOSCJPKMJNLRAATJRBEBEFZPUYKHITBZOOYPYEAAGCYWPSURBPAGONXFRMAVARWRZAEMQHF99999", transaction_hash_validated: "success", content_hash_verified: "failure", …}
		// length: 6
		// __proto__: Array(0)
		// uri[0].content_hash_verified: "success"
		// uri[0].content_parsed: "success"
		fetchApi({
			commit,
			// dispatch
		}, payload) {
			console.log("fetchApi_start")
			// commit('setLoading', true);
			return axios.get(`${$http}${payload.name}${payload.uid}`).then(response => {
				console.log("fetchApi_get")
				console.log(response)
				console.log(response.data.length)
				if (response.status === 200) {
					console.log("fetchApi_200")
					let successDataArray=[];
					response.data.map(index => {
						// index.transaction_hash_validated= "success",
						// index.content_hash_verified= "success",
						// index.content_parsed= "success",
						console.log("transaction_hash_validated" + index.transaction_hash_validated)
						console.log("content_hash_verified" + index.content_hash_verified)
						console.log("content_parsed" + index.content_parsed)
						if (index.content_parsed == "success") {
							console.log("success "+index.template_name)
							commit('addTemplateList', index.template_name)
							successDataArray.push(index)
							// commit('saveDB', response.data);
						}
					})
					// return NewDataArray
					return commit('saveDB', successDataArray);
				}

				console.log("fetchApi_end")
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