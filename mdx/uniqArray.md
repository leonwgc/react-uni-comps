---
title: uniqArray 数组去重
order: 2
group:
  title: 工具函数
  order: 13
  path: utils
---

# uniqArray 数组去重

```typescript
/**
 * 数组去重
 *
 * @template T
 * @param {T[]} arr 待去重数组
 * @param {(a: T, b: T) => boolean} equalFn 判断函数,数组重复条件, 默认(a,b)=>a===b
 * @return {*}  {T[]}
 */
export declare const uniqArray: <T>(arr: T[], equalFn?: (a: T, b: T) => boolean) => T[];
```