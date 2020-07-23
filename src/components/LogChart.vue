<template>
  <div id="ChartView" style="width: 100%;">
    <!-- <h3>{{ msg }}</h3> -->
    <div id="ChartSelectBar" class="SelectBar">
      <img class="SelectBarTitle" alt="bar" src="../assets/icon/Log.svg" width="5%" />
      <div class="SelectItmes">口體溫</div>
      <div class="SelectItmes">口體溫</div>
      <div class="SelectItmes">口體溫</div>
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
  watch: {
    storageChartLabels: function() {
      console.log("storageChartLabels change", this.storageChartLabels);
      this.fillData();
    },
    storageChartDatasets: function() {
      this.fillData();
      console.log("storageChartDatasets change", this.storageChartDatasets);
    }
  },
  computed: {
    storageChartLabels() {
      return this.$store.state.storeChartLabels;
    },
    storageChartDatasets() {
      return this.$store.state.storeChartDatasets;
    }
  },
  data() {
    return {
      colors:["#FF0000","#FFBA07","#FAFF12","#A4FB17","#177EF8","#1400FF","#CF15ED","#FF03B8","#f87979","#117979","#f1F979",],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            // label: function(tooltipItem, data) {
            //     var label = data.datasets[tooltipItem.datasetIndex].label || '';
            //     if (label) {
            //         label += ': ';
            //     }
            //     label += Math.round(tooltipItem.yLabel * 100) / 100;
            //     return label+"AHAHAHA";
            // }
          }
        }
      },
      datacollection: null,
      responsive: true,
      DB: {
        id: [5726, 5725, 5730, 5731],
        timestamp: [
          "2020-07-23T00:46:01Z",
          "2020-07-23T01:28:41Z",
          "2020-07-23T02:33:02Z",
          "2020-07-23T03:00:00Z"
        ],
        vital_signs: {
          SBP: [73.42, 197.19, 175.44, 89.01],
          DBP: [95.44, 76.64, 29.55, 60.39],
          heartbeat: [180.03, 72.71, 181.61, 74.78],
          bloodSugar: [767.96, 276.46, 957.19, 434.79],
          weight: [88.41, 20.49, 235.23, 111.76],
          urineVolume: [1579.75, 1037.58, 646.84, 275.07]
        },
        symptoms: []
      }

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
    setting(color, data,name) {
      let temp = [];
      data.map(index => {
        if (index == null) {
          temp.push("nan");
        } else {
          temp.push(index);
        }
      });
      console.log("setting", temp);
      return {
        label: name,
        borderColor: color,
        fill: false,
        lineTension: 0,
        spanGaps: true,
        data: temp
        // label: name,
        // // backgroundColor: "#00000000",
        // borderColor: "#AF0F0F",
        // fill: false,
        // lineTension: 0,
        // spanGaps: true,
        // // data: [this.getRandomInt(), this.getRandomInt()]
        // data: [84, 94, 104, "nan", 84, 114, 91, 87]
      };
    },
    setMaker() {
      let outputSet = [];
      let list = Object.keys(this.storageChartDatasets);
      console.log("list", list, list[0]);
      for (let i = 0; i < list.length; i++) {
        outputSet.push(
          this.setting(this.colors[i], this.storageChartDatasets[list[i]],list[i])
        );
      }
      console.log("outputSet",outputSet)
      return outputSet;
    },
    fillData() {
      (this.datacollection = {
        labels: this.storageChartLabels,
        datasets: this.setMaker()
        // datasets: [
        //   this.setting("#3F39FF", this.storageChartDatasets["SBP"]),
        //   this.setting("#AF0F0F", this.storageChartDatasets["SBP"])
        // ]
        // [
        //   {
        //     label: "test",
        //     // backgroundColor: "#00000000",
        //     borderColor: "#3F39FF",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //     // data: [38.26, 36.53, 34.43]
        //     data: this.DB.vital_signs["urineVolume"]
        //   }
        // ]
        // labels: [
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt(),
        //   this.getRandomInt()
        // ],
        // datasets: [
        //   {
        //     label: "test",
        //     // backgroundColor: "#00000000",
        //     borderColor: "#3F39FF",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //     // data: [38.26, 36.53, 34.43]
        //     data: this.DB.vital_signs["urineVolume"]
        //   },

        //   {
        //     label: "體溫",
        //     // backgroundColor: "#00000000",
        //     borderColor: "#3F39FF",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //     data: [35, 35.5, 36, 35, 37, 34, 38, 36]
        //   },
        //   {
        //     label: "血壓",
        //     // backgroundColor: "#00000000",
        //     borderColor: "#AF0F0F",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //     data: [84, 94, 104, "nan", 84, 114, 91, 87]
        //   },
        //   {
        //     label: "Data One",
        //     // backgroundColor: "#00000000",
        //     borderColor: "#f87979",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //     data: [84, 22, 35, 38, 22, 91, 47]
        //   },
        //   {
        //     label: "Data One",
        //     fill: false,
        //     lineTension: 0,
        //     spanGaps: true,
        //     borderColor: "#f1F979",
        //     data: [62, 11, "nan", 94, "nan", 22, 91, 47]

        //     // data: [this.getRandomInt(), this.getRandomInt()]
        //   },
        //   {
        //     label: "Data One",
        //     fill: false,
        //     lineTension: 0,
        //     borderColor: "#f87979","#117979","#f1F979",
        //     data: [this.getRandomInt(), this.getRandomInt()]
        //   },
        //   {
        //     label: "Data One",
        //     fill: false,
        //     lineTension: 0,
        //     borderColor: "#0F0979",
        //     data: [this.getRandomInt(), this.getRandomInt()]
        //   },
        //   {
        //     label: "Data One",
        //     fill: false,
        //     lineTension: 0,
        //     borderColor: "#f879FF",
        //     data: [this.getRandomInt(), this.getRandomInt()]
        //   },
        //   {
        //     label: "Data One",
        //     fill: false,
        //     lineTension: 0,
        //     borderColor: "#12356F",
        //     data: [
        //       this.getRandomInt(),
        //       this.getRandomInt(),
        //       this.getRandomInt(),
        //       this.getRandomInt(),
        //       this.getRandomInt(),
        //       this.getRandomInt()
        //     ]
        //   }
        // ]
      }),
        { responsive: true, maintainAspectRatio: false };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
  // computed: {
  //   // myStyles() {
  //   //   return {
  //   //     responsive: true,
  //   //     // height: `${this.height}px`,
  //   //     width: `${this.width}px`,
  //   //     position: "relative"
  //   //   };
  //   // }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ChartView {
  flex: 1;
  /* width: "100"; */
  background: "#000";
  color: rgba(255, 0, 0, 0.5);
}
#Chart {
  width: "100%";
  background: "#00000000";
  color: rgba(255, 0, 0, 0.5);
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
