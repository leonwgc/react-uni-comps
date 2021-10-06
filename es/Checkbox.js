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