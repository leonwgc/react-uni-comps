/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject } from 'react';
import { observe, unobserve } from '../defaultIntersectionObserver';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

/**
 * 监视元素在文档视口的可见性，可见性变化时触发回调
 *
 * @param {RefObject<HTMLElement>} elRef 监视元素ref
 * @param {(visible: boolean) => void} onVisibleChange 回调
 * @param {boolean} [unobserveWhenVisible=true] 元素可见时取消监控，默认true
 */
const useVisibleObserve = (
  elRef: RefObject<HTMLElement>,
  onVisibleChange: (visible: boolean) => void,
  unobserveWhenVisible = true
): void => {
  useIsomorphicLayoutEffect(() => {
    observe(elRef.current, (visible) => {
      onVisibleChange(visible);
      if (unobserveWhenVisible && visible) {
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
