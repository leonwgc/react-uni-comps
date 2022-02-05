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
import copy from './copy';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  cursor: pointer;\n"], ["\n  display: inline-flex;\n  cursor: pointer;\n"])));
/** 复制文本*/

var CopyToClipboard = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var text = props.text,
      _onClick = props.onClick,
      onCopy = props.onCopy,
      children = props.children,
      className = props.className,
      rest = __rest(props, ["text", "onClick", "onCopy", "children", "className"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-copy-to-clipboard', className),
    onClick: function onClick() {
      copy(text) && (onCopy === null || onCopy === void 0 ? void 0 : onCopy());
      _onClick === null || _onClick === void 0 ? void 0 : _onClick();
    }
  }), children);
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';
export default CopyToClipboard;
var templateObject_1;