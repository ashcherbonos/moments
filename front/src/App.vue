<script setup lang="ts">
import GalleriesList from './components/Galleries/GalleriesList.vue';
import MainHeader from './components/Layout/MainHeader.vue';
</script>

<template>
  <div class="root-container">
    <header>
      <MainHeader />
    </header>
    <main>
      <GalleriesList />
    </main>
  </div>
</template>
