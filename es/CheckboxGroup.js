import { __assign, __makeTemplateObject, __rest, __spreadArray } from "tslib";
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