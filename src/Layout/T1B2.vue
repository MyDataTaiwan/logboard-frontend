<template>
  <div id="T1B2">
    <div id="Top10">sasasasasasasasasasa</div>
    <div id="Buttom10">
      <div id="Buttom5R">
        asdsasasasasasasasasasa
        <h4>T1B2</h4>
      </div>
      <div id="Buttom5L">
        asdsasasasasasasasasasa
        <h4>T1B2</h4>
      </div>
    </div>
  </div>
        <!-- <div style="flex-grow:2">item 3</div> -->
</template>

<script>
export default {
  name: "T1B2",
  components: {}
};
</script>

<style>
#T1B2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  overflow: scroll;
  flex-direction: column;
  overflow: scroll;
  /* background: #ff2345; */
}
#Buttom5L {
  height: 350px;
  background: #fff;
  margin-left: 10px;
  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#Buttom5R {
  height: 350px;
  background: #fff;
  margin-right: 10px;

  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#Top10 {
  background: #fff;
  margin: 0px 20px 10px 20px;
  display: flex;
  flex: 1;
  /* flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center; */
}
#Buttom10 {
  /* background: #fff; */
  margin: 10px 20px 50px 20px;
  display: flex;
  flex: 1;
  flex-direction: row;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
