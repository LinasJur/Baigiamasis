import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { language: "en", mHome: "Home", mMyBooks: "My Books", mDiscover: "Discover", mSearch:"Search"};
const translationLt = { language: "lt", mHome: "Pradinis", mMyBooks: "Mano Knygos", mDiscover: "Atradimai", mSearch: "Paieška"};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    lt: { translation: translationLt },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export { i18n };
