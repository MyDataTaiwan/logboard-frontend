<template>
  <div class="Calendar">
    <!-- <h1>{{ msg }}</h1>Calendar -->
    <el-calendar v-model="value">
      <template slot="dateCell" slot-scope="{date, data}">
        <p
          :class="data.isSelected ? 'is-selected' : ''"
        >{{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}</p>
      </template>
    </el-calendar>
    <vc-calendar :attributes="attrs"></vc-calendar>
    
  </div>
</template>

<script>
export default {
  name: "Calendar",
  props: {
    msg: String
  },
  components: {},
  data() {
    return {
      value: new Date(),
      dates: [
        { start: new Date(2018, 0, 1), end: new Date(2018, 0, 5) },
        { start: new Date(2018, 0, 15), span: 5 } // # of days
      ],
      attrs: [
        {
          key: "today",
          // 括號內傳遞日期可點亮指定日期，如new Date(2019, 6, 1)，也可傳遞多個日期：如dates: [ new Date(2018, 0, 1), new Date(2018, 0, 15) ]
          dates: new Date(),
          highlight: true,
          // popover 點亮的日期上出現提示內容
          popover: {
            label: "美好的一天！要開心呦！"
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#Calendar {
  flex: 1;
  height: 100% !important;
}
</style>
