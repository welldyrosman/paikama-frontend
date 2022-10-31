<template>
    <BreadcumbItemVue :paths="paths" class="pt-3"/>
</template>
<script lang="ts">
import BreadcumbItemVue from './BreadcumbItem.vue';
export default{
    data() {
        return {
            paths:{
                title:"Beranda",
                inner:{
                    title:"Indonesia",
                    inner:{
                        title:"Bali",
                        inner:{
                            title:"Nusa Peninda",
                            inner:{
                                title:"Open Trip Pulau Tidung, Kepulauan Seribu (2Hari 1Malam) By Sabiladventure"
                            }
                        }
                    }
                }
            }
        };
    },
    components: { BreadcumbItemVue }
}
</script>