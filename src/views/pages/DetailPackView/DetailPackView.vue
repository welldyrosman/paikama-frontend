
<template>
    <main>
        <div class="container margin-navbar">
            <Breadcumb :paths="paths" class="mt-5 pt-4" />
            <div class="row mt-3">
                <div class="col-lg-6 col-md-12 ps-3 pe-1">
                    <Skeletor height="335" v-if="loading" class="mb-1" />
                    <img class="img-crop" v-else :src="$getImage(package?.images[0]?.img_path)" />
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="row">
                        <div class="col-lg-6 px-1" v-for="(item, index) in package.images.slice(1)" :key="index">
                            <Skeletor height="165" v-if="loading" class="mb-1" />
                            <img :src="$getImage(item?.img_path)" v-else class="img-crop-sm"
                                :class="[{ 'mt-8': (index == 3 || index == 2) }]" />
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <Skeletor width="75%" height="30" v-if="loading" class="mb-1" />
                    <h5 v-else class="f-sbold mt-4 f-24">{{ package.title }}</h5>
                    <Skeletor  height="30" v-if="loading" class="mb-1" />
                    <div v-else class="titlefoot d-flex align-items-center text-truncate">
                        <span class="text-warning me-3"><i class="bi bi-star-fill "></i>
                            {{ Math.round(package.transaction_avg_rating) }}</span>
                        <div>({{ package.comments_count }} Ulasan)</div>
                        <i class="bi bi-dot"></i>
                        <div>{{ package.city?.title }}, {{ package.country?.title }}</div>
                        <i class="bi bi-dot"></i>
                        <Travelcomp :data="package.agency" />
                    </div>
                    <section class="mt-5">
                        <Skeletor  height="30" v-if="loading" class="mb-1" />
                        <h5 v-else class="f-sbold f-24">Tentang Aktifitas Ini</h5>
                        <template v-if="loading">
                            <Skeletor v-for="(item, index) in 10" :key="index"  height="30"  class="mb-1" />
                        </template>
                        <div v-else class="content mt-3">{{ package.description }}</div>
                    </section>
                    <!-- <TransactionBar class="d-lg-none" 
                    v-model:response="package"
                    v-model:package_active="package_active"
                    v-model:package="package_selected"
                    v-model:options="kindtrip" /> -->
                    <hr />
                    <Skeletor  height="30" width="50%" v-if="loading" class="mb-1" />
                    <h4 v-else class="f-sbold mt-3 f-24">Detail Paket Ini</h4>
                    <div class="box-content">
                        <template v-if="loading">
                            <Skeletor v-for="(item, index) in 10" :key="index"  height="30"  class="mb-1" />
                        </template>
                        <template v-else>
                        <h5 class="f-sbold f-20">Itenerary</h5>
                        <Itenerary v-model:itineraries="itineraries" />
                        <h5 class="f-sbold f-20">Termasuk</h5>
                        <Infolist v-model:data="includes" />
                        <h5 class="f-sbold f-20">Tidak Termasuk</h5>
                        <Infolist v-model:data="excludes" />
                        <h5 class="f-sbold f-20">Info Tambahan</h5>
                    </template>
                        <!-- <Infolist :data="package.additionalInfos" /> -->
                    </div>

                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Lokasi</h4>
                    <GMapMap :center="{ lat: 51.093048, lng: 6.842120 }" :zoom="7" map-type-id="terrain"
                        style="width: 100%; height: 200px">
                    </GMapMap>
                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Tentang Kami</h4>
                    <TravelcompTwo :data="package.agency" />
                    <br />
                    <div class="d-flex align-items-center">
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <RateNumberVue :rate="Math.round(package.transaction_avg_rating)" />
                        <i class="bi bi-dot text-grey500"></i>
                        <div class="me-5 text-grey500">{{ package.comments_count }} Ulasan</div>
                        <i class="bi bi-patch-check-fill me-2 text-primary f-large"></i>
                        <div class="text-grey500">Identitas terverifikasi</div>
                    </div>
                    <div class="text-grey600 mt-3">
                        Ada pertanyaan seputar produk ini? Tanyakan via live chat!
                    </div>
                    <button class="btn btn-outline-primary mt-3"> <i class="bi bi-chat-left-text"></i> Hubungi Penyedia
                        Tur</button>
                    <BoxInfo class="mt-3" />
                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Ulasan</h4>
                    <div class="d-flex align-items-center">
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <h3 class="f-sbold mb-0">{{ Math.round(package.transaction_avg_rating) }}</h3>
                        <span class="f-12 text-grey500 me-3">/5</span>
                        <Stars :star="Math.round(package.transaction_avg_rating)" />
                        <i class="bi bi-dot text-grey500"></i>
                        <div class="me-5 text-grey500">{{ package.comments_count }} Ulasan</div>
                    </div>
                    <BoxGalleries :images="package.comment_pictures" />
                    <div class="d-flex mt-3">
                        <ItemFlex class="me-2" v-for="(item, index) in 4" :key="index" />
                    </div>
                    <Comments v-for="(item, index) in comments" :comment="item" :key="index" class="mt-3" />
                    <Pagination @changePage="queryComments" :data="pagination" class="mt-3" />
                    <hr />
                    <h4 class="f-sbold mt-3">Mungkin Kamu Juga Suka</h4>
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                        <!-- <CatalogCard v-for="(item, index) in packStore.packages" :package="item" :seq="index + 1"
                            :key="index" /> -->
                    </div>

                </div>
                <div class="col-lg-5">
                    <h5 class="f-sbold mt-4 f-24">Pilihan Paket</h5>
                    <TransactionBar class="d-none d-lg-block" v-model:package_active="cartStore.package_active"
                        v-model:package="package_selected" v-model:response="package" v-model:price_list="price_list"
                        v-model:option_selected="cartStore.option_selected" />
                </div>
            </div>

        </div>
        <FooterComp />
    </main>
</template>
<script  lang="ts">
import Breadcumb from '@/components/layout/Breadcumb/index.vue';
import Travelcomp from '@/components/widget/Travelcomp.vue';
import FooterComp from '@/components/layout/Footer.vue';

import TransactionBar from '@/components/layout/TranscationBar.vue';
import Itenerary from '@/components/widget/Itenerary.vue';
import Infolist from '@/components/widget/Infolist.vue';
import TravelcompTwo from '@/components/widget/TravelcompTwo.vue';
import BoxInfo from '@/components/widget/BoxInfo.vue'
import CatalogCard from '@/components/widget/CatalogCard.vue';
import Stars from '@/components/widget/Stars.vue';
import BoxGalleries from '@/components/layout/BoxGalleries.vue';
import Comments from '@/components/widget/Comments.vue';
import Pagination from '@/components/widget/Pagination.vue';
import ItemFlex from '@/components/layout/ItemFlex.vue';

import breadcumbData from '../../../stores/Breadcumb.json';
import RateNumberVue from '@/components/widget/RateNumber.vue';
import type SubPackage from '@/types/SubPackage';
import type TripFacility from '@/types/TripFacility';
import landingPageService from '@/services/landing-page-service';
import type Package from '@/types/Package';
import type Comment from '@/types/Comment';
import type PaginationType from '@/types/Pagination';
import type ItineraryType from '@/types/Itinerary';
import type Price from '@/types/Price';
import { useCartStore } from '@/stores/cart';
export default {
    setup() {
        const cartStore = useCartStore();

        return {
            cartStore
        }
    },
  
    mounted() {
        landingPageService.findByTitle(this.$route.params.place).then(ret => {
            this.queryComments();
            this.package = ret as Package;
            if (this.cartStore.package_active == 0 && this.cartStore.trip_active != this.package.id) {
                this.cartStore.trip = this.package;
                this.cartStore.trip_active = this.package.id;
                this.cartStore.package_active = this.package.packages[0].id;
            }
            this.loading=false;
        })

    },
    data() {
        return {
            paths: breadcumbData,
            pagination: {} as PaginationType,
            loading:true,
            package: {
                images: [],
                city: {}
            } as Package,
        }
    },
    watch: {
        package_selected(nval, oldval) {
            this.cartStore.option_selected = {};
            nval.options.forEach(opt => {
                this.cartStore.option_selected[opt.id] = opt?.items[0]?.id;
                this.cartStore.option_selected[opt.id + "_qty"] = 1 as any;
            });
        },
    },
    computed: {
        comments(): Array<Comment> {
            return this.pagination.data;
        },
        price_list(): Array<Price> {
            this.package_selected?.prices.forEach(price => {
                price.start = new Date(price.trip_date_start),
                    price.end = new Date(price.trip_date_end)
            });
            return this.package_selected?.prices;
        },
        includes(): Array<TripFacility> {
            return this.package_selected?.includes;
        },
        excludes(): Array<TripFacility> {
            return this.package_selected?.excludes;
        },
        itineraries(): Array<ItineraryType> {
            return this.package_selected?.itineraries
        },
        package_selected(): SubPackage {
            const sub = this.package.packages?.find(subpack => subpack.id == this.cartStore.package_active);
            return sub as SubPackage;
        },
    },
    methods: {
        async queryComments(page: number = 1) {
            let retcomment = await landingPageService.getCommentsTrip(this.$route.params.place + `?page=${page}`);
            this.pagination = retcomment;
        }
    },
    components: { Breadcumb, Travelcomp, FooterComp, TransactionBar, Itenerary, Infolist, TravelcompTwo, BoxInfo, CatalogCard, Stars, BoxGalleries, Comments, Pagination, ItemFlex, RateNumberVue }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';



.img-crop {
    width: 100%;
    max-height: 335px;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.img-crop-sm {
    width: 100%;
    max-height: 164px;
}

.img-crop-sm.mt-8 {
    margin-top: 8px;
}
</style>