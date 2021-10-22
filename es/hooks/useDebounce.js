import { useMemo } from 'react';
import { debounce } from '../helper';
/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */

var useDebounce = function useDebounce(fn, timeout, fnDeps) {
  if (timeout === void 0) {
    timeout = 180;
  }

  if (fnDeps === void 0) {
    fnDeps = [];
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  return useMemo(function () {
    return debounce(fn, timeout);
  }, fnDeps);
};

export default useDebounce;