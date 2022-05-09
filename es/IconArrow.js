import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
var StyledArrow = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  svg {\n    transition: transform ", "ms ease-in-out;\n  }\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"], ["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: middle;\n\n  svg {\n    transition: transform ", "ms ease-in-out;\n  }\n\n  &.right {\n    svg {\n      transform: rotate(-90deg);\n    }\n  }\n\n  &.left {\n    svg {\n      transform: rotate(90deg);\n    }\n  }\n  &.top {\n    svg {\n      transform: rotate(-180deg);\n    }\n  }\n\n  &.bottom {\n  }\n"])), vars.animationSlow);
var SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 箭头 */

var IconArrow = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var _b = props.direction,
      direction = _b === void 0 ? 'bottom' : _b,
      className = props.className,
      rest = __rest(props, ["direction", "className"]);

  return /*#__PURE__*/React.createElement(StyledArrow, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-icon-arrow', className, (_a = {}, _a[direction] = direction, _a))
  }), /*#__PURE__*/React.createElement("svg", __assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, SVGProps), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
  })));
});
IconArrow.displayName = 'UC-IconArrow';
export default IconArrow;
var templateObject_1;