<template>
    <main>
        <div class="parallax d-flex flex-column align-items-center justify-content-center">
            <div class="text-center lg mb-3">
                <h5 class="text-white">Hai Kamu yang di sana, hari ini mau kemana?</h5>
            </div>
            <SearchBig/>
            <PopularSearch/>
        </div>
    </main>
</template>
<script lang="ts">
import PopularSearch from '../widget/PopularSearch.vue';
import SearchBig from '../widget/SearchBig.vue';
export default{
    components: { SearchBig, PopularSearch }
}
</script>
<style scoped>
.parallax {
    /* The image used */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("@/assets/image/website/jumbotron.jpg");
    min-height: 400px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>