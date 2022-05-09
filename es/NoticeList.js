import { __assign, __makeTemplateObject, __rest, __spreadArray } from "tslib";
import clsx from 'clsx';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Space from './Space';
import Icon from './Icon';
import Text from './Text';
var StyledNoticeList = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"], ["\n  font-size: 14px;\n  padding: 0px 12px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: rgba(236, 146, 49, 0.1);\n  color: rgb(236, 146, 49);\n\n  &.hide {\n    display: none;\n  }\n\n  .icon-part {\n    flex-shrink: 0;\n    margin-right: 8px;\n  }\n\n  .content-wrap {\n    flex: 1 1;\n    overflow: hidden;\n    height: 100%;\n\n    .list {\n      height: 100%;\n      transition-property: transform;\n      transition-duration: 0.8s;\n      transition-timing-function: ease-in-out;\n      .item {\n        height: 100%;\n        display: flex;\n        align-items: center;\n      }\n    }\n  }\n  .content-extra {\n    display: inline-block;\n    flex-shrink: 0;\n    margin-left: 12px;\n  }\n"])));
/** 多条信息垂直滚动通知栏  */

var NoticeList = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.list,
      list = _a === void 0 ? [] : _a,
      _b = props.stayTime,
      stayTime = _b === void 0 ? 3000 : _b,
      icon = props.icon,
      _c = props.closeable,
      closeable = _c === void 0 ? false : _c,
      className = props.className,
      onClose = props.onClose,
      extra = props.extra,
      rest = __rest(props, ["list", "stayTime", "icon", "closeable", "className", "onClose", "extra"]);

  var listRef = useRef();
  var wrapRef = useRef();
  var timerRef = useRef();

  var _d = useState(true),
      visible = _d[0],
      setVisible = _d[1];

  var _e = useState(list),
      data = _e[0],
      setData = _e[1];

  useEffect(function () {
    setData(list);
  }, [list]);
  useEffect(function () {
    var wrap = wrapRef.current;
    var list = listRef.current;

    if (data.length > 1 && visible) {
      timerRef.current = window.setTimeout(function () {
        list.style.transitionProperty = 'transform';
        list.style.transform = "translateY(-".concat(wrap.offsetHeight, "px)");
      }, stayTime);
      return function () {
        window.clearTimeout(timerRef.current);
      };
    }
  }, [stayTime, data, visible]);
  return /*#__PURE__*/React.createElement(StyledNoticeList, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-noticelist', {
      hide: !visible
    })
  }), icon && /*#__PURE__*/React.createElement("div", {
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
        setData(__spreadArray([], data, true));
      }
    }
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      onClick: function onClick() {
        if (item.link) {
          location.href = item.link;
        }
      },
      className: clsx('item')
    }, /*#__PURE__*/React.createElement(Text, null, item.text));
  }))), (closeable || extra) && /*#__PURE__*/React.createElement("div", {
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
NoticeList.displayName = 'UC-NoticeList';
export default NoticeList;
var templateObject_1;