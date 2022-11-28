
<template>
    <main>
        <div class="container margin-navbar">
            <Breadcumb :paths="paths" class="mt-5 pt-4" />
            <div class="row mt-3">
                <div class="col-lg-6 col-md-12 ps-3 pe-1">
                    <img class="img-crop" src="@/assets/image/website/package/pack-1.jpg" />
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="row">
                        <div class="col-lg-6 px-1" v-for="(item, index) in 4" :key="index">
                            <img :src="`/src/assets/image/website/package/pack-${index + 3}.jpg`" class="img-crop-sm"
                                :class="[{ 'mt-8': (index == 3 || index == 2) }]" />
                        </div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <h5 class="f-sbold mt-4 f-24">{{ packStore.packView.title }}</h5>
                    <div class="titlefoot d-flex align-items-center text-truncate">
                        <span class="text-warning me-3"><i class="bi bi-star-fill "></i>
                            {{ packStore.packView.star }}</span>
                        <div>({{ packStore.packView.comments }} Ulasan)</div>
                        <i class="bi bi-dot"></i>
                        <div>{{ packStore.packView.city }}, {{ packStore.packView.country }}</div>
                        <i class="bi bi-dot"></i>
                        <Travelcomp :data="packStore.packView.agency" />
                    </div>
                    <section class="mt-5">
                        <h5 class="f-sbold f-24">Tentang Aktifitas Ini</h5>
                        <div class="content mt-3">{{ packStore.packView.description }}</div>
                    </section>
                    <TransactionBar class="d-lg-none" v-model:kindtrip="kindtrip" v-model:langtrip="langtrip"
                        v-model:response="packStore.packView" v-model:package="package"
                        v-model:package_active="package_active"   
                        v-model:kind_active="kind_active"
                        v-model:lang_active="lang_active"/>
                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Detail Paket Ini</h4>
                    <div class="box-content">
                        <h5 class="f-sbold f-20">Itenerary</h5>
                        <Itenerary v-for="(item, index) in package['itenarary']" :key="item.id"
                            v-model:itenerary="package['itenarary'][index]" />
                        <h5 class="f-sbold f-20">Termasuk</h5>
                        <Infolist :data="package.includes" />
                        <h5 class="f-sbold f-20">Tidak Termasuk</h5>
                        <Infolist :data="package.excludes" />
                        <h5 class="f-sbold f-20">Info Tambahan</h5>
                        <Infolist :data="package.additionalInfos" />
                    </div>

                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Lokasi</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126218.39536762456!2d115.0742971185449!3d-8.660622527085648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2477f04748e85%3A0x65b83481caecd509!2sAtlas%20Beach%20Club!5e0!3m2!1sid!2sid!4v1667374516611!5m2!1sid!2sid"
                        width="100%" height="250" style="border:0;border-radius: 1rem;" allowfullscreen=true
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <hr />
                    <h4 class="f-sbold mt-3 f-24">Tentang Kami</h4>
                    <TravelcompTwo :data="packStore.packView.agency" />
                    <br />
                    <div class="d-flex align-items-center">
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <RateNumberVue :rate="packStore.packView.star" />
                        <i class="bi bi-dot text-grey500"></i>
                        <div class="me-5 text-grey500">{{ packStore.packView.comments }} Ulasan</div>
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
                        <h3 class="f-sbold mb-0">4.5</h3>
                        <span class="f-12 text-grey500 me-3">/5</span>
                        <Stars :star=4 />
                        <i class="bi bi-dot text-grey500"></i>
                        <div class="me-5 text-grey500">4k+ Ulasan</div>

                    </div>
                    <BoxGalleries />
                    <div class="d-flex mt-3">
                        <ItemFlex class="me-2" v-for="(item, index) in 4" :key="index" />
                    </div>
                    <Comments v-for="(item, index) in 2" :key="index" class="mt-3" />
                    <Pagination class="mt-3" />
                    <hr />
                    <h4 class="f-sbold mt-3">Mungkin Kamu Juga Suka</h4>
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                        <CatalogCard v-for="(item, index) in packStore.packages" :package="item" :seq="index + 1"
                            :key="index" />
                    </div>

                </div>
                <div class="col-lg-5">
                    <h5 class="f-sbold mt-4 f-24">Pilihan Paket</h5>
                    <TransactionBar class="d-none d-lg-block"  v-model:kindtrip="kindtrip" v-model:langtrip="langtrip"
                        v-model:response="packStore.packView" v-model:package="package"
                        v-model:package_active="package_active"
                        v-model:kind_active="kind_active"
                        v-model:lang_active="lang_active"
                        />
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

import responseData from './package.json';
import breadcumbData from '../../../stores/Breadcumb.json';
import RateNumberVue from '@/components/widget/RateNumber.vue';
import { usePackStore } from '@/stores/package';
import type SubPackage from '@/types/SubPackage';
import type Info from '@/types/Info';
export default {
    setup() {
        const packStore = usePackStore();
        return {
            packStore
        }
    },
    data() {
        return {
            paths: breadcumbData,
            package_active: 1,
            kind_active: 1,
            lang_active: 1,

        }
    },
    watch:{
       
    },
    computed: {
        package(): SubPackage {
            const obj = this.packStore.packView.packages.find((obj) => {
                return obj.id == this.package_active;
            });
            return obj as SubPackage;
        },
        kindtrip(): Info {
            const obj = this.packStore.packView.tripkind.find((obj) => {
                return obj.id == this.kind_active;
            });
            return obj as Info;
        },
        langtrip(): Info {
            const obj = this.packStore.packView.guidelist.find((obj) => {
                return obj.id == this.lang_active;
            });
            console.log("lang",obj);
            return obj as Info;
        }
    },
    methods: {
    },
    components: { Breadcumb, Travelcomp, FooterComp, TransactionBar, Itenerary, Infolist, TravelcompTwo, BoxInfo, CatalogCard, Stars, BoxGalleries, Comments, Pagination, ItemFlex, RateNumberVue }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.box-content {
    border: 1px solid colorVariable.$secondary;
    border-radius: 1rem;
    padding: 1rem;
    max-height: 400px;
    overflow: auto;
}

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