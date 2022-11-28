<template>
    <div>
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <img src="@/assets/image/website/user/user-1.jpg" class="user-ava me-3" />
                <div class="text-grey500">{{ user.name }}</div>
            </div>
            <div class="f-12 text-grey500 text-end">12 Desember 2022</div>
        </div>
        <Stars class="mt-3" :star=5 />
        <div class="comments mt-3">
            Impian para pelancong ketika berada di Indonesia adalah pelesiran ke Labuan Bajo. Desa di Provinsi Nusa Tenggara Timur ini pun memiliki destinasi wisata yang apik dan ciamik, mulai dari wisata sejarah, budaya, hingga panorama alam.
Banyak destinasi wisata yang bisa kamu kunjungi. Salah satu daya tarik Labuan Bajo adalah kawasan habitat hewan endemik, yakni Komodo yang berada di Taman Nasional Komodo. Tak pelak, banyak pelancong berlomba-lomba berkunjung melihat indahnya NTT. Soalnya, Pulau Komodo merupakan habitat asli binatang purba komodo bernaung.
        </div>
        <a class="link-primary mt-5">Lihat Lebih Banyak</a>
        <div class="d-flex mt-3 text-grey500">
            <i class="bi bi-hand-thumbs-up me-3"></i>
            Bermanfaat
        </div>
    </div>
</template>
<script lang="ts">
import Stars from './Stars.vue';

export default {
    props: {
        user: {
            type: Object,
            default: {
                id: null,
                name: "Welldy Rosman"
            }
        }
    },
    components: { Stars }
}
</script>
<style lang="scss" scoped>
.user-ava {
    height: 32px;
    width: 32px;
    border-radius: 100%;
}
</style>