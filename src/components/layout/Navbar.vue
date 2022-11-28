<template>
    <main>
    <nav style="border-bottom:1px solid #D0D5DD ;" class="navbar navbar-expand-lg fixed-top bg-white">
        <div class="container">
            <RouterLink to="/" class="navbar-brand" href="#">
                <img src="@/assets/image/website/logo.png" class="" alt="Bootstrap" height="40">
            </RouterLink>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <SearchBar class="ms-3 w-75"/>
            </div>
            
            <ul class="navbar-nav">
                <li  v-if="!stores.isLogin" class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle login-dd p-1 pe-2" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-person-circle me-3 ms-1"></i>
                        <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end mydropdown">
                        <li><router-link to="login" class="dropdown-item" >Masuk</router-link></li>
                        <li><router-link to="/register" class="dropdown-item" href="#">Daftar</router-link></li>
                    </ul>
                </li>
                <li v-else  class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle login-dd p-1 pe-2" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-person-circle me-2 ms-1"></i>
                        {{stores.user.name}}
                        <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><router-link to="/account" class="dropdown-item" >Akun Saya</router-link></li>
                        <li><router-link to="login" class="dropdown-item" >Pesanan Saya</router-link></li>
                        <li><div @click="logout()" class="dropdown-item" href="#">Logout</div></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    
    </main>
</template>
<script lang="ts">
import { useMemberStore } from '@/stores/members'
import SearchBar from './SearchBar.vue';
export default{
    setup() {
        const stores = useMemberStore();
        return {
            stores
        };
    },
    methods: {
        logout() {
            this.stores.$reset();
            this.$router.push("/login");
        }
    },
    data() {
        return {};
    },
    components: { SearchBar }
}
</script>
<style lang="scss" scoped>
.mydropdown{
    position: absolute !important;
}

.login-dd {
    border: 1px solid grey;
    border-radius: 2rem;
}
.dropdown-toggle::after {
    display: none;
}
</style>