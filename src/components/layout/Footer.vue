<template>
    <div class=" w-100 footer text-muted">
        <Transition name="slide-fade">
            <div v-if="exspand" class="other-info">
                <div class="container">
                    <div class="row my-5">
                        <div v-for="(item, index) in footerMenus" :key="index" class="d-flex flex-column col-md-3">
                            <div style="color: #98A2B3;" class="fw-bolder mt-5 f-sbold">{{ item.head }}</div>
                            <a href="" class="footmenu text-grey500 f-med" v-for="(menu, index) in item.menus"
                                :key="index">{{ menu.title }}</a>
                        </div>
                        <div class="d-flex flex-column col-md-3">
                            <div class="f-20 f-med mt-5 text-grey900">Join our newsletter</div>
                            <div>We’ll send you a nice letter once per week. No spam.</div>
                            <form class="row g-2 mt-3">
                                <div class="col-auto">
                                    <label for="inputPassword2" class="visually-hidden">Password</label>
                                    <input type="email" class="form-control form-control-sm" id="inputPassword2"
                                        placeholder="welldy#gamil.com">
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-sm btn-primary mb-3">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
        <div style="border-top:1px solid #D0D5DD ;" class="py-3 f-med">
            <div class="container d-flex justify-content-between">
                <div>
                    <i class="bi bi-c-circle" style="font-size: 0.6rem;"></i> Paikama 2022
                    <i class="bi bi-dot"></i> Privasi
                    <i class="bi bi-dot"></i> Ketentuan
                </div>
                <div class="">
                    <span style="cursor: pointer"><i class="bi bi-globe2"></i> Bahasa Indonesia</span>
                    <i class="bi bi-dot"></i><span style="cursor: pointer">$ USD</span>
                    <i class="bi bi-dot"></i><span style="cursor: pointer" @click="exspand = !exspand">Infomasi Lainnya
                        <i class="bi" :class="!exspand ? 'bi-chevron-down' : 'bi-chevron-up'"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            exspand: false,
            footerMenus: [
                {
                    head: "Tentang PAIKAMA",
                    menus: [
                        {
                            title: "Tentang Kami",
                            path: ""
                        }, {
                            title: "PAIKAMA Blog",
                            path: ""
                        }, {
                            title: "Karier",
                            path: ""
                        }
                    ]
                }, {
                    head: "Kerja Sama",
                    menus: [
                        {
                            title: "Pendaftaran Merchant",
                            path: ""
                        }, {
                            title: "Partner Login",
                            path: ""
                        }, {
                            title: "Kerjasama Affiliate",
                            path: ""
                        }, {
                            title: "Program Influencer",
                            path: ""
                        }, {
                            title: "Agen Marketplace",
                            path: ""
                        }, {
                            title: "Distribusi & Pertanyaan Pemasaran",
                            path: ""
                        },
                    ]
                }, {
                    head: "Ketentuan Penggunaan",
                    menus: [
                        {
                            title: "Syarat & Ketentuan",
                            path: ""
                        }, {
                            title: "Kebijakan Privasi",
                            path: ""
                        }, {
                            title: "Kebijakan Cookie",
                            path: ""
                        }, {
                            title: "Program Bug Bounty",
                            path: ""
                        }
                    ]
                }
            ]
        }
    },
}
</script>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';

.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(.48, .47, .86, .86);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.footmenu {
    text-decoration: none;
    margin-top: 0.5rem;
}

.footer {
    background-color: colorVariable.$grey100;
}
</style>