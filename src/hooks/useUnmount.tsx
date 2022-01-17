import { useLayoutEffect } from 'react';

/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */
const useUnmount = (fn: () => void): void => {
  useLayoutEffect(() => {
    return () => {
      fn?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useUnmount;
