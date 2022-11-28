<template>
    <div class="box-rating py-2 px-3">
        <div class="d-flex justify-content-between">
            <div class="f-med mb-2">Rating</div>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <RateNumberVue :rate="4" />
                    <StarsVue :star="5" />
                    <div class="f-12 text-grey500">4.512 Ulasan</div>
                </div>
            </div>
            <div class="col-8">
                <div v-for="(item, index) in 5" :key="index" class="w-100 d-flex align-items-center justify-content-between">
                    <div class="f-12"><i class="bi bi-star-fill text-warning"></i> {{index+1}}</div>
                    <div class="w-50">
                        <div style="height: 10px;" class="w-100 progress mb-1 me-1">
                            <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example"
                                :style="{ width: 20 * (index + 1) + '%' }" aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="f-12">{{ $withComa(47422 * (index + 1)) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import RateNumberVue from './RateNumber.vue';
import StarsVue from './Stars.vue';

export default {
    data() {
        return {};
    },
    components: { RateNumberVue, StarsVue }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';
.box-rating{
    background-color: colorVariable.$grey50;
    border-radius: 1rem;
}

</style>