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

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Checkbox from './Checkbox';
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

    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, __spreadArray([], value));
  }, [value, onChangeRef]);
  return /*#__PURE__*/React.createElement(StyledCheckboxGroup, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-checkbox-group')
  }), options.map(function (option) {
    if (typeof option === 'string') {
      return /*#__PURE__*/React.createElement(Checkbox, {
        button: button,
        disabled: disabled,
        key: option,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option);
        },
        checked: value.indexOf(option) > -1
      }, option);
    } else {
      return /*#__PURE__*/React.createElement(Checkbox, {
        button: button,
        disabled: disabled,
        key: option.value,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option.value);
        },
        checked: value.indexOf(option.value) > -1
      }, option.label);
    }
  }));
});
CheckboxGroup.displayName = 'UC-CheckboxGroup';
export default CheckboxGroup;
var templateObject_1;