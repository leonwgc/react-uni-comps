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
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import Divider from './Divider';
import Space from './Space';
import IconCross from './IconCross';
import * as colors from './colors';
import { isBrowser, isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
var StyledAlertDialog = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 300;\n\n  &.mobile {\n    .uc-alert-dialog-wrap {\n      padding-bottom: 0;\n      border-radius: 8px;\n      width: 280px;\n\n      .title {\n        text-align: center;\n        border-bottom: none;\n      }\n\n      .footer {\n        position: relative;\n        display: flex;\n        height: 48px;\n        padding: 0;\n        overflow: hidden;\n        .confirm {\n          ", "\n        }\n\n        .m-btn {\n          height: 48px;\n          line-height: 48px;\n          text-align: center;\n          flex: 1;\n          user-select: none;\n          &:active {\n            background-color: rgba(0, 0, 0, 0.1);\n          }\n        }\n\n        &:after {\n          content: '';\n          pointer-events: none;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n          top: 0;\n          border-top: 1px solid ", ";\n\n          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n            width: 200%;\n            height: 200%;\n            transform: scale(0.5);\n            transform-origin: 0 0;\n          }\n        }\n      }\n    }\n  }\n\n  .uc-alert-dialog-wrap {\n    background-color: #fff;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    text-align: initial;\n    border-radius: 4px;\n    padding: 16px 0;\n    box-sizing: border-box;\n    white-space: normal;\n    max-width: calc(100vw - 56px);\n    max-height: calc(100vh - 112px);\n    width: 420px;\n\n    .close {\n      top: 16px;\n      right: 12px;\n      color: #999;\n      position: absolute;\n      display: inline-block;\n      cursor: pointer;\n\n      &:hover {\n        color: #666;\n      }\n    }\n\n    .title {\n      font-size: 16px;\n      line-height: 24px;\n      border-bottom-color: ", ";\n      color: #333;\n      padding: 0 16px 15px;\n      border-bottom-width: 1px;\n      border-bottom-style: solid;\n      margin: 0;\n      box-sizing: border-box;\n      font-weight: 500;\n    }\n    .content {\n      font-size: 14px;\n      line-height: 20px;\n      color: #333;\n      padding: 16px;\n      min-height: 46px;\n      max-height: calc(100vh - 256px);\n\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    .footer {\n      text-align: right;\n      padding: 8px 16px 0;\n\n      button {\n        width: 62px;\n      }\n    }\n  }\n"], ["\n  z-index: 300;\n\n  &.mobile {\n    .uc-alert-dialog-wrap {\n      padding-bottom: 0;\n      border-radius: 8px;\n      width: 280px;\n\n      .title {\n        text-align: center;\n        border-bottom: none;\n      }\n\n      .footer {\n        position: relative;\n        display: flex;\n        height: 48px;\n        padding: 0;\n        overflow: hidden;\n        .confirm {\n          ", "\n        }\n\n        .m-btn {\n          height: 48px;\n          line-height: 48px;\n          text-align: center;\n          flex: 1;\n          user-select: none;\n          &:active {\n            background-color: rgba(0, 0, 0, 0.1);\n          }\n        }\n\n        &:after {\n          content: '';\n          pointer-events: none;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          left: 0;\n          top: 0;\n          border-top: 1px solid ", ";\n\n          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n            width: 200%;\n            height: 200%;\n            transform: scale(0.5);\n            transform-origin: 0 0;\n          }\n        }\n      }\n    }\n  }\n\n  .uc-alert-dialog-wrap {\n    background-color: #fff;\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    text-align: initial;\n    border-radius: 4px;\n    padding: 16px 0;\n    box-sizing: border-box;\n    white-space: normal;\n    max-width: calc(100vw - 56px);\n    max-height: calc(100vh - 112px);\n    width: 420px;\n\n    .close {\n      top: 16px;\n      right: 12px;\n      color: #999;\n      position: absolute;\n      display: inline-block;\n      cursor: pointer;\n\n      &:hover {\n        color: #666;\n      }\n    }\n\n    .title {\n      font-size: 16px;\n      line-height: 24px;\n      border-bottom-color: ", ";\n      color: #333;\n      padding: 0 16px 15px;\n      border-bottom-width: 1px;\n      border-bottom-style: solid;\n      margin: 0;\n      box-sizing: border-box;\n      font-weight: 500;\n    }\n    .content {\n      font-size: 14px;\n      line-height: 20px;\n      color: #333;\n      padding: 16px;\n      min-height: 46px;\n      max-height: calc(100vh - 256px);\n\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n      &::-webkit-scrollbar {\n        display: none;\n      }\n    }\n    .footer {\n      text-align: right;\n      padding: 8px 16px 0;\n\n      button {\n        width: 62px;\n      }\n    }\n  }\n"])), getThemeColorCss('color'), colors.border, colors.border);
/** 移动端/pc端两种风格的 alert/confirm弹窗 */

var AlertDialog = function AlertDialog(props) {
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
      closeOnMaskClick = _c === void 0 ? true : _c,
      _d = props.buttonSpace,
      buttonSpace = _d === void 0 ? 8 : _d,
      _e = props.buttonWidth,
      buttonWidth = _e === void 0 ? 62 : _e,
      _f = props.closable,
      closable = _f === void 0 ? false : _f,
      _g = props.mask,
      mask = _g === void 0 ? true : _g,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      onClose = props.onClose,
      className = props.className,
      rest = __rest(props, ["visible", "title", "content", "onConfirm", "onCancel", "confirmText", "cancelText", "closeOnMaskClick", "buttonSpace", "buttonWidth", "closable", "mask", "maskStyle", "maskClass", "onClose", "className"]);

  return /*#__PURE__*/React.createElement(StyledAlertDialog, __assign({}, rest, {
    className: clsx('uc-alert-dialog', className, {
      mobile: isMobile
    }),
    visible: visible,
    onClose: onClose,
    position: "center",
    mask: mask,
    maskStyle: maskStyle,
    maskClass: maskClass,
    closeOnMaskClick: closeOnMaskClick
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-alert-dialog-wrap')
  }, closable && /*#__PURE__*/React.createElement(IconCross, {
    className: "close",
    size: 24,
    onClick: onClose
  }), title && /*#__PURE__*/React.createElement("div", {
    className: clsx('title')
  }, title), /*#__PURE__*/React.createElement("div", {
    className: clsx('content')
  }, content), /*#__PURE__*/React.createElement("div", {
    className: clsx('footer')
  }, !isMobile ? /*#__PURE__*/React.createElement(Space, {
    size: buttonSpace
  }, cancelText ? /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    className: clsx('cancel'),
    style: {
      width: buttonWidth
    }
  }, cancelText) : null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    className: clsx('confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    },
    style: {
      width: buttonWidth
    }
  }, confirmText)) : /*#__PURE__*/React.createElement(React.Fragment, null, cancelText ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: clsx('m-btn', 'cancel'),
    onClick: function onClick() {
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();

      if (typeof onCancel !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, cancelText), /*#__PURE__*/React.createElement(Divider, {
    type: "vertical",
    style: {
      height: '100%',
      color: colors.border,
      margin: 0
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    className: clsx('m-btn', 'confirm'),
    onClick: function onClick() {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm();

      if (typeof onConfirm !== 'function') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }
  }, confirmText)))));
};

AlertDialog.displayName = 'UC-AlertDialog';

var getContainer = function getContainer() {
  if (isBrowser) {
    var div = document.querySelector('.uc-alert-dialog-static');

    if (!div) {
      div = document.createElement('div');
      div.className = 'uc-alert-dialog-static';
      document.body.appendChild(div);
    }

    return div;
  }

  return null;
};
/**
 *
 *
 * @param {*} title
 * @param {*} content
 * @param {string} [confirmText='确定']
 * @param {*} onConfirm ()=>void
 * @param {*} cancelText
 * @return {*}
 */


AlertDialog.show = function (title, content, confirmText, _onConfirm, cancelText) {
  if (confirmText === void 0) {
    confirmText = '确定';
  }

  if (!content) return;
  var container = getContainer();
  ReactDOM.unmountComponentAtNode(container);
  ReactDOM.render( /*#__PURE__*/React.createElement(AlertDialog, {
    title: title,
    content: content,
    visible: true,
    confirmText: confirmText,
    cancelText: cancelText,
    onConfirm: function onConfirm() {
      _onConfirm === null || _onConfirm === void 0 ? void 0 : _onConfirm();
      ReactDOM.unmountComponentAtNode(container);
    },
    onClose: function onClose() {
      ReactDOM.unmountComponentAtNode(container);
    }
  }), container);
};

export default AlertDialog;
var templateObject_1;