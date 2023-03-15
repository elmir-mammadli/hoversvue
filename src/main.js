import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../src/i18n'


import './assets/fonts.js'
import './assets/style.css'
import '/node_modules/flowbite/dist/flowbite.min.js'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)




createApp(App)
.use(i18n)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
