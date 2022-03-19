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
 *  获取包含主题色的styled-components css片段
 *
 * @param {string} css属性
 * @param {string} [leftValue=''] 左侧值
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
 *  get theme color from root css var
 *
 * @return {*}
 */

export var getThemeColor = function getThemeColor() {
  return isBrowser && document.documentElement.style.getPropertyValue('--uc-color');
};
var templateObject_1;