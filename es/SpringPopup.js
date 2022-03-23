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

import React, { useRef, forwardRef, useImperativeHandle, useCallback, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Mask from './Mask';
import styled from 'styled-components';
import { isMobile, isBrowser } from './dom';
import clsx from 'clsx';
import { animationSlow } from './vars';
import { useSpring, animated, easings } from '@react-spring/web';
var StyledWrapper = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 200;\n\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0);\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 200;\n\n  // bottom\n  &.bottom {\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n\n  // left\n  &.left {\n    left: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // right\n  &.right {\n    right: 0;\n    top: 0;\n    bottom: 0;\n  }\n\n  // top\n  &.top {\n    left: 0;\n    top: 0;\n    right: 0;\n  }\n\n  //center\n  &.center {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0);\n    }\n  }\n"])));
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
      _d = props.duration,
      duration = _d === void 0 ? animationSlow : _d,
      _e = props.flip,
      flip = _e === void 0 ? true : _e,
      mountContainer = props.mountContainer,
      _f = props.animated,
      animated = _f === void 0 ? true : _f,
      style = props.style,
      className = props.className;
  var popElRef = useRef();
  var maskRef = useRef();
  var isCenter = position === 'center';
  useImperativeHandle(ref, function () {
    return popElRef.current;
  }); // const lastMousePositionRef = useRef<MousePosition>();

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  var showPosition = mountNode === document.body ? 'fixed' : 'absolute';

  var _g = useState(visible),
      active = _g[0],
      setActive = _g[1];

  var styles = useSpring({
    opacity: visible ? 1 : 0,
    v: visible ? 0 : 1,
    scale: visible ? 1 : isMobile ? 0.8 : 0.4,
    immediate: !animated,
    onStart: function onStart() {
      setActive(true);

      if (popElRef.current) {
        popElRef.current.style.visibility = '';
      }
    },
    onRest: function onRest() {
      setActive(visible);

      if (popElRef.current && !visible) {
        popElRef.current.style.visibility = 'hidden';
      }
    },
    config: {
      duration: duration,
      easing: easings.easeInOutQuart
    }
  });
  var setTransformOrigin = useCallback(function (mousePosition) {
    var popEl = popElRef.current;

    if (mousePosition && mousePosition.x >= 0 && mousePosition.y >= 0 && popEl && popEl.getBoundingClientRect) {
      var _a = popEl.getBoundingClientRect(),
          x = _a.left,
          y = _a.top;

      var origin = "".concat(mousePosition.x - x, "px ").concat(mousePosition.y - y, "px 0");
      popEl.style.transformOrigin = origin;
    } else {
      setTimeout(function () {
        if (popEl) {
          popEl.style.transformOrigin = 'unset';
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
        return '';
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
    duration: duration,
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
SpringPopup.displayName = 'UC-SpringPopup';
export default SpringPopup;
var templateObject_1;