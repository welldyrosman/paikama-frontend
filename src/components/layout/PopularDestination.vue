<template>
    <main>
        <div class="f-24 f-sbold my-3">Destinasi Pilihan</div>
        <CategoryCity />
        <div class="text-center my-5">
            <button class="btn btn-bd-primary px-5">Lihat Semua Aktivitas</button>
        </div>
    </main>
</template>
<script lang="ts">
import CategoryCity from './CategoryCity.vue';

export default {
    components: { CategoryCity }
}
</script>
<style scoped lang="scss">
</style>