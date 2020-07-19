<template>
  <div id="Home">
    <img alt="Vue logo" src="src/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js Home"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
#Home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
