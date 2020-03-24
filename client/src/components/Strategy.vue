<template>
  <table>
    <tr>
      <th>platform</th>
      <th>strategy</th>
    </tr>
    <div v-bind:key="item.id" v-for="item in data">
      <tr>
        <td>{{item[0]}}</td>
        <td>
          <tr>
            <th>id</th>
            <th>strategy_id</th>
            <th>day</th>
            <th>spend</th>
            <th>clicks</th>
            <th>impressions</th>
          </tr>
          <div v-bind:key="lifetime.id" v-for="lifetime in item[1]">
            <tr>
              <td>{{lifetime.id}}</td>
              <td>{{lifetime.strategy_id}}</td>
              <td>{{lifetime.day}}</td>
              <td>{{lifetime.spend}}</td>
              <td>{{lifetime.clicks}}</td>
              <td>{{lifetime.impressions}}</td>
            </tr>
          </div>
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
      data: []
    };
  },
  async mounted() {
    await axios.get("http://127.0.0.1:3000/strategy").then(async response => {
      for (let i = 0; i < response.data.length; i++) {
        var platform = response.data[i].platform_name;
        var lifetimes = [];
        await axios
          .get(
            "http://127.0.0.1:3000/lifetime/getByStrategyID/" +
              response.data[i].id
          )
          .then(response => {
            for (let item of response.data) {
              let day = parseInt(item.day.split("T")[0].split("-")[2], 10);
              if (day > this.timespan.first && day < this.timespan.last) {
                lifetimes.push(item);
              }
            }
          });
        this.data.push([platform, lifetimes]);
      }
    });
    console.log(this.data);
  }
};
</script>

<style>
table {
  margin-top: 10px;
  border-color: black;
  border-style: solid;
  border-width: 2px;
}
td {
  border-color: lightblue;
  border-style: solid;
  border-width: 2px;
}
</style>