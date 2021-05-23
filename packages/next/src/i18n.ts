import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: require('../lang/en_US.json')
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {

        if(value instanceof Date) {
          switch(format) {
            case 'date-full':
            case 'date-long':
            case 'date-medium':
            case 'date-short':
              return new Intl.DateTimeFormat([], {
                dateStyle: format.split('-')[1]
              } as any).format(value)
              
            case 'time-full':
            case 'time-long':
            case 'time-medium':
            case 'time-short':
              return new Intl.DateTimeFormat([], {
                timeStyle: format.split('-')[1]
              } as any).format(value)
          }

          return new Intl.DateTimeFormat(format).format(value)
        }

        return value
      }
    }
  });

export default i18n;