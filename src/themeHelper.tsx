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
 *  获取主题色
 */
export const getThemeColor = () => {
  return isBrowser && document.documentElement.dataset.themeColor;
};
