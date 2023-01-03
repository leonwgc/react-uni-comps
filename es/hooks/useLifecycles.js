import { useEffect } from 'react';
/**
 * 注册mount,unmount回调
 *
 * @param {*} mount
 * @param {*} [unmount]
 */

var useLifecycles = function useLifecycles(mount, unmount) {
  useEffect(function () {
    if (mount) {
      mount();
    }

    return function () {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;