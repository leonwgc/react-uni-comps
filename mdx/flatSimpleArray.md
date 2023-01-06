---
title: flatSimpleArray 扁平化简单(基本数据类型)数组
order: 4
group:
  title: 工具函数
  order: 13
  path: utils
---

# flatSimpleArray 扁平化简单(基本数据类型)数组

```typescript
/**
 * 扁平化简单(基本数据类型)数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @return {*}  {T[]}
 */
export declare const flatSimpleArray: <T extends string | number>(arr: T[]) => T[];
```