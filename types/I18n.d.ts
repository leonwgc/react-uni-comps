/**
 * 初始化i18n
 *
 * @param {Record<string, any>} resources  翻译对象
 * @param {string} [lang='zh'] 默认语言
 */
declare const initI18n: (resources: Record<string, any>, lang?: string) => import("i18next").i18n;
export default initI18n;
