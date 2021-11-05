import { useEffect, useState, useCallback } from 'react';
/**
 * 获取验证码倒计时
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  started: boolean;
  start: () => void;
  reset: () => void;
}
 */

var useCountdown = function useCountdown(defaultCountdown, defaultStarted) {
  if (defaultCountdown === void 0) {
    defaultCountdown = 60;
  }

  if (defaultStarted === void 0) {
    defaultStarted = false;
  }

  var _a = useState(defaultCountdown),
      countdown = _a[0],
      setCountdown = _a[1];

  var _b = useState(defaultStarted),
      started = _b[0],
      setStarted = _b[1];

  var start = useCallback(function () {
    setStarted(true);
  }, []);
  var reset = useCallback(function () {
    setStarted(false);
  }, []);
  useEffect(function () {
    if (countdown > 0 && started) {
      setTimeout(function () {
        setCountdown(function (cd) {
          return --cd;
        });
      }, 1000);
    } else {
      setStarted(false);
      setCountdown(defaultCountdown);
    }
  }, [countdown, started, defaultCountdown]);
  return {
    countdown: countdown,
    started: started,
    start: start,
    reset: reset
  };
};

export default useCountdown;