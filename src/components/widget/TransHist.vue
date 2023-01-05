<template>
    <div class="mybox p-2 mb-2">
        <div class="row">
            <div class="col-md-3">
                <img :src="$getImage(data?.trip?.image.img_path)" class="img-fluid rounded" />
            </div>
            <div class="col-md-9">
                <div @click="$router.push(`/account/orders/${data.uuid}`)" class="pointer">
                    <div class="d-flex justify-content-between">
                        <div class="f-16 f-sbold text-grey600">
                            No Order :
                            {{ data.trip.id + "T" + data.package.id + "P" + data.member_id + "M" + data.id + "-" + data.book_date.replace(/-/g, "") + "-" + data.id }}
                        </div>
                        <div class="f-12 text-align-center badge " :class="classDic[data.payment_status.toUpperCase()]?.class">{{ classDic[data.payment_status.toUpperCase()]?.label }}</div>
                    </div>
                    <div class="f-16 f-sbold">{{ data?.trip?.title }}</div>
                    <hr class="hr-devider" />
                    <div class="f-sbold">Paket - {{ data?.package?.title }}</div>
                </div>
                <div class="d-flex flex-wrap">
                    <div class="me-2 mt-2 bg-grey100 rounded py-1 px-2">
                        <span class="text-grey600"><i class="bi bi-calendar3"></i> {{ $getDMY(data?.book_date) }}</span>
                    </div>
                    <div v-for="(item, index) in data.optionitems" :key="index"
                        class="me-2 mt-2 bg-grey100 rounded py-1 px-2">
                        <span class="text-grey600"><i class="bi bi-check"></i> {{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
            <div class="dropdown ms-3">
                <button class="btn btn-bd-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="bi bi-three-dots"></i>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <div class="pointer dropdown-item">
                            Hubungi Pemilik
                        </div>
                    </li>
                    <li>
                        <div class="pointer dropdown-item">
                            Bantuan
                        </div>
                    </li>
                </ul>
            </div>
            <button class="ms-2 btn btn-primary">Lihat Detail Voucher</button>
        </div>
    </div>
</template>
<script lang="ts">
import type TransactionHist from '@/types/Response/TransactionHist';
import type TransactionVa from '@/types/Transaction';


export default {
    props: {
        data: {
            type: Object as () => TransactionHist,
            default: {
            }
        }
    },
    data() {
        return {
            classDic:{
                PENDING:{
                    label:"Menunggu Pembayaran",
                    class:"bg-warning"
                },
                SUCCEEDED:{
                    label:"Telah Dibayar",
                    class:"bg-success"
                }
            },
        }
    },
}
</script>
<style lang="scss">
.dropdown-toggle::after {
    display: none !important
}
</style>