import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, useEffect, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import clsx from 'clsx';
import useLatest from './hooks/useLatest';
var StyledPasswordInput = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"], ["\n  user-select: none;\n  height: 50px;\n  cursor: pointer;\n  display: flex;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 8px;\n  border: 1px solid ", ";\n  margin: 0 16px;\n\n  .item {\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    font-size: 20px;\n    line-height: 1.2;\n    background-color: #fff;\n\n    &:not(:first-child) {\n      border-left: 1px solid ", ";\n    }\n\n    .dot {\n      width: 10px;\n      height: 10px;\n      background-color: #000;\n      border-radius: 100%;\n    }\n    input {\n      height: 100%;\n      width: 100%;\n      display: inline-block;\n      font-size: 16px;\n      text-align: center;\n      background-color: transparent;\n      border: 0;\n      resize: none;\n      outline: none;\n      -webkit-tap-highlight-color: transparent;\n      -webkit-appearance: none;\n      box-shadow: none;\n    }\n    @keyframes blink {\n      0% {\n        opacity: 0;\n      }\n      50% {\n        opacity: 1;\n      }\n      100% {\n        opacity: 0;\n      }\n    }\n    .virtual-input {\n      &.blink {\n        width: 1px;\n        height: 50%;\n        background-color: #333;\n        animation: 1s blink infinite;\n      }\n    }\n  }\n"])), vars.border, vars.border);

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
      userVirtualInput = props.userVirtualInput,
      onFinish = props.onFinish,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      rest = __rest(props, ["value", "length", "className", "mask", "autoFocus", "userVirtualInput", "onFinish", "onFocus", "onChange"]);

  var arRef = useRef(getArray(length));
  var inputRefArray = useRef([]);
  var autoFocusRef = useLatest(autoFocus);
  var vRef = useLatest(value);
  var inputValueRef = useLatest(value.split(''));
  var onFinishRef = useLatest(onFinish);
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
  }, [inputValueRef]);
  return /*#__PURE__*/React.createElement(StyledPasswordInput, __assign({}, rest, {
    className: clsx('uc-password-input', className)
  }), arRef.current.map(function (n, idx) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('item'),
      key: n
    }, value.length >= n ? mask ? /*#__PURE__*/React.createElement("div", {
      className: "dot"
    }) : value[idx] : !userVirtualInput ? /*#__PURE__*/React.createElement("input", {
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
        var _a;

        if (e.code === 'Backspace' || e.which === 8) {
          // back
          if (idx > 0) {
            var v = inputValueRef.current.slice(0, idx - 1).join('');
            _onChange === null || _onChange === void 0 ? void 0 : _onChange(v);
            setTimeout(function () {
              var _a;

              (_a = inputRefArray.current[Math.max(0, idx - 1)]) === null || _a === void 0 ? void 0 : _a.focus();
            }, 100);
          } else {
            (_a = inputRefArray.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
          }
        } else if (!prevInputCheck(idx)) {
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