import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import { prefixClassName } from './helper';
var getClassName = prefixClassName('uc-switch');
var StyledSwitch = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.2s ease-in-out;\n  }\n\n  &.checked {\n    ", "\n    ", "\n\n    &::after {\n      left: calc(100% - 20px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n\n  .", " {\n    font-size: 12px;\n    color: #fff;\n    margin: 0 7px 0 25px;\n    transition: margin 0.2s ease-in-out;\n\n    &.checked {\n      margin: 0 25px 0 7px;\n    }\n  }\n"], ["\n  position: relative;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  border-radius: 100px;\n  border: none;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n\n  color: inherit;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  -moz-appearance: none;\n  text-decoration: none;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent;\n  vertical-align: middle;\n\n  &::after {\n    background-color: #fff;\n    position: absolute;\n    left: 2px;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    content: ' ';\n    cursor: pointer;\n    transition: left 0.2s ease-in-out;\n  }\n\n  &.checked {\n    ", "\n    ", "\n\n    &::after {\n      left: calc(100% - 20px);\n    }\n  }\n\n  &.disabled {\n    cursor: not-allowed;\n    opacity: 0.6;\n\n    &::after {\n      cursor: not-allowed;\n    }\n  }\n\n  .", " {\n    font-size: 12px;\n    color: #fff;\n    margin: 0 7px 0 25px;\n    transition: margin 0.2s ease-in-out;\n\n    &.checked {\n      margin: 0 25px 0 7px;\n    }\n  }\n"])), getThemeColorCss('background-color'), getThemeColorCss('border-color'), getClassName('text'));
/** 开关 */

var Switch = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var disabled = props.disabled,
      checked = props.checked,
      defaultChecked = props.defaultChecked,
      checkedText = props.checkedText,
      unCheckedText = props.unCheckedText,
      className = props.className,
      onChange = props.onChange,
      rest = __rest(props, ["disabled", "checked", "defaultChecked", "checkedText", "unCheckedText", "className", "onChange"]);

  var _a = useState(function () {
    return typeof checked !== 'undefined' ? checked : typeof defaultChecked !== 'undefined' ? defaultChecked : false;
  }),
      _checked = _a[0],
      _setChecked = _a[1];

  useUpdateEffect(function () {
    if (_checked !== checked) {
      _setChecked(checked);
    }
  }, [checked]);
  return /*#__PURE__*/React.createElement(StyledSwitch, __assign({
    ref: ref,
    onClick: function onClick() {
      if (!disabled) {
        _setChecked(!_checked);

        onChange === null || onChange === void 0 ? void 0 : onChange(!_checked);
      }
    },
    className: clsx(getClassName(), className, {
      disabled: disabled,
      checked: _checked
    })
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: clsx(getClassName('text'), {
      checked: _checked
    })
  }, _checked ? checkedText : unCheckedText));
});
Switch.displayName = 'UC-Switch';
export default Switch;
var templateObject_1;