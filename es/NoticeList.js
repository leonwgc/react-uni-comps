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

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

import clsx from 'clsx';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from './Space';
import IconCross from './IconCross';
import useThisRef from './hooks/useThisRef';
import Text from './Text';
var StyledNoticeList = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"], ["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));
/** 多条信息垂直滚动通知栏  */

var NoticeList = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.list,
      list = _a === void 0 ? [] : _a,
      _b = props.delay,
      delay = _b === void 0 ? 2000 : _b,
      icon = props.icon,
      _c = props.closeable,
      closeable = _c === void 0 ? false : _c,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = __rest(props, ["list", "delay", "icon", "closeable", "className", "onClose", "extra"]);

  var listRef = useRef();
  var wrapRef = useRef();

  var _d = useState(true),
      visible = _d[0],
      setVisible = _d[1];

  var _e = useState(list),
      data = _e[0],
      setData = _e[1];

  var thisRef = useThisRef({
    delay: delay,
    visible: visible
  });
  useEffect(function () {
    setData(list);
  }, [list]);
  useEffect(function () {
    var v = thisRef.current;
    var wrap = wrapRef.current;
    var list = listRef.current;

    if (data.length > 1) {
      var timer_1 = window.setTimeout(function () {
        list.style.transitionProperty = 'transform';
        list.style.transform = "translateY(-" + wrap.offsetHeight + "px)";
      }, v.delay);
      return function () {
        window.clearTimeout(timer_1);
      };
    }
  }, [thisRef, data]);
  return /*#__PURE__*/React.createElement(StyledNoticeList, __assign({
    ref: ref,
    className: clsx(className, 'uc-noticelist', {
      hide: !visible
    })
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    className: "icon-part"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "content-wrap",
    ref: wrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "list",
    ref: listRef,
    onTransitionEnd: function onTransitionEnd() {
      // move
      listRef.current.style.transitionProperty = 'none';
      listRef.current.style.transform = 'none';
      var lIndex = data.length - 1;

      if (lIndex > 0) {
        data.push(data[0]);
        data.shift();
        setData(__spreadArray([], data));
      }
    }
  }, data.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.text,
      onClick: function onClick() {
        if (item.link) {
          location.href = item.link;
        }
      },
      className: clsx('item')
    }, /*#__PURE__*/React.createElement(Text, null, item.text));
  }))), (closeable || extra) && /*#__PURE__*/React.createElement("div", {
    className: clsx('content-extra')
  }, /*#__PURE__*/React.createElement(Space, null, props.extra, props.closeable && /*#__PURE__*/React.createElement(IconCross, {
    size: 20,
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      setVisible(false);
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }))));
});
NoticeList.displayName = 'UC-NoticeList';
export default NoticeList;
var templateObject_1;