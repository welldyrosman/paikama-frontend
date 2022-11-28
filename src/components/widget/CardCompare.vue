<template>
    <div class="card-compare">
        <img src="@/assets/image/website/package/pack-2.jpg" class="img-fluid card-img-top" />
        <div class="p-3">
            <div class="f-med ">Opentrip 3D2N Labuan Bajo - Komodo By Travel Go !</div>
            <div class="mt-3 text-grey400">Balaraja Barat</div>
            <Travelcomp class="mt-3" />
        </div>
        <hr />
        <div class="p-3">
            <BoxRating />
            <TranscationBar :inlabel="true"/>
        </div>
    </div>
</template>
<script lang="ts">
import TranscationBar from '../layout/TranscationBar.vue';
import BoxRating from './BoxRating.vue';
import Travelcomp from './Travelcomp.vue';

export default {
    components: { Travelcomp, BoxRating, TranscationBar }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.card-compare {
    border: 1.5px solid colorVariable.$grey100;
    border-radius: 1rem;

    img {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
}
</style>