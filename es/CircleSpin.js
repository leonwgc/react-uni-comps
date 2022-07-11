import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
var move = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n 0% {\n    stroke-dasharray: 85, 254; \n    stroke-dashoffset: 0;\n  }\n \n  100% {\n    stroke-dasharray: 85, 254; \n    stroke-dashoffset: -339;\n  }\n"], ["\n 0% {\n    stroke-dasharray: 85, 254; \n    stroke-dashoffset: 0;\n  }\n \n  100% {\n    stroke-dasharray: 85, 254; \n    stroke-dashoffset: -339;\n  }\n"])));
var StyledLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"])), move, function (_a) {
  var $duration = _a.$duration;
  return $duration;
});
/** 圆圈spin */

var CircleSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.duration,
      duration = _a === void 0 ? 1000 : _a,
      _b = props.trackColor,
      trackColor = _b === void 0 ? '#d9d9d9' : _b,
      _c = props.color,
      color = _c === void 0 ? 'currentColor' : _c,
      _d = props.size,
      size = _d === void 0 ? 32 : _d,
      _e = props.strokeWidth,
      strokeWidth = _e === void 0 ? 8 : _e,
      rest = __rest(props, ["className", "duration", "trackColor", "color", "size", "strokeWidth"]);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement(StyledLoader, __assign({
    ref: elRef,
    "$duration": duration
  }, rest, {
    className: clsx(className, 'uc-circle-spin')
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: size,
    height: size,
    fill: "none",
    strokeWidth: Math.min(strokeWidth, 8)
  }, /*#__PURE__*/React.createElement("circle", {
    r: "54",
    cx: "60",
    cy: "60",
    stroke: trackColor
  }), /*#__PURE__*/React.createElement("circle", {
    className: "my-circle",
    r: "54",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeLinecap: "round",
    transform: "rotate(-90,60,60)"
  })));
});
CircleSpin.displayName = 'UC-CircleSpin';
export default CircleSpin;
var templateObject_1, templateObject_2;