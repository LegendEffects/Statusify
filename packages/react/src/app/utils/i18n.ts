import dayjs from "dayjs";
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

i18n.use(initReactI18next)
  .init({
    resources: {
      en: require('../../lang/en.json'),
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      format: (value, format, lng) => {
        if(value instanceof Date) {
          return dayjs(value).format(format);
        }

        return value;
      }
    }
  })

  export default i18n;