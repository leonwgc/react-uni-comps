---
title: useInViewport 监听元素是否在视口内
order: 10
group:
  title: Hooks
  order: 12
  path: hooks
---

# useInViewport 监听元素是否在视口内

```typescript
/**
 * 监听元素是否在视口内
 *
 * @param {RefObject<HTMLElement>} ref
 * @param {*} [rootRef=null]
 * @param {({
 *     rootMargin?: string;
 *     threshold?: number | number[];
 *   })} [options]
 * @return {*}  {boolean}
 */
declare function useInViewport(ref: RefObject<HTMLElement>, rootRef?: any, options?: {
    rootMargin?: string;
    threshold?: number | number[];
}): boolean;
```