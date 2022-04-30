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
import clsx from 'clsx';
import Input from './Input';
import useUpdateEffect from './hooks/useUpdateEffect'; //#region  style
//#endregion

var limit = function limit(val, min, max, digits) {
  if (digits === void 0) {
    digits = 0;
  }

  var v = val;

  if (typeof max === 'number') {
    v = Math.min(v, max);
  }

  if (typeof min === 'number') {
    v = Math.max(min, v);
  }

  return v.toFixed(digits);
};
/** 数字输入框 */


var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _a = props.defaultValue,
      defaultValue = _a === void 0 ? '' : _a,
      _b = props.value,
      value = _b === void 0 ? '' : _b,
      min = props.min,
      max = props.max,
      onChange = props.onChange,
      digits = props.digits,
      rest = __rest(props, ["className", "defaultValue", "value", "min", "max", "onChange", "digits"]);

  var _c = useState(value || defaultValue),
      val = _c[0],
      setVal = _c[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  }, [val]);
  useUpdateEffect(function () {
    if (value != val) {
      setVal(value);
    }
  }, [value]);
  return /*#__PURE__*/React.createElement(Input, __assign({
    ref: ref,
    className: clsx('uc-input-number', className)
  }, rest, {
    value: String(val),
    onChange: function onChange(v) {
      var tv = v.trim();
      var num = Number(tv);

      if (num === num || tv === '-') {
        setVal(tv);
      }
    },
    onBlur: function onBlur() {
      var tv = String(val).trim();

      if (tv.length > 0) {
        var num = Number(tv);

        if (num === num) {
          setVal(limit(Number(val), min, max, digits));
        } else {
          setVal('');
        }
      }
    }
  }));
});
InputNumber.displayName = 'UC-InputNumber';
export default InputNumber;