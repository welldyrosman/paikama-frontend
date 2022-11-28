<template>
    <main>
        <div class="container margin-navbar text-center">
            <br />
            <div class="container">
                <div class="f-30 f-sbold ">Cek Email Kamu</div>
                <div class="text-grey600 ">Kami mengirim tautan pengaturan ulang kata sandi ke</div>
                <div class="text-grey600 f-sbold mb-3">karinnovilda@gmail.com</div>
                <div class="f-30 f-bold">{{ count }}</div>
                <div class="text-grey400">Detik</div>
                <div class="mb-5">Tidak menerima email?
                    <span @click="onResend" class="text-primary f-sbold link" :class="{ 'disabled-link': !resend }">
                        Kirim Ulang</span>
                </div>
                <div style="cursor: pointer;" @click="$router.push('/login')" class="d-flex justify-content-center ">
                    <i class="bi bi-arrow-left f-sbold me-2"></i> Kembali Ke Halaman Login
                </div>
            </div>

        </div>
    </main>
</template>
<script lang="ts">
export default {
    data() {
        return {
            count: 30,
            resend: false
        }
    },
    methods: {
        onResend() {
            if (this.resend) {
                this.resend = false;
                this.count = 30;
            }
        }
    },
    mounted() {
        setInterval(() => {
            if (this.count > 0) {
                this.count--
            } else {
                this.resend = true
            }
        }, 1000);
    }
}
</script>