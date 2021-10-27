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
import Popup from './Popup';
var StyledDrawerContent = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fff;\n\n    .body {\n      flex: 1;\n    }\n  }\n"], ["\n  .content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fff;\n\n    .body {\n      flex: 1;\n    }\n  }\n"])));
/** 抽屉 */

var Drawer = function Drawer(props) {
  var wrapClassName = props.wrapClassName,
      wrapStyle = props.wrapStyle,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      _a = props.position,
      position = _a === void 0 ? 'right' : _a,
      rest = __rest(props, ["wrapClassName", "wrapStyle", "className", "header", "children", "footer", "position"]);

  var sty = position === 'left' || position === 'right' ? {
    height: '100vh'
  } : {
    width: '100vw'
  };
  return /*#__PURE__*/React.createElement(StyledDrawerContent, __assign({}, rest, {
    className: clsx('uc-drawer', className),
    position: position
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('content', wrapClassName),
    style: __assign(__assign({}, sty), wrapStyle)
  }, header && /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, footer)));
};

Drawer.displayName = 'UC-Drawer';
export default Drawer;
var templateObject_1;