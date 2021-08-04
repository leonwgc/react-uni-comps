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

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
var StyledMask = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transition: opacity ", "ms ease-out 20ms;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n\n  &.entering,\n  &.entered {\n    background-color: rgba(0, 0, 0, 0.35);\n    opacity: 1;\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n    z-index: -1;\n  }\n"], ["\n  transition: opacity ", "ms ease-out 20ms;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n\n  &.entering,\n  &.entered {\n    background-color: rgba(0, 0, 0, 0.35);\n    opacity: 1;\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n    z-index: -1;\n  }\n"])), function (props) {
  return props.duration;
});
var StyledWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  transition: all ", "ms ease-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transform: translate(0, 0);\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    transform: translate(-50%, -50%) scale(0.2);\n    opacity: 0;\n  }\n"], ["\n  position: fixed;\n  transition: all ", "ms ease-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transform: translate(0, 0);\n  }\n\n  &.exiting,\n  &.exited {\n    opacity: 0;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(1);\n  }\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    transform: translate(-50%, -50%) scale(0.2);\n    opacity: 0;\n  }\n"])), function (props) {
  return props.duration;
});

var Popup = function Popup(_a) {
  var children = _a.children,
      visible = _a.visible,
      _b = _a.showMask,
      showMask = _b === void 0 ? true : _b,
      _c = _a.onMaskClick,
      onMaskClick = _c === void 0 ? null : _c,
      _d = _a.position,
      position = _d === void 0 ? 'bottom' : _d,
      _e = _a.duration,
      duration = _e === void 0 ? 240 : _e,
      _f = _a.mountContainer,
      mountContainer = _f === void 0 ? function () {
    return document.body;
  } : _f,
      _g = _a.style,
      style = _g === void 0 ? {} : _g,
      _h = _a.className,
      className = _h === void 0 ? '' : _h;
  var wrapRef = useRef();

  var clickMask = function clickMask(e) {
    if (e.target === e.currentTarget && typeof onMaskClick === 'function') {
      onMaskClick();
    }
  };

  useEffect(function () {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);
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
      style: style,
      className: "react-uni-comps-popup " + className + " " + position + " " + status + " " + position + "-" + status
    }, children));
  }), mountContainer());
};

export default Popup;
var templateObject_1, templateObject_2;