
<template>
    <main>
        <div class="container margin-navbar">
            <Breadcumb class="mt-5" />
            <div class="row mt-3">
                <div class="col-lg-6 col-md-12 ps-3 pe-1">
                    <img class="img-crop" src="@/assets/image/website/package/pack.jpg" />
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <div class="row">
                        <div class="col-lg-6 px-1">
                            <img src="@/assets/image/website/package/pack.jpg" class="img-crop-sm " />
                        </div>
                        <div class="col-lg-6 px-1">
                            <img src="@/assets/image/website/package/pack.jpg" class="img-crop-sm radius-right" />
                        </div>
                        <div class="col-lg-6 px-1">
                            <img src="@/assets/image/website/package/pack.jpg" class="img-crop-sm mt-8" />
                        </div>
                        <div class="col-lg-6 px-1">
                            <img src="@/assets/image/website/package/pack.jpg" class="img-crop-sm mt-8 radius-left" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-7">
                    <h5 class="f-sbold mt-4">Trip Kepulauan Nusa Penida By Travel GO!</h5>
                    <div class="titlefoot d-flex align-items-center text-truncate">
                        <span class="text-warning me-3"><i class="bi bi-star-fill "></i> 4</span>
                        <div>(150 Ulasan)</div>
                        <i class="bi bi-dot"></i>
                        <div>Nusapenida, Bali, Indonesia</div>
                        <i class="bi bi-dot"></i>
                        <Travelcomp />
                    </div>
                    <section class="mt-5">
                        <h5 class="f-sbold">Tentang Aktifitas Ini</h5>
                        <div class="content mt-3">Impian para pelancong ketika berada di Indonesia adalah pelesiran ke
                            Labuan
                            Bajo. Desa di Provinsi Nusa Tenggara Timur ini pun memiliki destinasi wisata yang apik dan
                            ciamik, mulai dari wisata sejarah, budaya, hingga panorama alam.
                            Banyak destinasi wisata yang bisa kamu kunjungi. Salah satu daya tarik Labuan Bajo adalah
                            kawasan habitat hewan endemik, yakni Komodo yang berada di Taman Nasional Komodo. Tak pelak,
                            banyak pelancong berlomba-lomba berkunjung melihat indahnya NTT. Soalnya, Pulau Komodo
                            merupakan habitat asli binatang purba komodo bernaung.
                            Selain itu ada Pink Beach sebagai pesona pantai surga di Labuan Bajo. Pantai ini disebut
                            Pink Beach karena pasirnya yang berwarna pink, berasal dari alga dan serpihan karang
                            berwarna merah yang bercampur dengan pasir putih. Selain keindahan pantainya, Pink Beach
                            juga terkenal dengan kehidupan bawah lautnya yang cantik sehingga cocok untuk snorkeling
                            atau diving.</div>
                    </section>
                    <hr />
                    <h4 class="f-sbold mt-3">Detail Paket Ini</h4>
                    <div class="box-content">
                        <h5 class="f-sbold">Itenerary</h5>
                        <Itenerary v-for="(item, index) in package['itenarary']" :key="item.id"
                            v-model:itenerary="package['itenarary'][index]" />
                        <h5 class="f-sbold">Termasuk</h5>
                        <Infolist />
                        <h5 class="f-sbold">Tidak Termasuk</h5>
                        <Infolist />
                        <h5 class="f-sbold">Info Tambahan</h5>
                        <Infolist />
                    </div>
                    <hr />
                    <h4 class="f-sbold mt-3">Lokasi</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126218.39536762456!2d115.0742971185449!3d-8.660622527085648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2477f04748e85%3A0x65b83481caecd509!2sAtlas%20Beach%20Club!5e0!3m2!1sid!2sid!4v1667374516611!5m2!1sid!2sid"
                        width="100%" height="250" style="border:0;border-radius: 1rem;" allowfullscreen=true
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <hr />
                    <h4 class="f-sbold mt-3">Tentang Kami</h4>
                    <TravelcompTwo />
                    <br />
                    <div class="d-flex align-items-center">
                        <i class="bi bi-star-fill text-warning me-2"></i>
                        <h3 class="f-sbold mb-0">4.5</h3>
                        <span class="f-small text-blur">/5</span>
                        <i class="bi bi-dot text-blur"></i>
                        <div class="me-5 text-blur">4k+ Ulasan</div>
                        <i class="bi bi-patch-check-fill me-2 text-primary f-large"></i>
                        <div class="text-blur">Identitas terverifikasi</div>
                    </div>
                    <div class="text-greytwo mt-3">
                        Ada pertanyaan seputar produk ini? Tanyakan via live chat!
                    </div>
                    <button class="btn btn-outline-primary mt-3"> <i class="bi bi-chat-left-text"></i> Hubungi Penyedia
                        Tur</button>
                    <BoxInfo class="mt-3" />
                    <hr />
                    <h4 class="f-sbold mt-3">Ulasan</h4>
                    <hr />
                    <h4 class="f-sbold mt-3">Mungkin Kamu Juga Suka</h4>
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                         <CatalogCard v-for="(item, index) in 3" :key="index"/>
                    </div>
                </div>
                <div class="col-lg-5">
                    <TransactionBar v-model:response="response" v-model:package="package"
                        v-model:package_active="package_active" />
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
import responseData from './package.json';
import TravelcompTwo from '@/components/widget/TravelcompTwo.vue';
import BoxInfo from '@/components/widget/BoxInfo.vue'
import CatalogCard from '@/components/widget/CatalogCard.vue';
export default {
    data() {
        return {
            package_active: 1,
            kind_active: 1,
            lang_active: 1,
            response: responseData,
        }
    },
    computed: {
        package(): Object {
            const obj = this.response.packages.find((obj) => {
                return obj.id == this.package_active;
            });
            console.log("package", obj);
            return obj as Object;
        }
    },
    methods: {
    },
    components: { Breadcumb, Travelcomp, FooterComp, TransactionBar, Itenerary, Infolist, TravelcompTwo, BoxInfo, CatalogCard }
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
    max-height: 150px;
}

.img-crop-sm.mt-8 {
    margin-top: 8px;
}
</style>