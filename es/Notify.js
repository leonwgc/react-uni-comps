function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import React, { forwardRef, useLayoutEffect, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile, beforeDisposeGen } from './dom';
import TransitionElement from './TransitionElement';
import { boxShadow, animationNormal } from './vars';
import Mask from './Mask';
var transitionDuration = animationNormal;
var StyledNotify = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 1200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: ", "ms;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate(0, -100%);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 1200;\n  transition-property: all;\n  transition-timing-function: ease-in-out;\n  transition-duration: ", "ms;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate(0, -100%);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n      display: flex;\n      justify-content: center;\n    }\n  }\n"])), transitionDuration, boxShadow, getThemeColorCss('background-color'));
var allNotifies = [];
/** 顶部全局消息通知 */

var Notify = /*#__PURE__*/forwardRef(function (props, ref) {
  var content = props.content,
      style = props.style,
      className = props.className,
      rest = __rest(props, ["content", "style", "className"]);

  var elRef = useRef();
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  useLayoutEffect(function () {
    if (elRef.current) {
      if (allNotifies.length > 0) {
        var lastElPos = allNotifies[allNotifies.length - 1];
        elRef.current.style.top = lastElPos.top + lastElPos.height + 16 + 'px';
      }

      var css = window.getComputedStyle(elRef.current);
      allNotifies.push({
        top: parseInt(css.getPropertyValue('top'), 10),
        height: parseInt(css.getPropertyValue('height'), 10),
        el: elRef.current
      });
      return function () {
        var item = allNotifies.shift();

        if (allNotifies.length > 0 && item) {
          var h_1 = item.height;
          allNotifies.map(function (n) {
            n.el.style.top = parseInt(n.el.style.top, 10) - h_1 + 'px';
          });
        }
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isMobile && /*#__PURE__*/React.createElement(Mask, {
    style: {
      background: 'transparent'
    }
  }), /*#__PURE__*/React.createElement(StyledNotify, __assign({}, rest, {
    ref: elRef,
    className: clsx('uc-notify', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('content'),
    style: style
  }, content)));
});
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
  var notifyProps = {};
  var _duration = 2000;

  if (_typeof(props) === 'object' && 'content' in props) {
    var _a = props.duration,
        duration = _a === void 0 ? 2000 : _a,
        rest = __rest(props, ["duration"]);

    notifyProps = rest;
    _duration = duration;
  } else {
    notifyProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-notify', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React.createElement(TransitionElement, {
    duration: transitionDuration
  }, /*#__PURE__*/React.createElement(Notify, __assign({}, notifyProps))), container);
  window.setTimeout(function () {
    dispose(beforeDispose);
  }, _duration);
};

Notify.displayName = 'UC-Notify';
export default Notify;
var templateObject_1;