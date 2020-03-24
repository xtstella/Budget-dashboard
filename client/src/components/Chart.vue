<template>
  <JSCharting :options="options" class="columnChart"></JSCharting>
</template>

<script>
import JSCharting from "jscharting-vue";

export default {
  props: ["timespan", "dayspend"],
  components: {
    JSCharting
  },
  data() {
    var points = [];
    var index = 0;
    for (
      var i = parseInt(this.timespan.first, 10);
      i <= parseInt(this.timespan.last, 10);
      i++
    ) {
      points.push({ x: i, y: this.dayspend[index] });
      index++;
    }
    return {
      name: "columnChart",
      options: {
        type: "line",
        series: [
          {
            points
          }
        ]
      }
    };
  }
};
</script>

<style>
.columnChart {
  margin-left: 50px;
  height: 300px;
}
</style>