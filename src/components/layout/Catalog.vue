
<template>
    <div class="d-flex flex-column">
        <div class="row row-cols-1 row-cols-md-4 g-3">
            <CatalogCard v-for="item, index in packStore.packages" :package="item" :seq="index + 1" :key="index" />
        </div>
        <div class="text-center">
            <button class="btn btn-bd-primary px-5">Lihat Semua Aktivitas</button>
        </div>
    </div>
</template>
<script lang="ts">
import CatalogCard from '../widget/CatalogCard.vue';

import { usePackStore } from '@/stores/package';
import type Package from '@/types/Package';
export default {
    setup() {
        const packStore = usePackStore();
        return {
            packStore
        }
    },
    beforeMount() {

    },
    components: { CatalogCard },
    data() {
        return {
            //packages:Packages.data
        }
    },
}
</script>