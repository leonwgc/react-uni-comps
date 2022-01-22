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

import React from 'react';
import clsx from 'clsx';
import { useSpring, animated, config } from '@react-spring/web';
/** 滚动数字 */

var RollingNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var number = props.number,
      _a = props.delay,
      delay = _a === void 0 ? 200 : _a,
      className = props.className,
      rest = __rest(props, ["number", "delay", "className"]);

  var spring = useSpring({
    from: {
      number: 0
    },
    number: number,
    delay: delay,
    config: config.molasses
  });
  return /*#__PURE__*/React.createElement(animated.span, __assign({}, rest, {
    ref: ref,
    className: clsx('uc-rolling-number', className)
  }), spring.number.to(function (n) {
    return ~~n;
  }));
});
RollingNumber.displayName = 'UC-RollingNumber';
export default RollingNumber;