import polyglotI18nProvider from 'ra-i18n-polyglot';
//import englishMessages from 'ra-language-english';
import greekMessages from '../messages/ra-language-greek';

const i18nProvider = polyglotI18nProvider(() => greekMessages, 'el');

export default i18nProvider;
