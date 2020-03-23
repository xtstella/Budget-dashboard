<template>
  <table>
    <tr>
      <th>advertiser id</th>
      <th>strategy id</th>
      <th>clicks</th>
      <th>impressions</th>
      <th>total spends</th>
    </tr>
    <tr>
      <td>{{ Data.id }}</td>
      <td>{{ Data.strategy_name }}</td>
      <td>6984712229</td>
      <td>776023864</td>
      <td>facebook</td>
    </tr>
    <tr>
      <td>648</td>
      <td>Strat 1</td>
      <td>6984712229</td>
      <td>776023864</td>
      <td>facebook</td>
    </tr>
    
  </table>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Strategy',
  data() {
    return {
      Data: {},
    }
  },
  mounted() {
    axios.get('http://localhost:3000/strategy')
      .then((response) =>{
      this.Data = response.data;
    })
  }
}

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