import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  .content {\n    flex: 0 1 auto;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  .content {\n    flex: 0 1 auto;\n  }\n"])));
/** 自动居中 */

var AutoCenter = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
      rest = __rest(props, ["children"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-auto-center')
  }), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, children));
});
AutoCenter.displayName = 'UC-AutoCenter';
export default AutoCenter;
var templateObject_1;