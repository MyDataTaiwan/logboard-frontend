<template>
  <!-- <el-table  :data="testSymptoms" height="100%" style="width:50vw"> -->
    <el-table :span-method="arraySpanMethod" :data="TargetTableSet" height="100%" style="width:50vw">
    <!-- <el-table-column fixed="true" prop="name" width="40" label="症狀"></el-table-column> -->
    <!-- <el-table-column fixed label="姓名" >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>症狀: {{ scope.row.name }}</p>
            <p>時間: {{ scope.row.timestamp }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="mini">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
    </el-table-column>-->
    <el-table-column fixed label="症狀" width="110">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{ scope.row.timestamp }}</p>
        </el-popover>
        <div slot="reference">
          <h6>{{ scope.row }}</h6>

          <h6>{{ scope.row.name }}</h6>
          <h3>{{ scope.row.name }}</h3>
          <!-- {{$store.state.storageData[0].content_parsed}} -->
        </div>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="value0" label="2016-05-01">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{ scope.row.timestamp }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="mini">{{1}}</el-tag>
            <el-tag size="mini">{{2}}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>-->
    <!-- <el-table-column v-for="( prop, label) in list" :key="prop" :prop="prop" :label="label"></el-table-column> -->

    <el-table-column
      v-for="{ prop, label } in TargetDateToTableTitle"
      :key="prop"
      :prop="prop"
      :label="label"
    >
      <template slot-scope="scope">
        <!-- <h3>{{ scope.row[scope.column.property] }}</h3> -->
        <!-- <h6>{{ scope.column }}</h6>
        <h6>{{ scope.row }}</h6>-->
        <!-- <h6>{{ scope.row }}</h6> -->
        <el-popover trigger="hover" placement="top">
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{scope.column.property}}</p>
          <h3>顯示今天的症狀</h3>
          <h2>PhotoDiary</h2>
          <div slot="reference" class="name-wrapper">
            <!-- <el-tag size="mini">{{1}}</el-tag>
            <el-tag size="mini">{{2}}</el-tag>-->

            <!-- <template v-if="scope.row[scope.column.property]!=null">
              <template v-if="scope.row[scope.column.property]!=false">
                <el-tag color="#5C6F75" effect="dark" size="medium">
                  <h3>{{ scope.row[scope.column.property] }}</h3>
                  <h3>顯示今天的症狀</h3>
                </el-tag>
              </template>
              <template v-if="scope.row[scope.column.property]==false">
                <el-tag size="mini">吳振狀</el-tag>
                <el-tag size="mini">NAN</el-tag>
              </template>
            </template> -->
            <!-- <template v-if="scope.row[scope.column.property]==null">
              <el-tag size="mini">NAN</el-tag>
            </template>-->
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="times[0].2020-07-16T19:02:36Z" label="A2020-07-16T19:02:36Z"></el-table-column>
    <el-table-column prop="times[1].2020-07-19T19:02:36Z" label="A2020-07-19T19:02:36Z"></el-table-column>
    <el-table-column v-for="{ prop, label } in colConfigs" :key="prop" :prop="prop" :label="label"></el-table-column>-->

    <!-- <el-table-column prop="value1" label="2016-05-01"></el-table-column>
    <el-table-column prop="value2" label="2016-05-01"></el-table-column>
    <el-table-column prop="value3" label="2016-05-01"></el-table-column>
    <el-table-column prop="value4" label="2016-05-01"></el-table-column>
    <el-table-column prop="value5" label="2016-05-01"></el-table-column>
    <el-table-column prop="value6" label="2016-05-01"></el-table-column>
    <el-table-column prop="value1" label="2016-05-01"></el-table-column>
    <el-table-column prop="value2" label="2016-05-01"></el-table-column>
    <el-table-column prop="value3" label="2016-05-01"></el-table-column>
    <el-table-column prop="value4" label="2016-05-01"></el-table-column>
    <el-table-column prop="value5" label="2016-05-01"></el-table-column>
    <el-table-column prop="value6" label="2016-05-01"></el-table-column>-->
  </el-table>
</template>

<script>
import { mapState, mapActions } from "vuex"; //註冊 action 和 state

export default {
  name: "SymptomTable",
  props: {
    msg: String
  },
  watch: {
    storageDataCache: function() {
      console.log("storageDataCache change");
    },
    selectTemplate: function() {
      console.log("selectTemplate change");
    },
    storageTargetDate: function() {
      console.log("storageTargetDate change");
    },
    TargetDateToTableTitle: function() {
      console.log("TargetDateToTableTitle change", this.TargetDateToTableTitle);
    },
    TargetTableSet: function() {
      console.log("TargetTableSet change", this.TargetTableSet[0]);
    }
  },
  computed: {
    ...mapState(["loading", "DB", "message"]),
    formTitle() {
      return this.editedIndex === -1 ? "新增訊息" : "編輯訊息";
    },
    selectTemplate() {
      this.$store.dispatch("fetchApi", {
        name: "records/?uid="
        // uid: "4b539876-d395-4e01-b987-8ae8ea754b0e"
      });
      return this.$store.state.selectTemplate;
    },
    storageTargetDate() {
      return this.$store.state.storageTargetDate;
    },
    TargetDateToTableTitle() {
      return this.$store.state.TableTitle;
    },
    TargetTableSet() {
      return this.$store.state.zipSymptoms;
    },
    storageDataCache() {
      let processingData = [];

      /* console.log(this.storageDataCache()[0].content_parsed);
      // return this.$store.state.storageData;
      // let fromVuexData = this.$store.state.storageData;
      // let bodyTemperatureArray = [];
      // let dateArray = [];
      // let timesObject = {
      //   times: [
      //     ///is exmp
      //     // { "2020-07-16T19:02:36Z": "truetrue" },
      //     // { "2020-07-19T19:02:36Z": "truetrue" }
      //   ]
      // };
      // let tempDataRef = [];
      // let tempDataArry = [];
      // let reBuildDataArry = [];
      // let weekSymptoms=[];
      // fromVuexData.map(index => {
      //   dateArray.push(index.timestamp);
      //   let weekSymptoms = [];
      //   // let tempDataRef = [];
      //   // let tempDataArry = [];
      //   let processingFields = index.fields;
      //   console.log("fields" + processingFields);
      //   processingFields.map(symptoms => {
      //     // let oneDaySymptoms = [];
      //     if (symptoms.name == "bodyTemperature") {
      //       console.log("bodyTemperature");
      //       bodyTemperatureArray.push(symptoms);
      //     }
      //   });
      //   //選擇症狀包，取得資料
      //   if (index.template_name == this.selectTemplate) {
      //     weekSymptoms.push(processingFields);
      //     let tempObj = {
      //       [index.timestamp]: "true"
      //     };
      //     timesObject.times.push(tempObj);

      //     //ＴＯＤＯ 測試用必須刪除				//ＴＯＤＯ 測試用必須刪除
      //     weekSymptoms.push(processingFields);
      //     //ＴＯＤＯ 測試用必須刪除				//ＴＯＤＯ 測試用必須刪除
      //     console.log("以收集" + this.selectTemplate + "症狀資料");
      //     console.log("timesObject");
      //     console.log(timesObject);
      //   }
      //   console.log(this.selectTemplate + "症狀資料" + weekSymptoms);
      //   console.log(weekSymptoms);
      //   // /////ＤＯＴＯ 重組資料以符合table格式
      //   // //以ㄧ組資料為主重建，剩下的重置為{"時間戳記":T/F}
      //   // tempDataRef = weekSymptoms[0];
      //   // console.log("tempDataRef" + tempDataRef.length);
      //   // console.log(tempDataRef);
      //   // if (tempDataRef != []) {
      //   //   // let timesObject = {
      //   //   //   ///is fake
      //   //   //   times: [
      //   //   //     { "2020-07-16T19:02:36Z": "truetrue" },
      //   //   //     { "2020-07-19T19:02:36Z": "truetrue" }
      //   //   //   ]
      //   //   // };
      //   //   tempDataArry = tempDataRef.map(index => {
      //   //     let copy = Object.assign(index, timesObject);
      //   //     console.log(copy); // { a: 1 }
      //   //   });
      //   //   console.log(tempDataArry);
      //   //   console.log("tempDataArry" + tempDataArry.length);
      //   // }
      //   processingData.push(weekSymptoms);
      // 	/////ＤＯＴＯ 重組資料以符合table格式
      // 	console.log("ＤＯＴＯ 重組資料以符合table格式A");

      // });
      // console.log("ＤＯＴＯ 重組資料以符合table格式B");
      // if (processingData[0] != null) {
      //   /////ＤＯＴＯ 重組資料以符合table格式
      //   //以ㄧ組資料為主重建，剩下的重置為 timesObject[{"時間戳記":T/F}]
      //   tempDataRef = processingData[0];
      //   console.log("tempDataRef" + tempDataRef.length);
      //   console.log(tempDataRef);
      //   if (tempDataRef != []) {
      //     // let timesObject = {
      //     //   ///is fake
      //     //   times: [
      //     //     { "2020-07-16T19:02:36Z": "truetrue" },
      //     //     { "2020-07-19T19:02:36Z": "truetrue" }
      //     //   ]
      //     // };
      //     tempDataArry = tempDataRef.map(index => {
      //       let copy = Object.assign(index, timesObject);
      //       console.log(copy); // { a: 1 }
      //     });
      //     console.log(tempDataArry);
      //     console.log("tempDataArry" + tempDataArry.length);
      //   }
      // }

      // console.log(dateArray);
      // console.log(dateArray.length + "天");
      // console.log(bodyTemperatureArray);
      // console.log(bodyTemperatureArray.length + "筆體溫");
			// console.log(processingData);
			*/
      return processingData;
    }
  },
  created() {
    this.$store.dispatch("fetchApi", {
      name: "records/?uid="
      // uid: "4b539876-d395-4e01-b987-8ae8ea754b0e"
      // uid: this.uid
    });
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      //scope.row[scope.column.property]
      console.log("row", row);
      console.log("column", column);
      console.log("rowIndex", rowIndex);
      console.log("columnIndex", columnIndex);
      //label
      // let keyNmae = Object.keys(column.property);
      // console.log("keyNmae", keyNmae);
      if (rowIndex % 2 === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      }
    },
    DateToTableTitle(date) {
      let TableTitle = [];
      console.log("TableTitleA", date);
      if (date != null) {
        date.map(index => {
          // console.log(Object.keys(index));
          TableTitle.push({
            prop: Object.keys(index),
            label: Object.keys(index)
          });
        });
      }
      console.log("TableTitle", Object.keys(TableTitle));
      return TableTitle;
    },
    //     increment() {
    //       this.$store.dispatch("incrementAsync");
    //     },
    //     decrement() {
    //       this.$store.commit("decrement");
    //     },
    //     testAction() {
    //       this.$store.dispatch("actionA").then(() => {});
    //     },
    ...mapActions(["fetchApi"], {
      name: "records/?uid="
      // uid: "947a40df-d548-4dba-bc12-c3b2b006d274"
      // uid: this.uid
    })
    //     showMessage() {
    //       this.alertMessage = true;z
    //       setTimeout(() => {
    //         this.alertMessage = false;
    //       }, 3000);
    //     }
  },
  data() {
    return {
      // uid: this.$route.params.id,
      // times: [
      //   { "2020-07-16T19:02:36Z": "truetrue" },
      //   { "2020-07-19T19:02:36Z": "truetrue" }
      // ]
      colTitleConfigs: this.TargetDateToTableTitle,

      colConfigs: [
        { prop: "value", label: "B2022-05-01" },
        { prop: "value0", label: "B2022-05-02" },
        { prop: "value1", label: "B2022-05-03" }
      ],
      // testcol: [
      //   { prop: "2020-07-23T01:41:40Z", label: "2020-07-23T01:41:40Z" },
      //   { prop: "2020-07-23T01:57:46Z", label: "2020-07-23T01:57:46Z" },
      //   { prop: "2020-07-23T02:16:24Z", label: "2020-07-23T02:16:24Z" }
      // ],
      testSymptoms: {
        coughing: [false, false, false],
        runnyNose: [false, true, false],
        nasalCongestion: [false, true, false],
        sneezing: [false, false, false]
			},
			
			test: {
        coughing: [{0:false}, {1:false}, {2:false}],
        runnyNose:  [{0:false}, {1:true}, {2:false}],
        nasalCongestion: [{0:true}, {1:false}, {2:false}],
        sneezing:  [{0:false}, {1:false}, {2:true}],
			},
			

      testDB: {
        timestamp: [
          "2020-07-23T01:41:40Z",
          "2020-07-23T01:57:46Z",
          "2020-07-23T02:16:24Z"
        ],
        vital_signs: {
          bodyTemperature: [38.26, 36.53, 34.43]
        },
        symptoms: {
          coughing: [false, false, false],
          runnyNose: [false, true, false],
          nasalCongestion: [false, true, false],
          sneezing: [false, false, false]
        }
      },
      SymptomTableData: [
        {
          icon: "pulse-outline",
          name: "SBP",
          type: "number",
          value: 200,
          dataClass: "",
          dataGroup: "vitalSigns",
          valueUnit: "mmHg",
          isKeyField: false,
          valueRange: {
            max: 200,
            min: 60
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          icon: "pulse-outline",
          name: "DBP",
          type: "number",
          value: 110,
          dataClass: "",
          dataGroup: "vitalSigns",
          valueUnit: "mmHg",
          isKeyField: false,
          valueRange: {
            max: 110,
            min: 10
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          icon: "heart-outline",
          name: "heartbeat",
          type: "number",
          value: 152,
          dataClass: "",
          dataGroup: "vitalSigns",
          valueUnit: "bpm",
          isKeyField: false,
          valueRange: {
            max: 300,
            min: 30
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          icon: "medkit-outline",
          name: "bloodSugar",
          type: "number",
          value: null,
          dataClass: "",
          dataGroup: "vitalSigns",
          valueUnit: "mg/dL",
          isKeyField: false,
          valueRange: {
            max: 1000,
            min: 0
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          icon: "body-outline",
          name: "weight",
          type: "number",
          value: 37,
          dataClass: "",
          dataGroup: "vitalSigns",
          valueUnit: "kg",
          isKeyField: false,
          valueRange: {
            max: 300,
            min: 1
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        }
      ],
      tableData: [
        {
          id: 0,
          timestamp: "2020-07-16T19:02:36Z",
          fields: this.fields,
          name: "sneezing",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true",
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          id: 1,
          timestamp: "2020-07-18T19:02:36Z",
          fields: this.fields,
          name: "runnyNose",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true",
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          id: 0,
          timestamp: "2020-07-16T19:02:36Z",
          fields: this.fields,
          name: "sneezing",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true",
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        },
        {
          id: 2,
          timestamp: "2020-07-18T19:02:36Z",
          fields: this.fields,
          name: "runnyNose",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true"
        },
        {
          id: 3,
          timestamp: "2020-07-18T19:02:36Z",
          fields: this.fields,
          name: "runnyNose",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true"
        },
        {
          id: 4,
          timestamp: "2020-07-18T19:02:36Z",
          fields: this.fields,
          name: "runnyNose",
          value: "true",
          value0: "true",
          value1: "true",
          value2: "true",
          value3: "true",
          value4: "true",
          value5: "true",
          value6: "true"
        }
      ],
      fields: [
        {
          icon: "thermometer-outline",
          name: "bodyTemperature",
          type: "number",
          value: 37.5,
          dataClass: "highest",
          dataGroup: "vitalSigns",
          valueUnit: "°C",
          isKeyField: true,
          valueRange: {
            max: 41,
            min: 34
          },
          defaultValue: null
        },
        {
          icon: "medkit-outline",
          name: "coughing",
          type: "boolean",
          value: true,
          dataClass: "booleanPreview",
          dataGroup: "symptoms",
          isKeyField: false,
          defaultValue: false
        },
        {
          icon: "medkit-outline",
          name: "runnyNose",
          type: "boolean",
          value: false,
          dataClass: "booleanPreview",
          dataGroup: "symptoms",
          isKeyField: false,
          defaultValue: false
        },
        {
          icon: "medkit-outline",
          name: "nasalCongestion",
          type: "boolean",
          value: true,
          dataClass: "booleanPreview",
          dataGroup: "symptoms",
          isKeyField: false,
          defaultValue: false
        },
        {
          icon: "medkit-outline",
          name: "sneezing",
          type: "boolean",
          value: false,
          dataClass: "booleanPreview",
          dataGroup: "symptoms",
          isKeyField: false,
          defaultValue: false
        },
        {
          icon: "pencil-outline",
          name: "note",
          type: "string",
          value: "This is a note",
          dataClass: "note",
          dataGroup: "note",
          isKeyField: false,
          defaultValue: null
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#SymptomTable {
  display: flex;
  flex: 1;
  width: 100%;
}
#multiple-tables {
  display: flex;
  flex-direction: row;
}
.h3 {
  margin: 5;
  /* font: 1em sans-serif; */
  /* font-size: 16pt !important; */
  font: large !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
0: {…}
1: {…}
2: {…}
3: {…}
4: {…}
5: {…}
6: {…}

0: {times:[timestamp_0: "2020-07-16T19:02:36Z",timestamp_1: "2020-07-16T19:02:36Z",],…}
1: {times:[],…}
2: {times:[],…}
3: {times:[],…}
4: {times:[],…}
5: {times:[],…}
6: {times:[],…}


{
	id: 0,
	timestamp: "2020-07-16T19:02:36Z",
	fields: this.fields,
	name: "sneezing",
	value: "true",
	value0: "true",
	value1: "true",
	value2: "true",
	value3: "true",
	value4: "true",
	value5: "true",
	value6: "true",
times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]

},


{
	id: 0,
	timestamp: "2020-07-16T19:02:36Z",
	fields: this.fields,
	name: "sneezing",
	value: "true",
	value0: "true",
	value1: "true",
	value2: "true",
	value3: "true",
	value4: "true",
	value5: "true",
	value6: "true"
},
  let aa = {
          icon: "thermometer-outline",
          name: "bodyTemperature",
          type: "number",
          value: 37.5,
          dataClass: "highest",
          dataGroup: "vitalSigns",
          valueUnit: "°C",
          isKeyField: true,
          valueRange: {
            max: 41,
            min: 34
          },
          defaultValue: null,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        };
        let bb = {
          icon: "medkit-outline",
          name: "coughing",
          type: "boolean",
          value: true,
          dataClass: "booleanPreview",
          dataGroup: "symptoms",
          isKeyField: false,
          defaultValue: false,
          times: [
            { "2020-07-16T19:02:36Z": "truetrue" },
            { "2020-07-19T19:02:36Z": "truetrue" }
          ]
        };