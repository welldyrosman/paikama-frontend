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
            <div v-if="error" class="alert alert-danger alert-dismissible mt-2" role="alert">
                <div> Login Failed Please Check Your Mail adn Password</div>
                <button type="button" class="btn-close" @click="error = false"></button>
            </div>
            <button class="btn btn-bd-primary form-control mt-2">
                <img src="@/assets/image/icons/google.png" :width="14" :height="14" class="me-2" />
                Lanjutkan dengan Google</button>
            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Atau</p>
            </div>
            <form class="mt-3">
                <div class="form-outline mb-3">
                    <input type="email" v-model="form.email" id="form3Example3" class="form-control"
                        placeholder="Enter a valid email address" />
                </div>
                <!-- Password input -->
                <div class="form-outline mb-3">
                    <input type="password" v-model="form.password" id="form3Example4" class="form-control "
                        placeholder="Enter password" />

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
                    <button type="button" @click="login()" :disabled="(loading||!isComplete)" class="btn btn-primary form-control">
                        <span v-if="loading" class="spinner-border spinner-border-sm" role="status"
                            aria-hidden="true"></span>
                        <span> {{ loading ? 'Loading...' : 'Masuk' }}</span>
                    </button>
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
import authService from '@/services/auth-service';
export default {
    setup() {
        const stores = useMemberStore();
        return {
            stores
        }
    },
    data() {
        return {
            error: false,
            loading: false,
            form: {
                email: "",
                password: ""
            }
        }
    },
    computed:{
        isComplete():boolean{
            return this.form.password!=""&&this.form.email!=""
        }
    },
    methods: {
        login() {
            this.loading = true;
            authService.login(this.form).then(ret => {
                var data=ret.data.data;
                this.stores.user.name=data.name
                this.stores.token=data.token;
                this.stores.isLogin=true;
                this.loading = false;
                this.$router.push("/");
            }).catch(err => {
                this.error = true
                console.log("error", err.response.data);
                this.loading = false;
            });
        }
    }
}
</script>
