---
title: throttle 节流
order: 1
group:
  title: 工具函数
  order: 13
  path: utils
---

# throttle 返回节流函数

```typescript
/**
 * 节流
 *
 * @param {F} fn
 * @param {number} [timeout=200]
 * @param {boolean} [last=true] 最后一个timeout是否执行
 * @return {*}  {F}
 */
export declare const throttle: (fn: F, timeout?: number, last?: boolean) => F;
```