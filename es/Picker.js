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

var __spreadArray = this && this.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};

import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import { getThemeColorCss } from './themeHelper';
import Drawer from './Drawer';
import clsx from 'clsx';
var StyledDrawer = styled(Drawer)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    width: 100%;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n  .picker-wrap {\n    display: flex;\n    position: relative;\n    background-color: #fff;\n    height: 245px;\n    width: 100%;\n    touch-action: none;\n\n    .mask {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n      background-repeat: no-repeat;\n      background-position: top, bottom;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      pointer-events: none;\n      background-size: 100% 105px;\n    }\n\n    .hairline {\n      position: absolute;\n      height: 35px;\n      width: 100%;\n      border: 1px solid #d8d8d8;\n      border-left: 0;\n      border-right: 0;\n      top: 105px;\n    }\n\n    .columnitem {\n      width: 0;\n      flex-grow: 1;\n      height: 100%;\n\n      .wheel {\n        display: flex;\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        height: 100%;\n\n        .wrapper {\n          transform: translate3d(0px, 105px, 0px);\n          transition-duration: 0.24s;\n          transition-property: transform;\n          transition-timing-function: ease-in-out;\n          .item {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 35px;\n            font-size: 18px;\n            color: #333;\n          }\n        }\n      }\n    }\n  }\n"], ["\n  .header {\n    display: flex;\n    height: 45px;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 16px;\n    width: 100%;\n    background-color: #f7f7f7;\n    font-size: 16px;\n    touch-action: none;\n\n    .ok-text {\n      ", "\n    }\n    .cancel-text {\n      color: #999;\n    }\n    .title {\n      color: #333;\n    }\n  }\n  .picker-wrap {\n    display: flex;\n    position: relative;\n    background-color: #fff;\n    height: 245px;\n    width: 100%;\n    touch-action: none;\n\n    .mask {\n      position: absolute;\n      top: 0;\n      left: 0;\n      z-index: 1;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n        linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n      background-repeat: no-repeat;\n      background-position: top, bottom;\n      -webkit-transform: translateZ(0);\n      transform: translateZ(0);\n      pointer-events: none;\n      background-size: 100% 105px;\n    }\n\n    .hairline {\n      position: absolute;\n      height: 35px;\n      width: 100%;\n      border: 1px solid #d8d8d8;\n      border-left: 0;\n      border-right: 0;\n      top: 105px;\n    }\n\n    .columnitem {\n      width: 0;\n      flex-grow: 1;\n      height: 100%;\n\n      .wheel {\n        display: flex;\n        position: relative;\n        text-align: center;\n        overflow-y: hidden;\n        height: 100%;\n\n        .wrapper {\n          transform: translate3d(0px, 105px, 0px);\n          transition-duration: 0.24s;\n          transition-property: transform;\n          transition-timing-function: ease-in-out;\n          .item {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 35px;\n            font-size: 18px;\n            color: #333;\n          }\n        }\n      }\n    }\n  }\n"])), getThemeColorCss('color'));
var itemHeight = 35;
var firstItemY = 105;
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

var Wheel = function Wheel(props) {
  var onChange = props.onChange,
      isUnLinked = props.isUnLinked,
      _a = props.data,
      data = _a === void 0 ? [] : _a,
      _b = props.list,
      list = _b === void 0 ? [] : _b,
      _c = props.value,
      value = _c === void 0 ? [] : _c,
      _d = props.valueIndex,
      valueIndex = _d === void 0 ? 0 : _d,
      _e = props.cols,
      cols = _e === void 0 ? 1 : _e;
  var elRef = useRef();
  var yRef = useRef(firstItemY);
  var scrollToIndex = useCallback(function (index) {
    if (elRef.current) {
      elRef.current.style.transitionProperty = 'transform';
      var y_1 = firstItemY - itemHeight * index;
      yRef.current = y_1;
      setTimeout(function () {
        if (elRef.current) {
          elRef.current.style.transform = "translate3d(0," + y_1 + "px,0)";
        }
      });
    }
  }, [yRef]);
  var getIndexByY = useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef]);
  useEffect(function () {
    var i = data.findIndex(function (d) {
      return d.value === value[valueIndex];
    });
    scrollToIndex(i > -1 ? i : 0);
  }, [scrollToIndex, data, valueIndex, value]);

  var onTouchEnd = function onTouchEnd() {
    var _a, _b, _c, _d;

    var min = -1 * (data.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var index;

    if (yRef.current >= max - itemHeight / 2) {
      index = 0;
    } else if (yRef.current <= min) {
      index = data.length - 1;
    } else {
      index = getIndexByY();
    }

    scrollToIndex(index);
    value[valueIndex] = (_a = data[index]) === null || _a === void 0 ? void 0 : _a.value;
    var vIndex = valueIndex + 1;

    while (vIndex <= cols - 1) {
      // next wheel refresh  & update value to next&first
      if (!isUnLinked) {
        list[vIndex] = ((_b = list[vIndex - 1][index]) === null || _b === void 0 ? void 0 : _b.children) || [];
        value[vIndex] = ((_c = list[vIndex][0]) === null || _c === void 0 ? void 0 : _c.value) || '';
      }

      vIndex++;
    }

    var cv = __spreadArray([], value);

    vIndex = valueIndex - 1;

    while (vIndex >= 0) {
      // prev wheel check
      if (typeof cv[vIndex] === 'undefined') {
        // left not scrolled
        cv[vIndex] = ((_d = list[vIndex][0]) === null || _d === void 0 ? void 0 : _d.value) || '';
      }

      vIndex--;
    }

    onChange === null || onChange === void 0 ? void 0 : onChange(cv);
  };

  return /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: elRef,
    onTouchStart: function onTouchStart() {
      elRef.current.style.transitionProperty = 'none';
    },
    onTouchEnd: onTouchEnd,
    onPressMove: function onPressMove(e) {
      yRef.current += e.deltaY;
      elRef.current.style.transform = "translate3d(0," + yRef.current + "px,0)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper",
    style: {
      width: 100 / cols + '%',
      touchAction: 'none'
    }
  }, data.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "item",
      key: item.value
    }, item.label);
  })));
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
      _d = props.value,
      value = _d === void 0 ? [] : _d,
      _e = props.data,
      data = _e === void 0 ? [] : _e,
      _f = props.cols,
      cols = _f === void 0 ? 1 : _f,
      rest = __rest(props, ["okText", "cancelText", "title", "onClose", "visible", "onOk", "className", "value", "data", "cols"]); // 是否非级联


  var isUnLinked = (data === null || data === void 0 ? void 0 : data.length) > 0 && Array.isArray(data[0]);
  var list = useMemo(function () {
    return convertPickerData(data, cols, value);
  }, [data, cols, value]);

  var _g = useState(value),
      val = _g[0],
      setVal = _g[1];

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
        var _a;

        if (list.length) {
          var cv = __spreadArray([], val);

          var i = cols - 1;

          while (i >= 0) {
            if (typeof cv[i] === 'undefined') {
              cv[i] = ((_a = list[i][val[i] || 0]) === null || _a === void 0 ? void 0 : _a.value) || '';
            }

            i--;
          }

          onOk === null || onOk === void 0 ? void 0 : onOk(cv);
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
    className: "wheel"
  }, list === null || list === void 0 ? void 0 : list.map(function (listItem, idx) {
    return /*#__PURE__*/React.createElement(Wheel, {
      cols: cols,
      data: listItem,
      key: idx,
      value: val,
      valueIndex: idx,
      list: list,
      isUnLinked: isUnLinked,
      onChange: setVal
    });
  })))));
});
Picker.displayName = 'UC-Picker';
export default Picker;
var templateObject_1;