import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
var id = 0;
var circle = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n 0% {\n    stroke-dasharray: 0, 314; // 2piR\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 120, 314;\n    stroke-dashoffset: -37;\n  }\n\n \n  100% {\n    stroke-dasharray: 0, 314;\n    stroke-dashoffset: -157;\n  }\n"], ["\n 0% {\n    stroke-dasharray: 0, 314; // 2piR\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 120, 314;\n    stroke-dashoffset: -37;\n  }\n\n \n  100% {\n    stroke-dasharray: 0, 314;\n    stroke-dashoffset: -157;\n  }\n"])));
var StyledLoader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"])), circle, function (_a) {
  var $duration = _a.$duration;
  return $duration;
});
var SVGProps = {
  width: '1em',
  height: '1em',
  strokeWidth: 8,
  fill: 'none'
};
/** 转圈圈spin */

var BallSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.duration,
      duration = _a === void 0 ? 800 : _a,
      showCircle = props.showCircle,
      rest = __rest(props, ["className", "duration", "showCircle"]);

  var elRef = React.useRef();
  var idRef = React.useRef(id++);
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement(StyledLoader, __assign({
    ref: elRef,
    "$duration": duration
  }, rest, {
    className: clsx(className, 'uc-ball-spin')
  }), /*#__PURE__*/React.createElement("svg", __assign({
    viewBox: "0 0 120 120"
  }, SVGProps), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: idRef.current + '',
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    style: {
      stopOpacity: 1,
      stopColor: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    style: {
      stopOpacity: 0.7,
      stopColor: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    style: {
      stopOpacity: 0.1,
      stopColor: 'currentColor'
    }
  }))), /*#__PURE__*/React.createElement("circle", {
    className: "my-circle",
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "url(#".concat(idRef.current, ")"),
    strokeLinecap: "round",
    transform: "rotate(-180,60,60)"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "my-circle",
    r: "50",
    cx: "60",
    cy: "60",
    stroke: "url(#".concat(idRef.current, ")"),
    strokeLinecap: "round",
    transform: "rotate(0,60,60)"
  }), showCircle && /*#__PURE__*/React.createElement("circle", {
    r: "14",
    cx: "60",
    cy: "60",
    stroke: "currentColor"
  })));
});
BallSpin.displayName = 'UC-BallSpin';
export default BallSpin;
var templateObject_1, templateObject_2;