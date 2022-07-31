import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import type { InitOptions } from 'i18next';

const defaultInitOptions = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
};

/**
 * 初始化i18n
 * @param options i18next InitOptions
 */
export const initI18n = (options?: InitOptions) => {
  i18n
    .use(initReactI18next) // bind react-i18next to the instance
    .init({
      ...defaultInitOptions,
      ...options,
    });
};

export default i18n;
