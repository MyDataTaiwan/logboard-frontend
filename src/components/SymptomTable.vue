<template>
  <!-- <el-table  :data="testSymptoms" height="100%" style="width:50vw"> -->
  <el-table
    class="table-fixed"
    ref="multipleTable"
    empty-text="資料包中無此區資料"
    :span-method="arraySpanMethod"
    :data="storageTableData"
    height="100%"
    size="small"
    style="width:50%"
  >
    <el-table-column
      style="{ visibility: show1 ? 'hidden' : 'visible' }"
      fixed="left"
      label="症狀"
      width="130px"
    >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <!-- <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{ scope.row.timestamp }}</p>-->
        </el-popover>
        <div slot="reference">
          <!-- <h6>{{ scope.row }}</h6>
          <h6>{{ scope.column }}</h6>-->
          <div class="h7">呼吸道症狀</div>
          <h2>{{ scope.row.name }}</h2>
          <!-- {{$store.state.storageData[0].content_parsed}} -->
        </div>
      </template>
    </el-table-column>
    <el-table-column width="10" prop=" " label=" "></el-table-column>

    <el-table-column
      v-for="{ prop, label } in storageTableTitle"
      :key="prop"
      :prop="prop"
      :label="label"
      width="160"
    >
      <template slot-scope="scope">
        <!-- <h3>{{ scope.row[scope.column.property] }}</h3> -->
        <!-- <h6>{{ scope.column}}</h6> -->

        <!-- <h6>{{ scope.column.property}}</h6>
        <h6>{{ scope.row.id }}</h6>
        <h6>{{ scope.row.symptom[scope.column.property-1] }}</h6>-->
        <!-- <h6>{{ scope.row }}</h6> -->
        <el-popover trigger="hover" placement="top">
          <p>{{ scope.column.label }}</p>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <h4>Symptom</h4>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{scope.column.property}}</p>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <h3>今天的症狀</h3>
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>

          <!-- <h3>顯示今天的症狀</h3>
          <h2>PhotoDiary</h2>
          <img class="fit-picture"  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Grapefruit slice atop a pile of other slices">
          <img class="fit-picture" :src="testThumbnailSets[2][0]" alt="Grapefruit slice atop a pile of other slices">-->
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <div slot="reference" class="name-wrapper">
            <!-- <el-tag size="mini">{{1}}</el-tag>
            <el-tag size="mini">{{2}}</el-tag>-->
            <!-- <h3>{{scope.row.Symptoms }}</h3> -->
            <!-- <h3>{{scope.row.Symptoms[scope.column.property] }}</h3>
            <h3>{{scope.column.property }}</h3>-->

            <template v-if="scope.row.symptom[scope.column.property-1]==true">
              <el-tag color="#5C6F75" effect="dark" size="mini">
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
    msg: String,
  },
  watch: {
    storageTableTitle: function () {
      this.$nextTick(() => {
        this.$refs.multipleTable.doLayout();

        this.$refs.multipleTable.$el.style.width = "95%";
      });
      this.$refs.multipleTable.$el.style.width = "95%";
      console.log("input  storageTableTitle change", this.storageTableTitle);
    },
    storageTableData: function () {
      console.log("input storageTableData change", this.storageTableData);
      this.$refs.tableRef.bodyWrapper.scrollTop = 5;
      this.$nextTick(() => {
        this.$refs.multipleTable.doLayout();

        this.$refs.multipleTable.$el.style.width = "95%";
      });
      this.$refs.multipleTable.$el.style.width = "95%";
    },
    selectTemplate: function () {
      this.$nextTick(() => {
        this.$refs.multipleTable.doLayout();

        this.$refs.multipleTable.$el.style.width = "95%";
      });
      this.$refs.multipleTable.$el.style.width = "95%";
      console.log("selectTemplate change");
    },
    storageData: function () {
      this.$nextTick(() => {
        this.$refs.multipleTable.doLayout();

        this.$refs.multipleTable.$el.style.width = "95%";
      });
      this.$refs.multipleTable.$el.style.width = "95%";
      console.log("input storageData change", this.storageData);
    },
    storageThumbnailSets: function () {
      // this.fillData();
      console.log("storageThumbnailSets change", this.storageThumbnailSets);
    },
    storageSymptomsTemplates: function () {
      console.log(
        "storageSymptomsTemplates change",
        this.storageSymptomsTemplates
      );
    },
  },
  computed: {
    storageThumbnailSets() {
      return this.$store.state.thumbnailList;
    },
    storageSymptomsTemplates() {
      if (this.$store.state.SymptomsTemplates[0] != null) {
        let swp = this.$store.state.selectTemplate;
        var filterDisplayTemplate = this.$store.state.SymptomsTemplates.filter(
          function (item) {
            if (swp == "heartFailure") {
              return item.titile == "heartFailure";
              // return this.$store.state.selectTemplate == "commonCold";
            }
            return item.titile == "commonCold";
          }
        );
        console.log(
          "filter  Template",
          this.$store.state.selectTemplate == "heartFailure"
        );
        ////FIXME storage Symptoms Templates
        console.log("filter  Template", this.$store.state.selectTemplate);
        console.log("filterDisplayTemplate", filterDisplayTemplate[0].symptoms);
        return filterDisplayTemplate[0].symptoms.slice(1);
      } else {
        return null;
      }
      // return this.$store.state.SymptomsTemplates;
    },
    storageTableTitle() {
      // if (this.storageData.symptoms[0] == null) {
      //   // if (this.storageData.date[0] == null) {
      //   // return [
      //   //   { prop: 0, label: "暫時" },
      //   //   { prop: 1, label: "沒有" },
      //   //   { prop: 2, label: "資料" }
      //   // ];
      //   return [];
      // }
      console.log("storeTableTitle", this.$store.state.storeTableTitle);

      return this.$store.state.storeTableTitle;
    },
    storageTableData() {
      console.log("storeTableData", this.$store.state.storeTableData);
      if (this.$store.state.storeTableData == "") {
        console.log(
          "this.$store.state.storeTableData == null",
          this.$store.state.storeTableData
        );
        console.log("filterDisplayTemplate", this.storageSymptomsTemplates);
        return this.storageSymptomsTemplates;
        // return this.testDB;
      } else {
        return this.$store.state.storeTableData;
      }
      // return this.$store.state.storeTableData;
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
    },
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
    doResize() {
      setTimeout(function () {
        //手動觸發窗口resize事件
        if (document.createEvent) {
          var event = document.createEvent("HTMLEvents");
          event.initEvent("resize", true, true);
          window.dispatchEvent(event);
        } else if (document.createEventObject) {
          window.fireEvent("onresize");
        }
      }, 100);
    },
    DateToTableTitle(date) {
      let TableTitle = [];
      console.log("TableTitleA", date);
      if (date != null) {
        date.map((index) => {
          // console.log(Object.keys(index));
          TableTitle.push({
            prop: Object.keys(index),
            label: Object.keys(index),
          });
        });
      }
      console.log("TableTitle", Object.keys(TableTitle));
      return TableTitle;
    },
  },
  data() {
    return {
      colTitleConfigs: this.TargetDateToTableTitle,
    };
  },
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
.el-table__fixed-right {
  height: 100% !important;
}
.h3 {
  /* font: 1em sans-serif; */
  /* font-size: 16pt !important; */
  font: large !important;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.h7 {
  font-size: 8px !important ;
  font-family: "Montserrat", sans-serif;
  /* font-weight: 900; */
  font-weight: bold;
  word-wrap: break-word;
  white-space: nowrap;
  flex-wrap: nowrap !important;
  /* Medium */
}
.el-table th.gutter {
  display: table-cell !important;
}
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
.el-table th {
  display: table-cell !important;
}

body .el-table th.gutter {
  display: table-cell !important;
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