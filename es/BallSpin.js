import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n 0% {\n      transform: rotate(0);\n    }\n\n    100% {\n      transform: rotate(360);\n    }\n"], ["\n 0% {\n      transform: rotate(0);\n    }\n\n    100% {\n      transform: rotate(360);\n    }\n"])));
var circle = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n 0% {\n    stroke-dasharray: 1, 314; // 2piR\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 60, 314;\n    stroke-dashoffset: -97;\n  }\n\n  100% {\n    stroke-dasharray: 0, 314;\n    stroke-dashoffset: -157;\n  }\n"], ["\n 0% {\n    stroke-dasharray: 1, 314; // 2piR\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 60, 314;\n    stroke-dashoffset: -97;\n  }\n\n  100% {\n    stroke-dasharray: 0, 314;\n    stroke-dashoffset: -157;\n  }\n"])));
var StyledLoader = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  vertical-align: middle;\n  svg {\n    animation: ", " ", "ms linear infinite;\n    animation-fill-mode: backwards;\n  }\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n  svg {\n    animation: ", " ", "ms linear infinite;\n    animation-fill-mode: backwards;\n  }\n\n  .my-circle {\n    animation: ", " ", "ms linear infinite;\n  }\n"])), rotate, function (_a) {
  var $duration = _a.$duration;
  return $duration;
}, circle, function (_a) {
  var $duration = _a.$duration;
  return $duration;
});
var SVGProps = {
  width: '1.25em',
  height: '1.25em',
  strokeWidth: 8,
  fill: 'none'
};
/** 转圈圈spin */

var BallSpin = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.duration,
      duration = _a === void 0 ? 600 : _a,
      showCircle = props.showCircle,
      rest = __rest(props, ["className", "duration", "showCircle"]);

  var _b = React.useState(false),
      isWhite = _b[0],
      setIsWhite = _b[1];

  var elRef = React.useRef();
  var idRef = React.useRef(nanoid());
  React.useImperativeHandle(ref, function () {
    return elRef.current;
  }); // React.useEffect(() => {
  //   const el = elRef.current;
  //   const color = window.getComputedStyle(el).getPropertyValue('color');
  //   if (color === 'rgb(255, 255, 255)' || color === '#fff') {
  //     // setIsWhite(true);
  //   }
  // }, []);

  return /*#__PURE__*/React.createElement(StyledLoader, __assign({
    ref: elRef,
    "$duration": duration
  }, rest, {
    className: clsx(className, 'uc-ball-spin', {
      white: isWhite
    })
  }), /*#__PURE__*/React.createElement("svg", __assign({
    viewBox: "0 0 120 120"
  }, SVGProps), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: idRef.current,
    x1: "100%",
    y1: "0%",
    x2: "100%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    style: {
      stopOpacity: 1,
      stopColor: 'currentColor'
    }
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    style: {
      stopOpacity: 0.9,
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
    stroke: isWhite ? '#fff' : "url(#".concat(idRef.current, ")"),
    strokeLinecap: "round",
    transform: "rotate(-180,60,60)"
  }), /*#__PURE__*/React.createElement("circle", {
    className: "my-circle",
    r: "50",
    cx: "60",
    cy: "60",
    stroke: isWhite ? '#fff' : "url(#".concat(idRef.current, ")"),
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
var templateObject_1, templateObject_2, templateObject_3;