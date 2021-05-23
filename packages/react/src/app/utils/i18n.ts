import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next)
  .init({
    resources: {
      en: require('../../lang/en.json'),
    },
    lng: 'en',
    fallbackLng: 'en',
  })

  export default i18n;