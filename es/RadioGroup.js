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

import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Radio from './Radio';
var StyledRadioGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/** 一组复选框 */

var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      onChange = props.onChange,
      _a = props.options,
      options = _a === void 0 ? [] : _a,
      _b = props.value,
      value = _b === void 0 ? [] : _b,
      disabled = props.disabled,
      rest = __rest(props, ["className", "onChange", "options", "value", "disabled"]);

  var onChangeRef = useCallbackRef(onChange);
  var onCheckboxChange = useCallback(function (checked, v) {
    var _a;

    if (checked) {
      (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, v);
    }
  }, [onChangeRef]);
  return /*#__PURE__*/React.createElement(StyledRadioGroup, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-checkbox-group')
  }), options.map(function (option) {
    if (typeof option === 'string') {
      return /*#__PURE__*/React.createElement(Radio, {
        disabled: disabled,
        key: option,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option);
        },
        checked: value === option
      }, option);
    } else {
      return /*#__PURE__*/React.createElement(Radio, {
        disabled: disabled,
        key: option.value,
        onChange: function onChange(c) {
          return onCheckboxChange(c, option.value);
        },
        checked: value === option.value
      }, option.label);
    }
  }));
});
RadioGroup.displayName = 'UC-RadioGroup';
export default RadioGroup;
var templateObject_1;