import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Icon from './Icon';
import clsx from 'clsx';
import Input from './Input';
import Button from './Button';
import useUpdateEffect from './hooks/useUpdateEffect'; //#region  style

var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 110px;\n  display: inline-flex;\n  .uc-button {\n    flex: none;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    font-weight: normal;\n    ", "\n  }\n\n  .uc-input {\n    flex: 1;\n    background-color: #f5f5f5;\n    border: none;\n    padding: 0;\n    height: 28px;\n    margin: 0 2px;\n\n    input {\n      text-align: center;\n    }\n\n    &:hover:not(.disabled, .read-only) {\n      border: none;\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      border: none;\n      box-shadow: none;\n    }\n  }\n"], ["\n  width: 110px;\n  display: inline-flex;\n  .uc-button {\n    flex: none;\n    width: 28px;\n    height: 28px;\n    padding: 0;\n    background-color: #f5f5f5;\n    border: none;\n    font-weight: normal;\n    ", "\n  }\n\n  .uc-input {\n    flex: 1;\n    background-color: #f5f5f5;\n    border: none;\n    padding: 0;\n    height: 28px;\n    margin: 0 2px;\n\n    input {\n      text-align: center;\n    }\n\n    &:hover:not(.disabled, .read-only) {\n      border: none;\n    }\n\n    &.focused:not(.disabled, .read-only) {\n      border: none;\n      box-shadow: none;\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

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

  return Number(v.toFixed(digits));
};
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
      digits = props.digits,
      rest = __rest(props, ["className", "style", "defaultValue", "value", "step", "min", "max", "disabled", "onChange", "digits"]);

  var _c = useState(value || defaultValue),
      val = _c[0],
      setVal = _c[1];

  var onAdd = useCallback(function () {
    setVal(function (v) {
      var n = Number(v) + step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);
  var onMinus = useCallback(function () {
    setVal(function (v) {
      var n = Number(v) - step;
      return limit(n, min, max, digits);
    });
  }, [step, min, max, digits]);
  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(Number(val));
  }, [val]);
  useUpdateEffect(function () {
    if (value != val) {
      setVal(value);
    }
  }, [value]);
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
        setVal(v);
      }
    },
    onBlur: function onBlur() {
      setVal(limit(Number(val), min, max, digits));
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