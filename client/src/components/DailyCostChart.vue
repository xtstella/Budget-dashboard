<template>
  <Chart :chartdata="chartdata" :options="options" class="dailycost-chart"></Chart>
</template>

<script>
import axios from "axios";
import Chart from "./Chart";
export default {
  components: {
    Chart
  },
  data() {
    return {
      // data: null,
      // label: [],
      // rows: [],
      // dates: []
      chartdata: null
    };
  },
  async mounted() {
    // try {
    //   let api_url = "http://127.0.0.1:3000/getDailyCost";
    //   await axios.get(api_url).then(async response => {
    //     this.cost = response.data.data;

    //   });
    // } catch(e) {
    //   console.error(e)
    // }
    this.chartdata = [1,2,3,4,5,6]
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [],
        datasets: []
      };
    }
  }
};
</script>

<style>
.myChart {
  width: 80%;
  margin: 5rem 0;
  background-color: #ffffff;
}
</style>

