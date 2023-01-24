function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import { renderElement, isMobile, beforeDisposeGen } from './dom';
import TransitionElement from './TransitionElement';
import { boxShadow, animationNormal } from './vars';
import Mask from './Mask';
import useIsomorphicLayoutEffect from './hooks/useisomorphicLayoutEffect';
var transitionDuration = animationNormal;
var StyledNotify = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 600;\n  transition: all ", "ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate3d(0, -100%, 0);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n    height: 40px;\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n    }\n  }\n"], ["\n  position: fixed;\n  z-index: 600;\n  transition: all ", "ms ease-in-out;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n\n  &.from {\n    transform: translate3d(0, -100%, 0);\n    opacity: 0;\n  }\n\n  &.to {\n    transform: none;\n    opacity: 1;\n  }\n\n  .content {\n    padding: 8px 12px;\n    height: 40px;\n    min-height: 40px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  &.pc {\n    top: 16px;\n    .content {\n      box-shadow: ", ";\n      background-color: #fff;\n      border-radius: 2px;\n    }\n  }\n\n  &.mobile {\n    .content {\n      ", ";\n      color: #fff;\n      width: 100%;\n    }\n  }\n"])), transitionDuration, boxShadow, getThemeColorCss('background-color'));
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
  useIsomorphicLayoutEffect(function () {
    if (!isMobile && elRef.current) {
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
  return /*#__PURE__*/React.createElement(StyledNotify, __assign({}, rest, {
    ref: elRef,
    className: clsx('uc-notify', className, {
      mobile: isMobile,
      pc: !isMobile
    })
  }), /*#__PURE__*/React.createElement(Mask, {
    style: {
      background: 'transparent'
    },
    visible: isMobile
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('content'),
    style: style
  }, content));
});
var t = 0;
/**
 * 顶部全局消息通知静态调用
 *
 * @param {StaticProps} props
 */

Notify.show = function (props) {
  if (isMobile && t > 0) {
    return;
  }

  t++;
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

    if (t > 0) {
      t = 0;
    }
  }, _duration);
};

Notify.displayName = 'UC-Notify';
export default Notify;
var templateObject_1;