<template>
    <div class="mybox">
        <div class="account-content-title m-3">
                            <div class="f-18 f-sbold">Profil Saya</div>
                            <div class="f-12 text-grey500">Informasi ini akan digunakan untuk mengisi info selanjutnya untuk mempercepat proses pemesanan kamu. Info ini akan disimpan secara aman dan tidak akan dibagikan ke pihak manapun.</div>
                        </div>
                        <hr/>
                        <div class="row m-2">
                            <div class="col-md-6">
                                <label class="f-med">Nama Depan</label>
                                <input class="form-control" placeholder="Nama Depan Anda"/>
                                <label class="f-med">Nama Depan (sesuai Paspor/Dokumen Perjalanan)</label>
                                <input class="form-control" placeholder="Nama Depan Anda"/>
                                <label class="f-med">Negara/Daerah asal Dokumen Perjalanan/Paspor</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                                <label class="f-med">Nomor Handphone</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                            </div>
                            <div class="col-md-6">
                                <label class="f-med">Nama Belakang</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                                <label class="f-med">Nama Belakang (sesuai Paspor/Dokumen Perjalanan)</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                                <label class="f-med">Gelar</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                                <label class="f-med">Email</label>
                                <input class="form-control" placeholder="Nama Depan"/>
                            </div>
                        </div>
                        <hr/>
                        <div class="d-flex justify-content-end m-3">
                            <button class="btn btn-primary">Simpan</button>
                        </div>
    </div>
</template>
<style lang="scss" scoped>
@use "@/assets/colorVariable.scss";
.mybox{
    label{
        margin-top: 1rem;
    }
}

.menu-account {
    ul {
        list-style-type: none;
        margin-left: none;
        padding-left: 0px;

        li {
            cursor: pointer;
            padding: 0.8rem 0.8rem 0.8rem 2rem;
            border-radius: 0.7rem;
            &.active{
                color: colorVariable.$primary !important;
                font-weight: 900;
            }
            &.active i{
                color: colorVariable.$primary !important;
                font-weight: 900;
            }
            
            &:hover {
                background-color: colorVariable.$grey100;
            }
        }
    }
    .account-img-holder {
        padding: 0.2rem;
        color: white;
        border: 1px solid colorVariable.$grey300;
        border-radius: 100%;
        width: fit-content;
        filter: drop-shadow(0 0 0.15rem rgb(194, 194, 194));
        display: inline-block;

        .account-header {}

        .account-img {
            width: 70px;
            height: 70px !important;

        }
    }
}
</style>