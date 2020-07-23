
import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex

import axios from 'axios'
Vue.use(Vuex);

// const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";
const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";
// 4b539876-d395-4e01-b987-8ae8ea754b0e
//http://localhost:5566
export default new Vuex.Store({
	state: {
		// 初始化狀態
		// uid: "4b539876-d395-4e01-b987-8ae8ea754b0e",

		// uid: "8d83c9c8-72c6-43b7-8476-6b189a4e786f",
		uid: null,
		storeData: null,
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
		storageTargetData: null,
		storageTargetDate: null,
		selectTemplateTargetSet: null,
		zipSymptoms: null,
		// TableTitle: [],
		TableTitle: [
			{ prop: 0, label: "2020-07-23T01:41:40Z" },
			{ prop: 1, label: "2020-07-23T01:57:46Z" },
			{ prop: 2, label: "2020-07-23T02:16:24Z" }
		],
		storeTableTitle: null,
		storeTableData: null,
		storeChartLabels: [],
		storeChartDatasets: [],
		// TableTitle: [{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"}],
		// TableTitle: [{label:'2020-07-89T08:42:09Z',prop:"2020-07-89T08:42:09Z"},{label:'2020-07-19T08:42:09Z',prop:"1
		// templateList: ["烤鴨"],
		templateList: ["heartFailure"],
		selectTemplate: 'heartFailure'
		// selectTemplate: 'commonCold'

	},
	mutations: {
		increment(state) {
			state.count++
		},

		saveDB(state, payload) {
			state.storeData = payload;
			console.log("saveDB Store", state.storeData);
		},
		saveFormatTableTitle(state, payload) {
			state.storeTableTitle = payload;
			console.log("save TableTitle Store", payload);
		},
		saveFormatTableData(state, payload) {
			state.storeTableData = payload;
			console.log("save TableData Store", payload);
		},
		saveFormatChartLabels(state, payload) {
			state.storeChartLabels = [];
			state.storeChartLabels = payload;
			console.log("save Labels Store " + payload.length, state.storeChartLabels);
		},
		saveFormatChartDatasets(state, payload) {
			state.storeChartDatasets = [];
			state.storeChartDatasets = payload;
			console.log("save Datasets Store", payload);
		},

		updateUserId(state, payload) {
			state.uid = payload;
		},
		updateSelectTemplate(state, payload) {
			state.selectTemplate = payload;
		},
		updateDateformat(state, payload) {
			state.selectDateformat = payload;
		},


		//loading效果(目前前台效果還沒做)
		setLoading(state, payload) {
			Vue.set(state, 'loading', payload)
		},
		//載入最新消息DB
		setDB(state, payload) {
			state.DB = payload;
		},
		// //暫存MyLog API資料
		// saveDB(state, payload) {
		// 	state.storageData = payload;
		// 	console.log("開始處理資料saveDB");

		// },


		// //建立症狀選單
		// addTemplateList(state, payload) {
		// 	state.templateList.push(payload)
		// 	// console.log("originTemplateList"+state.templateList)
		// 	var result = state.templateList.filter((item, index, arr) => {
		// 		return arr.indexOf(item) === index;
		// 	})
		// 	state.templateList = result;
		// 	// console.log("resultTemplateList"+state.templateList)
		// },
		//新增後回傳的訊息
		updateDB(state, payload) {
			Vue.set(state, 'message', payload);
		}
	},
	getters: {

	},
	actions: {

		fetchSummaryApi({
			commit,
		}, payload) {
			console.log("fetchSummaryApi_start", payload)
			// let test_url= `https://logboard-dev.numbersprotocol.io/api/v1/records/summary/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure&start_date=2020-07-15&end_date=2020-07-24`;
			// return axios.get(test_url).then(response => {
			// if (test_url!=`${$http}summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`){
			return axios.get(`${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`).then(response => {
				console.log("fetchSummaryApi_get", `${$http}summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`)
				console.log(response)
				console.log(response.data.length)
				if (response.status === 200) {
					console.log("fetchSummaryApi_200", response.data)
					// if (response.data.id_list != null) {
					console.log("success ", response.data.id_list)
					let FormatTableTitle = [];
					let FormatTableData = null;
					let FormatChartLabels = null;
					let FormatChartDatasets = null;
					for (let id = 0; id < response.data.date.length; id++) {
						FormatTableTitle.push({ prop: id, label: response.data.date[id] })
					}
					FormatTableData = response.data.symptoms;
					FormatChartLabels = response.data.date;
					FormatChartDatasets = response.data.vital_signs;
					commit('saveFormatTableTitle', FormatTableTitle);
					commit('saveFormatTableData', FormatTableData);
					commit('saveFormatChartLabels', FormatChartLabels);
					commit('saveFormatChartDatasets', FormatChartDatasets);
					return commit('saveDB', response.data);
					// }
				}
				console.log("fetchSummaryApi_end")
			})
		},
		fetchDaysApi({
			commit,
		}, payload) {
			console.log("fetchDaysApi_start")
			//https://logboard-dev.numbersprotocol.io/api/v1/records/past-days/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure&range=this-month
			return axios.get(`${$http}records/past-days/?uid=${this.state.uid}&template=${this.state.selectTemplate}&range=${payload.range}`).then(response => {
				console.log("fetchDaysApi_get")
				console.log(response)
				console.log(response.data.length)
				if (response.status === 200) {
					console.log("fetchSummaryApi_200")
					if (response.data.id_list != null) {
						console.log("success ", response.data.id_list)
						let FormatTableTitle = [];
						let FormatTableData = null;
						let FormatChartLabels = null;
						let FormatChartDatasets = null;
						for (let id = 0; id < response.data.date.length; id++) {
							FormatTableTitle.push({ prop: id, label: response.data.date[id] })
						}
						FormatTableData = response.data.symptoms;
						FormatChartLabels = response.data.date;
						FormatChartDatasets = response.data.vital_signs;
						commit('saveFormatTableTitle', FormatTableTitle);
						commit('saveFormatTableData', FormatTableData);
						commit('saveFormatChartLabels', FormatChartLabels);
						commit('saveFormatChartDatasets', FormatChartDatasets);
						return commit('saveDB', response.data);
					}
				}
				console.log("fetchDaysApi_end")
			})
		},
		fetchToDaysApi({
			commit,
		}) {
			console.log("fetchTODaysApi_start")
			//https://logboard-dev.numbersprotocol.io/api/v1/records/today/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure
			return axios.get(`${$http}records/today/?uid=${this.state.uid}&template=${this.state.selectTemplate}`).then(response => {
				console.log("fetchTODaysApi_get")
				console.log(response)
				console.log(response.data.timestamp)
				if (response.status === 200) {
					console.log("fetchTODaysApi_200")
					console.log("success ", response.data.id_list)
					// let FormatTableTitle = [];
					// let FormatTableData = null;
					let FormatChartLabels = null;
					let FormatChartDatasets = null;
					// for (let id = 0; id < response.data.timestamp.length; id++) {
					// 	FormatTableTitle.push({ prop: id, label: response.data.timestamp[id] })
					// }

					// FormatTableData = response.data.symptoms;
					FormatChartLabels = response.data.timestamp;
					FormatChartDatasets = response.data.vital_signs;
					console.log("fetch TODaysApi_Labels", FormatChartLabels)

					// commit('saveFormatTableTitle', FormatTableTitle);
					// commit('saveFormatTableData', FormatTableData);
					commit('saveFormatChartLabels', FormatChartLabels);
					commit('saveFormatChartDatasets', FormatChartDatasets);
					return commit('saveDB', response.data);

				}
				console.log("fetchTODaysApi_end")
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

	// let exp = {
		// 	"id_list": [
		// 		[5609,5610,5611,5612,5613]
		// 	],
		// 	"date": ["2020-07-15"],
		// 	"vital_signs": {
		// 		"SBP": [185.21],
		// 		"DBP": [93.08],
		// 		"heartbeat": [293.71],
		// 		"bloodSugar": [817.32],
		// 		"weight": [286.56],
		// 		"urineVolume": [9001.16]
		// 	},
		// 	"symptoms": []
		// }
		//讀取 api 
		//summary/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&start_date=2020-07-15&end_date=2020-07-24&template=heartFailure
		//past-days/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure&range=this-week
		//`${payload.mode}/?uid=${this.state.uid}& template=${payload.template}&start_date=${payload.start_date}&end_date=${payload.end_date}`
		//`${payload.mode}/?uid=${this.state.uid}& template=${payload.template}&range=${payload.range}`

		//https://logboard-dev.numbersprotocol.io/api/v1/records/past-days/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure&range=this-month
		//https://logboard-dev.numbersprotocol.io/api/v1/records/today/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure