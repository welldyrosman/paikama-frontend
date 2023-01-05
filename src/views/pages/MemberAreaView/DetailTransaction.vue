<template>
    <main>
        <Alert v-model:show="alertshow" :show-icon=false    v-if="alertshow" :defaultButton=false>
        <slot>
            <div class="f-18 f-sbold">Ini adalah Kode Kamu</div>
            <div class="text-grey500">Jangan perlihatkan kode ini selain ke agensi trip</div>
            <div class="row gx-0 mx-3 mt-5 mb-3">
                <input type="text" class="col form-control me-1" disabled :value="code"/>
                <button @click="generatecode" :disabled="(loading_gen)" class=" col-5 btn btn-primary">
                    <span v-if="loading_gen" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                        <span> {{ loading_gen ? 'Loading...' : 'Dapatkan Kode' }}</span></button>
            </div>
        </slot>
        </Alert>
        <loading :opacity="1" loader='bars' :active="loadingactive" :is-full-page="true"></loading>
        <div @click="$router.push(`/account/orders`)" class="d-flex text-primary f-med pointer mb-2">
            <i class="bi bi-arrow-left f-med me-1"></i>
            Kembali
        </div>
        <div class="mybox p-2">
            <div class="row">
                <div class="col-md-3">
                    <img src="@/assets/image/website/city/bali.jpg" class="img-fluid rounded" />
                </div>
                <div class="col-md-9">
                    <div class="d-flex justify-content-between">
                        <div class="f-16 f-sbold text-grey600">
                            No Order :
                            {{ data?.trip?.id + "T" + data?.package?.id + "P" + data?.member_id + "M" + data?.id + "-" +
                                    data?.book_date?.replace(/-/g, "") + "-" + data?.id
                            }}
                        </div>
                        <div class="f-12 text-align-center badge bg-success">{{  classDic[data?.payment_status?.toUpperCase()]?.label  }}</div>
                    </div>
                    <div class="f-16 f-sbold">{{ data?.trip?.title }}</div>
                    <hr class="hr-devider" />
                    <div class="f-sbold">Paket - {{ data?.package?.title }}</div>
                    <div class="d-flex flex-wrap">
                        <div class="me-2 mt-2 bg-grey100 rounded py-1 px-2">
                            <span class="text-grey600"><i class="bi bi-calendar3"></i>
                                {{ $getDMY(data?.book_date) }}</span>
                        </div>
                        <div v-for="(item, index) in data.optionitems" :key="index"
                            class="me-2 mt-2 bg-grey100 rounded py-1 px-2">
                            <span class="text-grey600"><i class="bi bi-check"></i> {{ item.title }}</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="mybox mt-3">
                <div class="mx-3 my-3 d-flex align-items-center justify-content-between f-bold">
                    <div class="f-16">Total Pembayaran</div>
                    <div class="f-20">{{ $toCurrency(data.grand_total) }} <i
                            class="pointer ms-2 bi bi-chevron-down"></i></div>
                </div>

                <hr style="margin:0 ;" />
                <div class="m-3">
                    <div class="f-sbold mb-2">Harga</div>
                    <div class="row">
                        <div class="col-md-4">
                            <div>Per Peserta</div>
                            <div v-for="(item, index) in data?.optiondets" v-show="item?.is_forperson" :key="index">{{item?.option?.title}}</div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div>{{data?.details?.qty}}x <span class="text-grey500">{{$toCurrency(data?.details?.price)}}</span></div>
                            <div v-for="(item, index) in data?.optiondets" v-show="item?.is_forperson" :key="index">{{item.qty}}x <span class="text-grey500">{{ $toCurrency(item.price) }}</span></div>
                        </div>
                        <div class="col-md-4 text-end">
                            <div class="f-sbold">{{$toCurrency(data?.details?.price*data?.details?.qty)}}</div>
                            <div v-for="(item, index) in data?.optiondets" v-show="item?.is_forperson" :key="index" class="f-sbold">
                                {{$toCurrency(item.qty*item.price)}}
                            </div>
                        </div>
                    </div>
                    <hr class="hr-devider" />
                    <div class="row">
                        <div class="col-md-4">

                            <div>Per Peserta</div>
                            <div>PPN</div>
                        </div>
                        <div class="col-md-4 text-center">

                        </div>
                        <div class="col-md-4 text-end">
                            <div class="f-sbold">37377373</div>
                            <div class="f-sbold">{{ $toCurrency(data.tax) }}</div>
                        </div>
                    </div>
                </div>
                <hr style="margin:0 ;" />
                <div class="mx-3 my-3 d-flex align-items-center justify-content-between f-bold">
                    <div class="f-16">Total Pembayaran</div>
                    <div class="f-20">{{ $toCurrency(data.grand_total) }}</div>
                </div>
            </div>
            <div class="d-flex justify-content-end mt-3">
                <button @click="alertshow=true" v-if="data.payment_status=='SUCCEEDED'" class="btn btn-primary">Generate Token</button>
            </div>
            <div class="mybox mt-3 box-content">
                <h5 class="f-sbold f-20">Itenerary</h5>
                <Itenerary :itineraries="data?.package?.itineraries" />
                <h5 class="f-sbold f-20">Termasuk</h5>
                <Infolist :data="data?.package?.includes" />
                <h5 class="f-sbold f-20">Tidak Termasuk</h5>
                <Infolist :data="data?.package?.excludes" />
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import Alert from '@/components/widget/Alert.vue';
import Infolist from '@/components/widget/Infolist.vue';
import Itenerary from '@/components/widget/Itenerary.vue';
import memberRoomService from '@/services/member-room-service';
import type TransactionHist from '@/types/Response/TransactionHist';
export default {
    data() {
        return {
            loadingactive:true,
           loading_gen : false,
            data: {} as TransactionHist,
            alertshow:false,
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
        };
    },
    mounted() {
        this.doQuery();
    },
    computed:{
        code():string{
            let code=""
            code=this.data.start_code||"";
            return code
        }
    },
    methods: {
        async generatecode(){
            this.loading_gen=true;
            const ret=await memberRoomService.generate_start_code(this.data.uuid);
            this.data.start_code=ret.data.data;
            this.loading_gen=false;
        },
        async doQuery() {
            const ret = await memberRoomService.transaction_detail(this.$route.params.uuid as string);
            console.log("dt",ret.data);
            this.data = ret.data;
            this.loadingactive=false;
        }
    },
    components: { Itenerary, Infolist, Alert }
}
</script>