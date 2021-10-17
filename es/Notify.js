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

import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile } from './dom';
import TransitionElement from './TransitionElement';
var transitionDuration = 180;
var StyledNotify = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: ", "ms;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate(0, -100%);\n  }\n\n  &.to {\n    transform: none;\n  }\n\n  .content {\n    ", ";\n    padding: 8px 12px;\n    margin: 0 auto;\n    .icon {\n      margin-right: 8px;\n    }\n\n    &.mobile {\n      color: #fff;\n      width: 100%;\n      text-align: center;\n    }\n    &.pc {\n      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n      background-color: #fff;\n      font-size: 14px;\n      margin-top: 10px;\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 1200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: ", "ms;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate(0, -100%);\n  }\n\n  &.to {\n    transform: none;\n  }\n\n  .content {\n    ", ";\n    padding: 8px 12px;\n    margin: 0 auto;\n    .icon {\n      margin-right: 8px;\n    }\n\n    &.mobile {\n      color: #fff;\n      width: 100%;\n      text-align: center;\n    }\n    &.pc {\n      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n      background-color: #fff;\n      font-size: 14px;\n      margin-top: 10px;\n    }\n  }\n"])), transitionDuration, getThemeColorCss('background-color'));
/** 顶部全局消息通知 */

var Notify = /*#__PURE__*/forwardRef(function (props, ref) {
  var content = props.content,
      icon = props.icon,
      style = props.style,
      className = props.className,
      rest = __rest(props, ["content", "icon", "style", "className"]);

  return /*#__PURE__*/React.createElement(StyledNotify, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-notify', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('content', {
      mobile: isMobile,
      pc: !isMobile
    }),
    style: style
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, icon), content));
});
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
  var _a = props.duration,
      duration = _a === void 0 ? 2000 : _a,
      rest = __rest(props, ["duration"]);

  var container = document.createElement('div');

  var beforeDispose = function beforeDispose() {
    return new Promise(function (dispose) {
      var el = container.querySelector('.uc-notify');

      if (el) {
        el.classList.remove('to');
        el.classList.add('from');
      }

      setTimeout(dispose, 160);
    });
  };

  var dispose = renderElement( /*#__PURE__*/React.createElement(TransitionElement, {
    duration: transitionDuration
  }, /*#__PURE__*/React.createElement(Notify, __assign({}, rest))), container);
  window.setTimeout(function () {
    dispose(beforeDispose);
  }, duration);
};

Notify.displayName = 'UC-Notify';
export default Notify;
var templateObject_1;