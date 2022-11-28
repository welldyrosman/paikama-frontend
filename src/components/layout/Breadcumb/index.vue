<template>
    <BreadcumbItemVue :paths="paths" class="pt-3"/>
</template>
<script lang="ts">
import BreadcumbItemVue from './BreadcumbItem.vue';
export default{
    props:{
        paths:{
            type:Object,
            default:{
                title:"Beranda"
            }
        }
    },
    data() {
        return {
           
        };
    },
    components: { BreadcumbItemVue }
}
</script>