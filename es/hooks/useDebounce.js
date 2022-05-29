import { __spreadArray } from "tslib";
import { useMemo } from 'react';
import { debounce } from '../helper';
import useLatest from './useLatest';
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
  }

  var fnRef = useLatest(fn); // eslint-disable-next-line react-hooks/exhaustive-deps

  return useMemo(function () {
    return debounce(function () {
      var _a;

      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([fnRef], args, false));
    }, timeout);
  }, fnDeps);
};

export default useDebounce;