<template>
  <div id="ChartView" style="width: 100%;">
    <!-- <h3>{{ msg }}</h3> -->
    <!-- <div id="ChartSelectBar" class="SelectBar">
      <img class="SelectBarTitle" alt="bar" src="../assets/icon/Log.svg" width="5%" />
      <div class="SelectItmes">口體溫</div>
    </div>-->
    <!-- <img alt="LogBoard logo" src="../assets/chart.png" width="100%"     :width="1000"
    :height="200"style="  padding-right: 10%;" />-->
    <!-- <div>{{ selectedData }}</div>
    <div>{{ $store.state.displayPopUp }}</div>-->

    <div id="Chart">
      <!-- <el-button>click 激活</el-button> -->

      <!-- <line-chart
        :chart-data="datacollection"
        :options="{responsive: true, maintainAspectRatio: false}"
      ></line-chart>-->
      <!-- {{datacollection}} -->
      <line-chart @on-receive="update" :chart-data="datacollection" :options="options"></line-chart>

      <!-- <button @click="fillData()">Randomize</button> -->
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";
// Hot Fixme

var testRawData = [];
var testIDSets = [];
var testtorageLabels = [];
var testThumbnailSets = [];
export default {
  name: "LogChart",
  props: {
    msg: String,
  },
  // props: ['dataCollection'],

  components: {
    LineChart,
  },
  watch: {
    storageChartLabels: function () {
      console.log("storageChartLabels change", this.storageChartLabels);
      this.fillData();
    },
    storageChartDatasets: function () {
      this.fillData();
      console.log("storageChartDatasets change", this.storageChartDatasets);
    },
    storageThumbnailSets: function () {
      // this.fillData();
      console.log("storageThumbnailSets change", this.storageThumbnailSets);
    },
    storageIDSets: function () {
      // this.fillData();
      console.log("storageIDSets change", this.storageIDSets);
    },
    raw_data: function () {
      console.log("raw_data change", this.raw_data);
    },
  },
  computed: {
    storageChartLabels() {
      return this.$store.state.storeChartLabels;
    },
    storageChartDatasets() {
      return this.$store.state.storeChartDatasets;
    },
    storageThumbnailSets() {
      return this.$store.state.thumbnailList;
    },
    storageIDSets() {
      return this.$store.state.storeDataID;
    },
    // raw_data() {
    //   return this.raw_data;
    // }
  },
  data() {
    return {
      selectedData: {},
      labels: ["January", "February"],

      colors: [
        "#5C6F75",
        "#EC8EDA",
        "#CFFFA0",
        "#DAADA9",
        "#AF8A31",
        "#0E376F",
        "#F99F00",
        "#7512FF",
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
        "#f1F979",
      ],
      message: "PhotoDiary",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onClick: this.onClick, //////影響症狀切換

        // onClick: function(evt, array) {
        //     if (array.length != 0) {
        //         var position = array[0]._index;
        //         var activeElement = this.tooltip._data.datasets[0].data[position]
        //         console.log(activeElement);
        //     } else {
        //         console.log("You selected the background!");
        //     }
        // },

        responsiveAnimationDuration: 0,
        // responsive: true,
        // maintainAspectRatio: false,
        // tooltips: {
        //   callbacks: {
        //     label: function(tooltipItem) {
        //       return "$" + Number(tooltipItem.yLabel) + " and so worth it !";
        //     }
        //   }
        // },
        point: {
          pointStyle: "cross",
          radius: 15,
        },

        scales: {
          yAxes: [
            {
              stacked: false, //折線圖可以配置為 疊放 通過更改y軸上的設置來啟用面積圖。 堆疊式 區域圖可用於顯示一個數據趨勢如何由許多較小的部分組成。
              ticks: {
                 display: false,
                beginAtZero: true,
                // callback: function (value, index, values) {
                //   return "";
                // },
              },
              gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)",
              },
              angleLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              stacked: false, //折線圖可以配置為 疊放 通過更改y軸上的設置來啟用面積圖。 堆疊式 區域圖可用於顯示一個數據趨勢如何由許多較小的部分組成。
              ticks: {
                // beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
        },
        legend: {
          display: true,
        },
        tooltips: {
          enabled: false,
          // enabled: true,
          mode: "index",
          position: "nearest",
          custom: customTooltips,
        },

        // tooltips: {
        //   // enabled: true,
        //   mode: "index",
        //   position: "nearest",
        //   //Set the name of the custom function here
        //   //custom:
        //   callbacks: {
        //     label: (tooltipItems, data) => {
        //       console.log(this);
        //       console.log(data);

        //       // return this.getImg()

        //       return tooltipItems.yLabel + "$" + this.message;
        //     },
        //     afterLabel: function(tooltipItem, data) {
        //       var dataset = data["datasets"][0];
        //       var percent = Math.round(100) + dataset;
        //       return "(" + percent + "%)";
        //     }
        //     // custom:this.getImg()
        //   },
        //   // callbacks: {
        //   //   label: function(tooltipItem, data) {
        //   //     var value = data.datasets[0].data[tooltipItem.index];
        //   //     console.log(value);
        //   //   }
        //   // },
        //   backgroundColor: "#FFF",
        //   titleFontSize: 16,
        //   titleFontColor: "#0066ff",
        //   bodyFontColor: "#000",
        //   bodyFontSize: 14,
        //   displayColors: false
        // },
        title: {
          display: true,
          text: "logboard-frontend",
          position: "bottom",
        },
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true
        //       }
        //     }
        //   ]
        // }
      },
      datacollection: null,
      responsive: true,
      DB: {
        id: [5726, 5725, 5730, 5731],
        timestamp: [
          "2020-07-23T00:46:01Z",
          "2020-07-23T01:28:41Z",
          "2020-07-23T02:33:02Z",
          "2020-07-23T03:00:00Z",
        ],
        vital_signs: {
          SBP: [73.42, 197.19, 175.44, 89.01],
          DBP: [95.44, 76.64, 29.55, 60.39],
          heartbeat: [180.03, 72.71, 181.61, 74.78],
          bloodSugar: [767.96, 276.46, 957.19, 434.79],
          weight: [88.41, 20.49, 235.23, 111.76],
          urineVolume: [1579.75, 1037.58, 646.84, 275.07],
        },
        symptoms: [],
      },

      // myStyles: {
      //   height: "300px",
      //   width: "100%",
      //   position: "relative"
      // }
      raw_data: [],
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    onClick(event, array) {
      console.log("我被點了 B", event, array);

      if (array.length != 0) {
        // var position = array[0]._index;
        // var activeElement = this.tooltip._data.datasets[0].data[position];
        // console.log(activeElement);

        const item = array[0];
        console.log("我被點了 B2", item, event, array);

        // this.$store.commit("ChangDisplayPopUp", {
        //   display: true,
        //   index: array[0]._index,
        //   idList: this.storageIDSets[array[0]._index],
        // });

        console.log("我被點了", event, array[0]._index);
        this.selectedData = array[0]._index;
        this.$emit("on-receive", {
          index: item._index,
          backgroundColor: item._view.backgroundColor,
          value: this.values[item._index],
        });
      } else {
        console.log("You selected the background!");
      }
    },

    handle(point, event) {
      const item = event[0];
      console.log("我被點了 Ａ", point, event);

      // this.$store.commit("ChangDisplayPopUp", {
      //   display: true,
      //   index: event[0]._index,
      //   idList: this.storageIDSets[event[0]._index],
      // });

      console.log("我被點了", point, event[0]._index);
      console.log("我被點了 event[0]._index", event[0]._index);
      this.selectedData = event[0]._index;

      console.log("我被點了 on-_index", item._index);
      console.log("我被點了 on-backgroundColor", item._view.backgroundColor);
      console.log("我被點了 on-values_index", this.values[item._index]);
      console.log("我被點了 on-values", this.values);
      console.log(
        "我被點了 on-receive",
        item._index,
        item._view.backgroundColor,
        this.values[item._index],
        this.values
      );
      this.$emit("on-receive", {
        index: item._index,
        backgroundColor: item._view.backgroundColor,
        value: this.values[item._index],
      });
      // this.$store.commit("updateUserId", this.$route.params.id);
    }, ////捕捉點擊
    update(data) {
      this.selectedData = data;
      console.log("我被點了 selectedData", this.selectedData);
    }, ////捕捉點擊
    getImg() {
      return `<img class="fit-picture"
     src="/media/examples/grapefruit-slice-332-332.jpg"
     alt="Grapefruit slice atop a pile of other slices">`;
    },
    setting(color, data, name) {
      let temp = [];
      data.map((index) => {
        if (index == null) {
          temp.push(null);
        } else {
          temp.push(index);
        }
      });
      let db = this.normalLines(temp);
      this.raw_data = temp;
      // testRawData = temp;
      testRawData = this.storageChartDatasets;
      testtorageLabels = this.storageChartLabels;
      testIDSets = this.storageIDSets;
      testThumbnailSets = this.storageThumbnailSets;
      console.log("setting testtorageLabels", testtorageLabels);
      console.log("setting testIDSets", testIDSets);
      console.log("setting raw_data", this.raw_data);

      console.log("setting", db);

      return {
        label: name,
        borderColor: color,
        fill: false,
        lineTension: 0,
        spanGaps: true,
        data: db,
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
            // this.normalLines(this.storageChartDatasets[list[i]]),
            list[i]
          )
        );
      }
      console.log("outputSet", outputSet);

      // ////add Photo data list
      // let PhotoDataList = [];
      // this.storageChartDatasets[list[0]].map(index => {
      //   if (index == null) {
      //     PhotoDataList.push("nan");
      //   } else {
      //     PhotoDataList.push(1);
      //   }
      // });
      // console.log("add chart PhotoDataList",PhotoDataList);

      //    outputSet.push(
      //       {
      //   label: "PhotoDataList",
      //   borderColor: "#F0F",
      //   fill: false,
      //   lineTension: 0,
      //   spanGaps: true,
      //   data: [1,1,0,1,1,1]
      // }
      //   );
      // // outputSet.push(PhotoDataList);
      // console.log("add  chart PhotoDataList end ", outputSet);

      return outputSet;
      // let photoDiary = [];
      // for (let i = 0; i < list.length; i++) {
      //   photoDiary.push({
      //     id: i,
      //     type: "photoDiary"
      //   });
      // }
      // return outputSet.push(
      //   ///產生photo
      //   this.setting(this.colors[0], photoDiary, list[0])
      // );
    },
    normalLines(data) {
      console.log("normalLines_input", data);

      let MAX = Math.max(...data);
      let MIN = Math.min(...data);
      let output = [];
      let r = MAX - MIN;
      console.log(
        "normalLines_cale",
        r,
        MAX,
        MIN,
        Math.max(...data),
        Math.min(...data)
      );

      let t = r / 100;
      console.log("normalLines", r, t, output, data.length);
      data.map((index) => {
        if (index == null) {
          output.push("nan");
        } else {
          if ((r == 0) | (MAX == MIN)) {
            output.push(index);
          }
          let temp = index - MIN;
          console.log("normalLines", index, temp, temp / t);
          // if (r == 0) {
          //   output.push(100);
          // } else {
          //   output.push(temp / t);
          // }
          output.push(temp / t);
        }
      });
      console.log("normalLines_output", output);
      return output;
    },
    fillData() {
      (this.datacollection = {
        labels: this.storageChartLabels,
        datasets: this.setMaker(),
      }),
        { responsive: true, maintainAspectRatio: false };
      this.$store.commit("ChangisLoading", false);
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
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

var rawData = function (raw) {
  return raw;
};

const customTooltips = function (tooltip) {
  // Tooltip Element
  let tooltipEl = document.getElementById("chartjs-tooltip");
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = "<table></table>";
    this._chart.canvas.parentNode.appendChild(tooltipEl);
  }
  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }
  // Set caret Position
  tooltipEl.classList.remove("above", "below", "no-transform");
  if (tooltip.yAlign) {
    tooltipEl.classList.add(tooltip.yAlign);
  } else {
    tooltipEl.classList.add("no-transform");
  }
  function getBody(bodyItem) {
    return bodyItem.lines;
  }
  // Set Text
  if (tooltip.body) {
    const titleLines = tooltip.title || [];
    // const bodyLines = tooltip.body.map(getBody);
    const bodyLines = tooltip.body.map(getBody);
    const bodyLinesTitle = tooltip.title;

    console.log("bodyLines", bodyLines);
    console.log("bodyLinesTitle", bodyLinesTitle);

    let innerVUE = `
  <div slot="reference" style="width: 500px;">
    <template>
    <el-table>
          <el-table-column width="150" label="日期"></el-table-column>
          <el-table-column width="100" label="姓名"></el-table-column>
          <el-table-column width="300" label="地址"></el-table-column>
        </el-table>
        <template>
  </div>
        `;
    let innerHtml = "<thead>";
    let titleID = null; ///預計要取得的ID
    titleLines.forEach(function (title) {
      titleID = testtorageLabels.indexOf(title); ///取得的ID
      innerHtml +=
        "<tr><th style='text-align: left; ' >" +
        // title +
        // `   <img class="fit-picture"
        //         src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        //            alt="Grapefruit slice atop a pile of other slices">` +
        // "</th></tr>";
        title +
        // "| id:" +
        // testIDSets[titleID];
        // `   <img class="fit-picture"
        //        src="img/LogBoardLOGO.56c0f5e3.svg
        //           alt="bar">` +
        "</th></tr>";
    });
    innerHtml +=
      "</thead><tbody><tr><td  style='text-align: left; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #FFFFFF; '>Symptom</td></tr>";
    console.log("HTML bodyLines", bodyLines);
    console.log("HTML raw_data", rawData);
    console.log("HTML testRawData", testRawData);
    console.log("HTML testRawData name", testRawData[0]);
    console.log("HTML titleID", [titleID]);

    bodyLines.forEach(function (body, i) {
      const colors = tooltip.labelColors[i];
      let style = "background:" + colors.backgroundColor;
      style += "; border-color:" + colors.borderColor;
      style += "; border-width: 2px";
      let swp = body[0];
      console.log("bodybodybodybody", body);

      let temp = swp.split(":");
      let name = temp[0];
      console.log("HTML testRawData name", testRawData[name]);
      console.log("HTML testRawData name titleID", testRawData[name][titleID]);

      console.log("HTML temp", name);
      console.log("DADADADDA", temp);

      const span =
        '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
      // innerHtml += "<tr><td style='text-align: left;' >" + span + body + "</td></tr>";
      innerHtml +=
        "<tr><td style='text-align: left;' >" +
        span +
        name +
        " : " +
        testRawData[name][titleID] +
        "</td></tr>";
      // Hot Fixme
    });
    //testIDSets[i][0]

    // console.log(testIDSets[titleID][0]);
    // console.log("testIDSets", testIDSets[titleID][0], titleID);
    console.log("testThumbnailSets", testThumbnailSets[titleID][0]);

    if (testThumbnailSets[titleID][0] == null) {
      innerHtml +=
        "<tr><td style='text-align: left; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #FFFFFF; '>NOTE</td></tr>" +
        "NO Photo" +
        "</tbody>";
    } else {
      innerHtml +=
        "<tr><td style='text-align: left; border-top: 1px solid #FFFFFF; border-bottom: 1px solid #FFFFFF; '>NOTE</td></tr>" +
        '<img class="fit-picture" src="' +
        testThumbnailSets[titleID][0] +
        '" alt="Grapefruit slice atop a pile of other slices">' +
        "</tbody>";
    }
    // innerHtml += "</tbody>";

    const tableRoot = tooltipEl.querySelector("table");
    // tableRoot.innerHTML = innerHtml;
    console.log(innerVUE);
    tableRoot.innerHTML = innerHtml;
  }
  const positionY = this._chart.canvas.offsetTop;
  const positionX = this._chart.canvas.offsetLeft;
  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;

  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
  tooltipEl.style.fontSize = tooltip.bodyFontSize + "px";
  tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
  tooltipEl.style.padding = tooltip.yPadding + "px " + tooltip.xPadding + "px";
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add "scoped"會使 chartjs custom-tooltip innerHtml 樣式失效 請三思或是重組-->

<style >
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
  /* margin: 40px 0 0; */
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
  /* position: absolute; */
  z-index: 9999;
  position: fixed !important;
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
  /* position: absolute; */
  position: fixed !important;
  width: 10px;
  height: 10px;
  margin-right: 10px;
}
</style>
