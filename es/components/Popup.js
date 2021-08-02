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

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Styled from 'styled-components';
var StyledMask = Styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    transition: opacity ", "ms ease-in-out 20ms;\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n\n    &.entering ,&.entered{\n      background-color: rgba(0, 0, 0, 0.35);\n      opacity: 1;\n    }\n\n    &.exiting,&.exited{\n      opacity: 0;\n      z-index: -1;\n    }\n"], ["\n    transition: opacity ", "ms ease-in-out 20ms;\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    right: 0;\n\n    &.entering ,&.entered{\n      background-color: rgba(0, 0, 0, 0.35);\n      opacity: 1;\n    }\n\n    &.exiting,&.exited{\n      opacity: 0;\n      z-index: -1;\n    }\n"])), function (props) {
  return props.duration;
});
var StyledWrapper = Styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n position: fixed;\n transition: all ", "ms ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n\n  &.entering,&.entered{\n    transform: translate(0, 0);\n  }\n\n  &.exiting,&.exited{\n    opacity:0;\n  }\n\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position:absolute;\n    top:50%;\n    left:50%;\n      transform:translate(-50%,-50%) scale(1);\n  }\n  &.center-entering,\n  &.center-entered {\n    transform:translate(-50%,-50%) scale(1);\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    transform:translate(-50%,-50%) scale(0.2);\n    opacity: 0;\n  }\n"], ["\n position: fixed;\n transition: all ", "ms ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n\n  &.entering,&.entered{\n    transform: translate(0, 0);\n  }\n\n  &.exiting,&.exited{\n    opacity:0;\n  }\n\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position:absolute;\n    top:50%;\n    left:50%;\n      transform:translate(-50%,-50%) scale(1);\n  }\n  &.center-entering,\n  &.center-entered {\n    transform:translate(-50%,-50%) scale(1);\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    transform:translate(-50%,-50%) scale(0.2);\n    opacity: 0;\n  }\n"])), function (props) {
  return props.duration;
});

var Popup = function Popup(_a) {
  var children = _a.children,
      visible = _a.visible,
      _b = _a.width,
      width = _b === void 0 ? '100%' : _b,
      _c = _a.showMask,
      showMask = _c === void 0 ? true : _c,
      _d = _a.onMaskClick,
      onMaskClick = _d === void 0 ? null : _d,
      _e = _a.position,
      position = _e === void 0 ? 'bottom' : _e,
      _f = _a.duration,
      duration = _f === void 0 ? 240 : _f,
      _g = _a.mountContainer,
      mountContainer = _g === void 0 ? function () {
    return document.body;
  } : _g,
      _h = _a.style,
      style = _h === void 0 ? {} : _h;
  var wrapRef = useRef();

  var popStyle = __assign(__assign({}, style), {
    width: width
  });

  var clickMask = function clickMask(e) {
    if (e.target === e.currentTarget && typeof onMaskClick === 'function') {
      onMaskClick();
    }
  };

  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(Transition, {
    in: visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React.createElement("div", null, showMask ? /*#__PURE__*/React.createElement(StyledMask, {
      duration: duration,
      className: status,
      onClick: clickMask
    }) : null, /*#__PURE__*/React.createElement(StyledWrapper, {
      ref: wrapRef,
      duration: duration,
      style: popStyle,
      className: position + " " + status + " " + position + "-" + status
    }, children));
  }), mountContainer());
};

export default Popup;
var templateObject_1, templateObject_2;