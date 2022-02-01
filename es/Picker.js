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

import React, { useState, useRef, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import clsx from 'clsx';
import PickerView from './PickerView';
import useCallbackRef from './hooks/useCallbackRef';
var StyledDrawer = styled(Drawer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n    user-select: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n"], ["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n    user-select: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

/** picker 下方弹出选择器 */

var Picker = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.okText,
      okText = _a === void 0 ? '确定' : _a,
      _b = props.cancelText,
      cancelText = _b === void 0 ? '取消' : _b,
      _c = props.title,
      title = _c === void 0 ? '请选择' : _c,
      onClose = props.onClose,
      visible = props.visible,
      onOk = props.onOk,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _d = props.itemHeight,
      itemHeight = _d === void 0 ? 35 : _d,
      className = props.className,
      _e = props.value,
      value = _e === void 0 ? [] : _e,
      _f = props.data,
      data = _f === void 0 ? [] : _f,
      _g = props.cols,
      cols = _g === void 0 ? 1 : _g,
      rest = __rest(props, ["okText", "cancelText", "title", "onClose", "visible", "onOk", "onChange", "onWheelChange", "itemHeight", "className", "value", "data", "cols"]);

  var pickerViewRef = useRef();
  useImperativeHandle(ref, function () {
    return pickerViewRef.current;
  });

  var _h = useState(value),
      val = _h[0],
      setVal = _h[1];

  var onChangeRef = useCallbackRef(onChange);
  var onValueChange = useCallback(function (value) {
    var _a;

    setVal(value);
    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, value);
  }, [onChangeRef]);
  return /*#__PURE__*/React.createElement(StyledDrawer, __assign({}, rest, {
    className: clsx('uc-picker', className),
    position: "bottom",
    visible: visible,
    onClose: onClose,
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "cancel-text",
      onClick: onClose
    }, cancelText), /*#__PURE__*/React.createElement("div", {
      className: "title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "ok-text",
      onClick: function onClick() {
        onOk === null || onOk === void 0 ? void 0 : onOk(pickerViewRef.current.getValue());
        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, okText))
  }), /*#__PURE__*/React.createElement(PickerView, {
    itemHeight: itemHeight,
    ref: pickerViewRef,
    data: data,
    cols: cols,
    value: val,
    onChange: onValueChange,
    onWheelChange: onWheelChange
  }));
});
Picker.displayName = 'UC-Picker';
export default Picker;
var templateObject_1;