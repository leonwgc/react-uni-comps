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
import Spin from './Spin';
import Space from './Space';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  box-sizing: border-box;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  padding: 0px 16px;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      opacity: 0.8;\n    }\n    &.pc:hover,\n    &.outlined {\n      ", "\n      ", "\n    }\n\n    &.mobile:active {\n      background-color: ", ";\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.primary {\n    ", "\n    ", "\n    color: #fff;\n\n    ", " {\n      opacity: 0.8;\n    }\n\n    &.ghost,\n    &.ghost:hover,\n    &.ghost:active {\n      background-color: transparent !important;\n      ", "\n      ", "\n\n      &.danger {\n        color: ", ";\n      }\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.anchor {\n    border: none;\n    ", "\n    height: unset;\n    padding: unset;\n    margin: unset;\n    background: unset;\n  }\n\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:active {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"], ["\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  box-sizing: border-box;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  appearance: none;\n  -webkit-tap-highlight-color: transparent;\n\n  font-weight: 400;\n  white-space: nowrap;\n  background-image: none;\n  transition: all 0.3s ease;\n  user-select: none;\n  touch-action: manipulation;\n  font-size: 14px;\n  border-radius: 2px;\n  border: 1px solid transparent;\n  padding: 0px 16px;\n  height: 32px;\n\n  &.default {\n    background-color: #fff;\n    border-color: ", ";\n\n    ", " {\n      opacity: 0.8;\n    }\n    &.pc:hover,\n    &.outlined {\n      ", "\n      ", "\n    }\n\n    &.mobile:active {\n      background-color: ", ";\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.primary {\n    ", "\n    ", "\n    color: #fff;\n\n    ", " {\n      opacity: 0.8;\n    }\n\n    &.ghost,\n    &.ghost:hover,\n    &.ghost:active {\n      background-color: transparent !important;\n      ", "\n      ", "\n\n      &.danger {\n        color: ", ";\n      }\n    }\n\n    &.danger,\n    &.danger:hover,\n    &.danger:active {\n      background-color: ", ";\n      border-color: ", ";\n    }\n  }\n  &.block {\n    width: 100%;\n  }\n  &.circle {\n    min-width: 32px;\n    padding: 0;\n    border-radius: 50%;\n  }\n  &.dashed {\n    border-style: dashed;\n  }\n\n  &.anchor {\n    border: none;\n    ", "\n    height: unset;\n    padding: unset;\n    margin: unset;\n    background: unset;\n  }\n\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:active {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n  &.ghost,\n  &.ghost:hover {\n    background-color: transparent;\n    border-color: ", ";\n    color: ", ";\n  }\n"])), vars.border, isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), vars.activeBg, vars.danger, vars.danger, getThemeColorCss('background-color'), getThemeColorCss('border-color'), isMobile ? '&:active' : '&:hover', getThemeColorCss('border-color'), getThemeColorCss('color'), vars.danger, vars.danger, vars.danger, getThemeColorCss('color'), vars.border, vars.border);
/** 按钮 */

var Button = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.type,
      type = _a === void 0 ? 'default' : _a,
      disabled = props.disabled,
      outlined = props.outlined,
      block = props.block,
      className = props.className,
      children = props.children,
      htmlType = props.htmlType,
      circle = props.circle,
      dashed = props.dashed,
      danger = props.danger,
      loading = props.loading,
      ghost = props.ghost,
      _onClick = props.onClick,
      wait = props.wait,
      rest = __rest(props, ["type", "disabled", "outlined", "block", "className", "children", "htmlType", "circle", "dashed", "danger", "loading", "ghost", "onClick", "wait"]);

  var _b = useState(false),
      waiting = _b[0],
      setWaiting = _b[1];

  var waitTime = typeof wait === 'number' && wait > 0 ? wait : typeof wait === 'boolean' && wait === true ? 1000 : 0;
  var usingWait = waitTime > 0;
  var icon = props.icon || (loading ? /*#__PURE__*/React.createElement(Spin, null) : null);
  return /*#__PURE__*/React.createElement(StyledButton, __assign({}, rest, {
    ref: ref,
    disabled: disabled,
    type: htmlType,
    onClick: function onClick(e) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);

      if (usingWait) {
        setWaiting(true);
        setTimeout(function () {
          setWaiting(false);
        }, waitTime);
      }
    },
    className: clsx('uc-btn', 'uc-button', type, {
      disabled: disabled || loading || waiting,
      block: block,
      circle: circle,
      dashed: dashed,
      ghost: ghost,
      danger: danger,
      mobile: isMobile,
      pc: !isMobile,
      anchor: rest.as === 'a',
      outlined: outlined
    }, className)
  }), icon && children ? /*#__PURE__*/React.createElement(Space, null, icon, children) : children || icon);
});
Button.displayName = 'UC-Button';
export default Button;
var templateObject_1;