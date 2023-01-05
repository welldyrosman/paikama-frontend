<template>
    <main class="margin-navbar">

        <div class="d-flex f-12 paytime align-items-center justify-content-center">
            <div class="me-1">Selesaikan pemesanan dalam</div>
            <div class="btn btn-sm btn-warning me-1">{{ hour }}</div>
            <div class="btn btn-sm btn-warning me-1">{{ min }}</div>
            <div class="btn btn-sm btn-warning me-1">{{ sec }}</div>
        </div>
        <div class="container px-5 py-4">
            <div class="mx-5 mb-3 px-5" id="accordionExample">
                <div class="f-sbold">Informasi Pemesanan</div>
                <div class="steps">
                    <progress id="progress" :value="progressval" max=100></progress>
                </div>
            </div>

        </div>
        <div class="container mt-3">
            <div class="row">
                <div class="col-md-8">
                    <VirtualAccountVue v-if="payment_method == 'VIRTUAL_ACCOUNT'" :cart-store="cartStore" />
                    <QrCode :cart-store="cartStore"/>
                    <div class="row ">
                        <div class="col-md-6">
                            <button class="btn form-control btn-bd-primary">Ganti Metode Pembayaran</button>
                        </div>
                        <div class="col-md-6">
                            <button @click="$router.push(`/account/orders`)" class="btn form-control btn-primary">Lihat
                                Daftar Pesanan</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="mybox">
                        <div class="m-3">
                            <TransPack :package="cartStore.package" :prices="cartStore?.details?.price"
                                :option_selected="cartStore.options" :trip="cartStore?.trip"
                                v-model:date="cartStore.book_date" />
                            <hr class="hr-devider" />
                            <div class="d-flex justify-content-between">
                                <div><i class="bi bi-person-fill me-3"></i>{{ cartStore?.details?.qty }} Pax</div>
                                <div>{{ `${$toCurrency(cartStore?.details?.price)}` }}</div>
                            </div>
                            <template v-for="(item, index) in cartStore.options" :key="index">
                                <div class="d-flex justify-content-between">
                                    <div><i class="bi bi-node-plus-fill me-3"></i>{{ item.qty
}} {{
        item.title
}} Pax</div>
                                    <div>{{ `${$toCurrency(item.prices.qty * item.prices.price)}` }}
                                    </div>
                                </div>
                            </template>


                            <hr class="hr-devider" />
                            <div class="d-flex justify-content-between">
                                <div>Sub Total</div>
                                <div class="f-med f-16">{{ `${$toCurrency(totalprice)}` }}</div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div>Taxs (10%)</div>
                                <div>{{ `${$toCurrency(cartStore.tax)}` }}</div>
                            </div>
                            <hr class="hr-devider" />
                            <div class="d-flex justify-content-between">
                                <div>Jumlah Pembayaran</div>
                                <div class="f-sbold f-18 text-primary">{{ `${$toCurrency(totalprice + cartStore.tax * 1)}`
                                    }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import type TransactionVa from '@/types/Transaction';
import XenditService from '@/services/xendit-service'
import type Package from '@/types/Package';
import TransPack from '@/components/widget/TransPack.vue';
import VirtualAccountVue from './VirtualAccount.vue';
import QrCode from './QrCode.vue';
export default {
    data() {
        return {
            timer: 0,
            time: 60,
            distance: 0,
            progressval: 60,
            cartStore: {} as TransactionVa,
            endDate: new Date() as any,
            payment_method: null as string | null
        };
    },
    methods: {
        getBankLogo() {
            return new URL(`/src/assets/image/icons/${this.cartStore.channel_code}.png`, import.meta.url).href;
        }
    },
    async beforeCreate() {
        const ret = await XenditService.getPaymentByTrans(this.$route.params.trans_uuid as string);
        this.cartStore = ret.data;
        console.log(this.cartStore);
        this.payment_method = this.cartStore.payment_method;
        var d = new Date(this.cartStore.payment_exp_time);
        this.endDate = d;
        setInterval(() => {
            var now = new Date().getTime();
            this.distance = this.endDate - now;
        }, 1000);
    },
    computed: {
        totalprice() {
            return this.cartStore.total * 1 + this.cartStore.feature_total * 1 + this.cartStore.options_total * 1;
        },
        hour() {
            let h = Math.trunc(this.distance / 1000 / 3600);
            return h > 9 ? h : "0" + h;
        },
        min() {
            let m = Math.trunc(this.distance / 1000 / 60) % 60;
            return m > 9 ? m : "0" + m;
        },
        sec() {
            let s = Math.trunc(this.distance / 1000) % 60;
            return s > 9 ? s : "0" + s;
        },
    },
    components: { TransPack, VirtualAccountVue, QrCode }
}
</script>
<style lang="scss" scoped>
@use "@/assets/payment.scss";
</style>