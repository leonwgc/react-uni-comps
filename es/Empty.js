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
import clsx from 'clsx';
import styled from 'styled-components';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n\n  .img {\n    width: 64px;\n  }\n  .desc {\n    color: #ccc;\n    font-size: 14px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n\n  .img {\n    width: 64px;\n  }\n  .desc {\n    color: #ccc;\n    font-size: 14px;\n  }\n"])));
var img = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 41"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(0 1)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("ellipse", {
  fill: "#f5f5f5",
  cx: "32",
  cy: "33",
  rx: "32",
  ry: "7"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "#d9d9d9"
}, /*#__PURE__*/React.createElement("path", {
  d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
  fill: "#fafafa"
}))));
/** 空状态 */

var Empty = function Empty(props) {
  var _a = props.image,
      image = _a === void 0 ? img : _a,
      _b = props.description,
      description = _b === void 0 ? '暂无数据' : _b,
      className = props.className,
      rest = __rest(props, ["image", "description", "className"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-empty', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "img"
  }, image), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, description));
};

Empty.displayName = 'UC-Empty';
export default Empty;
var templateObject_1;