<template>
    <div class="w-100 msgcloud-box" :class="[{ 'me': message.isme }]">
        <div class="f-12 text-grey400" :class="[{ 'me': message.isme }]">
            {{message.time}}
        </div>
        <div class="msgcloud" :class="[message.isme ? 'me bg-primary text-white' : 'nme']">{{ message.message }}</div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        message: {
            type: Object,
            default: {

            }
        }
    }
}
</script>
<style scoped lang="scss">
@use "@/assets/colorVariable.scss";

.msgcloud-box {

    padding: 1rem;

    &.me {
        text-align: -webkit-right;
    }

    .msgcloud {
        padding: 0.5rem;
        width: fit-content;
        max-width: 75%;

        &.nme {
            border: 1px solid colorVariable.$grey100;
            border-radius: 0.5rem;
            border-top-left-radius: 0px;
        }

        &.me {
            border-radius: 0.5rem;
            border-top-right-radius: 0px;
        }
    }
}
</style>