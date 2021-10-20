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
import { loadResource, isBrowser } from './dom';
import clsx from 'clsx';
var StyledIcon = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"], ["\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n"])));
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
    className: clsx('uc-icon', className)
  }), /*#__PURE__*/React.createElement("svg", __assign({}, SVGProps), /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#" + type
  })));
});
Icon.displayName = 'UC-Icon';
/**
 * 加载在 iconfont.cn 上自行管理的图标
 *
 * @param {string} scriptUrl
 */

Icon.loadFromIconfontCN = function (scriptUrl) {
  isBrowser && loadResource(scriptUrl);
};

export default Icon;
var templateObject_1;