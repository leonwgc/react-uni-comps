#### [在线文档 (online docs)](https://leonwgc.github.io/react-uni-comps/base)

### 安装 (Installation)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点 (Features)

1. 组件丰富，体积小，自动按需加载 (rich components, small size and load on-demand)
2. 支持 pc 和移动端，同一套组件，一致的开发体验 (use in both mobile & pc environments)
3. 纯 react-hooks 实现, 拥抱 react 未来 (written in react hooks)
4. 样式采用 css-in-js (styles based on [styled-components](https://styled-components.com/), a css-in-js library)
5. 使用typescript编写，内置类型定义，开发智能提示 (written in [typescript](https://www.typescriptlang.org/) with predictable static types.)
6. 重新导出了三方组件/库/自定义 hooks 等，方便基于同一套技术栈开发 / 扩展 （re-export 3rd-party libs, easy to extend and customize with the same tech stack ）

### 按需加载 (Load On Demand)

支持基于 Tree Shaking 的按需加载，大部分构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking。

supports on-demand loading based on Tree Shaking, most build tools (such as webpack 4+ and rollup) support Tree Shaking.

### 主题色 (Theme)

使用ThemeProvider组件包裹根组件

```js
<ThemeProvider color="#409eff">
  <App>
</ThemeProvider>
```

### 样式 (Styles)

样式基于[styled-components](https://styled-components.com/), 一个流行的css-in-js 库
styles are based on [styled-components](https://styled-components.com/) , a popular react css-in-js lib

```js
import { Button, styled } from 'react-uni-comps';

const StyledButton = styled(Button)`
  width: 80px;
  height: 32px;
  border-radius: 4px;
`;

<StyledButton>Customized Button</StyledButton>;
```

### 三方库 (3rd party libs)

```js
// styled-components
import { styled, css, keyframes, createGlobalStyle } from 'react-uni-comps';

// clsx
import { clsx } from 'react-uni-comps';

// react-transition-group
import { CSSTransition, Transition, TransitionGroup } from 'react-uni-comps';

// react-spring
import { useSpring, animated, easings } from 'react-uni-comps';

// sortablejs
import { Sortable } from 'react-uni-comps';

// nanoid
import { nanoid } from 'react-uni-comps';
```
