<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { addLike } from '../queries/galleryQueries';
const hartClass = ref('notLike');

const props = defineProps({
  id: String,
  amount: Number,
});

function like() {
  hartClass.value = 'like';
  props.id && addLike(props.id);
}
</script>

<template>
  <span @click="like" :class="hartClass">
    {{ amount }}
    <img src="like.svg" />
  </span>
</template>

<style scoped>
.like {
    color: red;
}

.notLike {
    color: blue;
}
</style>
