import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
var radius = 31;
var duration = 1500;
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0%{\n        transform: rotate(0);\n    }\n    100%{\n        transform: rotate(360deg);\n    }\n"], ["\n    0%{\n        transform: rotate(0);\n    }\n    100%{\n        transform: rotate(360deg);\n    }\n"])));
var move = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n      stroke-dasharray: 1, 200;\n      stroke-dashoffset: 0;\n    }\n\n    50% {\n      stroke-dasharray: 120, 200;\n      stroke-dashoffset: -60;\n    }\n\n    100% {\n      stroke-dasharray: 120, 200;\n      stroke-dashoffset: -180;\n    }\n"], ["\n  0% {\n      stroke-dasharray: 1, 200;\n      stroke-dashoffset: 0;\n    }\n\n    50% {\n      stroke-dasharray: 120, 200;\n      stroke-dashoffset: -60;\n    }\n\n    100% {\n      stroke-dasharray: 120, 200;\n      stroke-dashoffset: -180;\n    }\n"])));
var StyledLoader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n  transform: rotate(-90deg);\n  animation: ", " 2s linear infinite;\n  width: 1em;\n  height: 1em;\n\n  svg {\n    animation: ", " ", "ms ease-in-out infinite;\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n  transform: rotate(-90deg);\n  animation: ", " 2s linear infinite;\n  width: 1em;\n  height: 1em;\n\n  svg {\n    animation: ", " ", "ms ease-in-out infinite;\n  }\n"])), rotate, move, function (_a) {
  var $duration = _a.$duration;
  return $duration;
});
/** 圈圈 spin */

var RoundSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.color,
      color = _a === void 0 ? 'currentColor' : _a,
      _b = props.strokeWidth,
      strokeWidth = _b === void 0 ? 5 : _b,
      rest = __rest(props, ["className", "color", "strokeWidth"]);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement(StyledLoader, __assign({}, rest, {
    ref: elRef,
    "$duration": duration,
    className: clsx(className, 'uc-round-spin')
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "".concat(radius, " ").concat(radius, " ").concat(radius * 2, " ").concat(radius * 2)
  }, /*#__PURE__*/React.createElement("circle", {
    cx: radius * 2,
    cy: radius * 2,
    r: radius - strokeWidth / 2,
    stroke: color,
    fill: "none",
    strokeLinecap: "round",
    style: {
      strokeWidth: strokeWidth
    }
  })));
});
RoundSpin.displayName = 'UC-RoundSpin';
export default RoundSpin;
var templateObject_1, templateObject_2, templateObject_3;