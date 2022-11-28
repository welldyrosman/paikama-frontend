<template>
    <main class="margin-navbar">
        <div class="container px-5">
            <br />
            <div class="mx-5 mb-3 px-5" id="accordionExample">
                <div class="steps">
                    <progress id="progress" :value="progressval" max=100></progress>
                    <div class="step-item">
                        <div class="d-flex flex-column align-items-center">
                            <button class="step-button text-center" @click="moveprogress(0)" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                aria-controls="collapseOne">
                                <div class="dot"></div>
                            </button>
                            <div class="step-title f-12 text-center">
                                <div>Informasi</div> 
                                <div>Pemesanan</div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="d-flex flex-column align-items-center">
                            <button class="step-button text-center collapsed" @click="moveprogress(50)" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                <div class="dot"></div>
                            </button>
                            <div class="step-title f-12">
                                Pembayaran
                            </div>
                        </div>
                    </div>
                    <div class="step-item">
                        <div class="d-flex flex-column align-items-center">
                            <button class="step-button text-center collapsed" @click="moveprogress(100)" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                <div class="dot"></div>
                            </button>
                            <div class="step-title f-12">
                                Pesanan Selesai
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="d-flex f-12 paytime align-items-center justify-content-center">
            <div class="me-1">Selesaikan pemesanan dalam</div>
            <div class="btn btn-sm btn-warning me-1">30</div>
            <div class="btn btn-sm btn-warning me-1">30</div>
            <div class="btn btn-sm btn-warning me-1">30</div>
        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-7">
                    <div class="mybox">
                        <div class="f-20 f-sbold mt-3 mx-3">Informasi Pemesanan</div>
                        <hr />
                        <div class="m-3">
                            <div class="f-18 f-sbold">Data penjemputan</div>
                            <div class="row mt-3">
                                <div class="col-6">
                                    <label>Hotel / Tempat Penjemputan</label>
                                    <input type="text" placeholder="isi nama Hotel / Alamat" class="form-control" />
                                </div>
                                <div class="col-6">
                                    <label>Nomor Whatsapp</label>
                                    <div class="input-group mb-3">
                                        <button class="btn btn-bd-primary dropdown-toggle" type="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">{{activeCurrency.title}}</button>
                                        <ul class="dropdown-menu">
                                            <li @click="activeCurrency=item" v-for="(item, index) in currencys" :key="index">
                                                <span class="dropdown-item" href="#">{{item.title}}</span></li>
                                          

                                        </ul>
                                        <input type="text" class="form-control"
                                            aria-label="Text input with dropdown button">
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-1"/>
                            <div class="f-18 f-sbold">Detail Kontak</div>
                            <div class="f-12 text-grey500">Kontak yang bisa dihubungi, untuk informasi perihal pesanan anda</div>
                            <button class="btn btn-bd-primary mt-3"><i class="bi bi-plus-circle-fill"></i> Tambah Kontak</button>
                            <div class="d-flex text-danger f-12 mt-2"><i class="bi bi-info-circle-fill me-2"></i>Mohon isi detail kontak ini </div>
                        </div>
                    </div>
                    <div class="my-3">Dengan mengklik "Lanjutkan ke Pembayaran" Anda menyetujui aturan, batasan, dan Syarat & Ketentuan</div>
                </div>
                <div class="col-md-5">
                    <div class="mybox">
                        <div class="m-3">
                        <TransPack/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import TransPack from '@/components/widget/TransPack.vue';

interface currencysType {
    id: number,
    title: string
}
export default {
    data() {
        return {
            progressval: 0,
            stepActive: 1,
            activeCurrency: {
                id: 1,
                title: "+62"
            } as currencysType,
            currencys: [] as Array<currencysType>
        };
    },
    mounted() {
        for (var i = 0; i < 7; i++) {
            this.currencys.push({
                id: i + 1,
                title: "+6" + (i + 2)
            } as currencysType);
        }
    },
    methods: {
        moveprogress(val: number) {
            this.progressval = val;
        }
    },
    components: { TransPack }
}
</script>
<style lang="scss" scoped>
@use "@/assets/colorVariable.scss";

.paytime {
    background-color: colorVariable.$grey800;
    width: 100%;
    color: white;
    padding: 1rem;
    text-align: center;
}

.steps {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    progress {
        top: 21%;
        -webkit-appearance: none;
        width: 86%;
        height: 3px;
        left: 8%;
        position: absolute;
        z-index: 5;
        margin-right: 70px;

        // margin-right: 70px;
        &::-webkit-progress-value {
            background-color: colorVariable.$primary;
            transition: .2s ease;
        }

        &::-webkit-progress-bar {
            background-color: colorVariable.$grey300;
        }

    }

    .step-item {
        z-index: 10;

        .step-title {
            //   max-width: 10px;
        }

        .step-button {
            height: 24px;
            width: 24px;
            border-radius: 50%;
            border: 5px solid white;
            background-color: colorVariable.$primary;
            align-items: center;
            display: flex;
            justify-content: center;
            padding: 0;

            .dot {
                height: 8px;
                width: 8px;
                background-color: white;
                border-radius: 50%;
            }
        }
    }
}
</style>