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
import HairLineBox from './HairLineBox';
import clsx from 'clsx';
var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .uc-cell-title {\n    box-sizing: border-box;\n    width: 6.2em;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n\n    &.not-edit-mode {\n      width: auto;\n      flex: 1;\n    }\n  }\n  .uc-cell-value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .uc-field-body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"], ["\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 10px 16px;\n  overflow: hidden;\n  color: #323233;\n  font-size: 14px;\n  line-height: 24px;\n  background-color: #fff;\n\n  .uc-cell-title {\n    box-sizing: border-box;\n    width: 6.2em;\n    margin-right: 12px;\n    text-align: left;\n    word-wrap: break-word;\n\n    &.not-edit-mode {\n      width: auto;\n      flex: 1;\n    }\n  }\n  .uc-cell-value {\n    flex: 1;\n    position: relative;\n    overflow: visible;\n    color: #969799;\n    text-align: right;\n    vertical-align: middle;\n    word-wrap: break-word;\n\n    .uc-field-body {\n      display: flex;\n      align-items: center;\n\n      > input,\n      textarea {\n        display: block;\n        box-sizing: border-box;\n        flex: 1;\n        width: 100%;\n        min-width: 0;\n        margin: 0;\n        padding: 0;\n        color: #323233;\n        line-height: inherit;\n        text-align: left;\n        background-color: transparent;\n        border: 0;\n        resize: none;\n        outline: none;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-appearance: none;\n        box-shadow: none;\n        padding-right: 4px;\n      }\n      > textarea {\n        resize: none;\n        word-break: break-all;\n        word-wrap: break-word;\n\n        & + * {\n          align-self: flex-end;\n        }\n      }\n    }\n  }\n"])));
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var label = props.label,
      content = props.content,
      _a = props.lineColor,
      lineColor = _a === void 0 ? '#dcdcdc' : _a,
      children = props.children,
      rest = __rest(props, ["label", "content", "lineColor", "children"]);

  if (content && children) {
    throw new Error("don't set content and children at the same time");
  }

  var titleClsx = clsx('uc-cell-title', {
    'not-edit-mode': content
  });
  return /*#__PURE__*/React.createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React.createElement(StyledCell, __assign({
    ref: ref,
    className: "uc-cell"
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: titleClsx
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "uc-cell-value"
  }, content, children ? /*#__PURE__*/React.createElement("div", {
    className: "uc-field-body"
  }, children) : null)));
});
Cell.displayName = 'UC-Cell';
export default Cell;
var templateObject_1;