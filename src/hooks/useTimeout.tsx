import { useEffect } from 'react';
import useLatest from './useLatest';
import type { Func } from '../types';

/**
 * 定时器setTimeout
 *
 * @param {Func} fn
 * @param {number} delay
 */
function useTimeout(fn: Func, delay: number): void {
  const fnRef = useLatest(fn);

  useEffect(() => {
    if (typeof delay !== 'number' || delay < 0) return;
    const timer = setTimeout(() => {
      fnRef.current();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);
}

export default useTimeout;
