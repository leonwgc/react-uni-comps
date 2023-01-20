import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import * as vars from './vars';
import HairLineBox from './HairLineBox';
import clsx from 'clsx';
var StyledCell = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  padding-left: 12px;\n\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n\n    .cell-label {\n      box-sizing: border-box;\n      text-align: left;\n      flex: 1;\n\n      .label {\n        color: #333;\n\n        &.required::before {\n          content: attr(data-required);\n          margin-right: 2px;\n          color: ", ";\n          vertical-align: middle;\n        }\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n        font-size: 12px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"], ["\n  background: #fff;\n  padding-left: 12px;\n\n  &.clickable {\n    &:active {\n      background-color: ", ";\n    }\n  }\n\n  .cell-inner {\n    position: relative;\n    display: flex;\n    box-sizing: border-box;\n    width: 100%;\n    padding: 10px 12px 10px 0;\n    overflow: hidden;\n\n    .cell-label {\n      box-sizing: border-box;\n      text-align: left;\n      flex: 1;\n\n      .label {\n        color: #333;\n\n        &.required::before {\n          content: attr(data-required);\n          margin-right: 2px;\n          color: ", ";\n          vertical-align: middle;\n        }\n      }\n\n      .description {\n        color: #999;\n        margin-top: 4px;\n        line-height: 18px;\n        font-size: 12px;\n      }\n\n      &.input {\n        word-wrap: break-word;\n        width: 6.2em;\n        flex: none;\n      }\n    }\n    .cell-content {\n      flex: 1;\n      position: relative;\n      overflow: visible;\n      color: #999;\n      text-align: right;\n      vertical-align: middle;\n      word-wrap: break-word;\n\n      &.input {\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n"])), vars.activeBg, vars.danger);
/** 列表项，通常用于移动端 */

var Cell = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var title = props.title,
      required = props.required,
      label = props.label,
      description = props.description,
      className = props.className,
      content = props.content,
      _a = props.lineColor,
      lineColor = _a === void 0 ? vars.border : _a,
      labelStyle = props.labelStyle,
      children = props.children,
      rest = __rest(props, ["title", "required", "label", "description", "className", "content", "lineColor", "labelStyle", "children"]);

  if (content && children) {
    throw new Error("Cell: \u4E0D\u80FD\u540C\u65F6\u8BBE\u7F6Econtent\u548C\u5B50\u5143\u7D20");
  }

  var hasInput = !!children;
  var hasLabel = label || title;
  var hasContent = content || children;
  var dataRequired = required ? typeof required === 'boolean' ? '*' : required : undefined;
  return /*#__PURE__*/React.createElement(StyledCell, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-cell', className, {
      clickable: typeof rest.onClick === 'function'
    })
  }), /*#__PURE__*/React.createElement(HairLineBox, {
    color: lineColor
  }, /*#__PURE__*/React.createElement("div", {
    className: clsx('cell-inner')
  }, hasLabel && /*#__PURE__*/React.createElement("div", {
    className: clsx('cell-label', {
      input: hasInput
    }),
    style: labelStyle
  }, /*#__PURE__*/React.createElement("span", {
    "data-required": dataRequired,
    className: clsx('label', {
      required: !!required
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