<template>
    <main>
        <div class="f-20 f-sbold my-3 mx-3">Gopay</div>
        <div class="mybox ">
            <div class="f-16 f-sbold mt-3 mx-3">Silahkan bayar ke</div>
            <hr />
            <div class="mx-3  mt-3  d-flex justify-content-between">
                <div>Transfer</div>
                <img class="ms-2" :src="getBankLogo()" />
            </div>
            <hr class="mx-3" />
            <div class="mx-3 my-3  d-flex justify-content-between">
                <div>Total Pembayaran</div>
                <div class="f-20 f-sbold text-primary">{{ $toCurrency(cartStore.grand_total) }}</div>
            </div>
        </div>
        <hr />
        <div class="text-center">
            <!-- <QRCodeVue3 :width="400" :height="400" value="https://scholtz.sk" :qrOptions="qroption"
                :imageOptions="imageOption" :dotsOptions="dotOption" fileExt="png" myclass="my-qur" imgclass="img-qr" /> -->
            <!-- <QRCodeVue3 :width="400" :height="400" value="Simple QR code" /> -->
            <h3>Ada Masalah saat deploy ke Production (QRCODE library bermasalah)</h3>
        </div>
        <hr />
        <div class="f-16 f-sbold">Cara Pembayaran</div>
    </main>
</template>
<script lang="ts">
import type TransactionVa from '@/types/Transaction';
// import QRCodeVue3 from "qrcode-vue3";

export default {
    components: {
        // QRCodeVue3
    },
    data() {
        return {
            qroption: { typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' },
            imageOption: { hideBackgroundDots: true, imageSize: 0.4, margin: 0 },
            // dotOption: {
            //     type: 'dots' as DotType,
            //     color: '#26249a',
            //     gradient: {
            //         type: 'linear' as GradientType,
            //         rotation: 0,
            //         colorStops: [
            //             { offset: 0, color: '#26249a' },
            //             { offset: 1, color: '#26249a' },
            //         ],
            //     },
            // }
        }
    },
    props: {
        cartStore: {
            type: Object as () => TransactionVa,
            default: {} as TransactionVa,
        }
    },
    methods: {
        getBankLogo() {
            return new URL(`/src/assets/image/icons/${this.cartStore.channel_code}.png`, import.meta.url).href;
        }
    },

}
</script>
<style lang="scss" scoped>
@use "@/assets/payment.scss";
</style>