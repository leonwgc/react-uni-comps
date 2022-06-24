import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import copy from './copy';
import clsx from 'clsx';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  cursor: pointer;\n"], ["\n  display: inline-flex;\n  cursor: pointer;\n"])));
/** 复制文本*/

var CopyToClipboard = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var text = props.text,
      onCopy = props.onCopy,
      children = props.children,
      className = props.className,
      rest = __rest(props, ["text", "onCopy", "children", "className"]);

  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-copy-to-clipboard', className),
    onClick: function onClick() {
      copy(text) && (onCopy === null || onCopy === void 0 ? void 0 : onCopy());
    }
  }), children);
});
CopyToClipboard.displayName = 'UC-CopyToClipboard';
export default CopyToClipboard;
var templateObject_1;