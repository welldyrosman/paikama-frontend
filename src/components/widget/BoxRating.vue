<template>
    <div class="box-rating py-2 px-3">
        <div class="d-flex justify-content-between">
            <div class="f-med mb-2">Rating</div>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="d-flex flex-column align-items-center justify-content-center">
                    <RateNumberVue :rate="transaction_avg_rating" />
                    <StarsVue :star="5" />
                    <div class="f-12 text-grey500">{{ comments_count }} Ulasan</div>
                </div>
            </div>
            <div class="col-8">
                <div v-for="(item, index) in myrates" rate :key="index"
                    class="w-100 d-flex align-items-center justify-content-between">
                    <div class="f-12"><i class="bi bi-star-fill text-warning"></i> {{ index + 1 }}</div>
                    <div class="w-50">
                        <div style="height: 10px;" class="w-100 progress mb-1 me-1">
                            <div class="progress-bar bg-warning" role="progressbar" aria-label="Basic example"
                                :style="{ width: `${20 + item.percentage}%` }" aria-valuenow="25" aria-valuemin="0"
                                aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                    <div class="f-12">{{ $withComa(item.total + "") }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import type RatingCount from '@/types/RatingCount';
import RateNumberVue from './RateNumber.vue';
import StarsVue from './Stars.vue';
interface RateObj {
    total: Number,
    percentage: number
}
export default {
    props: {
        ratings: {
            default: [],
            type: Array<RatingCount>
        },
        comments_count: {
            default: 0,
            type: Number
        },
        transaction_avg_rating: {
            default: 0,
            type: Number
        }
    },
    watch: {
        ratings(nval) {
            console.log('this.rating watch', nval)
        }
    },
    computed: {
        myrates(): Array<RateObj> {
            var arr = [] as Array<RateObj>;
            for (var i = 0; i < 5; i++) {
                var obj = {
                            total: 0,
                            percentage: 0
                        } as RateObj;
                for (var j = 0; j < this.ratings.length; j++) {
                   
                    if (i + 1 == this.ratings[j].rating) {
                       
                        obj.total = this.ratings[j].rating;
                        obj.percentage = Math.round((this.ratings[j].rating / this.comments_count) * 100);
                        
                    }
                   
                }
                arr.push(obj);
            }
            console.log("rating data", arr);
            return arr
        }
    },
    data() {
        return {
            rate: 0
        };
    },
    components: { RateNumberVue, StarsVue }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.box-rating {
    background-color: colorVariable.$grey50;
    border-radius: 1rem;
}
</style>