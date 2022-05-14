import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { getThemeColorCss } from './themeHelper';
import Button from './Button';
import { throttle } from './helper';
var clxPrefix = 'uc-index-list';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  .", "-body {\n    overflow: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    .", "-anchor {\n    }\n\n    .", "-title {\n      position: sticky;\n      top: 0;\n      left: 0;\n      box-sizing: border-box;\n      color: #333;\n      font-size: 14px;\n      padding: 8px 16px;\n      background-color: #f5f5f5;\n    }\n\n    .", "-item {\n      color: #666;\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      padding: 10px 16px;\n      font-size: 14px;\n      background-color: #fff;\n      margin: 0;\n    }\n  }\n\n  .", "-side {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    z-index: 300;\n    display: flex;\n    flex-direction: column;\n    transform: translateY(-50%);\n    padding: 0 12px;\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n\n    .", "-side-item {\n      color: #999;\n\n      &.active {\n        ", "\n      }\n    }\n  }\n"], ["\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n\n  .", "-body {\n    overflow: scroll;\n    height: 100%;\n    width: 100%;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    .", "-anchor {\n    }\n\n    .", "-title {\n      position: sticky;\n      top: 0;\n      left: 0;\n      box-sizing: border-box;\n      color: #333;\n      font-size: 14px;\n      padding: 8px 16px;\n      background-color: #f5f5f5;\n    }\n\n    .", "-item {\n      color: #666;\n      display: flex;\n      align-items: center;\n      box-sizing: border-box;\n      padding: 10px 16px;\n      font-size: 14px;\n      background-color: #fff;\n      margin: 0;\n    }\n  }\n\n  .", "-side {\n    position: absolute;\n    top: 50%;\n    right: 0;\n    z-index: 300;\n    display: flex;\n    flex-direction: column;\n    transform: translateY(-50%);\n    padding: 0 12px;\n    cursor: pointer;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n\n    .", "-side-item {\n      color: #999;\n\n      &.active {\n        ", "\n      }\n    }\n  }\n"])), clxPrefix, clxPrefix, clxPrefix, clxPrefix, clxPrefix, clxPrefix, getThemeColorCss('color'));
/** 索引列表 */

var IndexList = function IndexList(props) {
  var _a = props.data,
      data = _a === void 0 ? [] : _a,
      onItemClick = props.onItemClick,
      className = props.className,
      _b = props.scrollBehavior,
      scrollBehavior = _b === void 0 ? 'smooth' : _b,
      rest = __rest(props, ["data", "onItemClick", "className", "scrollBehavior"]);

  var bodyRef = useRef();

  var _c = useState(0),
      activeIndex = _c[0],
      setActiveIndex = _c[1];

  useEffect(function () {
    var bodyEl = bodyRef.current;

    if (bodyEl) {
      var scrollSpy_1 = throttle(function () {
        var children = bodyEl.children;

        for (var i = 0; i < children.length; i++) {
          var el = children[i];

          if (el.offsetTop + el.offsetHeight > bodyEl.scrollTop) {
            setActiveIndex(i);
            return;
          }
        }
      });
      bodyEl.addEventListener('scroll', scrollSpy_1);
      return function () {
        bodyEl.removeEventListener('scroll', scrollSpy_1);
      };
    }
  }, []);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-index-list', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx(clxPrefix + '-body'),
    ref: bodyRef
  }, data.map(function (dataItem, index) {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      "data-index": index,
      className: clsx(clxPrefix + '-anchor')
    }, /*#__PURE__*/React.createElement("div", {
      className: clsx(clxPrefix + '-title')
    }, dataItem.title), dataItem.children.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("dd", {
        className: clsx(clxPrefix + '-item'),
        onClick: function onClick() {
          onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        },
        key: idx,
        "data-value": item.value
      }, item.label);
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: clsx(clxPrefix + '-side')
  }, data.map(function (item, idx) {
    return /*#__PURE__*/React.createElement(Button, {
      as: "a",
      className: clsx(clxPrefix + '-side-item', {
        active: idx === activeIndex
      }),
      key: idx,
      onClick: function onClick() {
        var anchors = bodyRef.current.children;
        var anchor = anchors[idx];
        bodyRef.current.scrollTo({
          top: anchor.offsetTop,
          left: 0,
          behavior: scrollBehavior
        });
        setActiveIndex(idx);
      }
    }, item.title);
  })));
};

IndexList.displayName = 'uc-index-list';
export default IndexList;
var templateObject_1;