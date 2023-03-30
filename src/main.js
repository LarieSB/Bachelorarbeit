import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@/assets/css/style.css'
import router from './router'

import Popper from "vue3-popper";

import "./theme.css";

import '@fortawesome/fontawesome-free/js/all'
//  1.1M(gzipped: 433.2K)

createApp(App).use(plugin, defaultConfig)
            .use(createPinia())
            .component("Popper", Popper)
            .use(router)
            .mount('#app')
