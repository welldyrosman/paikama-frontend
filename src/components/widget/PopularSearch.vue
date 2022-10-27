<template>
    <div class="d-flex popular-search">
        <div class="me-3">Popular Search :</div>
        <div class="d-flex align-items-center">
            <div class="populat-item mx-1" v-for="(item, index) in recentItems" :key="index">
                {{ item.title }}</div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            recentItems: [
                {
                    id: 1,
                    title: "Pantai Kuta"
                },
                {
                    id: 2,
                    title: "Kepulauan Seribu"
                }, {
                    id: 3,
                    title: "Liburan Bali"
                }, {
                    id: 4,
                    title: "Trip to Bali"
                }, {
                    id: 5,
                    title: "Kalijodo"
                },
            ]
        }
    },
}
</script>
<style scoped>
.popular-search {
    font-size: smaller;
    color: white;
}

.populat-item {
    border: 1px white solid;
    padding: 0.1rem 0.6rem 0.2rem 0.6rem;
    border-radius: 0.4rem;
    cursor: pointer;
}

.populat-item:hover {
    background: white;
    color: black;
}
</style>