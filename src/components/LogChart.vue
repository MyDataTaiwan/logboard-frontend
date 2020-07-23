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
      <el-popover placement="top" width="400" trigger="click">
        <el-table>
          <el-table-column width="150" label="日期"></el-table-column>
          <el-table-column width="100" label="姓名"></el-table-column>
          <el-table-column width="300" label="地址"></el-table-column>
        </el-table>
        <!-- <el-button>click 激活</el-button> -->

        <!-- <line-chart
        :chart-data="datacollection"
        :options="{responsive: true, maintainAspectRatio: false}"
        ></line-chart>-->
        <line-chart slot="reference" :chart-data="datacollection" :options="options"></line-chart>
      </el-popover>
      <!-- <button @click="fillData()">Randomize</button> -->
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
      labels: ["January", "February"],

      colors: [
        "#FF0000",
        "#FFBA07",
        "#FAFF12",
        "#A4FB17",
        "#177EF8",
        "#1400FF",
        "#CF15ED",
        "#FF03B8",
        "#f87979",
        "#117979",
        "#f1F979"
      ],
      message: "PhotoDiary",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // responsive: true,
        // maintainAspectRatio: false,
        // tooltips: {
        //   callbacks: {
        //     label: function(tooltipItem) {
        //       return "$" + Number(tooltipItem.yLabel) + " and so worth it !";
        //     }
        //   }
        // },

        // tooltips: {
        //   // キャンバスのツールチップを無効化します
        //   enabled: true,
        //   custom: function(tooltipModel) {
        //     // ツールチップ要素
        //     // var tooltipEl = document.getElementById("chartjs-tooltip");
        //     var tooltipEl = document.getElementById("chartjs-tooltip");
        //     // 最初の表示時に要素を生成。
        //     if (!tooltipEl) {
        //       tooltipEl = document.createElement("div");
        //       tooltipEl.id = "chartjs-tooltip";
        //       tooltipEl.innerHTML = "<table></table>";
        //       this._chart.canvas.parentNode.appendChild(tooltipEl);
        //     }
        //     // ツールチップが無ければ非表示。
        //     if (tooltipModel.opacity === 0) {
        //       tooltipEl.style.opacity = 0;
        //       return;
        //     }
        //     // キャレット位置をセット。
        //     tooltipEl.classList.remove("above", "below", "no-transform");
        //     if (tooltipModel.yAlign) {
        //       tooltipEl.classList.add(tooltipModel.yAlign);
        //     } else {
        //       tooltipEl.classList.add("no-transform");
        //     }
        //     function getBody(bodyItem) {
        //       return bodyItem.lines;
        //     }
        //     // テキストをセット。
        //     if (tooltipModel.body) {
        //       var titleLines = tooltipModel.title || [];
        //       var bodyLines = tooltipModel.body.map(getBody);

        //       var innerHtml = "<thead>";

        //       titleLines.forEach(function(title) {
        //         innerHtml +=
        //           "<tr><th>" +
        //           title +
        //           `<img class="fit-picture"
        //           src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        //           alt="Grapefruit slice atop a pile of other slices">` +
        //           "</th></tr>";
        //       });
        //       innerHtml += "</thead><tbody>";

        //       bodyLines.forEach(function(body, i) {
        //         var colors = tooltipModel.labelColors[i];
        //         var style = "background:" + colors.backgroundColor;
        //         style += "; border-color:" + colors.borderColor;
        //         style += "; border-width: 2px";
        //         var span =
        //           '<span class="chartjs-tooltip-key" style="' +
        //           style +
        //           '"></span>';
        //         innerHtml += "<tr><td>" + span + body + "</td></tr>";
        //       });
        //       innerHtml += "</tbody>";
        //       var tableRoot = tooltipEl.querySelector("table");
        //       tableRoot.innerHTML = innerHtml;
        //     }
        //     // `this`はツールチップ全体です。
        //     var positionY = this._chart.canvas.offsetTop;
        //     var positionX = this._chart.canvas.offsetLeft;

        //     // 表示、位置、フォントスタイル指定します。
        //     tooltipEl.style.opacity = 1;
        //     tooltipEl.style.left = positionX + tooltipModel.caretX + "px";
        //     tooltipEl.style.top = positionY + tooltipModel.caretY + "px";
        //     tooltipEl.style.fontFamily = tooltipModel._fontFamily;
        //     tooltipEl.style.fontSize = tooltipModel.fontSize;
        //     tooltipEl.style.fontStyle = tooltipModel._fontStyle;
        //     tooltipEl.style.padding =
        //       tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
        //   }
        // },

        tooltips: {
          // enabled: true,
          mode: "index",
          position: "nearest",
          //Set the name of the custom function here
          //custom:
          callbacks: {
            label: (tooltipItems, data) => {
              console.log(this);
              console.log(data);

              // return this.getImg()

              return tooltipItems.yLabel + "$" + this.message;
            },
            afterLabel: function(tooltipItem, data) {
              var dataset = data["datasets"][0];
              var percent = Math.round(100) + dataset;
              return "(" + percent + "%)";
            }
            // custom:this.getImg()
          },
          // callbacks: {
          //   label: function(tooltipItem, data) {
          //     var value = data.datasets[0].data[tooltipItem.index];
          //     console.log(value);
          //   }
          // },
          backgroundColor: "#FFF",
          titleFontSize: 16,
          titleFontColor: "#0066ff",
          bodyFontColor: "#000",
          bodyFontSize: 14,
          displayColors: false
        },
        title: {
          display: true,
          text: "Ice Cream Truck",
          position: "bottom"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
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
    getImg() {
      return `<img class="fit-picture"
     src="/media/examples/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">`;
    },
    setting(color, data, name) {
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
          this.setting(
            this.colors[i],
            this.storageChartDatasets[list[i]],
            list[i]
          )
        );
      }
      console.log("outputSet", outputSet);
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
#chartjs-tooltip {
  opacity: 1;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 3px;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
  pointer-events: none;
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

.chartjs-tooltip-key {
  display: inline-block;
  position: absolute;

  width: 10px;
  height: 10px;
  margin-right: 10px;
}
</style>
