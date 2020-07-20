<template>
  <div id="DateSelectBar">
    <!-- <img alt="bar" src="../assets/bar.png" width="100%" /> -->
    <!-- <h1>{{ msg }}</h1> -->
    <div class="SelectBarStar">
      <img id="SelectBarTitle" alt="bar" src="../assets/icon/Date.svg" width="8%" />
      <!-- <div class="DateSelectItmes">2020/05/09 ~ 2020/05/13</div> -->
      <div class="DateSelectItmes">
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
          value-format="timestamp"
        ></el-date-picker>
      </div>
      <!-- <button class="DateSelectItmes" v-on:click="counter += 1">Add 1</button> -->
      <div id="btnList">
        <button @click="toggle" class="SelectItmes">This Month</button>
        <button @click="toggle" class="SelectItmes">Two Weeks</button>
        <button @click="toggle" class="SelectItmes">This Week</button>
        <button @click="toggle" class="SelectItmes">Today</button>
        <div style="flex: 1;" />
        <el-select id="EndItmes" v-model="value" placeholder="其他">
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
    msg: String
  },
  watch: {
    selectTemplateList: function() {
      console.log("selectTemplateList change");
    }
  },
  computed: {
    selectTemplateList() {
      return this.$store.state.templateList;
    },
    options() {
      let optionsList = [];
      this.selectTemplateList.map(index => {
        if (index == "烤鴨") {
          optionsList.push({
            value: "烤鴨",
            label: "烤鴨三吃"
          });
        } else if (index == "commonCold") {
          optionsList.push({
            value: "commonCold",
            label: "COVID-19"
          });
        } else if (index == "heartFailure") {
          optionsList.push({
            value: "heartFailure",
            label: "心衰竭"
          });
        }
        else {
           optionsList.push({
            value: index,
            label: index
          });
        }
        //烤鴨,commonCold,heartFailure
      });
      return optionsList;
    }
  },

  data() {
    return {
      // value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
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
      value: ""
    };
  },
  methods: {
    // updateMessage() {
    //   this.$store.commit("updateMessage", {
    //     message: "99999999"
    //   });
    // },
    toggle() {
      alert("alert");
      this.$store.commit("increment");
      console.log(this.$store.state.count); // -> 1
      var elmnt = document.getElementById("EndItmes");
      document.getElementById("Select").style.top =
        elmnt.clientTop + elmnt.height;
      document.getElementById("Select").style.Left = elmnt.clientLeft;
    },
    handleChange() {
      console.log(this.dateValue); // -> 1
      this.$store.commit("setSelectDate", this.dateValue);
      let start = this.dateValue[0];
      // new Date(this.dateValue[0]).getFullYear() +
      // "-" +
      // new Date(this.dateValue[0]).getMonth() +
      // "-" +
      // new Date(this.dateValue[0]).getDate();
      let end = this.dateValue[1];
      // new Date(this.dateValue[1]).getFullYear() +
      // "-" +
      // new Date(this.dateValue[1]).getMonth() +
      // "-" +
      // new Date(this.dateValue[1]).getDate();
      this.$store.commit("updateDateformat", [start, end]);
      // console.log("$store", this.$store.state.selectDate); // -> 1
      // console.log("$store", this.$store.state.selectDate); // -> 1
      console.log("$store", this.$store.state.selectDateformat[0]); // -> 1
      console.log("$store", this.$store.state.selectDateformat[1]); // -> 1
      // console.log("$start", new Date(this.$store.state.selectDateformat[0])); // -> 1
      // console.log("$end", new Date(this.$store.state.selectDateformat[1])); // -> 1
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#btnList {
  display: flex;
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
  /* margin: 0px 5px 0px 5px; */
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