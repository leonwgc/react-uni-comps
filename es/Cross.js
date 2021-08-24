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
/** 用于关闭的 x */

var Cross = function Cross(props) {
  var _a = props.size,
      size = _a === void 0 ? 16 : _a,
      _b = props.fill,
      fill = _b === void 0 ? '#999' : _b,
      rest = __rest(props, ["size", "fill"]);

  return /*#__PURE__*/React.createElement("div", __assign({}, rest), /*#__PURE__*/React.createElement("svg", {
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
    strokeWidth: "4",
    stroke: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14,14 L34,34",
    stroke: fill,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14,34 L34,14",
    stroke: fill,
    strokeWidth: "4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none",
    fillRule: "evenodd"
  })))));
};

export default Cross;