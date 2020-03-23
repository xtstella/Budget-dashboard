<template>
  <div class="container">
    <h1>{{month}}</h1>
    <div class="dates">
      <div v-bind:key="date.id" v-for="date in dates">
        <DateButton v-bind:date="date" />
        <!-- <button v-on:click="toggleSelected" class="date">Hello</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import DateButton from "./DateButton";
export default {
  name: "DatePicker",
  components: {
    DateButton
  },
  data() {
    var date = new Date();
    var month = date.getMonth();
    var dates = [];
    if (month === 2) {
      for (var i = 0; i < 31; i++) {
        dates.push({ id: i, date: i + 1, selected: false });
      }
    }
    return {
      dates: dates,
      month: month === 2 ? "Mars" : "another month"
    };
  },
  methods: {
    toggleSelected() {}
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  background-color: lightblue;
}
.dates {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>