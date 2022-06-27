import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { useTheme } from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
var StyledProgressCircle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"], ["\n  position: relative;\n  .content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n"])));
/** 环形进度条 */

var ProgressCircle = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.percent,
      percent = _a === void 0 ? 0 : _a,
      _b = props.strokeLinecap,
      strokeLinecap = _b === void 0 ? 'round' : _b,
      _c = props.strokeWidth,
      strokeWidth = _c === void 0 ? 10 : _c,
      _d = props.size,
      size = _d === void 0 ? 60 : _d,
      className = props.className,
      style = props.style,
      rest = __rest(props, ["children", "percent", "strokeLinecap", "strokeWidth", "size", "className", "style"]);

  var theme = useTheme() || {};
  var color = props.color || theme.color || vars.primary;
  return /*#__PURE__*/React.createElement(StyledProgressCircle, __assign({
    className: clsx(className, 'uc-progress-circle'),
    style: __assign(__assign({}, style), {
      width: size,
      height: size
    })
  }, rest, {
    ref: ref
  }), /*#__PURE__*/React.createElement("svg", {
    height: size,
    width: size,
    viewBox: "0 0 120 120",
    "x-mlns": "http://www.w3.org/200/svg"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "#d9d9d9",
    strokeWidth: strokeWidth,
    fill: "none"
  }), percent > 0 ? /*#__PURE__*/React.createElement("circle", {
    r: "50",
    cx: "60",
    cy: "60",
    stroke: color,
    strokeDasharray: "".concat(percent * 314 / 100, ",314"),
    strokeWidth: strokeWidth,
    fill: "none",
    transform: "rotate(-90,60,60)",
    strokeLinecap: strokeLinecap,
    style: {
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s"
    }
  }) : null), children && /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, children));
});
ProgressCircle.displayName = 'UC-ProgressCircle';
export default ProgressCircle;
var templateObject_1;