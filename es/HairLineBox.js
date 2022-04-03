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
import { isMobile } from './dom';
import clsx from 'clsx';
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  &.mobile {\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-radius: ", "px;\n      ", ": 1px solid ", ";\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  &.pc {\n    border-radius: ", "px;\n    ", ": 1px solid ", ";\n  }\n"], ["\n  position: relative;\n\n  &.mobile {\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-radius: ", "px;\n      ", ": 1px solid ", ";\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  &.pc {\n    border-radius: ", "px;\n    ", ": 1px solid ", ";\n  }\n"])), function (_a) {
  var borderRadius = _a.borderRadius;
  return borderRadius;
}, function (_a) {
  var position = _a.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_a) {
  var $color = _a.$color;
  return $color;
}, function (_a) {
  var borderRadius = _a.borderRadius;
  return borderRadius;
}, function (_a) {
  var position = _a.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_a) {
  var $color = _a.$color;
  return $color;
});
/** 移动端1像素边框容器 */

var HairLineBox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.position,
      position = _a === void 0 ? 'bottom' : _a,
      _b = props.borderRadius,
      borderRadius = _b === void 0 ? 0 : _b,
      _c = props.color,
      color = _c === void 0 ? '#dcdcdc' : _c,
      className = props.className,
      _d = props.mobile,
      mobile = _d === void 0 ? true : _d,
      children = props.children,
      rest = __rest(props, ["position", "borderRadius", "color", "className", "mobile", "children"]);

  return /*#__PURE__*/React.createElement(StyledDiv, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-hairlinebox', className, {
      mobile: isMobile,
      pc: !isMobile && !mobile
    }),
    position: position,
    "$color": color,
    borderRadius: borderRadius
  }), children);
});
HairLineBox.displayName = 'UC-HairLineBox';
export default HairLineBox;
var templateObject_1;