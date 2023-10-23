import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import App from '@/App.vue'
import '@/assets/app.css'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import 'vue-final-modal/style.css'

axios.defaults.baseURL = 'https://api.prayerapp.me'

const vfm = createVfm()
createApp(App)
    .use(router)
    .use(store)
    .use(vfm)
    .mount('#app')
