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
import clsx from 'clsx';
/** 安全区 */

var SafeArea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var _b = props.position,
      position = _b === void 0 ? 'bottom' : _b,
      className = props.className,
      style = props.style,
      children = props.children,
      rest = __rest(props, ["position", "className", "style", "children"]);

  var styles = __assign(__assign({
    display: 'block',
    width: '100%'
  }, style), (_a = {}, _a["padding-".concat(position)] = "constant(safe-area-inset-".concat(position, ")"), _a["padding-".concat(position)] = "env(safe-area-inset-".concat(position, ")"), _a));

  return /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    ref: ref,
    className: clsx('uc-safe-area', className),
    style: styles
  }), children);
});
SafeArea.displayName = 'UC-SafeArea';
export default SafeArea;