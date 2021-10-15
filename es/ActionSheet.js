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
import Popup from './Popup';
import Button from './Button';
import * as colors from './colors';
import clsx from 'clsx';
var StyledActionSheet = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n\n  .wrap {\n    background-color: #fff;\n  }\n\n  .extra {\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .button-list {\n    .wrapper {\n      background-color: #ffffff;\n      border-top: 1px solid ", ";\n\n      &.disabled {\n        color: #999;\n\n        &:active {\n          background-color: unset;\n        }\n      }\n      &:first-child {\n        border-top: none;\n      }\n      &:active {\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      button {\n        width: 100%;\n        padding: 14px;\n        height: 55px;\n        text-align: center;\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 18px;\n        &:disabled {\n          background-color: #fff;\n          color: #999;\n        }\n\n        .button-item-name {\n          color: #333;\n          &.disabled {\n            color: #999 !important;\n          }\n        }\n\n        .button-item-description {\n          font-size: 12px;\n          margin-top: 4px;\n          color: #999;\n        }\n      }\n    }\n  }\n\n  .uc-actionsheet-cancel {\n    background-color: #f5f5f5;\n    padding-top: 8px;\n\n    .wrapper {\n      background-color: #fff;\n      button {\n        padding: 14px;\n        text-align: center;\n        border-radius: 0;\n      }\n    }\n  }\n"], ["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n\n  .wrap {\n    background-color: #fff;\n  }\n\n  .extra {\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .button-list {\n    .wrapper {\n      background-color: #ffffff;\n      border-top: 1px solid ", ";\n\n      &.disabled {\n        color: #999;\n\n        &:active {\n          background-color: unset;\n        }\n      }\n      &:first-child {\n        border-top: none;\n      }\n      &:active {\n        background-color: rgba(0, 0, 0, 0.1);\n      }\n\n      button {\n        width: 100%;\n        padding: 14px;\n        height: 55px;\n        text-align: center;\n        background-color: transparent;\n        border: none;\n        border-radius: 0;\n        display: flex;\n        flex-direction: column;\n        font-size: 18px;\n        &:disabled {\n          background-color: #fff;\n          color: #999;\n        }\n\n        .button-item-name {\n          color: #333;\n          &.disabled {\n            color: #999 !important;\n          }\n        }\n\n        .button-item-description {\n          font-size: 12px;\n          margin-top: 4px;\n          color: #999;\n        }\n      }\n    }\n  }\n\n  .uc-actionsheet-cancel {\n    background-color: #f5f5f5;\n    padding-top: 8px;\n\n    .wrapper {\n      background-color: #fff;\n      button {\n        padding: 14px;\n        text-align: center;\n        border-radius: 0;\n      }\n    }\n  }\n"])), colors.border, colors.border);
/** 动作面板 */

var ActionSheet = function ActionSheet(props) {
  var _a = props.visible,
      visible = _a === void 0 ? false : _a,
      _b = props.actions,
      actions = _b === void 0 ? [] : _b,
      _c = props.cancelText,
      cancelText = _c === void 0 ? '' : _c,
      _d = props.closeOnMaskClick,
      closeOnMaskClick = _d === void 0 ? true : _d,
      onClose = props.onClose,
      className = props.className,
      extra = props.extra,
      rest = __rest(props, ["visible", "actions", "cancelText", "closeOnMaskClick", "onClose", "className", "extra"]);

  return /*#__PURE__*/React.createElement(StyledActionSheet, __assign({}, rest, {
    className: clsx('uc-actionsheet', className),
    visible: visible,
    position: "bottom",
    closeOnMaskClick: closeOnMaskClick,
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, extra && /*#__PURE__*/React.createElement("div", {
    className: "extra"
  }, extra), /*#__PURE__*/React.createElement("div", {
    className: "button-list"
  }, actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: clsx('wrapper', {
        disabled: action.disabled
      }),
      onClick: function onClick() {
        var _a;

        (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
      }
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: action.disabled
    }, /*#__PURE__*/React.createElement("div", {
      className: clsx('button-item-name', {
        disabled: action.disabled
      }),
      style: {
        color: action.color || '#333'
      }
    }, action.text), action.description && /*#__PURE__*/React.createElement("div", {
      className: "button-item-description"
    }, action.description)));
  })), cancelText && /*#__PURE__*/React.createElement("div", {
    className: "uc-actionsheet-cancel button-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "button-item",
    onClick: function onClick() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "button-item-name"
  }, cancelText))))));
};

ActionSheet.displayName = 'UC-ActionSheet';
export default ActionSheet;
var templateObject_1;