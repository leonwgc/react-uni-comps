import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
var circle = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    0% {\n        stroke-dasharray: 1,200;\n        stroke-dashoffset: 0\n    }\n\n    50% {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -40\n    }\n\n    to {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -120\n    }\n"], ["\n    0% {\n        stroke-dasharray: 1,200;\n        stroke-dashoffset: 0\n    }\n\n    50% {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -40\n    }\n\n    to {\n        stroke-dasharray: 90,150;\n        stroke-dashoffset: -120\n    }\n"])));
var rotate = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n   0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"], ["\n   0% {\n        transform: rotate(0)\n    }\n\n    to {\n        transform: rotate(360deg)\n    }\n"])));
var SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'none'
};
var StyledLoader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n  animation: ", " 2s linear infinite;\n\n  svg {\n    circle {\n      animation: ", " 1.5s ease-in-out infinite;\n    }\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n  animation: ", " 2s linear infinite;\n\n  svg {\n    circle {\n      animation: ", " 1.5s ease-in-out infinite;\n    }\n  }\n"])), rotate, circle);
/** 圈圈 spin */

var RoundSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      _a = props.size,
      size = _a === void 0 ? 30 : _a,
      _b = props.color,
      color = _b === void 0 ? 'currentColor' : _b,
      _c = props.strokeWidth,
      strokeWidth = _c === void 0 ? 3 : _c,
      rest = __rest(props, ["className", "style", "size", "color", "strokeWidth"]);

  var elRef = React.useRef();
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement(StyledLoader, __assign({}, rest, {
    style: __assign({
      fontSize: size
    }, style),
    ref: elRef,
    className: clsx(className, 'uc-round-spin')
  }), /*#__PURE__*/React.createElement("svg", __assign({}, SVGProps, {
    stroke: color,
    viewBox: "25 25 50 50"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    strokeLinecap: "round",
    style: {
      strokeWidth: strokeWidth
    }
  })));
});
RoundSpin.displayName = 'UC-RoundSpin';
export default RoundSpin;
var templateObject_1, templateObject_2, templateObject_3;