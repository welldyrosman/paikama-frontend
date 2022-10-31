
<template>
    <div class="row row-cols-1 row-cols-md-4 g-3">
        <CatalogCard v-for="(item, index) in 10" :key="index" />
    </div>
</template>
<script lang="ts">
import CatalogCard from '../widget/CatalogCard.vue';
export default{
    components: { CatalogCard }
}
</script>