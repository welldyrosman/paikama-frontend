<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="@/assets/image/website/logo.png" class="" alt="Bootstrap" height="40">
            </a>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">


            </div>
            <ul class="navbar-nav">
                <li class="nav-item dropdown me-2">
                    <a class="nav-link dropdown-toggle login-dd p-1 pe-2" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i class="bi bi-person-circle me-3 ms-1"></i>
                        <i class="bi bi-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#">Masuk</a></li>
                        <li><a class="dropdown-item" href="#">Daftar</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>
</template>
<style scoped>
.login-dd {
    border: 1px solid grey;
    border-radius: 2rem;
}
.dropdown-toggle::after {
    display: none;
}
</style>