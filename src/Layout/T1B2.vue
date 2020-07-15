<template>
  <div id="T1B2" style="width: 100%;">
    <div id="Top10">
      <!-- sasasasasasasasasasa -->
      <LogChart msg="LogChart Plugins"/>
      <!-- <img alt="LogBoard logo" src="../assets/Log.png" width="100%" style="  padding-right: 10%;" /> -->
    </div>
    <div id="Buttom10">
      <div id="Buttom5R">
        <!-- asdsasasasasasasasasasa
        <h4>T1B2</h4> -->
        <!-- <Calendar msg="Calendar"/> -->
                <CalendarSweet style="    width: 100% !important;" />

      </div>
      <div id="Buttom5L">
        <!-- asdsasasasasasasasasasa
        <h4>T1B2</h4> -->
         <template>
    <el-table
      :data="tableData"
      style="width: 100%">

      <el-table-column
        prop="name"
        label="症狀"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="時間">
      </el-table-column>
    </el-table>
  </template>
      </div>
    </div>
  </div>
  <!-- <div style="flex-grow:2">item 3</div> -->
</template>

<script>
import LogChart from '../components/LogChart.vue'

// import Calendar from '../components/Calendar.vue'
import CalendarSweet from '../components/CalendarSweet.vue'




export default {
  name: "T1B2",
  components: {
    LogChart,
    // Calendar,
    CalendarSweet
  },
  data() {
    return {
        tableData: [{
            date: '2016-05-02',
            name: '鼻塞',
            
          }, {
            date: '2016-05-04',
            name: '鼻塞',
          }, {
            date: '2016-05-01',
            name: '發燒',
          }, {
            date: '2016-05-03',
            name: '發燒',
          }]
    }
    }
};
</script>

<style>
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
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#Buttom5R {
  height: 350px;
  background: #fff;
  margin-right: 10px;

  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
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
