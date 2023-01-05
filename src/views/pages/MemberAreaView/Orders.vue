<template>
    <div class="mybox">
        <div class="d-flex m-3 align-items-center  justify-content-between">
            <div class="f-18 f-sbold">Daftar Transaksi</div>
            <div class="d-flex">
                <input type="text" class="form-control" />
                <div class="dropdown ms-3">
                    <button class="btn btn-bd-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {{ filter.title }}
                    </button>
                    <ul class="dropdown-menu">
                        <li v-for="(item, index) in filterItems" :key="index">
                            <div class="pointer dropdown-item" :class="{ 'active': filter.id == item.id }"
                                @click="filter = item">
                                {{ item.title }}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <div class="px-2">
            <TransHist v-for="(item, index) in histories" :data="item" :key="index" />
            <Pagination  @changePage="doQuery" :data="pagination" />
        </div>
    </div>
</template>
<script lang="ts">
import Pagination from '@/components/widget/Pagination.vue';
import TransHist from '@/components/widget/TransHist.vue'
import MemberRoomService from '@/services/member-room-service'
import type PaginationType from '@/types/Pagination';
import type TransactionHist from '@/types/Response/TransactionHist';
import type TransactionVa from '@/types/Transaction';

export default {
    components: { TransHist, Pagination },
    async beforeMount() {
        this.doQuery();
    },
    methods: {
        async doQuery(page: number = 1) {
            const ret = await MemberRoomService.mytransaction(`?page=${page}`);
            this.pagination = ret.data;
        }
    },
    computed: {
        histories(): Array<TransactionHist> {
            console.log("mypage", this.pagination.data)
            return this.pagination.data;
        },
    },
    data() {
        return {
            pagination: {} as PaginationType,
            filterval: "",
            filter: {
                id: "",
                title: "Semua"
            },
           
            filterItems: [
                {
                    id: "",
                    title: "Semua"
                },
                {
                    id: "Menunggu Pembayaran",
                    title: "Menunggu Pembayaran"
                },
                {
                    id: "Dibatalkan",
                    title: "Dibatalkan"
                },
                {
                    id: "Sudah Dibayar",
                    title: "Sudah Dibayar"
                }, {
                    id: "Finish",
                    title: "Finish"
                },
            ]
        }
    },
}
</script>