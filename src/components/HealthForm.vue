<template>
  <!-- <div id="HealthFormContent">
    <div class="Title">
      <div class="DateTitle">{{ date }}</div>
      <div class="BTitle">體溫: {{bt}}</div>
    </div>
    <div class="Doc">請問你過去十四天是否：</div>
    
    <div class="subTitle">有出國</div>
    {{ msg }}
    <div class="subTitle">有發燒</div>
    {{ msg }}
    <div class="subTitle">接觸過正在檢疫或隔離的人士</div>
    {{ msg }}
  </div>-->
  <div id="HealthFormContent">
    <div class="Title">
      <div class="DateTitle">{{ data.date }}</div>
      <div class="BTitle">體溫: {{data.bt}}</div>
    </div>
    <div class="Doc">請問你過去十四天是否：</div>

    <div v-if="data.data[1].present"  class="subTitle">有出國</div>
    <div v-if="!data.data[1].present"  class="subTitle">沒出國</div>
    {{ data.data[0].note }}    {{ data.data[0].present }}

    <div v-if="data.data[1].present"  class="subTitle">有發燒</div>
    <div v-if="!data.data[1].present"  class="subTitle">沒發燒</div>
    {{ data.data[2].note }}    {{ data.data[2].present }}

    <div v-if="data.data[1].present" class="subTitle">接觸過正在檢疫或隔離的人士</div>
    <div v-if="!data.data[1].present" class="subTitle">沒 接觸過正在檢疫或隔離的人士</div>
    {{ data.data[1].note }}    {{ data.data[1].present }}

  </div>
</template>
    <!-- <h2>
        體溫 (數字):
        請問你過去十四天是否
        * 有出國 (toggle)
        note 填入國家
        * 有發燒 (toggle)
        note 填入發燒情形
        * 接觸過正在檢疫或隔離的人士 (toggle)
        note 填入為何接觸
        * 接觸過旅遊至高風險的人士 (toggle)
        然後強制中文 (關掉 i18n) (edited)
    </h2>-->
<script>
export default {
  name: "HealthForm",
  props: {
    data: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
#HealthFormContent {
  color: #fff;
  text-align: left;
  background: #000000;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  padding: 10px;
  /* height: 50vh; */
  /* border-radius: 5%; */
}
#CAMP {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
