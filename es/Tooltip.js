import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Popover from './Popover';
import clsx from 'clsx';
var StylePopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #fff;\n  padding: 6px 8px;\n  max-width: 250px;\n"], ["\n  color: #fff;\n  padding: 6px 8px;\n  max-width: 250px;\n"])));
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
      style = props.style,
      children = props.children,
      rest = __rest(props, ["title", "hoverDelay", "placement", "arrow", "offset", "className", "style", "children"]); // 鼠标移到popover内容区，不关闭popover


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
  return /*#__PURE__*/React.createElement(StylePopover, __assign({}, rest, {
    className: clsx('uc-tooltip', className),
    style: __assign({
      background: '#333'
    }, style),
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