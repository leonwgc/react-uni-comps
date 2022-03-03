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

import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect'; //#region  style

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 110px;\n  display: inline-flex;\n  .uc-button {\n    flex: none;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    font-weight: normal;\n    ", "\n  }\n\n  .uc-input {\n    flex: 1;\n    background-color: #f5f5f5;\n    border: none;\n    padding: 0;\n    height: 28px;\n    margin: 0 2px;\n\n    input {\n      text-align: center;\n    }\n\n    &:hover:not(.disabled, .read-only) {\n      border: none;\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      border: none;\n      box-shadow: none;\n    }\n  }\n"], ["\n  width: 110px;\n  display: inline-flex;\n  .uc-button {\n    flex: none;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    font-weight: normal;\n    ", "\n  }\n\n  .uc-input {\n    flex: 1;\n    background-color: #f5f5f5;\n    border: none;\n    padding: 0;\n    height: 28px;\n    margin: 0 2px;\n\n    input {\n      text-align: center;\n    }\n\n    &:hover:not(.disabled, .read-only) {\n      border: none;\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      border: none;\n      box-shadow: none;\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

/** 步进器 */

var Stepper = function Stepper(props) {
  var className = props.className,
      style = props.style,
      _a = props.defaultValue,
      defaultValue = _a === void 0 ? '0' : _a,
      value = props.value,
      _b = props.step,
      step = _b === void 0 ? 1 : _b,
      min = props.min,
      max = props.max,
      disabled = props.disabled,
      onChange = props.onChange,
      rest = __rest(props, ["className", "style", "defaultValue", "value", "step", "min", "max", "disabled", "onChange"]);

  var _c = useState(value || defaultValue),
      val = _c[0],
      setVal = _c[1];

  var onAdd = useCallback(function () {
    setVal(function (v) {
      var n = Number(v) + step;

      if (typeof max === 'number') {
        return Math.min(n, max);
      }

      return n;
    });
  }, [step, max]);
  var onMinus = useCallback(function () {
    setVal(function (v) {
      var n = Number(v) - step;

      if (typeof min === 'number') {
        return Math.max(min, n);
      }

      return n;
    });
  }, [step, min]);
  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(val));
  }, [val]);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    style: style,
    className: clsx('uc-stepper', className)
  }), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "uc-icon-jian2"
    }),
    onClick: onMinus,
    disabled: disabled
  }), /*#__PURE__*/React.createElement(Input, __assign({}, rest, {
    disabled: disabled,
    value: val + '',
    onChange: function onChange(v) {
      var num = Number(v);

      if (num === num) {
        setVal(v + ''); // v maybe ''
      }
    }
  })), /*#__PURE__*/React.createElement(Button, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      type: "uc-icon-jia2"
    }),
    onClick: onAdd,
    disabled: disabled
  }));
};

Stepper.displayName = 'UC-Stepper';
export default Stepper;
var templateObject_1;