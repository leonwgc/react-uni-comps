/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
/**
 *  执行更新 effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateEffect = function useUpdateEffect(effect, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var isMounted = useRef(false);
  useEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;