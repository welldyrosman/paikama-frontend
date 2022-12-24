<template>
    <div class="mybox p-2 mb-2">
        <div class="row">
            <div class="col-md-3">
                <img src="@/assets/image/website/city/bali.jpg" class="img-fluid rounded" />
            </div>
            <div class="col-md-9">
                <div class="d-flex justify-content-between">
                    <div class="f-16 f-sbold text-grey600">No Order : 123423452</div>
                    <div class="f-12 text-align-center badge bg-success">Sudah Dibayar</div>
                </div>
                <div class="f-16 f-sbold">Trip Kepulauan Nusa Penida By Travel GO!</div>
                <hr class="hr-devider" />
                <div class="f-sbold">Paket - Nusa Penida Barat</div>
                <div class="d-flex flex-wrap">
                    <div v-for="(item, index) in 6" :key="index" class="me-2 mt-2 bg-grey100 rounded py-1 px-2">
                        <span class="text-grey600"><i class="bi bi-calendar3"></i> 31 Desember 2021</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-end mt-3">
            <div class="dropdown ms-3">
                <button class="btn btn-bd-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i class="bi bi-three-dots"></i>
                </button>
                <ul class="dropdown-menu">
                    <li>
                        <div class="pointer dropdown-item">
                            Hubungi Pemilik
                        </div>
                    </li>
                    <li>
                        <div class="pointer dropdown-item">
                           Bantuan
                        </div>
                    </li>
                </ul>
            </div>
            <button class="ms-2 btn btn-primary">Lihat Detail Voucher</button>
        </div>
    </div>
</template>