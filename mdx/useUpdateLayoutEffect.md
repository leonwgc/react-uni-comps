---
title: useUpdateLayoutEffect 依赖更新时同步执行effect 
order: 13
group:
  title: Hooks
  order: 12
  path: hooks
---

# useUpdateLayoutEffect 依赖更新时同步执行effect 

```typescript
/**
 *  执行同步更新,dom更新后，绘制前执行
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
declare const useUpdateLayoutEffect: (effect: () => void, deps?: Array<unknown>) => void;
```