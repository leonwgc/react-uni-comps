---
title: useClickAway 监听点击元素外部
order: 1
group:
  title: Hooks
  order: 12
  path: hooks
---

# useClickAway 监听点击元素外部

```typescript
 declare type TargetElementType = Element | (() => Element) | React.MutableRefObject<Element>;

/**
 * 监听点击元素外部事件
 *
 * @export
 * @param {(TargetElementType | TargetElementType[])} target 监听dom对象
 * @param {(e) => void} [onClickAway] 点击外部事件触发回调
 * @param {string} [eventName='click'] 监听事件类型
 */
 default function useClickAway(
/** 监听dom对象 */
target: TargetElementType | TargetElementType[], 
/** 点击外部事件触发回调 */
onClickAway?: (e: any) => void, 
/** 监听事件类型 */
eventName?: string): void;

```