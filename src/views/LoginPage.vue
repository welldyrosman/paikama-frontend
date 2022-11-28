<script setup lang="ts">
import { useMemberStore } from '@/stores/members'
const stores = useMemberStore();
</script>
<template>
  <section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <RouterView />
        </div>
        <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-center align-items-center">
          <img src="@/assets/image/website/Illustration.png" class="img-fluid img-login" alt="Sample image">
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';



.img-login {
  max-width: 300px !important;
}
</style>