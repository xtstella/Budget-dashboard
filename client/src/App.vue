<template>
  <div class="container">
    <DatePicker v-on:sendTimespan="setTimespan" />
    <div class="panels">
      <div class="panel1">
        <h1>Lifetime</h1>
        <Timespan />
      </div>
      <div class="divider" />
      <div class="panel2">
        <h1>Strategy</h1>
        <Strategy v-bind:timespan='timespan' :key="rerender" />
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from "./components/DatePicker";
import Strategy from "./components/Strategy";
import Timespan from "./components/Timespan";

export default {
  name: "App",
  components: { DatePicker, Strategy, Timespan },
  data() {
    return {
      activeName: "second",
      timespan: {first: 100, last: 100},
      rerender: false
    };
  },
  methods: {
    setTimespan: function(timespan) {
      this.timespan = timespan
      this.rerender = !this.rerender
    }
  },
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
  justify-content: center;
}

.panel1 {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
}

.panel2 {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 0px;
}

.divider {
  margin-right: 20px;
}
</style>
