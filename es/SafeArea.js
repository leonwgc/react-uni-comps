import { __assign, __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';

function upperFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}
/** 安全区 */


var SafeArea = function SafeArea(props) {
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
  }, style), (_a = {}, _a["padding".concat(upperFirstLetter(position))] = "constant(safe-area-inset-".concat(position, ")"), _a["padding".concat(upperFirstLetter(position))] = "env(safe-area-inset-".concat(position, ")"), _a));

  return /*#__PURE__*/React.createElement("div", __assign({}, rest, {
    className: clsx('uc-safe-area', className),
    style: styles
  }), children);
};

SafeArea.displayName = 'UC-SafeArea';
export default SafeArea;