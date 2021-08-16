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
import * as colors from './colors';
import clsx from 'clsx';
var StyledTabHeaderWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid ", ";\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  display: flex;\n  height: 44px;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  overflow-x: scroll;\n  border-bottom: 1px solid ", ";\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), colors.border);
var StyledTabHeadItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n  /* transition: all 0.3s ease-in-out; */\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    &.uc-tabs-header-line {\n      position: relative;\n      background-color: transparent !important;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0px, 0px);\n\n      &::after {\n        content: ' ';\n        position: absolute;\n        bottom: 0;\n        width: ", ";\n        height: 2px;\n        background-color: ", ";\n      }\n    }\n  }\n"], ["\n  flex: 1 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n  /* transition: all 0.3s ease-in-out; */\n\n  &.active {\n    color: ", ";\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    &.uc-tabs-header-line {\n      position: relative;\n      background-color: transparent !important;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0px, 0px);\n\n      &::after {\n        content: ' ';\n        position: absolute;\n        bottom: 0;\n        width: ", ";\n        height: 2px;\n        background-color: ", ";\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.color;
}, colors.disabledText, function (props) {
  return (props.activeIndex - props.count) * 100 + '%';
}, function (props) {
  return props.underlineWidth;
}, function (props) {
  return props.theme.color;
});
var StyledTabContentWrap = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  overflow: hidden;\n"], ["\n  overflow: hidden;\n"])));

var Tab = function Tab(_a) {
  var children = _a.children;
  return children;
};

var isValidtTabElement = function isValidtTabElement(el) {
  return /*#__PURE__*/React.isValidElement(el) && el.type === Tab;
};

var Tabs = function Tabs(_a) {
  var children = _a.children,
      _b = _a.color,
      color = _b === void 0 ? colors.primary : _b,
      _c = _a.underlineWidth,
      underlineWidth = _c === void 0 ? '100%' : _c,
      _d = _a.defaultIndex,
      defaultIndex = _d === void 0 ? 0 : _d,
      _e = _a.underline,
      underline = _e === void 0 ? true : _e,
      onIndexChange = _a.onIndexChange,
      className = _a.className,
      otherProps = __rest(_a, ["children", "color", "underlineWidth", "defaultIndex", "underline", "onIndexChange", "className"]);

  var _f = useState(defaultIndex),
      activeIndex = _f[0],
      setActiveIndex = _f[1];

  var count = React.Children.count(children);
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: {
      color: color
    }
  }, /*#__PURE__*/React.createElement("div", __assign({}, otherProps, {
    className: clsx('uc-tabs', className)
  }), /*#__PURE__*/React.createElement(StyledTabHeaderWrap, {
    className: "uc-tabs-header-wrap"
  }, React.Children.map(children, function (child, index) {
    if (isValidtTabElement(child)) {
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          disabled_1 = _a.disabled;
      return /*#__PURE__*/React.createElement(StyledTabHeadItem, {
        key: index,
        className: clsx('uc-tabs-header-item', {
          active: index === activeIndex,
          disabled: disabled_1
        }),
        onClick: function onClick() {
          if (!disabled_1 && index !== activeIndex) {
            setActiveIndex(index);

            if (typeof onIndexChange === 'function') {
              onIndexChange(index);
            }
          }
        }
      }, title);
    }
  }), underline ? /*#__PURE__*/React.createElement(StyledTabHeadItem, {
    className: clsx('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    underlineWidth: underlineWidth,
    activeIndex: activeIndex
  }) : null), /*#__PURE__*/React.createElement(StyledTabContentWrap, {
    className: "uc-tabs-content-wrap"
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
var templateObject_1, templateObject_2, templateObject_3;