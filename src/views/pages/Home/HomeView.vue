<script setup lang="ts">
import CatalogVue from '@/components/layout/Catalog.vue';
import Advertise from '@/components/layout/AdvertiseBanner.vue';
import PopularDestination from '@/components/layout/PopularDestination.vue';
import ActivitiesVue from '@/components/layout/Activities.vue';
import { useCartStore } from '@/stores/cart';
import { onMounted } from 'vue';

const cartStore = useCartStore();

onMounted(() => {
  cartStore.$reset();
});
let loadingactive=false
</script>

<template>
  <main>
    <div class="container">
   
      <Advertise />
      <ActivitiesVue />
      <PopularDestination />
      <div class="f-24 f-sbold my-3">Aktivitas Terbaik</div>
      <CatalogVue />
    </div>
  </main>
</template>
<style lang="scss">
.vld-overlay.is-full-page {
  z-index: 99999 !important;
}

.onmobile {
  border-radius: 0 !important;
  position: fixed;
  z-index: 100;
}
</style>
