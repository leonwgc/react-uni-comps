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

import React, { useRef, useImperativeHandle, useLayoutEffect } from 'react';
import useCallbackRef from './hooks/useCallbackRef';
import { observe, unobserve } from './defaultIntersectionObserver';
import clsx from 'clsx';
/** 路标点，一个0*0大小的点，指示当前点位是否可见，并执行onVisible,onInVisible回调 */

var Waypoint = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var elRef = useRef();

  var onVisible = props.onVisible,
      onInVisible = props.onInVisible,
      style = props.style,
      className = props.className,
      rest = __rest(props, ["onVisible", "onInVisible", "style", "className"]);

  var vv = useCallbackRef(onVisible);
  var vi = useCallbackRef(onInVisible);
  useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      var _a, _b;

      if (visible) {
        (_a = vv.current) === null || _a === void 0 ? void 0 : _a.call(vv, elRef.current);
      } else {
        (_b = vi.current) === null || _b === void 0 ? void 0 : _b.call(vi, elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, [vv, vi]);
  useImperativeHandle(ref, function () {
    return elRef.current;
  });
  return /*#__PURE__*/React.createElement("span", __assign({}, rest, {
    "data-role": "waypoint",
    className: clsx('uc-waypoint', className),
    style: __assign({
      fontSize: 0
    }, style),
    ref: elRef
  }));
});
Waypoint.displayName = 'UC-Waypoint';
export default Waypoint;