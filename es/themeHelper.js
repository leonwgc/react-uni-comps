import { __makeTemplateObject } from "tslib";
import { css } from 'styled-components';
import { isBrowser } from './dom';
import * as vars from './vars';
/**
 *  获取包含主题色的css片段
 * @param prop 属性
 * @param leftValue 属性值 (左侧部分)
 * @returns
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
 *  获取主题色
 */

export var getThemeColor = function getThemeColor() {
  return isBrowser && document.documentElement.dataset.themeColor;
};
var templateObject_1;