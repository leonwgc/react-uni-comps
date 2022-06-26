####[在线体验 (online demo)](https://leonwgc.github.io/react-uni-comps/base)

### 安装 (Installation) 

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点 (Features)

1. 组件丰富，体积小，自动按需加载 (rich components, tiny size and load on-demand)
2. 同时支持桌面和移动端，同一套组件，一致的开发体验 (supports both mobile & desktop)
3. 纯 react-hooks 实现, 拥抱 react 未来 (written in react hooks)
4. 样式采用 css-in-js (written in [styled-components](https://styled-components.com/), a css-in-js library)
5. 只提供基础样式,方便二次开发 / 定制 / 扩展 (easy to extend and customize)
6. 使用 ts 编写，内置类型定义，开发智能提示 (written in [typescript](https://www.typescriptlang.org/) with predictable static types.)
7. 可以和 antd / antd-mobile / zarm 等组件库搭配使用 (work together well with other UI libs )
8. 重新导出了三方组件/库/自定义 hooks 等，方便基于同一套技术栈开发 / 扩展 （re-export 3-party libs and internal functions. easy to extend and customize with the same stack ）

### 按需加载 (Import On Demand)

支持基于 Tree Shaking 的按需加载，大部分构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking。

supports on-demand loading based on Tree Shaking, most of the build tools (such as webpack 4+ and rollup) support Tree Shaking.


### 主题色 (Theme)

```js
<ThemeProvider color="#409eff">
  {children}
</ThemeProvider>
```

### 自定义样式 (Styles)
styles is based on [styled-components](https://styled-components.com/) , a popular react css-in-js  lib

```js
import { Button, styled } from 'react-uni-comps';

const StyledButton = styled(Button)`
  width: 80px;
  height: 32px;
  border-radius: 4px;
`;

<StyledButton>my style button</StyledButton>;
```

### 引用三方库 (import 3-party libs)

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

### 参考 (references)

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
