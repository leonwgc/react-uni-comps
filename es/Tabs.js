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

import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import clsx from 'clsx';
var StyledTabHeaderWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid #e8e8e8;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid #e8e8e8;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])));
var StyledTabHeadItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1 0;\n  font-size: 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 60px;\n  user-select: none;\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: #bcbcbc;\n  }\n"], ["\n  flex: 1 0;\n  font-size: 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 60px;\n  user-select: none;\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: #bcbcbc;\n  }\n"])), function (props) {
  return props.theme.color;
});
var StyledLine = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: ", ";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: transform 0.3s ease;\n  transform: translate3d(", ", 0px, 0px);\n  display: flex;\n  justify-content: center;\n  > .line {\n    width: ", ";\n    background-color: ", ";\n    height: ", "px;\n  }\n"], ["\n  width: ", ";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  transition: transform 0.3s ease;\n  transform: translate3d(", ", 0px, 0px);\n  display: flex;\n  justify-content: center;\n  > .line {\n    width: ", ";\n    background-color: ", ";\n    height: ", "px;\n  }\n"])), function (props) {
  return props.itemWidth;
}, function (props) {
  return props.activeIndex * 100 + '%';
}, function (props) {
  return typeof props.lineWidth === 'number' ? props.lineWidth + 'px' : props.lineWidth;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.height;
});
var StyledTabContentWrap = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));

var Tab = function Tab(_a) {
  var children = _a.children;
  return children;
};

var isValidtTabElement = function isValidtTabElement(el) {
  return /*#__PURE__*/React.isValidElement(el) && el.type === Tab;
};

var Tabs = function Tabs(_a) {
  var children = _a.children,
      _b = _a.themeColor,
      themeColor = _b === void 0 ? '#1890ff' : _b,
      _c = _a.lineWidth,
      lineWidth = _c === void 0 ? '100%' : _c,
      _d = _a.defaultIndex,
      defaultIndex = _d === void 0 ? 0 : _d,
      otherProps = __rest(_a, ["children", "themeColor", "lineWidth", "defaultIndex"]);

  var _e = useState(defaultIndex),
      activeIndex = _e[0],
      setActiveIndex = _e[1];

  var len = React.Children.count(children);
  var itemWidth = 100 / len + '%';
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: {
      color: themeColor
    }
  }, /*#__PURE__*/React.createElement("div", __assign({}, otherProps), /*#__PURE__*/React.createElement(StyledTabHeaderWrap, {
    className: "tab-header-wrap"
  }, React.Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          _c = _a.disabled,
          disabled_1 = _c === void 0 ? false : _c;
      var itemCls = clsx('tab-header-item', {
        active: index === activeIndex,
        disabled: disabled_1
      });
      return /*#__PURE__*/React.createElement(StyledTabHeadItem, {
        key: index,
        className: itemCls,
        onClick: function onClick() {
          if (!disabled_1) {
            setActiveIndex(index);
          }
        }
      }, title);
    }
  }), /*#__PURE__*/React.createElement(StyledLine, {
    itemWidth: itemWidth,
    lineWidth: lineWidth,
    height: 2,
    activeIndex: activeIndex
  }, /*#__PURE__*/React.createElement("div", {
    className: "line"
  }))), /*#__PURE__*/React.createElement(StyledTabContentWrap, {
    className: "tab-content-wrap"
  }, React.Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var children_1 = child.props.children;
      var style = {};

      if (index !== activeIndex) {
        style.display = 'none';
      }

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: style
      }, children_1);
    } else {
      throw new Error('Tabs can only contain Tab element');
    }
  }))));
};
/** Tab直接子元素 */


Tabs.Tab = Tab;
export default Tabs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;