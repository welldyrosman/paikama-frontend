<template>

    <div class="d-flex flex-box py-3">
        <Carousel :settings="settings" :breakpoints="breakpoints">
            <Slide v-for="slide in items" :key="slide">
                <ItemFlexVue :item="slide" />
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>
<script lang="ts">
import ItemFlexVue from './ItemFlex.vue';
export default {
    components: { ItemFlexVue },
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "Semua Lokasi"
                },
                {
                    id: 1,
                    title: "Bali"
                }, {
                    id: 2,
                    title: "Jakarta"
                }, {
                    id: 3,
                    title: "Lombok"
                }, {
                    id: 4,
                    title: "Payakumbuh"
                }, {
                    id: 5,
                    title: "Banten"
                }, {
                    id: 6,
                    title: "Papua Nugini"
                }, {
                    id: 7,
                    title: "Kalimantan"
                }, {
                    id: 8,
                    title: "Lampung"
                }, {
                    id: 9,
                    title: "Lampung"
                }, {
                    id: 10,
                    title: "Lampung"
                }, {
                    id: 11,
                    title: "Lampung"
                }, {
                    id: 12,
                    title: "Lampung"
                }, {
                    id: 13,
                    title: "Lampung"
                }, {
                    id: 14,
                    title: "Lampung"
                },
            ],
            settings: {
                itemsToShow: 10,
                snapAlign: 'center',
            },
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 9,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 10,
                    snapAlign: 'start',
                },
            },
        }
    },
}
</script>
<style scoped>
.flex-box {
    font-size: smaller;
    max-width: 100%;
    overflow-x: hidden;
}
</style>