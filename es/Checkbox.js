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

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import IconTick from './IconTick';
import * as colors from './colors';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
var StyledCheckboxWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n\n  > span {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n"])));
var StyledCheckbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &.pc:hover {\n    ", "\n  }\n\n  &.checked {\n    ", "\n    ", "\n  }\n\n  &.disabled {\n    border-color: ", ";\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: ", "px;\n  height: ", "px;\n  border: 1px solid ", ";\n  border-radius: 2px;\n  background: #fff;\n  transition: all 0.3s ease;\n\n  &.pc:hover {\n    ", "\n  }\n\n  &.checked {\n    ", "\n    ", "\n  }\n\n  &.disabled {\n    border-color: ", ";\n  }\n"])), function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
}, colors.border, getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), colors.border);
/** Checkbox/Radiobox带checked状态的 */

var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 18 : _a,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      rest = __rest(props, ["size", "onChange", "defaultChecked", "checked", "disabled", "children"]);

  var _b = useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _checked = _b[0],
      _setChecked = _b[1];

  return /*#__PURE__*/React.createElement(StyledCheckboxWrapper, {
    ref: ref,
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
  }, /*#__PURE__*/React.createElement(StyledCheckbox, __assign({
    className: clsx({
      checked: _checked,
      disabled: disabled,
      mobile: isMobile(),
      pc: !isMobile()
    }),
    size: size,
    disabled: disabled
  }, rest), /*#__PURE__*/React.createElement(IconTick, {
    size: size * 0.6,
    color: "#fff"
  })), children ? /*#__PURE__*/React.createElement("span", null, children) : null);
});
Checkbox.displayName = 'UC-Checkbox';
export default Checkbox;
var templateObject_1, templateObject_2;