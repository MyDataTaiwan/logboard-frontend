import Vue from 'vue';

import axios from 'axios';
import Vuex from 'vuex'; //引入 vuex

Vue.use(Vuex);

// const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";
const $http = process.env.VUE_APP_API_HOST || "https://logboard-dev.numbersprotocol.io/api/v1";
// const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";

// const $raw_api = `${$http}/records/`;
// 4b539876-d395-4e01-b987-8ae8ea754b0e
//http://localhost:5566
export default new Vuex.Store({
	state: {
		// 初始化狀態
		// uid: "4b539876-d395-4e01-b987-8ae8ea754b0e",
		// uid: "8d83c9c8-72c6-43b7-8476-6b189a4e786f",
		displayPopUp: false,
		PopUpindex: null,
		PopUpidList: [],

		isLoading: false,
		uid: null,
		openPopUp: false,
		storeData: null,
		storeRAWData: null,
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
		thumbnailList: [],
		photoList: [],
		TableTitle: [
			{ prop: 0, label: "2020-07-23T01:41:40Z" },
			{ prop: 1, label: "2020-07-23T01:57:46Z" },
			{ prop: 2, label: "2020-07-23T02:16:24Z" }
		],
		storeDataID: [],
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
		ChangisLoading(state, payload) {

			state.isLoading = payload
			console.log("ChangisLoading  載入中 ", state.isLoading);

		},
		ChangDisplayPopUp(state, payload) {
			// state.displayPopUp = payload.display;
			state.displayPopUp = false;

			if (payload.index != -1) {
				state.PopUpindex = payload.index;
				state.PopUpidList = payload.idList
				console.log("GET  displayPopUp idList", payload.idList);

			}
			// state.openPopUp=true;
			console.log("save  displayPopUp", state.displayPopUp, state.PopUpindex);
		},
		saveRAW(state, payload) {
			state.storeRAWData = payload;
			// state.openPopUp=true;
			console.log("saveRAW  Store", state.storeRAWData);
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
		saveFormatDataIDs(state, payload) {
			state.storeDataID = [];
			state.storeDataID = payload;
			console.log("save ID Store " + payload.length, state.storeDataID);
		},
		saveFormatChartDatasets(state, payload) {
			state.storeChartDatasets = [];
			state.storeChartDatasets = payload;
			///產生photo
			console.log("save Datasets Store", payload);
		},
		saveFormatThumbnailsSets(state, payload) {
			state.thumbnailList = [];
			state.thumbnailList = payload;
			///產生photo
			console.log("save thumbnailList Store", payload);
		},
		saveFormatPhotoSets(state, payload) {
			state.photoList = [];
			state.photoList = payload;
			///產生photo
			console.log("save photoList Store", payload);
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
			console.log("fetch Summary Api_start_end", payload.start_date, payload.end_date)
			// let start_date = payload.start_date;
			// let end_date = payload.end_date;
			// let url = `${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${start_date}`
			let urlProcessing = `${$http}/records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`
			// let urlProcessing='https://logboard-dev.numbersprotocol.io/api/v1/records/summary/?uid=4fc9a448-49fe-4031-a9cc-a72ffa99aa37&template=heartFailure&start_date=2020-8-18&end_date=2020-8-20'
			if (urlProcessing.match("%20") != null) {
				console.log("%20 有", urlProcessing); // -> 1
				urlProcessing = urlProcessing.replace("%20", "");
			} else {
				console.log("%20 NO", urlProcessing); // -> 1

			}
			// let urlDtea = `&start_date=${start_date}&end_date=${end_date}`
			// console.log("fetch Summary Api_start_end",url.replace("%20",`&end_date=${end_date}`) )
			console.log("fetch Summary Api_start_end", urlProcessing)
			// let uri=`${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`
			//let uri="https://logboard-dev.numbersprotocol.io/api/v1/records/summary/?uid=4fc9a448-49fe-4031-a9cc-a72ffa99aa37&template=heartFailure&start_date=2020-08-01&end_date=2020-08-31"
			// console.log("fetch Summary Api_start_end", `${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${start_date}&end_date=${end_date}`)
			commit('ChangisLoading', true);
			return axios.get(urlProcessing).then(response => {
				// return axios.get(`${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${start_date}&end_date=${end_date}`).then(response => {
				console.log("fetchSummaryApi_get", response, `${$http}records/summary/?uid=${this.state.uid}&template=${this.state.selectTemplate}&start_date=${payload.start_date}&end_date=${payload.end_date}`)
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
					let FormatDataIDs = null;
					let FormatPhotoSets = null;

					// let FormatThumbnailsSets = null;
					for (let id = 0; id < response.data.date.length; id++) {
						let swp = response.data.date[id]
						let temp = swp.split("-");
						console.log("DADADADDA", temp)
						FormatTableTitle.push({ prop: id + 1, label: temp[1] + "-" + temp[2] })
					}
					FormatTableData = response.data.symptoms;
					FormatChartLabels = response.data.date;
					console.log("storage FormatChartLabels change", response.data.date);
					FormatChartDatasets = response.data.vital_signs;
					FormatPhotoSets = response.data.photo_list;
					// selectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformatselectDateformat = response.response.data.thumbnail_list;
					// console.log("fetch thumbnailList",response.response.data.thumbnail_list)
					// console.log("fetch thumbnailList",FormatThumbnailsSets)
					FormatDataIDs = response.data.id_list;
					commit('saveFormatDataIDs', FormatDataIDs);
					commit('saveFormatTableTitle', FormatTableTitle);
					commit('saveFormatTableData', FormatTableData);
					commit('saveFormatChartLabels', FormatChartLabels);
					commit('saveFormatChartDatasets', FormatChartDatasets);
					commit('saveFormatPhotoSets', FormatPhotoSets);


					// commit('saveFormatThumbnailsSets', FormatThumbnailsSets);
					return commit('saveDB', response.data);
					// }
				}
				else {
					commit('ChangisLoading', false);
					alert("請檢查網路或重新整理頁面")
				}
				console.log("fetchSummaryApi_end")
			})
		},
		fetchDaysApi({///past-days
			commit,///past-days
		}, payload) {///past-days
			console.log("fetch past-days Api_start")///past-days
			commit('ChangisLoading', true);
			//https://logboard-dev.numbersprotocol.io/api/v1/records/past-days/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure&range=this-month
			return axios.get(`${$http}/records/past-days/?uid=${this.state.uid}&template=${this.state.selectTemplate}&range=${payload.range}`).then(response => {
				console.log("fetchDaysApi_get", response)///past-days
				console.log(response)///past-days
				console.log(response.data.length)///past-days
				if (response.status === 200) {
					console.log("fetchSummaryApi_200")
					if (response.data.date[0] != null) {
						commit('updateDateformat', [response.data.date[0], response.data.date[response.data.date.length - 1]]);
						// commit('ChangisLoading', false);
						// commit('ChangisLoading', true);

					} else {
						commit('ChangisLoading', false);
						alert("本資料包無此紀錄，請見諒")
						if (this.state.selectTemplate != 'heartFailure') {
							this.$router.push({
								name: "dashboard",
							});
							commit('updateSelectTemplate', 'heartFailure');

						}
					}
					if (response.data.id_list !== []) {
						console.log("success response.data.id_lis ", response.data.id_list)
						let FormatTableTitle = [];
						let FormatTableData = null;
						let FormatChartLabels = null;
						let FormatChartDatasets = null;
						let FormatDataIDs = null;
						let FormatThumbnailsSets = null;
						let FormatPhotoSets = null;
						for (let id = 0; id < response.data.date.length; id++) {
							let swp = response.data.date[id]
							let temp = swp.split("-");
							console.log("DADADADDA", temp)
							FormatTableTitle.push({ prop: id + 1, label: temp[1] + "-" + temp[2] })
						}
						FormatTableData = response.data.symptoms;
						FormatChartLabels = response.data.date;
						FormatChartDatasets = response.data.vital_signs;
						console.log("fetch thumbnailList", response.data.thumbnail_list)
						FormatThumbnailsSets = response.data.thumbnail_list;
						console.log("fetch thumbnailList", FormatThumbnailsSets)
						FormatDataIDs = response.data.id_list;
						// alert("做完")

						FormatPhotoSets = response.data.photo_list;

						commit('saveFormatDataIDs', FormatDataIDs);
						commit('saveFormatTableTitle', FormatTableTitle);
						commit('saveFormatTableData', FormatTableData);
						commit('saveFormatChartLabels', FormatChartLabels);
						commit('saveFormatChartDatasets', FormatChartDatasets);
						commit('saveFormatPhotoSets', FormatPhotoSets);

						commit('saveFormatThumbnailsSets', FormatThumbnailsSets);
						return commit('saveDB', response.data);
					} else {
						commit('ChangisLoading', false);
						alert("本資料包無此紀錄，請見諒")

						// if (this.state.selectTemplate != 'heartFailure') {
						// 	this.$router.push({
						// 		name: "dashboard",
						// 	});
						// 	commit('updateSelectTemplate', 'heartFailure');
						// }
					}
				} else {
					commit('ChangisLoading', false);
					alert("請檢查網路或重新整理頁面 fetch past-days Api_end")
				}
				console.log("fetch past-days Api_end")
			})
		},
		fetchToDaysApi({
			commit,
		}) {
			console.log("fetchTODaysApi_start")
			commit('ChangisLoading', true);
			//https://logboard-dev.numbersprotocol.io/api/v1/records/today/?uid=8d83c9c8-72c6-43b7-8476-6b189a4e786f&template=heartFailure
			return axios.get(`${$http}/records/today/?uid=${this.state.uid}&template=${this.state.selectTemplate}`).then(response => {
				console.log("fetchTODaysApi_get", response)
				console.log(response)
				console.log(response.data.timestamp)
				if (response.status === 200) {
					commit('updateDateformat', []);
					//		timestamp
					console.log("fetchTODaysApi_200")
					console.log("fetchTODaysApi_200")
					console.log("success ", response.data.id_list)
					let FormatTableTitle = [];
					let FormatTableData = null;
					let FormatChartLabels = null;
					let FormatChartDatasets = null;
					// let FormatThumbnailsSets = null;
					let FormatDataIDs = null;
					let ID_list = [];
					// FormatTableTitle = response.data.timestamp;
					for (let id = 0; id < response.data.timestamp.length; id++) {
						let swp = response.data.timestamp[id]
						let temp = swp.slice(11);
						console.log("DADADADDA", temp)
						FormatTableTitle.push({ prop: id + 1, label: temp })
					}
					FormatTableData = response.data.symptoms;
					// for (let id = 0; id < response.data.timestamp.length; id++) {
					// 	FormatTableTitle.push({ prop: id, label: response.data.timestamp[id] })
					// }
					// .slice(10)
					for (let index = 0; index < response.data.id.length; index++) {
						let swp = response.data.id[index]
						ID_list.push(swp)
					}
					FormatDataIDs = [ID_list];
					// FormatTableData = response.data.symptoms;
					FormatChartLabels = response.data.timestamp.map(index => { return index.slice(11) });
					FormatChartDatasets = response.data.vital_signs;
					// FormatThumbnailsSets = response.response.data.thumbnails;
					// console.log("fetch thumbnailList",response.response.data.thumbnails)
					// console.log("fetch thumbnailList",FormatThumbnailsSets)
					console.log("fetch TODaysApi_Labels", FormatChartLabels)
					commit('saveFormatTableTitle', FormatTableTitle);
					commit('saveFormatTableData', FormatTableData);
					commit('saveFormatDataIDs', FormatDataIDs);
					commit('saveFormatChartLabels', FormatChartLabels);
					commit('saveFormatChartDatasets', FormatChartDatasets);
					// commit('saveFormatThumbnailsSets', FormatThumbnailsSets);
					return commit('saveDB', response.data);

				} else {
					commit('ChangisLoading', false);
					alert("請檢查網路或重新整理頁面")
				}
				console.log("fetchTODaysApi_end")
			})
		},
		// fetchRawDataApi({
		// 	commit,
		// }) {
		// 	commit('ChangisLoading', true);
		// 	let output = [];
		// 	console.log("fetchRawDataApi_start")
		// 	this.state.PopUpidList.map(index => {
		// 		axios.get(`${$raw_api}${index}/?uid=${this.state.uid}`).then(response => {
		// 			console.log("fetchRawDataApi_get", response)
		// 			console.log(response.data)
		// 			if (response.status === 200) {
		// 				if (response.data.content_parsed === "success") {
		// 					console.log("fetch Raw Data output response.data  ", response.data)
		// 					output.push(response.data)
		// 					console.log("fetch Raw Data output ", output)
		// 				}
		// 			} else {
		// 				commit('ChangisLoading', true);
		// 				alert("請檢查網路或重新整理頁面")
		// 			}
		// 			console.log("fetchRawDataApi_end")
		// 		})
		// 	})
		// 	return commit('saveRAW', output);
		// },
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