import { __assign, __rest } from "tslib";
import React from 'react';
import CheckboxBase from './CheckboxBase';
/** 单选框 */

var Radio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 16 : _a,
      rest = __rest(props, ["size"]);

  return /*#__PURE__*/React.createElement(CheckboxBase, __assign({}, rest, {
    size: size,
    mode: "radio",
    ref: ref
  }));
});
Radio.displayName = 'UC-Radio';
export default Radio;