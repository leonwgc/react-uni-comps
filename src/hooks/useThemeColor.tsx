import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as colors from '../colors';
/**
 *  use color in ThemeProvider, if propColor not set
 *
 * @export
 * @param {string} propColor
 * @return {*}  {string}
 */
export default function useThemeColor(propColor: string): string {
  const theme = useContext(ThemeContext);
  // prop has highest priority
  let color = propColor;

  if (!color) {
    // check theme provider
    if (typeof theme.color === 'string') {
      color = theme.color;
    } else {
      color = colors.primary;
    }
  }

  return color;
}
