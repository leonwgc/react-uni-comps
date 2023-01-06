---
title: useMount 组件加载执行
order: 4
group:
  title: Hooks
  order: 12
  path: hooks
---

# useMount 组件加载执行

```typescript
/**
 *  组件加载执行
 *
 * @param {() => void} fn 加载执行的回调
 */
declare const useMount: (fn: () => void) => void;
```