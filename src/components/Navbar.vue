<template>
  <nav
    :class = "[ isNavRouter ? 'absolute w-full z-20 py-3' : 
    'bg-white bg-opacity-100 absolute w-full z-20 py-2 shadow-md' ]"
  >
  <div class="max-w-[1240px] mx-auto flex items-center justify-between">
    <div class="mr-[1rem]">
      <a href="/"><img v-if="isNavRouter" src="./icons/2h.png" class="transition-all h-[65px]"  alt="">
      <img v-else src="./icons/1h.png" class="transition-all h-[65px]" alt=""></a>
    </div>
    <ul :class="[ 'flex flex-row items-center gap-10 text-sm font-regular tracking-tight', isNavRouter ? 'text-white' : 'text-hovers-black' ]">
     <li> <a href="/">{{ $t('navbar.home') }}</a></li>
      <li><router-link to="/projects">{{ $t('navbar.projects') }}</router-link></li>
      <li><a href="/#services">{{ $t('navbar.services') }}</a></li>
      <li><a href="/about">{{ $t('navbar.about') }}</a></li>
      <li><a href="/#clients">{{ $t('navbar.clients') }}</a></li>
      <li><router-link to="/contacts">{{ $t('navbar.contacts') }}</router-link></li>

      <li>
        <ul class="border-x px-3 flex flex-row gap-3">
          <li><a href="#"><font-awesome-icon class="hover:text-[#0B86EE] transition-all" icon="fa-brands fa-facebook" size="lg" /></a></li>
          <li><a href="#"><font-awesome-icon class="hover:text-[#F3425F] transition-all" icon="fa-brands fa-instagram" size="lg" /></a></li>
          <li><a href="#"><font-awesome-icon class="hover:text-[#0a66c2] transition-all" icon="fa-brands fa-linkedin" size="lg" /></a></li>
        </ul>
      </li>

      <li>
        <ul class="flex flex-row gap-3">
          <li><a class="cursor-pointer" @click="changeLang('en')">EN</a></li>
          <li><a class="cursor-pointer" @click="changeLang('az')">AZ</a></li>
        </ul>
      </li>
    </ul>

    
  </div>
  </nav>
</template>

<script>
import { library} from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import i18n from '../i18n'
library.add(faTwitter, faFacebook, faInstagram, faLinkedin)

export default {
  name: 'Navbar',
  methods: {
    changeLang(lang) {
      i18n.global.locale = lang
      localStorage.setItem('language', lang)
    }
  },
  computed: {
    isNavRouter() {
      const isAbout = this.$route.path === '/about'
      const homePath = this.$route.path === '/'
    return isAbout || homePath
  }
}
}
</script>


