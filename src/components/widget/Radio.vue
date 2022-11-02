<template>
    <label id="radio-con" :class="value == bindval ? 'active' : 'default'" class="radio-con px-4">
        <input type="radio" :name="groupname" v-on:change="changeoption" :value="value" v-model="bindval">
        <span class="checkmark"></span>
        <span class="f-med ms-4">{{ labels }}</span>
    </label>
</template>
<script lang="ts">
export default {
    props: {
        labels: {
            default: "Label",
        },
        groupname: {
            default: "radiogroup",
        },
        value: {
            default: null,
            type: Number,
            required: true
        },
        bindval: {
            default: null,
            type: Number,
            required: true
        }
    },
    emits: ['update:bindval'],
    setup(props, { emit }) {
        const changeoption = ($event) => {
            emit('update:bindval', $event.target.value*1)
        }
        return { changeoption }
    },
    methods: {
    },
    watch: {
        bindval(val, valnew) {
            console.log(val);
            console.log(valnew);
        }
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped lang="scss">
$primary: #5663D9;

.radio-con {
    display: block;
    position: relative;
    margin-bottom: 12px;
    cursor: pointer;
    border-color: #EAECF0;
    background-color: #FFFFFF;
    padding: 0.8rem;
    border-radius: 0.7rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.radio-con input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}
.radio-con.active{
    border:1.5px solid $primary !important;
    background-color: #F5F5FF;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    height: 16px;
    width: 16px;
    background-color: white;
    border: 1.5px solid #D0D5DD;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.radio-con:hover input~.checkmark {
    border-color: $primary;
}

.radio-con:hover {
    outline: 1.5px solid $primary;
}

.radio-con label {
    margin-left: 1.5rem;
}

/* When the radio button is checked, add a blue background */
.radio-con input:checked~.checkmark {
    border: 1.5px solid $primary;
}


/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-con input:checked~.checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.radio-con .checkmark:after {
    width: 9px;
    height: 9px;
    left: 2px;
    top: 2px;
    text-align: center;
    border-radius: 50%;
    background: $primary;
}
</style>