<template>
    <main>
        <div class="f-24 f-sbold my-3">Kegiatan untuk anda</div>
        <div class="row">
            <div v-for="(item, index) in items" :key="index" class="col-md-4 mb-3 highlight-item onpagination-load ">
                <RouterLink to="/" style="--bs-aspect-ratio: 60%;" class="ratio d-block rounded-3 overflow-hidden"
                    href="/id/id/destinasi/sumatra/danau-toba">
                    <img src="@/assets/image/website/city/city-01.jpg"
                        class=" bg-img w-100 h-100 object-fit-cover position-absolute top-0" alt="Danau Toba"
                        loading="lazy">
                    <div
                        class="overlay-text position-absolute top-0 w-100 px-4 py-4 text-center d-flex h-100 justify-content-start align-items-top">
                        <h6 class="text-white f-20 f-sbold  pb-2 mb-4">{{item.title}}</h6>
                    </div>
                    <div
                        class="overlay-text position-absolute top-0 w-100 px-4 py-4 d-flex h-100 justify-content-start align-items-center">
                        <p class="text-white pb-2 mb-4">
                           {{item.desc}}</p>
                    </div>
                    <div
                        class="overlay-text position-absolute top-0 w-100 px-4 py-4 d-flex h-100 
                        justify-content-start align-items-end">
                        <button class="btn btn-sm btn-bd-primary">Lihat Aktifitas</button>
                    </div>

                </RouterLink>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import data from '@/stores/productkind.json'
export default{
    data() {
        return {
            items:data
        }
    },
}
</script>
<style scoped lang="scss">
.activitie-box {}
.overlay-text {
    background: transparent linear-gradient(180deg, rgb(13 28 52 / 0) 0, rgb(13 28 52 / 50%) 100%) 0 0 no-repeat padding-box;
}
.ratio {
    &:hover img.bg-img{
            transform: scale(1.2) !important;
        }
    & img.bg-img {
        transition: transform .3s;
       
    }
}
</style>