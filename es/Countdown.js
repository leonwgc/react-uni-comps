import { __assign, __rest } from "tslib";
import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { prefixClassName } from './helper';
import useInterval from './hooks/useInterval';
import useLatest from './hooks/useLatest';
var getClassName = prefixClassName('uc-countdown');
/**
 * 倒计时
 * @param props
 * @returns
 */

var Countdown = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _a = props.millisec,
      millisec = _a === void 0 ? false : _a,
      value = props.value,
      onFinish = props.onFinish,
      className = props.className,
      children = props.children,
      rest = __rest(props, ["millisec", "value", "onFinish", "className", "children"]);

  var _b = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
    millisec: 0
  }),
      date = _b[0],
      setDate = _b[1];

  var onFinishRef = useLatest(onFinish);
  var valueRef = useLatest(value);
  var finishedRef = useRef(false);
  useInterval(function () {
    var _a;

    if (!valueRef.current || finishedRef.current) {
      return false; // clear timer
    }

    var distance = valueRef.current.getTime() - Date.now();

    if (distance < 0) {
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

    var day = Math.floor(distance / 86400000);
    var hour = Math.floor(distance % 86400000 / 3600000);
    var min = Math.floor(distance % 3600000 / 60000);
    var sec = Math.floor(distance % 60000 / 1000);
    var millisecond = Math.floor(distance % 60000 % 1000);
    setDate({
      day: day,
      hour: hour,
      min: min,
      sec: sec,
      millisec: millisecond
    });
  }, millisec ? 1 : 1000);
  return /*#__PURE__*/React.createElement("div", __assign({
    ref: ref,
    className: clsx(getClassName(), className)
  }, rest), typeof children === 'function' && children(date));
});
Countdown.displayName = 'Countdown';
export default Countdown;