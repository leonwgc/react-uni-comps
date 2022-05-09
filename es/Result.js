import { __assign, __makeTemplateObject, __rest } from "tslib";
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