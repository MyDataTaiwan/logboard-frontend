<template>
  <div class="CalendarSweet">
    <!-- <h1>{{ msg }}</h1>Calendar -->
    <calendar  :eventCategories="eventCategories" :events="events" ref="calendar" />
  </div>
</template>

<script>
import { Calendar } from "vue-sweet-calendar";
import "vue-sweet-calendar/dist/SweetCalendar.css";
export default {
  name: "CalendarSweet",
  props: {
    msg: String
  },
  components: {
    Calendar
  },
  data() {
    return {
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
        }
      ],
      events: [
        {
          title: "Event 1",
          start: "2019-04-02",
          end: "2019-04-04",
          repeat: "monthly",
          categoryId: 1
        },
        {
          title: "Event 2",
          start: "2019-04-08",
          end: "2019-04-09",
          repeat: "yearly",
          categoryId: 1
        },
        {
          title: "Event 3",
          start: "2019-04-10",
          end: "2019-04-11",
          repeat: "never",
          categoryId: 2
        },
        {
          title: "Event 4",
          start: "2019-04-23",
          end: "2019-04-23",
          repeat: "monthly",
          categoryId: 2
        }
      ]
    };
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday();
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
