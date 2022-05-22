import { __assign, __rest } from "tslib";
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
    number: Number(number),
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