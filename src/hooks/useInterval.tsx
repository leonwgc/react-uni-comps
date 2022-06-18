import { useEffect } from 'react';
import useLatest from './useLatest';
import type { Func } from '../types';

/**
 * 定时器setInterval
 *
 * @param {Func} fn
 * @param {number} delay
 */
function useInterval(fn: Func, delay: number): void {
  const fnRef = useLatest(fn);

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) return;
    const timer = setInterval(() => {
      fnRef.current();
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [delay]);
}

export default useInterval;
