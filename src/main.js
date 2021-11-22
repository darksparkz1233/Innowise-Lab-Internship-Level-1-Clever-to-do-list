/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createApp } from 'vue'
import router from './router'

import Auth from './Auth.vue'
import Main from './components/Main.vue'
import Start from './components/Start.vue'

// createApp(Auth).use(router).mount('#app')
createApp(Start).use(router).mount('#app')
