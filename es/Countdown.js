import { __assign, __rest } from "tslib";
import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useInterval from './hooks/useInterval';
import useLatest from './hooks/useLatest';
var getClassName = prefixClassName('uc-countdown');

var getCountdown = function getCountdown(value) {
  if (!value) {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };
  }

  var diff = value.getTime() - Date.now();

  if (diff < 0) {
    return {
      day: 0,
      hour: 0,
      min: 0,
      sec: 0,
      millisec: 0
    };
  }

  var day = Math.floor(diff / 86400000);
  var hour = Math.floor(diff % 86400000 / 3600000);
  var min = Math.floor(diff % 3600000 / 60000);
  var sec = Math.floor(diff % 60000 / 1000);
  var millisecond = Math.floor(diff % 60000 % 1000);
  return {
    day: day,
    hour: hour,
    min: min,
    sec: sec,
    millisec: millisecond
  };
};
/**
 * 倒计时
 * @param props
 * @returns
 */


var Countdown = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var millisec = props.millisec,
      value = props.value,
      onFinish = props.onFinish,
      className = props.className,
      children = props.children,
      rest = __rest(props, ["millisec", "value", "onFinish", "className", "children"]);

  var _a = useState(function () {
    return getCountdown(value);
  }),
      date = _a[0],
      setDate = _a[1];

  var onFinishRef = useLatest(onFinish);
  var valueRef = useLatest(value);
  var finishedRef = useRef(false);
  useInterval(function () {
    var _a;

    if (!valueRef.current || finishedRef.current) {
      return false; // clear timer
    }

    var diff = valueRef.current.getTime() - Date.now();

    if (diff < 0) {
      finishedRef.current = true;
      setDate({
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
        millisec: 0
      });
      (_a = onFinishRef.current) === null || _a === void 0 ? void 0 : _a.call(onFinishRef);
      return;
    }

    setDate(getCountdown(valueRef.current));
  }, millisec ? 1 : 1000);
  return /*#__PURE__*/React.createElement("div", __assign({
    ref: ref,
    className: clsx(getClassName(), className)
  }, rest), typeof children === 'function' && children(date));
});
Countdown.displayName = 'Countdown';
export default Countdown;