<template>
  <div class="hello">
    <h3>{{ msg }}</h3>

    <div id="ChartSelectBar" class="SelectBar">
      <img class="SelectBarTitle" alt="bar" src="../assets/icon/Log.svg" width="5%" />
      <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
       <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
       <div class="SelectItmes">
        <h3>口體溫</h3>
      </div>
    </div>
    <img alt="LogBoard logo" src="../assets/chart.png" width="100%" style="  padding-right: 10%;" />
  </div>
</template>

<script>
export default {
  name: "LogChart",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SelectBarTitle {
  margin: 10px 30px 10px 30px ;
}
.SelectBar {
  display: flex;
  flex: 1;
  flex-direction: row;
  -webkit-align-items: center;
  align-items: center;
  justify-content: flex-start;
}
.SelectItmes {
  /* flex: 1 1 5%; */
  /* width: 5%; */
    margin: 0px 5px 20px 5px ;

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
