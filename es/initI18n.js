import { __assign } from "tslib";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
var defaultInitOptions = {
  interpolation: {
    escapeValue: false // not needed for react!!

  }
};
/**
 * 初始化i18n
 * @param options i18next InitOptions
 */

export var initI18n = function initI18n(options) {
  i18n.use(initReactI18next) // bind react-i18next to the instance
  .init(__assign(__assign({}, defaultInitOptions), options));
};
export default i18n;