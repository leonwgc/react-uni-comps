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
import clsx from 'clsx';
import styled from 'styled-components';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .image {\n    line-height: 1;\n    img {\n      max-width: 100%;\n    }\n  }\n  .desc {\n  }\n  .extra {\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  .image {\n    line-height: 1;\n    img {\n      max-width: 100%;\n    }\n  }\n  .desc {\n  }\n  .extra {\n  }\n"])));
/** 结果 */

var Result = function Result(props) {
  var image = props.image,
      desc = props.desc,
      className = props.className,
      extra = props.extra,
      rest = __rest(props, ["image", "desc", "className", "extra"]);

  var imgNode = typeof image === 'string' ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: ""
  }) : image;
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-result', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "image"
  }, imgNode), /*#__PURE__*/React.createElement("div", {
    className: "desc"
  }, desc), extra && /*#__PURE__*/React.createElement("div", {
    className: "extra"
  }, extra));
};

Result.displayName = 'UC-Result';
export default Result;
var templateObject_1;