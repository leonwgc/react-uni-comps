---
title: loadResource 动态加载 js/css文件
order: 7
group:
  title: 工具函数
  order: 13
  path: utils
---

# loadResource 动态加载 js/css文件

```typescript
/**
 * 动态加载 js/css文件
 *
 * @param {string} url
 * @param {*} [attrs={}] 额外的属性设置
 * @return {*}  {Promise<void>}
 */
export declare const loadResource: (url: string, attrs?: {}) => Promise<void>;
```