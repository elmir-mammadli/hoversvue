import { createI18n } from 'vue-i18n'

import en  from './locales/en.json'
import az  from './locales/az.json'
const i18n = createI18n({
  locale: 'en', // set the initial locale
  fallbackLocale: 'en', // set the fallback locale
  messages: {
    en,
    az
  }
})

export default i18n
