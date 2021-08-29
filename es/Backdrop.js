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

import React, { useEffect, useRef } from 'react';
import TransitionElement from './TransitionElement';
import styled from 'styled-components';
var StyledBackdrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  transition: opacity 0.24s linear;\n\n  &.from {\n    opacity: 0.4;\n  }\n  &.to {\n    opacity: 0.55;\n  }\n"], ["\n  background-color: rgba(0, 0, 0);\n  z-index: 100;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  transition: opacity 0.24s linear;\n\n  &.from {\n    opacity: 0.4;\n  }\n  &.to {\n    opacity: 0.55;\n  }\n"])));
/** 遮罩层 */

var Backdrop = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      _a = props.hideOverflow,
      hideOverflow = _a === void 0 ? true : _a,
      rest = __rest(props, ["children", "hideOverflow"]);

  var lastBodyFlow = useRef('');
  useEffect(function () {
    lastBodyFlow.current = document.body.style.overflow;
    return function () {
      document.body.style.overflow = lastBodyFlow.current;
    };
  }, []);
  useEffect(function () {
    if (hideOverflow) {
      document.body.style.overflow = hideOverflow ? 'hidden' : lastBodyFlow.current;
    }
  }, [hideOverflow]);
  return /*#__PURE__*/React.createElement(TransitionElement, null, /*#__PURE__*/React.createElement(StyledBackdrop, __assign({
    className: "uc-backdrop",
    ref: ref
  }, rest), children));
});
Backdrop.displayName = 'UC-Backdrop';
export default Backdrop;
var templateObject_1;