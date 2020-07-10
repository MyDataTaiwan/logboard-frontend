<template>
  <div id="ChartView" style="width: 100%;">
    <h3>{{ msg }}</h3>
    <div id="ChartSelectBar" class="SelectBar">
      <img class="SelectBarTitle" alt="bar" src="../assets/icon/Log.svg" width="5%" />
      <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
      <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
      <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
    </div>
    <!-- <img alt="LogBoard logo" src="../assets/chart.png" width="100%"     :width="1000"
    :height="200"style="  padding-right: 10%;" />-->
    <div id="Chart">
      <line-chart
        :chart-data="datacollection"
        :options="{responsive: true, maintainAspectRatio: false}"
      ></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  name: "LogChart",
  props: {
    msg: String
  },
  // props: ['dataCollection'],

  components: {
    LineChart
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      datacollection: null,
      responsive: true
      // myStyles: {
      //   height: "300px",
      //   width: "100%",
      //   position: "relative"
      // }
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      (this.datacollection = {
        labels: [
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt(),
          this.getRandomInt()
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()]
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt(),
              this.getRandomInt()
            ]
          }
        ]
      }),
        { responsive: true, maintainAspectRatio: false };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  },
  computed: {
    // myStyles() {
    //   return {
    //     responsive: true,
    //     // height: `${this.height}px`,
    //     width: `${this.width}px`,
    //     position: "relative"
    //   };
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ChartView {
  flex: 1;
  /* width: "100"; */
  background: "#000";
}
#Chart {
  width: "100%";
  background: "#f87979";
}
.SelectBarTitle {
  margin: 10px 30px 10px 30px;
}
.SelectBar {
  display: flex;
  flex: 1;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  justify-content: flex-start;
}
.SelectItmes {
  /* flex: 1 1 5%; */
  /* width: 5%; */
  margin: 0px 5px 20px 5px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
