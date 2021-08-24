pc 和 h5 通用组件集合,只包含结构和行为封装，不定义样式.

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install react-uni-comps
yarn add react-uni-comps
```

### 组件说明

#### 1. TransitionElement (给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画)

```js
// type
export declare type Props = {
    /** 作为组件，请使用React.forwardRef 将ref引到 dom, 或者使用HTMLElement */
    children: React.ReactElement;
    /** from到to动画执行的时间,单位ms,默认240ms */
    duration?: number;
    /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */
    fromClass?: 'from';
    /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */
    toClass?: 'to';
    /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/
    once?: boolean;
};
/** 子元素执行从from到to类名切换(过渡时间由duration定义) 定义这两个css类名，应用transition过渡 */
declare const TransitionElement: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
```

```js
import React, { useState } from 'react';
import { TransitionElement } from 'react-uni-comps';
import styled from 'styled-components';
import { Switch, Space } from 'antd';

const StyledDiv = styled.div`
  height: 100px;
  background-color: red;
  margin-top: 10px;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.to {
    width: 300px !important;
  }
`;

const StyledButton = styled.div`
  transform: scale(1, 1);
  transition: transform 0.3s ease, color 0.25s linear;
  width: 130px;
  height: 40px;
  display: inline-block;
  cursor: pointer;
  background: #39a0ff;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  text-align: center;
  line-height: 40px;
  color: rgb(0, 0, 0);

  &::after {
    content: '';
    position: absolute;
    left: 0;
    transition: transform 0.25s linear;
    width: 100%;
    height: 100%;
    transform: none;
    z-index: -1;
    background: #bbb;
  }

  &:hover,
  &.to {
    transform: scale(1.05, 1.05);
    color: #fff;

    &::after {
      transform: translateY(-100%);
    }
  }
`;

const Tansition = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);
  const [once, setOnce] = useState(true);

  return (
    <div>
      <Space>
        <TransitionElement duration={100}>
          <StyledButton>One</StyledButton>
        </TransitionElement>

        <StyledButton>Two</StyledButton>
      </Space>
      <div>
        <Space>
          <Switch defaultChecked onChange={setOnce} />
          once
        </Space>
      </div>
      {arr.map((item, k) => (
        <TransitionElement key={k} once={once}>
          <StyledDiv style={{ width: k * 10 }}>{item}</StyledDiv>
        </TransitionElement>
      ))}
    </div>
  );
};

export default Tansition;
```

#### 2. AnimationElement(元素应用 animation 动画,属性参照 css animation,也可以和 animate.css 配合使用,参考 https://animate.style/#usage using `@keyframes`)

```js
// types
export declare type Props = {
    children: React.ReactElement /** 应用动画的元素 */;
    duration?: string /** animation动画的持续时间,默认1s */;
    name: string /** animation动画 keyframe name, 默认none无动画 */;
    timingFunc?: string /** animation动画 animation-timing-function,默认 ease */;
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' /** animation动画 animation-direction ，默认 normal*/;
    delay?: string /** animation动画animation-delay， 默认0s */;
    fillMode?: 'none' | 'forwards' | 'backwards' | 'both' /** animation动画animation-fill-mode, 默认 backwards */;
    iterationCount?: 'infinite' | number /** animation动画 animation-iteration-count */;
    once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};
/** 子元素animation动画,可以结合animate.css使用,参考https://animate.style/#usage（请直接使用@keyframes)*/
declare const AnimationElement: React.FC<Props>;
```

```js
import React from 'react';
import { AnimationElement } from 'react-uni-comps';
import styled from 'styled-components';
import { Button, Space } from 'antd';
import 'animate.css';
import bird from './images/bird.png';

const StyledDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: red;
  margin-top: 10px;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes move {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(45deg);
    }
    50% {
      transform: rotate(90deg);
    }

    75% {
      transform: rotate(135deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const StyledBird = styled.span`
  background: url(${bird});
  background-size: 100% 100%;
  width: 143px;
  height: 132px;
  display: inline-block;
  @keyframes fly {
    from {
      transform: translate3d(0, 0, 0);
    }

    25% {
      transform: translate3d(0, -20px, 0);
    }

    50% {
      transform: translate3d(0, 0, 0);
    }

    75% {
      transform: translate3d(0, 20px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Animation = () => {
  let arr = Array.from(new Array(20), (v, k) => k + 1);

  return (
    <Space size={64} wrap>
      {arr.map((item, k) => (
        <AnimationElement
          key={k}
          name="move"
          duration="4s"
          fillMode="both"
          iterationCount="infinite"
        >
          <StyledDiv>{item}</StyledDiv>
        </AnimationElement>
      ))}
      <AnimationElement
        duration="400ms"
        timingFunc="ease-out"
        name="move"
        iterationCount="infinite"
        fillMode="forwards"
      >
        <Button type="primary" size="large">
          hello,world
        </Button>
      </AnimationElement>
      <AnimationElement duration="2s" iterationCount="infinite" timingFunc="linear" name="fly">
        <StyledBird></StyledBird>
      </AnimationElement>

      <AnimationElement
        name="fadeInLeft"
        once={false}
        duration="600ms"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        <Button type="primary">hello,wgc</Button>
      </AnimationElement>
      <AnimationElement
        name="fadeInLeft" // defined in animate.css
        duration="600ms"
        delay="1s"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        <div style={{ display: 'inline-block', width: 100, height: 100, border: '1px solid red' }}>
          hello
        </div>
      </AnimationElement>
      <AnimationElement
        name="fadeInLeft"
        duration="600ms"
        delay="1s"
        timingFunc="cubic-bezier(.68,-.55,.265,1.55)"
      >
        txt no effect
      </AnimationElement>
    </Space>
  );
};

export default Animation;
```

#### 3. Popup (弹框，可以从上，下，左，右，中间弹出)

```js
// types
export declare type Props = {
    visible?: boolean /** 是否可见 */;
    showMask?: boolean /** 是否显示遮罩 */;
    onMaskClick?: () => void /** 遮罩点击事件 */;
    position: 'top' | 'bottom' | 'left' | 'center' | 'right' /** 弹框弹出位置，从上，下，左，右，中间 弹出 */;
    duration?: number /** 弹出动画时间，默认240ms */;
    mountContainer?: () => HTMLElement /** 弹框mount位置，默认为document.body */;
    children?: React.ReactNode /** 弹框里面的内容 */;
    style?: React.CSSProperties /** 弹框style */;
    className?: string /** 弹框className */;
};
/** 弹框，可以从上，下，左，右，中间弹出 */
declare const Popup: React.FC<Props>;
```

```js
// 中间弹出，模拟弹框
<Popup
  position="center"
  style={{ width: 500, height: 200, backgroundColor: '#fff' }}
  visible={visible}
  onMaskClick={() => setVisible(false)}
>
  <div
    style={{
      display: 'flex',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    hello,world
  </div>
</Popup>

// 右侧弹出， 模拟drawer

 <Popup
        position="right"
        className="right-panel"
        visible={visible}
        onMaskClick={() => setVisible(false)}
      >
        <Pullup
          className="pull-wrapper"
          style={{ width: '100%', height: 'calc(100vh - 60px)', border: 'none' }}
          dataList={list}
          fetchData={fetchData}
          hasMoreData={hasMoreData}
          spinner={<Spin />}
          dataRender={(data) => {
            return <div className="item">list {data}</div>;
          }}
        ></Pullup>
      </Popup>
```

#### 4. Space (间距容器,参考 antd Space)

```js
// types
declare type Align = 'center' | 'flex-start' | 'flex-end' | 'baseline';
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: number | [number, number] /** 间距大小 */;
    direction?: 'horizontal' | 'vertical' /** 间距方向 */;
    align?: Align /** 对齐方式 */;
    split?: React.ReactNode /** 设置拆分 */;
    wrap?: boolean /** 是否自动换行，仅在 horizontal 时有效 */;
}
/** 间距容器,参考 https://ant.design/components/space-cn/ */
declare const Space: React.FC<SpaceProps>;
```

#### 5. LazyLoadElement（懒加载组件,在视口才渲染 children,不在则显示占位元素）

```js
// types
export declare type Props = {
    children: React.ReactElement /** 需要lazyload的组件 */;
    width?: string | number /** placeholder 宽度 */;
    height?: string | number /** placeholder 高度 */;
    style?: React.CSSProperties /** placeholder 样式 */;
    [p: string]: unknown;
};
/** 懒加载组件,在视口才渲染children,不在则显示占位元素 */
declare const LazyLoadElement: React.FC<Props>;
```

```js
<Space direction="vertical" size={16}>
  {arr.map((item, k) => (
    <LazyLoadElement key={k} width={400} height={200}>
      <img
        width={400}
        height={200}
        src={
          k % 2 == 0
            ? 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF'
            : 'https://t7.baidu.com/it/u=2582370511,530426427&fm=193&f=GIF'
        }
      ></img>
    </LazyLoadElement>
  ))}
</Space>
```

#### 6. LazyLoadImage (懒加载图片，当做 img 标签使用, 在视口才加载图片)

```js
// types
export declare type Props = React.ImgHTMLAttributes<HTMLImageElement>;
/** 懒加载图片，当做img标签使用, 在视口才加载图片 */
declare const LazyLoadImage: React.FC<Props>;
```

#### 7. Pullup (上滑加载更多数据)

```js
// types
import React from 'react';
export declare type Props = {
    dataList: Array<unknown> /** 数组数据 */;
    dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
    fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
    finished: boolean /** 指示是否还有更多数据,true没有更多,false还有 */;
    finishedText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
    loadingText?: React.ReactNode /** 加载中提示 */;
    style?: React.CSSProperties /** 容器 style */;
    className?: string /** 容器 class */;
};
/** 上拉加载更多数据, 注意：第一次加载数据应该撑满容器,否则会一直拉数据直到撑满容器 */
declare const Pullup: (props: Props) => React.ReactNode;
export default Pullup;
```

```js
import React, { useState, useRef } from 'react';
import { Pullup } from 'react-uni-comps';

// 第一次加载数据应该撑满容器,否则会一直拉数据直到撑满
const pageSize = 20;

const App = () => {
  const [list, setList] = useState([]);
  const [finished, setFinished] = useState(false);
  const ref = useRef(0);

  const fetchData = () => {
    return new Promise((resolve) => {
      var ar = [];
      for (var i = 0; i < pageSize; i++) {
        ar.push(ref.current * pageSize + i + 1);
      }
      setTimeout(() => {
        setList((d) => d.concat(ar));
        ref.current++;

        console.log(ref.current);

        if (ref.current > 5) {
          setFinished(true);
        }
        resolve();
      }, 900);
    });
  };

  return (
    <Pullup
      style={{ height: '100vh', width: '100vw', border: 'none', margin: '-16px' }}
      dataList={list}
      finishedText="没有更多数据了!"
      fetchData={fetchData}
      finished={finished}
      dataRender={(data, index) => {
        return (
          <div style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0' }}>
            list {index + 1}
          </div>
        );
      }}
    ></Pullup>
  );
};

export default App;
```

#### 8. HairLineBox (包含 1px 的边的容器 div)

```js
  // types
/** 显示1px的边 */
export declare type Position = 'top' | 'right' | 'bottom' | 'left';
export declare type Props = {
    position: Position /** 显示1px的边，默认为 bottom 底部 */;
    color: string /** 1px边的颜色,默认 #dcdcdc 浅灰色 */;
};
/** 包含1px的边的容器div */
declare const HairLineBox: React.FC<Props>;
```

模拟移动端输入框

```js
<HairLineBox>
  <input
    placeholder="请输入姓名"
    style={{
      height: 44,
      lineHeight: 44,
      border: 'none',
      outline: 'none',
      display: 'block',
      width: '100%',
    }}
  ></input>
</HairLineBox>
```

#### 9.WaitLoading (延时显示 Loading/Spinner 防止闪烁)

```js
export declare type Props = {
    wait?: number /** 渲染spinner前等待时间, default 600ms，时间到了并且visible为true才显示spinner子元素 */;
    visible: boolean /** 是否显示spinner */;
    children: React.ReactElement /** spinner 子元素 */;
};
/**  等待了wait毫秒后，如果visible还是true才显示spinner, 防止spinner闪烁 */
declare const WaitLoading: React.FC<Props>;
```

```js
// loading为true且过了默认的600ms后还是true才显示Spin
const [loading, setLoading] = useState(false);
<WaitLoading visible={loading}>
  <Spin />
</WaitLoading>;
```

```js
// loading为true且过了默认的1s后还是true才显示Spin
const [loading, setLoading] = useState(false);
<WaitLoading visible={loading} wait={1000}>
  <div className="wait-loading">
    <Spin />
  </div>
</WaitLoading>;
```

#### 10.Spinner（加载中）

```js
// types
export declare type Props = {
    size: number /** 圈圈大小,应用到font-size,默认16 */;
    color: string /** 圈圈颜色,默认 #606060 */;
};
/** Spinner 加载中 */
declare const Spinner: React.FC<Props>;
```

```js
        <Spinner></Spinner>
        <Spinner size={32}></Spinner>
        <Spinner color="red"></Spinner>
        <Spinner color="red" size={48}></Spinner>
        <Spinner color="#004bcc"></Spinner>
        <Spinner color="#004bcc" size={48}></Spinner>
        <Button onClick={() => setC(true)}>show center</Button>
        <Button onClick={() => setL(true)}>show left</Button>
        <Button onClick={() => setT(true)}>show top</Button>
```

#### 11.Tabs（标签页）

```js
// types
declare type TabProp = {
    disabled?: boolean;
    title: React.ReactNode;
    children: React.ReactElement;
};
declare const Tab: React.FC<TabProp>;
declare type TabsProp = {
    lineWidth?: number | string /** 下划线宽度 */;
    themeColor?: string /** 主题色， 影响active tab标题颜色，和下划线颜色 */;
    children: React.ReactElement[];
    defaultIndex?: number /** 默认选择的tab,默认0,第一个 */;
    [p: string]: unknown;
} & React.HTMLAttributes<HTMLElement>;
declare const Tabs: React.FC<TabsProp> & {
    Tab: typeof Tab;
};
```

```js
<Tabs lineWidth={40} themeColor="#004bcc">
        <Tabs.Tab title="title1">
          <StyledContent>content1</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title2">
          <StyledContent>content2</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title3">
          <StyledContent>
            <AnimationElement name="fadeInRight" duration=".24s">
              <Spinner color="#004bcc" size={48}></Spinner>
            </AnimationElement>
          </StyledContent>
        </Tabs.Tab>
        <Tabs.Tab
          title={
            <span>
              <Spinner></Spinner> loading...
            </span>
          }
        >
          <StyledContent> loading content</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title5">
          <StyledContent>content5</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title6" disabled></Tabs.Tab>
        <Tabs.Tab title="title7">
          <StyledContent>content7</StyledContent>
        </Tabs.Tab>
      </Tabs>

      <Tabs
        lineWidth={0}
        style={{ marginTop: 30 }}
        themeColor="#004bcc"
        defaultIndex={2}
        className="my-tab"
      >
        <Tabs.Tab title="title1">
          <StyledContent>content1</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title2">
          <StyledContent>content2</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title3">
          <StyledContent>
            <AnimationElement name="fadeInRight" duration=".24s">
              <Spinner color="#004bcc" size={48}></Spinner>
            </AnimationElement>
          </StyledContent>
        </Tabs.Tab>
        <Tabs.Tab
          title={
            <span>
              <Spinner></Spinner> loading...
            </span>
          }
        >
          <StyledContent> loading content</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title5">
          <StyledContent>content5</StyledContent>
        </Tabs.Tab>
        <Tabs.Tab title="title6" disabled></Tabs.Tab>
        <Tabs.Tab title="title7">
          <StyledContent>content7</StyledContent>
        </Tabs.Tab>
      </Tabs>
```

#### 12.Cell（列表项，多用于移动端,可以和 input/textarea 组合使用）

```js
// types
export declare type Props = {
    label?: React.ReactNode /** 标题 */;
    content?: React.ReactNode /** 内容 */;
};
/** 列表项，通常用于移动端 */
declare const Cell: React.FC<Props>;
```

```js
 // usage
 const [v, setV] = useState('');

     <Cell label="姓名" content="汪guochao"></Cell>
        <Cell label="username">
          <input type="text" placeholder="username" />
        </Cell>
        <Cell label="antd输入框">
          <Input placeholder="antd输入框" />
          <QuestionCircleOutlined />
        </Cell>
        <Cell label="邮箱地址">
          <Input placeholder="邮箱地址" />
          @126.com
        </Cell>
        <Cell label="多行文本">
          <textarea
            placeholder="多行文本"
            maxLength={60}
            value={v}
            onChange={(e) => setV(e.target.value)}
          />
          <span>{v.length}/60</span>
        </Cell>
```

#### 13. Skeleton（骨架屏）

```js
// types
export declare type Props = {
    children: React.ReactNode;/** loading结束渲染的元素 */;
    animate?: boolean /** 是否显示动画效果，默认显示 */;
    row: number /** 几行，默认4行, 最小1行 */;
    rowWidth: string | string[] /** 每一行宽度，默认 ['40%','100%','100%','60%']，设置为string,则每一行都一样长 */;
    rowHeight: number /** 矩形条高度,默认16px*/;
    avatar?: boolean /** 是否显示头像，默认不显示 */;
    avatarSize?: number /** 头像大小，默认32px */;
    loading?: boolean /** loading为true显示骨架，false则显示子元素*/;
} & React.HTMLAttributes<HTMLElement>;
/** 骨架屏 */
declare const Skeleton: (props: Props) => React.ReactNode;
```

```js
// usage
import React from 'react';
import styled from 'styled-components';
import { Switch, Avatar, Image } from 'antd';
import { Skeleton } from 'react-uni-comps';
import { useState } from 'react';

const StyledContent = styled.div`
  padding: 20px;

  .article {
    margin-top: 20px;
    display: flex;
    .l {
      flex: 0;
    }
    .r {
      flex: 1;
      margin-left: 16px;
      padding-top: 8px;
    }
  }
`;

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);

  return (
    <StyledContent>
      <div>
        <Switch checked={loading} onChange={setLoading}></Switch> loading
      </div>

      <Skeleton avatar loading={loading} className="article">
        <div className="article">
          <div className="l">
            <Avatar
              src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            />
          </div>
          <div className="r">
            <div> 自 2017 年以来，暴雪的每月平均活跃用户基数从 4600 万降至 2600 万</div>
            <div>
              最近几周，许多《魔兽世界》的玩家离开游戏转而加入《最终幻想 14》，这使得《最终幻想
              14》打破了 Steam 最高同时在线人数的记录。
            </div>
          </div>
        </div>
      </Skeleton>
    </StyledContent>
  );
}
```

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
