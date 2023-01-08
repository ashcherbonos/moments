<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { addLike, getLike } from '../queries/galleryQueries';
const hartClass = ref('notLike');

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const amount = ref(0);

async function like() {
  hartClass.value = 'like';
  amount.value = await addLike(props.id);
}

async function fetchLike() {
  amount.value = await getLike(props.id);
}

fetchLike();
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
