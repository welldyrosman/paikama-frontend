import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

import './assets/base.css'
import './assets/main.scss'
import 'bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css"
import 'v-calendar/dist/style.css';
import VCalendar from 'v-calendar';
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import globalFunction from './plugins/globalFunction';
import VueGoogleMaps from '@fawmi/vue-google-maps';

const pinia =createPinia();
pinia.use(piniaPluginPersistedstate)
// pinia.use((context)=>{
//     const storeId= context.store.$id;
//     const serializer={
//         serialize:JSON.stringify,
//         deserialize:JSON.parse
//     }
//     console.log("storeid",storeId);
//     const fromStorage=serializer.deserialize(window.localStorage.getItem(storeId)!);
//     if(fromStorage){
//         context.store.$patch(fromStorage)
//     }
//     context.store.$subscribe((mutation,state)=>{
//         console.log("mutation",mutation);
//         window.localStorage.setItem(storeId,serializer.serialize(state));
//     })
// })
const app = createApp(App)
app.component('Carousel',Carousel);
app.component('PulseLoader',PulseLoader);
app.component('Navigation',Navigation);
app.component('Pagination',Pagination);
app.component('Slide',Slide);
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
