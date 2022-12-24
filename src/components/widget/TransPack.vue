<template>
    <main>
        <div class="detail-title f-sbold f-18 mb-2"> {{ trip.title }}</div>
        <hr class="hr-devider"/>
        <div class="d-flex">
            <img class="img-transpack me-2" :src="$getFirstImage(trip?.images)" />
            <div class="detail-title f-sbold f-16 mb-2"> {{ package['title'] }}</div>
        </div>
        <div class="item-detail"><i class="bi bi-calendar3"></i><span> {{ date }}</span>
        </div>
        <div class="item-detail d-flex" v-for="(item, index) in option_selected">
            <i class="bi bi-option"></i>
            <div>
                <div class="f-med"> {{ item.title }}</div>
                <div>{{ item.items.title }}</div>
            </div>
        </div>

    </main>
</template>
<script lang="ts">
import IconBase from '@/components/IconBase.vue';
import IconPlane from '@/components/icons/IconPlane.vue';
import type SelectedOptions from '@/types/SelectedOption';
import type SubPackage from '@/types/SubPackage';
import type Package from '@/types/Package';
import type OptionsResponse from '@/types/Response/TransactionVa';

export default {
    components: { IconBase, IconPlane },
    watch:{
        trip(nval,oval){
            console.log('trip watch',nval)
        }
    },
    mounted(){
    },
    props: {
        option_selected: {
            type: Array<SelectedOptions>,
            default: []
        },
        trip: {
            type: Object as () => Package,
            default: {
                title: "Belum Memilih Trip"
            }
        },
        package: {
            type: Object as () => SubPackage,
            default: {}
        },
        date: {
            type: Date,
            default: null
        },

    }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.img-transpack {
    width: 30%;
    height: 50px;
    border-radius: 0.5rem;
}

.item-detail {
    i {
        margin-right: 1rem;
    }

    span {
        color: colorVariable.$grey600;
    }

    margin-bottom: 0.5rem;
}
</style>