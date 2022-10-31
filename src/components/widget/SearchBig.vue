<template>
    <div class="col-md-6">
        <div class="input-group mb-3">
            <span class="input-group-text group-label ps-3 text-secondary"><i class="bi bi-search"></i></span>

            <input type="text" class="form-control searchinput p-2" placeholder="Wisata pulau Bali" />
        </div>
    </div>

</template>
<style scoped>
.group-label {
    border-radius: 10rem 0 0 10rem !important;
    background-color: white;
    border-right: none;
}

.searchinput {
    border-radius: 0 10rem 10rem 0 !important;
    border-left: none;
}

.form-control:focus {
    border-color: none;
    box-shadow: none;
}
</style>