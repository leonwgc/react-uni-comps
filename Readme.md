桌面和移动端 react 组件库

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点

1. 体积小,组件按需加载
2. 同时支持桌面和移动端，同一套组件，一致的开发体验
3. 完全使用 hooks 实现, 拥抱 react 未来
4. 样式采用 css-in-js 方案 (styled-components)
5. 只提供最基础的框架样式,方便二次开发/定制自己的组件风格
6. 使用 TypeScript 编写，内置 TypeScript 类型定义文件，良好的智能提示
7. 可以和桌面端组件库如 antd，移动端 antd-mobile/zarm 搭配使用，按需加载用到什么才加载什么，无需配置
8. 重新导出了依赖库供开发者使用，比如 clsx,react-transition-group,styled-components 等
9. 导出了组件库内部实现的一些工具函数/hooks 函数等，比如 debounce, throttle,usePrevious, useInViewport

### 适用场景

1. 需要支持 pc/h5 动态切换主题色，pc 组件库如 antd 不支持 js 动态切换主题，本库采用 styled-components 定义样式，可以使用导出的 ThemeProvider 动态设置主题色

```js
<ThemeProvider color="#409eff">
  <App />
</ThemeProvider>
```

2. 需要完全定制组件样式。本库只提供最基础的样式，组件最终的样子需要自己实现，例如 modal 弹窗组件

```js
<Modal
  visible={visible}
  closable
  style={{ width: 600, height: 300 }}
  onClose={onClose}
  header={<h3>头部</h3>} //不定义则没有
  footer={
    //不定义则没有
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Space>
        <Button type="primary" onClick={onClose}>
          保存
        </Button>
        <Button onClick={onClose}>取消</Button>
      </Space>
    </div>
  }
>
  <div>body 区域</div>
</Modal>
```

3. 不想使用 css/less/sass，偏向 css-in-js 技术的开发者

4. 开发同时支持 pc 和 h5 的页面，pc 和 h5 同一套组件库，同一套技术方案，一致的开发体验，本库组件同时支持 pc 和 h5，按需加载，体积小巧

5. 当前使用的组件库不包含某些组件或者某些组件很难使用，本库包含的/易用的，

### 注意点

## 组件列表

#### 基础组件

- Button (按钮)
- Mask (遮罩)
- Divider (分割线)
- Space (间距容器)
- HairLineBox (包含 1px 的边的容器 div)
- Avatar (头像)
- Icon (图标,包含加载在 iconfont.cn 上自行管理的图标)

#### 操作反馈

- Drawer (抽屉)
- Modal (弹框)
- Pullup (上拉加载数据)
- AlertDialog (移动端/pc 端两种风格的 alert/confirm 弹窗,支持静态调用)
- Popover (弹出带箭头的浮层)
- Drag (拖拽)
- Tooltip (文字提示)
- PopConfirm (弹出气泡式的确认框)
- Toast (黑背景提示,支持静态调用)
- Notify (顶部全局消息通知,支持静态调用)
- ActionSheet (移动端,动作面板)
- FingerGestureElement (移动端手势操作,onTap,onDoubleTap,onLongTap,onPinch, onSwipe,onPressMove 等手势支持)
- Switch (开关)
- Skeleton（骨架屏）
- CopyToClipboard (复制文本到剪贴板)
- Spin（加载中指示器）
- ScrollTop (平滑滚动到顶部)

#### 导航组件

- Tabs (选项卡切换)
- Affix (将页面元素钉在可视范围)
- Steps (步骤条)
- PopMenu (弹出菜单)

### 数据录入

- Checkbox (复选框)
- CheckboxGroup (复选框列表)
- Radio (单选框)
- RadioGroup (单选框列表)
- Input (单行/多行输入框)
- PasswordInput (移动端/pc, 密码输入框 )
- NumberKeyboardBase (数字键盘,非弹出 )
- NumberKeyboard (数字键盘)
- Picker (移动端选择器)
- PickerView (平铺选择器)
- Rate (评分/几颗星)
- IndexList (索引列表)
- FileInputTrigger (触发文件上传)
- Signature (手写签名)
- DatePicker (移动端日期选择)
- Calendar (移动端日历)

### 数据展示

- Cell（列表项，多用于移动端,可以和 input/textarea 组合使用）
- Badge (徽标)
- WaterMark (图片/文字水印 )
- Text (文本显示,单行/多行截断显示省略)
- ImageViewer (图片查看器)
- ProgressCircle (环形进度条)
- ProgressBar (进度条)
- QRCode (二维码)
- Collapse (折叠面板)
- Slide (轮播)
- NoticeBar (通告栏)
- NoticeList (多条信息垂直滚动通知栏)

### 动画/过渡

- TransitionElement (给子元素添加出场过渡效果,出场包含 1.元素初次加载并可见 2.元素从不可见到可见的状态变化)
- AnimationElement(元素应用 animation 动画,和 TransitionElement 一样，只有在元素出现在视口才会执行动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)

### 其他组件

- ThemeProvider (全局主题色配置)
- LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）
- LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)
- WaitLoading (延时显示 Loading/Spin 防止闪烁)
- ErrorBoudary （错误边界）
- Waypoint （可见/不可见指示）

### 工具函数

- debounce (防抖)
- throttle (节流)
- loadResource(动态加载 js/css 文件)
- observe (使用 IntersectionObserver 监视 dom 元素在文档视口的可见性)
- unobserve (取消 observe 监控)

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
