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
import * as vars from './vars';
import { isMobile } from './dom';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';
var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff;\n\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  &.has-label {\n    padding-left: 12px;\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n    font-size: 14px;\n    line-height: 24px;\n\n    &.pc {\n      align-items: center;\n    }\n\n    .cell-label {\n      box-sizing: border-box;\n      text-align: left;\n      flex: 1;\n\n      .label {\n        color: #333;\n\n        &.required::before {\n          content: '*';\n          margin-right: 2px;\n          color: ", ";\n          vertical-align: middle;\n        }\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n        font-size: 12px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"], ["\n  background-color: #fff;\n\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  &.has-label {\n    padding-left: 12px;\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n    font-size: 14px;\n    line-height: 24px;\n\n    &.pc {\n      align-items: center;\n    }\n\n    .cell-label {\n      box-sizing: border-box;\n      text-align: left;\n      flex: 1;\n\n      .label {\n        color: #333;\n\n        &.required::before {\n          content: '*';\n          margin-right: 2px;\n          color: ", ";\n          vertical-align: middle;\n        }\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n        font-size: 12px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"])), vars.activeBg, vars.danger);
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var title = props.title,
      required = props.required,
      label = props.label,
      labelWidth = props.labelWidth,
      description = props.description,
      className = props.className,
      content = props.content,
      _a = props.lineColor,
      lineColor = _a === void 0 ? vars.border : _a,
      children = props.children,
      rest = __rest(props, ["title", "required", "label", "labelWidth", "description", "className", "content", "lineColor", "children"]);

  if (content && children) {
    throw new Error("Cell: \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6Econtent\u548C\u5B50\u5143\u7D20");
  }

  var hasInput = !!children;
  var hasLabel = label || title;
  var hasContent = content || children;
  return /*#__PURE__*/React.createElement(StyledCell, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-cell', className, {
      'clickable': typeof rest.onClick === 'function',
      'has-label': hasLabel
    })
  }), /*#__PURE__*/React.createElement(HairLineBox, {
    color: lineColor,
    className: "cell-line"
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('cell-inner', {
      mobile: isMobile,
      pc: !isMobile
    })
  }, hasLabel && /*#__PURE__*/React.createElement("div", {
    className: clsx('cell-label', {
      input: hasInput
    }),
    style: {
      width: labelWidth
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: clsx('label', {
      required: required
    })
  }, label || title), description && /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, description)), hasContent && /*#__PURE__*/React.createElement("div", {
    className: clsx('cell-content', {
      input: hasInput
    })
  }, content, children))));
});
Cell.displayName = 'UC-Cell';
export default Cell;
var templateObject_1;