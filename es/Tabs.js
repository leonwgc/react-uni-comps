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

import React, { useState, useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as colors from './colors';
import useGesture from './hooks/useGesture';
import { isMobile } from './dom';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { throttle } from './helper';
var isMobileEnv = isMobile;
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"], ["\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"])), colors.border);
var StyledTabHeadItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translateX(", ");\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"], ["\n  flex: 1;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  min-width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translateX(", ");\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"])), getThemeColorCss('color'), colors.disabledText, function (props) {
  return props.value * 100 + '%';
}, getThemeColorCss('background-color'));
/**
 *  选项卡项，放在Tabs里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Tab = function Tab(_a) {
  var children = _a.children;
  return children;
};
/**
 * 选项卡切换
 */


var Tabs = function Tabs(_a) {
  var children = _a.children,
      _b = _a.underline,
      underline = _b === void 0 ? true : _b,
      value = _a.value,
      _c = _a.defaultValue,
      defaultValue = _c === void 0 ? 0 : _c,
      _d = _a.border,
      border = _d === void 0 ? true : _d,
      onChange = _a.onChange,
      extra = _a.extra,
      swipe = _a.swipe,
      className = _a.className,
      rest = __rest(_a, ["children", "underline", "value", "defaultValue", "border", "onChange", "extra", "swipe", "className"]);

  var count = React.Children.count(children);
  var underlineElRef = useRef();
  var contentWrapElRef = useRef();

  var _e = useState(typeof value === 'undefined' ? defaultValue : value),
      _v = _e[0],
      _setV = _e[1];

  useGesture(contentWrapElRef, {
    onSwipe: function onSwipe(e) {
      e.preventDefault();

      if (e.direction === 'right' && _v > 0) {
        // go to left tab
        var prevIndex = _v - 1;

        _setV(prevIndex);

        onChange === null || onChange === void 0 ? void 0 : onChange(prevIndex);
      } else if (e.direction === 'left' && _v < count - 1) {
        // go to right tab
        var nextIndex = _v + 1;

        _setV(nextIndex);

        onChange === null || onChange === void 0 ? void 0 : onChange(nextIndex);
      }
    }
  });
  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  var setUnderlineSize = useCallback(function () {
    if (underline) {
      var underlineEl = underlineElRef.current;
      var next = underlineEl.nextSibling;

      if (next) {
        underlineEl.style.width = next.offsetWidth + 'px';
      }
    }
  }, [underline]);
  useLayoutEffect(function () {
    setUnderlineSize();
  }, [setUnderlineSize]);
  useEffect(function () {
    var throttledSetUnderlineSize = throttle(setUnderlineSize, 34);
    window.addEventListener('resize', throttledSetUnderlineSize);
    return function () {
      window.removeEventListener('resize', throttledSetUnderlineSize);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    className: clsx('uc-tabs', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-tabs-header-wrap', {
      'no-border': !border
    })
  }, underline ? /*#__PURE__*/React.createElement(StyledTabHeadItem, {
    ref: underlineElRef,
    className: clsx('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    value: _v
  }, /*#__PURE__*/React.createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })) : null, React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          disabled_1 = _a.disabled;
      return /*#__PURE__*/React.createElement(StyledTabHeadItem, {
        key: index,
        className: clsx('uc-tabs-header-item', {
          active: index === _v,
          disabled: disabled_1
        }),
        onClick: function onClick() {
          if (!disabled_1 && index !== _v) {
            onChange === null || onChange === void 0 ? void 0 : onChange(index);

            _setV(index);
          }
        }
      }, title);
    }
  }), extra ? /*#__PURE__*/React.createElement("span", {
    className: clsx('uc-tabs-extra', {
      underline: underline
    })
  }, extra) : null), /*#__PURE__*/React.createElement("div", {
    className: "uc-tabs-content-wrap",
    ref: isMobileEnv && swipe ? contentWrapElRef : null
  }, React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var _a = child.props,
          children_1 = _a.children,
          disabled = _a.disabled;
      var style = {};

      if (index !== _v || disabled) {
        style.display = 'none';
      }

      return /*#__PURE__*/React.createElement("div", {
        key: index,
        style: style
      }, children_1);
    }
  })));
};
/** Tab直接子元素 */


Tabs.Tab = Tab;
export default Tabs;
var templateObject_1, templateObject_2;