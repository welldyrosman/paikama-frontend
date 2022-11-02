<script setup lang="ts">
import ItemsFlex from '@/components/layout/ItemsFlex.vue';
import CatalogVue from '@/components/layout/Catalog.vue';
import Jumbotron from '@/components/layout/Jumbotron.vue';
import FooterComp from '@/components/layout/Footer.vue';
import FloatingButton from '@/components/layout/FloatingButton.vue';
</script>

<template>
  <main>
    <Jumbotron class="margin-navbar"/>
    <div class="container">
      <ItemsFlex/>
      <CatalogVue/>
    </div>
    <FloatingButton style="z-index:9999 ;"/>
    <FooterComp class="fixed-bottom"/>
   
  </main>
</template>
