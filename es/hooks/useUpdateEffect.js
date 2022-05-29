/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useLatest from './useLatest';
/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var isMounted = useRef(false);
  var latestFn = useLatest(effect);
  useEffect(function () {
    var _a;

    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return (_a = latestFn.current) === null || _a === void 0 ? void 0 : _a.call(latestFn);
    }
  }, deps);
};

export default useUpdateEffect;