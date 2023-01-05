<template>
    <main>
        <div class="container margin-navbar">
            <div class="row">
                <div class="col-md-3 mt-3">
                   <ProfileMenu/>
                </div>
                <div class="col-md-9 mt-3">
                    
                        <RouterView/>
                </div>
            </div>
        </div>
        <FooterComp />
    </main>
</template>
<script lang="ts">
import FooterComp from '@/components/layout/Footer.vue';
import ProfileMenu from '@/components/widget/ProfileMenu.vue'
interface Menu{
    id:number,
    title:string,
    path:string,
    icon:string
}
export default {
    components:{FooterComp,ProfileMenu},
   
    data() {
        return {
        
        }
    },
    methods:{
       
    }
}
</script>
