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

import React, { useImperativeHandle, useRef } from 'react';
import styled from 'styled-components';
import Wheel from './Wheel';
import clsx from 'clsx';
import useUpdateEffect from './hooks/useUpdateEffect';
import useForceUpdate from './hooks/useForceUpdate';
import { isObject } from './helper';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: ", "px;\n  touch-action: none;\n\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    pointer-events: none;\n    background-size: 100% ", "px;\n  }\n\n  .hairline {\n    position: absolute;\n    height: ", "px;\n    width: 100%;\n    border-left: 0;\n    border-right: 0;\n    top: ", "px;\n\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-top: 1px solid #d8d8d8;\n      border-bottom: 1px solid #d8d8d8;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  .columnitem {\n    width: 0;\n    flex-grow: 1;\n    height: 100%;\n\n    .wheel-wrap {\n      display: flex;\n      position: relative;\n      text-align: center;\n      overflow-y: hidden;\n      height: 100%;\n    }\n  }\n"], ["\n  display: flex;\n  position: relative;\n  background-color: #fff;\n  height: ", "px;\n  touch-action: none;\n\n  .mask {\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),\n      linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4));\n    background-repeat: no-repeat;\n    background-position: top, bottom;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    pointer-events: none;\n    background-size: 100% ", "px;\n  }\n\n  .hairline {\n    position: absolute;\n    height: ", "px;\n    width: 100%;\n    border-left: 0;\n    border-right: 0;\n    top: ", "px;\n\n    &:after {\n      content: '';\n      pointer-events: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      left: 0;\n      top: 0;\n      border-top: 1px solid #d8d8d8;\n      border-bottom: 1px solid #d8d8d8;\n\n      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {\n        width: 200%;\n        height: 200%;\n        transform: scale(0.5);\n        transform-origin: 0 0;\n      }\n    }\n  }\n\n  .columnitem {\n    width: 0;\n    flex-grow: 1;\n    height: 100%;\n\n    .wheel-wrap {\n      display: flex;\n      position: relative;\n      text-align: center;\n      overflow-y: hidden;\n      height: 100%;\n    }\n  }\n"])), function (props) {
  return props.itemHeight * 7;
}, function (props) {
  return props.itemHeight * 3;
}, function (props) {
  return props.itemHeight;
}, function (props) {
  return props.itemHeight * 3;
});
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

var formatSimpleData = function formatSimpleData(arr) {
  if (arr === void 0) {
    arr = [];
  }

  return arr.map(function (i) {
    return {
      label: i,
      value: i
    };
  });
}; //#endregion

/** 平铺选择器 */


var PickerView = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a;

  var className = props.className,
      onChange = props.onChange,
      onWheelChange = props.onWheelChange,
      _b = props.itemHeight,
      itemHeight = _b === void 0 ? 35 : _b,
      _c = props.value,
      value = _c === void 0 ? [] : _c,
      _d = props.data,
      data = _d === void 0 ? [] : _d,
      rest = __rest(props, ["className", "onChange", "onWheelChange", "itemHeight", "value", "data"]);

  var cols = 1;
  var cdata = data || []; // 非级联

  var isUnLinked = true;

  if (!(cdata === null || cdata === void 0 ? void 0 : cdata.length)) {
    cols = 1;
  } else {
    var firstItem = cdata[0];

    if (Array.isArray(firstItem)) {
      // 非级联
      isUnLinked = true;
      cols = cdata.length;
    } else if (!isObject(firstItem)) {
      cdata = formatSimpleData(cdata);
    } else {
      var c = 1;
      var t = firstItem;

      while (Array.isArray(t.children)) {
        if (isUnLinked) {
          isUnLinked = false;
        } // linked


        c++;
        t = t.children[0];
      }

      cols = c;
    }
  }

  var forceUpdate = useForceUpdate();
  var listRef = useRef(convertPickerData(cdata, cols, value));
  var indexArrRef = useRef(getIndexArrayFromValue(value, listRef.current, cols));
  useImperativeHandle(ref, function () {
    return {
      getValue: function getValue() {
        return listRef.current.map(function (e, i) {
          return e[indexArrRef.current[i]].value;
        });
      }
    };
  });
  useUpdateEffect(function () {
    var list = convertPickerData(cdata, cols, value);
    listRef.current = list;
    indexArrRef.current = getIndexArrayFromValue(value, list, cols);
    forceUpdate();
  }, [data]);
  return /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-pickerview', className),
    itemHeight: itemHeight
  }), /*#__PURE__*/React.createElement("div", {
    className: "mask"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hairline"
  }), /*#__PURE__*/React.createElement("div", {
    className: "columnitem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wheel-wrap"
  }, (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.map(function (listItem, idx) {
    return /*#__PURE__*/React.createElement(Wheel, {
      itemHeight: itemHeight,
      data: listItem,
      key: idx,
      index: indexArrRef.current[idx],
      onIndexChange: function onIndexChange(index) {
        var _a, _b;

        indexArrRef.current[idx] = index;
        var nextIndex = idx + 1;

        if (nextIndex <= cols - 1) {
          while (nextIndex <= cols - 1) {
            // next wheel refresh  & update value to next&first
            if (!isUnLinked) {
              // linked
              listRef.current[nextIndex] = ((_a = listRef.current[nextIndex - 1][indexArrRef.current[nextIndex - 1]]) === null || _a === void 0 ? void 0 : _a.children) || [];

              if ((!indexArrRef.current[nextIndex] || indexArrRef.current[nextIndex] === -1) && indexArrRef.current[nextIndex] < ((_b = listRef.current[nextIndex]) === null || _b === void 0 ? void 0 : _b.length)) {
                indexArrRef.current[nextIndex] = 0;
              }
            }

            nextIndex++;
          }

          listRef.current = __spreadArray([], listRef.current, true);
          indexArrRef.current = __spreadArray([], indexArrRef.current, true);
          forceUpdate();
        }

        onChange === null || onChange === void 0 ? void 0 : onChange(listRef.current.map(function (e, i) {
          return e[indexArrRef.current[i]].value;
        }));
        onWheelChange === null || onWheelChange === void 0 ? void 0 : onWheelChange(index, idx);
      }
    });
  }))));
});
PickerView.displayName = 'UC-PickerView';
export default PickerView;
var templateObject_1;