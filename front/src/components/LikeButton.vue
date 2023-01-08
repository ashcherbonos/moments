<script setup lang="ts">
import { ref } from 'vue';
import 'vue3-carousel/dist/carousel.css';
import { addLike, getLike } from '../queries/galleryQueries';

const likedClass = 'like-label-liked',
  notLikedClasss = 'like-label-not-liked',
  likedImg = 'hartLiked.svg',
  notLikedImg = 'hart.svg';

const labelClass = ref(notLikedClasss);
const imageSrc = ref(notLikedImg);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const amount = ref(0);

async function like() {
  labelClass.value = likedClass;
  imageSrc.value = likedImg;
  amount.value = await addLike(props.id);
}

async function fetchLike() {
  amount.value = await getLike(props.id);
}

fetchLike();
</script>

<template>
  <div @click="like" class="like-button-container">
    <span :class="labelClass">
      {{ amount }}
    </span>
    <img :src="imageSrc" class="like-button-image" />
  </div>
</template>
