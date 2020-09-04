<template>
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
    <el-table-column width="10" prop=" " label=" "></el-table-column>
    <el-table-column
      style="{ visibility: show1 ? 'hidden' : 'visible' }"
      fixed="left"
      label="症狀"
      width="130px"
    >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top"></el-popover>
        <div slot="reference">
          <div class="h7">呼吸道症狀</div>
          <!-- {{storageTableData}} -->
          <h2>{{ scope.row.name }}</h2>
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
          <div style=" bordiver-top: 2px solid #000; border-bottom: 2px solid #000; "></div>
          <div slot="reference" class="name-wrapper">
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
  created() {
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
      console.log("selectTemplate change", this.selectTemplate);
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
      if (this.$store.state.selectTemplateSet[0] != null) {
        let swp = this.selectTemplate;
        let filterDisplayTemplate = this.$store.state.selectTemplateSet.filter(
          (item) => {
            if (swp == "heartFailure") {
              return item.titile == "heartFailure";
            } else if (swp == "commonCold") {
              return item.titile == "commonCold";
            }
            // return this.storageTableData;
          }
        );
        ////FIXME storage Symptoms Templates
        console.log("filter  Template", this.selectTemplate);
        console.log(
          "filterDisplayTemplate",
          swp,
          filterDisplayTemplate[0].symptoms.slice(1)
        );
        return filterDisplayTemplate[0].symptoms.slice(1);
      } else {
        return null;
      }
      // return this.$store.state.SymptomsTemplates;
    },
    storageTableTitle() {
      console.log("storeTableTitle", this.$store.state.storeTableTitle);

      return this.$store.state.storeTableTitle;
    },
    storageTableData() {
      if (this.$store.state.storeTableData == "") {
        console.log("is eork 01 A if");
        console.log(
          "this.$store.state.storeTableData == ''",
          this.$store.state.storeTableData
        );
        return this.storageSymptomsTemplates;
        // return this.testDB;
      } else {
        console.log("is eork 01 A else");
        console.log(
          "  this.$store.state.storeTableData",
          this.$store.state.storeTableData
        );
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
  methods: {
    ChangDisplayTemplate(payload) {
      console.log("fetch Templates");
      console.log(this.$store.state.SymptomsTemplates);
      if (this.$store.state.SymptomsTemplates[0] != null) {
        console.log("fetch Templates_200", payload);
        console.log(
          "SymptomsTemplates0",
          this.$store.state.SymptomsTemplates[0].titile
        );
        console.log(
          "SymptomsTemplates0",
          this.$store.state.SymptomsTemplates[0].symptoms
        );
        console.log(
          "SymptomsTemplates1",
          this.$store.state.SymptomsTemplates[1].titile
        );
        console.log(
          "SymptomsTemplates1",
          this.$store.state.SymptomsTemplates[1].symptoms
        );
        var filterDisplayTemplate = this.$store.state.SymptomsTemplates.filter(
          function (item) {
            return item.titile == "commonCold"; // 取得大於五歲的
          }
        );
        console.log("fetch filterDisplayTemplate", filterDisplayTemplate);
        return filterDisplayTemplate;
      }
      console.log("fetch Templates_end");
    },
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
      testDB: [
        {
          name: "sneezing",
        },
        {
          name: "sneezing1",
        },
        {
          name: "sneezing2",
        },
      ],
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
