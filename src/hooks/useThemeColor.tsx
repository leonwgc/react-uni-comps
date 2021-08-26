import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as colors from '../colors';
/**
 *  获得主题色
 *
 * @export
 * @param {string} defaultColor
 * @return {*}  {string}
 */
export default function useThemeColor(defaultColor = colors.primary): string {
  const theme = useContext(ThemeContext);
  let color = defaultColor;
  if (typeof theme.color === 'string') {
    color = theme.color;
  }
  return color;
}
