<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';
import { fetchGalariesList, type IGalleries } from '../queries/galleryQueries';
import GallerieCarousel from './GallerieCarousel.vue';
import LikeButton from './LikeButton.vue';

const pending = ref(false);
const listOfGalleries = ref([] as IGalleries[]);

async function fetchData() {
  pending.value = true;
  listOfGalleries.value = listOfGalleries.value.concat(
    await fetchGalariesList(listOfGalleries.value.length)
  );
  pending.value = false;
}

fetchData();

const loaddingRef = ref(null);
const isVisible = useElementVisibility(loaddingRef);

watch(isVisible, fetchData);
</script>

<template>
  <div v-for="(gallery, index) in listOfGalleries" :key="index">
    <GallerieCarousel :src="gallery.images" />
    <LikeButton :id="gallery._id" />
  </div>
  {{ isVisible }}
  <div ref="loaddingRef">Loading...</div>
</template>

<style scoped></style>
