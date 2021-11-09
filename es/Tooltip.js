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

import React, { useState, useRef } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
var StylePopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  background-color: rgb(0, 0, 0, 0.85);\n  padding: 12px;\n"], ["\n  color: #fff;\n  background-color: rgb(0, 0, 0, 0.85);\n  padding: 12px;\n"])));
/** 文字提示气泡框, 基于Popover */

var Tooltip = function Tooltip(props) {
  var _a;

  var title = props.title,
      _b = props.hoverDelay,
      hoverDelay = _b === void 0 ? 100 : _b,
      _c = props.placement,
      placement = _c === void 0 ? 'top' : _c,
      _d = props.arrow,
      arrow = _d === void 0 ? true : _d,
      offset = props.offset,
      className = props.className,
      children = props.children,
      popoverRest = __rest(props, ["title", "hoverDelay", "placement", "arrow", "offset", "className", "children"]); // 鼠标移到popover内容区，不关闭popover


  var ref = useRef(0);

  var _e = useState(false),
      visible = _e[0],
      setVisible = _e[1];

  var actionProps = {
    onMouseEnter: function onMouseEnter() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      ref.current = window.setTimeout(function () {
        setVisible(false);
      }, hoverDelay);
    },
    onFocus: function onFocus() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    }
  }; // add active class to trigger el

  var otherProps = {
    className: clsx( /*#__PURE__*/React.isValidElement(children) ? (_a = children.props) === null || _a === void 0 ? void 0 : _a.className : '', {
      active: visible
    })
  };
  return /*#__PURE__*/React.createElement(StylePopover, __assign({}, popoverRest, {
    className: clsx('uc-tooltip', className),
    visible: visible,
    placement: placement,
    content: title,
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, __assign(__assign({}, actionProps), otherProps)) : /*#__PURE__*/React.createElement("span", __assign({}, actionProps, otherProps), children));
};

Tooltip.displayName = 'UC-Tooltip';
export default Tooltip;
var templateObject_1;