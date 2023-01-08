<script setup lang="ts">
import GalleriesList from './components/GalleriesList.vue';
import MainHeader from './components/MainHeader.vue';
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
