import React, { useLayoutEffect } from 'react';
import * as vars from './vars';
import { ThemeProvider as StyledProvider } from 'styled-components';
/**
 * @description 主题色设置
 * @param {Props} props
 * @return {*}
 */

var ThemeProvider = function ThemeProvider(props) {
  var _a = props.color,
      color = _a === void 0 ? vars.primary : _a,
      children = props.children;
  useLayoutEffect(function () {
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