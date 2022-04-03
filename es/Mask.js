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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useSpring, animated } from '@react-spring/web';
import useUnmount from './hooks/useUnmount';
import * as vars from './vars';
var StyledMask = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  touch-action: none;\n"], ["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  touch-action: none;\n"])));
/** 遮罩层 */

var Mask = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      visible = props.visible,
      _a = props.duration,
      duration = _a === void 0 ? vars.animationSlow : _a,
      style = props.style,
      _b = props.hideOverflow,
      hideOverflow = _b === void 0 ? true : _b,
      _c = props.opacity,
      opacity = _c === void 0 ? 0.45 : _c,
      rest = __rest(props, ["children", "className", "visible", "duration", "style", "hideOverflow", "opacity"]); // animation effect


  var _d = useState(visible),
      active = _d[0],
      setActive = _d[1];

  var styles = useSpring({
    opacity: visible ? opacity : 0,
    immediate: duration === 0,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    },
    config: {
      duration: duration
    }
  });
  useEffect(function () {
    document.body.style.overflow = visible && hideOverflow ? 'hidden' : '';
  }, [visible, hideOverflow]);
  useUnmount(function () {
    document.body.style.overflow = '';
  });
  return active || visible ? /*#__PURE__*/React.createElement(StyledMask, __assign({
    ref: ref
  }, rest, {
    className: clsx('uc-mask', className),
    style: __assign(__assign({}, styles), style)
  }), children) : null;
});
Mask.displayName = 'UC-Mask';
export default Mask;
var templateObject_1;