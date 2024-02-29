import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from '@/App.vue'
import '@/assets/app.css'
import router from '@/router'
import axios from 'axios'
import 'vue-final-modal/style.css'
import '@/assets/prayer.css'
import PrimeVue from 'primevue/config'
import Lara from '@/lara';
import {createPinia} from "pinia";

axios.defaults.baseURL = 'https://api.prayerapp.me'

const vfm = createVfm()
const pinia = createPinia()

createApp(App)
    .use(router)
    .use(vfm)
    .use(pinia)
    .use(PrimeVue, {
        unstyled: true,
        pt: Lara
    })
    .mount('#app')

