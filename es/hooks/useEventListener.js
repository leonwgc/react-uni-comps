import { useEffect } from 'react';
import { getTargetElement } from '../helper';
import useLatest from './useLatest';
/**
 * 事件监听
 *
 * @export
 * @param {TargetElementType} target 监听对象
 * @param {(e) => void} [handler] 处理函数
 * @param {string} [eventName='click'] 事件类型
 */

export default function useEventListener(
/**
 * 监听对象
 * @default window
 *  */
target,
/** 监听事件类型 */
eventName, handler, // eslint-disable-next-line no-undef
options) {
  if (eventName === void 0) {
    eventName = 'click';
  }

  if (options === void 0) {
    options = undefined;
  }

  var handlerRef = useLatest(handler);
  var eventNameRef = useLatest(eventName);
  var targetRef = useLatest(target);
  var optionsRef = useLatest(options);
  useEffect(function () {
    var targetElement = getTargetElement(targetRef.current) || window;

    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }

    var eventListener = function eventListener(e) {
      return handlerRef.current(e);
    };

    var type = eventNameRef.current;
    var options = optionsRef.current;
    targetElement.addEventListener(type, eventListener, options);
    return function () {
      targetElement.removeEventListener(type, eventListener, options);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}