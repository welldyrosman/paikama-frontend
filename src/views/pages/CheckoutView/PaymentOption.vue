<template>
    <main>
        <loading :opacity="0.9" loader='bars' :active="loadingactive" :is-full-page="true">
           
        </loading>
        <Alert v-model:show="alertshow" :message="errMsg" v-if="alertshow" />

        <div class="mybox">
            <div class="f-20 f-sbold mt-3 mx-3">Metode Pembayaran</div>
            <hr />
            <div v-for="(item, index) in paymentmethods" :key="index">
                <div class="f-18 f-sbold mt-3 mx-3">{{ item.title }}</div>
                <label class="mt-3 mx-3 f-med pointer mybox d-flex p-2 align-items-center"
                    v-for="(sitem, index) in item?.methods" :key="index">
                    <input type="radio" v-model="stores.payment_method" :value="sitem" name="payments" class="me-3" />
                    <img class="ms-2 me-3" :src="$localImage(sitem.icon)" />
                    <div>{{ sitem.title }}</div>
                </label>
                <hr class="mx-4" />
            </div>
        </div>
        <div class="my-3">Dengan mengklik "Lanjutkan ke Pembayaran" Anda menyetujui aturan, batasan, dan
            Syarat & Ketentuan</div>
        <button @click="onSelectMethod" :disabled="loadingactive" class="btn btn-primary"> <span v-if="loadingactive"
                class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Lanjutkan ke
            Pembayaran</button>
    </main>
</template>
<script lang="ts">
import Alert from '@/components/widget/Alert.vue';
import xenditService from '@/services/xendit-service';
import { useCartStore } from '@/stores/cart';
import type PaymentMethod from '@/types/PaymentMethod';
import PaymentMethodData from "@/stores/PaymentMethod.json"
export default {
    setup() {
        const stores = useCartStore();
        return {
            stores
        };
    },
    mounted() {
        this.getVaList();
    },
    methods: {
        getVaList() {
            const vas = xenditService.getva();
            console.log("vas", vas);
        },
        onSelectMethod() {
            var payload = {};
            this.loadingactive = true;
                payload = {
                    "bank_code": this.stores.payment_method.channel_code,
                    "amount": 1,
                    "package_active": this.stores.package_active,
                    "trip_active": this.stores.trip_active,
                    "date": this.stores.date,
                    "contact": this.stores.contact,
                    "adultqty": this.stores.adultqty,
                    "options": this.stores.option_payload,
                    "meetpoint": this.stores.meetpoint,
                    "payment_method":this.stores.payment_method
                };
                xenditService.createVa(payload).then(ret => {
                    this.loadingactive = false;
                    this.stores.$reset();
                    this.$router.push("/payment/settlement/" + ret.data.metadata.transaction_id);
                }).catch(err => {
                    this.errMsg=err.response.data.message
                    this.loadingactive = false;
                    this.alertshow = true;
                });
            // if (this.stores.payment_method.type == "VIRTUAL_ACCOUNT") {
               
            // }else if (this.stores.payment_method.type == "VIRTUAL_ACCOUNT") {
                
            // }
        }
    },
    data() {
        return {
            alertshow: false,
            errMsg:"Something Wrong Pelase try again later",
            paymentmethods:PaymentMethodData as unknown as Array<PaymentMethod>,
            loadingactive: false
        };
    },
    components: { Alert }
}
</script>