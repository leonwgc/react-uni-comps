---
title: getThemeColorCss 获取包含主题色的css片段
order: 10
group:
  title: 工具函数
  order: 13
  path: utils
---

# getThemeColorCss 获取包含主题色的css片段

```typescript
/**
 *  获取包含主题色的css片段
 * @param prop 属性
 * @param leftValue 属性值 (左侧部分)
 * @returns
 */
export declare const getThemeColorCss: (prop: string, leftValue?: string) => any;


/** e.g. */
const StyledButton = styled(Button)`
  &.fill {
    &.checked.default {
      ${getThemeColorCss('background-color')}
      ${getThemeColorCss('border-color')}
      color: #fff;
    }
  }
  &.outline {
    &.checked {
      ${getThemeColorCss('border-color')}
      ${getThemeColorCss('color')}
    }
  }
  &:not(:first-child) {
    margin-left: 8px;
  }
`;

```
