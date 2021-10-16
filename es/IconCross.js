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
var StyledCross = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n  width: ", "px;\n  height: ", "px;\n"])), function (_a) {
  var size = _a.size;
  return size;
}, function (_a) {
  var size = _a.size;
  return size;
});
/** 用于关闭的 x */

var IconCross = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 16 : _a,
      _b = props.color,
      color = _b === void 0 ? 'currentColor' : _b,
      className = props.className,
      rest = __rest(props, ["size", "color", "className"]);

  return /*#__PURE__*/React.createElement(StyledCross, __assign({}, rest, {
    className: clsx('uc-icon-cross', className),
    ref: ref,
    size: size
  }), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    fillOpacity: "0.01",
    fill: "#FFFFFF",
    x: "0",
    y: "0",
    width: "48",
    height: "48",
    strokeWidth: "2",
    stroke: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14,14 L34,34",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14,34 L34,14",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  })))));
});
IconCross.displayName = 'UC-IconCross';
export default IconCross;
var templateObject_1;