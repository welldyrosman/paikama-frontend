<template>
    <main class="">
        <div class="f-20 f-sbold my-3 mx-3">BCA Virtual Account</div>
        <div class="mybox">
            <div class="f-16 f-sbold mt-3 mx-3">Silahkan bayar ke</div>
            <hr />
            <div class="mx-3  mt-3  d-flex justify-content-between">
                <div>Virtual Account</div>
                <img class="ms-2" :src="getBankLogo()" />
            </div>
            <hr class="mx-3" />
            <div class="mx-3  mt-3  d-flex justify-content-between">
                <div>Nomor Virtual Account</div>
                <div class="d-flex bg-grey100 px-3 py-1 rounded text-grey600">
                    <div class="me-5 f-sbold ">{{ cartStore.virtual_account }}</div>
                    <div class="pointer">Salin <i class="bi bi-files"></i></div>
                </div>
            </div>
            <hr class="mx-3" />
            <div class="mx-3  my-3  d-flex justify-content-between">
                <div>Total Pembayaran</div>
                <div class="f-20 f-sbold text-primary">{{ $toCurrency(cartStore.grand_total) }}</div>
            </div>
        </div>
        <hr />
        <div class="f-20 f-sbold my-3 ">Cara Pembayaran</div>
        <div class="accordion  mb-3" id="accordionExample">
            <div class="accordion-item mybox radius">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button  radius" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Transfer melalui ATM
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default,
                        until the
                        collapse plugin adds the appropriate classes that we use to style each element.
                        These classes
                        control the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also
                        worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>, though the
                        transition
                        does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-1 mybox radius">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed radius" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Transfer Melalui Internet Banking
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the
                        collapse plugin adds the appropriate classes that we use to style each element.
                        These classes
                        control the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also
                        worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>, though the
                        transition
                        does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item mt-1 mybox radius">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed radius" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Transfer Melalui Mobile Banking
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default,
                        until the
                        collapse plugin adds the appropriate classes that we use to style each element.
                        These classes
                        control the overall appearance, as well as the showing and hiding via CSS
                        transitions. You can
                        modify any of this with custom CSS or overriding our default variables. It's also
                        worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>, though the
                        transition
                        does limit overflow.
                    </div>
                </div>
            </div>
        </div>
       
    </main>
</template>
<script lang="ts">
import type TransactionVa from '@/types/Transaction';
export default {
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