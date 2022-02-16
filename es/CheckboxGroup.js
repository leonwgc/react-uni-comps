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

import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Checkbox from './Checkbox';
import { isObject } from './helper';
import Space from './Space';
var StyledCheckboxGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/** 一组复选框 */

var CheckboxGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      button = props.button,
      onChange = props.onChange,
      _a = props.options,
      options = _a === void 0 ? [] : _a,
      _b = props.value,
      value = _b === void 0 ? [] : _b,
      disabled = props.disabled,
      rest = __rest(props, ["className", "button", "onChange", "options", "value", "disabled"]);

  var onChangeRef = useCallbackRef(onChange);
  var onCheckboxChange = useCallback(function (checked, v) {
    var _a;

    var vIndex = value.indexOf(v);

    if (!checked) {
      if (vIndex > -1) {
        value.splice(vIndex, 1);
      }
    } else {
      if (vIndex === -1) {
        value.push(v);
      }
    }

    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, __spreadArray([], value, true));
  }, [value, onChangeRef]);
  return /*#__PURE__*/React.createElement(StyledCheckboxGroup, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-checkbox-group')
  }), /*#__PURE__*/React.createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React.createElement(Checkbox, {
      className: "uc-checkbox-group-item",
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value.indexOf(item.value) > -1
    }, item.label);
  })));
});
CheckboxGroup.displayName = 'UC-CheckboxGroup';
export default CheckboxGroup;
var templateObject_1;