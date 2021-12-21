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

var __spreadArray = this && this.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

import React, { useState } from 'react';
import styled from 'styled-components';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import Wheel from './Wheel';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
var StyledDrawer = styled(Drawer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n    user-select: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n  .picker-wrap {\n    display: flex;\n    position: relative;\n    background-color: #fff;\n    height: 245px;\n    width: 100%;\n    touch-action: none;\n\n    .mask {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n      background-repeat: no-repeat;\n      background-position: top, bottom;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      pointer-events: none;\n      background-size: 100% 105px;\n    }\n\n    .hairline {\n      position: absolute;\n      height: 35px;\n      width: 100%;\n      border: 1px solid #d8d8d8;\n      border-left: 0;\n      border-right: 0;\n      top: 105px;\n    }\n\n    .columnitem {\n      width: 0;\n      flex-grow: 1;\n      height: 100%;\n\n      .wheel-wrap {\n        display: flex;\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n    user-select: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n  .picker-wrap {\n    display: flex;\n    position: relative;\n    background-color: #fff;\n    height: 245px;\n    width: 100%;\n    touch-action: none;\n\n    .mask {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n      background-repeat: no-repeat;\n      background-position: top, bottom;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      pointer-events: none;\n      background-size: 100% 105px;\n    }\n\n    .hairline {\n      position: absolute;\n      height: 35px;\n      width: 100%;\n      border: 1px solid #d8d8d8;\n      border-left: 0;\n      border-right: 0;\n      top: 105px;\n    }\n\n    .columnitem {\n      width: 0;\n      flex-grow: 1;\n      height: 100%;\n\n      .wheel-wrap {\n        display: flex;\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        height: 100%;\n      }\n    }\n  }\n"])), getThemeColorCss('color')); //#endregion

/**
 *  convert data to 2 dimension array ;
 *
 * @param {DataItem[]} data
 * @param {number} [cols=1]
 * @param {*} [value=[]]
 * @return {*}
 */

var convertPickerData = function convertPickerData(data, cols, value) {
  if (cols === void 0) {
    cols = 1;
  }

  if (value === void 0) {
    value = [];
  }

  var ret = [];

  for (var i = 0; i < cols; i++) {
    ret.push([]);
  }

  data === null || data === void 0 ? void 0 : data.map(function (d) {
    ret[0].push(d);
  });

  if (cols > 1) {
    if (!Array.isArray(data[0])) {
      // linked
      var lastIndex = data.findIndex(function (d) {
        return d.value === value[0];
      });
      lastIndex = lastIndex === -1 ? 0 : lastIndex;
      ret[1] = data[lastIndex].children || [];

      if (cols === 3) {
        lastIndex = data.findIndex(function (d) {
          return d.value === value[1];
        });
        lastIndex = lastIndex === -1 ? 0 : lastIndex;
        ret[2] = ret[1][lastIndex].children || [];
      }
    } else {
      // unlinked
      for (var i = 0; i < cols; i++) {
        ret[i] = data[i];
      }
    }
  }

  return ret;
};

var getIndexArrayFromValue = function getIndexArrayFromValue(value, list, cols) {
  if (value === void 0) {
    value = [];
  }

  if (cols === void 0) {
    cols = 1;
  }

  var ar = new Array(cols).fill(0);

  if (list.length > 0 && value.length > 0) {
    list.map(function (e, i) {
      var index = list[i].findIndex(function (e) {
        return e.value === value[i];
      });
      ar[i] = index === -1 ? 0 : index;
    });
  }

  return ar;
};
/** picker 选择器 */


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
      className = props.className,
      onWheelChange = props.onWheelChange,
      _d = props.value,
      value = _d === void 0 ? [] : _d,
      _e = props.data,
      data = _e === void 0 ? [] : _e,
      _f = props.cols,
      cols = _f === void 0 ? 1 : _f,
      rest = __rest(props, ["okText", "cancelText", "title", "onClose", "visible", "onOk", "className", "onWheelChange", "value", "data", "cols"]); // 非级联


  var isUnLinked = (data === null || data === void 0 ? void 0 : data.length) > 0 && Array.isArray(data[0]);

  var _g = useState(function () {
    return convertPickerData(data, cols, value);
  }),
      list = _g[0],
      setList = _g[1];

  var _h = useState(function () {
    return getIndexArrayFromValue(value, list, cols);
  }),
      indexArr = _h[0],
      setIndexArr = _h[1];

  useUpdateEffect(function () {
    setList(convertPickerData(data, cols, value));
  }, [data]);
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
        if (list.length && indexArr.length) {
          onOk === null || onOk === void 0 ? void 0 : onOk(list.map(function (e, i) {
            return e[indexArr[i]].value;
          }));
        } else {
          onOk === null || onOk === void 0 ? void 0 : onOk([]);
        }

        onClose === null || onClose === void 0 ? void 0 : onClose();
      }
    }, okText))
  }), /*#__PURE__*/React.createElement("div", {
    className: "picker-wrap",
    ref: ref
  }, /*#__PURE__*/React.createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wheel-wrap"
  }, list === null || list === void 0 ? void 0 : list.map(function (listItem, idx) {
    return /*#__PURE__*/React.createElement(Wheel, {
      data: listItem,
      key: listItem.length + '-' + idx,
      index: indexArr[idx],
      onIndexChange: function onIndexChange(index) {
        var _a;

        indexArr[idx] = index;
        var nextIndex = idx + 1;

        if (nextIndex <= cols - 1) {
          while (nextIndex <= cols - 1) {
            // next wheel refresh  & update value to next&first
            if (!isUnLinked) {
              // linked
              list[nextIndex] = ((_a = list[nextIndex - 1][indexArr[nextIndex - 1]]) === null || _a === void 0 ? void 0 : _a.children) || [];
              indexArr[nextIndex] = 0;
            }

            nextIndex++;
          }

          setList(__spreadArray([], list, true));
          setIndexArr(__spreadArray([], indexArr, true));
        }

        onWheelChange === null || onWheelChange === void 0 ? void 0 : onWheelChange(index, idx);
      }
    });
  })))));
});
Picker.displayName = 'UC-Picker';
export default Picker;
var templateObject_1;