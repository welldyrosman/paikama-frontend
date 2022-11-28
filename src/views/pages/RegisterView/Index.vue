<template>
    <main>
        <div class="d-flex mb-3 mt-5">
            <router-link to="/login" class="btn btn-outline-grey600 me-3"><i class="bi bi-arrow-left text-primary"></i>
            </router-link>
            <img src="@/assets/image/website/logo.png" width="200" />
        </div>
        <div class="login-box p-3">
            <div class="f-24 f-sbold">Daftar</div>
            <div class="text-grey500">Daftar untuk memulai menjelajahi destinasi yang ada di seluruh Indonesia.</div>

            <button class="btn btn-bd-primary form-control mt-3">
                <img src="@/assets/image/icons/google.png" class="me-2" height="14px" />
                Lanjutkan dengan Google</button>
            <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0">Atau</p>
            </div>
            <form class="mt-3">
              
                <!-- Password input -->
                <div class="form-outline mb-3">
                    <input type="text" id="form3Example4" class="form-control " placeholder="Nama Lengkap" />

                </div>
                <div class="form-outline mb-3">
                    <input type="email" id="form3Example3" class="form-control"
                        placeholder="Enter a valid email address" />
                </div>
                <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" class="form-control " placeholder="Kata Sandi" />
                    <label class="f-12 text-grey500">Gunakan 8 karakter atau lebih dengan campuran huruf, angka & simbol.</label>
                </div>
                <div class="form-outline mb-3">
                    <input type="password" id="form3Example4" class="form-control " placeholder="Ulangi Kata Sandi" />

                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3">
                            Ingat Saya
                        </label>
                    </div>
                    <a href="#!" class="text-primary text-decoration-none">Lupa Kata Sandi</a>
                </div>

                <div class="text-center text-lg-start mt-4 pt-2">
                    <button type="button" @click="$router.push('/login')" class="btn btn-primary form-control">Daftar</button>
                    <p class="small mt-2 pt-1 mb-0">Sudah punya akun PAIKAMA??? <router-link to="/login"
                            class="text-primary text-decoration-none">Masuk</router-link>
                    </p>
                </div>

            </form>
        </div>

    </main>
</template>