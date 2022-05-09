import { __assign, __makeTemplateObject } from "tslib";
import React, { useRef, forwardRef, useImperativeHandle, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile } from './dom';
import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/web';
import useUnmount from './hooks/useUnmount';
var StyledWrapper = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: #fff;\n  position: fixed;\n  z-index: 200;\n\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0);\n    }\n  }\n"], ["\n  background-color: #fff;\n  position: fixed;\n  z-index: 200;\n\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0);\n    }\n  }\n"])));
/**
 *
 * Spring动画弹层，从上，下，左，右，中间弹出
 *
 *  无须直接使用->
 *  对话框请使用 Modal
 *  上下左右滑出请使用 Drawer
 *
 */

var SpringPopup = /*#__PURE__*/forwardRef(function (props, ref) {
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
      mountContainer = props.mountContainer,
      _d = props.animated,
      animated = _d === void 0 ? true : _d,
      style = props.style,
      className = props.className;
  var popElRef = useRef();
  var maskRef = useRef();
  var unmoutRef = useRef(false);
  var isCenter = position === 'center';
  useImperativeHandle(ref, function () {
    return popElRef.current;
  });
  useUnmount(function () {
    unmoutRef.current = true;
  }); // const lastMousePositionRef = useRef<MousePosition>();

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute';

  var _e = useState(visible),
      active = _e[0],
      setActive = _e[1];

  var styles = useSpring({
    opacity: visible ? 1 : 0,
    v: visible ? 0 : 1,
    scale: visible ? 1 : 0,
    immediate: !animated,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    }
  });
  useLayoutEffect(function () {
    if (mask && visible && maskRef.current) {
      var wrapZIndex = window.getComputedStyle(popElRef.current, null).getPropertyValue('z-index');

      if (wrapZIndex) {
        maskRef.current.style.zIndex = wrapZIndex;
      }
    }
  }, [mask, visible]);

  var getTransformText = function getTransformText(v) {
    switch (position) {
      case 'left':
        {
          return "translate3d(".concat(-100 * v, "%, 0,0)");
        }

      case 'right':
        {
          return "translate3d(".concat(100 * v, "%, 0,0)");
        }

      case 'top':
        {
          return "translate3d(0, ".concat(-100 * v, "%,0)");
        }

      case 'bottom':
        {
          return "translate3d(0, ".concat(100 * v, "%,0)");
        }

      default:
        return 'none';
    }
  };

  var isAlive = visible || active;

  var _style = __assign(__assign({}, style), {
    position: showPosition
  });

  if (isCenter) {
    _style.opacity = styles.opacity;
    _style.transform = styles.scale.to(function (s) {
      return "translate(-50%, ".concat(isMobile ? '-50%' : 0, ") scale(").concat(s, ")");
    });
  } else {
    _style.transform = styles.v.to(getTransformText);
  }

  return /*#__PURE__*/ReactDOM.createPortal(isAlive && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Mask, {
    visible: mask && visible,
    ref: maskRef,
    className: maskClass,
    style: __assign({
      position: showPosition
    }, maskStyle),
    onClick: function onClick() {
      return closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React.createElement(StyledWrapper, {
    ref: popElRef,
    style: _style,
    className: clsx('uc-popup', className, position, {
      mobile: isMobile,
      pc: !isMobile
    })
  }, children)), mountNode);
});
SpringPopup.displayName = 'UC-Popup';
export default SpringPopup;
var templateObject_1;