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
import useThemeColor from './hooks/useThemeColor';
var StyledSwitch = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.3s ease-in-out;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border-color: ", ";\n\n    &::after {\n      left: calc(100% - 18px - 2px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n"], ["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.3s ease;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.3s ease-in-out;\n  }\n\n  &.checked {\n    background-color: ", ";\n    border-color: ", ";\n\n    &::after {\n      left: calc(100% - 18px - 2px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.4;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n"])), function (_a) {
  var color = _a.color;
  return color;
}, function (_a) {
  var color = _a.color;
  return color;
});
/** 开关 */

var Switch = function Switch(props) {
  var disabled = props.disabled,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      className = props.className,
      _a = props.style,
      style = _a === void 0 ? {} : _a,
      onChange = props.onChange,
      rest = __rest(props, ["disabled", "checked", "defaultChecked", "className", "style", "onChange"]);

  var color = useThemeColor();

  var _b = useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _checked = _b[0],
      _setChecked = _b[1];

  return /*#__PURE__*/React.createElement(StyledSwitch, __assign({
    color: color,
    onClick: function onClick() {
      if (typeof onChange === 'function') {
        onChange(!_checked);
      }

      _setChecked(!_checked);
    },
    style: __assign({}, style),
    disabled: disabled,
    className: clsx('uc-switch', className, {
      disabled: disabled,
      checked: _checked
    })
  }, rest));
};

export default Switch;
var templateObject_1;