import { useEffect } from 'react';
import useLatest from './useLatest';
import type { EventTargetType } from '../types';
import { isObject } from '../helper';
import { isBrowser } from '../dom';

const getEventTarget = (target: EventTargetType, defaultTarget) => {
  if (!isBrowser) {
    return undefined;
  }

  if (!target) {
    return defaultTarget;
  }

  let targetElement;

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
export default function useEventListener(
  target: EventTargetType,
  type: string,
  handler?: (e: Event) => void,
  // eslint-disable-next-line no-undef
  options: boolean | AddEventListenerOptions | undefined = undefined
) {
  const handlerRef = useLatest(handler);
  const typeRef = useLatest(type);
  const targetRef = useLatest(target);
  const optionsRef = useLatest(options);

  useEffect(() => {
    const targetElement = getEventTarget(targetRef.current, window);
    if (!targetElement?.addEventListener) {
      return;
    }

    const eventListener = (e: Event) => {
      return handlerRef.current(e);
    };

    const type = typeRef.current;
    const options = optionsRef.current;

    targetElement.addEventListener(type, eventListener, options);

    return () => {
      targetElement.removeEventListener(type, eventListener, options);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
