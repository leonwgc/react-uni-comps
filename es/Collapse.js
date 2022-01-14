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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import IconArrow from './IconArrow';
var StyledWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-tap-highlight-color: transparent;\n\n  .item {\n    overflow: hidden;\n\n    &.disabled {\n      opacity: 0.4;\n    }\n  }\n\n  .header {\n    background: #fff;\n    height: 50px;\n    color: #333;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  .content {\n    color: #999;\n\n    display: none;\n    &.active {\n      display: unset;\n    }\n  }\n"], ["\n  -webkit-tap-highlight-color: transparent;\n\n  .item {\n    overflow: hidden;\n\n    &.disabled {\n      opacity: 0.4;\n    }\n  }\n\n  .header {\n    background: #fff;\n    height: 50px;\n    color: #333;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n  }\n\n  .content {\n    color: #999;\n\n    display: none;\n    &.active {\n      display: unset;\n    }\n  }\n"])));
/**
 *  子项，放在Collapse里面
 *
 * @param {*} { children }
 * @return {*}
 */

var Item = function Item(_a) {
  var children = _a.children;
  return children;
};
/**
 * 选项卡切换
 */


var Collapse = function Collapse(_a) {
  var children = _a.children,
      onChange = _a.onChange,
      className = _a.className,
      _b = _a.keys,
      keys = _b === void 0 ? '' : _b,
      rest = __rest(_a, ["children", "onChange", "className", "keys"]);

  var count = React.Children.count(children); // 手风琴模式

  var isSingleMode = typeof keys === 'string'; // inner keys

  var _c = useState(keys),
      _keys = _c[0],
      _setKeys = _c[1];

  useUpdateEffect(function () {
    _setKeys(keys);
  }, [keys]);

  if (count === 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(StyledWrapper, __assign({}, rest, {
    className: clsx('uc-collapse', className)
  }), React.Children.map(children, function (child, index) {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      var key_1 = child.key;
      key_1 = key_1 || index + '';
      var _a = child.props,
          _b = _a.title,
          title = _b === void 0 ? '' : _b,
          disabled_1 = _a.disabled,
          children_1 = _a.children;
      var active_1 = isSingleMode ? _keys === key_1 : _keys.indexOf(key_1) > -1;
      return /*#__PURE__*/React.createElement("div", {
        key: key_1,
        className: clsx('item', {
          active: active_1,
          disabled: disabled_1
        }),
        onClick: function onClick() {
          if (!disabled_1) {
            var keys_1;

            if (active_1) {
              if (isSingleMode) {
                keys_1 = '';
              } else {
                var idx = _keys.indexOf(key_1);

                _keys.splice(idx, 1);

                keys_1 = __spreadArray([], _keys, true);
              }
            } else {
              if (isSingleMode) {
                keys_1 = key_1;
              } else {
                keys_1 = __spreadArray(__spreadArray([], _keys, true), [key_1], false);
              }
            }

            _setKeys(keys_1);

            onChange === null || onChange === void 0 ? void 0 : onChange(keys_1);
          }
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: clsx('header', {
          disabled: disabled_1
        })
      }, /*#__PURE__*/React.createElement("span", null, title), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(IconArrow, {
        direction: active_1 ? 'down' : 'right'
      }))), /*#__PURE__*/React.createElement("div", {
        className: clsx('content', {
          active: active_1
        })
      }, children_1));
    }
  }));
};

Collapse.displayName = 'UC-Collapse';
/** 直接子元素 */

Collapse.Item = Item;
export default Collapse;
var templateObject_1;