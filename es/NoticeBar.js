import { __assign, __makeTemplateObject, __rest } from "tslib";
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
    type: "uc-icon-horn"
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
      text.style.transitionDuration = "".concat(Math.round(text.offsetWidth / speed), "s");
      text.style.transform = "translateX(-".concat(text.offsetWidth, "px)");
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

    text.style.transform = "translateX(".concat(container.offsetWidth, "px)");
    text.style.transitionDuration = "".concat(Math.round((container.offsetWidth + text.offsetWidth) / speed), "s");
    text.style.transform = "translateX(-".concat(text.offsetWidth, "px)"); // eslint-disable-next-line react-hooks/exhaustive-deps
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
    type: "uc-icon-guanbi",
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