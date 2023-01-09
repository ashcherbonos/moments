<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';
import { fetchGalariesList, type IGalleries } from '../queries/galleryQueries';
import GallerieCarousel from './GallerieCarousel.vue';
import LikeButton from './LikeButton.vue';

const listOfGalleries = ref([] as IGalleries[]);

async function fetchData() {
  listOfGalleries.value = listOfGalleries.value.concat(
    await fetchGalariesList(listOfGalleries.value.length)
  );
}

fetchData();

const loaddingRef = ref(null);
const isVisible = useElementVisibility(loaddingRef);

watch(isVisible, fetchData);
</script>

<template>
  <div class="galleries-list-container">
    <div
      v-for="(gallery, index) in listOfGalleries"
      :key="index"
      class="galleries-container"
    >
      <div class="gallery-header">
        <h2 class="gallery-title">{{ gallery.title }}</h2>
        <LikeButton :id="gallery._id" />
      </div>
      <GallerieCarousel :src="gallery.images" />
    </div>
    {{ isVisible }}
    <div ref="loaddingRef">Loading...</div>
  </div>
</template>
