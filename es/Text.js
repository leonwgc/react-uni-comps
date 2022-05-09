import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledMultiLines = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"], ["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.$lines;
});
var StyledLine = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */

var Text = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.lines,
      lines = _a === void 0 ? 1 : _a,
      children = props.children,
      className = props.className,
      rest = __rest(props, ["lines", "children", "className"]);

  return /*#__PURE__*/React.createElement(lines > 1 ? StyledMultiLines : StyledLine, __assign(__assign({}, rest), {
    className: clsx('uc-text', className),
    ref: ref,
    $lines: lines
  }), children);
});
Text.displayName = 'UC-Text';
export default Text;
var templateObject_1, templateObject_2;