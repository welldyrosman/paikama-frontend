<template>
    <div class="d-flex flex-box py-3">
        <div class="itemflex mx-1">Semua Lokasi</div>
        <div class="itemflex mx-1" v-for="(item, index) in items" :key="index">{{item.title}}</div>
    </div>
</template>
<script lang="ts">
export default{
    data() {
        return {
            items:[
                {
                    id:1,
                    title:"Bali"
                },{
                    id:2,
                    title:"Jakarta"
                },{
                    id:3,
                    title:"Lombok"
                },{
                    id:4,
                    title:"Payakumbuh"
                },{
                    id:5,
                    title:"Banten"
                },{
                    id:6,
                    title:"Papua Nugini"
                },{
                    id:7,
                    title:"Kalimantan"
                },{
                    id:8,
                    title:"Lampung"
                },{
                    id:9,
                    title:"Lampung"
                },{
                    id:10,
                    title:"Lampung"
                },{
                    id:11,
                    title:"Lampung"
                },{
                    id:12,
                    title:"Lampung"
                },{
                    id:13,
                    title:"Lampung"
                },{
                    id:14,
                    title:"Lampung"
                },
            ]
        }
    },
}
</script>
<style scoped>
.flex-box{
    font-size: smaller;
    max-width: 100%;
    overflow-x: hidden;
}
.itemflex{
    border: 1px solid rgb(189, 189, 189);
    padding: 0.1rem 0.6rem 0.2rem 0.6rem;
    border-radius: 1rem;
    cursor: pointer;
    color: grey;
    min-width: fit-content;
}
</style>