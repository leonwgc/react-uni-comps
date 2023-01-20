import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { border } from './vars';
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    border-radius: ", "px;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"], ["\n  position: relative;\n\n  &:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    border-radius: ", "px;\n    ", ": 1px solid ", ";\n\n    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n      width: 200%;\n      height: 200%;\n      transform: scale(0.5);\n      transform-origin: 0 0;\n    }\n  }\n"])), function (_a) {
  var borderRadius = _a.borderRadius;
  return borderRadius;
}, function (_a) {
  var position = _a.position;
  return "border".concat(position === 'all' ? '' : '-' + position);
}, function (_a) {
  var $color = _a.$color;
  return $color;
});
/** 移动端1像素边框容器 */

var HairLineBox = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.position,
      position = _a === void 0 ? 'bottom' : _a,
      _b = props.borderRadius,
      borderRadius = _b === void 0 ? 0 : _b,
      _c = props.color,
      color = _c === void 0 ? border : _c,
      className = props.className,
      children = props.children,
      rest = __rest(props, ["position", "borderRadius", "color", "className", "children"]);

  return /*#__PURE__*/React.createElement(StyledDiv, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-hairlinebox', className),
    position: position,
    "$color": color,
    borderRadius: borderRadius
  }), children);
});
HairLineBox.displayName = 'UC-HairLineBox';
export default HairLineBox;
var templateObject_1;