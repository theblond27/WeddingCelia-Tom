import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationInFrench  from '../locales/fr/translation.json'
import translationInEnglish  from '../locales/en/translation.json'
import translationInJapan  from '../locales/jp/translation.json'


const resources = {
  fr: {
    translation: translationInFrench
  },
  en: {
    translation: translationInEnglish
  },
  jp: {
    translation: translationInJapan
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: "en", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "en", // use en if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;