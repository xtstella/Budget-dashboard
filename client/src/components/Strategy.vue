<template>
  <table>
    <tr class="firstrow">
      <th class='firstth'>platform</th>
      <th class='secondth'>strategy</th>
    </tr>
    <div v-bind:key="item.id" v-for="item in panel2data">
      <tr>
        <td>{{item[0]}}</td>
        <td>
          <tr>
            <th>Strategy name</th>
            <th>Advertiser id</th>
            <th>Strategy id</th>
            <th>Total Spends</th>
            <th>Total clicks</th>
            <th>Total impressions</th>
          </tr>
          <tr>
            <td>{{item[1][0]}}</td>
            <td>{{item[1][1]}}</td>
            <td>{{item[1][2]}}</td>
            <td>{{item[1][3]}}</td>
            <td>{{item[1][4]}}</td>
            <td>{{item[1][5]}}</td>
          </tr>
        </td>
      </tr>
    </div>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "Strategy",
  props: ["timespan"],
  data() {
    return {
      data: [],
      panel2data: [],
      dayspend: [],
      strategydata: []
    };
  },
  async mounted() {
    this.data = [];
    await axios.get("http://127.0.0.1:3000/strategy").then(async response => {
      for (let i = 0; i < response.data.length; i++) {
        var platform = response.data[i].platform_name;
        var lifetimes = [];
        this.strategydata.push([
          response.data[i].id,
          response.data[i].strategy_name,
          response.data[i].advertiser_id
        ]);
        await axios
          .get(
            "http://127.0.0.1:3000/lifetime/getByStrategyID/" +
              response.data[i].id
          )
          .then(response => {
            for (let item of response.data) {
              let day = parseInt(item.day.split("T")[0].split("-")[2], 10);
              if (day >= this.timespan.first && day <= this.timespan.last) {
                lifetimes.push(item);
              }
            }
          });
        this.data.push([platform, lifetimes]);
      }
    });

    // set data for chart (panel 1)
    for (
      var i = parseInt(this.timespan.first, 10);
      i <= parseInt(this.timespan.last, 10);
      i++
    ) {
      this.dayspend.push(0);
    }
    var index = 0;
    for (
      var i = parseInt(this.timespan.first, 10);
      i <= parseInt(this.timespan.last, 10);
      i++
    ) {
      for (let item of this.data) {
        for (let lf of item[1]) {
          if (parseInt(lf.day.split("T")[0].split("-")[2], 10) === i) {
            this.dayspend[index] += lf.spend;
          }
        }
      }
      index++;
    }
    this.$emit("sendDaySpend", this.dayspend);

    // set data for table (panel 2)
    for (var i = 0; i < this.data.length; i++) {
      var totalspend = 0;
      var totalclicks = 0;
      var totalimpressions = 0;
      for (let item of this.data[i][1]) {
        totalspend += item.spend;
        totalclicks += item.clicks;
        totalimpressions += item.impressions;
      }
      var strategy_name;
      var advertiser_id;
      for (let strat of this.strategydata) {
        if (strat[0] === this.data[i][1][0].strategy_id) {
          strategy_name = strat[1];
          advertiser_id = strat[2];
        }
      }
      this.panel2data.push([
        this.data[i][0],
        [
          strategy_name,
          advertiser_id,
          this.data[i][1][0].strategy_id,
          totalspend.toFixed(2),
          totalclicks,
          totalimpressions
        ]
      ]);
    }
  }
};
</script>

<style>
table {
  margin-top: 10px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
  width: 500px;
}
.firstrow {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
}
td {
  border-color: lightblue;
  border-style: solid;
  border-width: 2px;
}

.secondth {
  margin-left: 20px;
}
</style>