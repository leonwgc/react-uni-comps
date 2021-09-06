import { css } from 'styled-components';
import * as colors from './colors';
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
  if (isMobile()) {
    return css`
      ${prop}:${leftValue} ${(props) => props.theme.color || colors.primary};
      ${prop}:var(--uc-color, ${colors.primary});
    `;
  } else {
    return css`
      ${prop}:var(--uc-color, ${colors.primary});
      ${prop}:${leftValue} ${(props) => props.theme.color};
    `;
  }
};
