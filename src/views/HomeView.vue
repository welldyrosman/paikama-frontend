<script setup lang="ts">
import ItemsFlex from '@/components/layout/ItemsFlex.vue';
import CatalogVue from '@/components/layout/Catalog.vue';
import Jumbotron from '@/components/layout/Jumbotron.vue';

</script>

<template>
  <main>
    <Jumbotron class="margin-navbar"/>
    <div class="container">
      <ItemsFlex/>
      <CatalogVue/>
    </div>
  </main>
</template>
