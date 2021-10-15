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
var StyledSkeletonBase = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"], ["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.animate,
      animate = _a === void 0 ? true : _a,
      width = props.width,
      _b = props.height,
      height = _b === void 0 ? 16 : _b,
      _c = props.shape,
      shape = _c === void 0 ? 'rect' : _c,
      other = __rest(props, ["animate", "width", "height", "shape"]);

  var _d = other.style,
      style = _d === void 0 ? {} : _d,
      _e = other.className,
      className = _e === void 0 ? '' : _e,
      rest = __rest(other, ["style", "className"]);

  return /*#__PURE__*/React.createElement(StyledSkeletonBase, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-skeleton', shape, {
      pulse: animate
    }, className),
    style: __assign({
      width: width,
      height: height
    }, style)
  }));
});
SkeletonBase.displayName = 'UC-SkeletonBase';
export default SkeletonBase;
var templateObject_1;