<template>
    <main>
        <div class="container margin-navbar text-center">
            <br />
            <div class="container">
                <div class="f-30 f-sbold ">Lupa Kata Sandi</div>
                <div class="text-grey600 mb-5">Jangan khawatir, kami akan mengirimkan instruksi reset</div>
                <div class="row">
                    <div class="col"></div>

                    <div class="col-4">
                        <input class="form-control my-2" placeholder="Email" type="email" />
                        <button @click="$router.push('/forgot/sended')" class="btn btn-primary form-control my-3">Kirim Instruksi</button>

                    </div>
                    <div class="col"></div>
                </div>
                <div style="cursor: pointer;" @click="$router.push('/login')" class="d-flex justify-content-center ">
                    <i class="bi bi-arrow-left f-sbold me-2"></i> Kembali Ke Halaman Login
                </div>
            </div>

        </div>
    </main>
</template>