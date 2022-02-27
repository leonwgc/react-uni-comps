//#region  top
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

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { attachPropertiesToComponent } from './util';
import useMount from './hooks/useMount';
/**
 *  侧边导航项，放在SideBar里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Item = function Item(_a) {
  var children = _a.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};

var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 14px;\n  background-color: #fff;\n  user-select: none;\n  display: inline-flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .uc-sidebar-item {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px 12px;\n    background-color: #f5f5f5;\n\n    &.active {\n      ", "\n      background-color: #fff;\n      border-radius: 0;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n    &.prev {\n      border-radius: 0 0 8px 0;\n    }\n    &.next {\n      border-radius: 0 8px 0 0;\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 14px;\n  background-color: #fff;\n  user-select: none;\n  display: inline-flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .uc-sidebar-item {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px 12px;\n    background-color: #f5f5f5;\n\n    &.active {\n      ", "\n      background-color: #fff;\n      border-radius: 0;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n    &.prev {\n      border-radius: 0 0 8px 0;\n    }\n    &.next {\n      border-radius: 0 8px 0 0;\n    }\n  }\n"])), getThemeColorCss('color'), vars.disabledText); //#endregion

/**
 * 侧边导航
 */

var SideBar = function SideBar(_a) {
  var children = _a.children,
      index = _a.index,
      _b = _a.defaultIndex,
      defaultIndex = _b === void 0 ? 0 : _b,
      onChange = _a.onChange,
      className = _a.className,
      rest = __rest(_a, ["children", "index", "defaultIndex", "onChange", "className"]);

  var _c = useState(typeof index === 'undefined' ? defaultIndex : index),
      _v = _c[0],
      _setV = _c[1];

  var wrapElRef = useRef();
  useUpdateEffect(function () {
    if (index !== _v) {
      _setV(index);
    }
  }, [index]);
  useMount(function () {
    var wrapEl = wrapElRef.current;

    if (wrapEl && wrapEl.scrollHeight > wrapEl.offsetHeight) {
      var itemEl = wrapEl.querySelector('.uc-sidebar-item'); // scroll

      wrapEl.scroll({
        top: (_v - 1) * itemEl.offsetHeight
      });
    }
  });
  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    ref: wrapElRef,
    className: clsx('uc-sidebar', className)
  }), React.Children.map(children, function (child, idx) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var _a = child.props,
          title = _a.title,
          disabled_1 = _a.disabled;
      var prev = _v - 1 === idx;
      var next = _v + 1 === idx;
      return /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: clsx('uc-sidebar-item', {
          active: idx === _v,
          disabled: disabled_1,
          prev: prev,
          next: next
        }),
        onClick: function onClick() {
          if (!disabled_1 && idx !== _v) {
            onChange === null || onChange === void 0 ? void 0 : onChange(idx);

            _setV(idx);
          }
        }
      }, title);
    }
  }));
};

export default attachPropertiesToComponent(SideBar, {
  /** 子项 */
  Item: Item
});
var templateObject_1;