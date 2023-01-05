<template>
    <div class="card-compare">
        <img :src="$getFirstImage(package.images)" class="img-fluid card-img-top" />
        <div @click="delCompare(package.id)" class="btn btn-sm btn-bd-primary btn-del-compare text-danger">
            <i class="bi bi-trash"></i>
            Hapus
        </div>
        <div class="p-3">
            <div class="f-med">{{ package?.title }} - By {{ package.agency.name }}</div>
            <div class="mt-3 text-grey400">{{ package.city.title }}-{{ package.country.title }}</div>
            <Travelcomp class="mt-3" :data="package.agency" />
        </div>
        <hr />
        <div class="p-3">
            <BoxRating :ratings="package.ratings" :transaction_avg_rating="Math.round(package.transaction_avg_rating)"
                :comments_count="package.comments_count" />
            <TranscationBar v-model:package_active="cartStore.package_active" v-model:package="package_selected"
                v-model:response="package" v-model:price_list="price_list"
                v-model:option_selected="cartStore.option_selected" :isCompare="true" :inlabel="true" />
        </div>
    </div>
</template>
<script lang="ts">
import TranscationBar from '../layout/TranscationBar.vue';
import BoxRating from './BoxRating.vue';
import Travelcomp from './Travelcomp.vue';
import type Package from '@/types/Package';
import { useCompareStore } from '@/stores/compare';
import type Price from '@/types/Price';
import type TripFacility from '@/types/TripFacility';
import type SubPackage from '@/types/SubPackage';
import type { CartData } from '@/stores/cart';
export default {
    setup(props) {
        const store = useCompareStore();
        let cartStore = {} as CartData;
        for (var i = 0; i < store.compare_cart.length; i++) {
            if (props.package?.id == store.compare_cart[i].trip_active) {
                cartStore = store.compare_cart[i]
            }
        }
        return { store, cartStore }
    },
    components: { Travelcomp, BoxRating, TranscationBar },
    props: {
        package: {
            default: {},
            type: Object as () => Package
        }
    },
    computed: {
        price_list(): Array<Price> {
            this.package_selected?.prices.forEach(price => {
                price.start = new Date(price.trip_date_start),
                    price.end = new Date(price.trip_date_end)
            });
            return this.package_selected?.prices;
        },
        includes(): Array<TripFacility> {
            return this.package_selected?.includes;
        },
        excludes(): Array<TripFacility> {
            return this.package_selected?.excludes;
        },
        // itineraries(): Array<ItineraryType> {
        //     return this.package_selected?.itineraries
        // },

        package_selected(): SubPackage {
            const sub = this.package.packages?.find(subpack => subpack.id == this.cartStore.package_active);
            return sub as SubPackage;
        },
    },
    watch: {
        package_selected(nval, oldval) {
            this.cartStore.option_selected = {};
            nval.options.forEach(opt => {
                this.cartStore.option_selected[opt.id] = opt?.items[0]?.id;
                this.cartStore.option_selected[opt.id + "_qty"] = 1 as any;
            });
        },
    },
    methods: {
        delCompare(id: number) {
            var i = 0
            this.store.comp_data.forEach(element => {
                if (element.id == id) {
                    this.store.comp_data.splice(i, 1)
                    this.store.compare_cart.splice(i, 1)
                }
                i++;
            });
        }
    },
    beforeCreate() {
        const sub = this.package.packages?.find(subpack => subpack.id == this.cartStore.package_active) as SubPackage;
        this.cartStore.option_selected = {};
        sub.options.forEach(opt => {
            this.cartStore.option_selected[opt.id] = opt?.items[0]?.id as any;
            this.cartStore.option_selected[opt.id + "_qty"] = 1 as any;
        });
    }
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.btn-del-compare {
    position: absolute;
    right: 1rem;
    top: 1rem;
}

.card-compare {
    border: 1.5px solid colorVariable.$grey100;
    border-radius: 1rem;
    position: relative;

    img {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
}
</style>