<template>
  <div id="DateSelectBarMobile">
    <div id="LogoMobile">
      <img alt="LogBoard logo" src="../assets/LogBoardLOGO.svg" height="30" class="LogoMobile" />
      <span class="el-dropdown-link" @click="NAVtoggle">
        DASHBOARD
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <button @click="toggle" class="menu">
        <img alt="menu logo" src="../assets/icon/menu.svg" height="25" />
      </button>
    </div>

    <div class="SelectBarStarMobile">
      <div id="NavItems" v-if="NavIshow">
        <router-link :to="{ name: 'dashboard' }" class="Nav">
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/DASHBOARD.svg" width="32" />
          <h4>DASHBOARD</h4>
        </router-link>
        <router-link :to="{ name: 'camps' }" class="Nav">
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/camps.svg" width="32" />
          <h4>健康聲明書</h4>
        </router-link>
        <router-link :to="{ name: 'photodiary' }" class="Nav">
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/PHOTODIARY.svg" width="32" />
          <h4>PHOTODIARY</h4>
        </router-link>
      </div>
      <div id="btnListMobile" v-if="isShow">
        <div id="btnSubListMobile">
          <button @click="GetAPI('this-month')" class="SelectItmesMobile">This Month</button>
          <button @click="GetAPI('two-weeks')" class="SelectItmesMobile">Two Weeks</button>
          <button @click="GetAPI('this-week')" class="SelectItmesMobile">This Week</button>
          <button @click="GetAPI('today')" class="SelectItmesMobile">Today</button>
        </div>
        <div class="DateSelectItmesMobileMobile">
          <el-date-picker
            style="height:28px !important;border:none;  
  background: #5c6f75;"
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
          ></el-date-picker>
        </div>
        <el-select
          style="width:84%  ; margin: 5px 0px 5px 0px;"
          id="EndItmesMobile"
          v-model="selectValue"
          :placeholder="options[0].label"
        >
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
  name: "DateSelectBarMobile",
  props: {
    msg: String,
  },
  watch: {
    selectValue: function () {
      ////確保 症狀包選擇後可以顯示在對應的組件頁面
      this.$store.commit("updateSelectTemplate", this.selectValue);
      this.GetAPI("this-week");
      if (this.selectValue == "healthDeclaration") {
        if (this.$route.name !== "camps") {
          this.$router.push({
            name: "camps",
          });
        } else {
          console.log("no change");
        }
      } else {
        if (this.$route.name !== "dashboard") {
          this.$router.push({
            name: "dashboard",
          });
        } else {
          console.log("selectValue change" + this.selectValue);
        }
      }
    },
    options: function () {
      console.log("options change", this.options); //ＱＡ重要 relese 可以拔
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
  },
  created() {
    this.GetAPI("this-week");
  },
  computed: {
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
      return optionsList;
    },
  },

  data() {
    return {
      isShow: false,
      NavIshow: false,
      dateValue: [],
      value2: "",
      selectValue: "",
    };
  },
  methods: {
    NAVtoggle() {
      this.NavIshow = !this.NavIshow;
      this.isShow = false;
    },
    toggle() {
      this.isShow = !this.isShow;
      this.NavIshow = false;
    },
    GetAPI(mode, start_date, end_date) {
      // eslint-disable-next-line no-constant-condition
      if (mode == "Summary") {
        console.log("fetchSummaryApi input date", start_date, end_date); // -> 1
        this.$store.dispatch("fetchSummaryApi", {
          //NOTE
          // start_date: "2020-07-15",
          // end_date: "2020-07-24"
          start_date: String(start_date),
          end_date: String(end_date),
        });
      } else if (mode == "today") {
        this.$store.dispatch("fetchToDaysApi");
        this.$store.dispatch("fetchRawDataApi");
      } else {
        this.$store.dispatch("fetchDaysApi", {
          //NOTE
          // range: "this-week"
          range: mode,
        });
      }
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
      if (this.ABtime(start) == this.ABtime(end)) {
        console.log("起始日=截止日", this.ABtime(start), this.ABtime(end));
        //FIXME
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
      console.log(
        "dateselectDateformat",
        new Date(start).toISOString().substring(0, 10),
        new Date(end).toISOString().substring(0, 10)
      );
      console.log("$store", this.$store.state.selectDateformat[0]); // -> 1
      console.log("$store", this.$store.state.selectDateformat[1]); // -> 1
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.h4 {
  color: #fff !important ;
}
.Nav {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  text-align: center;
  color: #fff;
}
.el-dropdown-link {
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  background: #5c6f75;
  border: 3px solid #fff;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 15px 0px 15px;
  margin: 10px 5px 16px 5px; /*FIXME */
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown-item {
  background-color: #5c6f75;
}
#btnList {
  display: flex;
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
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
}
.SelectBarStarMobile {
  width: 100%;
  align-items: center;
  justify-content: center;
}

.SelectItmesMobile {
  white-space: nowrap;

  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  color: #fff;
  background: #5c6f75;
  border: 3px solid #fff;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 5px 15px 5px 15px;
  margin: 5px 5px 5px 5px;
}
.btnListMobile {
  width: 100%;
  padding: 20%;
}

.btnSubListMobile {
  width: 100%;
}
.DateSelectItmesMobileMobile {
  width: 84%;
  border: 3px solid #fff;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 15px 0px 15px;
  margin: 5px 8% 5px 8%;
}
/*  */
.DateSelectItmes {
  background: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 3px solid #5c6f75;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 15px 0px 15px;
  /*FIXME */
  margin: 0px 5px 16px 5px;
  /*FIXME */
}
#LogoMobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 5px 0px 5px 0px;
  background: #697b80;
}
.LogoMobile {
  justify-content: center;
  padding: 5px;
  margin-left: 10px;
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
#EndItmesMobile {
  background: #5c6f75;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 32px;
  width: 100%;
  /* width: 10vw !important; */
  /* width: 10%; */
  color: #ffffff;
  border: 3px solid #fff;
  box-sizing: border-box;
  border-radius: 20px;
  font: 1em sans-serif;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
}
#DateSelectBarMobile {
  /* background: #fff; */
  /* margin: 20px; */
  /* padding: 0 15px; */
  height: 8%;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.SelectBarStar {
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#SelectBarTitle {
  display: none;
}
#EndItmes {
  /* display: none; */
}
.DateSelectItmes {
  background: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
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

#Select {
  position: fixed;
}
</style>
