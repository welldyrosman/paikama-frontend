<template>
    <section class="">

        <div class="pack-option mt-3 p-3 radius">
            <div v-if="inlabel" class="f-med f-16 mb-3">Pilihan Paket</div>
            <div class="f-sbold text-grey500 mb-3">Tanggal berapa kamu ingin berlibur?</div>
            <CalendarPicker ref="calendar" v-model:prices="cartStore.prices" v-model:date="cartStore.date" 
            v-model:price_list="price_list" />
            <hr />
            <div class="f-sbold mb-3 text-grey500">Tempat mana yang ingin anda kunjungi?</div>
            <div class="row">
                <div class="col-12 mb-3" v-for="(item, index) in response?.packages" :key="index">
                    <Radio :value="item.id" v-model:bindval="package_active" :labels="item.title" />
                </div>
            </div>
            <hr />
            <template v-for="(option, index) in options_list" :key="index">
                <div class="f-sbold mb-3 text-grey500">Silahkan Pilih {{ option.title }}</div>
                <div class="row">
                    <div class="col-12" v-for="(item, index) in option?.items" :key="index">
                        <Radio :value="item.id" :groupname="'GRP_' + option.id" :labels="item.title" :price="item.price"
                            v-model:bindval="option_selected[option.id]" :isperpack="option.is_forperson" />
                        <div v-if="item.desc" class="d-flex">
                            <i class="bi bi-info-circle me-2"></i>
                            <div class="mb-2 f-12 text-grey500">{{ item.desc }}</div>
                        </div>
                    </div>
                </div>
                <hr />
            </template>


            <div class="f-sbold text-primary mt-2" href="">Lebih Banyak</div>
            <hr />
            <div class="f-sbold mb-3 text-grey500">Lihat Detail Tiket Kamu Disini</div>
            <section class="detail-trans p-3 rounded">
                <TransPack :package="package" :prices="cartStore.prices" :option_selected="option_obj" :trip="response"
                    v-model:date="cartStore.date" />
                <hr class="hr-devider" />
                <h6 class="f-sbold mb-0">Per Peserta</h6>
                <small class="f-12 text-grey500">Berlaku untuk peserta diatas usia 3 tahun</small>
                <div class="row mt-3">
                    <div class="col-6 d-flex align-items-center">
                        <span class="f-sbold f-14">{{ $toCurrency(cartStore.prices.basePrice) }}</span><small
                            class="f-12 text-grey500 text-decoration-line-through">
                            {{ $toCurrency(cartStore.prices.befBasePrice) }}</small>
                    </div>
                    <div class="col-6">
                        <div class="input-group">
                            <button class="btn btn-bd-primary " @click="cartStore.adultqty > 0 ? cartStore.adultqty-- : cartStore.adultqty"
                                type="button" id="button-addon1">-</button>
                            <input type="text" class="form-control text-center" v-model="cartStore.adultqty"
                                aria-label="Amount (to the nearest dollar)">
                            <button class="btn btn-bd-primary" @click="cartStore.adultqty++" type="button"
                                id="button-addon1">+</button>
                        </div>
                    </div>
                </div>
                <template v-for="(item, index) in option_obj" :key="index">
                    <div v-if="item.is_forperson">
                        <h6 class="f-sbold mb-0 mt-2">{{ `${item.title} ${item.items.title}` }}</h6>
                        <small class="text-grey500">Berlaku untuk peserta diatas usia 12 tahun</small>
                        <div class="row mt-3">
                            <div class="col-6 d-flex align-items-center">
                                <span class="f-sbold">{{ $toCurrency(item.items.price) }}</span>
                            </div>
                            <div class="col-6">
                                <div class="input-group">
                                    <button class="btn btn-bd-primary" @click="option_selected[item.id+'_qty'] > 0 ? option_selected[item.id+'_qty']-- : option_selected[item.id+'_qty']"
                                        type="button" id="button-addon1">-</button>
                                    <input type="text" class="form-control text-center" v-model="option_selected[item.id+'_qty']"
                                        aria-label="Amount (to the nearest dollar)">
                                    <button class="btn btn-bd-primary" @click="option_selected[item.id+'_qty']++" type="button"
                                        id="button-addon1">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <hr class="hr-devider" />
                <h6 class="f-sbold mb-0">Additional Price</h6>
                <small class="f-12 text-grey500">Berlaku untuk peserta diatas usia 3 tahun</small>
                <template v-for="(item, index) in option_obj" :key="index">
                    <div v-if="!item.is_forperson" class="d-flex justify-content-between mt-3">
                        <div class="f-sbold">{{ `${item.title} : ${item.items.title}` }}</div>
                        <div class="f-sbold">{{ `+ ${$toCurrency(item.items.price)}`  }}</div>
                    </div>
                </template>
                <hr class="hr-devider" />
                <div class="total">
                    <div class="text-grey500">Harga Paket</div>
                    <div class="d-flex align-items-center">
                        <div class="f-24 f-sbold">{{ $toCurrency(totalprice) }}</div>
                        <div class="ms-1 text-grey500 text-decoration-line-through">
                            {{ $toCurrency(totalpricebefore) }}
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
import TransPack from '../widget/TransPack.vue';
import CalendarPicker from '../widget/CalendarPicker.vue';
import type Package from '@/types/Package';
import type SubPackage from '@/types/SubPackage';
import type Price from '@/types/Price';
import type Options from '@/types/Options';
import type SelectedOptions from '@/types/SelectedOption';
import { useCartStore } from '@/stores/cart';
export default {
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    },
    watch: {
        package_active: {
            handler(newval, n) {
                this.$nextTick(() => {
                    //console.log("watch package active")
                    this.$emit('update:package_active', this.package_active);
                })
            },
            deep: true
        },
        date: {
            handler(n, o) {
                //console.log("date change", n);
            },
            deep: true
        }

    },
    emits: ['update:package_active'],
    props: {
        inlabel: {
            type: Boolean,
            default: false
        },
        response: {
            type: Object as () => Package,
            default: {
                packages: []
            }
        },
        package_active: {
            type: Number,
            default: 0
        },
        package: {
            type: Object as () => SubPackage,
        },
        option_selected: {
            type: Object || null,
            default: {}
        },
        price_list: {
            type: Array<Price>,
            default: []
        },
    },
    computed: {
        totalprice(): number {
            let addprice=0;
            let packprice=0;
            this.option_obj.forEach(element => {
                if(!element.is_forperson){
                    addprice+=element.items.price*1;
                }else{
                    packprice+=(element.items.price*this.option_selected[element.id+'_qty']);
                }
            });
            return (this.cartStore.adultqty * this.cartStore.prices.basePrice)+addprice+packprice;
        },
        totalpricebefore(): number {
            return this.cartStore.adultqty * this.cartStore.prices.befBasePrice;
        },
        options_list(): Array<Options> {
            return this.package?.options ? this.package.options : [];
        },
        packages(): Array<SubPackage> {
            return this.response?.packages;
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
    data() {
        return {
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