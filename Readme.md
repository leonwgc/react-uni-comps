#### [在线文档 (online demo)](https://leonwgc.github.io/react-uni-comps/base)

### 安装 (Installation)

```js
npm install react-uni-comps --save
yarn add react-uni-comps
```

### 特点 (Features)

1. 组件丰富，体积小，自动按需加载 (rich components, small and load on-demand)
2. 支持 pc 和移动端，同一套组件，一致的开发体验 (supports both mobile & pc env)
3. 纯 react-hooks 实现, 拥抱 react 未来 (written in react hooks)
4. 样式采用 css-in-js (styles based on [styled-components](https://styled-components.com/), a css-in-js library)
5. 方便定制 / 扩展 (easy to extend and customize)
6. 使用 ts 编写，内置类型定义，开发智能提示 (written in [typescript](https://www.typescriptlang.org/) with predictable static types.)
7. 重新导出了三方组件/库/自定义 hooks 等，方便基于同一套技术栈开发 / 扩展 （reexport 3rd-party libs and inner functions, easy to extend and customize with the same tech stack ）

### 按需加载 (Load On Demand)

支持基于 Tree Shaking 的按需加载，大部分构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking。

supports on-demand loading based on Tree Shaking, most build tools (such as webpack 4+ and rollup) support Tree Shaking.

### 主题色 (Theme)

```js
<ThemeProvider color="#409eff">{children}</ThemeProvider>
```

### 样式 (Styles)

styles are based on [styled-components](https://styled-components.com/) , a popular react css-in-js lib

```js
import { Button, styled } from 'react-uni-comps';

const StyledButton = styled(Button)`
  width: 80px;
  height: 32px;
  border-radius: 4px;
`;

<StyledButton>my style button</StyledButton>;
```

### 三方库 (3rd party libs)

```js
// styled-components
import { styled } from 'react-uni-comps';

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
