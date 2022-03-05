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

import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input'; //#region  style

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .uc-input {\n    flex: 1;\n    background: #f7f7f7;\n    border-radius: 16px;\n    padding: 4px 12px;\n    .uc-icon {\n      color: #999;\n      font-size: 15px;\n    }\n    &.mobile {\n      padding: 4px 12px;\n    }\n  }\n  .cancel-text {\n    flex: none;\n    display: inline-block;\n    margin-left: 12px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .uc-input {\n    flex: 1;\n    background: #f7f7f7;\n    border-radius: 16px;\n    padding: 4px 12px;\n    .uc-icon {\n      color: #999;\n      font-size: 15px;\n    }\n    &.mobile {\n      padding: 4px 12px;\n    }\n  }\n  .cancel-text {\n    flex: none;\n    display: inline-block;\n    margin-left: 12px;\n  }\n"]))); //#endregion

/** 搜索框 */

var SearchBar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      style = props.style,
      onChange = props.onChange,
      _a = props.cancelText,
      cancelText = _a === void 0 ? '取消' : _a,
      _onFocus = props.onFocus,
      onCancel = props.onCancel,
      onSearch = props.onSearch,
      inputProps = __rest(props, ["className", "style", "onChange", "cancelText", "onFocus", "onCancel", "onSearch"]);

  var _b = useState(false),
      focused = _b[0],
      setFocused = _b[1];

  return /*#__PURE__*/React.createElement(StyledWrap, {
    ref: ref,
    style: style,
    className: clsx('uc-search-bar', className)
  }, /*#__PURE__*/React.createElement(Input, __assign({
    prefix: /*#__PURE__*/React.createElement(Icon, {
      type: "uc-icon-sousuo"
    }),
    onFocus: function onFocus(e) {
      setFocused(true);
      _onFocus === null || _onFocus === void 0 ? void 0 : _onFocus(e);
    },
    onChange: onChange,
    onPressEnter: onSearch
  }, inputProps)), focused && cancelText && /*#__PURE__*/React.createElement("div", {
    className: "cancel-text",
    style: {
      marginLeft: 12
    },
    onClick: function onClick() {
      setFocused(false);
      onCancel === null || onCancel === void 0 ? void 0 : onCancel();
      onChange === null || onChange === void 0 ? void 0 : onChange('');
    }
  }, cancelText));
});
SearchBar.displayName = 'UC-SearchBar';
export default SearchBar;
var templateObject_1;