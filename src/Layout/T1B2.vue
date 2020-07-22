<template>
  <div id="T1B2" style="width: 100%;">
    <div id="Top10">
      <LogChart msg="LogChart Plugins" />
    </div>
    <div id="Buttom10">
      <div id="Buttom5R">
        <div class="LogBar">
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
  data() {
    return {};
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

  display: flex;
  flex: 1;
  -webkit-align-items: center;
  /* -webkit-justify-content: center; */
  align-items: center;
  /* justify-content: center; */
}
.LogBar {
  /* height: 30px; */
  padding: 15px  0px  10px 15px;
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
