<template>
  <div id="PhotoDiary">
    <HelloWorld msg="Welcome to Your Vue.js PhotoDiary"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'PhotoDiary',
  components: {
    HelloWorld
  }
}
</script>

<style>
#PhotoDiary {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
