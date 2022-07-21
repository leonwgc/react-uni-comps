import { useEffect } from 'react';
import useLatest from './useLatest';
import type { Func } from '../types';

/**
 * 定时器setInterval
 *
 * @param {Func} fn, fn返回false 计时器停止
 * @param {number} delay
 */
function useInterval(fn: Func | (() => boolean), delay: number): void {
  const fnRef = useLatest(fn);

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) return;
    const timer = setInterval(() => {
      const rt = fnRef.current();

      if (rt === false) {
        clearInterval(timer);
      }
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;
