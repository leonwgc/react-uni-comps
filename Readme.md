桌面和移动端react库 [在线体验](https://leonwgc.github.io/react-uni-comps/)

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点

1. 组件丰富，体积小，自动按需加载
2. 同时支持桌面和移动端，同一套组件，一致的开发体验
3. 纯react-hooks实现, 拥抱react未来
4. 样式采用css-in-js方案
5. 只提供基础样式,方便二次开发 / 定制 / 扩展
6. 使用ts编写，内置类型定义，开发智能提示
7. 可以和 antd / antd-mobile / zarm 等组件库搭配 / 替换使用
8. 重新导出了依赖组件/库/自定义hooks等，方便基于同一套技术栈开发 / 扩展

[组件在线文档](https://leonwgc.github.io/react-uni-comps/)

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

### react-hooks

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
