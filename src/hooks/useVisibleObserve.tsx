/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useEffect } from 'react';
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
  useEffect(() => {
    observe(elRef.current, (visible) => {
      setVisible(visible);
      if (visible) {
        unobserve(elRef.current);
      }
    });

    return () => {
      if (elRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        unobserve(elRef.current);
      }
    };
  }, []);
};

export default useVisibleObserve;
