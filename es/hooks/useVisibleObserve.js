/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';
import { observe, unobserve } from '../defaultIntersectionObserver';
/**
 *  observe el's visibility & do sth then unobserve el
 *
 * @param {RefObject<HTMLElement>} elRef
 * @param {(v: boolean) => void} setVisible
 */

var useVisibleObserve = function useVisibleObserve(elRef, setVisible) {
  // layout for cleanup
  useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      setVisible(visible);

      if (visible) {
        unobserve(elRef.current);
      }
    });
    return function () {
      if (elRef.current) {
        unobserve(elRef.current);
      }
    };
  }, []);
};

export default useVisibleObserve;