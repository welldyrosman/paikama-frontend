<template>
    <div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="f-24 f-sbold my-3">Informasi Terbaru</div>
            <div>
                <button class="btn btn-sm me-3  btn-bd-primary circle" @click="currentSlide += 1"><i class="f-sbold bi bi-arrow-left"></i></button>
                <button  class="btn btn-sm btn-bd-primary circle" @click="currentSlide -= 1"><i class="bi bi-arrow-right"></i></button>
            </div>
        </div>
        <Carousel :settings="settings" :breakpoints="breakpoints" v-model="currentSlide">
            <Slide v-for="i in 4" :index='i'>
                <img class="img-fluid carousel__item me-3" :src=getimage(i) />
            </Slide>
            <template #addons>
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>
<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
export default {
    data() {
        return {
            currentSlide: 0,
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            breakpoints: {
                700: {
                    itemsToShow: 2,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                },
            },
        }
    },
    methods: {
        getimage(path: number): string {
            return new URL(`/src/assets/image/website/advertise/adds-0${path + 4}.png`, import.meta.url).href
        },
    }
}
</script >
<style scoped>
.carousel__slide {
    padding: 5px;
}
</style>