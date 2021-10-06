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
import CheckboxBase from './CheckboxBase';
/** 单选框 */

var Radio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.size,
      size = _a === void 0 ? 20 : _a,
      rest = __rest(props, ["size"]);

  return /*#__PURE__*/React.createElement(CheckboxBase, __assign({}, rest, {
    size: size,
    mode: "radio",
    ref: ref
  }));
});
Radio.displayName = 'UC-Radio';
export default Radio;