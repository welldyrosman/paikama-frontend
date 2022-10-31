<template>
    <div class="col-6">
        <div class="card h-100 card-catalog ">
            <Carousel :wrap-around="true">
                <Slide v-for="slide in 10" :key="slide">
                    <img src="@/assets/image/website/package/pack.jpg" class="img-fluid card-img-top img-catalog  "
                        alt="...">
                </Slide>
                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
            <div class="compare-btn px-2 py-1 m-2 text-white text-xs-center">
                <IconBase iconName="compare" width="1rem" height="1rem">
                    <IconCompare />
                </IconBase>
                Bandingkan
            </div>
            <i class="bi bi-heart text-white position-absolute m-2 top-0 end-0 wishlist"></i>
            <div class="card-body ps-0" style="font-size:0.7rem ;">
                <router-link to="package" class="card-title f-med text-sm-start mb-0 text-decoration-none">Opentrip 3D2N
                    Labuan Bajo - Komodo By Travel Go !
                </router-link>
                <p class="card-text text-muted mb-0">Manggarai Barat</p>
                <Travelcomp class="mt-2"/>
                <div class="discount d-flex my-2">
                    <div class="text-decoration-line-through text-muted"><span
                            class="badge bg-danger f-med me-2 p-2">20%</span>Rp.400.000</div>
                </div>
                <div class="price d-flex">
                    <h6 class="f-sbold">Rp. 350.000</h6><small class="text-muted ms-1" style="font-size:0.7rem ;">Per
                        Pax</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import IconBase from "../IconBase.vue";
import IconCompare from "../icons/IconCompare.vue";
import Travelcomp from './Travelcomp.vue';
export default {
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