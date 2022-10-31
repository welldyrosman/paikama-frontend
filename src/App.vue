<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue';
import Jumbotron from './components/layout/Jumbotron.vue';
import FloatingButton from './components/layout/FloatingButton.vue';
import FooterComp from './components/layout/Footer.vue';
</script>

<template>
    <Navbar />
    
   
    <RouterView />
    <FloatingButton/>
    
    <FooterComp/>

</template>

<style scoped>

</style>
