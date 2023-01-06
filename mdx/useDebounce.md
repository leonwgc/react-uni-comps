---
title: useDebounce 返回防抖函数
order: 8
group:
  title: Hooks
  order: 12
  path: hooks
---

# useDebounce 返回防抖函数

```typescript
/**
 * 返回防抖函数
 *
 * @param {F} fn fn改变debounce fn不会变
 * @param {number} [timeout=180]
 * @param {Array<unknown>} [fnDeps=[]]
 * @return {*}  {F}
 */
declare const useDebounce: (fn: F, timeout?: number, fnDeps?: Array<unknown>) => F;

```