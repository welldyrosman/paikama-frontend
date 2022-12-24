<template>
    <div class="travel d-flex align-items-center">
        <div class="travel-logo">
            <img class="img-fluid rounded-circle" v-if="data.logo" :src="$getImage(data?.logo)"  />
        </div>
        <div class="travel-title ms-1">
            <div class="f-sbold ">{{data.name}}</div>
            <span class="f-12er text-grey500">Bergabung Sejak {{$getMY(data.created_at)}}</span>
        </div>
    </div>
</template>
<script lang="ts">
import type Agency from "@/types/Agency"
export default{
    props:{
        data:{
            default:{},
            type: Object as ()=> Agency
        }
    },
    computed:{
        getlogo():string{
            return new URL(`/src/assets/${this.data.logo}`, import.meta.url).href
        }
    }
}
</script>
<style scoped>
.travel-logo {
    width: 3rem;
    border-radius: 3rem !important;
}
</style>