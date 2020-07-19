<template>
  <div id="CAMP">
    <h1>實習營健康表</h1>
    {{uuid}}
    <!-- <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch> -->
    <div id="CAMPList">
      <!-- <HealthForm v-for="item in card" :key="item.date" v-bind:data="item" /> -->
      <HealthForm v-for="item in cardInfo" :key="item.date" v-bind:data="item" />

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
      </ul> -->
    </div>
  </div>
</template>
<script>
import HealthForm from "../components/HealthForm.vue";

export default {
  name: "CAMP",
  components: {
    HealthForm
  },
  beforeMount() {
    this.axios
      .get(
        // "https://logboard-dia.numbersprotocol.io/api/v1/records/?uuid=e1318a3c-079b-4975-b5c9-73bf439b6031"
        "https://logboard-dia.numbersprotocol.io/api/v1/records/?uuid=" +
          this.uuid
      )
      .then(response =>
        // this.info = response.data.results[0]
        {
          //  symptomList.filter(symptomList => ["fever", "contacts", "abroad"].indexOf(symptomList.name) > -1)
          console.log(response.data.results[0]);
          response.data.results.map(index => {
            let symptomList = index.content.symptoms.list;
            symptomList.filter(symptomList => symptomList.name == "fever");
            let info = {
              data: symptomList.filter(
                symptomList =>
                  ["fever", "contacts", "abroad"].indexOf(symptomList.name) > -1
              ), // data: index.content.symptoms.list,
              date: new Date(index.timestamp * 1000),
              bt:
                index.content.bodyTemperature +
                index.content.bodyTemperatureUnit
            };
            this.cardInfo.push(info);
          });
        }
      )
      .catch(function(error) {
        // 请求失败处理
        console.log(error);
      });
    // response.data.results[0].content.symptoms.list[13]
  },
  data() {
    return {
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
              ignore: false
            },
            {
              name: "contacts",
              present: true,
              note: "活者的不少",
              ignore: false
            },
            {
              name: "fever",
              present: false,
              note: "浴火重生",
              ignore: false
            }
          ]
        },
        {
          date: "2020/06/28",
          bt: 37.7,
          data: [
            {
              name: "abroad",
              present: true,
              note: "天龍國",
              ignore: false
            },
            {
              name: "contacts",
              present: true,
              note: "活者的沒有",
              ignore: false
            },
            {
              name: "fever",
              present: false,
              note: "浴火重生",
              ignore: false
            }
          ]
        }
      ]
    };
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
  }
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
