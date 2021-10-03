/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useLayoutEffect } from 'react';
import { observe, unobserve } from '../defaultIntersectionObserver';

/**
 *  observe el's visibility & do sth then unobserve el
 *
 * @param {RefObject<HTMLElement>} elRef
 * @param {(v: boolean) => void} setVisible
 */
const useVisibleObserve = (
  elRef: RefObject<HTMLElement>,
  setVisible: (v: boolean) => void
): void => {
  // layout for cleanup
  useLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      setVisible(visible);
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
