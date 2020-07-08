<template>
  <div id="CAMP">
    <!-- <HelloWorld msg="Welcome to Your Vue.js Home"/> -->
    <h1>實習營健康表</h1>
    <div id="CAMPContent">
      <div class="Title">
        <div class="DateTitle">2020/06/27</div>
        <div class="BTitle">體溫: 36</div>
      </div>
      <div class="Doc">請問你過去十四天是否：</div>
      <div class="subTitle">有出國</div>北韓
      <div class="subTitle">有發燒</div>浴火重生
      <div class="subTitle">接觸過正在檢疫或隔離的人士</div>活者的沒有，死的不少
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
    </div>
  </div>
</template>

<script>
// import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: "CAMP",
  components: {
    // HelloWorld
  }
};
</script>

<style>
h1 {
  color: #fff;
  font-size: 30pt;
}
.Title{
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
#CAMPContent {
  color: #fff;
text-align:left;
  background: #000000;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  padding: 10px;
  height: 60vh;
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
