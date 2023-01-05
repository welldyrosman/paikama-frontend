import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import { Skeletor } from 'vue-skeletor';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import VCalendar from 'v-calendar';
import globalFunction from './plugins/globalFunction';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import Loading from 'vue3-loading-overlay';



import './assets/base.css'
import './assets/main.scss'
import 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'v-calendar/dist/style.css';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'vue3-carousel/dist/carousel.css'
import 'vue-skeletor/dist/vue-skeletor.css';
import 'animate.css';

const pinia =createPinia();
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)


app.component('Carousel',Carousel);
app.component('PulseLoader',PulseLoader);
app.component('Navigation',Navigation);
app.component('Pagination',Pagination);
app.component('Slide',Slide);
app.component('Loading',Loading);
app.component(Skeletor.name, Skeletor);

app.use(VCalendar, {})
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyByxe8k6sRQrN-u6zzEhBo-OAkzA4ebz3E',
    }
})
app.use(pinia)
app.use(router);
app.use(globalFunction);


app.mount('#app')
