import { useEffect } from 'react';
import useLatest from './useLatest';
import { isObject } from '../helper';
import { isBrowser } from '../dom';

var getEventTarget = function getEventTarget(target, defaultTarget) {
  if (!isBrowser) {
    return undefined;
  }

  if (!target) {
    return defaultTarget;
  }

  var targetElement;

  if (typeof target === 'function') {
    targetElement = target();
  } else if (isObject(target) && 'current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
};
/**
 * 事件监听
 *
 * @export
 * @param {EventTargetType} target 绑定事件对象, 找不到则用window
 * @param {string}  事件类型
 * @param {(e:Event) => void} [handler] 事件处理
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined]
 */


export default function useEventListener(target, type, handler, // eslint-disable-next-line no-undef
options) {
  if (options === void 0) {
    options = undefined;
  }

  var handlerRef = useLatest(handler);
  var typeRef = useLatest(type);
  var targetRef = useLatest(target);
  var optionsRef = useLatest(options);
  useEffect(function () {
    var targetElement = getEventTarget(targetRef.current, window);

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var eventListener = function eventListener(e) {
      return handlerRef.current(e);
    };

    var type = typeRef.current;
    var options = optionsRef.current;
    targetElement.addEventListener(type, eventListener, options);
    return function () {
      targetElement.removeEventListener(type, eventListener, options);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}