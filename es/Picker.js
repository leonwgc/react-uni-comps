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

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import useThisRef from './hooks/useThisRef';
import Popup from './Popup';
import { getThemeColorCss } from './themeHelper';
import clsx from 'clsx';
var StyledBar = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  height: 56px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  width: 100%;\n  background-color: #fff;\n  font-size: 16px;\n\n  .ok {\n    ", "\n  }\n  .cancel {\n    color: #999;\n  }\n  .title {\n    color: #333;\n  }\n"], ["\n  display: flex;\n  height: 56px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  width: 100%;\n  background-color: #fff;\n  font-size: 16px;\n\n  .ok {\n    ", "\n  }\n  .cancel {\n    color: #999;\n  }\n  .title {\n    color: #333;\n  }\n"])), getThemeColorCss('color'));
var StyledPicker = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: 245px;\n  width: 100%;\n\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    pointer-events: none;\n    background-size: 100% 105px;\n  }\n\n  .hairline {\n    position: absolute;\n    height: 35px;\n    width: 100%;\n    border: 1px solid #d8d8d8;\n    border-left: 0;\n    border-right: 0;\n    top: 105px;\n  }\n\n  .columnitem {\n    width: 0;\n    flex-grow: 1;\n    height: 100%;\n\n    .content {\n      display: flex;\n      position: relative;\n      text-align: center;\n      overflow-y: hidden;\n      height: 100%;\n\n      .wrapper {\n        transform: translate3d(0px, 105px, 0px);\n        transition-duration: 0.24s;\n        transition-property: transform;\n        transition-timing-function: ease-in-out;\n        .item {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 35px;\n          color: #000;\n        }\n      }\n    }\n  }\n"], ["\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: 245px;\n  width: 100%;\n\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    pointer-events: none;\n    background-size: 100% 105px;\n  }\n\n  .hairline {\n    position: absolute;\n    height: 35px;\n    width: 100%;\n    border: 1px solid #d8d8d8;\n    border-left: 0;\n    border-right: 0;\n    top: 105px;\n  }\n\n  .columnitem {\n    width: 0;\n    flex-grow: 1;\n    height: 100%;\n\n    .content {\n      display: flex;\n      position: relative;\n      text-align: center;\n      overflow-y: hidden;\n      height: 100%;\n\n      .wrapper {\n        transform: translate3d(0px, 105px, 0px);\n        transition-duration: 0.24s;\n        transition-property: transform;\n        transition-timing-function: ease-in-out;\n        .item {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 35px;\n          color: #000;\n        }\n      }\n    }\n  }\n"])));
var itemHeight = 35;
var firstItemY = 105;

var getPickerMapData = function getPickerMapData(data, cols, value) {
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
  }

  return ret;
};

var Wheel = function Wheel(props) {
  var onChange = props.onChange,
      _a = props.data,
      data = _a === void 0 ? [] : _a,
      listRef = props.listRef,
      _b = props.value,
      value = _b === void 0 ? [] : _b,
      _c = props.valueIndex,
      valueIndex = _c === void 0 ? 0 : _c,
      _d = props.cols,
      cols = _d === void 0 ? 1 : _d;
  var elRef = useRef();
  var yRef = useRef(firstItemY);
  var thisRef = useThisRef({
    list: listRef.current,
    cols: cols,
    data: data,
    onChange: onChange,
    value: value,
    valueIndex: valueIndex
  });
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
    var v = thisRef.current;
    var i = v.data.findIndex(function (d) {
      return d.value === v.value[v.valueIndex];
    });
    scrollToIndex(i > -1 ? i : 0);
  }, [scrollToIndex, thisRef]);
  var onTouchEnd = useCallback(function () {
    var _a, _b, _c, _d, _e;

    var v = thisRef.current;
    var list = v.data;
    var min = -1 * (list.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var index;

    if (yRef.current >= max - itemHeight / 2) {
      index = 0;
    } else if (yRef.current <= min) {
      index = v.data.length - 1;
    } else {
      index = getIndexByY();
    }

    scrollToIndex(index);
    v.value[v.valueIndex] = (_a = v.data[index]) === null || _a === void 0 ? void 0 : _a.value;
    var vIndex = v.valueIndex + 1;

    while (vIndex <= v.cols - 1) {
      // next wheel refresh  & update value to next&first
      v.list[vIndex] = ((_b = v.list[vIndex - 1][index]) === null || _b === void 0 ? void 0 : _b.children) || [];
      v.value[vIndex] = ((_c = v.list[vIndex][0]) === null || _c === void 0 ? void 0 : _c.value) || '';
      vIndex++;
    }

    var cv = __spreadArray([], v.value);

    vIndex = v.valueIndex - 1;

    while (vIndex >= 0) {
      // prev wheel check
      if (typeof cv[vIndex] === 'undefined') {
        // left not scrolled
        cv[vIndex] = ((_d = v.list[vIndex][0]) === null || _d === void 0 ? void 0 : _d.value) || '';
      }

      vIndex--;
    }

    (_e = v.onChange) === null || _e === void 0 ? void 0 : _e.call(v, cv);
  }, [getIndexByY, scrollToIndex, thisRef]);
  return /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: elRef,
    onTouchStart: function onTouchStart() {
      elRef.current.style.transitionProperty = 'none';
    },
    onTouchEnd: onTouchEnd,
    onPressMove: function onPressMove(e) {
      e.preventDefault();
      yRef.current += e.deltaY;
      elRef.current.style.transform = "translate3d(0," + yRef.current + "px,0)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper",
    style: {
      width: 100 / cols + '%'
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
  var _a;

  var _b = props.okText,
      okText = _b === void 0 ? '确定' : _b,
      _c = props.cancelText,
      cancelText = _c === void 0 ? '取消' : _c,
      _d = props.title,
      title = _d === void 0 ? '请选择' : _d,
      onClose = props.onClose,
      visible = props.visible,
      onOk = props.onOk,
      _e = props.value,
      value = _e === void 0 ? [] : _e,
      _f = props.data,
      data = _f === void 0 ? [] : _f,
      _g = props.cols,
      cols = _g === void 0 ? 1 : _g,
      rest = __rest(props, ["okText", "cancelText", "title", "onClose", "visible", "onOk", "value", "data", "cols"]);

  var listRef = useRef(getPickerMapData(data, cols, value));

  var _h = useState(value),
      val = _h[0],
      setVal = _h[1];

  return /*#__PURE__*/React.createElement(Popup, {
    position: "bottom",
    style: {
      width: '100%'
    },
    visible: visible,
    onMaskClick: function onMaskClick() {
      return onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, /*#__PURE__*/React.createElement(StyledBar, {
    className: "bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cancel",
    onClick: onClose
  }, cancelText), /*#__PURE__*/React.createElement("div", {
    className: "title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ok",
    onClick: function onClick() {
      var _a;

      if (listRef.current.length) {
        var cv = __spreadArray([], val);

        var i = cols - 1;

        while (i >= 0) {
          if (typeof cv[i] === 'undefined') {
            cv[i] = ((_a = listRef.current[i][val[i] || 0]) === null || _a === void 0 ? void 0 : _a.value) || '';
          }

          i--;
        }

        onOk === null || onOk === void 0 ? void 0 : onOk(cv);
      } else {
        onOk === null || onOk === void 0 ? void 0 : onOk([]);
      }

      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  }, okText)), /*#__PURE__*/React.createElement(StyledPicker, __assign({
    ref: ref
  }, rest, {
    className: clsx('uc-picker')
  }), /*#__PURE__*/React.createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.map(function (d, idx) {
    return /*#__PURE__*/React.createElement(Wheel, {
      cols: cols,
      data: d,
      key: idx === 0 ? 'first' : (val === null || val === void 0 ? void 0 : val[idx - 1]) || idx,
      value: val,
      valueIndex: idx,
      listRef: listRef,
      onChange: setVal
    });
  })))));
});
Picker.displayName = 'UC-Picker';
export default Picker;
var templateObject_1, templateObject_2;