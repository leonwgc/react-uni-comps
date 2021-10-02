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
import * as colors from './colors';
import { isMobile } from './dom';
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
  } // mobile css variable first


  if (isMobile) {
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      ", ":", " ", ";\n      ", ":", " var(--uc-color, ", ");\n    "], ["\n      ", ":", " ", ";\n      ", ":", " var(--uc-color, ", ");\n    "])), prop, leftValue, function (props) {
      return props.theme.color || colors.primary;
    }, prop, leftValue, colors.primary);
  } else {
    return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", ":", " var(--uc-color, ", ");\n      ", ":", " ", ";\n    "], ["\n      ", ":", " var(--uc-color, ", ");\n      ", ":", " ", ";\n    "])), prop, leftValue, colors.primary, prop, leftValue, function (props) {
      return props.theme.color;
    });
  }
};
var templateObject_1, templateObject_2;