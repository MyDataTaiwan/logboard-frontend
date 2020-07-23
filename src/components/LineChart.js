import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import Chart from 'chart.js'
// 2. Import the `generateChart()` method to create the vue component.
// Chart.defaults.global.defaultFontColor = 'dodgerblue';
Chart.defaults.global.pointHitDetectionRadius = 30;
Chart.defaults.global.elements.point.radius = 10
Chart.defaults.global.elements.point.hitRadius = 20
Chart.defaults.global.elements.point.hoverBorderWidth = 4
// Chart.defaults.global.defaultFontSize = 16;
export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  // data() {
  //   return {
  //     height: 300,
  //     width:1500
  //   };
  // },
  computed: {
    // options () {
    //   return {
    //     // scales: {
    //     //   yAxes: [{
    //     //     ticks: {
    //     //       callback: (value, ) => {
    //     //         return `£ ${value} ${this.currency}`;
    //     //       },
    //     //     },
    //     //   }],
    //     // },
    //     tooltips: {
    //       enabled: true,
    //       callbacks: {
    //         label: ((tooltipItems) => {
    //           console.log(this)
    //           return tooltipItems.yLabel + '£' + this.message
    //         })
    //       }
    //     }
    //   }
    // }
  },
  mounted () {
//     this.Chart.defaults.global.defaultFontColor = 'dodgerblue';
// this.Chart.defaults.global.defaultFontSize = 16;

    // this.chartData 在 mixin 创建.
    // 如果你需要替换 options , 请创建本地的 options 对象
    this.renderChart(this.chartData, this.options)
  }
}
