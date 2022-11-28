<template>

    <div class="row row-cols-md-3 row-cols-2 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 g-4">
        <div v-for="(item, index) in cities " :key="index" class="col highlight-item onpagination-load ">

            <div @click="select(item as unknown as City)" style="--bs-aspect-ratio: 60%;"
                class="ratio d-block rounded-3 overflow-hidden" href="/id/id/destinasi/sumatra/danau-toba">
                <img :src="getlogo(item.image)" class=" bg-img w-100 h-100 object-fit-cover position-absolute top-0"
                    alt="Danau Toba" loading="lazy">
                <div
                    class="overlay-text position-absolute top-0 w-100 px-3 d-flex h-100 justify-content-start align-items-end">
                    <h6 class="text-white f-24 f-sbold pb-1 mb-1">{{ item.title }}</h6>
                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import mycities from '@/stores/indoposition.json'
import type City from '@/types/City'
import { useCityStore } from '@/stores/city'
export default {
    setup() {
        const stores = useCityStore();
        return {
            stores
        };
    },
    data() {
        return {
            cities: mycities.slice(0, 10)
        }
    },
    methods: {
        getlogo(img: string): string {
            return new URL(`/src/assets/${img}`, import.meta.url).href
        },
        convertToSlug(Text:string) {
            return Text.toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');
        },
        select(item: City) {
            this.stores.cities = item
            this.$router.push('/city-view/' + this.convertToSlug(item.title));
        }
    },
    computed: {

    }
}
</script>
<style scoped lang="scss">
.overlay-text {
    background: transparent linear-gradient(180deg, rgb(13 28 52 / 0) 0, rgb(13 28 52 / 50%) 100%) 0 0 no-repeat padding-box;
}

.ratio {
    &:hover img.bg-img {
        transform: scale(1.2) !important;
    }

    & img.bg-img {
        transition: transform .3s;

    }
}
</style>