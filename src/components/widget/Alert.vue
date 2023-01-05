<template>
    <div class="myalert ">
        <div class="alert-box animate__animated animate__zoomIn animate__faster " >
            <i @click="onclose" class="bi bi-x-lg text-grey300 pointer closeicon"></i>
            <i v-if="showIcon" class="f-24 text-primary bi bi-info-circle-fill"></i>
            <div>
                <span v-if="message">{{ message }}</span>
                <slot></slot>
            </div>
            <button @click="onclose" v-if="defaultButton" class="btn btn-sm btn-primary mt-3">Mengerti</button>
        </div>
    </div>

</template>
<script lang="ts">
export default {
    props: {
        defaultButton:{
            type:Boolean,
            default:true
        },
        showIcon:{
            type:Boolean,
            default:true
        },
        message: {
            default: "",
            type: String
        },
        show: {
            default: false,
            type: Boolean
        }
    },
    emits: ['update:show'],
    methods: {
        onclose() {
            this.$emit("update:show", false)
        }
    }
}
</script>
<style lang="scss">
.myalert {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.753);
    z-index: 999999 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    .alert-box {
        .closeicon {
            position: absolute;
            right: 0.5rem;
            top: 0.5rem;
        }
        position: relative;
        background: white;
        padding: 1rem;
        min-width: 20rem;
        max-width: 50%;
        border-radius: 1rem;
        align-items: center;
        text-align: center;
        display:grid;
        box-shadow: 0px 0px 10px 10px #88888846;
    }
}
</style>