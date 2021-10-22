import { useMemo } from 'react';
import { throttle } from '../helper';

type F = (...args: unknown[]) => void;

/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
const useThrottle = (fn: F, timeout = 180, fnDeps: Array<unknown> = []): F =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => throttle(fn, timeout), fnDeps);

export default useThrottle;
