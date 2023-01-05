<template>
    <div class="mybox">
        <div class="d-flex">
            <div class="list-msg">
                <div class="d-flex justify-content-between mx-3 my-3">
                    <div class="f-18 f-sbold">Pesan</div>
                    <i class="bi bi-filter f-20"></i>
                </div>
                <hr />
                <div class="msg-box">
                    <MsgItem @click="convactive = item" :class="{'active':convactive.id==item.id}"
                        v-for="(item , index) in messagesComp" :data="item" :key="index" />
                </div>
            </div>
            <div class="content-msg">
                <Travelcomp class="ms-4 my-3" v-model:data="convactive" />
                <hr />
                <div ref="contentbox" class="content-box">
                    <div class="f-12 text-grey400 text-center px-2">
                        Hati-hati penipuan! Mohon tidak bertransaksi di luar Paikama & hindari menghubungi penjual
                        selain
                        melalui fitur Chat di aplikasi Tokopedia.
                        <a class="link-primary">Baca Panduan Keamanan.</a>
                    </div>
                    <MsgCloud v-for="(item, index) in convactive.messages" v-model:message="convactive.messages[index]"
                        :key="index" />
                    <div v-if="isTyping" class="ms-3">
                        <span class="text-grey400 fst-italic">Typing</span>
                        <pulse-loader :loading="isTyping" color="#5663D9" size="0.5rem"></pulse-loader>
                    </div>
                </div>
                <hr />
                <div class="row g-2 mx-2 mb-3">
                    <div class="col-11">
                        <input type="text" v-on:keyup="keypress($event)" v-model="mytyping"
                            placeholder="tulis pesan disini" class="form-control" />
                    </div>
                    <div class="col-auto">
                        <button @click="onsubmit" class="btn btn-primary"><i class="bi bi-send-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
interface message {
    id: number,
    isme: boolean,
    message: string,
    time: string
}
interface data_travel {
    id: number,
    title: string,
    lasttime: string,
    logo: string,
    messages: Array<message>,
}
import MsgItem from '@/components/widget/MsgItem.vue';
import MsgCloud from '@/components/widget/MsgCloud.vue';
import Travelcomp from '@/components/widget/Travelcomp.vue';
import type Agency from '@/types/Agency';
export default {
    components: { MsgItem, Travelcomp, MsgCloud },

    mounted() {
        this.convactive = this.messagesComp[0] as unknown as Agency;
    },
    data() {
        return {
            convactive: {} as Agency,
            mytyping: "",
            isTyping: false,
            messagesComp: [
                {
                    id: 1,
                    title: "Travel Go!",
                    lasttime: "15:00",
                    logo: "image/website/travel/travel-logo.jpg",
                    joinYM: "",
                    messages: [
                        //                         {
                        //                             id: 1, isme: false, message: `selamat datang di Travel Go
                        // stock akan kami usahakan se-update mungkin yah mom, kami juga menjual GROSIR jika berminat bisa langsung tinggalkan pesan :)`, time: "Friday 2:20pm"
                        //                         },

                        //                         { id: 2, isme: true, message: `Bolehkan saya bertanya tentang tur ini?`, time: "Friday 2:20pm" },
                        //                         { id: 3, isme: false, message: `Ada yang bisa kami bantu kak?`, time: "Friday 2:20pm" },
                        //                         { id: 4, isme: true, message: `Jadi gini , kan aku punya uang pas pasan tapi aku mau jalan jalan ke bali bisa ga kak?`, time: "Friday 2:20pm" },
                        //                         { id: 4, isme: false, message: `Jadi Kaka ga punya uang trus kaka nanya?? kaka nanya gimanag caranya jalan jalan, join live aku ya..`, time: "Friday 2:20pm" },
                    ]
                }, {
                    id: 2,
                    title: "CV Pertama Subur",
                    lasttime: "15:30",
                    logo: "image/website/travel/travel-logo-2.jpg",
                    joinYM: "",
                    messages: []
                }, {
                    id: 3,
                    title: "Gamsahamnida Tour",
                    lasttime: "21:00",
                    logo: "image/website/travel/travel-logo-3.jpg",
                    joinYM: "",
                    messages: []
                }, {
                    id: 4,
                    title: "Jujutsu Kaisen",
                    lasttime: "07:00",
                    logo: "image/website/travel/travel-logo-4.jpg",
                    joinYM: "",
                    messages: []
                }
            ]
        }
    },
    methods: {
        keypress($event: any) {
            if ($event.keyCode == 13) {
                this.onsubmit();
            }
        },
        onsubmit() {
            this.convactive.messages.push({
                id: this.convactive.messages[this.convactive.messages.length - 1]?.id + 1,
                message: this.mytyping,
                isme: true,
                time: new Date().toDateString()
            } as message)
            const objDiv = this.$refs.contentbox as any;
            //.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
            //window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
            this.mytyping = "";
            this.isTyping = true;
            setTimeout(() => {
                this.isTyping = false;
                this.convactive.messages.push({
                    id: this.convactive.messages[this.convactive.messages.length - 1].id + 1,
                    message: "Kamu Nanya? Kamu Bertanya tanya-tanya? Join Live aku ya..",
                    isme: false,
                    time: new Date().toDateString()
                } as message)
            }, 1000)
        }
    }
}
</script>
<style scoped lang="scss">
@use "@/assets/colorVariable.scss";

.content-msg {
    width: 70%;

    .content-box {
        height: 400px;
        overflow-x: auto;
        width: 100%;
    }
}

.list-msg {
    border-right: 1px solid colorVariable.$grey300;
    width: 30%;

    .msg-box {
        height: 485px;
        overflow-x: auto;
    }
}
</style>