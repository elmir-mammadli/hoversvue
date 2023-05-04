import { createApp } from 'vue'
import App from './App.vue'
import i18n from '../src/i18n'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDJYYWs2qTEclHtklEcNYJytBQNEuiYahA",
  authDomain: "hovers-group-llc.firebaseapp.com",
  projectId: "hovers-group-llc",
  storageBucket: "hovers-group-llc.appspot.com",
  messagingSenderId: "277396838647",
  appId: "1:277396838647:web:87a414134b477aecb85bf2",
  measurementId: "G-251E0E5336"
})

// Initialize Firebase
const app = firebaseApp
const analytics = getAnalytics(app);
const db  = getFirestore(app);



import './assets/fonts.js'
import './assets/style.css'
import '/node_modules/flowbite/dist/flowbite.min.js'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faLocationDot, faPhone, faEnvelope, faTwitter, faFacebook, faInstagram, faLinkedin)




createApp(App)
.use(i18n)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
