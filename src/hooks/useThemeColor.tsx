import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import * as colors from '../colors';
/**
 *  获得主题色,主题色优先,没有配置，则取colors定义的主题色
 *
 * @export
 * @param {string} fallbackColor
 * @return {*}  {string}
 */
export default function useThemeColor(fallbackColor = colors.primary): string {
  const theme = useContext(ThemeContext);
  let color = fallbackColor;
  if (typeof theme.color === 'string') {
    color = theme.color;
  }
  return color;
}
