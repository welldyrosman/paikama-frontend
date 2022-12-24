<template>
    <main>
        <div class="mybox">
            <div class="f-20 f-sbold mt-3 mx-3">Informasi Pemesanan</div>
            <hr />
            <div class="m-3">
                <div class="f-18 f-sbold">Data penjemputan</div>
                <div class="row mt-3">
                    <div class="col-6">
                        <label>Hotel / Tempat Penjemputan</label>
                        <select type="text" v-model="cartStore.meetpoint.meeting_point"
                            placeholder="isi nama Hotel / Alamat" class="form-control">
                            <option v-for="(item, index) in meetingpoints" :value="item" :key="index">
                                @{{ item.pick_time }} : {{ item.title }}
                            </option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label>Nomor Whatsapp</label>
                        <div class="input-group mb-3">
                            <button class="btn btn-bd-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">{{ activeCurrency.title
                                }}</button>
                            <ul class="dropdown-menu">
                                <li @click="$emit('update:activeCurrency', item)" v-for="(item, index) in currencys"
                                    :key="index">
                                    <span class="dropdown-item" href="#">{{ item.title }}</span>
                                </li>
                            </ul>
                            <input type="text" class="form-control" v-model="cartStore.meetpoint.contact"
                                aria-label="Text input with dropdown button">
                        </div>
                    </div>
                </div>
                <hr class="mt-1" />
                <div class="f-18 f-sbold">Detail Kontak</div>
                <div class="f-12 text-grey500">Kontak yang bisa dihubungi, untuk informasi perihal pesanan
                    anda</div>

                <!-- <button @click="onAddContact"  v-if="!addcontact" class="btn btn-bd-primary mt-3"><i
                                    class="bi bi-plus-circle-fill"></i> Tambah
                                Kontak</button> -->
                <ContactVue v-if="addcontact" v-model:addcontact="addcontact" :contact="cartStore.contact" />

                <SavedContact v-else v-model:addcontact="addcontact" :contact="cartStore.contact" />
                <div v-if="!cartStore.contact.id" class="d-flex text-danger f-12 mt-2"><i
                        class="bi bi-info-circle-fill me-2"></i>Mohon
                    isi detail kontak ini </div>
            </div>
        </div>
        <div class="my-3">Dengan mengklik "Lanjutkan ke Pembayaran" Anda menyetujui aturan, batasan, dan
            Syarat & Ketentuan</div>
        <button @click="$router.push('/checkout/payment')" class="btn btn-primary">Lanjutkan ke
            Pembayaran</button>
    </main>
</template>
<script lang="ts">
import type MeetingPoint from '@/types/MeetingPoint';
import SavedContact from '@/components/widget/SavedContact.vue';
import ContactVue from '@/components/widget/Contact.vue';
import { useCartStore } from '@/stores/cart';
import landingPageService from '@/services/landing-page-service';
interface currencysType {
    id: number,
    title: string
}
export default {
    components: { SavedContact, ContactVue },
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore,
        }
    },
    props: {
      
        activeCurrency: {
            type: Object as () => currencysType,
            default: {
                id: 1,
                title: "+62"
            } as currencysType
        },
        addcontact: {
            default: true,
            type: Boolean
        },
        currencys: { type: Array<currencysType> }
    },
    emits: ['update:activeCurrency'],
    async beforeCreate() {
        let ret = await landingPageService.getmeetingpoints(this.cartStore.trip?.uuid);
        this.meetingpoints = ret;
    },
    data() {
        return {
            meetingpoints:[] as Array<MeetingPoint>
        }
    },
}
</script>