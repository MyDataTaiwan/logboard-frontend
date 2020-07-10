<template>
  <div class="hello">
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
    <div class="Chart">
      <line-chart :chart-data="datacollection" :options="datacollection.options" :chart-options="chartOptions" :styles="myStyles"></line-chart>
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
      // myStyles: {
      //   height: '300px',
      //   width: '100%',
      //   position: 'relative',
      // },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        responsive: true,
        maintainAspectRatio: false
      },
      datacollection: null,
      responsive: true,
      chartOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: true,
            },
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
            },
            gridLines: {
              display: false,
            },
          }],
        },
        legend: {
          display: true,
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label(tooltipItems, data) {
              const { datasetIndex, index } = tooltipItems;
              const value = data.datasets[datasetIndex].data[index];
              if (parseInt(value, 10) > 999) {
                return ` ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
              }
              return ` ${value}`;
            },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        height: 300,
                width: '100%',

        // height: 300,
        // responsive: true,
        // // maintainAspectRatio: false
        // maintainAspectRatio: false,
        // height: 300,
      },

       myStyles: {
        height: '300px',
        width: '100%',
        position: 'relative',
      },
 
        
 
 
      
    };
  },
  mounted() {
    this.fillData();
    // this.renderChart(
    //   {
    //     labels: [
    //       "January",
    //       "February",
    //       "March",
    //       "April",
    //       "May",
    //       "June",
    //       "July"
    //     ],
    //     datasets: [
    //       {
    //         label: "Data One",
    //         backgroundColor: "#FC2525",
    //         data: [40, 39, 10, 40, 39, 80, 40]
    //       },
    //       {
    //         label: "Data Two",
    //         backgroundColor: "#05CBE1",
    //         data: [60, 55, 32, 10, 2, 12, 53]
    //       }
    //     ]
    //   },
    //   { responsive: true, maintainAspectRatio: false }
    // );
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
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
            data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt(),this.getRandomInt(), this.getRandomInt()]
          }
        ]
      };
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
.Chart {
  width: "100%";
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
