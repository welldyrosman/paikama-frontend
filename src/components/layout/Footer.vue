<template>
    <div class=" w-100 footer text-muted">
        <Transition name="slide-fade">
            <div v-if="exspand" class="other-info">
                <div class="container">
                    <div class="row my-5">
                        <div v-for="(item, index) in footerMenus" :key="index" class="d-flex flex-column col-sm-2">
                            <div style="color: #98A2B3;" class="fw-bolder mt-5 f-sbold">{{item.head}}</div>
                            <a href="" class="footmenu  f-med" v-for="(menu, index) in item.menus" :key="index">{{menu.title}}</a>
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
                    head: "Product",
                    menus: [
                        {
                            title: "Overview",
                            path: ""
                        }, {
                            title: "Features",
                            path: ""
                        }, {
                            title: "Solutions",
                            path: ""
                        }, {
                            title: "Tutorials",
                            path: ""
                        }, {
                            title: "Pricing",
                            path: ""
                        }, {
                            title: "Release",
                            path: ""
                        },
                    ]
                }, {
                    head: "Company",
                    menus: [
                        {
                            title: "About Us",
                            path: ""
                        }, {
                            title: "Careers",
                            path: ""
                        }, {
                            title: "Pers",
                            path: ""
                        }, {
                            title: "News",
                            path: ""
                        }, {
                            title: "Media Kit",
                            path: ""
                        }, {
                            title: "Contact",
                            path: ""
                        },
                    ]
                }, {
                    head: "Resources",
                    menus: [
                        {
                            title: "Blog",
                            path: ""
                        }, {
                            title: "Newsletter",
                            path: ""
                        }, {
                            title: "Events",
                            path: ""
                        }, {
                            title: "Help Centre",
                            path: ""
                        }, {
                            title: "Tutorials",
                            path: ""
                        }, {
                            title: "Support",
                            path: ""
                        },
                    ]
                }, {
                    head: "Use Cases",
                    menus: [
                        {
                            title: "Startups",
                            path: ""
                        }, {
                            title: "Enterprise",
                            path: ""
                        }, {
                            title: "Goverment",
                            path: ""
                        }, {
                            title: "Saas",
                            path: ""
                        }, {
                            title: "Marketplace",
                            path: ""
                        }, {
                            title: "Ecommerce",
                            path: ""
                        },
                    ]
                }, {
                    head: "Social",
                    menus: [
                        {
                            title: "Twitter",
                            path: ""
                        }, {
                            title: "Linkedin",
                            path: ""
                        }, {
                            title: "Dribble",
                            path: ""
                        }, {
                            title: "Facebook",
                            path: ""
                        }, {
                            title: "Github",
                            path: ""
                        }, {
                            title: "Angelist",
                            path: ""
                        },
                    ]
                }, {
                    head: "Legal",
                    menus: [
                        {
                            title: "Term",
                            path: ""
                        }, {
                            title: "Privacy",
                            path: ""
                        }, {
                            title: "Cookies",
                            path: ""
                        }, {
                            title: "Licence",
                            path: ""
                        }, {
                            title: "Setting",
                            path: ""
                        }, {
                            title: "Contact",
                            path: ""
                        },
                    ]
                }
            ]
        }
    },
}
</script>
<style scoped>

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
    color: #667085;
    margin-top: 0.5rem;
}

.footer {
    background-color: #F2F4F7;
}

.bigfooter {}
</style>