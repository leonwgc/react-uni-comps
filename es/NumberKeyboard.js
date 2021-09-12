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

import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Button from './Button';
var StyledNumberKeyboard = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  padding-bottom: 22px;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .body {\n    display: flex;\n    padding: 6px 0 0 6px;\n\n    .keys {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.sidebar {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n      }\n\n      .key {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n      }\n    }\n  }\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n  width: 100%;\n  padding-bottom: 22px;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .body {\n    display: flex;\n    padding: 6px 0 0 6px;\n\n    .keys {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.sidebar {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n      }\n\n      .key {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n      }\n    }\n  }\n"])));
var Styledkey = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"])));

var getKeys = function getKeys() {
  return ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '0', '.'];
};
/** 数字/身份证键盘 */


var NumberKeyboard = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _onClick = props.onClick,
      _a = props.okText,
      okText = _a === void 0 ? '确定' : _a,
      className = props.className,
      rest = __rest(props, ["onClick", "okText", "className"]);

  var keys = getKeys();
  return /*#__PURE__*/React.createElement(StyledNumberKeyboard, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-number-keyboard', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('body')
  }, /*#__PURE__*/React.createElement("div", {
    className: "keys"
  }, keys.map(function (key) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx('key'),
      key: key
    }, /*#__PURE__*/React.createElement(Styledkey, {
      onClick: function onClick() {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick(key);
      }
    }, key));
  })), /*#__PURE__*/React.createElement("div", {
    className: clsx('sidebar', 'keys')
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('key'),
    key: 'backspace'
  }, /*#__PURE__*/React.createElement(Styledkey, {
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('backspace');
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32,
    height: 32,
    viewBox: "0 0 32 22",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.016 0A3.991 3.991 0 0132 3.987v14.026c0 2.2-1.787 3.987-3.98 3.987H10.382c-.509 0-.996-.206-1.374-.585L.89 13.09C.33 12.62 0 11.84 0 11.006c0-.86.325-1.62.887-2.08L9.01.585A1.936 1.936 0 0110.383 0zm0 1.947H10.368L2.24 10.28c-.224.226-.312.432-.312.73 0 .287.094.51.312.729l8.128 8.333h17.648a2.041 2.041 0 002.037-2.04V3.987c0-1.127-.915-2.04-2.037-2.04zM23.028 6a.96.96 0 01.678.292.95.95 0 01-.003 1.377l-3.342 3.348 3.326 3.333c.189.188.292.43.292.679 0 .248-.103.49-.292.679a.96.96 0 01-.678.292.959.959 0 01-.677-.292L18.99 12.36l-3.343 3.345a.96.96 0 01-.677.292.96.96 0 01-.678-.292.962.962 0 01-.292-.68c0-.248.104-.49.292-.679l3.342-3.348-3.342-3.348A.963.963 0 0114 6.971c0-.248.104-.49.292-.679A.96.96 0 0114.97 6a.96.96 0 01.677.292l3.358 3.348 3.345-3.348A.96.96 0 0123.028 6z"
  })))), /*#__PURE__*/React.createElement("div", {
    className: clsx('key'),
    key: 'ok'
  }, /*#__PURE__*/React.createElement(Styledkey, {
    type: "primary",
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('ok');
    }
  }, okText)))));
});
NumberKeyboard.displayName = 'UC-NumberKeyboard';
export default NumberKeyboard;
var templateObject_1, templateObject_2;