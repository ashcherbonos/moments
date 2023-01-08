<script setup lang="ts">
import type { PropType } from 'vue';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

defineProps({
  src: Array as PropType<Array<string>>,
});
</script>

<template>
  <div class="carousel-container">
    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="(image, index) in src" :key="index">
        <img :src="image" class="slide-image" />
      </slide>
      <template #addons>
        <Pagination />
      </template>
    </carousel>
  </div>
</template>
