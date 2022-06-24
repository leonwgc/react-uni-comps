import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-safe-area');
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n\n  &.", " {\n    padding-top: constant(safe-area-inset-top);\n    padding-top: env(safe-area-inset-top);\n  }\n\n  &.", " {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n"], ["\n  display: block;\n  width: 100%;\n\n  &.", " {\n    padding-top: constant(safe-area-inset-top);\n    padding-top: env(safe-area-inset-top);\n  }\n\n  &.", " {\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n  }\n"])), getClassName('top'), getClassName('bottom'));
/** 安全区 */

var SafeArea = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.position,
      position = _a === void 0 ? 'bottom' : _a,
      className = props.className,
      children = props.children,
      rest = __rest(props, ["position", "className", "children"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({
    ref: ref
  }, rest, {
    className: clsx(getClassName(), getClassName(position), className)
  }), children);
});
SafeArea.displayName = 'UC-SafeArea';
export default SafeArea;
var templateObject_1;