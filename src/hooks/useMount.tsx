/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from 'react';
/**
 *  组件加载执行回调
 *
 * @param {() => void} fn 加载执行的回调
 */
const useMount = (fn: () => void): void => {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      fn?.();
    }
  }, []);
};

export default useMount;
