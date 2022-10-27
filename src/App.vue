<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue';
import Jumbotron from './components/layout/Jumbotron.vue';
</script>

<template>
    <Navbar />
    <Jumbotron/>
    <RouterView />
</template>

<style scoped>

</style>
