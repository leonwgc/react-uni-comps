//#region  top
import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import useMount from './hooks/useMount';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 14px;\n  background-color: #fff;\n  user-select: none;\n  display: inline-flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .uc-sidebar-item {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px 12px;\n    background-color: #f5f5f5;\n\n    &.active {\n      ", "\n      background-color: #fff;\n      border-radius: 0;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n    &.prev {\n      border-radius: 0 0 8px 0;\n    }\n    &.next {\n      border-radius: 0 8px 0 0;\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n  overflow-y: scroll;\n  box-sizing: border-box;\n  position: relative;\n  font-size: 14px;\n  background-color: #fff;\n  user-select: none;\n  display: inline-flex;\n  flex-direction: column;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  .uc-sidebar-item {\n    box-sizing: border-box;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 14px 12px;\n    background-color: #f5f5f5;\n\n    &.active {\n      ", "\n      background-color: #fff;\n      border-radius: 0;\n    }\n    &.disabled {\n      cursor: not-allowed;\n      color: ", ";\n    }\n    &.prev {\n      border-radius: 0 0 8px 0;\n    }\n    &.next {\n      border-radius: 0 8px 0 0;\n    }\n  }\n"])), getThemeColorCss('color'), vars.disabledText); //#endregion

/**
 * 侧边导航
 */

var SideBar = function SideBar(_a) {
  var _b = _a.items,
      items = _b === void 0 ? [] : _b,
      index = _a.index,
      _c = _a.defaultIndex,
      defaultIndex = _c === void 0 ? 0 : _c,
      onChange = _a.onChange,
      className = _a.className,
      rest = __rest(_a, ["items", "index", "defaultIndex", "onChange", "className"]);

  var _d = useState(typeof index === 'undefined' ? defaultIndex : index),
      _v = _d[0],
      _setV = _d[1];

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
  }), items.map(function (item, idx) {
    var title = item.title,
        disabled = item.disabled;
    var prev = _v - 1 === idx;
    var next = _v + 1 === idx;
    return /*#__PURE__*/React.createElement("div", {
      key: item.key || idx,
      className: clsx('uc-sidebar-item', {
        active: idx === _v,
        disabled: disabled,
        prev: prev,
        next: next
      }),
      onClick: function onClick() {
        if (!disabled && idx !== _v) {
          onChange === null || onChange === void 0 ? void 0 : onChange(idx);

          _setV(idx);
        }
      }
    }, title);
  }));
};

export default SideBar;
var templateObject_1;