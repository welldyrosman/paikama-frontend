<template>
    <main>

        <div class="d-flex mb-3 mt-5">
            <router-link to="/" class="btn btn-outline-grey600 me-3"><i class="bi bi-arrow-left text-primary"></i>
            </router-link>
            <img src="@/assets/image/website/logo.png" width="200" />
        </div>
        <div class="login-box p-3">
            <div class="f-24 f-sbold">Masuk</div>
            <div class="text-grey500">Masuk dengan email terdaftar atau dengan google.</div>

            <button class="btn btn-bd-primary form-control mt-3">
                <img src="@/assets/image/icons/google.png" class="me-2" height="14px" />
                Lanjutkan dengan Google</button>
            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Atau</p>
            </div>
            <form class="mt-3">
                <div class="form-outline mb-3">
                    <input type="email" id="form3Example3" class="form-control"
                        placeholder="Enter a valid email address" />
                </div>
                <!-- Password input -->
                <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" class="form-control " placeholder="Enter password" />

                </div>

                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Ingat Saya
                        </label>
                    </div>
                    <router-link to="/forgot" class="text-primary text-decoration-none">Lupa Kata Sandi</router-link>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" @click="login()" class="btn btn-primary form-control">Masuk</button>
                    <p class="small mt-2 pt-1 mb-0">Belum punya akun PAIKAMA??<router-link to="/register"
                            class="text-primary text-decoration-none">Daftar</router-link>
                    </p>
                </div>

            </form>
        </div>

    </main>
</template>
<script lang="ts">
import { useMemberStore } from '@/stores/members'
export default {
    setup() {
        const stores = useMemberStore();
        return{
            stores
        }
    },
    methods: {
        login(){
            this.stores.$patch({
                user:{
                    name:"Welldy Trial"
                },
                isLogin:true,
            });
            this.$router.push("/");
        }
    }
}
</script>
