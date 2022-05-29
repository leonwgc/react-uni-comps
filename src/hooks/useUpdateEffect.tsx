/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react';
import useLatest from './useLatest';

/**
 *  执行异步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
const useUpdateEffect = (effect: () => void, deps: Array<unknown> = []): void => {
  const isMounted = useRef(false);
  const latestFn = useLatest(effect);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return latestFn.current?.();
    }
  }, deps);
};

export default useUpdateEffect;
