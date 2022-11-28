<template>
    <div class="col-12 col-sm-6">
        <div class="input-group mb-3">
            <span class="input-group-text group-label ps-3 text-secondary"><i class="bi bi-search"></i></span>
            <input  type="text" @click.stop="" @focusin="dataliston = true" 
                class="form-control searchinput p-2" list="datalistOptions" id="exampleDataList"
                placeholder="Wisata pulau Bali" />
            <div class="mydatalist" v-if="dataliston">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="f-med f-24">Yang Pernah Kamu Cari</span>
                    <span class="text-primary f-sbold del">Hapus Semua</span>
                </div>
                <div v-for="(item, index) in 10" @click="selectHist" :key="index" class="suggest-item px-3 d-flex align-items-center justify-content-between mt-2">
                    <div class="d-flex align-items-center"><i class="bi bi-arrow-repeat me-3 f-20"></i>Wisata Bali</div>
                    <i class="bi bi-x-lg"></i>
                </div>
            </div>
        
        </div>
    </div>

</template>
<script lang="ts">
export default {
    data() {
        return {
            dataliston: false
        }
    },
    created(){
        window.addEventListener('click',this.hideSuggestion);
    },
    methods: {
        hideSuggestion(){
            this.dataliston=false
        },
        selectHist(){
            alert()
        },
        blur() {
            console.log("blur");
        },
        focus() {
            console.log("focus");
        }
    }
}
</script>
<style scoped lang="scss">
@use "@/assets/colorVariable.scss";
@media (max-width: 576px) {
    .title {
        font-size: 1.2rem !important
    }
}

.input-group {
    width: 100%;

    input.searchinput {
        border-radius: 0 10rem 10rem 0 !important;
        border-left: none;
    }

    .mydatalist {
        padding: 1rem;
        height: 300px;
        width: 100%;
        background-color: white;
        position: absolute;
        overflow-y: auto;
        top: 3rem;
        z-index: 99999;
        border-radius: 1rem !important;
        .suggest-item{
            cursor: pointer;
            padding: 0.5rem;
            
            border-radius: 0.5rem;
            &:hover{
                background-color: colorVariable.$grey100;
            }
        }
        div .del{
         cursor: pointer;  
        }
    }
}

.group-label {
    border-radius: 10rem 0 0 10rem !important;
    background-color: white;
    border-right: none;
}



.form-control:focus {
    border-color: none;
    box-shadow: none;
}
</style>