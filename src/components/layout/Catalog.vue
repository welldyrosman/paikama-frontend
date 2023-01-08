
<template>
    <div class="d-flex flex-column">
        <div class="row row-cols-1 row-cols-md-4 g-3">
            <CatalogCard v-model:loading="loading" v-for="item, index in packagedata" :package="item" :seq="index + 1" :key="index" />
        </div>
        <div class="text-center">
            <div class="mb-3" v-if="packagedata.length<1">Tidak Ada Destinasi Tersedia</div>
            <button class="btn btn-bd-primary px-5">Lihat Semua Aktivitas</button>
        </div>
    </div>
</template>
<script lang="ts">
import CatalogCard from '../widget/CatalogCard.vue';
import landingPageService from '@/services/landing-page-service';
export default {
    beforeMount() {
        landingPageService.getAll().then((ret)=>{
            this.packagedata=ret.data;
            this.loading=false
        })
    },
    components: { CatalogCard },
    data() {
        return {
            packagedata:[],
            loading:true
        }
    },
}
</script>