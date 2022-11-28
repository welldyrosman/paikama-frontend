<template>
    <div class="d-flex">
        <i class="bi bi-star-fill" :class="(index + 1)<star?'text-warning':'text-grey100'" v-for="(item, index) in 5" :key="index"></i>
    </div>
</template>
<script lang="ts">
export default{
    props:{
        star:{
            default:0,
            type:Number
        }
    }
}
</script>