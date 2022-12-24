<template>
    <v-date-picker ref="calendar" @dayfocusin='dayClicked' :available-dates='price_list' v-model="date" color="purple" :attributes='attributes' is-expanded>

    </v-date-picker>
</template>
<script lang="ts">
import type Price from '@/types/Price';

export default {
    props: {
        prices:{
            type:Object,
            default:{
                basePrice:0,
                befBasePrice:0 ,
            }
        },
        date: {
            default: null,
            type: Date||null
        },
        price_list: {
            type: Array<Price>,
            default: []
        },
    },
    emits: ['update:prices','update:date'],
    mounted(){
        //console.log("calendar",this.$refs.calendar)
    },
    methods: {
        dayClicked(day) {
            var obj={...this.prices};
            obj.basePrice=day.attributes[0].customData.price
            obj.befBasePrice=day.attributes[0].customData.price_before
            this.$emit('update:prices',obj);
        },
    },
    watch: {
        date: {
            handler(n, o) {
                this.$emit('update:date', n);
            },
            deep: true
        },
        'prices.basePrice': {
            handler(n, o) {
               //console.log("price watch",n)
            },
            deep: true
        },
    },
    computed: {
        attributes() {
            return [
                ...this.price_list.map(todo => ({
                    dates: todo,
                    dot: {
                        color: "red",
                    },
                    popover: {
                        label: this.$toCurrency(todo.price),
                    },
                    customData: todo,
                })),
            ];
        },
    },
    data() {
        return {

        }
    },
}
</script>