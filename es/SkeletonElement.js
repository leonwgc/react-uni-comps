import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled, { keyframes } from 'styled-components';
import clsx from 'clsx';
var pulse = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n"], ["\n   0% {\n      opacity: 1;\n    }\n    50% {\n      opacity: 0.4;\n    }\n    100% {\n      opacity: 1;\n    }\n"])));
var StyledWrap = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.08);\n  animation: ", " 1.5s ease-in-out 0.5s infinite;\n\n  &.rect {\n    height: 1.2em;\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n"], ["\n  background-color: rgba(0, 0, 0, 0.08);\n  animation: ", " 1.5s ease-in-out 0.5s infinite;\n\n  &.rect {\n    height: 1.2em;\n  }\n\n  &.circle {\n    border-radius: 50%;\n    display: inline-block;\n  }\n"])), pulse);
/** 骨架屏 组成基本元素，可以进一步封装为特定结构UI组件 */

var SkeletonElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.shape,
      shape = _a === void 0 ? 'rect' : _a,
      className = props.className,
      rest = __rest(props, ["shape", "className"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-skeleton-element', shape, className)
  }));
});
SkeletonElement.displayName = 'UC-SkeletonElement';
export default SkeletonElement;
var templateObject_1, templateObject_2;