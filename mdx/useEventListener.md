---
title: useEventListener 事件监听
order: 0
group:
  title: Hooks
  order: 12
  path: hooks
---

# useEventListener 事件监听

```typescript
/**
 * 事件监听
 *
 * @export
 * @param {EventTargetType} target 绑定事件对象, 找不到则用window
 * @param {string}  事件类型
 * @param {(e:Event) => void} [handler] 事件处理
 * @param {(boolean | AddEventListenerOptions | undefined)} [options=undefined]
 */
function useEventListener(target: EventTargetType, type: string, handler?: (e: Event) => void, options?: boolean | AddEventListenerOptions | undefined): void;


declare type EventTargetType = EventTarget | React.MutableRefObject<EventTarget> | (() => EventTarget);

```