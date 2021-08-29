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
import useThemeColor from './hooks/useThemeColor';
import IconTick from './IconTick';
import * as colors from './colors';
var StyledCheckboxWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    color: ", ";\n    cursor: not-allowed;\n  }\n"])), colors.disabledText);
var StyledCheckbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n    opacity: 0.4;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: ", ";\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  &.checked {\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n\n  &.disabled {\n    background-color: ", ";\n    border-color: ", ";\n    opacity: 0.4;\n  }\n"])), function (_a) {
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
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
}, colors.disabledBg, colors.border);
/** Checkbox, Radiobox带checked状态的 */

var Checkbox = function Checkbox(props) {
  var color = props.color,
      _a = props.size,
      size = _a === void 0 ? 18 : _a,
      _b = props.borderRadius,
      borderRadius = _b === void 0 ? '2px' : _b,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children;

  var _color = useThemeColor();

  var _c = useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _checked = _c[0],
      _setChecked = _c[1];

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
    color: color || _color
  }, /*#__PURE__*/React.createElement(IconTick, {
    size: size * 0.6,
    color: "#fff"
  })), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
};

export default Checkbox;
var templateObject_1, templateObject_2;