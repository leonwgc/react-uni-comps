---
title: useUpdateEffect 依赖更新时异步执行effect 
order: 12
group:
  title: Hooks
  order: 12
  path: hooks
---

# useUpdateEffect 依赖更新时异步执行effect 

```typescript
/**
 *  执行异步更新, dom更新绘制后执行
 *
 * @param {() => void} effect
 * @param {Array<unknown>} [deps=[]]
 */
declare const useUpdateEffect: (effect: () => void, deps?: Array<unknown>) => void;
```