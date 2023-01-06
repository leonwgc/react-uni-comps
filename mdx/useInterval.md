---
title: useInterval 定时器setInterval
order: 3
group:
  title: Hooks
  order: 12
  path: hooks
---

# useInterval 定时器setInterval

```typescript
export declare type Func = () => void;

/**
 * 定时器setInterval
 *
 * @param {Func} fn, fn返回false 计时器停止
 * @param {number} delay
 */
declare function useInterval(fn: Func | (() => boolean), delay: number): void;
```