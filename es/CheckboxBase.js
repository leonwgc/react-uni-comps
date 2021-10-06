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
import useUpdateEffect from './hooks/useUpdateEffect';
import useCallbackRef from './hooks/useCallbackRef';
var StyledCheckboxBaseWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    transition: all 0.24s ease-in-out;\n    color: #fff;\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n\n  .text {\n    margin-left: 8px;\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  &.pc {\n    .checkbox:hover {\n      ", "\n    }\n  }\n\n  &.radio {\n    .checkbox {\n      border-radius: 50%;\n    }\n  }\n\n  &.checked {\n    .checkbox {\n      ", "\n      ", "\n    }\n  }\n\n  &.disabled {\n    .checkbox {\n      border-color: ", ";\n    }\n  }\n\n  .checkbox {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background: #fff;\n    transition: all 0.24s ease-in-out;\n    color: #fff;\n  }\n"])), getThemeColorCss('border', '1px solid'), getThemeColorCss('background-color'), getThemeColorCss('border', '1px solid'), colors.border, colors.border);
/** Checkbox/Radiobox 的基础 */

var CheckboxBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 18 : _a,
      className = props.className,
      onChange = props.onChange,
      style = props.style,
      defaultChecked = props.defaultChecked,
      _b = props.mode,
      mode = _b === void 0 ? 'checkbox' : _b,
      checked = props.checked,
      disabled = props.disabled,
      children = props.children,
      rest = __rest(props, ["size", "className", "onChange", "style", "defaultChecked", "mode", "checked", "disabled", "children"]);

  var _c = useState(typeof checked === 'boolean' ? checked : defaultChecked),
      c = _c[0],
      setC = _c[1];

  var onChangeRef = useCallbackRef(onChange);
  useUpdateEffect(function () {
    var _a;

    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, c);
  }, [c]);
  useUpdateEffect(function () {
    if (c !== checked) {
      setC(checked);
    }
  }, [checked]);
  return /*#__PURE__*/React.createElement(StyledCheckboxBaseWrapper, {
    ref: ref,
    className: clsx('uc-checkbox', mode, {
      disabled: disabled,
      checked: c,
      mobile: isMobile,
      pc: !isMobile
    }),
    onClick: function onClick() {
      if (disabled) return;

      if (mode === 'checkbox' || c !== true) {
        setC(!c);
      }
    }
  }, /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    className: clsx('checkbox', className),
    style: __assign(__assign({}, style), {
      width: size,
      height: size
    })
  }), /*#__PURE__*/React.createElement(IconTick, {
    size: size * 0.6
  })), children && /*#__PURE__*/React.createElement("span", {
    className: "text"
  }, children));
});
CheckboxBase.displayName = 'UC-CheckboxBase';
export default CheckboxBase;
var templateObject_1;