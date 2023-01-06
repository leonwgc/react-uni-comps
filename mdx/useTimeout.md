---
title: useTimeout 定时器setTimeout
order: 2
group:
  title: Hooks
  order: 12
  path: hooks
---

# useTimeout 定时器setTimeout

```typescript
export declare type Func = () => void;

 /**
 * 定时器setTimeout
 *
 * @param {Func} fn
 * @param {number} delay
 */
declare function useTimeout(fn: Func, delay: number): void;
```