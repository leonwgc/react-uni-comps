import { __assign, __rest } from "tslib";
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