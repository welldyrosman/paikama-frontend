<template>
    <v-date-picker v-model="date" color="purple" :attributes='calendar.attrs' is-expanded />
</template>
<script lang="ts">
export default {
    props:{
        date:{
            default:null,
            type:Date
        }
    }
    , watch:{
        date(o,n){
           this.$emit('update:date',o);
        }
    },
    data() {
        return {
            calendar: {
                date: new Date(),
                attrs: [
                    {
                        key: 'today',
                        highlight: {
                            color: 'purple',
                            fillMode: 'outline',
                        },
                        dates: new Date(),
                    },
                ]
            }
        }
    },
}
</script>