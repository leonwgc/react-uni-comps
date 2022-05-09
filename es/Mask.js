import { __assign, __makeTemplateObject, __rest } from "tslib";
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