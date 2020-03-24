<template>
  <div class="container">
    <DatePicker v-on:sendTimespan="setTimespan" />
    <div class="panels">
      <div class="panel1">
        <h1>Daily cost</h1>
        <Chart v-bind:timespan="timespan" v-bind:dayspend="dayspend" :key="rerenderchart" />
      </div>
      <div class="divider" />
      <div class="panel2">
        <h1>Strategy List</h1>
        <Strategy v-on:sendDaySpend="setDaySpend" v-bind:timespan="timespan" :key="rerender" />
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "./components/DatePicker";
import Strategy from "./components/Strategy";
import Chart from "./components/Chart";

export default {
  name: "App",
  components: { DatePicker, Strategy, Chart },
  data() {
    return {
      activeName: "second",
      timespan: { first: 100, last: 100 },
      dayspend: [],
      rerender: false,
      rerenderchart: false
    };
  },
  methods: {
    setTimespan: function(timespan) {
      this.timespan = timespan;
      this.rerender = !this.rerender;
    },
    setDaySpend: function(dayspend) {
      this.dayspend = dayspend;
      this.rerenderchart = !this.rerenderchart;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.panels {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.panel1 {
  width: 500px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin-left: 50px;
}

.panel2 {
  width: 500px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: center; */
  margin-right: 0px;
}

.divider {
  margin-right: 20px;
}
</style>
