<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="症狀" width="180"></el-table-column>
    <el-table-column prop="date" label="時間"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "SymptomTable",
  props: {
    msg: String
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "鼻塞"
        },
        {
          date: "2016-05-04",
          name: "鼻塞"
        },
        {
          date: "2016-05-01",
          name: "發燒"
        },
        {
          date: "2016-05-03",
          name: "發燒"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#SymptomTable {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
