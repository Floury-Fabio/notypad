import i18n from 'i18next';

const resources = {
  en: {
    translation: {
      confirmation_mail_send: 'A confirmation mail has benn sended',
      account_activation: 'Your account has been activate',
    },
  },
  fr: {
    translation: {
      confirmation_mail_send: 'Un mail de confirmation a été envoyé',
      account_activation: 'Votre compte a été activé',
    },
  },
};
i18n
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
