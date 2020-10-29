<template>
  <div class="NavBar">
    <div v-if="isCollapse" class="NavBarMini">
      <div class="NavBarMini_Logo">
        <img alt="LogBoard logo" src="../assets/GroupLicon.svg" width="85%" />
      </div>
      <div @click="toggle" style="width: 100%;;background: #738489;">
        <img id="Icon" alt="LogBoard Icon" src="../assets/open.svg" width="90%" />
      </div>
      <div class="NavMiniItems">
        <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'dashboard' }"
          class="MiniItems"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/DASHBOARD.svg" width="32" />
        </router-link>
        <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'photodiary' }"
          class="MiniItems"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/PHOTODIARY.svg" width="32" />
        </router-link>
        <!-- <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'camps' }"
          class="MiniItems"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/camps.svg" width="32" />
        </router-link> -->
      </div>
    </div>
    <div v-if="!isCollapse" id="NavBarMax">
      <div id="Logo">
        <img alt="LogBoard logo" src="../assets/logologboard.svg" width="130" />
      </div>
      <div @click="toggle" style="flex:1; ">
        <img id="Icon" alt="LogBoard Icon" src="../assets/close.svg" width="70" />
      </div>
      <div slot="reference" id="NavItems">
        <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'dashboard' }"
          class="Nav"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/DASHBOARD.svg" width="32" />
          <h4>DASHBOARD</h4>
        </router-link>
        <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'photodiary' }"
          class="Nav"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/PHOTODIARY.svg" width="32" />
          <h4>PHOTODIARY</h4>
        </router-link>
        <router-link
          @mouseover="mouseOver"
          @mouseleave="mouseLeave"
          :style="active"
          :to="{ name: 'camps' }"
          class="Nav"
        >
          <img id="Icon" alt="LogBoard Icon" src="../assets/icon/camps.svg" width="32" />
          <h4>健康聲明書</h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  data() {
    return {
      isCollapse: true,
      active: "",
    };
  },
  methods: {
    mouseOver() {
      
      this.active = "background-color: #000 !important;";
    },
    mouseLeave() {
      this.active = "";
    },
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuSelect(index) {
      if (this.$route.name !== index) {
        this.$router.push({
          name: index,
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.NavBar {
  /* max-width: 200px;
  min-height: 90vh; */
  height: 100vh;
  background-color: #5c6f75;
}
.NavBarMini {
  width: 60px;
  height: 1024px;
  background: #687e85;
  /* opacity: 80%; */
  display: flex;
  flex-direction: column;
}
.NavBarMini_Logo {
  display: flex;
  /* width: 79px;
  height: 1024px; */
  height: 100px;
  background: #5c6f75;

  justify-content: center;
  align-items: center;
}
.NavBarMax {
  /* width: 181px;
  height: 1024px; */
  background: #687e85;

  /* background: #f0afff; */
  display: flex;
  flex: 1;
  width: 15%;
  flex-direction: column;
  -webkit-justify-content: center;
  justify-content: center;
  /* height: 100vh; */
}
.NavMiniItems {
  opacity: 100;
  display: flex;
  flex: 8;
  flex-direction: column;
  align-items: center;
}
.MiniItems {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #fff;
}
#NavItems {
  opacity: 100;
  display: flex;
  flex: 8;
  flex-direction: column;
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
#Logo {
  background: #738489;
  display: flex;
  flex: 1;
  height: 100px;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 90vh;
  background-color: #5c6f75;
}

.el-submenu__title:focus,
.el-submenu__title:hover {
  /* outline: 0 !important;
    color: #409EFF !important;
    background: none !important; */
  background-color: #5c6f75 !important;
}
.el-menu {
  background-color: #5c6f75 !important;
}
.el-menu-vertical-demo {
  width: 200px;
  min-height: 90vh;
  background-color: #5c6f75;
}
.el-menu-item-group {
  background-color: #5c6f75;
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
</style>
