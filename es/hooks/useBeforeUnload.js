import { useCallback } from 'react';
import useEventListener from './useEventListener';
/**
 * 刷新或关闭浏览器执行
 *
 * @param {string} [message]
 * @param {(boolean | (() => boolean))} [enabled=true]
 */

var useBeforeUnload = function useBeforeUnload(message, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }

  var handler = useCallback(function (event) {
    var finalEnabled = typeof enabled === 'function' ? enabled() : true;

    if (!finalEnabled) {
      return;
    }

    event.preventDefault();

    if (message) {
      event.returnValue = message;
    }

    return message;
  }, [enabled, message]);
  useEventListener(function () {
    return window;
  }, 'beforeunload', handler);
};

export default useBeforeUnload;