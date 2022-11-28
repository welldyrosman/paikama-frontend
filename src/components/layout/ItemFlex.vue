<template>
    <div class="itemflex" >{{ item.title }}</div>
</template>
<script lang="ts">
export default{
    props:{
        item:{
            type:Object,
            default:{
                title:"Item"
            }
        }
    }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';
.itemflex {
    border: 1px solid colorVariable.$grey400;
    padding: 0.3rem 1rem 0.3rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
    color: colorVariable.$grey600;
    min-width: fit-content;
    width: max-content;
}
</style>