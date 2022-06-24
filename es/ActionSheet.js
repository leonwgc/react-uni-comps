import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import Popup from './Popup';
import Button from './Button';
import * as vars from './vars';
import clsx from 'clsx';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-actionsheet');
var StyledActionSheet = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n  background-color: #f5f5f5;\n  user-select: none;\n\n  .", " {\n    background-color: #fff;\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .", " {\n    border-top: 1px solid ", ";\n    background-color: #fff;\n    width: 100%;\n    padding: 14px;\n    height: 55px;\n    text-align: center;\n    border: none;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    font-size: 18px;\n    color: #333;\n\n    &.disabled {\n      opacity: 1;\n      color: #999;\n    }\n\n    &.default.pc:hover {\n      border-color: ", ";\n    }\n\n    .", " {\n      font-size: 12px;\n      margin-top: 4px;\n      color: #999;\n    }\n\n    &:not(:last-child) {\n      border-bottom: 1px solid ", ";\n    }\n\n    &.cancel {\n      margin-top: 8px;\n      border-bottom: none;\n    }\n  }\n"], ["\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  overflow: hidden;\n  width: 100%;\n  background-color: #f5f5f5;\n  user-select: none;\n\n  .", " {\n    background-color: #fff;\n    display: flex;\n    justify-content: center;\n    color: #999;\n    font-size: 15px;\n    padding: 18px 16px;\n    border-bottom: 1px solid ", ";\n  }\n\n  .", " {\n    border-top: 1px solid ", ";\n    background-color: #fff;\n    width: 100%;\n    padding: 14px;\n    height: 55px;\n    text-align: center;\n    border: none;\n    border-radius: 0;\n    display: flex;\n    flex-direction: column;\n    font-size: 18px;\n    color: #333;\n\n    &.disabled {\n      opacity: 1;\n      color: #999;\n    }\n\n    &.default.pc:hover {\n      border-color: ", ";\n    }\n\n    .", " {\n      font-size: 12px;\n      margin-top: 4px;\n      color: #999;\n    }\n\n    &:not(:last-child) {\n      border-bottom: 1px solid ", ";\n    }\n\n    &.cancel {\n      margin-top: 8px;\n      border-bottom: none;\n    }\n  }\n"])), getClassName('extra'), vars.border, getClassName('action-item'), vars.border, vars.border, getClassName('action-item-description'), vars.border);
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
    className: clsx(getClassName(), className),
    visible: visible,
    position: "bottom",
    closeOnMaskClick: closeOnMaskClick,
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('action-list')
  }, extra && /*#__PURE__*/React.createElement("div", {
    className: getClassName('extra')
  }, extra), actions.map(function (action, index) {
    return /*#__PURE__*/React.createElement(Button, {
      key: index,
      disabled: action.disabled,
      style: {
        color: action.color
      },
      className: clsx(getClassName('action-item'), {
        disabled: action.disabled
      }),
      onClick: function onClick() {
        var _a;

        (_a = action.onClick) === null || _a === void 0 ? void 0 : _a.call(action);
      }
    }, action.text, action.description && /*#__PURE__*/React.createElement("div", {
      className: getClassName('action-item-description')
    }, action.description));
  }), cancelText && /*#__PURE__*/React.createElement(Button, {
    className: clsx(getClassName('action-item'), 'cancel'),
    onClick: function onClick() {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, cancelText)));
};

ActionSheet.displayName = 'UC-ActionSheet';
export default ActionSheet;
var templateObject_1;