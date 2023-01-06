---
title: useLatest 返回当前最新值
order: 7
group:
  title: Hooks
  order: 12
  path: hooks
---

# useLatest 返回当前最新值

```typescript
/**
 * 保存最新的值在ref中
 *
 * @export
 * @template T
 * @param {T} value
 * @return {*}  {MutableRefObject<T>}
 */
export default function useLatest<T>(value: T): MutableRefObject<T>;

```