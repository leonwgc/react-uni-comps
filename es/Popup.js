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
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.9);\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0) scale(0.9);\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.9);\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0) scale(0.9);\n    }\n  }\n"]))); // type MousePosition = {
//   x: number;
//   y: number;
// };
// let mousePosition: MousePosition = null;
// if (isBrowser) {
//   const getClickPosition = (e: MouseEvent) => {
//     mousePosition = {
//       x: e.pageX,
//       y: e.pageY,
//     };
//     setTimeout(() => {
//       mousePosition = null;
//     }, 100);
//   };
//   document.documentElement.addEventListener('click', getClickPosition, true);
// }

/** 弹框，可以从上，下，左，右，中间弹出 */

var Popup = function Popup(props) {
  var children = props.children,
      visible = props.visible,
      _a = props.mask,
      mask = _a === void 0 ? true : _a,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onMaskClick = props.onMaskClick,
      _b = props.position,
      position = _b === void 0 ? 'bottom' : _b,
      _c = props.duration,
      duration = _c === void 0 ? 160 : _c,
      mountContainer = props.mountContainer,
      style = props.style,
      className = props.className;
  var wrapRef = useRef(); // const lastMousePositionRef = useRef<MousePosition>();

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute'; // const resetTransformOrigin = useCallback(() => {
  //   const mousePosition = lastMousePositionRef.current;
  //   const dialogEl = wrapRef.current;
  //   if (
  //     mousePosition &&
  //     mousePosition.x >= 0 &&
  //     mousePosition.y >= 0 &&
  //     dialogEl &&
  //     dialogEl.getBoundingClientRect
  //   ) {
  //     const { left: x, top: y } = dialogEl.getBoundingClientRect();
  //     const origin = `${mousePosition.x - x}px ${mousePosition.y - y}px`;
  //     dialogEl.style.transformOrigin = origin;
  //   }
  // }, []);
  // useEffect(() => {
  //   if (!isMobile && position === 'center' && visible && !lastMousePositionRef.current) {
  //     lastMousePositionRef.current = lastMousePositionRef.current || mousePosition;
  //     resetTransformOrigin();
  //   }
  // }, [visible, position, resetTransformOrigin]);

  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-popup-container-' + position)
  }, mask && visible ? /*#__PURE__*/React.createElement(Mask, {
    className: maskClass,
    style: maskStyle,
    onClick: onMaskClick
  }) : null, /*#__PURE__*/React.createElement(Transition, {
    in: visible,
    timeout: duration
  }, function (status) {
    return /*#__PURE__*/React.createElement(StyledWrapper, {
      ref: wrapRef,
      style: __assign(__assign({}, style), {
        position: showPosition,
        transitionDuration: duration + 'ms'
      }),
      className: clsx('uc-popup-wrap', className, position, status, position + '-' + status, {
        mobile: isMobile,
        pc: !isMobile
      })
    }, children);
  })), mountNode);
};

export default Popup;
var templateObject_1;