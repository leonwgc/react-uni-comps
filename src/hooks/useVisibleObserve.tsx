/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useLayoutEffect } from 'react';
import { observe, unobserve } from '../defaultIntersectionObserver';

/**
 *  observe el's visibility ,when it's visible ,do sth then unobserve el
 *
 * @param {RefObject<HTMLElement>} elRef
 * @param {(v: boolean) => void} onVisibleChange
 */
const useVisibleObserve = (
  elRef: RefObject<HTMLElement>,
  onVisibleChange: (v: boolean) => void
): void => {
  // layout for cleanup
  useLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      onVisibleChange(visible);
      if (visible) {
        unobserve(elRef.current);
      }
    });

    return () => {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
};

export default useVisibleObserve;
