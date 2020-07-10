<template>
  <div id="DateSelectBar">
    <!-- <img alt="bar" src="../assets/bar.png" width="100%" /> -->
    <!-- <h1>{{ msg }}</h1> -->
    <div class="SelectBarStar">
      <img class="SelectBarTitle" alt="bar" src="../assets/icon/Date.svg" width="8%" />
      <div class="DateSelectItmes">2020/05/09 ~ 2020/05/13</div>
      <!-- <button class="DateSelectItmes" v-on:click="counter += 1">Add 1</button> -->
      <button class="DateSelectItmes">This Month</button>
      <button class="DateSelectItmes">Two Weeks</button>
      <button class="DateSelectItmes">This Week</button>
      <button class="DateSelectItmes">Today</button>
    </div>
    <button class="EndItmes">其他症狀包選擇</button>
  </div>
</template>

<script>
export default {
  name: "HelloWDateSelectBarorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.button {
  overflow-wrap: break-word;
}
.SelectBarTitle {
  margin: 0px 10px 0px 30px;
}
.SelectBarStar {
  overflow: hidden;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  display: flex;
  /* flex: 1; */
  align-items: center;
  justify-content: flex-start;
}
.EndItmes {
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
  margin: 0px 5px 0px 25px;
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
  padding: 5px 15px 5px 15px;
  margin: 0px 5px 0px 5px;
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
#DateSelectBar {
  background: #fff;
  margin: 20px;
  height: 8%;
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
