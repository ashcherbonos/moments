<script setup lang="ts">
import { ref } from 'vue';
import { fetchGalariesList, type IGalleries } from '../queries/galleryQueries';
import GallerieCarousel from './GallerieCarousel.vue';
import LikeButton from './LikeButton.vue';

const pending = ref(false);
const listOfGalleries = ref([] as IGalleries[]);

async function fetchData() {
  pending.value = true;
  listOfGalleries.value = await fetchGalariesList();
  pending.value = false;
}

fetchData();
</script>

<template>
  <div v-for="(gallery, index) in listOfGalleries" :key="index">
    <GallerieCarousel :src="gallery.images" />
    <LikeButton :id="gallery.id" />
  </div>
</template>

<style scoped>

</style>
