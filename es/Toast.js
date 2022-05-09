function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Mask from './Mask';
import clsx from 'clsx';
import { beforeDisposeGen, renderElement } from './dom';
var StyledToast = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 2000;\n  padding: 12px 16px;\n  display: inline-block;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  border-radius: 4px;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  z-index: 2000;\n  padding: 12px 16px;\n  display: inline-block;\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  border-radius: 4px;\n  text-align: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));
/** 轻提示 */

var Toast = function Toast(props) {
  var content = props.content,
      visible = props.visible,
      _a = props.modal,
      modal = _a === void 0 ? true : _a,
      maskStyle = props.maskStyle,
      className = props.className,
      rest = __rest(props, ["content", "visible", "modal", "maskStyle", "className"]);

  return visible ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Mask, {
    visible: modal,
    style: __assign({
      opacity: 0
    }, maskStyle)
  }), /*#__PURE__*/React.createElement(StyledToast, __assign({}, rest, {
    className: clsx('uc-toast', className)
  }), content)) : null;
};

var transitionDuration = 240;
var _hide = null;
var num = 0;

Toast.show = function (props) {
  if (num > 0) {
    // skip
    return;
  }

  num++;
  var toastProps = {};
  var _duration = 1500;
  var isToastProps = _typeof(props) === 'object' && 'content' in props;

  if (isToastProps) {
    var _a = props.duration,
        duration = _a === void 0 ? 1500 : _a,
        rest = __rest(props, ["duration"]);

    toastProps = rest;
    _duration = duration;
  } else {
    toastProps = {
      content: props
    };
  }

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-toast', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React.createElement(Toast, __assign({}, toastProps, {
    visible: true
  })), container);

  var hide = function hide() {
    var _a;

    num--;
    dispose(beforeDispose);

    if (isToastProps) {
      (_a = props.afterClose) === null || _a === void 0 ? void 0 : _a.call(props);
    }
  };

  window.setTimeout(function () {
    hide();
  }, _duration);
  _hide = hide;
  return hide;
};

Toast.hide = function () {
  _hide === null || _hide === void 0 ? void 0 : _hide();
};

Toast.displayName = 'UC-Toast';
export default Toast;
var templateObject_1;