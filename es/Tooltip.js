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

import React, { useState, useRef } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
var StylePopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  opacity: 0.85;\n  background-color: rgb(0, 0, 0);\n  padding: 12px;\n  width: 240px;\n"], ["\n  color: #fff;\n  opacity: 0.85;\n  background-color: rgb(0, 0, 0);\n  padding: 12px;\n  width: 240px;\n"])));
/** 文字提示气泡框, 基于Popover */

var Tooltip = function Tooltip(props) {
  var title = props.title,
      _a = props.placement,
      placement = _a === void 0 ? 'top' : _a,
      _b = props.arrow,
      arrow = _b === void 0 ? true : _b,
      offset = props.offset,
      className = props.className,
      children = props.children; // 鼠标移到popover内容区，不关闭popover

  var ref = useRef(0);

  var _c = useState(false),
      visible = _c[0],
      setVisible = _c[1];

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
      }, 300);
    },
    onFocus: function onFocus() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    }
  };
  return /*#__PURE__*/React.createElement(StylePopover, __assign({
    className: clsx('uc-tooltip', className),
    visible: visible,
    placement: placement,
    content: title,
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, actionProps) : /*#__PURE__*/React.createElement("span", __assign({}, actionProps), children));
};

Tooltip.displayName = 'UC-Tooltip';
export default Tooltip;
var templateObject_1;