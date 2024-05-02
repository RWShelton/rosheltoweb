import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from '@/plugins/router.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
