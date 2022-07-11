import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';
import styled, { keyframes } from 'styled-components';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-dot-spin');

var normalizePx = function normalizePx(n) {
  if (typeof n === 'number') {
    return n + 'px';
  } else {
    return n;
  }
};

var dance = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n      transform: translateY(0);\n    }\n\n    25% {\n      transform: translateY(-1em);\n    }\n\n    50% {\n      transform: translateY(0);\n    }\n\n    75% {\n      transform: translateY(1em);\n    }\n\n    100% {\n      transform: translateY(0);\n    }\n"], ["\n    0% {\n      transform: translateY(0);\n    }\n\n    25% {\n      transform: translateY(-1em);\n    }\n\n    50% {\n      transform: translateY(0);\n    }\n\n    75% {\n      transform: translateY(1em);\n    }\n\n    100% {\n      transform: translateY(0);\n    }\n"])));
var StyledLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .", " {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: 600ms linear 200ms ", " normal both running ", ";\n\n    &:nth-child(2) {\n      animation-delay: 360ms;\n    }\n\n    &:nth-child(3) {\n      animation-delay: 520ms;\n    }\n\n    &:not(:first-child) {\n      margin-left: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .", " {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: 600ms linear 200ms ", " normal both running ", ";\n\n    &:nth-child(2) {\n      animation-delay: 360ms;\n    }\n\n    &:nth-child(3) {\n      animation-delay: 520ms;\n    }\n\n    &:not(:first-child) {\n      margin-left: ", ";\n    }\n  }\n"])), getClassName('item'), function (_a) {
  var $iteration = _a.$iteration;
  return $iteration;
}, dance, function (_a) {
  var $gap = _a.$gap;
  return normalizePx($gap);
});
/** 加载指示器,三个跳动的小球 */

var DotSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _a = props.size,
      size = _a === void 0 ? 3 : _a,
      _b = props.gap,
      gap = _b === void 0 ? 4 : _b,
      _c = props.iteration,
      iteration = _c === void 0 ? 1 : _c,
      _d = props.color,
      color = _d === void 0 ? '#d9d9d9' : _d,
      rest = __rest(props, ["className", "style", "size", "gap", "iteration", "color"]);

  return /*#__PURE__*/React.createElement(StyledLoader, __assign({}, rest, {
    ref: ref,
    "$gap": gap,
    "$iteration": iteration,
    className: clsx(className, getClassName()),
    style: __assign({
      fontSize: size
    }, style)
  }), [1, 2, 3].map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item,
      className: getClassName('item'),
      style: {
        background: color
      }
    });
  }));
});
DotSpin.displayName = 'UC-DotSpin';
export default DotSpin;
var templateObject_1, templateObject_2;