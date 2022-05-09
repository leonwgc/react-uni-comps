import { __assign } from "tslib";
import React from 'react';
import CheckboxBase from './CheckboxBase';
/** 复选框 */

var Checkbox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(CheckboxBase, __assign({}, props, {
    mode: "checkbox",
    ref: ref
  }));
});
Checkbox.displayName = 'UC-Checkbox';
export default Checkbox;