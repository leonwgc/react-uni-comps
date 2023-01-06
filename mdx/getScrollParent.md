---
title: getScrollParent 获取最近的滚动父元素
order: 6
group:
  title: 工具函数
  order: 13
  path: utils
---

# getScrollParent 获取最近的滚动父元素

```typescript
/**
 *
 * 获取最近的滚动父元素，如果没有，则返回root, root默认是window
 *
 * @export
 * @param {Element} el
 * @param {(ScrollElement | null | undefined)} [root=window]
 * @return {*}
 */
export declare function getScrollParent(el: Element, root?: ScrollElement | null | undefined): ScrollElement;
```