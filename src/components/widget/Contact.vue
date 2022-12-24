<template>
    <div class="row border rounded p-2 my-3 mx-1">
        <div class="col-6">
            <label class="f-med">Nama Depan</label>
            <input class="form-control" v-model="cartStore.contact.firstname" />
            <label class="f-med">No Handphone</label>
            <div class="input-group mb-3">
                <button class="btn btn-bd-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ activeCurrency.title
                    }}</button>
                <ul class="dropdown-menu">
                    <li @click="activeCurrency = item" v-for="(item, index) in currencys" :key="index">
                        <span class="dropdown-item" href="#">{{ item.title }}</span>
                    </li>
                </ul>
                <input type="text" class="form-control" v-model="contact.phone" aria-label="Text input with dropdown button">
            </div>
        </div>
        <div class="col-6">
            <label class="f-med">Nama Belakang</label>
            <input class="form-control" v-model="contact.lastname"/>
            <label class="f-med">Email</label>
            <input class="form-control" v-model="contact.email"/>
        </div>
        <hr/>
        <div class="d-flex justify-content-end">
            <button @click="cancel" class="btn btn-bd-primary mx-2">Batal</button>
            <button @click="savetemp" class="btn btn-primary">Simpan</button>
        </div>
    </div>
</template>
<script lang="ts">
import type Contact from '@/types/Contact';
import { useCartStore } from '@/stores/cart';
interface currencysType {
    id: number,
    title: string
}
export default {
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore,
        }
    },
    props:{
        contact:{
            type:Object as ()=>Contact,
            default:{}
        },
        addcontact:{
            type:Boolean,
            default:true
        }
    },
    mounted() {
        for (var i = 0; i < 7; i++) {
            this.currencys.push({
                id: i + 1,
                title: "+6" + (i + 2)
            } as currencysType);
        }
    },
    data() {
        return {
            currencys: [] as Array<currencysType>,
            activeCurrency: {
                id: 1,
                title: "+62"
            } as currencysType,
        }
    },
    emits:['update:addcontact'],
    methods:{
        cancel(){
            this.$emit('update:addcontact',false);
        },
        savetemp(){
            this.$emit('update:addcontact',false);
            this.contact.id=1;
        }
    }
}
</script>