import { useEffect } from 'react';

/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */
const useUnmount = (fn: () => void) => {
  useEffect(() => {
    return () => {
      fn?.();
    };
  }, []);
};

export default useUnmount;
