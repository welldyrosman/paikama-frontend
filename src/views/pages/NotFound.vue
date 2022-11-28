<template>
    <main>
        <div class="container">
            <div class="h-100 d-flex align-items-center position-absolute">
                <img width=200 src="@/assets/image/404-01.png"/>
                <div>
                    <h1 style="font-size:100px ;" class="f-bold">404</h1>
                    <h1>Page Not Found</h1>
                    <h3 class="text-grey600">The page you’re looking for doesn’t exist.</h3>
                    <p><RouterLink to="/">www.paikama.com</RouterLink></p>
                    <button @click="$router.push('/')" class="btn btn-bd-primary">Back Home</button>
                </div>
            </div>
        </div>
    </main>
</template>