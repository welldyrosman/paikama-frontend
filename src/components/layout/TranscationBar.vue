<template>
    <section class="">

        <div class="pack-option mt-3 p-3 radius">
            <div v-if="inlabel" class="f-med f-16 mb-3">Pilihan Paket</div>
            <div class="f-sbold text-grey500 mb-3">Tanggal berapa kamu ingin berlibur?</div>
            <CalendarPicker v-model:date="date" />

            <!-- <button class="btn btn-primary mt-3"><i class="bi bi-calendar3"></i> Cek
                Ketersediaan</button> -->
            <hr />
            <div class="f-sbold mb-3 text-grey500">Tempat mana yang ingin anda kunjungi?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.packages" :key="index">
                    <Radio :value="item.id" v-model:bindval="package_active" :labels="item.title" />
                </div>
            </div>
            <hr />
            <div class="f-sbold mb-3 text-grey500">Jenis tur apa yang anda inginkan?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.tripkind" :key="index">
                    <Radio :value="item.id" groupname="tripkind" v-model:bindval="kind_active" :labels="item.title" />
                </div>
            </div>
            <hr />
            <div class="f-sbold mb-3 text-grey500">Bahasa apa yang digunakan pemandu tur?</div>
            <div class="row">
                <div class="col-12" v-for="(item, index) in response.guidelist" :key="index">
                    <Radio :value="item.id" groupname="langkind" v-model:bindval="lang_active" :labels="item.title" />
                </div>
            </div>
            <div class="f-sbold text-primary mt-2" href="">Lebih Banyak</div>
            <hr />
            <div class="f-sbold mb-3 text-grey500">Lihat Detail Tiket Kamu Disini</div>
            <section class="detail-trans p-3 rounded">
                <TransPack :package="package" :langtrip="langtrip" :kindtrip="kindtrip" />
                <hr class="hr-devider" />
                <h6 class="f-sbold mb-0">Per Peserta</h6>
                <small class="f-12 text-grey500">Berlaku untuk peserta diatas usia 3 tahun</small>
                <div class="row mt-3">
                    <div class="col-6 d-flex align-items-center">
                        <span class="f-sbold f-14">{{ $toCurrency(price) }}</span><small
                            class="f-12 text-grey500 text-decoration-line-through">
                            {{ $toCurrency(price + 50000) }}</small>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <button class="btn btn-bd-primary " @click="adultqty > 0 ? adultqty-- : adultqty"
                                type="button" id="button-addon1">-</button>
                            <input type="text" class="form-control text-center" v-model="adultqty"
                                aria-label="Amount (to the nearest dollar)">
                            <button class="btn btn-bd-primary" @click="adultqty++" type="button"
                                id="button-addon1">+</button>
                        </div>
                    </div>
                </div>
                <h6 class="f-sbold mb-0 mt-2">Tambahan Snorkeling (Per Peserta)</h6>
                <small class="text-grey500">Berlaku untuk peserta diatas usia 12 tahun</small>
                <div class="row mt-3">
                    <div class="col-6 d-flex align-items-center">
                        <span class="f-sbold">{{ $toCurrency(snorkling) }}</span><small
                            class="f-12 text-grey500 text-decoration-line-through">
                            {{ $toCurrency(snorkling + 50000) }}</small>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <button class="btn btn-bd-primary" @click="infantqty > 0 ? infantqty-- : infantqty"
                                type="button" id="button-addon1">-</button>
                            <input type="text" class="form-control text-center" v-model="infantqty"
                                aria-label="Amount (to the nearest dollar)">
                            <button class="btn btn-bd-primary" @click="infantqty++" type="button"
                                id="button-addon1">+</button>
                        </div>
                    </div>
                </div>
                <hr class="hr-devider" />
                <div class="total">
                    <div class="text-grey500">Harga Paket</div>
                    <div class="d-flex align-items-center">
                        <div class="f-24 f-sbold">{{ $toCurrency(totalprice) }}</div>
                        <div class="ms-1 text-grey500 text-decoration-line-through">{{ $toCurrency(totalprice + 50000)
                        }}
                        </div>
                    </div>
                    <button @click="$router.push('/checkout')" class="btn btn-primary form-control mt-3">Pesan Paket
                        Ini</button>
                    <button @click="$router.push('/compare')"
                        class="btn btn-outline-grey600 form-control mt-3">Bandingkan Paket Ini</button>
                </div>
            </section>
        </div>
    </section>
</template>
<script  lang="ts">
import Radio from '../widget/Radio.vue';
import IconBase from '@/components/IconBase.vue';
import IconPlane from '@/components/icons/IconPlane.vue';
import gsap from 'gsap';
import TransPack from '../widget/TransPack.vue';
import CalendarPicker from '../widget/CalendarPicker.vue';
import type Package from '@/types/Package';
import type SubPackage from '@/types/SubPackage';
import { useCartStore } from '@/stores/cart';
import type Info from '@/types/Info';
export default {
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    },
    props: {
        inlabel: {
            type: Boolean,
            default: false
        },
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
            type: Object as () => SubPackage,
            default: {
                title: "Belum Memilih Paket"
            }
        },
        kindtrip: {
            type: Object as () => Info,
            default: {
                title: "Belum Memilih Paket"
            }
        },
        langtrip: {
            type: Object as () => Info,
            default: {
                title: "Belum Memilih Paket"
            }
        }
    },
    computed: {
        totalprice(): Number {
            return (this.infantqty * this.snorkling) + (this.adultqty * this.price);
        }
    },
    data() {
        return {
            date: new Date(),
            adultqty: 1,
            infantqty: 0,
            price: 250000,
            snorkling: 100000,
            totalprice: 0,
        }
    },
    inject: ['myTools'],
    mounted() {
    },
    emits: ['update:package_active','update:lang_active','update:kind_active'],
    watch: {
        lang_active(nval){
            this.$emit('update:lang_active', nval);
            return nval
        },
        kind_active(nval){
            this.$emit('update:kind_active', nval);
            return nval
        },
        date(nval){
            this.cartStore.$patch({
                date:nval
            })
        },
        package_active(nval, oval) {
            this.$emit('update:package_active', nval);
            return nval
        },
        adultqty(n) {
            const price = (this.infantqty * this.snorkling) + (n * this.price)
            gsap.to(this, { duration: 0.5, totalprice: Number(price) || 0 })
        },
        infantqty(n) {
            const price = (n * this.snorkling) + (this.adultqty * this.price)
            gsap.to(this, { duration: 0.5, totalprice: Number(price) || 0 })
        }
    },

    methods: {},
    components: { Radio, IconBase, IconPlane, TransPack, CalendarPicker }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';


.detail-trans {
    background-color: #FFFFFF;

    .hr-devider {
        border-top: 2px dashed colorVariable.$grey300;
    }
}

.pack-option {
    background-color: colorVariable.$grey100;
}

.radius-right {
    border-start-end-radius: 1rem;
}

.radius-left {
    border-end-end-radius: 1rem;
}
</style>