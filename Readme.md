桌面和移动端react库 [在线体验](https://leonwgc.github.io/react-uni-comps/)

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点

1. 组件丰富，体积小，自动按需加载
2. 同时支持桌面和移动端，一套组件，一致的开发体验
3. 纯react-hooks实现, 拥抱react未来
4. 样式采用css-in-js方案
5. 只提供基础样式,方便二次开发/组件定制、扩展
6. 使用ts编写，内置类型定义，良好的开发智能提示
7. 可以和antd,antd-mobile, zarm 等搭配、替换使用
8. 除了组件，同时导出了依赖组件/库/自定义hooks等，方便基于同一套技术栈开发/扩展组件

## 组件列表

#### 基础组件

- Button (按钮)
- Space (间距)
- Avatar (头像)
- Icon (图标)
- Spin（加载中）
- Mask (遮罩)
- Divider (分割线)
- HairLineBox (一像素边框容器)

#### 反馈

- Modal (弹框)
- AlertDialog (alert/confirm弹框)
- Tooltip (提示)
- Pullup (上拉加载)
- PullToRefresh (下拉刷新)
- Toast (轻提示)
- PopConfirm（气泡确认框）
- Notify （顶部消息通知）
- Popover (气泡框)
- Drag （拖拽）
- ActionSheet （动作面板）
- Skeleton （骨架屏）
- CopyToClipboard （复制）
- WaitLoading （延迟渲染子元素）
- Loading （弹框加载中）
- Empty (空状态)
- Result (结果)

#### 导航和布局
- AutoCenter (自动居中)
- Collapse (折叠面板)
- Divider (分割线)
- IndexList (索引列表)
- Drawer (抽屉)
- SafeArea (安全区)
- Tabs (选项卡)
- Affix (固钉)
- PopMenu (弹出菜单)
- Pagination (分页)
- SideBar (侧边tab导航)

### 数据录入

- Form (表单)
- Checkbox (复选框)
- CheckboxGroup (复选框列表)
- Radio (单选框)
- RadioGroup (单选框列表)
- Input (输入框)
- Switch (开关)
- PasswordInput (密码输入框 )
- NumberKeyboard (数字键盘)
- Picker (选择器)
- PickerView (平铺选择器)
- Rate (评分)
- FileInputTrigger (触发文件上传)
- Signature (手写签名)
- DatePicker (移动端日期选择)
- Calendar (移动端日历)
- IndexList (索引列表)
- Stepper (步进器)
- SearchBar (搜索框)
- InputNumber (数字输入框)

### 数据展示

- Cell（列表项）
- Badge (徽标)
- WaterMark (图片/文字水印 )
- Text (文本显示,单行/多行截断显示省略)
- ImageViewer (图片查看器)
- QRCode (二维码)
- ProgressBar (进度条)
- ProgressCircle (环形进度条)
- Slide (轮播)
- NoticeBar (通告栏)
- NoticeList (多条信息垂直滚动通知栏)
- RollingNumber (滚动数字)
- Steps (步骤条)

### 动画 / 效果

- TransitionElement (给子元素添加出场过渡效果,出场包含 1.元素初次加载并可见 2.元素从不可见到可见的状态变化)
- AnimationElement(元素应用 animation 动画,和 TransitionElement 一样，只有在元素出现在视口才会执行动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)
- Ripple (给子元素添加点击波纹效果)

### 手势
- TouchElement (双击，长按，旋转，缩放，平移等)
- SortableList (拖拽排序列表)

### 其他组件

- ThemeProvider (全局主题色配置)
- LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）
- LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)
- ErrorBoudary （错误边界）
- Waypoint （可见/不可见指示）

### 工具函数

- debounce (防抖)
- throttle (节流)
- loadResource(动态加载 js/css 文件)
- observe (使用 IntersectionObserver 监视 dom 元素在文档视口的可见性)
- unobserve (取消 observe 监控)
- uniqArray (数组去重)
- flatSimpleArray (扁平化简单数组)
- flatArray (扁平化对象数组)
- copy (复制文本)
- nanoid (生成随机字符串)

### 常量

- isBrowser(是否是浏览器)
- isMobile (是否是移动端)

### Hooks

- useUpdateEffect (执行异步更新 effect)
- useUpdateLayoutEffect (执行同步更新 effect)
- usePrevious (使用前一个值)
- useDebounce （返回 memorized 防抖函数）
- useThrottle （返回 memorized 节流函数）
- useInViewport (监听元素是否在视口内)
- useVisibleObserve (监视元素在文档视口的可见性，可见性变化时触发回调)
- useCallbackRef (保存最新的值在 ref 中)
- useCountdown (倒计时，常用于获取验证码)
- useMount (组件加载执行回调)
- useUnmount (组件卸载执行回调)
- useForceUpdate (强制render组件)

### 按需加载

支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking, 对于不支持 Tree Shaking 的构建工具(e.g. webpack4 以下)，可以采用下列方式按需加载

1. 搭配 babel-plugin-import (不推荐,建议升级到 webpack4+/rollup/vite)

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

### 设置主题色

使用 ThemeProvider 设置

```js
<ThemeProvider color="#409eff">...</ThemeProvider>
```

### 自定义样式

```js
import { Button, styled } from 'react-uni-comps';

const StyledButton = styled(Button)`
  width: 80px;
  height: 32px;
  border-radius: 4px;
`;

<StyledButton type="primary" loading>
  waiting
</StyledButton>;
```

### 引用内部三方库

```js
// styled-components
import { styled } from 'react-uni-comps';

// clsx
import { clsx } from 'react-uni-comps';

// react-transition-group
import { CSSTransition, Transition, TransitionGroup } from 'react-uni-comps';

// react-spring
import { useSpring, animated, easings } from 'react-uni-comps';
```

### 参考

- [Ant Design](https://ant.design/)
- [Ant Design Mobile](https://next.mobile.ant.design/)
- [Zarm](https://zarm.gitee.io/)
- [Vant](https://vant-contrib.gitee.io/vant/#/zh-CN/home)
- [Zent](https://youzan.github.io/zent/zh/guides/install)
- [Material UI](https://material-ui.com/zh/)
- [Welcome UI](https://www.welcome-ui.com/)
- [NutUI](https://nutui.jd.com/3x/#/)
- [Blueprint](https://blueprintjs.com/)
- [Bootstrap](https://getbootstrap.com/)

持续更新优化中...
