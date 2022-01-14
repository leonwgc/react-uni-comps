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
import { useTheme } from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
/** 进度条 */

var ProgressBar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.trackColor,
      trackColor = _a === void 0 ? '#e5e5e5' : _a,
      fillColor = props.fillColor,
      _b = props.height,
      height = _b === void 0 ? 4 : _b,
      _c = props.percent,
      percent = _c === void 0 ? 0 : _c,
      className = props.className,
      style = props.style,
      rest = __rest(props, ["trackColor", "fillColor", "height", "percent", "className", "style"]);

  var theme = useTheme() || {};
  var color = theme.color || vars.primary;
  return /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    ref: ref,
    className: clsx('uc-progress-bar', className),
    style: __assign({
      height: height,
      backgroundColor: trackColor,
      overflow: 'hidden'
    }, style)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx("path"),
    style: {
      height: '100%',
      width: "".concat(percent, "%"),
      background: fillColor || color,
      transition: "width ".concat(vars.animationSlow, "ms ease-in-out")
    }
  }));
});
ProgressBar.displayName = 'UC-ProgressBar';
export default ProgressBar;