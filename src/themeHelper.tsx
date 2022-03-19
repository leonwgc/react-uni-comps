import { css } from 'styled-components';
import { isBrowser } from './dom';
import * as vars from './vars';

/**
 *  获取包含主题色的styled-components css片段
 *
 * @param {string} css属性
 * @param {string} [leftValue=''] 左侧值
 * @return {*}  {*}
 */
export const getThemeColorCss = (prop: string, leftValue = ''): any => {
  return css`
    ${prop}:${leftValue} ${(props) => props.theme.color || vars.primary};
    ${prop}:${leftValue} var(--uc-color, ${vars.primary});
  `;
};

/**
 *  get theme color from root css var
 *
 * @return {*}
 */
export const getThemeColor = () => {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};
