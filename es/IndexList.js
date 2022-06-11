import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';
import { prefixClassName } from './helper';
import Space from './Space';
import useEventListener from './hooks/useEventListener';
import useThrottle from './hooks/useThrottle';
var getClassName = prefixClassName('uc-index-list');
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  .", " {\n    overflow: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .", " {\n  }\n\n  .", " {\n    position: sticky;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n  }\n\n  .", " {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    font-size: 14px;\n    background-color: #fff;\n    margin: 0;\n  }\n\n  .", " {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 12px;\n    z-index: 300;\n\n    .", " {\n      cursor: pointer;\n      color: #999;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      -webkit-tap-highlight-color: transparent;\n      font-size: 12px;\n\n      &.active {\n        ", ";\n        color: #fff;\n        border-radius: 50%;\n      }\n    }\n  }\n"], ["\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  .", " {\n    overflow: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .", " {\n  }\n\n  .", " {\n    position: sticky;\n    top: 0;\n    left: 0;\n    box-sizing: border-box;\n    color: #333;\n    font-size: 14px;\n    padding: 8px 16px;\n    background-color: #f5f5f5;\n  }\n\n  .", " {\n    color: #666;\n    display: flex;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 10px 16px;\n    font-size: 14px;\n    background-color: #fff;\n    margin: 0;\n  }\n\n  .", " {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    right: 12px;\n    z-index: 300;\n\n    .", " {\n      cursor: pointer;\n      color: #999;\n      width: 16px;\n      height: 16px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      -webkit-tap-highlight-color: transparent;\n      font-size: 12px;\n\n      &.active {\n        ", ";\n        color: #fff;\n        border-radius: 50%;\n      }\n    }\n  }\n"])), getClassName('body'), getClassName('anchor'), getClassName('title'), getClassName('item'), getClassName('side'), getClassName('side-item'), getThemeColorCss('background-color'));
/** 索引列表 */

var IndexList = function IndexList(props) {
  var _a = props.data,
      data = _a === void 0 ? [] : _a,
      onItemClick = props.onItemClick,
      className = props.className,
      rest = __rest(props, ["data", "onItemClick", "className"]);

  var bodyRef = useRef();

  var _b = useState(0),
      activeIndex = _b[0],
      setActiveIndex = _b[1];

  var onScrollSpy = useThrottle(function () {
    var bodyEl = bodyRef.current;
    var children = bodyEl.children;

    for (var i = 0; i < children.length; i++) {
      var el = children[i];

      if (el.offsetTop + el.offsetHeight > bodyEl.scrollTop) {
        setActiveIndex(i);
        return;
      }
    }
  });
  useEventListener(bodyRef, 'scroll', onScrollSpy);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx(getClassName(), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: getClassName('body'),
    ref: bodyRef
  }, data.map(function (dataItem, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      "data-index": index,
      className: getClassName('anchor')
    }, /*#__PURE__*/React.createElement("div", {
      className: getClassName('title')
    }, dataItem.title), dataItem.children.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("dd", {
        className: getClassName('item'),
        onClick: function onClick() {
          onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        },
        key: idx,
        "data-value": item.value
      }, item.label);
    }));
  })), /*#__PURE__*/React.createElement(Space, {
    className: getClassName('side'),
    direction: "vertical",
    size: 2
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React.createElement("a", {
      className: clsx(getClassName('side-item'), {
        active: idx === activeIndex
      }),
      key: idx,
      onClick: function onClick() {
        setActiveIndex(idx);
        var anchors = bodyRef.current.children;
        var anchor = anchors[idx];
        bodyRef.current.scrollTo({
          top: anchor.offsetTop,
          left: 0
        });
      }
    }, item.title);
  })));
};

IndexList.displayName = 'uc-index-list';
export default IndexList;
var templateObject_1;