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

import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  &::before {\n    height: 0;\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n  }\n\n  * {\n    overflow: hidden;\n    position: absolute;\n    inset: 0px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  position: relative;\n\n  &::before {\n    height: 0;\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: contain;\n  }\n\n  * {\n    overflow: hidden;\n    position: absolute;\n    inset: 0px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  return 1 * 100 / props.ratio + '%';
});
/** 宽高比 */

var AspectRatio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      _a = props.ratio,
      ratio = _a === void 0 ? 4 / 3 : _a,
      rest = __rest(props, ["children", "className", "ratio"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    ratio: ratio,
    className: clsx('ruc-aspect-ratio', className)
  }), children);
});
AspectRatio.displayName = 'UC-AutoCenter';
export default AspectRatio;
var templateObject_1;