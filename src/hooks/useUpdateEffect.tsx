/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
/**
 *  执行更新 effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
const useUpdateEffect = (effect: () => void, deps: Array<unknown> = []): void => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
