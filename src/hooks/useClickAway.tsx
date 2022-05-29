import { useEffect } from 'react';
import { getPropsElement } from '../helper';
import useLatest from './useLatest';
import type { PropsElementType } from '../types';

/**
 * 监听点击元素外部事件
 *
 * @export
 * @param {(PropsElementType | PropsElementType[])} target
 * @param {(e) => void} [onClickAway]
 * @param {string} [eventName='click']
 */
export default function useClickAway(
  target: PropsElementType | PropsElementType[],
  onClickAway?: (e) => void,
  eventName = 'click'
) {
  const onClickAwayRef = useLatest(onClickAway);
  const eventNameRef = useLatest(eventName);
  const targetRef = useLatest(target);

  useEffect(() => {
    const eventName = eventNameRef.current;
    const handler = (e) => {
      const targets = Array.isArray(targetRef.current) ? targetRef.current : [targetRef.current];

      if (
        targets.some((targetItem) => {
          const targetElement = getPropsElement(targetItem);
          return !targetElement || targetElement.contains?.(e.target);
        })
      ) {
        return;
      }
      onClickAwayRef.current?.(e);
    };

    document.addEventListener(eventName, handler);

    return () => {
      document.removeEventListener(eventName, handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
