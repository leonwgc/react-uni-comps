import { useEffect, useState, useCallback } from 'react';

/** 获取验证码倒计时 ex
 const { countdown, started, start, stop } = useCountdown();

<a className="code" ref={ref} onClick={started ? null : showSuperCode}>
   {started ? countdown + '秒' : '获取验证码'}
</a> 

*/

type CountdownReturnType = {
  countdown: number;
  started: boolean;
  start: () => void;
  reset: () => void;
};

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
const useCountdown: (defaultCountdownSec: number, defaultStarted: boolean) => CountdownReturnType =
  (defaultCountdown = 60, defaultStarted = false) => {
    const [countdown, setCountdown] = useState(defaultCountdown);
    const [started, setStarted] = useState(defaultStarted);

    const start = useCallback(() => {
      setStarted(true);
    }, []);

    const reset = useCallback(() => {
      setStarted(false);
    }, []);

    useEffect(() => {
      if (countdown > 0 && started) {
        setTimeout(() => {
          setCountdown((cd) => --cd);
        }, 1000);
      } else {
        setStarted(false);
        setCountdown(defaultCountdown);
      }
    }, [countdown, started, defaultCountdown]);

    return { countdown, started, start, reset };
  };

export default useCountdown;
