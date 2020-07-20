<template>
  <div class="CalendarSweet">
    <calendar
      :eventCategories="eventCategories"
      v-bind:events="events"
      v-model="events"
      ref="calendar"
    />
    <!-- {{selectDateformatStart}}
    {{selectDateformatEnd}}
    {{$store.state.selectDateformat[0]}}
    {{$store.state.selectDateformat[1]}}
    <h2>{{ message }}</h2> -->

    <button @click="goToday" class>Today</button>
  </div>
</template>

<script>
import { Calendar } from "vue-sweet-calendar";
import "vue-sweet-calendar/dist/SweetCalendar.css";
export default {
  name: "CalendarSweet",
  props: {
  },
  components: {
    Calendar
  },
  watch: {
    selectDateformatStart: function() {
      console.log("selectDateformatStart change");
    },
    selectDateformatEnd: function() {
      console.log("selectDateformatEnd change");
    }
  },

  computed: {
    selectDateformatStart() {
      return this.$store.state.selectDateformat[0];
    },
    selectDateformatEnd() {
      return this.$store.state.selectDateformat[1];
    },
    message() {
      return this.$store.state.message;
    },
    events() {
      return [
        {
          title: "Event Symptoms",
          // start: this.$store.state.selectDateformat[0],
          // end: this.$store.state.selectDateformat[1],
          start: this.selectDateformatStart,
          end: this.selectDateformatEnd,
          // start: "2020-04-10",
          // end: "2020-07-11",
          repeat: "never",
          categoryId: 3
        }
      ];
    }
  },
  data() {
    return {
      input: this.$store.state.message,
      eventCategories: [
        {
          id: 1,
          title: "Personal",
          textColor: "white",
          backgroundColor: "Blue"
        },
        {
          id: 2,
          title: "Company-wide",
          textColor: "white",
          backgroundColor: "red"
        },
        {
          id: 3,
          title: "Symptoms",
          textColor: "white",
          backgroundColor: "#FC9500"
        }
      ],
    };
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday();
      ///修改並發布新套件
      ///加入被選擇的起始日/結束日
      ///https://github.com/maryayi/vue-sweet-calendar/blob/a85ecea736a13ab90edd26512191aa6580d6d6c7/src/components/Calendar.vue#L159
    }
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
#CalendarSweet {
  flex: 1;
  /* height: 100% !important; */
}


</style>
