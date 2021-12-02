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

import React, { useCallback, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: translate3d(0px, 105px, 0px);\n  transition-duration: 0.24s;\n  transition-property: transform;\n  transition-timing-function: ease-in-out;\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    color: #333;\n  }\n"], ["\n  transform: translate3d(0px, 105px, 0px);\n  transition-duration: 0.24s;\n  transition-property: transform;\n  transition-timing-function: ease-in-out;\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    color: #333;\n  }\n"])));
var itemHeight = 35;
var firstItemY = 105;

var Wheel = function Wheel(props) {
  var onChange = props.onChange,
      _a = props.data,
      data = _a === void 0 ? [] : _a,
      value = props.value,
      className = props.className,
      rest = __rest(props, ["onChange", "data", "value", "className"]);

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
    var index = data.findIndex(function (d) {
      return d.value === value;
    });

    if (index === -1) {
      // not found , goto first
      if (data.length > 0) {
        onChange === null || onChange === void 0 ? void 0 : onChange(data[0].value, 0);
      } else {
        onChange === null || onChange === void 0 ? void 0 : onChange(undefined, 0);
      }

      scrollToIndex(0);
    } else {
      scrollToIndex(index);
    }
  }, [scrollToIndex, data, value, onChange]);

  var onTouchEnd = function onTouchEnd() {
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
    onChange === null || onChange === void 0 ? void 0 : onChange(data[index].value, index);
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
  }, /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, {
    className: clsx('uc-wheel', className)
  }), data.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: "item",
      key: item.value
    }, item.label);
  })));
};

Wheel.displayName = 'UC-Wheel';
export default Wheel;
var templateObject_1;