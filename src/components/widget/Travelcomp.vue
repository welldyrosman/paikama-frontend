<template>
    <div class="travel d-flex align-items-center">
        <div class="travel-logo">
            <img class="img-fluid rounded-circle" v-if="data.logo"  :src="getlogo" />
            <div style="height:1.9rem ;" v-else></div>
        </div>
        <div class="travel-title f-sbold ms-1">{{data.title}}</div>
    </div>
</template>
<script lang="ts">
import type Agency from "@/types/Agency"
export default{
    props:{
        data:{
            default:{
                id:0,
                title:"TRavel Name",
                logo:"image/website/travel/travel-logo.jpg"
            },
            type: Object as ()=> Agency
        },
        
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
    width: 1.9rem;
    border-radius: 2rem;
}

</style>