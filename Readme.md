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
5. 基本样式使用 styled-components

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

#### 23. ScrollTop (平滑滚动到顶部)

#### 24. Popover (弹出带箭头的浮层)

#### 25. Tooltip (文字提示)

#### 26. Drag (拖拽)

#### 27. ThemeProvider (全局主题色配置)

#### 28. CopyToClipboard (复制文本到剪贴板)

#### 29. Toast (黑背景提示)

#### 30. Text (文本显示,单行/多行截断显示省略)

#### 31. Mask (遮罩层,组件内部使用)

#### 32. IconTick (勾勾), IconCross(x) , IconArrow(箭头) [内部使用]

#### 33. Affix (将页面元素钉在可视范围)

#### 34. NoticeBar (通告栏)

#### 35. ActionSheet (移动端,动作面板)

#### 36. AlertDialog (移动端/pc 端两种风格的 alert/confirm 弹窗)

#### 37. PasswordInput (移动端/pc, 密码输入框 )

#### 38. NumberKeyboard (移动端,数字/身份证虚拟键盘 )

#### 39. NumberKeyboardPicker (移动端, 数字/身份证虚拟键盘底部弹出)

#### 40. FingerGestureElement (移动端手势操作,onTap,onDoubleTap,onLongTap,onPinch, onSwipe,onPressMove 等手势支持)

#### 41. Input (单行/多行输入框)

#### 42. Picker (移动端选择器)

### 按需加载

支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking, 对于不支持 Tree Shaking 的构建工具(e.g. webpack4 以下)，可以采用下列方式按需加载

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
// 以Button组件为例
import Button from 'react-uni-comps/es/Button';
```

### 主题色设置

使用 ThemeProvider 设置

```js
<ThemeProvider color="#409eff">...</ThemeProvider>
```

持续更新其他组件...
