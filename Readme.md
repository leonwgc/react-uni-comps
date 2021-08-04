pc 和 h5 通用组件集合,只包含结构和行为封装，不定义任何样式.

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install react-uni-comps
yarn add react-uni-comps
```

##### components

1. TransitionElement (组件加载/show/hide transition 动画)

```js
// type def
export declare type Props = {
    children: React.ReactElement;
    duration?: number;
    transitionProp?: string;
    timingFunc?: string;
    delay?: number;
    fromClass: 'from';
    toClass: 'to';
    once?: boolean;
};
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

2. AnimationElement(对子组件执行动画,属性参照 css animation)

```js
// types
export declare type Props = {
    children: React.ReactElement;
    duration?: number;
    name: string;
    timingFunc?: string;
    direction?: string;
    delay?: number;
    fillMode?: string;
    iterationCount?: string | number;
};
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

3. Popup (弹出)

```js
// types
export declare type Props = {
    visible?: boolean; // 是否可见
    showMask?: boolean; // 是否显示灰色遮罩,默认显示
    onMaskClick?: () => void; // 遮罩点击handler
    position: 'top' | 'bottom' | 'left' | 'center' | 'right'; // 显示位置 ,左右可以模拟drawer , 中间模拟 dialog，上下模拟 message/popup
    duration?: number; // 过渡动画时长ms
    mountContainer?: () => HTMLElement; // 载入容器，默认document.body
    children?: React.ReactNode;
    style?: React.CSSProperties;  // 容器样式
    className?: string; // 容器class
};
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

4. Space (参考 antd Space)

5. LazyLoadElement（懒加载子组件）

```js
// types
export declare type Props = {
    children: React.ReactElement;
    width?: string | number;
    height?: string | number;
    [p: string]: any;
};
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

6. LazyLoadImage (当做 img 标签使用,懒加载图片)

7. Pullup (滚动加载)

```js
// types
export declare type Props = {
    dataList: Array<unknown>; // 数组数据
    dataRender: (data: unknown, index: number) => React.ReactNode; // 每一项数据渲染
    fetchData: () => Promise<unknown>; // ajax 请求获取数据 ,第一次加载/加载到容器底部调用
    hasMoreData: boolean; // 是否还有更多数据
    spinner?: React.ReactNode; // ajax 拉数据时，底部显示的loading提示
    endText?: React.ReactNode; // 拉到底部 没有更多数据显示的文字提示
    style?: React.CSSProperties; // 滚动容器样式, 请设置overflow-y:scroll,height
    className?: string; // 滚动容器类名
    footerStyle?: React.CSSProperties; // footer 样式
};
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
