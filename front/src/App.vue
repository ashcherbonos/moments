<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      todoData: null,
    };
  },
  methods: {
    async fetchData() {
      this.todoData = null;
      const res = await fetch("http://localhost:8000/api/galleries");
      this.todoData = await res.json();
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<template>
  <main>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </main>
</template>

<style scoped>

</style>
