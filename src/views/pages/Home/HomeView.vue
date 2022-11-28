<script setup lang="ts">
import ItemsFlex from '@/components/layout/ItemsFlex.vue';
import CatalogVue from '@/components/layout/Catalog.vue';
import Jumbotron from '@/components/layout/Jumbotron.vue';
import FooterComp from '@/components/layout/Footer.vue';
import FloatingButton from '@/components/layout/FloatingButton.vue';
import CategoryCity from '@/components/layout/CategoryCity.vue';
import SearchBar from '@/components/layout/SearchBar.vue';
import Advertise from '@/components/layout/AdvertiseBanner.vue';
import PopularDestination from '@/components/layout/PopularDestination.vue';
import ActivitiesVue from '@/components/layout/Activities.vue';
</script>

<template>
  <main>
    <div class="container">
    <Advertise/>
    <ActivitiesVue/>
    <PopularDestination/>
    <div class="f-24 f-sbold my-3">Aktivitas Terbaik</div>
    <CatalogVue />
    </div>
  </main>
</template>
<style lang="scss">
.onmobile {
  border-radius: 0 !important;
  position: fixed;
  z-index: 100;
}
</style>
