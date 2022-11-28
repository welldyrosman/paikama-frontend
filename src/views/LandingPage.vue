<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../components/layout/Navbar.vue';
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>
