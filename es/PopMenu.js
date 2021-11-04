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

import React, { useState, useRef, useCallback } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
import { boxShadow } from './colors';
var StyledPopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"], ["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"])), boxShadow);
/** click/hover/focus 弹出菜单, 默认click, 基于Popover */

var PopMenu = function PopMenu(props) {
  var content = props.content,
      _a = props.trigger,
      trigger = _a === void 0 ? 'click' : _a,
      _b = props.placement,
      placement = _b === void 0 ? 'bottom-right' : _b,
      _c = props.arrow,
      arrow = _c === void 0 ? false : _c,
      offset = props.offset,
      className = props.className,
      _d = props.closeOnClick,
      closeOnClick = _d === void 0 ? true : _d,
      _e = props.hoverDelay,
      hoverDelay = _e === void 0 ? 100 : _e,
      children = props.children;
  var ref = useRef(0);

  var _f = useState(false),
      visible = _f[0],
      setVisible = _f[1];

  var actionProps = {};

  if (trigger === 'click') {
    actionProps = {
      onClick: function onClick() {
        setVisible(true);
      }
    };
  } else if (trigger === 'hover') {
    actionProps = {
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
      }
    };
  }

  var onClose = useCallback(function () {
    setVisible(false);
  }, []);
  return /*#__PURE__*/React.createElement(StyledPopover, __assign({
    className: clsx('uc-popmenu', className),
    visible: visible,
    onClose: onClose,
    placement: placement,
    closeOnClickOutside: true,
    content: /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        e.stopPropagation();

        if (closeOnClick) {
          onClose();
        }
      }
    }, content),
    arrow: arrow,
    offset: offset
  }, actionProps), /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, actionProps) : /*#__PURE__*/React.createElement("span", __assign({}, actionProps), children));
};

PopMenu.displayName = 'UC-PopMenu';
export default PopMenu;
var templateObject_1;