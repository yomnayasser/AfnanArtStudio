import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';
import ar from './ar.json';
import {I18nManager} from 'react-native';

const resources = {
  ar: {translation: ar},
  en: {translation: en},
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',
    fallbackLng: 'ar',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
