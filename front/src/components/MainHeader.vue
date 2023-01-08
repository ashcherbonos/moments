<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';

const normalLogoClass = 'main-header-logo';
const smallLogoClass = 'main-header-logo-small';

const logoClass = ref(normalLogoClass);

const scrollingRef = ref(null);
const isVisible = useElementVisibility(scrollingRef);

watch(
  isVisible,
  () => (logoClass.value = isVisible.value ? normalLogoClass : smallLogoClass)
);
</script>

<template>
  <div class="main-header">
    <div class="main-header-logo-container">
      <img src="logo.svg" alt="Bunte Moments .de" :class="logoClass" />
    </div>
  </div>
  <div ref="scrollingRef" class="main-header-placeholder"></div>
</template>
