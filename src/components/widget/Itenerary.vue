<template>
    <div class="row">
        <div class="col-md-12">
            <p class="f-med">{{ itenerary.title }}</p>
            <ul class="timeline f-12">
                <li v-for="(item, index) in itenerary.rundowns" :key="index">
                    <div class="f-sbold">{{ item.title }}</div>
                    <p>{{ item.content }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        itenerary: {
            type: Object,
            default: {
                rundowns: []
            }
        }
    },

}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

ul.timeline {
    list-style-type: none;
    position: relative;
    padding-left: 1.5rem;
    &:before {
        content: ' ';
        background: colorVariable.$secondary;
        display: inline-block;
        position: absolute;
        left: 10px;
        width: 2px;
        height: 100%;
        z-index: 400;
    }

    &>li {
        margin-left: 0px;
        padding-left: 20px;
        p{
            color: colorVariable.$grey500;
        }
        &:before {
            content: ' ';
            background: colorVariable.$secondary;
            display: inline-block;
            position: absolute;
            border-radius: 50%;
            border: 6px solid colorVariable.$grey50;
            left: 2px;
            width: 20px;
            height: 20px;
            z-index: 400;
        }
    }
}
</style>