
import Vue from 'vue';
import Vuex from 'vuex'; //引入 vuex

import axios from 'axios'
Vue.use(Vuex);

const $http = "https://logboard-dev.numbersprotocol.io/api/v1/";
// const $http = "http://localhost:3000/api/v1/";

//http://localhost:5566
export default new Vuex.Store({
	state: {
		// 初始化狀態
		uid: "4b539876-d395-4e01-b987-8ae8ea754b0e",
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
		TableTitle: [],
		// TableTitle: [{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"},{'2020-07-19T08:42:09Z':"NULL"}],
		// TableTitle: [{label:'2020-07-89T08:42:09Z',prop:"2020-07-89T08:42:09Z"},{label:'2020-07-19T08:42:09Z',prop:"1"},{label:'2020-07-20T08:42:09Z',prop:"2"},{label:'2020-07-21T08:42:09Z',prop:"3"}],
		// selectTemplateTargetSet: [
		// 	{
		// 		"icon": "medkit-outline",
		// 		name: "coughing",
		// 		"type": "boolean",
		// 		"value": true,
		// 		"dataClass": "booleanPreview",
		// 		"dataGroup": "symptoms",
		// 		"isKeyField": false,
		// 		"defaultValue": false,
		// 		'2020-07-89T08:42:09Z':"日期誒",
		// 		0:"哈哈",
		// 		1:"KK",
		// 		2:"BB",
		// 		3:"CC"
		// },
		// {
		// 		"icon": "medkit-outline",
		// 		name: "runnyNose",
		// 		"type": "boolean",
		// 		"value": true,
		// 		"dataClass": "booleanPreview",
		// 		"dataGroup": "symptoms",
		// 		"isKeyField": false,
		// 		"defaultValue": false,
		// 		'2020-07-89T08:42:09Z':"日期誒",
		// 		0:"哈哈",
		// 		1:"KK",
		// 		2:"BB",
		// 		3:"CC"
		// },
		// {
		// 		"icon": "medkit-outline",
		// 		name: "nasalCongestion",
		// 		"type": "boolean",
		// 		"value": false,
		// 		"dataClass": "booleanPreview",
		// 		"dataGroup": "symptoms",
		// 		"isKeyField": false,
		// 		"defaultValue": false,
		// 		'2020-07-89T08:42:09Z':"日期誒",
		// 		0:"哈哈",
		// 		1:"KK",
		// 		2:"BB",
		// 		3:"CC"
		// },
		// {
		// 		"icon": "medkit-outline",
		// 		name: "sneezing",
		// 		"type": "boolean",
		// 		"value": false,
		// 		"dataClass": "booleanPreview",
		// 		"dataGroup": "symptoms",
		// 		"isKeyField": false,
		// 		"defaultValue": false,
		// 		'2020-07-89T08:42:09Z':"日期誒",
		// 		0:"哈哈",
		// 		1:"KK",
		// 		2:"BB",
		// 		3:"CC"
		// },
		// ],
		// templateList: ["烤鴨"],
		templateList: ["heartFailure"],
		selectTemplate: 'heartFailure'
		// selectTemplate: 'commonCold'


	},
	mutations: {
		increment(state) {
			state.count++
		},
		saveZipSymptoms(state, payload) {
			state.zipSymptoms = payload;
			console.log("saveZipSymptoms ", state.zipSymptoms);

		},
		updateUserId(state, payload) {
			state.uid = payload;
		},
		updateSelectTemplate(state, payload) {
			state.selectTemplate = payload;
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
			console.log("開始處理資料saveDB");

		},
		//暫存MyLog API資料 處理後的資料
		saveSelectTemplateData(state, payload) {
			state.storageTargetData = payload;
			console.log("開始處理資料 saveSelectTemplateData");
			console.log(state.storageTargetData);

		},
		//暫存MyLog API資料 處理後的日期列表 TODO
		saveSelectTemplateDate(state, payload) {
			console.log("處理前", payload);
			let TableTitle = [];
			if (payload.times != null) {
				payload.times.map(index => {
					console.log("TableTitle payload", Object.keys(index));
					let str = Object.keys(index);
					console.log("處理中", str);
					// console.log(Object.keys(index));
					//ＴＯＤＯ  壓縮資料為日期，有無//
					TableTitle.push({
						[str[0]]: "我在這ㄦ",
					});
				});
			}
			// let timesObject = []

			console.log("處理後", TableTitle);
			state.storageTargetDate = TableTitle;

			// state.storageTargetDate = payload;
			console.log(state.storageTargetDate);
			console.log("開始處理資料 saveSelectTemplateDate");
		},
		//暫存MyLog API資料 日期列表轉換成標格標題
		TargetDateToTableTitle(state, payload) {
			console.log("開始處理資料 TargetDateToTableTitle");
			let TableTitle = [];
			if (payload.times != null) {
				payload.times.map(index => {
					console.log("TableTitle payload", Object.keys(index));
					let str = Object.keys(index);
					// console.log(Object.keys(index));
					TableTitle.push({
						prop: str[0],
						label: str[0],
					});
				});
			}
			// let  SWPTableTitle=[]
			// // console.log("TableTitle", Object.keys(TableTitle));
			// TableTitle.map(index=>{

			// 	SWPTableTitle.push({
			// 		// prop:	"scope.row.times["+index.id+"]"+index.prop,
			// 		prop:	"icon",
			// 		label: index.label
			// 	});
			// });
			// state.TableTitle = SWPTableTitle

			state.TableTitle = TableTitle

			console.log("TableTitle Store", state.TableTitle);
		},
		//暫存MyLog API資料 以症狀索引加入處理後的日期列表為新的2d陣列
		saveSelectData(state, payload) {
			console.log("開始處理資料 saveSelectTemplateDataProcessing");
			console.log("處理新的2d陣列satrt");
			console.log(payload);
			if (payload != null) {
				// console.log("處理新的2d陣列satrt 1", state.storageTargetDate);
				console.log("處理新的2d陣列satrt 1 zipSymptoms", state.zipSymptoms);
				console.log("處理新的2d陣列satrt 1 payload", payload);
			}
		},
		//暫存MyLog API資料 以症狀索引加入處理後的日期列表為新的2d陣列
		saveSelectTemplateDataProcessing(state, payload) {
			console.log("開始處理資料 saveSelectTemplateDataProcessing");
			console.log("處理新的2d陣列satrt");
			console.log(payload);
			if (payload != null) {
				// console.log("處理新的2d陣列satrt 1", state.storageTargetDate);
				// console.log("處理新的2d陣列satrt 1 zipSymptoms", state.zipSymptoms);
				console.log("處理新的2d陣列satrt 1 payload", payload);

				if (state.storageTargetDate != null) {
					/////ＤＯＴＯ 重組資料以符合table格式
					//以ㄧ組資料為主重建，剩下的重置為 timesObject[{"時間戳記":T/F}]
					let getOneDay = payload[0];
					let tempDataRef = getOneDay[0];
					// let timesObject = state.storageTargetDate
					let timesObject = state.storageTargetDate
					let tempDataArry = [];
					// let timesObject = {
					//   ///is fake
					//   times: [
					//     { "2020-07-16T19:02:36Z": "truetrue" },
					//     { "2020-07-19T19:02:36Z": "truetrue" }
					//   ]
					// };
					console.log("tempDataRef" + tempDataRef.length);
					console.log("單日資料", tempDataRef);
					if (tempDataRef != []) {
						console.log("處理新的2d陣列satrt 3");
						tempDataRef.map(index => {
							console.log("處理新的2d陣列satrt 4");
							let copy = null;
							timesObject.map(timesItem => {
								copy = Object.assign(index, timesItem)
							})
							// let copy = Object.assign(index, timesObject);
							// console.log("copy", copy, timesObject); // { a: 1 }
							tempDataArry.push(copy);
						});
						console.log("單日處理過加上日期資料", tempDataArry);
						console.log("單日處理過加上日期資料Ａ", tempDataArry[0]['2020-07-19T08:42:09Z']);

						console.log("tempDataArry" + tempDataArry.length);
					}
					console.log("處理資料end tempDataArry", tempDataArry);
					this.state.selectTemplateTargetSet = tempDataArry;

				}
			}
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
			// Mutations,
			// dispatch
		}, payload) {
			console.log("fetchApi_start")
			// commit('setLoading', true);
			return axios.get(`${$http}${payload.name}${this.state.uid}`).then(response => {
				console.log("fetchApi_get")
				console.log(response)
				console.log(response.data.length)
				if (response.status === 200) {
					console.log("fetchApi_200")
					let successDataArray = [];
					response.data.map(index => {
						// index.transaction_hash_validated= "success",
						// index.content_hash_verified= "success",
						// index.content_parsed= "success",
						// console.log("transaction_hash_validated" + index.transaction_hash_validated)
						// console.log("content_hash_verified" + index.content_hash_verified)
						// console.log("content_parsed" + index.content_parsed)
						if (index.content_parsed == "success") {
							if (index.fields != null) {
								//&&
								console.log("success " + index.template_name)
								commit('addTemplateList', index.template_name)
								successDataArray.push(index)
								// commit('saveDB', response.data);
							}
						}
					})

					let processingData = [];
					// let bodyTemperatureArray = [];
					// let dateArray = [];
					let timesObject = {
						times: [
							///is exmp
							// { "2020-07-16T19:02:36Z": "truetrue" },
							// { "2020-07-19T19:02:36Z": "truetrue" }
						]
					};
					console.log("successDataArray")

					console.log(successDataArray)
					// let tempDataRef = [];
					// let tempDataArry = [];
					// let reBuildDataArry = [];
					// let weekSymptoms=[];
					////取得驗證過的資料
					let weekSymptoms = [];

					if (successDataArray[0] != null) {
						//選擇症狀包，取得資料
						let getDataSet = [];
						successDataArray.map(index => {
							console.log("fields" + index.fields[0].name);
							//選擇症狀包，取得資料
							if (index.template_name == this.state.selectTemplate) {
								getDataSet.push(index)
							} else {
								console.log("我是" + index.template_name + "不是>" + this.state.selectTemplate);
							}
							console.log(this.state.selectTemplate + "症狀資料" + getDataSet);
							console.log("getDataSet", getDataSet)
						});
						if (getDataSet[0] != null) {
							/////壓縮日期至症狀////
							let zipSymptoms = []
							getDataSet.map(Symptoms => {
								let time = Symptoms.timestamp;
								let TandS = [];
								Symptoms.fields.map(index => {
									// TandS.push({[index.name]:"time"})
									TandS.push({ [time]: index.value, name: index.name })
								})
								console.log("zipOneSymptoms" + TandS)
								zipSymptoms.push(TandS)
							})
							console.log("zipSymptoms", zipSymptoms)
							let SWPset = zipSymptoms[0]
							console.log("input zipSymptoms", SWPset)
							for (let row = 0; row < SWPset.length; row++) {
								for (let column = 0; column < zipSymptoms.length; column++) {
									let NEXTitme = zipSymptoms[column][row]
									SWPset[row] = Object.assign(SWPset[row], NEXTitme)
									console.log(SWPset[row])
								}
							}
							console.log("output zipSymptoms ", SWPset)
							commit('saveZipSymptoms', SWPset);
						}
						// [[ {"2020-07-19T08:42:09Z": 200, name: "SBP"},
						// {"2020-07-19T08:42:09Z": 110, name: "DBP"},
						// {"2020-07-19T08:42:09Z": 152, name: "heartbeat"},
						// {"2020-07-19T08:42:09Z": null, name: "bloodSugar"},
						// {"2020-07-19T08:42:09Z": 37, name: "weight"},
						// {"2020-07-19T08:42:09Z": 610, name: "urineVolume"},
						// {"2020-07-19T08:42:09Z": null, name: "note"},
						// {"2020-07-19T08:42:09Z": null, name: "photo"}],[ {"2020-07-19T08:42:09Z": 200, name: "SBP"},
						// {"2020-07-19T08:42:09Z": 110, name: "DBP"},
						// {"2020-07-19T08:42:09Z": 152, name: "heartbeat"},
						// {"2020-07-19T08:42:09Z": null, name: "bloodSugar"},
						// {"2020-07-19T08:42:09Z": 37, name: "weight"},
						// {"2020-07-19T08:42:09Z": 610, name: "urineVolume"},
						// {"2020-07-19T08:42:09Z": null, name: "note"},
						// {"2020-07-19T08:42:09Z": null, name: "photo"}]]

						successDataArray.map(index => {
							console.log("fields" + index.fields[0].name);
							// processingFields.map(symptoms => {
							// 	// let oneDaySymptoms = [];
							// 	if (symptoms.name == "bodyTemperature") {
							// 		console.log("bodyTemperature");
							// 		bodyTemperatureArray.push(symptoms);
							// 	}
							// });
							//選擇症狀包，取得資料
							if (index.template_name == this.state.selectTemplate) {
								weekSymptoms.push(index.fields);
								console.log("weekSymptoms AA" + weekSymptoms)
								let tempObj = {
									[index.timestamp]: "NULL"
								};
								console.log("timestamp" + index.id + index.timestamp);
								console.log("timestamp GET" + index.fields[0].name + index.fields[1].name);
								timesObject.times.push(tempObj);
								// //ＴＯＤＯ 測試用必須刪除				//ＴＯＤＯ 測試用必須刪除
								// weekSymptoms.push(index.fields);
								// //ＴＯＤＯ 測試用必須刪除				//ＴＯＤＯ 測試用必須刪除
								console.log("以收集" + this.state.selectTemplate + "症狀資料");
								console.log("timesObject");
								console.log(timesObject);
							} else {
								console.log("我是" + index.template_name + "不是>" + this.state.selectTemplate);
							}
							console.log(this.state.selectTemplate + "症狀資料" + weekSymptoms);
							console.log(weekSymptoms);
							console.log("weekSymptoms", weekSymptoms)

							// /////ＤＯＴＯ 重組資料以符合table格式
							processingData.push(weekSymptoms);
							/////ＤＯＴＯ 重組資料以符合table格式
							console.log("ＤＯＴＯ 重組資料以符合table格式A");
						});
					}

					console.log("processingData", processingData);
					console.log("successDataArray", successDataArray);

					console.log(processingData);
					commit('saveSelectTemplateDate', timesObject);
					commit('TargetDateToTableTitle', timesObject);
					commit('saveDB', successDataArray);
					commit('saveSelectTemplateData', processingData);
					commit('saveSelectTemplateDataProcessing', processingData);
					// return NewDataArray
					// return () => {
					// 	commit('saveSelectTemplateData', processingData);
					// 	commit('saveSelectTemplateDataProcessing', processingData);
					// 	commit('saveSelectTemplateDate', timesObject);
					// 	commit('saveDB', successDataArray);
					// }
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