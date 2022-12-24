<template>
    <nav aria-label="...">
        <ul class="pagination justify-content-end">
            <li v-for="(item, index) in data?.links" :key="index" @click="changePage(item)"  class="page-item " :class="[{'disabled':!item.url},{'active':item.active}]">
                <a class="page-link" ><span v-html="item.label" ></span></a>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import type Pagination from '@/types/Pagination'
export interface LinkPage{
    active:boolean,
    label:string,
    url:string|null
}
export default{
    props:{
        data:{
            type:Object as ()=> Pagination
        }
    },
    methods:{
        changePage(item:LinkPage){
            this.$emit('changePage',item.url?.split("page=")[1])
        }
    }
}
</script>
<style lang="scss" scoped>
.pagination{
    li{
        cursor:  pointer !important;
    }
}
</style>