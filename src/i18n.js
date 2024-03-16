// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ENGTranslation from './locales/eng.json'
import FRTranslation from './locales/fr.json'


i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: ENGTranslation, // Use imported English translations
            },
            fr: {
                translation: FRTranslation, // Use imported French translations
            },
            // Add more languages if needed
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
