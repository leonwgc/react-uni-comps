import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-sync-loader');

var normalizePx = function normalizePx(n) {
  if (typeof n === 'number') {
    return n + 'px';
  } else {
    return n;
  }
};

var StyledLoader = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n\n  @keyframes ", " {\n    25% {\n      transform: translateY(-1.2em);\n    }\n\n    50% {\n      transform: translateY(0px);\n    }\n\n    75% {\n      transform: translateY(1.2em);\n    }\n\n    100% {\n      transform: translateY(0px);\n    }\n  }\n\n  .", " {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: ", "ms linear ", "ms\n      ", " normal both running ", ";\n\n    &:nth-child(2) {\n      animation-delay: ", "ms;\n    }\n\n    &:nth-child(3) {\n      animation-delay: ", "ms;\n    }\n\n    &:not(:first-child) {\n      margin-left: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n\n  @keyframes ", " {\n    25% {\n      transform: translateY(-1.2em);\n    }\n\n    50% {\n      transform: translateY(0px);\n    }\n\n    75% {\n      transform: translateY(1.2em);\n    }\n\n    100% {\n      transform: translateY(0px);\n    }\n  }\n\n  .", " {\n    width: 1em;\n    height: 1em;\n    border-radius: 50%;\n    animation: ", "ms linear ", "ms\n      ", " normal both running ", ";\n\n    &:nth-child(2) {\n      animation-delay: ", "ms;\n    }\n\n    &:nth-child(3) {\n      animation-delay: ", "ms;\n    }\n\n    &:not(:first-child) {\n      margin-left: ", ";\n    }\n  }\n"])), getClassName('ball'), getClassName('item'), function (_a) {
  var $duration = _a.$duration;
  return $duration;
}, function (_a) {
  var $duration = _a.$duration;
  return $duration * 0.2;
}, function (_a) {
  var $iterationCount = _a.$iterationCount;
  return $iterationCount;
}, getClassName('ball'), function (_a) {
  var $duration = _a.$duration;
  return $duration * 0.4;
}, function (_a) {
  var $duration = _a.$duration;
  return $duration * 0.6;
}, function (_a) {
  var $gap = _a.$gap;
  return normalizePx($gap);
});
/** 加载指示器,三个跳动的小球 */

var SyncLoader = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _a = props.size,
      size = _a === void 0 ? 3 : _a,
      _b = props.gap,
      gap = _b === void 0 ? 4 : _b,
      _c = props.duration,
      duration = _c === void 0 ? 600 : _c,
      _d = props.iterationCount,
      iterationCount = _d === void 0 ? 1 : _d,
      _e = props.color,
      color = _e === void 0 ? '#d9d9d9' : _e,
      rest = __rest(props, ["className", "style", "size", "gap", "duration", "iterationCount", "color"]);

  return /*#__PURE__*/React.createElement(StyledLoader, __assign({}, rest, {
    ref: ref,
    "$gap": gap,
    "$duration": duration,
    "$iterationCount": iterationCount,
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
SyncLoader.displayName = 'UC-SyncLoader';
export default SyncLoader;
var templateObject_1;