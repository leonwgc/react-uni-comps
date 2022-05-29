import type { TargetElementType } from '../types';
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
target: TargetElementType, 
/** 监听事件类型 */
eventName?: string, handler?: (e: any) => void, options?: boolean | AddEventListenerOptions | undefined): void;
