桌面和移动端 react 组件库 [在线体验](https://leonwgc.github.io/react-uni-comps/base)

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点

1. 组件丰富，体积小，自动按需加载
2. 同时支持桌面和移动端，同一套组件，一致的开发体验
3. 纯 react-hooks 实现, 拥抱 react 未来
4. 样式采用 css-in-js 方案
5. 只提供基础样式,方便二次开发 / 定制 / 扩展
6. 使用 ts 编写，内置类型定义，开发智能提示
7. 可以和 antd / antd-mobile / zarm 等组件库搭配 / 替换使用
8. 重新导出了依赖组件/库/自定义 hooks 等，方便基于同一套技术栈开发 / 扩展

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
