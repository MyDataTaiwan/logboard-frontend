<template>
  <div id="DashBoard">
    <HelloWorld msg="Welcome to Your Vue.js DashBoard"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'DashBoard',
  components: {
    HelloWorld
  }
}
</script>

<style>
#DashBoard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
