<template >
  <div id="T1B2" style="width: 100%;">
    <div id="Top10">
      <LogChart msg="LogChart Plugins" />
    </div>
    <div id="Buttom10">
      <div id="Buttom5R">
        <div class="LogBar">
          <div style="width:1px;height:1px" slot="reference"></div>
          <el-popover
            style="overflow: scroll;"
            placement="bottom-end"
            width="200px"
            v-model="$store.state.displayPopUp"
            trigger="manual"
          >
            <el-header style="text-align: right; font-size: 12px">
              <!-- <img class="PhotoDiary" style=" height: 50px;" alt="bar" :src="storageRaw_Data.photo" /> -->
              <!-- <el-button size="mini" @click="visible=!visible">關閉</el-button> -->
              <div>{{ storagePopUp_id }}</div>

              <el-button size="mini" @click="off">關閉</el-button>
            </el-header>
            <!-- {{storageRaw_Data}} -->

            <el-collapse style="overflow:auto;  height:250px;" accordion>
              <div v-for="item in storageRaw_Data" :key="item">
                <el-collapse-item :title="item.id+':'+item.timestamp">
                  <div style="display: flex;flex: 1;flex-direction: row;">
                    <!-- <h6>id : {{item.id}}</h6> -->
                    <div style="display: flex;flex: 1;flex-direction: column;">
                      <h6>owner : {{item.owner}}</h6>
                      <!-- <h6>thumbnail : {{item.thumbnail}}</h6> -->
                      <a :href="item.thumbnail">thumbnail</a>
                      <h6>transaction_hash : {{item.transaction_hash}}</h6>
                      <h6>transaction_hash_validated : {{item.transaction_hash_validated}}</h6>
                      <h6>content_hash_verified : {{item.content_hash_verified}}</h6>
                      <h6>content_parsed : {{item.content_parsed}}</h6>,
                      <h6>template_name : {{item.template_name}}</h6>:
                      <!-- <h6>timestamp : {{item.timestamp}}</h6> -->
                      <h6>proof : {{item.proof}}</h6>
                      <!-- <h6>fields : {{item.fields}}</h6> -->
                    </div>
                    <img class="fit-picture" :src="item.photo" alt="No Photo in這裡" />
                  </div>

                  <el-table style="width:100%" height="200px" :data="item.fields">
                    <div v-for="subitem in Object.keys(item.fields[0])" :key="subitem">
                      {{subitem}}
                      <el-table-column :property="subitem" :label="subitem"></el-table-column>
                    </div>
                  </el-table>
                  <!-- "icon": "pencil-outline",
                  "name": "note",
                  "type": "string",
                  "value": "This is a fake data",
                  "dataClass": "note",
                  "dataGroup": "note",
                  "isKeyField": false,
                  "defaultValue": null-->
                  <!-- <h6>photo : {{item.photo}}</h6> -->
                  <a :href="item.photo">photo</a>
                </el-collapse-item>
              </div>
              <el-collapse-item title="raw">
                <div v-for="item in storageRaw_Data" :key="item">
                  <template>
                    <h6>id : {{item.id}}</h6>
                    <h6>thumbnail : {{item.thumbnail}}</h6>
                    <h6>transaction_hash : {{item.transaction_hash}}</h6>
                    <h6>transaction_hash_validated : {{item.transaction_hash_validated}}</h6>
                    <h6>content_hash_verified : {{item.content_hash_verified}}</h6>
                    <h6>content_parsed : {{item.content_parsed}}</h6>,
                    <h6>template_name : {{item.template_name}}</h6>:
                    <h6>timestamp : {{item.timestamp}}</h6>
                    <h6>proof : {{item.proof}}</h6>
                    <h6>timestamp : {{item.timestamp}}</h6>
                    <h6>fields}}</h6>
                    <h6>photo : {{item.photo}}</h6>
                    <h6>owner : {{item.owner}}</h6>
                  </template>
                </div>
              </el-collapse-item>
              <!-- 
              <el-collapse-item>
                <template slot="title">
                  一致性 Consistency
                  <i class="header-icon el-icon-info"></i>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
              </el-collapse-item>
              <el-collapse-item title="反馈 Feedback">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
              </el-collapse-item>-->
            </el-collapse>

            <!-- <el-tree :data="test" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->

            <!-- <el-table style="width:200px" height="200px" :data="DataTable">
              <el-table-column property="name" label="name"></el-table-column>
              <el-table-column property="value" label="value"></el-table-column>
              <el-table-column property="valueUnit" label="Unit"></el-table-column>
            </el-table>-->
          </el-popover>
          <!-- <button @click="visible=!visible">open</button> -->
          <img class="Logo" alt="bar" src="../assets/icon/Calendar.svg" />
        </div>

        <CalendarSweet style="    width: 100% !important;" />
      </div>
      <div id="Buttom5L">
        <div class="LogBar">
          <img class="Logo" alt="bar" src="../assets/icon/Symptom.svg" />
        </div>
        <SymptomTable style="width: 100%;" msg="SymptomTable" />
      </div>
    </div>
  </div>
</template>

<script>
import LogChart from "../components/LogChart.vue";
import SymptomTable from "../components/SymptomTable.vue";
import CalendarSweet from "../components/CalendarSweet.vue";

export default {
  name: "T1B2",
  components: {
    LogChart,
    SymptomTable,
    CalendarSweet
  },
  created() {},
  watch: {
    storageRaw_Data: function() {
      console.log("storageRaw_Data change", this.storageRaw_Data);
      this.$store.commit("ChangisLoading", false);

      // this.fillData();
      // this.visible = truestorageRaw_Data change;
    },
    // storageRaw_fields: function() {
    //   console.log("storageRaw_fields change", this.storageRaw_fields);
    //   // this.fillData();
    // },
    // storageRaw_photo: function() {
    //   console.log("storageRaw_photo change", this.storageRaw_photo);
    //   // this.fillData();
    // }
    storagePopUp_id: function() {
      console.log("storagePopUp_id change", this.storagePopUp_id);
      this.$store.dispatch("fetchRawDataApi");
      // this.fillData();
    }
  },
  computed: {
    storageRaw_Data() {
      console.log("storageRaw_Data change", this.$store.state.storeRAWData);
      return this.$store.state.storeRAWData;
    },
    // storageRaw_fields() {
    //   return this.$store.state.storeRAWData.fields;
    // },
    // storageRaw_photo() {
    //   return this.$store.state.storeRAWData.photo;
    // },
    storagePopUp_id() {
      return this.$store.state.PopUpidList;
    }
  },
  methods: {
    off() {
      // this.$store.commit("ChangDisplayPopUp", false);
      this.$store.commit("ChangDisplayPopUp", { display: false, index: -1 });
    }
  },
  data() {
    return {
      visible: this.$store.state.displayPopUp,
      DataTable: [{}, {}, {}],
      test: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
@media screen and (max-width: 567px) {
  #Buttom5L {
    height: 350px;
    margin-left: 0px !important;
    margin-top: 10px;
  }
  #Buttom5R {
    height: 350px;
    max-width: 500px;
    margin-right: 0px !important;
    margin-top: 10px;
  }
}
#PhotoDiary {
  height: 50px;
  width: 50px;
}
#T1B2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  overflow: scroll;
  flex-direction: column;
  /* background: #ff2345; */
}
#Buttom5L {
  height: 350px;
  background: #fff;
  margin-left: 10px;
  display: flex;
  flex: 1;
  min-width: 60vw;
  max-width: 90vw;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
@media screen and (max-width: 800px) {
  #Buttom5L {
    min-width: 80vw !important;
  }
}
#Buttom5R {
  height: 350px;
  background: #fff;
  margin-right: 10px;
  flex-direction: column;
  flex: 1;
  min-width: 10vw;
  display: flex;

  -webkit-align-items: center;
  /* -webkit-justify-content: center; */
  align-items: center;
  /* justify-content: center; */
}
.LogBar {
  /* height: 30px; */
  padding: 15px 0px 10px 15px;
  display: flex;
  flex-direction: row;
  /* align-items: center;
  justify-content: start; */
  width: 100%;
}
.Logo {
  height: "30px";
}
#Top10 {
  background: #fff;
  margin: 0px 20px 10px 20px;
  display: flex;
  flex: 1;
  /* flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center; */
}
#Buttom10 {
  /* background: #fff; */
  margin: 10px 20px 10px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>


