import i18next from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const initI18next = async (language: string = "en", namespace: string = "common") => {
  if (!i18next.isInitialized) {
    await i18next
      .use(Backend)
      .use(initReactI18next)
      .use(LanguageDetector) // Detect language on the client
      .init({
        lng: language,
        ns: [namespace],
        defaultNS: namespace,
        fallbackLng: "en", // Default language
        backend: {
          loadPath: `/locales/{{lng}}/{{ns}}.json`, // Path to translation files
        },
        react: {
          useSuspense: false, // Disable suspense for server-side rendering
        },
        debug: process.env.NODE_ENV === "development", // Debug in dev mode
      });
  }
  return i18next;
};
