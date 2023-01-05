<template>
    <div class="container">
        <loading :opacity="0.9" loader='bars' :active="loadingactive" :is-full-page="true"></loading>
        <h1>Payment Simulator</h1>
        <hr />
        <div class="row">
            <div class="col-md-6">
                <h3>Virtual Account</h3>
                <label>Virtual Account (Transaction UUID)</label>
                <input type="text" v-model="va.transaction_uuid" class="form-control" />
                <label>Amount</label>
                <input type="number" v-model="va.amount" class="form-control" />
                <button @click="vapayment" class="btn btn-primary mt-3">Pay Transaction</button>
                <hr/>
                <textarea rows="10" class="form-control">{{ va_response }}</textarea>
            </div>
            <div class="col-md-6"></div>
        </div>

    </div>
</template>
<script lang="ts">
import XenditService from "@/services/xendit-service"
export default {
    data() {
        return {
            va: {
                transaction_uuid: "",
                amount:0
            },
            va_response:"",
            loadingactive:false
        }
    },
    methods:{
        vapayment(){
            this.loadingactive=true;
            XenditService.simylateVA(this.va).then(ret=>{
                console.log(ret)
                this.va_response=JSON.stringify(ret?.data);
                this.loadingactive=false;
            }).catch(err=>{
                this.va_response=JSON.stringify(err.response.data);
                this.loadingactive=false;
            })
        }
    }
}
</script>