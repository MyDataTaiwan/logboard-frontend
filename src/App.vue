<template>
  <div id="main">
    <div id="App">
      <div v-if="true" id="NavBar">
        <div id="Logo">
          <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" width="130" />
        </div>
        <div id="NavItems">
          <router-link :to="{ name: 'camps' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/camps.svg" width="32" />
            <h4>實習營健康表</h4>
          </router-link>
          <router-link :to="{ name: 'dashboard' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/DASHBOARD.svg" width="32" />
            <h4>DASHBOARD</h4>
          </router-link>
          <router-link :to="{ name: 'photodiary' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/PHOTODIARY.svg" width="32" />
            <h4>PHOTODIARY</h4>
          </router-link>
        </div>
      </div>
      <div id="Content" style="overflow: hidden;">
        <DateSelectBar id="DateSelectBar" v-if="true" />
        <div id="NavBarMobile">
          <div id="LogoMobile">
            <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" height="30" class="LogoMobile" />
            <button @click="toggle" class="menu">
              <img alt="menu logo" src="./assets/icon/menu.svg" height="25" />
            </button>
          </div>
          <div id="NavItems" v-if="isShow">
            <router-link :to="{ name: 'camps' }" class="Nav">
              <img id="Icon" alt="LogBoard Icon" src="./assets/icon/camps.svg" width="32" />
              <h4>實習營健康表</h4>
            </router-link>
            <router-link :to="{ name: 'dashboard' }" class="Nav">
              <img id="Icon" alt="LogBoard Icon" src="./assets/icon/DASHBOARD.svg" width="32" />
              <h4>DASHBOARD</h4>
            </router-link>
            <router-link :to="{ name: 'photodiary' }" class="Nav">
              <img id="Icon" alt="LogBoard Icon" src="./assets/icon/PHOTODIARY.svg" width="32" />
              <h4>PHOTODIARY</h4>
            </router-link>
            <DateSelectBar id="DateSelectBarMobile" v-if="true" />
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div id="Footer">
      <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" height="60%" />
      © 2020 copyright. all rights reserved
    </div>
  </div>
</template>

<script>
import DateSelectBar from "./components/DateSelectBar.vue";
import "reset-css";

export default {
  name: "App",
  components: {
    DateSelectBar
  },
  props: {
    source: String
  },
  data() {
    return {
      isShow: false,
      drawer: true
    };
  },
  methods: {
    toggle: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style>
/* h1 {
  font-size: 30px;
}
@media screen and (min-width: 200px) and (max-width: 300px) {
  h1 {
    font-size: 50px;
    color: red;
  }
}*/
#main .el-date-editor--daterange.el-input__inner {
  width: 100%;
}
/* temp Style */
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
#main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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
  height: 97vh;
}

@media screen and (max-width: 800px) {
  #DateSelectBar {
    display: none;
  }
}

/* @media screen and (max-width: 567px) { */
@media screen and (max-width: 707px) {
  #NavBar {
    display: none;
  }
  #DateSelectBar {
    /* display: none; */
  }
}
@media screen and (min-width: 567px) {
  #NavBar {
    /* background: #f0afff; */
    display: flex;
    flex: 1;
    width: 15%;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center;
    /* height: 100vh; */
  }
  #NavBarMobile {
    display: none;
  }
}
#Footer {
  width: "100%";
  /* height: "20x"; */
  height: 3vh;
  background: #738489;
  display: flex;
  align-items: center;
  justify-content: center;
}
#LogoMobile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 5px 0px 5px 0px;
  background: #697b80;
}
.LogoMobile {
  justify-content: center;
  padding: 5px;
  margin-left: 10px;
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
.menu {
  padding: 5px;
  margin-right: 10px;
  background: #697b80;
  border: 3px solid #5c6f75;
  box-sizing: border-box;
  border-radius: 5px;
  font: 1em sans-serif;
  padding: 5px 15px 5px 15px;
  margin: 0px 5px 0px 5px;
}
#NavItems {
  opacity: 100;
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


