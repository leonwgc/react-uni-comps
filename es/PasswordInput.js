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

import React, { useRef, useEffect, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import * as colors from './colors';
import clsx from 'clsx';
import { isMobile } from './dom';
import useValueRef from './hooks/useValueRef';
var StyledPasswordInput = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"], ["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"])), colors.border, colors.border);

var getArray = function getArray(len) {
  var ar = [];

  for (var i = 0; i < len; i++) {
    ar.push(i + 1);
  }

  return ar;
};
/** 密码输入框 */


var PasswordInput = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.value,
      value = _a === void 0 ? '' : _a,
      _b = props.length,
      length = _b === void 0 ? 6 : _b,
      className = props.className,
      _c = props.mask,
      mask = _c === void 0 ? true : _c,
      _d = props.autoFocus,
      autoFocus = _d === void 0 ? true : _d,
      _e = props.virtualKeyboard,
      virtualKeyboard = _e === void 0 ? isMobile : _e,
      onFinish = props.onFinish,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      rest = __rest(props, ["value", "length", "className", "mask", "autoFocus", "virtualKeyboard", "onFinish", "onFocus", "onChange"]);

  var arRef = useRef(getArray(length));
  var inputRefArray = useRef([]);
  var autoFocusRef = useValueRef(autoFocus);
  var vRef = useValueRef(value);
  var inputValueRef = useValueRef(value.split(''));
  var onFinishRef = useValueRef(onFinish);
  useImperativeHandle(ref, function () {
    return {
      focus: function focus() {
        setTimeout(function () {
          var _a, _b;

          (_b = (_a = inputRefArray.current[vRef.current.length]) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        }, 60);
      }
    };
  });
  useEffect(function () {
    var _a;

    if (value.length === length) {
      (_a = onFinishRef.current) === null || _a === void 0 ? void 0 : _a.call(onFinishRef, value);
    }
  }, [value, onFinishRef, length]);
  useEffect(function () {
    var _a, _b;

    if (autoFocusRef.current) {
      (_b = (_a = inputRefArray.current[vRef.current.length]) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
  }, [autoFocusRef, vRef]); // prev value check

  var prevInputCheck = useCallback(function (idx) {
    for (var i = 0; i < idx; i++) {
      if (!inputValueRef.current[i]) {
        return false;
      }
    }

    return true;
  }, []);
  return /*#__PURE__*/React.createElement(StyledPasswordInput, __assign({}, rest, {
    className: clsx('uc-password-input', className)
  }), arRef.current.map(function (n, idx) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('item'),
      key: n
    }, value.length >= n ? mask ? /*#__PURE__*/React.createElement("div", {
      className: "dot"
    }) : value[idx] : !virtualKeyboard ? /*#__PURE__*/React.createElement("input", {
      ref: function ref(r) {
        inputRefArray.current[idx] = r;
      },
      onChange: function onChange(e) {
        var _a;

        inputValueRef.current[idx] = e.target.value;
        var newValue = inputValueRef.current.join('');
        _onChange === null || _onChange === void 0 ? void 0 : _onChange(newValue);

        if (n < length) {
          (_a = inputRefArray.current[idx + 1]) === null || _a === void 0 ? void 0 : _a.focus();
        }
      },
      onKeyDown: function onKeyDown(e) {
        if (!prevInputCheck(idx)) {
          e.preventDefault();
        }
      },
      onFocus: onFocus
    }) : /*#__PURE__*/React.createElement("div", {
      className: clsx('virtual-input', {
        blink: value.length === idx
      })
    }));
  }));
});
PasswordInput.displayName = 'UC-PasswordInput';
export default PasswordInput;
var templateObject_1;