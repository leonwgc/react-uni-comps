import { useCallback } from 'react';
import useEventListener from './useEventListener';

/**
 * 刷新或关闭浏览器执行
 *
 * @param {string} [message]
 * @param {(boolean | (() => boolean))} [enabled=true]
 */
const useBeforeUnload = (message?: string, enabled: boolean | (() => boolean) = true) => {
  const handler = useCallback(
    (event: BeforeUnloadEvent) => {
      const finalEnabled = typeof enabled === 'function' ? enabled() : true;

      if (!finalEnabled) {
        return;
      }

      event.preventDefault();

      if (message) {
        event.returnValue = message;
      }

      return message;
    },
    [enabled, message]
  );

  useEventListener(() => window, 'beforeunload', handler);
};

export default useBeforeUnload;
