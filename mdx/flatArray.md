---
title: flatArray 扁平化对象数组
order: 3
group:
  title: 工具函数
  order: 13
  path: utils
---

# flatArray 扁平化对象数组

```typescript
/**
 * 扁平化对象数组
 *
 * @template T
 * @param {T[]} arr 待处理数组
 * @param {string} [childrenProp='children'] 子数组属性, 默认 children
 * @return {*}  {T[]}
 */
export declare const flatArray: <T extends Record<string, unknown>>(arr: T[], childrenProp?: string) => T[];
```