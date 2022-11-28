<template>
    <ul>
        <li v-for="(item, index) in data" :key="index">{{item.title}}</li>
    </ul>
</template>
<script lang="ts">
import type Info from "@/types/Info"
export default{
    props:{
        data:{
            default:[],
            type:Array<Info>
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