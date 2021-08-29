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

import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import IconCross from '../IconCross';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import styled from 'styled-components';
import TransitionElement from '../TransitionElement';
import clsx from 'clsx';
import Backdrop from '../Backdrop';
import { MARGIN } from './utils/getModalStyle'; // port from https://github.com/bytedance/guide and refactor

var StyledPopover = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1100;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"], ["\n  position: absolute;\n  z-index: 1100;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"])));
/**
 * 点击/鼠标移入元素，弹出气泡式的卡片浮层
 *
 * @param {Props} props
 * @return {*}  {React.ReactElement}
 */

var Popover = function Popover(props) {
  var _a = props.placement,
      placement = _a === void 0 ? 'bottom' : _a,
      content = props.content,
      _b = props.arrow,
      arrow = _b === void 0 ? true : _b,
      visible = props.visible,
      closable = props.closable,
      onClose = props.onClose,
      className = props.className,
      style = props.style,
      children = props.children,
      backdrop = props.backdrop,
      _c = props.offset,
      offset = _c === void 0 ? {} : _c,
      rest = __rest(props, ["placement", "content", "arrow", "visible", "closable", "onClose", "className", "style", "children", "backdrop", "offset"]);

  var childrenRef = useRef();
  var popoverRef = useRef(null);
  var resizeTimerRef = useRef(0);
  var offsetRef = useRef(offset);

  var _d = useState({}),
      modalStyle = _d[0],
      setModalStyle = _d[1];

  var _e = useState({}),
      arrowStyle = _e[0],
      setArrowStyle = _e[1];

  useEffect(function () {
    offsetRef.current = offset;
  }, [offset]);
  useEffect(function () {
    var anchorEl = childrenRef.current;
    var scrollContainer = getScrollContainer(anchorEl);

    var calculateStyle = function calculateStyle(anchorEl, scrollContainer) {
      var modalEl = popoverRef.current;
      var modalStyle = getModalStyle(modalEl, anchorEl, document.body, scrollContainer, placement, offsetRef.current);
      var arrowStyle = getArrowStyle(modalEl, placement, backdrop, MARGIN);
      setModalStyle(modalStyle);
      setArrowStyle(arrowStyle);
    };

    var handleResize = function handleResize() {
      if (resizeTimerRef.current) {
        window.cancelAnimationFrame(resizeTimerRef.current);
      }

      resizeTimerRef.current = window.requestAnimationFrame(function () {
        calculateStyle(anchorEl, scrollContainer);
      });
    };

    if (visible) {
      calculateStyle(anchorEl, scrollContainer);
      window.addEventListener('resize', handleResize);
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [visible, placement, backdrop]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, {
    ref: childrenRef
  }), visible ? /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement(React.Fragment, null, backdrop ? /*#__PURE__*/React.createElement(Backdrop, {
    onClick: onClose
  }) : null, /*#__PURE__*/React.createElement(TransitionElement, {
    ref: popoverRef
  }, /*#__PURE__*/React.createElement(StyledPopover, __assign({
    className: clsx(className, 'uc-popover', {
      backdrop: backdrop
    }),
    style: __assign(__assign({}, modalStyle), style)
  }, rest), arrow && /*#__PURE__*/React.createElement("span", {
    className: clsx('uc-popover-arrow'),
    style: arrowStyle
  }), closable && /*#__PURE__*/React.createElement(IconCross, {
    className: clsx('uc-popover-close'),
    size: 20,
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-popover-content')
  }, content)))), document.body) : null);
};

export default Popover;
var templateObject_1;