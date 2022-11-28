<template>
    <div>
        <div class="container margin-navbar">
            <Breadcumb :paths="paths" class=" pt-4" />
            <div class="parallax  mt-3 p-4">
                <div class="text-left lg mb-3">
                    <div class="f-48 f-sbold text-white">{{ ($route.params.city as string).replace(/-/g,' ').toUpperCase()}}</div>
                    <div class="f-16 text-white">Temukan penawaran, panduan perjalanan, dan aktivitas di Bali</div>
                </div>
            </div>
            <div class="mybox my-3 p-3">
                <div class="f-24 f-sbold mb-3">Tentang {{ ($route.params.city as string).replace(/-/g,' ').toUpperCase() }}</div>
                <div class="text-grey600">Jika kamu mencari tempat yang tepat untuk melarikan diri dari sibuknya kota,
                    Bali adalah destinasi sempurna buat kamu. Pulau ini begitu populer dan menaungi bermacam spot
                    budaya, Pura Ulun Danu Baratan adalah salah satunya. Habiskan hari di Subak Tegalalang dan kagumi
                    bukit-bukit hijau yang cantik.
                    Tantang diri kamu untuk mendaki Gunung Batur pada dini hari, lalu hadiahi diri dengan panorama
                    sunrise cantik saat tiba di puncak. Jika kamu ingin kegiatan yang lebih menantang, ada beberapa
                    aktivitas air yang sayang untuk dilewatkan, sebut saja flyboarding dan diving. Setelahnya saat senja
                    beralih malam, nikmati sisa hari dengan party di kawasan Seminyak.
                </div>
                <hr />
            </div>
            <Catalog />
        </div>
        <FloatingButton />
        <Footer/>
    </div>
</template>
<script lang="ts">
import pathsdata from '@/stores/Breadcumb.json'
import Breadcumb from '@/components/layout/Breadcumb/index.vue';
import Catalog from '@/components/layout/Catalog.vue';
import FloatingButton from '@/components/layout/FloatingButton.vue';
import Footer from '@/components/layout/Footer.vue';

export default {
    data() {
        return {
            paths: pathsdata
        };
    },
    components: { Breadcumb, Catalog, FloatingButton, Footer }
}
</script>
<style lang="scss" scoped>
.parallax {
    /* The image used */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/image/website/jumbotron.jpg");
    min-height: 200px;
    border-radius: 1rem;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>