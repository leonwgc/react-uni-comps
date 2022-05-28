import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useRef, forwardRef, useImperativeHandle, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile, isBrowser } from './dom';
import clsx from 'clsx';
import { animationFast } from './vars';
import useMount from './hooks/useMount';
import useForceUpdate from './hooks/useForceUpdate';
import { getMountContainer } from './helper';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  background-color: #fff;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.4);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.4);\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  background-color: #fff;\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n  }\n\n  &.entering,\n  &.entered {\n    transition-timing-function: ease-out;\n    transform: none;\n    visibility: visible;\n  }\n\n  &.exiting {\n    transition-timing-function: ease-in;\n  }\n\n  &.exited {\n    visibility: hidden;\n  }\n\n  &.bottom-exited,\n  &.bottom-exiting {\n    transform: translate(0, 100%);\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.left-exited,\n  &.left-exiting {\n    transform: translate(-100%, 0);\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  &.right-exited,\n  &.right-exiting {\n    transform: translate(100%, 0);\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  &.top-exited,\n  &.top-exiting {\n    transform: translate(0, -100%);\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 200px;\n      transform: translate(-50%, 0);\n    }\n  }\n\n  &.center-entering,\n  &.center-entered {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n\n  &.center-exited,\n  &.center-exiting {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.4);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.4);\n    }\n  }\n"])));
var mousePosition = null;

if (isBrowser) {
  var getClickPosition = function getClickPosition(e) {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
    setTimeout(function () {
      mousePosition = null;
    }, 100);
  };

  document.documentElement.addEventListener('click', getClickPosition, true);
}
/**
 *
 * 弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */


var Popup = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
      visible = props.visible,
      onClose = props.onClose,
      _a = props.closeOnMaskClick,
      closeOnMaskClick = _a === void 0 ? true : _a,
      _b = props.mask,
      mask = _b === void 0 ? true : _b,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      _c = props.position,
      position = _c === void 0 ? 'bottom' : _c,
      _d = props.duration,
      duration = _d === void 0 ? animationFast : _d,
      _e = props.flip,
      flip = _e === void 0 ? true : _e,
      _f = props.mountContainer,
      mountContainer = _f === void 0 ? document.body : _f,
      _g = props.unmountOnExit,
      unmountOnExit = _g === void 0 ? true : _g,
      style = props.style,
      className = props.className,
      rest = __rest(props, ["children", "visible", "onClose", "closeOnMaskClick", "mask", "maskStyle", "maskClass", "position", "duration", "flip", "mountContainer", "unmountOnExit", "style", "className"]);

  var wrapRef = useRef();
  var maskRef = useRef();
  useImperativeHandle(ref, function () {
    return wrapRef.current;
  });
  var forceUpdate = useForceUpdate();
  var mountNode = getMountContainer(mountContainer);
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute';
  useMount(function () {
    // fix container render at the same time / but not ready
    if (!mountNode) {
      forceUpdate();
    }
  });
  var setTransformOrigin = useCallback(function (mousePosition) {
    var dialogEl = wrapRef.current;

    if (mousePosition && mousePosition.x >= 0 && mousePosition.y >= 0 && dialogEl && dialogEl.getBoundingClientRect) {
      var _a = dialogEl.getBoundingClientRect(),
          x = _a.left,
          y = _a.top;

      var origin = "".concat(mousePosition.x - x, "px ").concat(mousePosition.y - y, "px 0");
      dialogEl.style.transformOrigin = origin;
      dialogEl.style.transitionDuration = '0s'; // flip: hey yoo reflow

      document.body.offsetHeight;
      dialogEl.style.transitionDuration = duration + 'ms';
    } else {
      setTimeout(function () {
        if (dialogEl) {
          dialogEl.style.transformOrigin = 'unset';
        }
      }, duration);
    }
  }, [duration]);
  useLayoutEffect(function () {
    if (!isMobile && position === 'center' && flip) {
      if (visible) {
        setTransformOrigin(mousePosition);
      } else {
        setTransformOrigin(null);
      }
    }
  }, [visible, position, setTransformOrigin, flip]);
  useLayoutEffect(function () {
    if (mask && visible && maskRef.current) {
      var wrapZIndex = window.getComputedStyle(wrapRef.current, null).getPropertyValue('z-index');

      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);
  return mountNode ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", __assign({}, rest), /*#__PURE__*/React.createElement(Mask, {
    visible: visible && mask,
    ref: maskRef,
    className: maskClass,
    duration: duration,
    style: __assign({
      position: showPosition
    }, maskStyle),
    onClick: function onClick() {
      return closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React.createElement(Transition, {
    in: visible,
    timeout: duration,
    unmountOnExit: unmountOnExit
  }, function (status) {
    return /*#__PURE__*/React.createElement(StyledWrapper, {
      ref: wrapRef,
      style: __assign(__assign({}, style), {
        position: showPosition,
        transitionDuration: duration + 'ms'
      }),
      className: clsx('uc-popup', className, position, status, position + '-' + status, {
        mobile: isMobile,
        pc: !isMobile
      })
    }, children);
  })), mountNode) : null;
});
Popup.displayName = 'UC-Popup';
export default Popup;
var templateObject_1;