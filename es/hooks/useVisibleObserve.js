/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect } from 'react';
import { observe, unobserve } from '../defaultIntersectionObserver';
/**
 * 监视元素在文档视口的可见性，可见性变化时触发回调
 *
 * @param {RefObject<HTMLElement>} elRef 监视元素ref
 * @param {(visible: boolean) => void} onVisibleChange 回调
 * @param {boolean} [unobserveWhenVisible=true] 元素可见时取消监控，默认true
 */

var useVisibleObserve = function useVisibleObserve(elRef, onVisibleChange, unobserveWhenVisible) {
  if (unobserveWhenVisible === void 0) {
    unobserveWhenVisible = true;
  }

  useLayoutEffect(function () {
    observe(elRef.current, function (visible) {
      onVisibleChange(visible);

      if (unobserveWhenVisible && visible) {
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