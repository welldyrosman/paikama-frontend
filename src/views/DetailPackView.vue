<script lang="ts">
import Breadcumb from '@/components/layout/Breadcumb/index.vue';
import Travelcomp from '@/components/widget/Travelcomp.vue';

export default {
    data() {
        return {};
    },
    components: { Breadcumb, Travelcomp }
}
</script>
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
                <div class="col-lg-8">
                    <h5 class="f-sbold mt-4">Trip Kepulauan Nusa Penida By Travel GO!</h5>
                    <div  class="titlefoot d-flex align-items-center">
                        <span class="text-warning me-3"><i class="bi bi-star-fill "></i> 4</span>
                        <div>(150 Ulasan)</div>
                        <i class="bi bi-dot"></i>
                        <div>Nusapenida, Bali, Indonesia</div>
                        <i class="bi bi-dot"></i>
                        <Travelcomp />
                    </div>
                    <section class="mt-5">
                        <h5 class="f-sbold">Tentang Aktifitas Ini</h5>
                        <div  class="content mt-3">Impian para pelancong ketika berada di Indonesia adalah pelesiran ke Labuan
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
                    <hr/>
                    <section class="">
                        <h5 class="f-sbold">Pilihan Paket</h5>
                        <div class="pack-option mt-3 p-3 radius">
                            <div class="f-sbold">Tanggal berapa kamu ingin berlibur?</div>
                            <button class="btn btn-primary mt-3"><i class="bi bi-calendar3"></i> Cek Ketersediaan</button>
                            <hr/>
                            <div class="f-sbold">Tempat mana yang ingin anda kunjungi?</div>
                            <div class="col-6 radio">
                                <input type="radio"/>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-lg-4"></div>
            </div>

        </div>
    </main>
</template>
<style scoped>
.radio{
    background-color: #EAECF0;
}
.pack-option{
    background-color: #F2F4F7;
}
.radius-right {
    border-start-end-radius: 1rem;
}

.radius-left {
    border-end-end-radius: 1rem;
}

.img-crop {
    width: 100%;
    max-height: 335px;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.img-crop-sm {
    width: 100%;
    max-height: 163.5px;
}

.img-crop-sm.mt-8 {
    margin-top: 8px;
}
</style>