import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_pl from "./translations/pl/translation.json"
import translation_en from "./translations/en/translation.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    debug: false,
    resources: {
      pl: {
        translation: translation_pl
      },
      en: {
        translation: translation_en
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;