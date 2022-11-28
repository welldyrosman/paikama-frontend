<template>
    <div class="btn-addopt d-flex align-items-center justify-content-center">
        <i class="bi bi-plus-circle-fill text-primary me-2 f-20"></i>
        <div>Tambah Produk Lainnya</div>
    </div>
</template>
<style scoped lang="scss">
@use '@/assets/colorVariable.scss';
.btn-addopt{
    border: 1.5px dashed colorVariable.$primary;
    border-radius: 1rem;
    min-height: 100px;
    cursor: pointer;
    &:hover{
        background-color: rgba(colorVariable.$primary,0.1);
    }
}
</style>