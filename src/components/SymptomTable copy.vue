<template>
  <el-table :data="tableData" border height="100%" style="width: 50vw">
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
          <h6>{{ scope.row.name }}</h6>
          <h3>{{ scope.row.name }}</h3>
        </div>
      </template>
    </el-table-column>
    <!-- <el-table-column label="症狀">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>症狀: {{ scope.row.name }}</p>
          <p>時間: {{ scope.row.timestamp }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="mini">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column> -->
    <el-table-column prop="value0" label="2016-05-01">
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
    </el-table-column>
    <el-table-column prop="value1" label="2016-05-01"></el-table-column>
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
    <el-table-column prop="value6" label="2016-05-01"></el-table-column>
  </el-table>
</template>

<script>
import { mapState, mapActions } from "vuex"; //註冊 action 和 state

export default {
  name: "SymptomTable",
  props: {
    msg: String
  },
  data() {
    return {
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
          value6: "true"
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
          value6: "true"
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
  },
  computed: {
    ...mapState(["loading", "DB", "message"]),
    formTitle() {
      return this.editedIndex === -1 ? "新增訊息" : "編輯訊息";
    }
  },
  created() {
    this.$store.dispatch("fetchApi", {
      name: "records/?uid=",
      uid: "947a40df-d548-4dba-bc12-c3b2b006d274"
    });
  },
  methods: {
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
      name: "records/?uid=",
      uid: "947a40df-d548-4dba-bc12-c3b2b006d274"
    })
    //     showMessage() {
    //       this.alertMessage = true;z
    //       setTimeout(() => {
    //         this.alertMessage = false;
    //       }, 3000);
    //     }
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
