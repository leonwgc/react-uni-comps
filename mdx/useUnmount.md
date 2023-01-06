---
title: useUnmount 组件卸载执行
order: 5
group:
  title: Hooks
  order: 12
  path: hooks
---

# useUnmount 组件卸载执行

```typescript
/**
 *  组件卸载执行回调
 *
 * @param {() => void} fn 执行的回调
 */
declare const useUnmount: (fn: () => void) => void;
```