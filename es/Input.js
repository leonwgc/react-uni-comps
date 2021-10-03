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

import React, { useEffect, useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import * as colors from './colors';
import clsx from 'clsx';
var StyledInput = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 4px 12px;\n  font-size: 14px;\n  width: 100%;\n  background-color: #fff;\n\n  &.pc {\n    background-image: none;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    transition: all 0.3s;\n    &:hover {\n      ", "\n    }\n  }\n  &.mobile {\n    border: none;\n    padding: 0 4px;\n    line-height: 24px;\n  }\n\n  .prefix {\n    margin-right: 8px;\n  }\n  .suffix {\n    margin-left: 8px;\n    color: #999;\n  }\n\n  input,\n  textarea {\n    flex: 1;\n    position: relative;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: #333;\n    line-height: inherit;\n    text-align: left;\n    background-color: transparent;\n    border: 0;\n    resize: none;\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-appearance: none;\n    box-shadow: none;\n    width: 100%;\n    line-height: 1.5715;\n  }\n\n  textarea {\n    resize: none;\n    word-break: break-all;\n    word-wrap: break-word;\n    & + * {\n      align-self: flex-end;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 4px 12px;\n  font-size: 14px;\n  width: 100%;\n  background-color: #fff;\n\n  &.pc {\n    background-image: none;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    transition: all 0.3s;\n    &:hover {\n      ", "\n    }\n  }\n  &.mobile {\n    border: none;\n    padding: 0 4px;\n    line-height: 24px;\n  }\n\n  .prefix {\n    margin-right: 8px;\n  }\n  .suffix {\n    margin-left: 8px;\n    color: #999;\n  }\n\n  input,\n  textarea {\n    flex: 1;\n    position: relative;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    color: #333;\n    line-height: inherit;\n    text-align: left;\n    background-color: transparent;\n    border: 0;\n    resize: none;\n    outline: none;\n    -webkit-tap-highlight-color: transparent;\n    -webkit-appearance: none;\n    box-shadow: none;\n    width: 100%;\n    line-height: 1.5715;\n  }\n\n  textarea {\n    resize: none;\n    word-break: break-all;\n    word-wrap: break-word;\n    & + * {\n      align-self: flex-end;\n    }\n  }\n"])), colors.border, getThemeColorCss('border-color'));
/** 单行/多行输入框 input/textarea */

var Input = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      prefix = props.prefix,
      suffix = props.suffix,
      _a = props.autoHeight,
      autoHeight = _a === void 0 ? true : _a,
      textarea = props.textarea,
      rest = __rest(props, ["className", "style", "prefix", "suffix", "autoHeight", "textarea"]);

  var inputRef = useRef();
  useImperativeHandle(ref, function () {
    return inputRef.current;
  });
  useEffect(function () {
    if (textarea && autoHeight) {
      inputRef.current.style.height = 'auto';
      inputRef.current.scrollTop = 0;
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px';
    }
  });
  return /*#__PURE__*/React.createElement(StyledInput, {
    style: style,
    className: clsx('uc-input', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }, prefix && /*#__PURE__*/React.createElement("span", {
    className: clsx('prefix')
  }, prefix), /*#__PURE__*/React.createElement(textarea ? 'textarea' : 'input', __assign(__assign({}, rest), {
    ref: inputRef
  })), suffix && /*#__PURE__*/React.createElement("span", {
    className: clsx('suffix')
  }, suffix));
});
Input.displayName = 'UC-Input';
export default Input;
var templateObject_1;