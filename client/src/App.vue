<template>
  <div class="container">
    <DatePicker />
    <div class="panels">
      
      <div class="panel1">
        <h1>Lifetime</h1>
        <Timespan />
      </div>
      <div class="divider" />
      <div class="panel2">
        <h1>Strategy</h1>
        <Strategy />
      </div>
      
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import DatePicker from "./components/DatePicker"
import Strategy from "./components/Strategy"
import Timespan from "./components/Timespan"

export default {
  name: "App",
  components: { DatePicker, Strategy, Timespan },
  data() {
    return {
      activeName: "second"
    };
  }
  // methods: {
  //   handleClick(tab, event) {

  //   }
  // }
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
