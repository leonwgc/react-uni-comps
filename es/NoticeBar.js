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

import clsx from 'clsx';
import React, { useRef, useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import Space from './Space';
import Icon from './Icon';
var StyledNoticeBar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 30px;\n  font-size: 14px;\n  line-height: 30px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n  overflow: hidden;\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    .content-text {\n      transition-property: transform;\n      transition-timing-function: linear;\n      white-space: nowrap;\n      flex: 1;\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"], ["\n  height: 30px;\n  font-size: 14px;\n  line-height: 30px;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n  overflow: hidden;\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n    display: flex;\n    align-items: center;\n\n    .content-text {\n      transition-property: transform;\n      transition-timing-function: linear;\n      white-space: nowrap;\n      flex: 1;\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));
/** 通告栏  */

var NoticeBar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var content = props.content,
      _a = props.delay,
      delay = _a === void 0 ? 2000 : _a,
      _b = props.icon,
      icon = _b === void 0 ? /*#__PURE__*/React.createElement(Icon, {
    type: "icon-horn"
  }) : _b,
      _c = props.speed,
      speed = _c === void 0 ? 50 : _c,
      _d = props.closeable,
      closeable = _d === void 0 ? false : _d,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = __rest(props, ["content", "delay", "icon", "speed", "closeable", "className", "onClose", "extra"]);

  var wrapRef = useRef();
  var contentRef = useRef();

  var _e = useState(0),
      v = _e[0],
      setV = _e[1];

  var _f = useState(true),
      visible = _f[0],
      setVisible = _f[1];

  useLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;
    if (container.offsetWidth >= text.offsetWidth) return;
    var timeout = window.setTimeout(function () {
      text.style.transitionDuration = Math.round(text.offsetWidth / speed) + "s";
      text.style.transform = "translateX(-" + text.offsetWidth + "px)";
    }, delay);
    return function () {
      window.clearTimeout(timeout);
    };
  }, [delay, speed]);
  useLayoutEffect(function () {
    var container = wrapRef.current;
    var text = contentRef.current;

    if (container.offsetWidth >= text.offsetWidth || v === 0) {
      return;
    }

    text.style.transform = "translateX(" + container.offsetWidth + "px)";
    text.style.transitionDuration = Math.round((container.offsetWidth + text.offsetWidth) / speed) + "s";
    text.style.transform = "translateX(-" + text.offsetWidth + "px)"; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [v]);
  return /*#__PURE__*/React.createElement(StyledNoticeBar, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-noticebar', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React.createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "content-text",
    key: v,
    onTransitionEnd: function onTransitionEnd() {
      setV(function (v) {
        return v + 1;
      });
    },
    ref: contentRef
  }, content)), (closeable || extra) && /*#__PURE__*/React.createElement("div", {
    className: clsx('content-extra')
  }, /*#__PURE__*/React.createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React.createElement(Icon, {
    type: "icon-guanbi",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeBar.displayName = 'UC-NoticeBar';
export default NoticeBar;
var templateObject_1;