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

import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import NumberKeyboardBase from './NumberKeyboardBase';
import useUpdateEffect from './hooks/useUpdateEffect';
import Popup from './Popup';
var StyledNumberKeyboard = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  height: 300px;\n"], ["\n  width: 100%;\n  height: 300px;\n"])));
/** 数字键盘 */

var NumberKeyboard = function NumberKeyboard(props) {
  var visible = props.visible,
      okText = props.okText,
      _a = props.customKey,
      customKey = _a === void 0 ? '' : _a,
      onClose = props.onClose,
      onChange = props.onChange,
      className = props.className,
      rest = __rest(props, ["visible", "okText", "customKey", "onClose", "onChange", "className"]);

  var _b = useState(''),
      value = _b[0],
      setValue = _b[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledNumberKeyboard, __assign({}, rest, {
    visible: visible,
    onMaskClick: onClose,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    position: "bottom",
    className: clsx('uc-number-keyboard-picker', className)
  }), /*#__PURE__*/React.createElement(NumberKeyboardBase, {
    okText: okText,
    customKey: customKey,
    onClick: function onClick(k) {
      if (k === 'ok') {
        onClose === null || onClose === void 0 ? void 0 : onClose();
      } else if (k === 'backspace') {
        if (value.length) {
          setValue(value.slice(0, value.length - 1));
        }
      } else {
        setValue(function (v) {
          return v + k;
        });
      }
    }
  }));
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';
export default NumberKeyboard;
var templateObject_1;