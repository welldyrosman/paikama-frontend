<template>
    <ul>
        <li v-for="(item, index) in data" :key="index">{{item.facility.title}}</li>
    </ul>
</template>
<script lang="ts">
import type TripFacility from "@/types/TripFacility";
export default{
    props:{
        data:{
            default:[],
            type:Array<TripFacility>
        }
    }
}
</script>
<style scoped>
ul{
    margin-left: 0px;
    padding-left: 20px;
}
</style>