import { css } from 'styled-components';
import { isBrowser } from './dom';
import * as vars from './vars';

/**
 *  获取包含主题色的css片段
 * @param prop 属性
 * @param leftValue 属性值 (左侧部分)
 * @returns
 */
export const getThemeColorCss = (prop: string, leftValue = ''): any => {
  return css`
    ${prop}:${leftValue} ${getThemeColor() || vars.primary};
  `;
};

/**
 *  get theme color from root css var
 *
 * @return {*}
 */
export const getThemeColor = () => {
  return isBrowser && document.documentElement.dataset.themeColor;
};
