<template>
    <div class="travel d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <div class="travel-logo">
                <img class="img-fluid rounded-circle" :src="getlogo" />
            </div>
            <div class="travel-title ms-1">
                <div class="f-21 f-sbold ">{{ data.title }}</div>
                <span class="f-12 text-grey500">{{data.lasttime}}</span>
            </div>
        </div>
        <i class="bi bi-three-dots-vertical justify-content-end"></i>
    </div>
</template>
<script lang="ts">
interface data_travel {
    id: number,
    title: string,
    lasttime:string,
    logo: string
}
export default {
    props: {
        data: {
            type: Object,
            default: {} as data_travel
        }
    },
    computed:{
        getlogo():string{
            return new URL(`/src/assets/${this.data.logo}`, import.meta.url).href
        }
    }
}
</script>
<style scoped lang="scss">
@use "@/assets/colorVariable.scss";

.travel {
    padding: 0.7rem;
    margin: 0.2rem;
    border-radius: 0.7rem;
    cursor: pointer;
    &.active{
        background-color: colorVariable.$primary50 ;
    }
    &:hover {
        background-color: colorVariable.$grey100 ;
    }

    .travel-logo {
        width: 3rem;
        border-radius: 3rem;
    }
}
</style>