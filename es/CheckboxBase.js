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
import * as vars from './vars';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import Button from './Button';
import Icon from './Icon';
var StyledButton = styled(Button)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &.fill {\n    &.checked.default {\n      ", "\n      ", "\n      color: #fff;\n    }\n  }\n  &.outline {\n    &.checked {\n      ", "\n      ", "\n    }\n  }\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n"], ["\n  &.fill {\n    &.checked.default {\n      ", "\n      ", "\n      color: #fff;\n    }\n  }\n  &.outline {\n    &.checked {\n      ", "\n      ", "\n    }\n  }\n  &:not(:first-child) {\n    margin-left: 8px;\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('border-color'), getThemeColorCss('border-color'), getThemeColorCss('color'));
var StyledCheckboxBaseWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    color: #fff;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    color: #fff;\n  }\n"])), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), vars.border, vars.border);
/** Checkbox/Radiobox 的基础 */

var CheckboxBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 18 : _a,
      className = props.className,
      _b = props.button,
      button = _b === void 0 ? false : _b,
      onChange = props.onChange,
      defaultChecked = props.defaultChecked,
      _c = props.mode,
      mode = _c === void 0 ? 'checkbox' : _c,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      indeterminate = props.indeterminate,
      rest = __rest(props, ["size", "className", "button", "onChange", "defaultChecked", "mode", "checked", "disabled", "children", "indeterminate"]);

  var _d = useState(typeof checked === 'boolean' ? checked : defaultChecked),
      c = _d[0],
      setC = _d[1];

  useUpdateEffect(function () {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);

  var onClick = function onClick() {
    if (disabled) return;

    if (mode === 'checkbox' || c !== true) {
      var n = !c;
      setC(n);
      onChange === null || onChange === void 0 ? void 0 : onChange(n);
    }
  };

  return button ? /*#__PURE__*/React.createElement(StyledButton, __assign({}, rest, {
    ref: ref,
    onClick: onClick,
    className: clsx(className, {
      fill: button === 'fill',
      outline: button === 'outline' || button === true,
      checked: c,
      disabled: disabled
    })
  }), children) : /*#__PURE__*/React.createElement(StyledCheckboxBaseWrapper, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-checkbox', mode, className, {
      disabled: disabled,
      checked: c || indeterminate,
      mobile: isMobile,
      pc: !isMobile
    }),
    onClick: onClick
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('checkbox'),
    style: {
      width: size,
      height: size,
      fontSize: indeterminate ? size * 0.8 : size
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    type: !indeterminate ? 'uc-icon-tick' : 'uc-icon-jian2'
  })), children && /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, children));
});
CheckboxBase.displayName = 'UC-CheckboxBase';
export default CheckboxBase;
var templateObject_1, templateObject_2;