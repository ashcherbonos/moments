<script setup lang="ts">
import type { PropType } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  src: Array as PropType<Array<string>>,
});
</script>

<template>
  <carousel :items-to-show="0.9" :wrap-around="true">
    <slide v-for="(image, index) in src" :key="index">
      <img :src="image" />
    </slide>
    <template #addons>
      <Pagination />
    </template>
  </carousel>
</template>

<style scoped>
img {
  width: 50vw;
  height: 66vh;
  object-fit: cover;
}
</style>
