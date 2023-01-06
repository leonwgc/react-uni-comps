---
title: nanoid 返回随机字符串
order: 9
group:
  title: 工具函数
  order: 13
  path: utils
---

# nanoid 返回随机字符串 (nanoid库重新导出)

```typescript
/**
 * Generate secure URL-friendly unique ID.
 *
 * By default, the ID will have 21 symbols to have a collision probability
 * similar to UUID v4.
 *
 * @param size Size of the ID. The default size is 21.
 * @returns A random string.
 */
export function nanoid(size?: number): string
```
