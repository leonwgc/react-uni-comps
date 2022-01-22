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

import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Icon from '../Icon';
import { getArrowStyle, getModalStyle, getScrollContainer } from './utils';
import styled from 'styled-components';
import clsx from 'clsx';
import Mask from '../Mask';
import { MARGIN } from './utils/getModalStyle';
import useCallbackRef from '../hooks/useCallbackRef';
import useUpdateEffect from '../hooks/useUpdateEffect';
import { boxShadow, animationNormal } from '../vars';
import { useSpring, animated, easings } from '@react-spring/web'; // port from https://github.com/bytedance/guide and refactor

var StyledPopover = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: ", ";\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 12px;\n    right: 12px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n    font-size: 16px;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    z-index: -1;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"], ["\n  position: absolute;\n  z-index: 1000;\n  background: #fff;\n  border-radius: 2px;\n\n  box-shadow: ", ";\n  .uc-popover-content {\n  }\n\n  .uc-popover-close {\n    position: absolute;\n    z-index: 10;\n    top: 12px;\n    right: 12px;\n    cursor: pointer;\n    color: #000;\n    opacity: 0.35;\n    font-size: 16px;\n\n    :hover {\n      opacity: 0.75;\n    }\n  }\n\n  .uc-popover-arrow {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    z-index: -1;\n    background: inherit;\n    transform: rotate(45deg);\n  }\n"])), boxShadow);
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
      onVisibleChange = props.onVisibleChange,
      onClose = props.onClose,
      className = props.className,
      style = props.style,
      children = props.children,
      mask = props.mask,
      maskStyle = props.maskStyle,
      maskClass = props.maskClass,
      mountContainer = props.mountContainer,
      _c = props.closeOnClickOutside,
      closeOnClickOutside = _c === void 0 ? true : _c,
      _d = props.closeOnMaskClick,
      closeOnMaskClick = _d === void 0 ? true : _d,
      _e = props.animated,
      animated = _e === void 0 ? true : _e,
      _f = props.offset,
      offset = _f === void 0 ? {} : _f,
      rest = __rest(props, ["placement", "content", "arrow", "visible", "closable", "onVisibleChange", "onClose", "className", "style", "children", "mask", "maskStyle", "maskClass", "mountContainer", "closeOnClickOutside", "closeOnMaskClick", "animated", "offset"]);

  var anchorRef = useRef();
  var popoverRef = useRef(null);
  var resizeTimerRef = useRef(0);
  var offsetRef = useRef(offset);
  var onCloseRef = useCallbackRef(onClose);

  var _g = useState({}),
      modalStyle = _g[0],
      setModalStyle = _g[1];

  var _h = useState({}),
      arrowStyle = _h[0],
      setArrowStyle = _h[1]; // animation effect


  var _j = useState(visible),
      active = _j[0],
      setActive = _j[1];

  var mountNode = (mountContainer === null || mountContainer === void 0 ? void 0 : mountContainer()) || document.body;
  useEffect(function () {
    offsetRef.current = offset;
  }, [offset]);
  useUpdateEffect(function () {
    onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(visible);
  }, [visible]);
  useEffect(function () {
    var anchorEl = anchorRef.current;
    var scrollContainer = getScrollContainer(anchorEl); // todo: support cust scroll container , by now it's window

    var calculateStyle = function calculateStyle(anchorEl, scrollContainer) {
      var modalEl = popoverRef.current;
      var modalStyle = getModalStyle(modalEl, anchorEl, document.body, scrollContainer, placement, offsetRef.current);
      var arrowStyle = getArrowStyle(modalEl, placement, mask, MARGIN);
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
  }, [visible, placement, mask]);
  var closeOutsideHandler = useCallback(function (e) {
    var _a;

    var el = popoverRef.current;
    var anchor = anchorRef.current;

    if (el && !el.contains(e.target) && !anchor.contains(e.target)) {
      (_a = onCloseRef.current) === null || _a === void 0 ? void 0 : _a.call(onCloseRef);
    }
  }, [onCloseRef]);
  useEffect(function () {
    if (closeOnClickOutside) {
      window.addEventListener('click', closeOutsideHandler, false);
      return function () {
        window.removeEventListener('click', closeOutsideHandler, false);
      };
    }
  }, [closeOnClickOutside, closeOutsideHandler]);

  var _k = useSpring({
    translate: visible ? 0 : 10,
    opacity: visible ? 1 : 0,
    onStart: function onStart() {
      setActive(true);
    },
    onRest: function onRest() {
      setActive(visible);
    },
    immediate: !animated,
    config: {
      duration: animationNormal,
      easing: easings.easeInOutQuart
    }
  }),
      translate = _k.translate,
      opacity = _k.opacity;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, {
    ref: anchorRef
  }), /*#__PURE__*/ReactDOM.createPortal((visible || active) && /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-popover-wrap')
  }, mask && /*#__PURE__*/React.createElement(Mask, {
    className: maskClass,
    style: maskStyle,
    onClick: function onClick() {
      closeOnMaskClick && (onClose === null || onClose === void 0 ? void 0 : onClose());
    }
  }), /*#__PURE__*/React.createElement(StyledPopover, __assign({}, rest, {
    ref: popoverRef,
    className: clsx(className, 'uc-popover', {
      mask: mask
    }),
    style: __assign(__assign(__assign({}, modalStyle), style), {
      opacity: opacity,
      transform: translate.to(function (v) {
        var p = placement.split('-')[0];

        if (p === 'bottom') {
          return "translate(0, -".concat(v, "%)");
        }

        if (p === 'top') {
          return "translate(0, ".concat(v, "%)");
        }

        if (p === 'left') {
          return "translate(".concat(v, "%, 0)");
        }

        if (p === 'right') {
          return "translate(-".concat(v, "%, 0)");
        }

        return 'none';
      })
    })
  }), arrow && /*#__PURE__*/React.createElement("span", {
    className: clsx('uc-popover-arrow'),
    style: arrowStyle
  }), closable && /*#__PURE__*/React.createElement(Icon, {
    type: "uc-icon-guanbi",
    className: clsx('uc-popover-close'),
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-popover-content')
  }, content))), mountNode));
};

export default Popover;
var templateObject_1;