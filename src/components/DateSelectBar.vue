<template>
  <div id="DateSelectBar">
    <!-- <img alt="bar" src="../assets/bar.png" width="100%" /> -->
    <!-- <h1>{{ msg }}</h1> -->
    <div class="SelectBarStar">
      <img id="SelectBarTitle" alt="bar" src="../assets/icon/Date.svg" width="8%" />
      <!-- <div class="DateSelectItmes">2020/05/09 ~ 2020/05/13</div> -->
      <div class="DateSelectItmes">
        <!-- <el-date-picker
          style="height:28px !important;border:none;"
          size="small"
          v-model="dateValue"
          type="daterange"
          start-placeholder="開始日期"
          end-placeholder="結束日期"
          clearable="true"
          @change="handleChange"
          :default-time="['12:00:00']"
          format="yyyy 年 MM 月 dd 日"
          value-format="timestamp"
        ></el-date-picker>-->
        <el-date-picker
          style="height:28px !important;border:none;"
          size="small"
          v-model="dateValue"
          type="daterange"
          start-placeholder="開始日期"
          end-placeholder="結束日期"
          clearable="true"
          @change="handleChange"
          :default-time="['12:00:00']"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
      <!-- <button class="DateSelectItmes" v-on:click="counter += 1">Add 1</button> -->
      <div id="btnList">
        <div id="btnSubList">
          <button @click="GetAPI('this-month')" class="SelectItmes">This Month</button>
          <button @click="GetAPI('two-weeks')" class="SelectItmes">Two Weeks</button>
          <button @click="GetAPI('this-week')" class="SelectItmes">This Week</button>
          <button @click="GetAPI('today')" class="SelectItmes">Today</button>
        </div>
        <div style="flex: 1;" />
        <el-select id="EndItmes" v-model="selectValue" :placeholder="options[0].label">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateSelectBar",
  props: {
    msg: String,
  },
  watch: {
    // selectTemplateList: function() {
    //   console.log("selectTemplateList change");
    // },
    // Goto(index) {
    //   if (this.$route.name !== index) {
    //     this.$router.push({
    //       name: index,
    //     });
    //   }
    // },
    selectValue: function () {
      ////確保 症狀包選擇後可以顯示在對應的組件頁面
      this.$store.commit("updateSelectTemplate", this.selectValue);
      this.GetAPI("this-week");
      if (this.selectValue == "healthDeclaration") {
        if (this.$route.name !== "camps") {
          // this.GetAPI("this-week");
          this.$router.push({
            name: "camps",
          });
        } else {
          // this.GetAPI("this-week");
          // this.GetAPI("this-week");
          console.log("no change");
        }
      } else {
        if (this.$route.name !== "dashboard") {
          this.$router.push({
            name: "dashboard",
          });
          // this.GetAPI("this-week");
        } else {
          // this.GetAPI("this-week");
          console.log("selectValue change" + this.selectValue);
        }
      }
    },
    options: function () {
      console.log("options change",this.options);
      // this.$store.dispatch("ChangDisplayTemplate",this.options)
    },
    selectDateformatStart: function () {
      console.log(
        "selectDateformatStart change back",
        this.selectDateformatStart
      );
    },
    selectDateformatEnd: function () {
      console.log("selectDateformatEnd change back", this.selectDateformatEnd);
    },
    selectDateformat: function () {
      this.dateValue = [
        new Date(this.selectDateformatStart),
        new Date(this.selectDateformatEnd),
      ];
      console.log(
        "selectDateformat change back",
        new Date(this.selectDateformatStart)
      );
      console.log(
        "selectDateformat change back",
        this.selectDateformat,
        this.dateValue
      );
    },
    //     dateValue(){
    //             console.log("dateValue change", this.dateValue);
    // Date.UTC(2020-08-09)
    //     },
  },
  created() {
  
    this.GetAPI("this-week");
    
  },
  computed: {
    // selectTemplateList() {
    //   return this.$store.state.templateList;
    // },
    //  dateValue(){
    //    return [
    //      this.selectDateformatStart,this.selectDateformatEnd
    //   ]
    //  },
    selectDateformat() {
      return this.$store.state.selectDateformat;
    },
    selectDateformatStart() {
      return this.$store.state.selectDateformat[0];
    },
    selectDateformatEnd() {
      return this.$store.state.selectDateformat[1];
    },
    options() {
      // let optionsList = [];
      let optionsList = [
        {
          value: "heartFailure",
          label: "心衰竭",
        },
        {
          value: "commonCold",
          label: "普通感冒",
        },
        {
          value: "healthDeclaration",
          label: "健康聲明書",
        },
      ];

      // this.selectTemplateList.map(index => {
      //   if (index == "heartFailure") {
      //       optionsList.push({
      //       value: "heartFailure",
      //       label: "心衰竭"
      //     });
      //   } else if (index == "commonCold") {
      //     optionsList.push({
      //       value: "commonCold",
      //       label: "COVID-19"
      //     });
      //   }
      //   // else if (index == "烤鴨") {
      //   //    optionsList.push({
      //   //     value: "烤鴨",
      //   //     label: "烤鴨三吃"
      //   //   });
      //   // }
      //   else {
      //      optionsList.push({
      //       value: index,
      //       label: index
      //     });
      //   }
      //   //烤鴨,commonCold,heartFailure
      // });
      return optionsList;
    },
  },

  data() {
    return {
      // value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      // dateValue: [
      //   new Date(2000, 10, 10, 10, 10),
      //   new Date(2000, 10, 11, 10, 10),
      // ],
      dateValue: [],

      value2: "",
      // options: [
      //   {
      //     value: "選項1",
      //     label: "COVID-19"
      //   },
      //   {
      //     value: "選項2",
      //     label: "心衰竭"
      //   },
      //   {
      //     value: "選項3",
      //     label: "糖尿病"
      //   },
      //   {
      //     value: "選項4",
      //     label: "烤鸭"
      //   }
      // ],
      selectValue: "",
    };
  },
  methods: {
    GetAPI(mode, start_date, end_date) {
      // eslint-disable-next-line no-constant-condition
      if (mode == "Summary") {
        console.log("fetchSummaryApi input date", start_date, end_date); // -> 1
        //FIXME 在1~10號會出現%20
        // if (start_date.match("%20") != null) {
        //   console.log("%20 有", start_date); // -> 1
        //   start_date = start_date.replace("%20", "");
        //   end_date = end_date.replace("%20", "");
        //   this.$store.dispatch("fetchSummaryApi", {
        //     // start_date: "2020-07-15",
        //     // end_date: "2020-07-24"String()
        //     // start_date: '2020-8-1',
        //     // end_date: '2020-8-28',
        //     start_date: String(start_date),
        //     end_date: String(end_date),
        //   });
        // } else {
        console.log("%20 無", start_date); // -> 1
        this.$store.dispatch("fetchSummaryApi", {
          // start_date: "2020-07-15",
          // end_date: "2020-07-24"String()
          // start_date: '2020-8-1',
          // end_date: '2020-8-28',
          start_date: String(start_date),
          end_date: String(end_date),
        });
      } else if (mode == "today") {
        this.$store.dispatch("fetchToDaysApi");
        // this.$store.dispatch("fetchRawDataApi");
      } else {
        this.$store.dispatch("fetchDaysApi", {
          // range: "this-week"
          range: mode,
        });
      }
    },
    //  GetThedayAPI(mode, start_date, end_date) {
    //   // eslint-disable-next-line no-constant-condition
    //   if (mode == "Summary") {
    //     console.log("fetchSummaryToDaysApi input date", start_date, end_date); // -> 1
    //     console.log("%20 無", start_date); // -> 1
    //     this.$store.dispatch("fetchSummaryToDaysApi", {
    //       start_date: String(start_date),
    //       end_date: String(end_date),
    //     });
    //   } else if (mode == "today") {
    //     this.$store.dispatch("fetchToDaysApi");
    //   } else {
    //     this.$store.dispatch("fetchDaysApi", {
    //       range: mode,
    //     });
    //   }
    // },
    // updateMessage() {
    //   this.$store.commit("updateMessage", {
    //     message: "99999999"
    //   });
    // },
    toggle() {
      alert("警告，前有BUG");
      this.$store.commit("increment");
      console.log(this.$store.state.count); // -> 1
      var elmnt = document.getElementById("EndItmes");
      document.getElementById("Select").style.top =
        elmnt.clientTop + elmnt.height;
      document.getElementById("Select").style.Left = elmnt.clientLeft;
    },
    ABtime(YYYYMMDD) {
      return (
        new Date(YYYYMMDD).getUTCFullYear() +
        "-" +
        new Date(YYYYMMDD).getUTCMonth() +
        "-" +
        new Date(YYYYMMDD).getUTCDate()
      );
    },
    ontime() {
      return (
        new Date().getUTCFullYear() +
        "-" +
        new Date().getUTCMonth() +
        "-" +
        new Date().getUTCDate()
      );
    },
    handleChange() {
      console.log(this.dateValue); // -> 1
      this.$store.commit("setSelectDate", this.dateValue);
      let start = this.dateValue[0];
      let end = this.dateValue[1];
      this.$store.commit("updateDateformat", [start, end]);
      if (
        this.ABtime(start) == this.ABtime(end) 
      ) {
        console.log(
          "起始日=截止日",
          this.ABtime(start),
          this.ABtime(end));
        //FIXME
        // this.$store.dispatch("fetchToDaysApi");
        this.$store.dispatch("fetchSummaryToDaysApi", {
          start_date: String(start),
          end_date: String(end),
        });
        //FIXME
        //等於當日 FIX ISSUE 50
        // 執行TO(被選中的單日)Day
      } else {
        console.log("Summary", start, end);
        this.GetAPI("Summary", start, end);
      }
      // if (
      //   this.ABtime(start) == this.ABtime(end) &&
      //   this.ABtime(start) == this.ontime
      // ) {
      //   console.log(
      //     "起始日=截止日=今日",
      //     this.ABtime(start),
      //     this.ABtime(end),
      //     this.ontime
      //   );
      //   //FIXME
      //   console.log(
      //     "起始日=截止日=今日",
      //     new Date().toISOString().substring(0, 10)
      //   );
      //   this.$store.dispatch("fetchToDaysApi");
      //   // this.$store.dispatch("fetchSummaryToDaysApi", {
      //   //   start_date: String(start),
      //   //   end_date: String(end),
      //   // });
      //   //FIXME
      //   //等於當日 FIX ISSUE 50
      //   // 執行TO(被選中的單日)Day
      // } else {
      //   console.log("Summary", start, end);
      //   this.GetAPI("Summary", start, end);
      // }

      // this.GetAPI("Summary", start, end);

      console.log(
        "dateselectDateformat",
        new Date(start).toISOString().substring(0, 10),
        new Date(end).toISOString().substring(0, 10)
      );
      console.log("$store", this.$store.state.selectDateformat[0]); // -> 1
      console.log("$store", this.$store.state.selectDateformat[1]); // -> 1
      // console.log("$start", new Date(this.$store.state.selectDateformat[0])); // -> 1
      // console.log("$end", new Date(this.$store.state.selectDateformat[1])); // -> 1
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#btnList {
  display: flex;
  /* align-items: center;
  justify-content: flex-start; */

  flex: 1;
}
#btnSubList {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  flex: 1;
}
.button {
  overflow-wrap: break-word;
}
#SelectBarTitle {
  margin: 0px 10px 0px 30px;
}
.SelectBarStar {
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  /* background: #fff; */
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
}
.SelectItmes {
  white-space: nowrap;
  background: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* width: 10%; */
  border: 3px solid #5c6f75;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 5px 15px 5px 15px;
  margin: 0px 5px 0px 5px;
}
.DateSelectItmes {
  background: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* width: 10%; */
  border: 3px solid #5c6f75;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 15px 0px 15px;
  /*FIXME */
  margin: 0px 5px 16px 5px; /*FIXME */
  /*FIXME */

  /* margin: 0px 5px 0px 5px; */
}
h3 {
  /* margin: 50px 0 0; */
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
#EndItmes {
  background: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 32px;
  /* width: 10vw !important; */
  /* width: 10%; */
  border: 3px solid #5c6f75;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
#DateSelectBar {
  background: #fff;
  margin: 20px;
  padding: 0 15px;
  height: 8%;
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

/* @media screen and (max-width: 567px) { */
@media screen and (max-width: 707px) {
  #DateSelectBar {
    /* display: none; */
    background: #fff;
    margin: 20px;
    padding-right: 15px;
    height: 15%;
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .SelectBarStar {
    /* overflow: hidden; */
    flex-direction: row;
    /* flex-wrap: wrap; */
    /* background: #fff; */
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: flex-start;
  }
  #SelectBarTitle {
    display: none;
  }
  .SelectItmes {
    background: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* width: 10%; */
    border: 3px solid #5c6f75;
    box-sizing: border-box;
    border-radius: 20px;
    font: 1em sans-serif;
    padding: 5px 5px 5px 5px;
    margin: 0px 2px 0px 2px;
  }
  #EndItmes {
    /* display: none; */
  }
  .DateSelectItmes {
    background: #fff;
    align-items: center;
    justify-content: center;
    text-align: center;
    /* width: 100% !important; */
    border: 3px solid #5c6f75;
    box-sizing: border-box;
    border-radius: 20px;
    font: 1em sans-serif;
    padding: 0px 15px 0px 15px;
  }

  #btnList {
    flex-direction: row;
    flex: 1;
  }
}

#Select {
  /* position: absolute; */
  position: fixed;
}
</style>


// 然後取得 event.target
// 的 clientTop, clientLeft
// 然後生成一個 div，position fixed，top設為那個 clientTop + clientHeight
// left 設為 clientLeft