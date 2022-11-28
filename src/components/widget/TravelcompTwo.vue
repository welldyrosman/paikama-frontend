<template>
    <div class="travel d-flex align-items-center">
        <div class="travel-logo">
            <img class="img-fluid" :src="getlogo"  />
        </div>
        <div class="travel-title ms-1">
            <div class="f-sbold ">{{data.title}}</div>
            <span class="f-12er text-grey500">Bergabung Sejak{{data.joinYM}}</span>
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
    border-radius: 3rem;
}
</style>