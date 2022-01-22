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
import Popup from './Popup';
import Button from './Button';
import Divider from './Divider';
import Space from './Space';
import Icon from './Icon';
import * as vars from './vars';
import { isMobile, renderElement, beforeDisposeGen } from './dom';
import { getThemeColorCss } from './themeHelper';
import TransitionElement from './TransitionElement';
import clsx from 'clsx';
var StyledAlertDialog = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  overflow: hidden;\n  // effect\n  &.from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.5);\n    }\n  }\n\n  &.to {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n  // end effect\n\n  &.mobile {\n    width: 280px;\n    padding: 20px 0 0;\n\n    .header {\n      text-align: center;\n    }\n\n    .body {\n      padding: 16px;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    .footer {\n      position: relative;\n      display: flex;\n      height: 48px;\n      padding: 0;\n      overflow: hidden;\n      .confirm {\n        ", "\n      }\n\n      .uc-btn {\n        height: 48px;\n        border: none;\n        flex: 1;\n      }\n\n      &:after {\n        content: '';\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        border-top: 1px solid ", ";\n\n        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n          width: 200%;\n          height: 200%;\n          transform: scale(0.5);\n          transform-origin: 0 0;\n        }\n      }\n    }\n  }\n\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  background-color: #fff;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: initial;\n  border-radius: 8px;\n  padding: 32px 32px 24px;\n  box-sizing: border-box;\n  white-space: normal;\n  max-width: calc(100vw - 56px);\n  max-height: calc(100vh - 112px);\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .header {\n    font-size: 16px;\n    line-height: 20px;\n    color: #333;\n    box-sizing: border-box;\n    font-weight: 500;\n  }\n  .body {\n    font-size: 14px;\n    line-height: 20px;\n    max-height: calc(100vh - 256px);\n    padding: 24px 0 32px;\n    flex: 1;\n\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  .footer {\n    text-align: right;\n\n    .uc-btn {\n      min-width: 80px;\n    }\n  }\n"], ["\n  overflow: hidden;\n  // effect\n  &.from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.5);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(0.5);\n    }\n  }\n\n  &.to {\n    transform: translate(-50%, -50%) scale(1);\n    &.pc {\n      top: 160px;\n      transform: translate(-50%, 0) scale(1);\n    }\n    opacity: 1;\n  }\n  // end effect\n\n  &.mobile {\n    width: 280px;\n    padding: 20px 0 0;\n\n    .header {\n      text-align: center;\n    }\n\n    .body {\n      padding: 16px;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n\n    .footer {\n      position: relative;\n      display: flex;\n      height: 48px;\n      padding: 0;\n      overflow: hidden;\n      .confirm {\n        ", "\n      }\n\n      .uc-btn {\n        height: 48px;\n        border: none;\n        flex: 1;\n      }\n\n      &:after {\n        content: '';\n        pointer-events: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        left: 0;\n        top: 0;\n        border-top: 1px solid ", ";\n\n        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n          width: 200%;\n          height: 200%;\n          transform: scale(0.5);\n          transform-origin: 0 0;\n        }\n      }\n    }\n  }\n\n  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);\n  background-color: #fff;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: initial;\n  border-radius: 8px;\n  padding: 32px 32px 24px;\n  box-sizing: border-box;\n  white-space: normal;\n  max-width: calc(100vw - 56px);\n  max-height: calc(100vh - 112px);\n  width: 420px;\n  display: flex;\n  flex-direction: column;\n\n  .close {\n    top: 16px;\n    right: 16px;\n    color: #999;\n    position: absolute;\n    display: inline-block;\n    cursor: pointer;\n    font-size: 16px;\n\n    &:hover {\n      color: #666;\n    }\n  }\n\n  .header {\n    font-size: 16px;\n    line-height: 20px;\n    color: #333;\n    box-sizing: border-box;\n    font-weight: 500;\n  }\n  .body {\n    font-size: 14px;\n    line-height: 20px;\n    max-height: calc(100vh - 256px);\n    padding: 24px 0 32px;\n    flex: 1;\n\n    overflow-y: scroll;\n    -webkit-overflow-scrolling: touch;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n  .footer {\n    text-align: right;\n\n    .uc-btn {\n      min-width: 80px;\n    }\n  }\n"])), getThemeColorCss('color'), vars.border);
/** 移动端/pc端两种风格的 alert/confirm弹窗 */

var AlertDialog = /*#__PURE__*/forwardRef(function (props, ref) {
  var _a = props.visible,
      visible = _a === void 0 ? true : _a,
      title = props.title,
      content = props.content,
      onConfirm = props.onConfirm,
      onCancel = props.onCancel,
      _b = props.confirmText,
      confirmText = _b === void 0 ? '确定' : _b,
      cancelText = props.cancelText,
      _c = props.closeOnMaskClick,
      closeOnMaskClick = _c === void 0 ? false : _c,
      _d = props.buttonSpace,
      buttonSpace = _d === void 0 ? 16 : _d,
      _e = props.closable,
      closable = _e === void 0 ? false : _e,
      _f = props.mask,
      mask = _f === void 0 ? true : _f,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onClose = props.onClose,
      className = props.className,
      wrapStyle = props.wrapStyle,
      wait = props.wait,
      rest = __rest(props, ["visible", "title", "content", "onConfirm", "onCancel", "confirmText", "cancelText", "closeOnMaskClick", "buttonSpace", "closable", "mask", "maskStyle", "maskClass", "onClose", "className", "wrapStyle", "wait"]);

  return /*#__PURE__*/React.createElement(StyledAlertDialog, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-alert-dialog', className, {
      mobile: isMobile
    }),
    visible: visible,
    onClose: onClose,
    position: "center",
    mask: mask,
    style: wrapStyle,
    maskStyle: maskStyle,
    maskClass: maskClass,
    closeOnMaskClick: closeOnMaskClick
  }), closable && /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), title && /*#__PURE__*/React.createElement("div", {
    className: clsx('header')
  }, title), /*#__PURE__*/React.createElement("div", {
    className: clsx('body')
  }, content), /*#__PURE__*/React.createElement("div", {
    className: clsx('footer')
  }, !isMobile ? /*#__PURE__*/React.createElement(Space, {
    size: buttonSpace
  }, cancelText ? /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    className: clsx('cancel')
  }, cancelText) : null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    wait: wait,
    className: clsx('confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText)) : /*#__PURE__*/React.createElement(React.Fragment, null, cancelText ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    className: clsx('cancel'),
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel(onClose);

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, cancelText), /*#__PURE__*/React.createElement(Divider, {
    type: "vertical",
    style: {
      height: '100%',
      color: vars.border,
      margin: 0
    }
  })) : null, /*#__PURE__*/React.createElement(Button, {
    className: clsx('confirm'),
    wait: wait,
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(onClose);

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText))));
});
AlertDialog.displayName = 'UC-AlertDialog';
var transitionDuration = 240;

AlertDialog.show = function (props) {
  var title = props.title,
      content = props.content,
      _a = props.confirmText,
      confirmText = _a === void 0 ? '确定' : _a,
      _onConfirm = props.onConfirm,
      cancelText = props.cancelText,
      _onCancel = props.onCancel,
      wait = props.wait,
      wrapStyle = props.wrapStyle,
      rest = __rest(props, ["title", "content", "confirmText", "onConfirm", "cancelText", "onCancel", "wait", "wrapStyle"]);

  var container = document.createElement('div');
  var beforeDispose = beforeDisposeGen(container, '.uc-popup-wrap', transitionDuration);
  var dispose = renderElement( /*#__PURE__*/React.createElement(TransitionElement, {
    duration: transitionDuration
  }, /*#__PURE__*/React.createElement(AlertDialog, __assign({}, rest, {
    title: title,
    content: content,
    visible: true,
    confirmText: confirmText,
    cancelText: cancelText,
    wrapStyle: wrapStyle,
    wait: wait,
    onConfirm: function onConfirm() {
      _onConfirm === null || _onConfirm === void 0 ? void 0 : _onConfirm(function () {
        return dispose(beforeDispose);
      });
    },
    onClose: function onClose() {
      dispose(beforeDispose);
    },
    onCancel: function onCancel() {
      _onCancel === null || _onCancel === void 0 ? void 0 : _onCancel(function () {
        return dispose(beforeDispose);
      });
    },
    mountContainer: function mountContainer() {
      return container;
    }
  }))), container);
};

export default AlertDialog;
var templateObject_1;