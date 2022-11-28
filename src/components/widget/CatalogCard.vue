<template>
        <div class="card card-catalog">
            <Carousel :wrap-around="true">
                <Slide v-for="slide in package.images" :key="slide.id">
                    <img :src="getimage(slide.paths)" class="img-fluid card-img-top img-catalog  " alt="...">
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
            <div @click="$router.push('/compare')" class="compare-btn px-2 py-1 m-2 text-white text-xs-center">
                <IconBase iconName="compare" width="1rem" height="1rem">
                    <IconCompare />
                </IconBase>
                Bandingkan
            </div>
            <i class="bi bi-heart text-white position-absolute me-4 mt-2 top-0 end-0 wishlist"></i>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div @click="seeDetail"
                        class="card-title f-med mb-0 text-decoration-none text-grey800">
                        {{ package.title }}
                </div>
                    <i class="bi bi-star-fill text-warning"></i><span class="text-warning f-sbold">{{ package.star
                    }}</span>
                </div>
                <p class="card-text text-muted mb-0">{{ package.city }}</p>
                <Travelcomp :data="package.agency" class="mt-2" />
                <div class="discount d-flex my-2">
                    <div class="text-decoration-line-through text-muted"><span
                            class="badge bg-danger f-med me-2 p-2">20%</span>{{ $toCurrency(package.price_before) }}
                    </div>
                </div>
                <div class="price d-flex">
                    <h6 class="f-sbold f-16">{{ $toCurrency(package.price) }}</h6><small class="text-muted ms-1"
                        style="font-size:0.7rem ;">Per
                        Pax</small>
                </div>
            </div>
        </div>
</template>
<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import IconBase from "../IconBase.vue";
import IconCompare from "../icons/IconCompare.vue";
import Travelcomp from './Travelcomp.vue';
import { usePackStore } from '@/stores/package';
export default {
    setup() {
        const packStore = usePackStore();
        return {
            packStore
        }
    },
    props: {
        package: {
            type: Object,
            default: {
                images: [],
                agency: {}
            }
        },
        seq: {
            default: 1
        }
    },
    methods: {
        getimage(path: string): string {
            return new URL(`/src/assets/${path}`, import.meta.url).href
        },
        seeDetail(){
            this.packStore.$patch({
                packView:this.package
            })
            this.$router.push({
                path:'/package/'+this.package.title,
            })
        }
    },
    computed: {

    },
    data() {
        return {
            item: {
                title: ""
            }
        };
    },
    components: { IconBase, IconCompare, Travelcomp }
}
</script>
<style scoped>
.card-title {
    cursor: pointer;
    max-width: 85%;
}


.wishlist {
    cursor: pointer;
}

.wishlist:hover {
    color: yellow !important;
}

.compare-btn {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.557);
    border-radius: 1rem;
    font-size: x-small;
    cursor: pointer;
}

.card-catalog {
    border: none;
    border-radius: 1rem;
}

.img-catalog {
    border-radius: 1rem;
}
</style>