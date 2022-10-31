import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/base.css'
import './assets/main.scss'
import "bootstrap-icons/font/bootstrap-icons.css"


import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
const app = createApp(App)
app.component('Carousel',Carousel);
app.component('Navigation',Navigation);
app.component('Pagination',Pagination);
app.component('Slide',Slide);
app.use(createPinia())
app.use(router)

app.mount('#app')
