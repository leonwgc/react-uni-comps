import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import Button from './Button';
import SafeArea from './SafeArea';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-number-keyboard');
var StyledNumberKeyboardBase = styled(SafeArea)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .", " {\n    display: flex;\n    padding: 6px 0 0 6px;\n    height: 100%;\n\n    .", " {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.", " {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        max-width: 33%;\n\n        .", " {\n          max-width: 100%;\n        }\n      }\n\n      .", " {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n\n        &.zero {\n          flex-basis: 66%;\n        }\n        &.empty {\n          display: none;\n        }\n      }\n    }\n  }\n"], ["\n  width: 100%;\n  background-color: #f2f3f5;\n  user-select: none;\n\n  .", " {\n    display: flex;\n    padding: 6px 0 0 6px;\n    height: 100%;\n\n    .", " {\n      display: flex;\n      flex: 3;\n      flex-wrap: wrap;\n\n      &.", " {\n        display: flex;\n        flex: 1;\n        flex-direction: column;\n        max-width: 33%;\n\n        .", " {\n          max-width: 100%;\n        }\n      }\n\n      .", " {\n        position: relative;\n        flex: 1;\n        flex-basis: 33%;\n        box-sizing: border-box;\n        padding: 0 6px 6px 0;\n\n        &.zero {\n          flex-basis: 66%;\n        }\n        &.empty {\n          display: none;\n        }\n      }\n    }\n  }\n"])), getClassName('body'), getClassName('keys'), getClassName('sidebar'), getClassName('key'), getClassName('key'));
var Styledkey = styled(Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  font-size: 28px;\n  line-height: 1.5;\n  background-color: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  border: 0;\n"])));
/** 数字键盘基础 */

var NumberKeyboardBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _onClick = props.onClick,
      _a = props.okText,
      okText = _a === void 0 ? '确定' : _a,
      _b = props.customKey,
      customKey = _b === void 0 ? '' : _b,
      className = props.className,
      _c = props.height,
      height = _c === void 0 ? 260 : _c,
      rest = __rest(props, ["onClick", "okText", "customKey", "className", "height"]);

  var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', customKey];
  return /*#__PURE__*/React.createElement(StyledNumberKeyboardBase, __assign({}, rest, {
    ref: ref,
    className: clsx(getClassName(), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('body'),
    style: {
      height: height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: getClassName('keys')
  }, keys.map(function (key) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx(getClassName('key'), {
        'zero': key === '0',
        'custom-key': key === customKey,
        'empty': key === ''
      }),
      key: key
    }, /*#__PURE__*/React.createElement(Styledkey, {
      onClick: function onClick() {
        _onClick === null || _onClick === void 0 ? void 0 : _onClick(key);
      }
    }, key));
  })), /*#__PURE__*/React.createElement("div", {
    className: clsx(getClassName('sidebar'), getClassName('keys'))
  }, /*#__PURE__*/React.createElement("div", {
    className: getClassName('key'),
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
    className: getClassName('key'),
    key: 'ok'
  }, /*#__PURE__*/React.createElement(Styledkey, {
    type: "primary",
    onClick: function onClick() {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick('ok');
    }
  }, okText)))));
});
NumberKeyboardBase.displayName = 'UC-NumberKeyboardBase';
export default NumberKeyboardBase;
var templateObject_1, templateObject_2;