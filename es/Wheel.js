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

import React, { useCallback, useEffect, useRef, useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FingerGestureElement from './FingerGestureElement';
import { isTouch } from './dom';
import useCallbackRef from './hooks/useCallbackRef';
import useUpdateEffect from './hooks/useUpdateEffect';
var StyledWrap = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: translate3d(0px, 105px, 0px);\n  transition-duration: 0.24s;\n  transition-property: transform;\n  transition-timing-function: ease-in-out;\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    color: #333;\n    user-select: none;\n  }\n"], ["\n  transform: translate3d(0px, 105px, 0px);\n  transition-duration: 0.24s;\n  transition-property: transform;\n  transition-timing-function: ease-in-out;\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    color: #333;\n    user-select: none;\n  }\n"])));
var itemHeight = 35;
var firstItemY = 105;

var Wheel = function Wheel(props) {
  var onIndexChange = props.onIndexChange,
      _a = props.data,
      data = _a === void 0 ? [] : _a,
      _b = props.index,
      index = _b === void 0 ? 0 : _b,
      className = props.className,
      rest = __rest(props, ["onIndexChange", "data", "index", "className"]);

  var elRef = useRef();
  var onIndexChangeRef = useCallbackRef(onIndexChange);
  var yRef = useRef(firstItemY);

  var _c = useState(index),
      _index = _c[0],
      _setIndex = _c[1];

  var scrollToIndex = useCallback(function (index) {
    if (elRef.current) {
      elRef.current.style.transitionProperty = 'transform';
      var y = firstItemY - itemHeight * index;
      yRef.current = y;

      if (elRef.current) {
        elRef.current.style.transform = "translate3d(0,".concat(y, "px,0)");
      }
    }
  }, [yRef]);
  var getIndexByY = useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef]); // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(function () {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length) {
      _setIndex(data.length - 1);
    }
  }); // sync outside

  useUpdateEffect(function () {
    if (_index !== index) {
      _setIndex(index);
    }
  }, [index]);
  useUpdateEffect(function () {
    onIndexChangeRef === null || onIndexChangeRef === void 0 ? void 0 : onIndexChangeRef.current(_index);
  }, [_index]);
  useEffect(function () {
    scrollToIndex(_index);
  }, [_index, scrollToIndex]);

  var touchEnd = function touchEnd() {
    var min = -1 * (data.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var newIndex;

    if (yRef.current >= max - itemHeight / 2) {
      newIndex = 0;
    } else if (yRef.current <= min) {
      newIndex = data.length - 1;
    } else {
      newIndex = getIndexByY();
    }

    scrollToIndex(newIndex);

    _setIndex(newIndex);
  };

  var touchEndRef = useCallbackRef(touchEnd);
  useLayoutEffect(function () {
    var el = elRef.current;
    var elTouchEnd = touchEndRef.current;
    var isMoving = false;

    var touchStart = function touchStart() {
      elRef.current.style.transitionProperty = 'none';
      isMoving = true;
    };

    var touchEnd = function touchEnd() {
      if (isMoving) {
        elTouchEnd();
      }

      isMoving = false;
    };

    el.addEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);
    el.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);

    if (!isTouch) {
      document.addEventListener('mouseup', touchEnd);
    }

    return function () {
      el.removeEventListener(isTouch ? 'touchstart' : 'mousedown', touchStart);
      el.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);

      if (!isTouch) {
        document.removeEventListener('mouseup', touchEnd);
      }
    };
  }, [touchEndRef]);
  return /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: elRef,
    onPressMove: function onPressMove(e) {
      yRef.current += e.deltaY;
      elRef.current.style.transform = "translate3d(0,".concat(yRef.current, "px,0)");
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