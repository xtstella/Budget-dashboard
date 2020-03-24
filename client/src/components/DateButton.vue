<template>
  <button @click="toggleSelected" class="date">{{date.date}}</button>
</template>

<script>
export default {
  name: "DateButton",
  props: ["date", "timespan"],
  components: {},
  data() {},
  methods: {
    toggleSelected: function() {
      if (this.date.date === this.timespan.first) {
        this.$emit("resetTimespan");
      } else {
        this.$emit("setTimespan", this.date.date);
      }
    }
  }
};
</script>

<style scoped>
.date {
  margin-right: 5px;
  margin-bottom: 5px;
  border-color: black;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
}
.is-selected {
  background-color: black;
  color: white;
}
</style>