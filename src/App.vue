<template>
  <div id="main">
    <!-- <loading :active.sync="visible" :can-cancel="true"></loading> -->
    <loading :active.sync="storageisLoading"></loading>

    <div id="App">
      <!-- <div v-if="true" id="NavBar">
        <div id="Logo">
          <img alt="LogBoard logo" src="./assets/logologboard.svg" width="130" />
        </div>
        <div slot="reference" id="NavItems">
          <router-link :to="{ name: 'dashboard' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/DASHBOARD.svg" width="32" />
            <h4>DASHBOARD</h4>
          </router-link>
          <router-link :to="{ name: 'photodiary' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/PHOTODIARY.svg" width="32" />
            <h4>PHOTODIARY</h4>
          </router-link>
          <router-link :to="{ name: 'camps' }" class="Nav">
            <img id="Icon" alt="LogBoard Icon" src="./assets/icon/camps.svg" width="32" />
            <h4>健康聲明表</h4>
          </router-link>
        </div>
      </div>-->
      <NavBar id="NavBar" />
      <div id="Content" style="overflow: hidden;">
        <DateSelectBar id="DateSelectBar" v-if="true" />

        <div id="NavBarMobile">
          <DateSelectBarMobile />
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div id="Footer">
      <img alt="LogBoard logo" src="./assets/LogBoardLOGO.svg" height="60%" />
      <template id="version">version v{{version}}</template>
      © 2020 copyright. all rights reserved
      {{storageUserId}}
    </div>
  </div>
</template>

<script>
import DateSelectBar from "./components/DateSelectBar.vue";
import DateSelectBarMobile from "./components/DateSelectBarMobile.vue";
import NavBar from "./components/NavBar.vue";
import "reset-css";
import config from "../package.json";
export default {
  name: "App",
  components: {
    DateSelectBar,
    DateSelectBarMobile,
    NavBar,
  },
  props: {
    source: String,
  },
  watch: {
    storageUserId: function () {
      console.log("storageUserId change", this.storageUserId);
    },
    storageisLoading: function () {
      console.log("storageisLoading change", this.storageisLoading);
    },
    storageSymptomsTemplates: function () {
      // this.$store.dispatch("ChangDisplayTemplate", "heartFailure");
      console.log("ChangDisplayTemplate change", this.storageisLoading);
    },
  },
  computed: {
    storageUserId() {
      this.$store.commit("updateUserId", this.$route.params.id);
      return this.$route.params.id;
    },
    storageisLoading() {
      return this.$store.state.isLoading;
    },
    storageSymptomsTemplates() {
      return this.$store.state.SymptomsTemplates;
    },
  },
  data() {
    return {
      version: config.version,
      uid: this.computed,
      isShow: false,
      drawer: true,
      visible: false,
      DataTable: [{}, {}, {}],
      // isLoading: false
    };
  },
  created() {
    this.$store.dispatch("fetchTemplates");
    // this.GetAPI("this-week");
    console.log("version", config.version);
  },
  methods: {
    toggle: function () {
      this.isShow = !this.isShow;
    },

    open() {
      console.log("open was clicked, will auto hide");
      let loader = this.$loading.show({
        loader: "dots",
      });
      setTimeout(() => loader.hide(), 3 * 1000);
    },
    show() {
      console.log("show was clicked, click to hide");
      // do AJAX here
      this.visible = true;
    },
  },
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

.el-table th.gutter {
  display: table-cell !important;
}
.el-table--border th.gutter:last-of-type {
  display: block !important;
  width: 17px !important;
}
.el-table th {
  display: table-cell !important;
}

body .el-table th.gutter {
  display: table-cell !important;
}

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
  font-family: "Montserrat", sans-serif;

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

#DateSelectBarMobile {
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
    /* display: flex;
    flex: 1;
    width: 15%;
    flex-direction: column;
    -webkit-justify-content: center;
    justify-content: center; */
    /* height: 100vh; */
  }
  #NavBarMobile {
    display: none;
  }
}
#NavBarMobile {
  width: 100%;
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
  font-family: "Montserrat", sans-serif;
}

h1 {
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  /* Extra large */
}
h2 {
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  /* large */
}
h3 {
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  /* font-weight: 900; */
  font-weight: bold;
  word-wrap: break-word;
  white-space: nowrap;

  flex-wrap: nowrap !important;
  /* Medium */
}
h4 {
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  /* Base */
}
h5 {
  font-size: 13px;
  font-family: "Montserrat", sans-serif;
  /* Small */
}
h6 {
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  /* Extra Small */
}
</style>


