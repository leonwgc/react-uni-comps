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
import useDebounce from './hooks/useDebounce';
import { useSpring, animated, config } from '@react-spring/web';
import Text from './Text';
var StyledWrap = styled(animated.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: translate3d(0px, 105px, 0px);\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    user-select: none;\n    cursor: grab;\n  }\n"], ["\n  transform: translate3d(0px, 105px, 0px);\n  touch-action: none;\n  flex: 1;\n  .item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 35px;\n    font-size: 18px;\n    user-select: none;\n    cursor: grab;\n  }\n"]))); // 惯性滑动

var MOMENTUM_LIMIT_TIME = 300;
var MOMENTUM_LIMIT_DISTANCE = 15;

var Wheel = function Wheel(props) {
  var onIndexChange = props.onIndexChange,
      _a = props.itemHeight,
      itemHeight = _a === void 0 ? 35 : _a,
      style = props.style,
      _b = props.data,
      data = _b === void 0 ? [] : _b,
      _c = props.index,
      index = _c === void 0 ? 0 : _c,
      className = props.className,
      rest = __rest(props, ["onIndexChange", "itemHeight", "style", "data", "index", "className"]);

  var firstItemY = itemHeight * 3;
  var elRef = useRef();
  var onIndexChangeRef = useCallbackRef(onIndexChange);
  var yRef = useRef(firstItemY);

  var _d = useState(index),
      _index = _d[0],
      _setIndex = _d[1];

  var isMovingRef = useRef(false);
  var momentumRef = useRef({
    touchStartTime: 0
  });

  var _e = useSpring(function () {
    return {
      y: 105,
      config: config.default
    };
  }),
      styles = _e[0],
      api = _e[1];

  var scrollToIndex = useDebounce(function (index, effect) {
    if (effect === void 0) {
      effect = true;
    }

    yRef.current = firstItemY - itemHeight * index;
    api.start({
      y: yRef.current,
      immediate: !effect
    });
  }, 100, [api, yRef]);
  var getIndexByY = useCallback(function () {
    var y = yRef.current;
    var d = Math.round((firstItemY - y) / itemHeight);
    return d;
  }, [yRef, itemHeight, firstItemY]); // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(function () {
    // guard to prevent from index out of range
    if (_index < 0) {
      _setIndex(0);
    } else if (_index >= data.length && data.length) {
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
    scrollToIndex(_index, false);
  }, [_index, scrollToIndex]);
  var touchEnd = useCallback(function () {
    if (!isMovingRef.current) {
      return;
    }

    isMovingRef.current = false;
    var min = -1 * (data.length - 1) * itemHeight + firstItemY;
    var max = firstItemY;
    var newIndex;

    if (yRef.current >= max - itemHeight / 2) {
      newIndex = 0;
    } else if (yRef.current <= min) {
      newIndex = Math.max(data.length - 1, 0);
    } else {
      newIndex = getIndexByY();
    }

    scrollToIndex(newIndex);
    setTimeout(function () {
      _setIndex(newIndex);
    }, 300);
  }, [scrollToIndex, itemHeight, firstItemY, getIndexByY, data]);
  var evtProps = {};

  evtProps[isTouch ? 'onTouchStart' : 'onMouseDown'] = function () {
    isMovingRef.current = true;
    momentumRef.current.touchStartTime = Date.now();
  };

  useLayoutEffect(function () {
    document.addEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    return function () {
      document.removeEventListener(isTouch ? 'touchend' : 'mouseup', touchEnd);
    };
  }, [touchEnd]);
  return /*#__PURE__*/React.createElement(FingerGestureElement, {
    ref: elRef,
    onPressMove: function onPressMove(e) {
      yRef.current += e.deltaY;
      var distance = e.deltaY;
      var duration = Date.now() - momentumRef.current.touchStartTime;
      api.start({
        y: yRef.current
      });

      if (duration < MOMENTUM_LIMIT_TIME && Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE) {
        // momentum effect
        var speed = Math.abs(distance / duration);
        yRef.current += speed / 0.003 * (distance < 0 ? -1 : 1);
        scrollToIndex(getIndexByY());
      }
    }
  }, /*#__PURE__*/React.createElement(StyledWrap, __assign({}, rest, evtProps, {
    className: clsx('uc-wheel', className),
    style: __assign(__assign({}, style), {
      transform: styles.y.to(function (v) {
        return "translate3d(0,".concat(v, "px,0)");
      })
    })
  }), data.map(function (item) {
    return /*#__PURE__*/React.createElement(Text, {
      className: "item",
      key: item.value,
      style: {
        height: itemHeight
      }
    }, item.label);
  })));
};

Wheel.displayName = 'UC-Wheel';
export default Wheel;
var templateObject_1;