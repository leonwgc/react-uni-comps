import { useEffect, useState, useCallback } from 'react';

type CountdownHooksReturn = {
  /** 倒计时开始数字，默认60 */
  countdown: number;
  /** 倒计时中 */
  isRunning: boolean;
  /** 完成过一次倒计时，重新start过 */
  isReStarted: boolean;
  /** 开始倒计时 */
  start: () => void;
  /** 重置倒计时 */
  reset: () => void;
};

/**
 * 倒计时，常用于获取验证码
 *
 * @param {number} [defaultCountdown=60] 默认从60秒开始倒计时
 * @param {boolean} [defaultStarted=false] 默认开始否
 * @return {*} {
  countdown: number;
  isRunning: boolean;
  isReStarted: boolean;
  start: () => void;
  reset: () => void;
}
 */
const useCountdown = (defaultCountdown = 60, defaultStarted = false): CountdownHooksReturn => {
  const [countdown, setCountdown] = useState(defaultCountdown);
  const [started, setStarted] = useState(defaultStarted);
  const [isReStarted, setIsReStarted] = useState(false);

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
      if (countdown === 1) {
        // mark the end of this round
        setIsReStarted(true);
      }
    } else {
      setStarted(false);

      setCountdown(defaultCountdown);
    }
  }, [countdown, started, defaultCountdown]);

  return { countdown, isRunning: started, start, reset, isReStarted };
};

export default useCountdown;
