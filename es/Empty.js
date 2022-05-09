import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import Result from './Result';
var StyledResult = styled(Result)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 24px 0;\n  .image {\n    width: 64px;\n  }\n  .desc {\n    color: #ccc;\n  }\n"], ["\n  padding: 24px 0;\n  .image {\n    width: 64px;\n  }\n  .desc {\n    color: #ccc;\n  }\n"])));
var EmptySvg = /*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 41"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(0 1)",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("ellipse", {
  fill: "#f5f5f5",
  cx: "32",
  cy: "33",
  rx: "32",
  ry: "7"
}), /*#__PURE__*/React.createElement("g", {
  stroke: "#d9d9d9"
}, /*#__PURE__*/React.createElement("path", {
  d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
  fill: "#fafafa"
}))));
/** 空状态 */

var Empty = function Empty(props) {
  var _a = props.image,
      image = _a === void 0 ? EmptySvg : _a,
      _b = props.desc,
      desc = _b === void 0 ? '暂无数据' : _b,
      className = props.className,
      rest = __rest(props, ["image", "desc", "className"]);

  return /*#__PURE__*/React.createElement(StyledResult, __assign({}, rest, {
    className: clsx('uc-empty', className),
    image: image,
    desc: desc
  }));
};

Empty.displayName = 'UC-Empty';
export default Empty;
var templateObject_1;