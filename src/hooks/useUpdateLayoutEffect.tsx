/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import useIsomorphicLayoutEffect from './useisomorphicLayoutEffect';
/**
 *  执行同步更新effect
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
const useUpdateLayoutEffect = (effect: () => void, deps: Array<unknown> = []): void => {
  const isMounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};

export default useUpdateLayoutEffect;
