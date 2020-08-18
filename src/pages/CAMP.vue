<template>
  <div id="CAMP">
    <h1>健康聲明表</h1>
    {{uuid}}
    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
    <div id="HealthCardList">
      <!-- <HealthCard v-for="item in card" :key="item.date" v-bind:data="item" /> -->
      <!-- <HealthCard v-for="item in card" :key="item.date" v-bind:data="item" /> -->
      <HealthCard v-for="item in CardData" :key="item.date" v-bind:data="item" />
      <!-- storageChartLabels{{storageChartLabels}}
      <p>porcessing{{porcessing}}</p>
      <p>card{{card}}</p>-->
      <!-- <p>storageChartLabels{{this.storageChartLabels[0]}}</p>
      <p>bodyTemperature{{this.storageChartDatasets.bodyTemperature[0]}}</p>
      <p>storageChartLabels{{this.storageChartLabels[0]}}</p>
      <p>bodyTemperastorageCardDatature{{this.storageChartDatasets.bodyTemperature[0]}}</p>
      <p>storageCardData{{this.storageCardData[0].name}}</p>
      <p>storageCardData{{this.storageCardData[0]}}</p>
      <p>symptom{{this.storageCardData[0].symptom[0]}}</p>
      <p>symptom{{this.storageCardData[0].symptom[0]}}</p>
      <p>storagePhotoSets{{this.storagePhotoSets[0]}}</p> -->

      <!-- {{this.storageChartDatasets.bodyTemperature[0]}}
      {{this.storageChartDatasets}}-->

      <!-- {{this.storageCardData[0].symptom[1] }}
     {{this.storageCardData[1].symptom[1] }}
     {{this.storageCardData[2].symptom[1] }}
      {{this.storageCardData[3].symptom[1] }}-->
      <!-- storageData{{storageData}}
      storageCardTitle{{storageCardTitle}}
      storageCardData{{storageCardData}}
      selectTemplate{{selectTemplate}}
      storageThumbnailSets{{storageThumbnailSets}}-->
    </div>

    <div id="CAMPList">
      <!-- <HealthForm v-for="item in card" :key="item.date" v-bind:data="item" /> -->
      <HealthForm v-for="items in card" :key="items.date" v-bind:data="items" />

      <!-- <HealthForm data=card[0] /> -->
      <!-- <li v-for="item in items" :key="item.message">index: ${ index }, name: ${ item.name }</li> -->
      <!-- <HealthForm date="2020/06/27" bt="36" msg="6Welcome to Your Vue.js Home" /> -->
      <!-- id
      {{uuid}}
      id-->
      <!-- <HealthForm
          v-for="item in items"
          :key="item.message"
          v-bind:date="item"
          bt="items"
          msg="items"
      />-->

      <!-- <ul id="example-3">
        <li v-for="item in card" :key="item.date">{{ item.date }}</li>
      </ul>
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">{{ item.message }}</li>
      </ul>-->
    </div>
  </div>
</template>
<script>
import HealthForm from "../components/HealthForm.vue";
import HealthCard from "../components/HealthCard.vue";

export default {
  name: "CAMP",
  components: {
    HealthForm,
    HealthCard,
  },
  created() {
    if (this.selectTemplate == "healthDeclaration") {
      console.log(
        "input selectTemplate ==  healthDeclaration",
        this.selectTemplate
      );

      // this.GetAPI("this-week");
    }

    // this.$store.commit("updateSelectTemplate",'healthDeclaration');
  },
  methods: {
    // GetAPI(mode, start_date, end_date) {
    //   // eslint-disable-next-line no-constant-condition
    //   if (mode == "Summary") {
    //     this.$store.dispatch("fetchSummaryApi", {
    //       // start_date: "2020-07-15",
    //       // end_date: "2020-07-24"
    //       start_date: start_date,
    //       end_date: end_date,
    //     });
    //   } else if (mode == "today") {
    //     this.$store.dispatch("fetchToDaysApi");
    //     this.$store.dispatch("fetchRawDataApi");
    //   } else {
    //     this.$store.dispatch("fetchDaysApi", {
    //       // range: "this-week"
    //       range: mode,
    //     });
    //   }
    // },
  },
  watch: {
    storageChartLabels: function () {
      console.log("storageChartLabels change", this.storageChartLabels);
    },
    storageCardTitle: function () {
      console.log("input  storageCardTitle change", this.storageCardTitle);
    },
    storageCardData: function () {
      // alert("做完")
      // this.$store.commit("ChangisLoading", false);
      console.log("input storageCardData change", this.storageCardData);
      // console.log("aaa", this.storageCardData[goAbroad][0]);
      // console.log("aaa", this.storageCardData[fever][0]);
      // console.log("aaa", this.storageCardData[0].symptom[1]);
      // console.log("aaa", this.storageCardData[1].symptom[1]);
      // console.log("aaa", this.storageCardData[2].symptom[1]);
      // console.log("aaa", this.storageCardData[3].symptom[1]);

      // console.log("aaa", this.storageCardData[contactWithHighTravelRisk][0]);
      // console.log("aaa", this.storageCardData[0]);
      // console.log("aaa", this.storageCardData[0].symptom[0]);

      // console.log("aaa", this.storageCardData[fever][0]);
      // console.log("aaa", this.storageCardData[contactWithQuarantined][0]);
      // console.log("aaa", this.storageCardData[contactWithHighTravelRisk][0]);
    },
    selectTemplate: function () {
      console.log("selectTemplate change");
    },
    storageData: function () {
      console.log("input storageData change", this.storageData);
      // this.porcessing(this.storageData);
      this.porcessing();
    },
    storageThumbnailSets: function () {
      // this.fillData();
      console.log("storageThumbnailSets change", this.storageThumbnailSets);
    },
    storagePhotoSets: function () {
      // this.fillData();
      console.log("storagePhotoSets change", this.storagePhotoSets);
    },
    porcessing: function () {
      // this.fillData();
      console.log("porcessing change", this.porcessing);
    },
    storageChartDatasets: function () {
      // console.log("bodyTemperature change", this.storageChartDatasets);
      // console.log("bodyTemperature change", this.storageChartDatasets);
      // console.log(
      //   "bodyTemperature change",
      //   this.storageChartDatasets.bodyTemperature
      // );
      console.log(
        "bodyTemperature change",
        this.storageChartDatasets.bodyTemperature[0]
      );
      // console.log(
      //   "bodyTemperature change",
      //   this.storageChartDatasets.bodyTemperature[0][0]
      // );
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
    storagePhotoSets() {
      return this.$store.state.photoList;
    },
    storageCardTitle() {
      console.log("storeCardTitle", this.$store.state.storeTableTitle);
      return this.$store.state.storeTableTitle;
    },
    storageCardData() {
      console.log("storeCardData", this.$store.state.storeTableData);
      return this.$store.state.storeTableData;
    },
    storageData() {
      return this.$store.state.storeData;
    },
    selectTemplate() {
      // this.$store.dispatch("fetchApi", {
      //   name: "records/?uid="
      //   // uid: "4b539876-d395-4e01-b987-8ae8ea754b0e"
      // });
      return this.$store.state.selectTemplate;
    },
    porcessing() {
     if(this.storageData.date[0]!=null){
        let DB = this.storageData;
      console.log("porcesData in ", DB);
      console.log("porcesData in date ", DB.date[0]);
      console.log("porcesData in symptom ", DB.symptoms[0]);
      console.log("porcesData in symptom ", DB.symptoms[0].name);
      console.log("porcesData in symptom ", DB.symptoms[0].symptom[0]);
      console.log("porcesData in vital_signs ", DB.vital_signs.bodyTemperature[0]);
      console.log("porcesData in thumbnail_list ", DB.photo_list[0]);

      //       date: (...)
      // id_list: Array(8)
      // photo_list: (...)
      // symptoms: (...)
      // thumbnail_list: (...)
      // vital_signs: (...)
      let porcesData = [];
      // console.log("porcesData in ", tsData, porcesData);
      for (let i = 0; i < DB.date.length; i++) {
        console.log("porcesData index ", i);
        // console.log("porcesData Template ", Template);
        porcesData.push({
          date: DB.date[i],
          bt: DB.vital_signs.bodyTemperature[i],
          symptom: [
            {
              name: "goAbroad",
              present: DB.symptoms[0].symptom[i],
            },
            {
              name: "fever",
              present: DB.symptoms[1].symptom[i],
            },
            {
              name: "contactWithQuarantined",
              present: DB.symptoms[2].symptom[i],
            },
            {
              name: "contactWithHighTravelRisk",
              present: DB.symptoms[3].symptom[i],
            },
          ],
          thumbnail_list: DB.photo_list[0]
          // [
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/dddd3af73aa0df8fe26479c3544faf6a8da9fc5a55815e7a3470288cb67.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=D2ZDCWF6vSXZZz0OZ5DohLUqjZU%3D&Expires=1597756545",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/0a61608302d87bfa5a7959263d901541ee198f3bacf41351d798a4f3481.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=9oHn%2B54kRtl0FOHpGsKF74U4Dz4%3D&Expires=1597756545",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/6d0b2a6dac3ebf496a90a16a0369223e39be7adb422b77802a514c7c1de.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=2wK4%2BP4CmRm1QkJ3Mkhs1sW6uX0%3D&Expires=1597756545",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/93cfffa65fec6dd2a9df05ae5df747a783aa4de385f21879abb0909241b.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=i%2BqQzqhkOfKVO3luU%2FyswbUSW9M%3D&Expires=1597756545",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/a7990faea271b2085b2a9d694017c6a436c02d76bde9b09fb913101f7bc.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=tNT6aJqfTxeBzfA0i%2B%2B4moKdNFM%3D&Expires=1597756545",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/e2ba5afb1128e042e07dcf521c7cc46663321a56ee5938ad3f3241f82cb.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=7JZNnEUkbJmzlwJ5nPSnKiXi%2F%2Fw%3D&Expires=1597756546",
          //   "https://logboard-dev.s3.amazonaws.com/39e8e6ad-ea65-4685-bfc4-454a6f809006/56eedecdfc5276c5c5b9e58f738a5e68ce848a861395f7595c54a88c24c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=yz11ELRzOyyC09IFAWzJtG55JVk%3D&Expires=1597756546",
          // ],
        });
      }
      console.log("porcesData", porcesData);
      return ()=>{
        this.CardData=porcesData
          alert("做完")
      this.$store.commit("ChangisLoading", false);
        };
     }
     else{
      return alert("錯誤啊");

     }
    },
  },

  mounted() {
    // this.axios
    //   .get("https://www.runoob.com/try/ajax/json_demo.json")
    //   .then(response =>
    //     // this.info = response
    //    {
    //       console.log(response.data.results[0])
    //     console.log("HAHAHAHAHHA")
    //    }
    //   )
    //   .catch(function(error) {
    //     // 请求失败处理
    //     console.log(error);
    //   });
  },
  beforeMount() {
    // this.axios
    //   .get(
    //     // "https://logboard-dia.numbersprotocol.io/api/v1/records/?uuid=e1318a3c-079b-4975-b5c9-73bf439b6031"
    //     "https://logboard-dia.numbersprotocol.io/api/v1/records/?uuid=" +
    //       this.uuid
    //   )
    //   .then((response) =>
    //     // this.info = response.data.results[0]
    //     {
    //       //  symptomList.filter(symptomList => ["fever", "contacts", "abroad"].indexOf(symptomList.name) > -1)
    //       console.log(response.data.results[0]);
    //       response.data.results.map((index) => {
    //         let symptomList = index.content.symptoms.list;
    //         symptomList.filter((symptomList) => symptomList.name == "fever");
    //         let info = {
    //           data: symptomList.filter(
    //             (symptomList) =>
    //               ["fever", "contacts", "abroad"].indexOf(symptomList.name) > -1
    //           ), // data: index.content.symptoms.list,
    //           date: new Date(index.timestamp * 1000),
    //           bt:
    //             index.content.bodyTemperature +
    //             index.content.bodyTemperatureUnit,
    //         };
    //         this.cardInfo.push(info);
    //       });
    //     }
    //   )
    //   .catch(function (error) {
    //     // 请求失败处理
    //     console.log(error);
    //   });
    // // response.data.results[0].content.symptoms.list[13]
  },
  data() {
    return {
      CardData:[],
      tsData: [
        "2020-08-10",
        "2020-08-11",
        "2020-08-12",
        "2020-08-13",
        "2020-08-14",
        "2020-08-15",
        "2020-08-16",
        "2020-08-17",
      ],

      cardEXP: {
        date: "2020/06/27",
        bt: 36.7,
        symptoms: [
          {
            name: "goAbroad",
            present: true,
          },
          {
            name: "fever",
            present: true,
          },
          {
            name: "contactWithQuarantined",
            present: false,
          },
          {
            name: "contactWithHighTravelRisk",
            present: false,
          },
        ],
        thumbnail_list: [
          "https://logboard-dev.s3.amazonaws.com/cache/e6/1f/e61fc444c7c8739657dfa28b7a545d0c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=wpow7EL5117%2FVcUu6S3mLKiYxjc%3D&Expires=1597751445",
          "https://logboard-dev.s3.amazonaws.com/cache/6a/00/6a00c57c5831cfc996a3d0d8492c2e3c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=oLUVm58GXh7xypB6ATbsF1iVhG0%3D&Expires=1597751445",
          "https://logboard-dev.s3.amazonaws.com/cache/d7/3b/d73b0c22e3a53e80158ea08e7e7b1133.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=0rQ%2FWoqpuD%2FeTd8yO4DAEJ5nsgQ%3D&Expires=1597751445",
        ],
      },
      cardTemplate: {
        date: "2020/06/27",
        bt: 36.7,
        symptoms: [
          {
            name: "goAbroad",
            present: true,
          },
          {
            name: "fever",
            present: true,
          },
          {
            name: "contactWithQuarantined",
            present: false,
          },
          {
            name: "contactWithHighTravelRisk",
            present: false,
          },
        ],
        thumbnail_list: [
          "https://logboard-dev.s3.amazonaws.com/cache/e6/1f/e61fc444c7c8739657dfa28b7a545d0c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=wpow7EL5117%2FVcUu6S3mLKiYxjc%3D&Expires=1597751445",
          "https://logboard-dev.s3.amazonaws.com/cache/6a/00/6a00c57c5831cfc996a3d0d8492c2e3c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=oLUVm58GXh7xypB6ATbsF1iVhG0%3D&Expires=1597751445",
          "https://logboard-dev.s3.amazonaws.com/cache/d7/3b/d73b0c22e3a53e80158ea08e7e7b1133.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=0rQ%2FWoqpuD%2FeTd8yO4DAEJ5nsgQ%3D&Expires=1597751445",
        ],
      },

      value: true,
      uuid: this.$route.params.id,
      isShow: false,
      items: [{ message: "Foo" }, { message: "Bar" }],
      cardInfo: [],
      card: [
        {
          date: "2020/06/27",
          bt: 36.7,
          data: [
            {
              name: "abroad",
              present: true,
              note: "台龍國",
              ignore: false,
            },
            {
              name: "contacts",
              present: true,
              note: "活者的不少",
              ignore: false,
            },
            {
              name: "fever",
              present: false,
              note: "浴火重生",
              ignore: false,
            },
          ],
        },
        {
          date: "2020/06/28",
          bt: 37.7,
          data: [
            {
              name: "abroad",
              present: true,
              note: "天龍國",
              ignore: false,
            },
            {
              name: "contacts",
              present: true,
              note: "活者的沒有",
              ignore: false,
            },
            {
              name: "fever",
              present: false,
              note: "浴火重生",
              ignore: false,
            },
          ],
        },
      ],
      one: {
        id_list: [[27388], [27399, 27400]],
        date: ["2020-08-09", "2020-08-14"],
        vital_signs: {
          bodyTemperature: [null, 38.2],
        },
        symptoms: [
          {
            name: "goAbroad",
            symptom: [false, null],
          },
          {
            name: "fever",
            symptom: [true, null],
          },
          {
            name: "contactWithQuarantined",
            symptom: [true, null],
          },
          {
            name: "contactWithHighTravelRisk",
            symptom: [false, null],
          },
        ],
        photo_list: [
          [null],
          [
            "https://logboard-dev.s3.amazonaws.com/a4a6fb94-ae85-4c79-b52e-4de34d0e15c6/ad1dd7c92c81afee776a7faf2cd713beb062095cbc85eeeb3cae973001d.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=mFPvsHavgozQGLhdvtv64p%2FWp1Y%3D&Expires=1597392172",
            "https://logboard-dev.s3.amazonaws.com/a4a6fb94-ae85-4c79-b52e-4de34d0e15c6/2a1a670efa8f01724f9e140f54146ac6bfe942f0da81cb368d69c8968d6.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=qj7hvi67tA4wlHUwFDT7DIeDKks%3D&Expires=1597392172",
          ],
        ],
        thumbnail_list: [
          [null],
          [
            "https://logboard-dev.s3.amazonaws.com/cache/ae/39/ae39759d77ee06747692793660ee39ce.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=VSejQxxuE%2Bzkae43D0sZbHnQeRg%3D&Expires=1597392172",
            [
              "https://logboard-dev.s3.amazonaws.com/cache/38/a8/38a87153860b4f4fdadab532f0306c9c.jpg?AWSAccessKeyId=AKIATMMDCJ5FLONYQYE2&Signature=es2ErPx8HCpktDI96zCGjVvyvx8%3D&Expires=1597392172",
            ],
          ],
        ],
      },
    };
  },
};
</script>

<style>
h1 {
  color: #fff;
  font-size: 30pt;
}
.Title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px 10px 0px;
}
.BTitle {
  font-size: 14pt;
}
.DateTitle {
  font-size: 14pt;
}
.Doc {
  font-size: 10pt;
}
.subTitle {
  /* background: #fff; */
  /* border-top: #fff; */
  color: #fff;
  /* border-width: 1pt; */
  border-top: 2px #fff solid;
  border-bottom: 2px #fff solid;
  margin: 10px 0px 10px 0px;
  padding: 5px 0px 5px 0px;
  font-size: 14pt;
}
#CAMPList {
  display: none;
  /* color: #fff; */
  text-align: left;
  /* background: #646464; */
  /* display: flex; */
  flex-direction: column;
  /* flex: 1; */
  /* margin: 20px;
  padding: 10px;
  height: 60vh; */
  /* border-radius: 5%; */
}
#HealthCardList {
  /* color: #fff; */
  text-align: left;
  /* background: #646464; */
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;

  /* margin: 20px;
  padding: 10px;
  height: 60vh; */
  /* border-radius: 5%; */
}
#CAMP {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
  overflow: scroll;
  /* height: 200%; */
  flex: 1;
}
</style>
