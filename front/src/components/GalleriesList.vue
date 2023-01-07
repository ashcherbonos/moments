<script setup lang="ts">
import { ref } from 'vue';
import GallerieCarousel from './GallerieCarousel.vue';

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
  <GallerieCarousel
    v-for="(galleri, index) in listOfGalleries"
    :key="index"
    :src="galleri.images"
  />
</template>

<style scoped>

</style>
