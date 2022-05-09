import { __assign, __makeTemplateObject, __rest } from "tslib";
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
var StyledRate = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  .box {\n    position: relative;\n  }\n\n  .char {\n    padding: calc(24px / 8);\n    line-height: 24px;\n    font-size: 24px;\n    color: #ccc;\n    text-align: center;\n    overflow: hidden;\n    cursor: pointer;\n    &.half {\n      padding-right: 0;\n      width: 50%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n    &.active {\n      color: ", ";\n    }\n    &.readonly {\n      cursor: unset;\n    }\n  }\n"], ["\n  display: inline-flex;\n  .box {\n    position: relative;\n  }\n\n  .char {\n    padding: calc(24px / 8);\n    line-height: 24px;\n    font-size: 24px;\n    color: #ccc;\n    text-align: center;\n    overflow: hidden;\n    cursor: pointer;\n    &.half {\n      padding-right: 0;\n      width: 50%;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n    &.active {\n      color: ", ";\n    }\n    &.readonly {\n      cursor: unset;\n    }\n  }\n"])), function (props) {
  return props.$color;
});
var defaultChar = /*#__PURE__*/React.createElement("svg", {
  viewBox: "64 64 896 896",
  "data-icon": "star",
  width: "1em",
  height: "1em",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"
}));
/** 评分 */

var Rate = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var value = props.value,
      _a = props.defaultValue,
      defaultValue = _a === void 0 ? 0 : _a,
      _b = props.allowHalf,
      allowHalf = _b === void 0 ? false : _b,
      readonly = props.readonly,
      _c = props.count,
      count = _c === void 0 ? 5 : _c,
      _d = props.char,
      char = _d === void 0 ? defaultChar : _d,
      onChange = props.onChange,
      className = props.className,
      _e = props.color,
      color = _e === void 0 ? '#ffd21e' : _e,
      _f = props.allowClear,
      allowClear = _f === void 0 ? true : _f,
      rest = __rest(props, ["value", "defaultValue", "allowHalf", "readonly", "count", "char", "onChange", "className", "color", "allowClear"]);

  var _g = useState(typeof value === 'number' ? value : defaultValue),
      val = _g[0],
      setVal = _g[1];

  var starList = Array(count).fill(null);
  var onChangeRef = useCallbackRef(onChange);
  useUpdateEffect(function () {
    var _a;

    (_a = onChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onChangeRef, val);
  }, [val]);
  useUpdateEffect(function () {
    if (val !== value) {
      setVal(value);
    }
  }, [value]);
  var renderChar = useCallback(function (v, val, half) {
    return /*#__PURE__*/React.createElement("div", {
      className: clsx("char", {
        active: val >= v,
        half: half,
        readonly: readonly
      }),
      onClick: function onClick() {
        if (readonly) return;

        if (allowClear && val === v) {
          setVal(0);
        } else {
          setVal(v);
        }
      }
    }, char);
  }, [allowClear, char, readonly]);
  return /*#__PURE__*/React.createElement(StyledRate, __assign({}, rest, {
    ref: ref,
    className: clsx(className),
    "$color": color
  }), starList.map(function (_, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: clsx("box")
    }, allowHalf && renderChar(i + 0.5, val, true), renderChar(i + 1, val, false));
  }));
});
Rate.displayName = 'UC-Rate';
export default Rate;
var templateObject_1;