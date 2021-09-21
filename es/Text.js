var __makeTemplateObject = this && this.__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React from 'react';
import styled from 'styled-components';
var StyledSpanMultiLines = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"], ["\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: ", ";\n  overflow: hidden;\n"])), function (props) {
  return props.lines;
});
var StyledSpanOneline = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"], ["\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])));
/** 文本显示，1.超过行数显示省略号 2.单行超过宽度显示省略号 */

var Text = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.lines,
      lines = _a === void 0 ? 1 : _a,
      children = props.children,
      rest = __rest(props, ["lines", "children"]);

  if (typeof children !== 'string' || typeof lines !== 'number') {
    return /*#__PURE__*/React.createElement("span", {
      ref: ref
    }, children);
  }

  return /*#__PURE__*/React.createElement(lines > 1 ? StyledSpanMultiLines : StyledSpanOneline, __assign(__assign({}, rest), {
    ref: ref,
    lines: lines
  }), children);
});
Text.displayName = 'UC-Text';
export default Text;
var templateObject_1, templateObject_2;