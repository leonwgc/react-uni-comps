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
import { Popover } from '../src';
import styled from 'styled-components';
import clsx from 'clsx';
var StylePopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  padding: 8px;\n"], ["\n  color: #fff;\n  padding: 8px;\n"])));
/** Tooltip */

var Tooltip = function Tooltip(props) {
  var title = props.title,
      _a = props.bgColor,
      bgColor = _a === void 0 ? 'black' : _a,
      _b = props.placement,
      placement = _b === void 0 ? 'top' : _b,
      _c = props.arrow,
      arrow = _c === void 0 ? true : _c,
      children = props.children; // 鼠标移到popover内容区，不关闭popover

  var ref = useRef(0);

  var _d = useState(false),
      visible = _d[0],
      setVisible = _d[1];

  var childProps = {
    onMouseEnter: function onMouseEnter() {
      return setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      ref.current = window.setTimeout(function () {
        setVisible(false);
      }, 300);
    }
  };
  return /*#__PURE__*/React.createElement(StylePopover, {
    className: clsx('uc-tooltip'),
    style: {
      background: bgColor
    },
    visible: visible,
    onMouseEnter: function onMouseEnter() {
      if (ref.current) {
        clearTimeout(ref.current);
      }

      setVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      setTimeout(function () {
        setVisible(false);
      }, 300);
    },
    placement: placement,
    content: title,
    arrow: arrow
  }, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, childProps) : /*#__PURE__*/React.createElement("span", __assign({}, childProps), children));
};

Tooltip.displayName = 'UC-Tooltip';
export default Tooltip;
var templateObject_1;