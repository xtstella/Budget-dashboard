<template>
  <div class="container">
    <h1>{{month}}</h1>
    <div class="dates">
      <div v-bind:key="date.id" v-for="date in dates">
        <div v-if="date.id+1 >= timespan.first && date.id+1 <= timespan.last">
          <DateButton
            v-bind:date="date"
            class="is-selected"
            v-bind:timespan="timespan"
            v-on:setTimespan="setTimespan"
            v-on:resetTimespan="resetTimespan"
          />
        </div>
        <div v-else>
          <DateButton
            v-bind:date="date"
            v-bind:timespan="timespan"
            v-on:setTimespan="setTimespan"
            v-on:resetTimespan="resetTimespan"
          />
        </div>
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
        if (i < 9) {
          dates.push({ id: i, date: "0" + (i + 1), selected: false });
        } else {
          dates.push({ id: i, date: (i + 1).toString(), selected: false });
        }
      }
    }
    return {
      dates: dates,
      month: month === 2 ? "Mars" : "another month",
      timespan: { first: 100, last: 100 }
    };
  },
  methods: {
    setTimespan: function(date) {
      if (date < this.timespan.first) {
        this.timespan.first = date;
      } else {
        this.timespan.last = date;
      }
      this.$emit("sendTimespan", this.timespan);
    },
    resetTimespan: function() {
      this.timespan.first = 100;
      this.timespan.last = 100;
      this.$emit("sendTimespan", this.timespan);
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