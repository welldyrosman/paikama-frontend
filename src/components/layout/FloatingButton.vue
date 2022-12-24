<template>
    <div class="floating-btn w-100">
    <div class=" d-flex justify-content-center text-white">
        <div @click="changeview" class="btn-floating mx-2 py-1 px-3"><i class="bi me-2" :class="iconLabel"></i>{{buttonLabel}}</div>
        <div class="btn-floating mx-2 py-1 px-3"><i class="bi bi-filter me-2"></i>Tampilkan Filter</div>
    </div>
</div>
</template>
<script lang="ts">
export default{
    data() {
        return {
            mapsview:false,
            buttonLabel:"Cari Lewat Peta"
        }
    },
    mounted(){
        //console.log(this.$route.path)
    },
    methods:{
        changeview(){
           // alert(this.$route.path+"/mapsview");
            var newpath= this.$route.path+"/mapsview"
            this.$route.path=="/mapsview"?this.$router.push("/"):this.$router.push({path:newpath});
        }
    },
    computed: {
        buttonLabel():string{
            return this.$route.path=="/mapsview"?"Tampilkan Daftar":"Cari Lewat Peta";
        },
        iconLabel():string{
            return this.$route.path=="/mapsview"?" bi-list":"bi-map";
        }

       
       
    },
}
</script>
<style scoped>
.floating-btn{
    position: fixed;
    bottom: 5rem;
    z-index: 999;
}
.btn-floating{
    background-color: rgba(0, 0, 0, 0.776);
    border-radius: 1rem;
    cursor: pointer;
}
</style>