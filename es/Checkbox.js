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

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
var StyledCheckboxWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), colors.disabledText);
var StyledCheckbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &::before {\n    transform: rotate(45deg);\n    opacity: 0;\n    transition: transform 0.3s ease;\n    content: '';\n    width: calc(", "px / 3.5);\n    height: calc(", "px / 2);\n    border: calc(", "px / 9) solid ", ";\n    border-top: 0;\n    border-left: 0;\n    margin-top: calc(", "px / -12);\n    margin-left: calc(", "px / ", ");\n    transition: all 0.2s ease;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n    &::before {\n      transform: rotate(45deg);\n      opacity: 1;\n      border-color: #fff;\n    }\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n    opacity: 0.4;\n\n    &::before {\n      border-color: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &::before {\n    transform: rotate(45deg);\n    opacity: 0;\n    transition: transform 0.3s ease;\n    content: '';\n    width: calc(", "px / 3.5);\n    height: calc(", "px / 2);\n    border: calc(", "px / 9) solid ", ";\n    border-top: 0;\n    border-left: 0;\n    margin-top: calc(", "px / -12);\n    margin-left: calc(", "px / ", ");\n    transition: all 0.2s ease;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n    &::before {\n      transform: rotate(45deg);\n      opacity: 1;\n      border-color: #fff;\n    }\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n    opacity: 0.4;\n\n    &::before {\n      border-color: ", ";\n    }\n  }\n"])), function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, colors.border, function (_a) {
  var borderRadius = _a.borderRadius;
  return borderRadius;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, colors.disabledBg, colors.border, colors.border);
/** Checkbox, Radiobox带checked状态的 */

var Checkbox = function Checkbox(props) {
  var _a = props.color,
      color = _a === void 0 ? colors.primary : _a,
      _b = props.size,
      size = _b === void 0 ? 18 : _b,
      _c = props.borderRadius,
      borderRadius = _c === void 0 ? '2px' : _c,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children;

  var _d = useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _checked = _d[0],
      _setChecked = _d[1];

  return /*#__PURE__*/React.createElement(StyledCheckboxWrapper, {
    className: clsx('uc-checkbox', {
      disabled: disabled
    }),
    onClick: function onClick() {
      if (disabled) return;

      if (typeof onChange === 'function') {
        onChange(!_checked);
      }

      _setChecked(!_checked);
    }
  }, /*#__PURE__*/React.createElement(StyledCheckbox, {
    className: clsx({
      checked: _checked,
      disabled: disabled
    }),
    borderRadius: borderRadius,
    size: size,
    disabled: disabled,
    color: color
  }), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
};

export default Checkbox;
var templateObject_1, templateObject_2;