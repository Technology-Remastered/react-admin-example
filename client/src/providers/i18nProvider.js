import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "ra-language-english";

const i18nProvider = polyglotI18nProvider(() => englishMessages, 'en');

export default i18nProvider;
