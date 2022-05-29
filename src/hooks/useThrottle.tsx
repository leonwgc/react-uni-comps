import { useMemo } from 'react';
import { throttle } from '../helper';
import useLatest from './useLatest';

type F = (...args: unknown[]) => void;

/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
const useThrottle = (fn: F, timeout = 180, fnDeps: Array<unknown> = []): F => {
  const fnRef = useLatest(fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => throttle((...args) => fnRef.current?.(...args), timeout), fnDeps);
};

export default useThrottle;
