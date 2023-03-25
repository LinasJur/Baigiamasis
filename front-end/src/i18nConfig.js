import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translationEn = { language: "en", mHome: "Home", mMyBooks: "My Books", mDiscover: "Discover", mSearch:"Search", mView: "View", mEdit: "Edit",
mReading: "Reading", mToRead: "To read", mRead: "Read", mAddNewBook: "Add New Book", mAdd: "Add", mCancel: "Cancel", mTitle: "Title", mAuthor: "Author", mDescription: "Description",
mGenre: "Genre", mLength: "Pages", mStatus: "Status"};

const translationLt = { language: "lt", mHome: "Pradinis", mMyBooks: "Mano Knygos", mDiscover: "Atradimai", mSearch: "Paieška", mView: "Daugiau", mEdit: "Koreguoti",
mReading: "Skaitomos", mToRead: "Noriu skaityti", mRead: "Perskaitytos", mAddNewBook: "Pridėti naują knygą", mAdd: "Pridėti", mCancel: "Atšaukti" , mTitle: "Titulinis", mAuthor: "Autorius", mDescription: "Apie knygą",
mGenre: "Žanras", mLength: "Puslapių sk.", mStatus: "Skaitomumo statusas"};

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
