import { css } from 'styled-components';
import * as vars from './vars';
import { isMobile } from './dom';
/**
 *  get a css snippet with theme color
 *
 * @param {string} prop
 * @param {string} [leftValue='']
 * @return {*}  {*}
 */
export const getThemeColorCss = (prop: string, leftValue = ''): any => {
  // mobile css variable first
  if (isMobile) {
    return css`
      ${prop}:${leftValue} ${(props) => props.theme.color || vars.primary};
      ${prop}:${leftValue} var(--uc-color, ${vars.primary});
    `;
  } else {
    return css`
      ${prop}:${leftValue} var(--uc-color, ${vars.primary});
      ${prop}:${leftValue} ${(props) => props.theme.color};
    `;
  }
};
