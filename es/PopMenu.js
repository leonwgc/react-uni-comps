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

import React, { useState, useRef, useCallback } from 'react';
import Popover from './Popover';
import styled from 'styled-components';
import clsx from 'clsx';
import { boxShadow } from './colors';
var StyledPopover = styled(Popover)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"], ["\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: ", ";\n"])), boxShadow);
/** click/hover 弹出菜单, 默认click, 基于Popover */

var PopMenu = function PopMenu(props) {
  var _a;

  var content = props.content,
      _b = props.trigger,
      trigger = _b === void 0 ? 'click' : _b,
      _c = props.placement,
      placement = _c === void 0 ? 'bottom-right' : _c,
      _d = props.arrow,
      arrow = _d === void 0 ? false : _d,
      offset = props.offset,
      className = props.className,
      _e = props.closeOnClick,
      closeOnClick = _e === void 0 ? true : _e,
      _f = props.hoverDelay,
      hoverDelay = _f === void 0 ? 100 : _f,
      children = props.children,
      popoverRest = __rest(props, ["content", "trigger", "placement", "arrow", "offset", "className", "closeOnClick", "hoverDelay", "children"]);

  var ref = useRef(0);

  var _g = useState(false),
      visible = _g[0],
      setVisible = _g[1];

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
  }, []); // add active class to trigger el

  var otherProps = {
    className: clsx( /*#__PURE__*/React.isValidElement(children) ? (_a = children.props) === null || _a === void 0 ? void 0 : _a.className : '', {
      active: visible
    })
  };
  return /*#__PURE__*/React.createElement(StyledPopover, __assign({}, popoverRest, {
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
  }, actionProps), /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, __assign(__assign({}, actionProps), otherProps)) : /*#__PURE__*/React.createElement("span", __assign({}, actionProps, otherProps), children));
};

PopMenu.displayName = 'UC-PopMenu';
export default PopMenu;
var templateObject_1;