<script setup lang="ts">
import ItemsFlex from '@/components/layout/ItemsFlex.vue';
import CatalogVue from '@/components/layout/Catalog.vue';
import Jumbotron from '@/components/layout/Jumbotron.vue';
import FooterComp from '@/components/layout/Footer.vue';
import FloatingButton from '@/components/layout/FloatingButton.vue';
import CategoryCity from '@/components/layout/CategoryCity.vue';
import SearchBar from '@/components/layout/SearchBar.vue';

</script>

<template>
    <main class="margin-navbar">
       
        <SearchBar class="onmobile d-none d-sm-block d-md-none" />
            <RouterView />
        <FooterComp class="fixed-bottom" />
    </main>
</template>
<style lang="scss">
.onmobile {
    border-radius: 0 !important;
    position: fixed;
    z-index: 100;
}
</style>
