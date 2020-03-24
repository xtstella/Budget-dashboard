<template>
  <button
    @click="toggleSelected"
    class="date"
    v-bind:class="{'is-selected': date.selected}"
  >{{date.date}}</button>
</template>

<script>
export default {
  name: "DateButton",
  props: ["date"],
  components: {},
  data() {},
  methods: {
    toggleSelected: function() {
      this.$emit("setTimespan", this.date.date)
      this.date.selected = !this.date.selected;
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