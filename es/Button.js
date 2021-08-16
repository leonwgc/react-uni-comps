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

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import Color from 'color';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  -moz-appearance: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    :hover {\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.primary {\n    background-color: ", ";\n    border-color: ", ";\n    color: #fff;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &.ghost,\n    &.ghost:hover {\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.disabled,\n  &.disabled:hover {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"], ["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  -moz-appearance: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  padding: 4px 16px;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    :hover {\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.primary {\n    background-color: ", ";\n    border-color: ", ";\n    color: #fff;\n\n    &:hover {\n      background-color: ", ";\n    }\n\n    &.ghost,\n    &.ghost:hover {\n      background-color: transparent;\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.disabled,\n  &.disabled:hover {\n    background-color: ", ";\n    border-color: ", ";\n    cursor: not-allowed;\n    color: ", ";\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), colors.border, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return Color(color).lighten(0.16).hex();
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, colors.disabledBg, colors.border, colors.disabledText, colors.border, colors.border);
/** 按钮 */

var Button = function Button(props) {
  var _a = props.color,
      color = _a === void 0 ? colors.primary : _a,
      _b = props.type,
      type = _b === void 0 ? 'default' : _b,
      disabled = props.disabled,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      ghost = props.ghost,
      rest = __rest(props, ["color", "type", "disabled", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "ghost"]);

  var themeColor = disabled ? colors.disabledText : danger ? colors.danger : color;
  return /*#__PURE__*/React.createElement(StyledButton, __assign({
    color: themeColor,
    disabled: disabled,
    type: htmlType,
    className: clsx('uc-btn', type, {
      disabled: disabled,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost
    }, className)
  }, rest), children);
};

export default Button;
var templateObject_1;