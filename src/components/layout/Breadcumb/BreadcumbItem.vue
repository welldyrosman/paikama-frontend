<template>
    <div class="breadcumb d-flex fs-smaller align-items-center text-truncate">
        <div :class="{'text-primary':paths.inner}" class=" mx-2 f-med">{{paths.title}}</div>
        <i v-if="paths.inner" style="font-size: smaller;" class="bi bi-chevron-right text-blur fw-bold"></i>
        <breadcumb v-if="paths.inner" :paths="paths.inner"/>
    </div>
</template>
<script lang="ts">
export default{
    name:"breadcumb",
    props:{
        paths:{
            default:{
                title:"Breadchumb",
                inner:null
            },
            type:Object
        }
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped>
.breadcumb{
    font-size: 12px;
    
}
</style>