/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createApp } from 'vue'
import router from './router'

import Start from './components/Start.vue'
import store from './store'



createApp(Start)
    .use(store)
        .use(router)
            .mount('#app')
