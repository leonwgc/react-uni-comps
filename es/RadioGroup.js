import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useCallback } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import Radio from './Radio';
import { isObject } from './helper';
import Space from './Space';
var StyledRadioGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
/** 一组单选框 */

var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
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

    if (checked) {
      (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, v);
    }
  }, [onChangeRef]);
  return /*#__PURE__*/React.createElement(StyledRadioGroup, __assign({}, rest, {
    ref: ref,
    className: clsx(className, 'uc-radio-group')
  }), /*#__PURE__*/React.createElement(Space, null, options.map(function (option) {
    var item = {};

    if (isObject(option)) {
      item.label = option.label;
      item.value = option.value;
    } else {
      item.label = option;
      item.value = option;
    }

    return /*#__PURE__*/React.createElement(Radio, {
      button: button,
      disabled: disabled,
      key: item.value,
      onChange: function onChange(c) {
        return onCheckboxChange(c, item.value);
      },
      checked: value === item.value
    }, item.label);
  })));
});
RadioGroup.displayName = 'UC-RadioGroup';
export default RadioGroup;
var templateObject_1;