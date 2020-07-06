<template>
  <div id="About">
    <img alt="Vue logo" src="src/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js About"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  }
}
</script>

<style>
#About {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
