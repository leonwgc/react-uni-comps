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
import { getThemeColorCss } from './themeHelper';
var StyledBadge = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n\n  .badge {\n    display: inline-block;\n    color: #fff;\n    text-align: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-radius: 100px;\n    padding: 2px 4px;\n    font-size: 9px;\n    line-height: 1.2;\n    white-space: nowrap;\n    position: absolute;\n    z-index: 1;\n    transform: translate(50%, -50%);\n    top: 0;\n    right: 0;\n    ", "\n\n    &.dot {\n      padding: 0;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n    }\n    &.without-children {\n      position: static;\n      transform: none;\n    }\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n\n  .badge {\n    display: inline-block;\n    color: #fff;\n    text-align: center;\n    vertical-align: middle;\n    box-sizing: border-box;\n    border-radius: 100px;\n    padding: 2px 4px;\n    font-size: 9px;\n    line-height: 1.2;\n    white-space: nowrap;\n    position: absolute;\n    z-index: 1;\n    transform: translate(50%, -50%);\n    top: 0;\n    right: 0;\n    ", "\n\n    &.dot {\n      padding: 0;\n      width: 10px;\n      height: 10px;\n      border-radius: 50%;\n    }\n    &.without-children {\n      position: static;\n      transform: none;\n    }\n  }\n"])), getThemeColorCss('background-color'));
/** 徽标:右上角添加标记 */

var Badge = function Badge(props) {
  var children = props.children,
      className = props.className,
      content = props.content,
      badgeStyle = props.badgeStyle,
      rest = __rest(props, ["children", "className", "content", "badgeStyle"]);

  return /*#__PURE__*/React.createElement(StyledBadge, __assign({}, rest, {
    className: clsx('uc-badge', className)
  }), children, /*#__PURE__*/React.createElement("div", {
    className: clsx('badge', {
      'dot': !content,
      'without-children': !children
    }),
    style: badgeStyle
  }, content));
};

Badge.displayName = 'UC-Badge';
export default Badge;
var templateObject_1;