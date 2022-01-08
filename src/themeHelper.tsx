import { css } from 'styled-components';
import { isBrowser } from './dom';
import * as vars from './vars';

/**
 *  get a css snippet with theme color
 *
 * @param {string} prop
 * @param {string} [leftValue='']
 * @return {*}  {*}
 */
export const getThemeColorCss = (prop: string, leftValue = ''): any => {
  return css`
    ${prop}:${leftValue} ${(props) => props.theme.color || vars.primary};
    ${prop}:${leftValue} var(--uc-color, ${vars.primary});
  `;
};

/**
 *  get theme color from root el
 *
 * @return {*}
 */
export const getRootCssVarColor = () => {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};
