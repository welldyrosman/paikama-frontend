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
                        <RouterView/>
                        <!-- <TransactionInfoVue v-if="(step == 1)" :active-currency="activeCurrency"
                            :meetingpoints="meetingpoints" v-model:addcontact="addcontact" :currencys="currencys" /> -->
                        <!-- <PaymentOption v-if="(step == 2)" /> -->
                        <!-- <VirtualAccount v-if="(step==3)" /> -->
                  
                    
                </div>
                <div class="col-md-4">
                    <div class="mybox">
                        <div class="m-3">
                            <TransPack :package="package" :prices="cartStore.prices" :option_selected="option_obj"
                                :trip="(cartStore?.trip as Package)" v-model:date="cartStore.date" />
                            <hr class="hr-devider" />
                            <div class="d-flex justify-content-between">
                                <div><i class="bi bi-person-fill me-3"></i>{{ cartStore.adultqty }} Pax</div>
                                <div>{{ `${$toCurrency(360000)}` }}</div>
                            </div>
                            <template v-for="(item, index) in option_obj" :key="index">
                                <div class="d-flex justify-content-between">
                                    <div><i class="bi bi-node-plus-fill me-3"></i>{{ option_selected[item.id + '_qty']
                                    }} {{
        item.items.title
}} Pax</div>
                                    <div>{{ `${$toCurrency(option_selected[item.id + '_qty'] * item.items.price)}` }}
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
                                <div>{{ `${$toCurrency(tax)}` }}</div>
                            </div>
                            <hr class="hr-devider" />
                            <div class="d-flex justify-content-between">
                                <div>Jumlah Pembayaran</div>
                                <div class="f-sbold f-18 text-primary">{{ `${$toCurrency(totalprice + tax)}` }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script lang="ts">

import TransPack from '@/components/widget/TransPack.vue';
import type Contact from '@/types/Contact';
import { useCartStore } from '@/stores/cart';
import type SubPackage from '@/types/SubPackage';
import type SelectedOptions from '@/types/SelectedOption';
import type Package from '@/types/Package';
import type MeetingPoint from '@/types/MeetingPoint';
import landingPageService from '@/services/landing-page-service';



import TransactionInfoVue from '@/views/pages/CheckoutView/TransactionInfo.vue';
import PaymentOption from '@/views/pages/CheckoutView/PaymentOption.vue';
import XenditService from '@/services/xendit-service'
import VirtualAccount from '@/views/pages/CheckoutView/VirtualAccount.vue';
interface currencysType {
    id: number,
    title: string
}
export default {
    setup() {
        const cartStore = useCartStore();
        const option_selected = cartStore.option_selected as Object;
     
        return {
            cartStore,
            option_selected,
        }
    },
    data() {
        return {
            addcontact: true,
            step: 1,
            timer: 0,
            now: null as any,
            negative: false,
            endDate: new Date() as any,
            progressval: 0,
            stepActive: 1,
            time: 60,
            distance: 0,
            meetingpoints: [] as Array<MeetingPoint>,
            activeCurrency: {
                id: 1,
                title: "+62"
            } as currencysType,
            currencys: [] as Array<currencysType>
        };
    },
   
    mounted() {
        console.log("payload",this.cartStore.option_payload)
        this.xenditfunc();
        var d = new Date();
        this.endDate = d.setMinutes(d.getMinutes() + 90);
        setInterval(() => {
            var now = new Date().getTime();
            this.distance = this.endDate - now;
        }, 1000);
        for (var i = 0; i < 7; i++) {
            this.currencys.push({
                id: i + 1,
                title: "+6" + (i + 2)
            } as currencysType);
        }
    },
    computed: {
        tax(): number {
            return this.totalprice * 10 / 100;
        },
        totalprice(): number {
            let addprice = 0;
            let packprice = 0;
            this.option_obj.forEach(element => {
                if (!element.is_forperson) {
                    addprice += element.items.price * 1;
                } else {
                    packprice += (element.items.price * this.option_selected[element.id + '_qty']);
                }
            });
            return (this.cartStore.adultqty * this.cartStore.prices.basePrice) + addprice + packprice;
        },
        totalpricebefore(): number {
            return this.cartStore.adultqty * this.cartStore.prices.befBasePrice;
        },
        hour() {
            let h = Math.trunc(this.distance / 1000 / 3600);
            return h > 9 ? h : '0' + h;
        },
        min() {
            let m = Math.trunc(this.distance / 1000 / 60) % 60;
            return m > 9 ? m : '0' + m;
        },
        sec() {
            let s = Math.trunc(this.distance / 1000) % 60
            return s > 9 ? s : '0' + s;
        },
        package(): SubPackage {
            const sub = this.cartStore.trip?.packages?.find(subpack => subpack.id == this.cartStore.package_active)
            return sub as SubPackage;
        },
        option_obj(): Array<SelectedOptions> {
            let objSelected = [] as Array<SelectedOptions>;
            this.package?.options.forEach(options => {
                var newobj = {} as SelectedOptions;
                newobj.id = options.id
                newobj.title = options.title
                newobj.is_forperson = options.is_forperson
                options.items.forEach(element => {
                    if (this.option_selected[options.id] == element.id) {
                        newobj.items = element;
                        objSelected.push(newobj);
                    }
                });
            });
            return objSelected;
        }
    },
    methods: {
        nextpage() {
            this.step++;
            this.progressval += 30
        },
        moveprogress(val: number) {
            this.progressval = val;
        },
        onAddContact() {
            this.addcontact = true;
        },
        xenditfunc() {
           //console.log("xendit",XenditService.balance());
        }
    },
    components: { TransPack, TransactionInfoVue, PaymentOption, VirtualAccount }
}
</script>
<style lang="scss" scoped>
@use "@/assets/payment.scss";


</style>