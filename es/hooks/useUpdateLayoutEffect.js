/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
/**
 *  执行同步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */

var useUpdateLayoutEffect = function useUpdateLayoutEffect(effect, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var isMounted = useRef(false);
  useIsomorphicLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateLayoutEffect;