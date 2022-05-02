import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/**
 * 初始化i18n
 *
 * @param {Record<string, any>} resources  翻译对象
 * @param {string} [lang='zh'] 默认语言
 */
const initI18n = (resources: Record<string, any>, lang = 'zh') => {
  i18n
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
      lng: lang,
      fallbackLng: lang,
      resources,
      interpolation: {
        escapeValue: false, // not needed for react!!
      },

      // react i18next special options (optional)
      // override if needed - omit if ok with defaults
      /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
    });

  return i18n;
};

export default initI18n;
