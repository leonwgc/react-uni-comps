桌面和移动端通用组件集合,包含结构和行为封装，不定义样式.

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps
yarn add react-uni-comps
```

### 特点

1. 支持按需加载
2. 支持桌面和移动端
3. 支持动态切换主题色
4. 只支持 react>=16.8 版本，使用 hooks 实现

### 组件说明

#### 1. TransitionElement (给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画)

#### 2. AnimationElement(元素应用 animation 动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)

#### 3. Popup (弹框，可以从上，下，左，右，中间弹出)

#### 4. Space (间距容器,参考 antd Space)

#### 5. LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）

#### 6. LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)

#### 7. Pullup (滚动加载更多数据)

#### 8. HairLineBox (包含 1px 的边的容器 div)

#### 9.WaitLoading (延时显示 Loading/Spinner 防止闪烁)

#### 10.Spinner（加载中）

#### 11.Tabs（标签页）

#### 12.Cell（列表项，多用于移动端,可以和 input/textarea 组合使用）

#### 13. Skeleton（骨架屏）

#### 14. Button (按钮)

#### 15. Tabs (选项卡切换)

#### 16. Divider (分割线)

#### 17. Checkbox (选择状态)

#### 18. ErrorBoudary （错误边界）

#### 19. Switch (开关)

#### 20. Waypoint （可见/不可见指示）

#### 21. FileInputTrigger (触发文件上传)

#### 22. IndexList (索引列表)

#### 23. Slide (轮播焦点图/全屏分页)

#### 24. ScrollTop (平滑滚动到顶部)

#### 25. Popover (弹出带箭头的浮层)

#### 26. Tooltip (文字提示)

#### 27. Drag (拖拽)

#### 28. ThemeProvider (全局主题色配置)

#### 29. CopyToClipboard (复制文本到剪贴板)

#### 30. Toast (黑背景提示)

#### 31. Text (文本显示,单行/多行截断显示省略)

#### 32. Backdrop (遮罩层,组件内部使用)

#### 33. IconTick (勾勾), IconCross(x) , IconArrow(箭头) [内部使用]

#### 34. Affix (将页面元素钉在可视范围)

#### 35. NoticeBar (通告栏)

### 按需加载

1. 搭配 babel-plugin-import

```js
  plugins: [
    [
      'import',
      {
        libraryName: 'react-uni-comps',
        libraryDirectory: 'es',
        camel2DashComponentName: false,
      },
    ],
  ],
```

2. 直接引用组件

```js
import xxx from 'react-uni-comps/es/xxx';
```

持续其他组件...
