import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-circle-spin');

var ani = function ani(props) {
  return keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n0% {\n     stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: 0;\n   }\n\n   100% {\n    stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: -339;\n   }\n"], ["\n0% {\n     stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: 0;\n   }\n\n   100% {\n    stroke-dasharray: ", ",\n       ", ";\n     stroke-dashoffset: -339;\n   }\n"])), props.$percent * 339 / 100, 339 - props.$percent * 339 / 100, props.$percent * 339 / 100, 339 - props.$percent * 339 / 100);
};

var StyledLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .", " {\n    animation: ", " ", "ms linear infinite;\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .", " {\n    animation: ", " ", "ms linear infinite;\n  }\n"])), getClassName('circle'), function (props) {
  return ani(props);
}, function (_a) {
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
      _f = props.percent,
      percent = _f === void 0 ? 25 : _f,
      rest = __rest(props, ["className", "duration", "trackColor", "color", "size", "strokeWidth", "percent"]);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });

  if (typeof percent !== 'number' || percent <= 0 || percent >= 100) {
    throw new Error('percent 必须是0-100之间的数字');
  }

  return /*#__PURE__*/React.createElement(StyledLoader, __assign({
    ref: elRef,
    "$duration": duration,
    "$percent": percent
  }, rest, {
    className: clsx(className, getClassName())
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
    className: getClassName('circle'),
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