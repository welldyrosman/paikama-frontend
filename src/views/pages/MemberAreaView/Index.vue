<template>
    <main>
        <div class="container margin-navbar">
            <div class="row">
                <div class="col-md-3 mt-3">
                    <div class="menu-account mybox pb-3">
                        <div class="account-header text-center">
                            <div class="account-img-holder mt-4 mb-3">
                                <img src="@/assets/image/website/user/user-1.jpg" class=" account-img rounded-circle" />
                            </div>
                            <div class="f-sbold mb-3">Welldy Rosman</div>
                            <button class="btn btn-bd-primary"> <i class="me-2 text-grey600 f-sbold bi bi-pencil"></i>
                                Edit Profil</button>
                        </div>
                        <hr class="mb-2" />
                        <ul class="px-1">
                            <li v-for="(item, index) in menus" :class="{'active':menuIdActive==item.id}" @click="selectmenu(item)" :key="index">
                                <i class="me-2 f-18 text-grey600 f-sbold bi" :class="item.icon"></i>
                                {{ item.title }}
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-md-9 mt-3">
                    <div class="mybox">
                        <RouterView/>
                    </div>
                </div>
            </div>
        </div>
        <FooterComp />
    </main>
</template>
<script lang="ts">
import FooterComp from '@/components/layout/Footer.vue';
interface Menu{
    id:number,
    title:string,
    path:string,
    icon:string
}
export default {
    components:{FooterComp},
   
    data() {
        return {
            menuIdActive:0,
            menus: [
                {
                    id: 1,
                    title: "Pesan",
                    path: "/account/messages",
                    icon: "bi-envelope"
                }, {
                    id: 2,
                    title: "Notifikasi",
                    path: "/account/notification",
                    icon: "bi-bell"
                }, {
                    id: 3,
                    title: "Pesanan",
                    path: "/account/orders",
                    icon: "bi-file-earmark-text"
                }, {
                    id: 4,
                    title: "Favorit",
                    path: "/account/favorite",
                    icon: "bi-heart"
                }, {
                    id: 5,
                    title: "Info Kontak",
                    path: "Info Kontak",
                    icon: "bi-person-lines-fill"
                }, {
                    id: 6,
                    title: "Pengaturan Akun",
                    path: "Pengaturan Akun",
                    icon: "bi-gear"
                },
            ]
        }
    },
    methods:{
        selectmenu(item:Menu){
            this.menuIdActive=item.id;
            this.$router.push(item.path);
        }
    }
}
</script>
<style lang="scss" scoped>
@use "@/assets/colorVariable.scss";


.menu-account {
    ul {
        list-style-type: none;
        margin-left: none;
        padding-left: 0px;

        li {
            cursor: pointer;
            padding: 0.8rem 0.8rem 0.8rem 2rem;
            border-radius: 0.7rem;
            &.active{
                color: colorVariable.$primary !important;
                font-weight: 900;
            }
            &.active i{
                color: colorVariable.$primary !important;
                font-weight: 900;
            }
            
            &:hover {
                background-color: colorVariable.$grey100;
            }
        }
    }
    .account-img-holder {
        padding: 0.2rem;
        color: white;
        border: 1px solid colorVariable.$grey300;
        border-radius: 100%;
        width: fit-content;
        filter: drop-shadow(0 0 0.15rem rgb(194, 194, 194));
        display: inline-block;

        .account-header {}

        .account-img {
            width: 70px;
            height: 70px !important;

        }
    }
}
</style>