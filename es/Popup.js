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

import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Backdrop from './Backdrop';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 200;\n  transition: transform ", "ms ease;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transition: none;\n  }\n\n  @keyframes showUp {\n    from {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.9);\n    }\n    90% {\n      opacity: 0.9;\n      transform: translate(-50%, -50%) scale(1.01);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n  &.center-entering,\n  &.center-entered {\n    display: '';\n    animation: showUp ease ", "ms forwards;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    display: none;\n  }\n\n  &.no-trasition {\n    animation: none;\n    transition: none;\n  }\n"], ["\n  position: fixed;\n  z-index: 200;\n  transition: transform ", "ms ease;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transition: none;\n  }\n\n  @keyframes showUp {\n    from {\n      opacity: 0;\n      transform: translate(-50%, -50%) scale(0.9);\n    }\n    90% {\n      opacity: 0.9;\n      transform: translate(-50%, -50%) scale(1.01);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n  }\n  &.center-entering,\n  &.center-entered {\n    display: '';\n    animation: showUp ease ", "ms forwards;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    display: none;\n  }\n\n  &.no-trasition {\n    animation: none;\n    transition: none;\n  }\n"])), function (props) {
  return props.duration;
}, function (props) {
  return props.duration;
});
/** 弹框，可以从上，下，左，右，中间弹出 */

var Popup = function Popup(props) {
  var children = props.children,
      visible = props.visible,
      _a = props.backdrop,
      backdrop = _a === void 0 ? true : _a,
      backdropStyle = props.backdropStyle,
      onBackdropClick = props.onBackdropClick,
      _b = props.position,
      position = _b === void 0 ? 'bottom' : _b,
      _c = props.duration,
      duration = _c === void 0 ? 280 : _c,
      _d = props.mountContainer,
      mountContainer = _d === void 0 ? function () {
    return document.body;
  } : _d,
      style = props.style,
      className = props.className;
  var wrapRef = useRef();
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, backdrop && visible ? /*#__PURE__*/React.createElement(Backdrop, {
    style: backdropStyle,
    onClick: onBackdropClick
  }) : null, /*#__PURE__*/React.createElement(Transition, {
    in: visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StyledWrapper, {
      ref: wrapRef,
      duration: duration,
      style: style,
      className: clsx('uc-popup', className, position, status, position + '-' + status)
    }, children));
  })), mountContainer());
};

export default Popup;
var templateObject_1;