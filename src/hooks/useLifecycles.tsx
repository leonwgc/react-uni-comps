import { useEffect } from 'react';

/**
 * 注册mount,unmount回调
 *
 * @param {*} mount
 * @param {*} [unmount]
 */
const useLifecycles = (mount, unmount?) => {
  useEffect(() => {
    if (mount) {
      mount();
    }
    return () => {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

export default useLifecycles;
