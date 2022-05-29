import { useEffect } from 'react';
import { getTargetElement } from '../helper';
import useLatest from './useLatest';
import type { TargetElementType } from '../types';

/**
 * 事件监听
 *
 * @export
 * @param {TargetElementType} target 绑定事件对象
 * @param {string} [eventName='click'] 事件类型
 * @param {(e:Event) => void} [handler] 事件处理
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined]
 */
export default function useEventListener(
  target: TargetElementType,
  eventName = 'click',
  handler?: (e: Event) => void,
  // eslint-disable-next-line no-undef
  options: boolean | AddEventListenerOptions | undefined = undefined
) {
  const handlerRef = useLatest(handler);
  const eventNameRef = useLatest(eventName);
  const targetRef = useLatest(target);
  const optionsRef = useLatest(options);

  useEffect(() => {
    const targetElement = getTargetElement(targetRef.current) || window;
    if (!targetElement?.addEventListener) {
      return;
    }

    const eventListener = (e: Event) => {
      return handlerRef.current(e);
    };

    const type = eventNameRef.current;
    const options = optionsRef.current;

    targetElement.addEventListener(type, eventListener, options);

    return () => {
      targetElement.removeEventListener(type, eventListener, options);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
