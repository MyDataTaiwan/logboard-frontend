<template>
  <!-- <div id="HealthCardContent">
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
  <div id="HealthCardContent">
    <div class="Title">
      <div class="DateTitle">{{ data.date }}</div>
      <div class="BTitle">體溫: {{data.bt}}</div>
    </div>
    <div class="Doc">請問你過去十四天是否：</div>
    <!-- 
    <div v-if="data.data[1].present" class="subTitle">有出國</div>
    <div v-if="!data.data[1].present" class="subTitle">沒出國</div>
    {{ data.data[0].note }} {{ data.data[0].present }}
    <div v-if="data.data[1].present" class="subTitle">有發燒</div>
    <div v-if="!data.data[1].present" class="subTitle">沒發燒</div>
    {{ data.data[2].note }} {{ data.data[2].present }}
    <div v-if="data.data[1].present" class="subTitle">接觸過正在檢疫或隔離的人士</div>
    <div v-if="!data.data[1].present" class="subTitle">沒 接觸過正在檢疫或隔離的人士</div>
    {{ data.data[1].note }} {{ data.data[1].present }}
    <div v-if="data.data[1].present" class="subTitle">接觸過至高風險地區旅遊人士</div>
    <div v-if="!data.data[1].present" class="subTitle">沒 接觸過正在檢疫或隔離的人士</div>
    {{ data.data[1].note }} {{ data.data[1].present }}-->

    <div class="cardSubTitle">
      <div class="lableL">有出國</div>
      <div class="lableR">{{ data.symptom[0].present }}</div>
    </div>
    <div class="cardSubTitle">
      <div class="lableL">有發燒</div>
      <div class="lableR">{{ data.symptom[1].present }}</div>
    </div>
    <div class="cardSubTitle">
      <div class="lableL">接觸過正在檢疫或隔離的人士</div>
      <div class="lableR">{{ data.symptom[2].present }}</div>
    </div>
    <div class="cardSubTitle">
      <div class="lableL">接觸過至高風險地區旅遊人士</div>
      <div class="lableR">{{ data.symptom[3].present }}</div>
    </div>
    <!-- <div class="cardSubTitle">備註</div>
    {{ data.data[1].note }} {{ data.data[1].present }}-->
    <!-- <template v-for="item in thumbnail_list" :key="item.date" v-bind:data="item" />
    -->

    <img alt="LogBoard logo" :src="data.thumbnail_list[0]" height="100" />
    <!-- <img
      alt="LogBoard logo"
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      height="100"
    />-->
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
  name: "HealthCard",
  props: {
    data: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.lableR {
  flex: 1;
}
.lableL {
  flex: 9;
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
.cardSubTitle {
  /* background: #fff; */
  /* border-top: #fff; */
  color: #fff;
  display: flex;
  flex-direction: row;
  /* border-width: 1pt; */
  border-top: 2px #fff solid;
  /* border-bottom: 2px #fff solid; */
  margin: 2px 0px 2px 0px;
  padding: 5px 0px 5px 0px;
  font-size: 12pt;
}
#HealthCardContent {
  color: #fff;
  text-align: left;
  background: #000000;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  padding: 10px;
  max-width: 300px;
  min-width: 250px;

  /* height: 425px; */
  background: #000;

  /* background: #c4c4c4; */
  box-shadow: 4px 8px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
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
