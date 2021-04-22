import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      confirmation_mail_send: 'A confirmation mail has benn sended',
    },
  },
  fr: {
    translation: {
      confirmation_mail_send: 'Un mail de confirmation a été envoyé',
    },
  },
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
