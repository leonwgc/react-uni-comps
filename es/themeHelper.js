var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

export var getThemeColorCss = function getThemeColorCss(prop, leftValue) {
  if (leftValue === void 0) {
    leftValue = '';
  }

  return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ":", " ", ";\n    ", ":", " var(--uc-color, ", ");\n  "], ["\n    ", ":", " ", ";\n    ", ":", " var(--uc-color, ", ");\n  "])), prop, leftValue, function (props) {
    return props.theme.color || vars.primary;
  }, prop, leftValue, vars.primary);
};
/**
 *  get theme color from root el
 *
 * @return {*}
 */

export var getRootCssVarColor = function getRootCssVarColor() {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};
var templateObject_1;