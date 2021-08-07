pc 和 h5 通用组件集合,只包含结构和行为封装，不定义任何样式.

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install react-uni-comps
yarn add react-uni-comps
```

### 组件

#### 1. TransitionElement (给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画)

```js
// type def
export declare type Props = {
    children: React.ReactElement /** 应用transition动画的元素 */;
    duration?: number /** transition动画的时间 */;
    transitionProp?: string /** transition动画prop */;
    timingFunc?: string /** transition动画的时间函数 */;
    delay?: number /** transition动画延时时间 */;
    fromClass: 'from' /** transition动画开始执行的类名，默认会给元素加上from class,可以自定义类名 */;
    toClass: 'to' /** transition动画执行结束的类名，默认会给元素加上to class,可以自定义类名 */;
    once?: boolean /** 默认从第一次载入并可见/不可见到可见会执行动画 | once=true 只会第一次载入执行动画 | once=false 元素从不可见到可见状态就会执行过渡动画*/;
};
/** 给子元素添加初始加载过渡动画/不可见到可见状态的过渡动画 */
declare const TransitionElement: React.FC<Props>;
```

```js
 // css
  .test {
  width: 100px;
  height: 100px;
  background-color: blue;

  &.from {
    opacity: 0;
    transform: translate3d(200%, 0, 0);
  }
  &.to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

// js 元素加载可见后执行 from到to 的样式过渡效果
  <TransitionElement duration={400}>
     <div className="test"></div>
  </TransitionElement>
```

#### 2. AnimationElement(元素进入视口应用 animation 动画,不在视口则停止动画,属性参照 css animation)

```js
// types
export declare type Props = {
    children: React.ReactElement /** 应用animation动画的元素 */;
    duration?: number /** animation动画的持续时间 */;
    name: string /** animation动画 keyframe name */;
    timingFunc?: string /** animation动画 animation-timing-function*/;
    direction?: string /** animation动画 animation-direction */;
    delay?: number /** animation动画animation-delay*/;
    fillMode?: string /** animation动画animation-fill-mode */;
    iterationCount?: string | number /** animation动画 animation-iteration-count */;
};
/** 子元素进入视口应用animation动画,不在视口则停止动画 */
declare const AnimationElement: React.FC<Props>;
```

```js
// css
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

// js
 <AnimationElement duration={400} timingFunc="ease-out" name="move" fillMode="forwards">
        <Button type="primary" size="large">
          hello,world
        </Button>
      </AnimationElement>

      <AnimationElement duration={2000} timingFunc="linear" name="fly">
        <StyledBird></StyledBird>
      </AnimationElement>
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
export declare type Props = {
    dataList: Array<unknown> /** 数组数据 */;
    dataRender: (data: unknown, index: number) => React.ReactNode /** 数组数据项自定义render */;
    fetchData: () => Promise<unknown> /** ajax获取数据，返回Promise,当拉到底部，还有更多数据时调用 */;
    hasMoreData: boolean /** 指示是否还有更多数据 */;
    spinner?: React.ReactNode /** 加载中 spinner */;
    endText?: React.ReactNode /** 拉到底部，没有更多数据时显示的文本 */;
    style?: React.CSSProperties /** 容器 style */;
    className?: string /** 容器 class */;
    footerStyle?: React.CSSProperties /** 容器底部包含spinner/endText容器的style */;
};
/** 上滑加载更多数据 */
declare const Pullup: React.FC<Props>;
```

```js
const App = () => {
  const [list, setList] = useState([]);
  const [hasMoreData, sethasMoreData] = useState(true); //是否还有数据没加载
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

        if (ref.current > 6) {
          sethasMoreData(false); // 模拟没有更多数据
        }
        resolve();
      }, 100);
    });
  };

  return (
    <Space>
      <Pullup
        className="pull-wrapper"
        dataList={list}
        fetchData={fetchData}
        hasMoreData={hasMoreData}
        spinner={<Spin />}
        dataRender={(data) => {
          return <div className="item">list {data}</div>;
        }}
      ></Pullup>
      <Pullup
        style={{ height: '100vh', marginLeft: 100 }}
        className="pull-wrapper"
        dataList={list}
        endText="没有更多数据了!"
        fetchData={fetchData}
        hasMoreData={hasMoreData}
        spinner={<Spin />}
        footerStyle={{ height: 100 }}
        dataRender={(data, index) => {
          return <div className="item">list {index + 1}</div>;
        }}
      ></Pullup>
    </Space>
  );
};
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

#### 9. WaitLoading (延时显示 Loading/Spinner 防止闪烁)

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

#### 10. Spinner (加载中)

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
```

持续其他组件...
