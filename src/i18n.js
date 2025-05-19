import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./constants/en.js";
import ptTranslations from "./constants/pt.js";

// Inicialização (Config)
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    pt: {
      translation: ptTranslations,
    },
  },
  lng: "pt",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
