import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useState, useRef, useImperativeHandle, useCallback } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import clsx from 'clsx';
import PickerView from './PickerView';
import useLatest from './hooks/useLatest';
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
      labelRender = props.labelRender,
      className = props.className,
      _e = props.value,
      value = _e === void 0 ? [] : _e,
      _f = props.data,
      data = _f === void 0 ? [] : _f,
      rest = __rest(props, ["okText", "cancelText", "title", "onClose", "visible", "onOk", "onChange", "onWheelChange", "itemHeight", "labelRender", "className", "value", "data"]);

  var pickerViewRef = useRef();
  useImperativeHandle(ref, function () {
    return pickerViewRef.current;
  });

  var _g = useState(value),
      val = _g[0],
      setVal = _g[1];

  var onChangeRef = useLatest(onChange);
  var onValueChange = useCallback(function (value) {
    var _a;

    setVal(value);
    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, value); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    labelRender: labelRender,
    itemHeight: itemHeight,
    ref: pickerViewRef,
    data: data,
    value: val,
    onChange: onValueChange,
    onWheelChange: onWheelChange
  }));
});
Picker.displayName = 'UC-Picker';
export default Picker;
var templateObject_1;