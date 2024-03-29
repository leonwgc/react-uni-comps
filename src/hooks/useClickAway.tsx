import React from 'react';
import { getTargetElement } from '../helper';
import useLatest from './useLatest';
import type { TargetElementType } from '../types';
import useEventListener from './useEventListener';

/**
 * 监听点击元素外部事件
 *
 * @export
 * @param {(TargetElementType | TargetElementType[])} target 监听dom对象
 * @param {(e) => void} [onClickAway] 点击外部事件触发回调
 * @param {string} [eventName='click'] 监听事件类型
 */
export default function useClickAway(
  /** 监听dom对象 */
  target: TargetElementType | TargetElementType[],
  /** 点击外部事件触发回调 */
  onClickAway?: (e) => void,
  /** 监听事件类型 */
  eventName = 'click'
) {
  const onClickAwayRef = useLatest(onClickAway);
  const targetRef = useLatest(target);

  const handler = React.useCallback((e) => {
    const targets = Array.isArray(targetRef.current) ? targetRef.current : [targetRef.current];

    if (
      targets.some((targetItem) => {
        const targetElement = getTargetElement(targetItem);
        return !targetElement || targetElement.contains?.(e.target);
      })
    ) {
      return;
    }
    onClickAwayRef.current?.(e);
  }, []);

  useEventListener(() => document, eventName, handler);
}
