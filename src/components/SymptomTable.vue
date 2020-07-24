<template>
  <!-- <el-table  :data="testSymptoms" height="100%" style="width:50vw"> -->
  <el-table
    empty-text="資料包中無此區資料"
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
          <h6>呼吸道症狀</h6>
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
          <p>{{ scope.column.label }}</p>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <h4>Symptom</h4>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{scope.column.property}}</p>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <h3>顯示今天的症狀</h3>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <h2>PhotoDiary</h2>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <div slot="reference" class="name-wrapper">
            <!-- <el-tag size="mini">{{1}}</el-tag>
            <el-tag size="mini">{{2}}</el-tag>-->
            <!-- <h3>{{scope.row.Symptoms }}</h3> -->
            <!-- <h3>{{scope.row.Symptoms[scope.column.property] }}</h3>
            <h3>{{scope.column.property }}</h3>-->

            <template v-if="scope.row.symptom[scope.column.property]==true">
              <el-tag color="#5C6F75" effect="dark" size="small">
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
      if (this.storageData.symptoms[0] == null) {
        return [
          { prop: 0, label: "暫時" },
          { prop: 1, label: "沒有" },
          { prop: 2, label: "資料" }
        ];
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
      colTitleConfigs: this.TargetDateToTableTitle
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