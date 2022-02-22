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

import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as vars from './vars';
import { getThemeColorCss } from './themeHelper';
import useUpdateEffect from './hooks/useUpdateEffect';
import { throttle } from './helper';
import FingerGesture from './FingerGesture';
import useCallbackRef from './hooks/useCallbackRef';
import { attachPropertiesToComponent } from './util';
import usePrevious from './hooks/usePrevious';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    box-sizing: border-box;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n  .uc-tabs-content-wrap {\n    overflow: hidden;\n  }\n  .uc-tabs-header-wrap {\n    display: flex;\n    height: 44px;\n    box-sizing: border-box;\n    position: relative;\n    margin: 0;\n    padding: 0;\n    overflow-x: scroll;\n    border-bottom: 1px solid ", ";\n    align-items: center;\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    &.no-border {\n      border-bottom: none;\n    }\n\n    .uc-tabs-extra {\n      margin-left: 16px;\n    }\n  }\n"])), vars.border);
var StyledTabHeadItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  flex: none;\n  width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0, 0);\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"], ["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #000000d9;\n  font-size: 14px;\n  flex: none;\n  width: 56px;\n  user-select: none;\n\n  &.active {\n    ", "\n    font-weight: 500;\n  }\n  &.disabled {\n    cursor: not-allowed;\n    color: ", ";\n  }\n\n  &.uc-tabs-header-item {\n    height: 100%;\n    box-sizing: border-box;\n    cursor: pointer;\n    &.uc-tabs-header-line {\n      position: absolute;\n      left: 0;\n      top: 0;\n      pointer-events: none;\n      transition: transform 0.3s ease;\n      transform: translate3d(", ", 0, 0);\n\n      .line {\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        ", "\n      }\n    }\n  }\n"])), getThemeColorCss('color'), vars.disabledText, function (props) {
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
}; //#endregion

/**
 * 选项卡切换
 */


var Tabs = function Tabs(_a) {
  var children = _a.children,
      _b = _a.underline,
      underline = _b === void 0 ? '50%' : _b,
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
  var headerWrapElRef = useRef();

  var _e = useState(typeof value === 'undefined' ? defaultValue : value),
      _v = _e[0],
      _setV = _e[1];

  var valRef = useCallbackRef(_v);
  var onChangeRef = useCallbackRef(onChange);
  useLayoutEffect(function () {
    var fg;

    if (swipe && contentWrapElRef.current) {
      var el = contentWrapElRef.current;
      fg = new FingerGesture(el, {
        onSwipe: function onSwipe(e) {
          var _a, _b;

          if (e.direction === 'right' && valRef.current > 0) {
            // go to left tab
            var prevIndex = valRef.current - 1;

            _setV(prevIndex);

            (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, prevIndex);
          } else if (e.direction === 'left' && valRef.current < count - 1) {
            // go to right tab
            var nextIndex = valRef.current + 1;

            _setV(nextIndex);

            (_b = onChangeRef.current) === null || _b === void 0 ? void 0 : _b.call(onChangeRef, nextIndex);
          }
        }
      });
    }

    return function () {
      if (swipe && fg) {
        fg === null || fg === void 0 ? void 0 : fg.destroy();
      }
    };
  }, [swipe, valRef, count, onChangeRef]);
  useUpdateEffect(function () {
    if (value !== _v) {
      _setV(value);
    }
  }, [value]);
  useLayoutEffect(function () {
    var setUnderlineSize = throttle(function () {
      var underlineEl = underlineElRef.current;

      if (underline && underlineEl) {
        var next = underlineEl.nextSibling;

        if (next) {
          underlineEl.style.width = next.offsetWidth + 'px';
        }
      }
    }, 34);

    if (underline) {
      window.addEventListener('resize', setUnderlineSize);
    }

    setUnderlineSize();
    return function () {
      if (underline) {
        window.removeEventListener('resize', setUnderlineSize);
      }
    };
  }, [underline]);
  var prevVal = usePrevious(_v);
  useEffect(function () {
    var headerWrapEl = headerWrapElRef.current;

    if (headerWrapEl && headerWrapEl.scrollWidth > headerWrapEl.offsetWidth) {
      var itemEl = headerWrapEl.querySelector('.uc-tabs-header-item');

      if (itemEl) {
        if (_v > prevVal) {
          // right
          headerWrapEl.scroll({
            left: (_v + 3) * itemEl.offsetWidth - headerWrapEl.offsetWidth,
            behavior: 'smooth'
          });
        } else {
          // left
          headerWrapEl.scroll({
            left: (_v - 2) * itemEl.offsetWidth,
            behavior: 'smooth'
          });
        }
      } else if (itemEl.offsetWidth * (_v + 1) <= headerWrapEl.offsetWidth && headerWrapEl.scrollLeft > 0) {
        headerWrapEl.scroll({
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }, [_v, prevVal]);
  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    className: clsx('uc-tabs', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: clsx('uc-tabs-header-wrap', {
      'no-border': !border
    }),
    ref: headerWrapElRef
  }, underline && /*#__PURE__*/React.createElement(StyledTabHeadItem, {
    ref: underlineElRef,
    className: clsx('uc-tabs-header-item', 'uc-tabs-header-line'),
    count: count,
    value: _v
  }, /*#__PURE__*/React.createElement("div", {
    className: "line",
    style: {
      width: typeof underline === 'boolean' ? '100%' : underline
    }
  })), React.Children.map(children, function (child, index) {
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
  }), extra && /*#__PURE__*/React.createElement("span", {
    className: clsx('uc-tabs-extra', {
      underline: underline
    })
  }, extra)), /*#__PURE__*/React.createElement("div", {
    className: "uc-tabs-content-wrap",
    ref: contentWrapElRef
  }, React.Children.map(children, function (child, index) {
    if (_v === index && /*#__PURE__*/React.isValidElement(child)) {
      return child;
    }
  })));
};

export default attachPropertiesToComponent(Tabs, {
  /** 子项 */
  Tab: Tab
});
var templateObject_1, templateObject_2;