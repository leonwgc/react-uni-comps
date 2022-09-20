import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import NumberKeyboardBase from './NumberKeyboardBase';
import useUpdateEffect from './hooks/useUpdateEffect';
import Popup from './Popup';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-number-keyboard-picker');
var StyledPopup = styled(Popup)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  background-color: transparent;\n"], ["\n  width: 100%;\n  background-color: transparent;\n"])));
/** 数字键盘 */

var NumberKeyboard = function NumberKeyboard(props) {
  var visible = props.visible,
      okText = props.okText,
      _a = props.closeOnMaskClick,
      closeOnMaskClick = _a === void 0 ? true : _a,
      maxLength = props.maxLength,
      _b = props.customKey,
      customKey = _b === void 0 ? '' : _b,
      onOk = props.onOk,
      onClose = props.onClose,
      onChange = props.onChange,
      className = props.className,
      style = props.style,
      _c = props.height,
      height = _c === void 0 ? 260 : _c,
      rest = __rest(props, ["visible", "okText", "closeOnMaskClick", "maxLength", "customKey", "onOk", "onClose", "onChange", "className", "style", "height"]);

  var _d = useState(''),
      value = _d[0],
      setValue = _d[1];

  useUpdateEffect(function () {
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledPopup, __assign({}, rest, {
    closeOnMaskClick: closeOnMaskClick,
    visible: visible,
    onClose: onClose,
    maskStyle: {
      backgroundColor: 'transparent'
    },
    position: "bottom",
    style: __assign(__assign({}, style), {
      height: height
    }),
    className: clsx(getClassName(), className)
  }), /*#__PURE__*/React.createElement(NumberKeyboardBase, {
    okText: okText,
    customKey: customKey,
    height: height,
    onClick: function onClick(k) {
      if (k === 'ok') {
        onOk === null || onOk === void 0 ? void 0 : onOk(value);
        onClose === null || onClose === void 0 ? void 0 : onClose();
      } else if (k === 'backspace') {
        if (value.length) {
          setValue(value.slice(0, value.length - 1));
        }
      } else {
        if (typeof maxLength === 'number' && value.length < maxLength || typeof maxLength === 'undefined') {
          setValue(function (v) {
            return v + k;
          });
        }
      }
    }
  }));
};

NumberKeyboard.displayName = 'UC-NumberKeyboard';
export default NumberKeyboard;
var templateObject_1;