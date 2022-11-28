<script setup lang="ts">
import Breadcumb from '@/components/layout/Breadcumb/index.vue';
import Footer from '@/components/layout/Footer.vue';
import AddOptionButton from '@/components/widget/AddOptionButton.vue';
import CardCompare from '@/components/widget/CardCompare.vue';
import BreadcumbData from './Breadcumb.json'
</script>
<template>
    <main>
        <div class="container margin-navbar">
            <Breadcumb :paths="BreadcumbData" class="mt-5"/>
            <div class="mt-3">
                <div class="f-24 f-sbold">Bandingkan Paket Tur</div>
                <div class="text-grey500">List paket tur yang telah anda pilih untuk dibandingkan</div>
            </div>
            <div class="box-card-compare mt-5 row">
                <div class="col-4" v-for="(item, index) in 2" :key="index">
                    <CardCompare/>
                </div>
                <div class="col-4">
                    <AddOptionButton/>
                </div>
            </div>
        </div>
        <Footer />
    </main>
</template>
<style lang="scss" scoped>
@use '@/assets/colorVariable.scss';
.box-card-compare{
    width: 100%;
    overflow-x: auto;
}
</style>
