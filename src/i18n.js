import { createI18n } from 'vue-i18n'

import en  from './locales/en.json'
import az  from './locales/az.json'
const i18n = createI18n({
  locale: localStorage.getItem('language') || 'en', // Use the stored language or fallback to English
  fallbackLocale: 'az', // set the fallback locale
  messages: {
    en,
    az
  }
})

export default i18n
