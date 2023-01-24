import React from 'react';
import * as vars from './vars';
import { ThemeProvider as StyledProvider } from 'styled-components';
import useTheme from './hooks/useTheme';
import useIsomorphicLayoutEffect from './hooks/useIsomorphicLayoutEffect';
/**
 * @description 主题色设置
 * @param {Props} props
 * @return {*}
 */

var ThemeProvider = function ThemeProvider(props) {
  var _a = props.color,
      color = _a === void 0 ? vars.primary : _a,
      children = props.children;
  var theme = useTheme();
  useIsomorphicLayoutEffect(function () {
    document.documentElement.style.setProperty('--uc-color', color);
    document.documentElement.setAttribute('data-theme-color', color);
  }, [color]);
  useIsomorphicLayoutEffect(function () {
    document.documentElement.setAttribute('data-theme-mode', theme);
  }, [theme]);
  return /*#__PURE__*/React.createElement(StyledProvider, {
    theme: {
      color: color,
      theme: theme
    }
  }, children);
};

ThemeProvider.displayName = 'UC-ThemeProvider';
export default ThemeProvider;