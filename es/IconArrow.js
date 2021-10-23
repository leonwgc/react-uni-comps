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
var StyledArrow = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"])));
/** 箭头 */

var IconArrow = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var _b = props.color,
      color = _b === void 0 ? 'currentColor' : _b,
      style = props.style,
      _c = props.direction,
      direction = _c === void 0 ? 'bottom' : _c,
      className = props.className,
      _d = props.size,
      size = _d === void 0 ? 16 : _d,
      rest = __rest(props, ["color", "style", "direction", "className", "size"]);

  return /*#__PURE__*/React.createElement(StyledArrow, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-icon-arrow', className, (_a = {}, _a[direction] = direction, _a)),
    style: __assign(__assign({}, style), {
      width: size,
      height: size
    })
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
});
IconArrow.displayName = 'UC-IconArrow';
export default IconArrow;
var templateObject_1;