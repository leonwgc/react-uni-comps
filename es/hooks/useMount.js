/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useRef } from 'react';
/**
 *  组件加载执行回调
 *
 * @param {() => void} fn 加载执行的回调
 */

var useMount = function useMount(fn) {
  var isMounted = useRef(false);
  useLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
      fn === null || fn === void 0 ? void 0 : fn();
    }
  }, []);
};

export default useMount;