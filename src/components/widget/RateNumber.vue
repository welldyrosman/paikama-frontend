<template>
    <div class="d-flex align-items-center">
        <div class="f-24 f-sbold mb-0">{{rate}}</div>
        <span class="f-12 text-grey500">/5</span>
    </div>
</template>
<script lang="ts">
export default{
    props:{
        rate:{
            type:Number,
            default:0
        }
    }
}
</script>