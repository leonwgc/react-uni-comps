pc 和 h5 通用组件集合,只包含结构和行为封装，不定义任何样式.

安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install react-uni-comps
yarn add react-uni-comps
```

##### components

1. TransitionElement (组件加载/show/hide transition动画)

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
2. AnimationElement(对子组件执行动画,属性参照css animation)

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
    visible?: boolean;
    width?: string | number;
    showMask?: boolean;
    onMaskClick?: () => void;
    position: 'top' | 'bottom' | 'left' | 'center' | 'right';
    duration?: number;
    mountContainer?: () => HTMLElement;
    children?: React.ReactNode;
    [p: string]: unknown;
};
declare const Popup: React.FC<Props>;
```

```js
 <Popup position="center" width={500} visible={visible} onMaskClick={() => setVisible(false)}>
        <div style={{ border: '1px solid blue' }}>
          <p>hello,world</p>
        </div>
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
6. LazyLoadImage (当做img标签使用,懒加载图片)



to be continued ..
