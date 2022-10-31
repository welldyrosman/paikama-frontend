<template>
    <div class="floating-btn d-flex justify-content-center w-100 text-white">
        <div class="btn-floating mx-2 py-1 px-3"><i class="bi bi-map me-2"></i>Cari Lewat Peta</div>
        <div class="btn-floating mx-2 py-1 px-3"><i class="bi bi-filter me-2"></i>Tampilkan Filter</div>
    </div>
</template>
<style scoped>
.floating-btn{
    position: fixed;
    bottom: 2rem;
}
.btn-floating{
    background-color: rgba(0, 0, 0, 0.776);
    border-radius: 1rem;
    cursor: pointer;
}
</style>