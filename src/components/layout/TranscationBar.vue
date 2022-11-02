<template>
    <section class="">
        <h5 class="f-sbold mt-4">Pilihan Paket</h5>
        <div class="pack-option mt-3 p-3 radius">
            <div class="f-sbold text-blur">Tanggal berapa kamu ingin berlibur?</div>
            <button class="btn btn-primary mt-3"><i class="bi bi-calendar3"></i> Cek
                Ketersediaan</button>
            <hr />
            <div class="f-sbold mb-3 text-blur">Tempat mana yang ingin anda kunjungi?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.packages" :key="index">
                    <Radio :value="item.id" v-model:bindval="package_active" :labels="item.title" />
                </div>
            </div>
            <hr />
            <div class="f-sbold mb-3 text-blur">Jenis tur apa yang anda inginkan?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.tripkind" :key="index">
                    <Radio :value="item.id" groupname="tripkind" v-model:bindval="kind_active" :labels="item.title" />
                </div>
            </div>
            <hr />
            <div class="f-sbold mb-3 text-blur">Bahasa apa yang digunakan pemandu tur?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.guidelist" :key="index">
                    <Radio :value="item.id" groupname="langkind" v-model:bindval="lang_active" :labels="item.title" />
                </div>
            </div>
            <div class="f-sbold text-primary mt-2" href="">Lebih Banyak</div>
            <hr />
            <div class="f-sbold mb-3 text-blur">Lihat Detail Tiket Kamu Disini</div>
            <section class="detail-trans p-3 rounded">
                <h5 class="detail-title f-sbold"> {{ package['title'] }}</h5>
                <div class="item-detail">
                    <i>
                        <IconBase iconName="compare" width="1rem" height="1rem">
                            <IconPlane />
                        </IconBase>
                    </i><span>Open Trip</span>
                </div>
                <div class="item-detail"><i class="bi bi-calendar3"></i><span> 23 Desember 2024</span>
                </div>
                <div class="item-detail"><i class="bi bi-translate"></i><span> Bahasa Indonesia</span>
                </div>
                <div class="item-detail"><i class="bi bi-arrow-clockwise"></i> <span> Bisa Refund</span>
                </div>
                <hr style="border-style: dashed;color: #D0D5DD;" />
                <h6 class="f-sbold mb-0">Per Peserta</h6>
                <small class="text-blur">Berlaku untuk peserta diatas usia 3 tahun</small>
                <div class="row mt-3">
                    <div class="col-6 d-flex align-items-center">
                        <span class="f-sbold">IDR 150.000</span><small class="f-small text-blur"> IDR
                            190.000</small>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
                        </div>
                    </div>
                </div>
                <h6 class="f-sbold mb-0 mt-2">Tambahan Snorkeling (Per Peserta)</h6>
                <small class="text-blur">Berlaku untuk peserta diatas usia 12 tahun</small>
                <div class="row mt-3">
                    <div class="col-6 d-flex align-items-center">
                        <span class="f-sbold">IDR 150.000</span><small class="f-small text-blur"> IDR
                            190.000</small>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">-</button>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon1">+</button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </section>
</template>
<script  lang="ts">
import Radio from '../widget/Radio.vue';
import IconBase from '@/components/IconBase.vue';
import IconPlane from '@/components/icons/IconPlane.vue';
export default {
    props: {
        response: {
            type: Object,
            default: {
                packages: [],
                guidelist: [],
                tripkind: []
            }
        },
        package_active: {
            type: Number,
            default: 1
        },
        kind_active: {
            type: Number,
            default: 1
        },
        lang_active: {
            type: Number,
            default: 1
        },
        package: {
            type: Object,
            default: {
                title: "Belum Memilih Paket"
            }
        }
    },
    emits: ['update:package_active'],
    watch:{
        package_active(nval,oval){
           this.$emit('update:package_active',nval);
        }
    },
    
    methods: {},
    components: { Radio, IconBase, IconPlane }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';
.item-detail {
    i {
        margin-right: 1rem;
    }

    span {
        color: colorVariable.$greytwo;
    }

    margin-bottom: 0.5rem;
}

.detail-trans {
    background-color: #FFFFFF;
}

.pack-option {
    background-color: #F2F4F7;
}

.radius-right {
    border-start-end-radius: 1rem;
}

.radius-left {
    border-end-end-radius: 1rem;
}
</style>