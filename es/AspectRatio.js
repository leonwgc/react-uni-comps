import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n\n  &::before {\n    height: 0;\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: cover;\n  }\n\n  * {\n    box-sizing: border-box;\n    overflow: hidden;\n    position: absolute;\n    inset: 0px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  position: relative;\n\n  &::before {\n    height: 0;\n    content: '';\n    display: block;\n    padding-bottom: ", ";\n  }\n\n  img {\n    max-width: 100%;\n    object-fit: cover;\n  }\n\n  * {\n    box-sizing: border-box;\n    overflow: hidden;\n    position: absolute;\n    inset: 0px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n"])), function (props) {
  return 1 * 100 / props.ratio + '%';
});
/** 宽高比 */

var AspectRatio = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      _a = props.ratio,
      ratio = _a === void 0 ? 4 / 3 : _a,
      rest = __rest(props, ["children", "className", "ratio"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    ratio: ratio,
    className: clsx('uc-aspect-ratio', className)
  }), children);
});
AspectRatio.displayName = 'UC-AspectRatio';
export default AspectRatio;
var templateObject_1;