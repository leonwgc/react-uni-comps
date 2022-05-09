import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledSkeletonBase = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"], ["\n  display: block;\n  background-color: rgba(0, 0, 0, 0.11);\n  height: 1.2em;\n\n  @keyframes kf-pulse {\n    0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  &.react {\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n\n  &.pulse {\n    animation: kf-pulse 1.5s ease-in-out 0.5s infinite;\n  }\n"])));
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.animated,
      animated = _a === void 0 ? true : _a,
      width = props.width,
      _b = props.height,
      height = _b === void 0 ? 16 : _b,
      _c = props.shape,
      shape = _c === void 0 ? 'rect' : _c,
      other = __rest(props, ["animated", "width", "height", "shape"]);

  var style = other.style,
      className = other.className,
      rest = __rest(other, ["style", "className"]);

  return /*#__PURE__*/React.createElement(StyledSkeletonBase, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-skeleton', shape, {
      pulse: animated
    }, className),
    style: __assign({
      width: width,
      height: height
    }, style)
  }));
});
SkeletonBase.displayName = 'UC-SkeletonBase';
export default SkeletonBase;
var templateObject_1;