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

import React from 'react';
import styled from 'styled-components';
import HairLineBox from './HairLineBox';
var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .cell__title {\n    box-sizing: border-box;\n    width: 6.2em;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n  }\n  .cell__value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .field__body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .cell__title {\n    box-sizing: border-box;\n    width: 6.2em;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n  }\n  .cell__value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .field__body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"])));
/** 列表项，通常用于移动端 */

var Cell = function Cell(_a) {
  var label = _a.label,
      content = _a.content,
      _b = _a.lineColor,
      lineColor = _b === void 0 ? '#dcdcdc' : _b,
      children = _a.children;

  if (content && children) {
    throw new Error("don't set content and children at the same time");
  }

  return /*#__PURE__*/React.createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React.createElement(StyledCell, null, /*#__PURE__*/React.createElement("div", {
    className: "cell__title"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("div", {
    className: "cell__value"
  }, /*#__PURE__*/React.createElement("span", null, content), children ? /*#__PURE__*/React.createElement("div", {
    className: "field__body"
  }, children) : null)));
};

export default Cell;
var templateObject_1;