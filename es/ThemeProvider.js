import React, { useEffect } from 'react';
import * as colors from './colors';
import { ThemeProvider as StyledProvider } from 'styled-components';
/**
 * 主题色设置
 *
 * @export
 * @param {{
 *   color: string;
 *   children: ReactElement;
 * }} {
 *   color = colors.primary,
 *   children,
 * }
 * @return {*}  {React.ReactElement}
 */

var ThemeProvider = function ThemeProvider(props) {
  var _a = props.color,
      color = _a === void 0 ? colors.primary : _a,
      children = props.children;
  useEffect(function () {
    document.documentElement.style.setProperty('--uc-color', color);
  }, [color]);
  return /*#__PURE__*/React.createElement(StyledProvider, {
    theme: {
      color: color
    }
  }, children);
};

ThemeProvider.displayName = 'UC-ThemeProvider';
export default ThemeProvider;