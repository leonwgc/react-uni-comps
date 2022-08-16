import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-search-bar'); //#region  style

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .uc-input {\n    flex: 1;\n    background: #f7f7f7;\n    border-radius: 16px;\n    padding: 4px 12px;\n    line-height: 24px;\n\n    .prefix {\n      .uc-icon {\n        font-size: 1.143em;\n        color: #8c8c8c;\n      }\n    }\n  }\n  .", " {\n    flex: none;\n    display: inline-block;\n    margin-left: 12px;\n    cursor: pointer;\n    user-select: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .uc-input {\n    flex: 1;\n    background: #f7f7f7;\n    border-radius: 16px;\n    padding: 4px 12px;\n    line-height: 24px;\n\n    .prefix {\n      .uc-icon {\n        font-size: 1.143em;\n        color: #8c8c8c;\n      }\n    }\n  }\n  .", " {\n    flex: none;\n    display: inline-block;\n    margin-left: 12px;\n    cursor: pointer;\n    user-select: none;\n  }\n"])), getClassName('cancel')); //#endregion

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
    className: clsx(getClassName(), className)
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
    className: getClassName('cancel'),
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