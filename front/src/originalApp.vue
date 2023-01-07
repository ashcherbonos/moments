<script setup lang="ts">
import { ref } from 'vue';

interface IGalleries {
  titleImage: string;
  images: [string];
}

const pending = ref(false);
const listOfGalleries = ref([] as IGalleries[]);

async function fetchData() {
  pending.value = true;
  const res = await fetch('http://localhost:8000/api/galleries');
  listOfGalleries.value = await res.json();
  pending.value = false;
}

fetchData();
</script>

<template>
  <main>
    <p v-if="pending">Loading...</p>
    <ul v-else>
      <li v-for="(galleri, index) in listOfGalleries" :key="index">
        <img :src="galleri.titleImage" />
      </li>
    </ul>
  </main>
</template>

<style scoped>

</style>
