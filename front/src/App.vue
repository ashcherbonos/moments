<script setup lang="ts">
import { ref } from 'vue';

const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch('http://localhost:8000/api/galleries');
  todoData.value = await res.json();
}

fetchData();
</script>

<template>
  <main>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </main>
</template>

<style scoped>

</style>
