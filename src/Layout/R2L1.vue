<template>
  <div id="R2L1">
    <div id="R10">
      <div id="R5Top">
        asd R
        <h4>DASHBOARD</h4>
      </div>
      <div id="R5Botton">
        asd R
        <h4>DASHBOARD</h4>
      </div>
    </div>
    <div id="L10">sasasasasasasasasasa</div>
  </div>
</template>

<script>
export default {
  name: "R2L1",
  components: {}
};
</script>

<style>
#R2L1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: scroll;
  /* height:100%; */
}
#R5Botton {
  width: 100%;
  margin-top:  10px;
  background: #fff;
  /* margin: 10px 15px 10px 15px; */
  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#R5Top {
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  /* margin: 10px 15px 10px 15px; */
  display: flex;
  flex: 1;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#L10 {
  height: 95vh;
  margin: 0px 20px 20px 10px;

  background: #fff;
  /* margin: 10px 30px 10px 30px; */

  display: flex;
  flex: 1;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
}
#R10 {
  /* background: #fff; */
  height: 95vh;
  margin: 0px 10px 20px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
