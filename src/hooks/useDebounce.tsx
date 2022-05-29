import { useMemo } from 'react';
import { debounce } from '../helper';
import useLatest from './useLatest';

type F = (...args: unknown[]) => void;
/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
const useDebounce = (fn: F, timeout = 180, fnDeps: Array<unknown> = []): F => {
  const fnRef = useLatest(fn);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => debounce((...args) => fnRef.current?.(...args), timeout), fnDeps);
};

export default useDebounce;
