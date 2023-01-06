---
title: observe 监视dom元素在文档视口的可见性
order: 8
group:
  title: 工具函数
  order: 13
  path: utils
---

# observe 监视 dom 元素在文档视口的可见性

```typescript
/**
 * 使用IntersectionObserver监视dom元素在文档视口的可见性
 *
 * @param {Element} el 监听dom元素
 * @param {Handler} action 元素isIntersecting状态变化回调
 */
export declare const observe: (el: Element, action: Handler) => void;

/**
 * 取消监视
 *
 * @param {Element} el
 */
export declare const unobserve: (el: Element) => void;
```
