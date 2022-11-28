<template>
    <div class="mysearch-bar">
        <div class="d-flex align-items-center justify-content-center">
            <div class="form-floating ">
                <input type="text" class="form-select" id="floatingInput" placeholder="Cari lokasi">
                <label for="floatingInput" class="f-sbold">Lokasi</label>
            </div>
            <div class="form-floating ">
                <input type="date" class="form-select" id="floatingInput" placeholder="Pilih Tanggal">
                <label for="floatingInput" class="f-sbold">Tanggal</label>
            </div>
            <div class="form-floating">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>Pilih Kategori</option>
                    <option value="1">Tour Travel</option>
                    <option value="2">Event Organizer</option>
                    <option value="3">Wedding Organizer</option>
                </select>
                <label for="floatingSelect" class="f-sbold">Kategori</label>
            </div>
            <button class="btn btn-search btn-primary ms-3"><i class="bi bi-xs bi-search me-2"></i>Cari</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '@/assets/colorVariable.scss';

.mysearch-bar {
    background-color: colorVariable.$grey100;
    border: 1px solid colorVariable.$grey300;
    border-radius: 2rem;
    overflow: hidden;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;

    .btn-search {
        padding: 0.2rem 0.7rem;
        border-radius: 1rem;
        height: max-content;
        display: flex;
    }

    .form-floating {
        .form-select {
            &:focus {
                box-shadow: none;
               
            }

            font-size: 0.7rem !important;
        }

        input.form-select {
            background-image: none;
        }

        label {
            opacity: 1 !important;
            color: colorVariable.$grey900 !important;
        }
    }


    input,
    select {
        background-color: transparent;
        border: none;
    }

}
</style>