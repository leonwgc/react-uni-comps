---
title: debounce 防抖
order: 0
group:
  title: 工具函数
  order: 13
  path: utils
---

# debounce 返回防抖函数

```typescript
/**
 * 防抖
 *
 * @param {F} fn
 * @param {number} [timeout=100]
 * @return {*}  {F}
 */
export declare const debounce: (fn: F, timeout?: number) => F;
```