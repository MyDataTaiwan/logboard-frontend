<template>
  <!-- <el-table  :data="testSymptoms" height="100%" style="width:50vw"> -->
  <el-table
    :span-method="arraySpanMethod"
    :data="storageTableData"
    height="100%"
    style="width:50vw"
  >
    <el-table-column fixed label="症狀" width="110">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{ scope.row.timestamp }}</p>-->
        </el-popover>
        <div slot="reference">
          <!-- <h6>{{ scope.row }}</h6>
          <h6>{{ scope.column }}</h6>-->

          <h6>{{ scope.row.name }}</h6>
          <h3>{{ scope.row.name }}</h3>
          <!-- {{$store.state.storageData[0].content_parsed}} -->
        </div>
      </template>
    </el-table-column>

    <el-table-column
      v-for="{ prop, label } in storageTableTitle"
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
            <!-- <h3>{{scope.row.Symptoms }}</h3> -->
            <!-- <h3>{{scope.row.Symptoms[scope.column.property] }}</h3>
            <h3>{{scope.column.property }}</h3>-->

            <template v-if="scope.row.symptom[scope.column.property]==true">
              <el-tag color="#5C6F75" effect="dark" size="medium">
                <!-- <h3>{{scope.row.symptom[scope.column.property] }}</h3> -->
                <h3></h3>
                <!-- <h3>顯示今天的症狀</h3> -->
              </el-tag>
            </template>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <!-- <el-table-column prop="times[0].2020-07-16T19:02:36Z" label="A2020-07-16T19:02:36Z"></el-table-column>
    <el-table-column prop="times[1].2020-07-19T19:02:36Z" label="A2020-07-19T19:02:36Z"></el-table-column>
    <el-table-column v-for="{ prop, label } in colConfigs" :key="prop" :prop="prop" :label="label"></el-table-column>-->
  </el-table>
</template>

<script>
export default {
  name: "SymptomTable",
  props: {
    msg: String
  },
  watch: {
    storageTableTitle: function() {
      console.log("storageTableTitle change");
    },
    storageTableData: function() {
      console.log("storageTableData change");
    },
    selectTemplate: function() {
      console.log("selectTemplate change");
    },
    storageData: function() {
      console.log("storageData change");
    }
  },
  computed: {
    storageTableTitle() {
			if (this.storageData.symptoms[0]==null){
				return   [
        { prop: 0, label: "暫時" },
        { prop: 1, label: "沒有" },
        { prop: 2, label: "資料" }
      ]
			}
      return this.$store.state.storeTableTitle;
    },
    storageTableData() {
      return this.$store.state.storeTableData;
    },
    storageData() {
      return this.$store.state.storeData;
    },

    selectTemplate() {
      // this.$store.dispatch("fetchApi", {
      //   name: "records/?uid="
      //   // uid: "4b539876-d395-4e01-b987-8ae8ea754b0e"
      // });
      return this.$store.state.selectTemplate;
    }
  },
  created() {
    // this.$store.dispatch("fetchSummaryApi", {
    //   template: "heartFailure",
    //   start_date: "2020-07-15",
    //   end_date: "2020-07-24"
    // });
    // this.$store.dispatch("fetchDaysApi", {
    //   template: "heartFailure",
    //   range: "this-week"
    // });
  },
  methods: {
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
    }
  },
  data() {
    return {
      // uid: this.$route.params.id,
      // times: [
      //   { "2020-07-16T19:02:36Z": "truetrue" },
      //   { "2020-07-19T19:02:36Z": "truetrue" }
      // ]
      colTitleConfigs: this.TargetDateToTableTitle,
      // TableTitle: [
      //   { prop: 0, label: "2020-07-23T01:41:40Z" },
      //   { prop: 1, label: "2020-07-23T01:57:46Z" },
      //   { prop: 2, label: "2020-07-23T02:16:24Z" }
      // ],
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

      test: [
        {
          name: "coughing",
          Symptoms: [false, true, false]
        },
        {
          name: "runnyNose",
          Symptoms: [false, true, false]
        },
        {
          name: "nasalCongestion",
          Symptoms: [false, true, false]
        },
        {
          name: "sneezing",
          Symptoms: [false, true, false]
        }
      ],
      TableTitle: [
        { prop: 0, label: "2020-07-23T01:41:40Z" },
        { prop: 1, label: "2020-07-23T01:57:46Z" },
        { prop: 2, label: "2020-07-23T02:16:24Z" }
      ],
      testDB2symptoms: [
        {
          name: "coughing",
          symptom: [false, false, false]
        },
        {
          name: "runnyNose",
          symptom: [false, true, false]
        },
        {
          name: "nasalCongestion",
          symptom: [false, true, false]
        },
        {
          name: "sneezing",
          symptom: [false, false, false]
        }
      ],
      testDB2: {
        id: [5728, 5727, 5729],
        timestamp: [
          "2020-07-23T01:41:40Z",
          "2020-07-23T01:57:46Z",
          "2020-07-23T02:16:24Z"
        ],
        vital_signs: {
          bodyTemperature: [38.26, 36.53, 34.43]
        },
        symptoms: [
          {
            name: "coughing",
            symptom: [false, false, false]
          },
          {
            name: "runnyNose",
            symptom: [false, true, false]
          },
          {
            name: "nasalCongestion",
            symptom: [false, true, false]
          },
          {
            name: "sneezing",
            symptom: [false, false, false]
          }
        ]
      },
      testDB: {
        id: [5726, 5725, 5730, 5731],
        timestamp: [
          "2020-07-23T00:46:01Z",
          "2020-07-23T01:28:41Z",
          "2020-07-23T02:33:02Z",
          "2020-07-23T03:00:00Z"
        ],
        vital_signs: [
          { SBP: [73.42, 197.19, 175.44, 89.01] },
          { DBP: [95.44, 76.64, 29.55, 60.39] },
          { heartbeat: [180.03, 72.71, 181.61, 74.78] },
          { bloodSugar: [767.96, 276.46, 957.19, 434.79] },
          { weight: [88.41, 20.49, 235.23, 111.76] },
          { urineVolume: [1579.75, 1037.58, 646.84, 275.07] }
        ],
        symptoms: []
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