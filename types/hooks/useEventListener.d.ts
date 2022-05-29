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
export default function useEventListener(target: TargetElementType, eventName?: string, handler?: (e: Event) => void, options?: boolean | AddEventListenerOptions | undefined): void;
