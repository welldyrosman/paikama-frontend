<template>
    <div class="contact-det row border rounded pb-2 pt-3 my-3 mx-1 align-items-center">
        <div class="col-4">
            <div class="text-grey500">Nama Depan</div>
            <div class="text-grey500">Nama Belakang</div>
            <div class="text-grey500">Nomor Handphone</div>
            <div class="text-grey500">Email</div>
        </div>
        <div class="col-4">
            <div class="">{{contact.firstname}}</div>
            <div class="">{{contact.lastname}}</div>
            <div class="">{{contact.phone}}</div>
            <div class="">{{contact.email}}</div>
        </div>
        <div class="col-4">
            <button @click="$emit('update:addcontact',true)" class="btn btn-bd-primary"><i class="bi bi-pencil-fill me-2"></i>Edit Kontak</button>
        </div>
    </div>
</template>
<script lang="ts">
import type Contact from '@/types/Contact';
export default{
    props:{
        contact:{
            type:Object as ()=> Contact,
            default:{}
        },
        addcontact:{
            type:Boolean,
            default:true
        }
    },
    emits:['update:addcontact'],
}
</script>
<style scoped lang="scss">
.contact-det{
    .col-4{
        div{
            margin-bottom: 0.5rem;
        }
    }
}
</style>