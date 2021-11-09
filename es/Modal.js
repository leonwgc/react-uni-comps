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
import Icon from './Icon';
import Popup from './Popup';
var StyledModal = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .content {\n    min-width: 60px;\n    background-color: #fff;\n    padding: 16px;\n    position: relative;\n    border-radius: 2px;\n\n    .close {\n      top: 16px;\n      right: 16px;\n      color: #999;\n      position: absolute;\n      display: inline-block;\n      cursor: pointer;\n      font-size: 16px;\n\n      &:hover {\n        color: #666;\n      }\n    }\n\n    .body {\n      flex: 1;\n    }\n  }\n"], ["\n  .content {\n    min-width: 60px;\n    background-color: #fff;\n    padding: 16px;\n    position: relative;\n    border-radius: 2px;\n\n    .close {\n      top: 16px;\n      right: 16px;\n      color: #999;\n      position: absolute;\n      display: inline-block;\n      cursor: pointer;\n      font-size: 16px;\n\n      &:hover {\n        color: #666;\n      }\n    }\n\n    .body {\n      flex: 1;\n    }\n  }\n"])));
/** 对话框 */

var Modal = function Modal(props) {
  var wrapClassName = props.wrapClassName,
      closable = props.closable,
      visible = props.visible,
      onClose = props.onClose,
      wrapStyle = props.wrapStyle,
      className = props.className,
      header = props.header,
      children = props.children,
      footer = props.footer,
      rest = __rest(props, ["wrapClassName", "closable", "visible", "onClose", "wrapStyle", "className", "header", "children", "footer"]);

  return /*#__PURE__*/React.createElement(StyledModal, __assign({
    visible: visible,
    onClose: onClose
  }, rest, {
    className: clsx('uc-modal', className),
    position: 'center'
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('content', wrapClassName),
    style: __assign({}, wrapStyle)
  }, closable && /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-guanbi",
    className: "close",
    onClick: onClose
  }), header && /*#__PURE__*/React.createElement("div", {
    className: "header"
  }, header), /*#__PURE__*/React.createElement("div", {
    className: "body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "footer"
  }, footer)));
};

Modal.displayName = 'UC-Modal';
export default Modal;
var templateObject_1;