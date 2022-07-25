import { useEffect } from 'react';
/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */

var useUnmount = function useUnmount(fn) {
  useEffect(function () {
    return function () {
      fn === null || fn === void 0 ? void 0 : fn();
    };
  }, []);
};

export default useUnmount;