import { useMemo } from 'react';
import { throttle } from '../helper';
/**
 * 返回节流函数
 *
 * @param {F} fn fn改变throttle fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */

var useThrottle = function useThrottle(fn, timeout, fnDeps) {
  if (timeout === void 0) {
    timeout = 180;
  }

  if (fnDeps === void 0) {
    fnDeps = [];
  } // eslint-disable-next-line react-hooks/exhaustive-deps


  return useMemo(function () {
    return throttle(fn, timeout);
  }, fnDeps);
};

export default useThrottle;