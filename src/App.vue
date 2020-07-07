<template>
  <div id="App">
    <div id="NavBar">
      <div id="Logo">
        <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" width="130" />
      </div>
      <div id="NavItems">
        <!-- <div id="Item">
          <img id="Icon" alt="LogBoard Icon" src="./assets/icon/DASHBOARD.svg" width="32" />
          <h4>DASHBOARD</h4>
        </div>
        <div id="Item">
          <img id="Icon" alt="LogBoard Icon" src="./assets/icon/PHOTODIARY.svg" width="32" />
          <h4>PHOTODIARY</h4>
        </div>-->
        <router-link :to="{ name: 'dashboard' }" class="Nav">
          <img id="Icon" alt="LogBoard Icon" src="./assets/icon/DASHBOARD.svg" width="32" />
          <h4>DASHBOARD</h4>
        </router-link>
        <router-link :to="{ name: 'photodiary' }" class="Nav">
          <img id="Icon" alt="LogBoard Icon" src="./assets/icon/PHOTODIARY.svg" width="32" />
          <h4>PHOTODIARY</h4>
        </router-link>
      </div>
      <!-- <img alt="Vue logo" src="./assets/LogBoardLOGO.svg" /> -->
      <!-- <img :src="image" /> -->
    </div>
    <div id="Content">
      <!-- <div id="DateSelectBar" class="SelectBar">
        <img alt="bar" src="./assets/bar.png" width="100%" />
      </div>-->
      <DateSelectBar />
      <router-view></router-view>
      <div id="Footer">
        <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" height="10px" />
        © 2020 copyright. all rights reserved
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import DateSelectBar from "./components/DateSelectBar.vue";
import "reset-css";

export default {
  name: "App",
  components: {
    // HelloWorld
    DateSelectBar
  },
  props: {
    source: String
  },
  data() {
    return {
      drawer: true,
      image: require("./assets/LogBoardLOGO.svg")
    };
  }
};
</script>

<style>
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
#App {
  overflow: hidden;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background: #5c6f75;
  display: flex;
  flex: 1;
  width: 100vw;
  height: 100vh;
}
#NavBar {
  /* background: #f0afff; */
  display: flex;
  flex: 1;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  /* height: 100vh; */
}
/* #DateSelectBar {
  margin: 20px;
} */
#Footer {
  width: "100%";
  height: "20x";
  background: #738489;
}
#Logo {
  background: #738489;
  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
}
#Icon {
  padding: 5px;
}
#NavItems {
  background: #697b80;

  display: flex;
  flex: 8;
  flex-direction: column;
}
#Item {
  /* background: #30a0fa; */
  /* border-block-end-width: 10px;
  border-width: 10px; */
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
#Content {
  flex: 7;
  display: flex;
  flex-direction: column;

  /* height: 100vh; */
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>


