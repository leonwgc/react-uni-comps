import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import styled from 'styled-components';
import { loadResource, isBrowser } from './dom';
import clsx from 'clsx';
var StyledIcon = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"], ["\n  display: inline-flex;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"])));
var SVGProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor'
};
/** 图标 */

var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var type = props.type,
      className = props.className,
      rest = __rest(props, ["type", "className"]);

  return /*#__PURE__*/React.createElement(StyledIcon, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-icon', className, type)
  }), /*#__PURE__*/React.createElement("svg", __assign({}, SVGProps), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#".concat(type)
  })));
});
Icon.displayName = 'UC-Icon';
/**
 * 加载iconfont.cn图标
 *
 * @param {string} scriptUrl
 */

Icon.loadFromIconfontCN = function (scriptUrl) {
  isBrowser && loadResource(scriptUrl);
}; // load ruc icons


Icon.loadFromIconfontCN('//at.alicdn.com/t/font_2887360_g3pt7gj02t.js');
export default Icon;
var templateObject_1;